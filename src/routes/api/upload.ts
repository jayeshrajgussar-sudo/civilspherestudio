import { createFileRoute } from "@tanstack/react-router";
import { writeFile, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";

// Allowed extensions for files
const ALLOWED_EXTENSIONS = [
  "jpg", "jpeg", "png", "webp", "gif", "svg", "bmp", "ico",
  "mp4", "webm", "ogg", "mov", "mkv", "avi"
];

// Max file size: 50MB
const MAX_FILE_SIZE = 50 * 1024 * 1024;

export const Route = createFileRoute("/api/upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const formData = await request.formData();
          const file = formData.get("file") as File;
          const token = formData.get("token") as string;

          const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
          if (!token || token !== expectedPassword) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
              status: 401,
              headers: { "Content-Type": "application/json" },
            });
          }

          if (!file) {
            return new Response(JSON.stringify({ error: "No file uploaded" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // 1. File size check
          if (file.size > MAX_FILE_SIZE) {
            return new Response(JSON.stringify({ error: "File exceeds 50MB limit" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // 2. Safe file extension verification
          const originalName = file.name || "upload";
          const fileExt = originalName.split(".").pop()?.toLowerCase() || "";
          if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
            return new Response(
              JSON.stringify({ error: "Unsupported file format. Images and videos only." }),
              {
                status: 400,
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          // 3. Path Traversal Prevention
          // Use basename to extract only the filename part
          const safeName = basename(originalName).replace(/[^a-zA-Z0-9.-]/g, "_");
          const filename = `${Date.now()}-${safeName}`;

          const uploadDir = join(process.cwd(), "public", "uploads");
          await mkdir(uploadDir, { recursive: true });

          const filePath = join(uploadDir, filename);

          // Additional assertion: ensure filePath is indeed a direct child of uploadDir
          if (!filePath.startsWith(uploadDir)) {
            return new Response(JSON.stringify({ error: "Invalid upload destination" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          await writeFile(filePath, buffer);

          return new Response(
            JSON.stringify({ url: `/uploads/${filename}` }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error: any) {
          console.error("Error in api/upload handler", error);
          return new Response(
            JSON.stringify({ error: "Upload failed: " + error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
