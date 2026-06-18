import { createServerFn } from "@tanstack/react-start";
import { readFile, writeFile, mkdir, readdir, unlink, stat } from "node:fs/promises";
import { join, basename } from "node:path";
import fallbackContent from "../data/content.json";

// Keep track of whether database check/seeding has been run once on start
let isDbInitialized = false;

async function ensureDbReady() {
  const db = await import("./db");
  if (!isDbInitialized) {
    await db.initializeDatabase();
    isDbInitialized = true;
  }

  return db;
}

// Get Content Server Function
export const getContent = createServerFn({ method: "GET" }).handler(async () => {
  try {
    if (!process.env.DATABASE_URL) {
      console.warn("DATABASE_URL environment variable is missing. Using static fallback content.");
      return fallbackContent;
    }

    const { sql } = await ensureDbReady();
    
    // Query content from Neon DB
    const results = await sql`
      SELECT content FROM site_content WHERE id = 1 LIMIT 1;
    `;
    
    if (results.length > 0) {
      return results[0].content;
    }
    
    return fallbackContent;
  } catch (error: any) {
    console.error("Error reading content from Neon DB, returning static default fallback.", error);
    return fallbackContent;
  }
});

// Save Content Server Function
export const saveContent = createServerFn({ method: "POST" })
  .validator((data: { content: any; token: string }) => data)
  .handler(async ({ data }) => {
    const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
    if (!data.token || data.token !== expectedPassword) {
      throw new Error("Unauthorized");
    }

    if (!data.content || typeof data.content !== "object") {
      throw new Error("Invalid content data structure");
    }

    try {
      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is missing. Cannot save changes.");
      }

      const { sql } = await ensureDbReady();
      
      // Upsert into Neon DB
      await sql`
        INSERT INTO site_content (id, content, updated_at)
        VALUES (1, ${data.content as any}, CURRENT_TIMESTAMP)
        ON CONFLICT (id)
        DO UPDATE SET content = ${data.content as any}, updated_at = CURRENT_TIMESTAMP;
      `;
      
      // Optional: write locally to content.json as a local cache/fallback (expected to fail on serverless)
      try {
        const contentPath = join(process.cwd(), "src", "data", "content.json");
        await writeFile(contentPath, JSON.stringify(data.content, null, 2), "utf-8");
      } catch (writeErr: any) {
        console.warn("Could not write local backup copy of content.json (expected in serverless):", writeErr.message);
      }
      
      return { success: true };
    } catch (error: any) {
      console.error("Error saving content to database:", error);
      throw new Error("Failed to save content: " + error.message);
    }
  });

// Validate Admin Password
export const checkAdminAuth = createServerFn({ method: "POST" })
  .validator((data: { password?: string }) => data)
  .handler(async ({ data }) => {
    const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
    if (data.password && data.password === expectedPassword) {
      return { authenticated: true, token: expectedPassword };
    }
    return { authenticated: false, error: "Incorrect password" };
  });



// Get Uploaded Media Files List
export const getMediaFiles = createServerFn({ method: "POST" })
  .validator((data: { token: string }) => data)
  .handler(async ({ data }) => {
    const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
    if (!data.token || data.token !== expectedPassword) {
      throw new Error("Unauthorized");
    }

    try {
      const uploadDir = join(process.cwd(), "public", "uploads");
      await mkdir(uploadDir, { recursive: true });
      
      const filenames = await readdir(uploadDir);
      const files = [];

      for (const filename of filenames) {
        const filePath = join(uploadDir, filename);
        // Skip directories (if any)
        const fileStat = await stat(filePath);
        if (!fileStat.isFile()) continue;

        const ext = filename.split(".").pop()?.toLowerCase() || "";
        const isVideo = ["mp4", "webm", "ogg", "mov", "mkv", "avi"].includes(ext);
        const isImage = ["jpg", "jpeg", "png", "webp", "gif", "svg", "bmp", "ico"].includes(ext);
        
        files.push({
          name: filename,
          url: `/uploads/${filename}`,
          size: fileStat.size,
          createdAt: fileStat.birthtime.toISOString(),
          isVideo,
          isImage,
        });
      }

      // Sort by newest first
      files.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return files;
    } catch (error: any) {
      console.error("Error reading uploads folder", error);
      return [];
    }
  });

// Delete Uploaded Media File
export const deleteMediaFile = createServerFn({ method: "POST" })
  .validator((data: { filename: string; token: string }) => data)
  .handler(async ({ data }) => {
    const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
    if (!data.token || data.token !== expectedPassword) {
      throw new Error("Unauthorized");
    }

    // Path traversal check: extract only base filename to verify and check prefix
    const cleanFilename = join(process.cwd(), "public", "uploads", basename(data.filename));
    const uploadDir = join(process.cwd(), "public", "uploads");

    if (!cleanFilename.startsWith(uploadDir)) {
      throw new Error("Invalid file deletion destination");
    }

    try {
      await unlink(cleanFilename);
      return { success: true };
    } catch (error: any) {
      console.error("Error deleting media file", error);
      throw new Error("Failed to delete file: " + error.message);
    }
  });
