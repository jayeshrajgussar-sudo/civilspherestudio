import { createServerFn } from "@tanstack/react-start";
import { readFile, writeFile, mkdir, readdir, unlink, stat } from "node:fs/promises";
import { join } from "node:path";

// Get Content Server Function
export const getContent = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const contentPath = join(process.cwd(), "src", "data", "content.json");
    const fileContent = await readFile(contentPath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error: any) {
    console.error("Error reading content.json, returning backup default.", error);
    // fallback if file not found or corrupted
    return null;
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
      const contentPath = join(process.cwd(), "src", "data", "content.json");
      await writeFile(contentPath, JSON.stringify(data.content, null, 2), "utf-8");
      return { success: true };
    } catch (error: any) {
      console.error("Error writing content.json", error);
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

