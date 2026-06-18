import { neon } from "@neondatabase/serverless";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("WARNING: DATABASE_URL environment variable is not set!");
}

export const sql = neon(databaseUrl || "");

/**
 * Ensures the database schema is initialized and contains default seed content.
 */
export async function initializeDatabase() {
  if (!databaseUrl) {
    console.error("Cannot initialize database: DATABASE_URL is missing.");
    return;
  }

  try {
    // 1. Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS site_content (
        id INT PRIMARY KEY,
        content JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Check if table is seeded
    const results = await sql`
      SELECT id FROM site_content WHERE id = 1 LIMIT 1;
    `;

    if (results.length === 0) {
      console.log("Database table 'site_content' is empty. Seeding default data...");
      
      // Load default seed content from content.json
      let defaultContent: any = null;
      try {
        const contentPath = join(process.cwd(), "src", "data", "content.json");
        const fileContent = await readFile(contentPath, "utf-8");
        defaultContent = JSON.parse(fileContent);
      } catch (err) {
        console.error("Could not read local content.json for seeding. Using static fallback.", err);
        // Fallback static JSON structure
        defaultContent = {
          hero: {
            titlePart1: "Turning land into",
            titlePart2: "landmark developments.",
            subtitle: "Professional 2D mapping, 3D visualization, site planning and construction design for landowners, builders, developers and investors who expect more from the ground up.",
            stats: [
              { value: "180+", label: "Projects delivered" },
              { value: "42", label: "Master plans built" },
              { value: "14 yrs", label: "On the ground" }
            ]
          },
          about: {
            title: "A studio where survey lines become skylines.",
            description: "CivilSphere Studio is a civil architecture and land development studio working across the full arc of a project...",
            features: [
              "Licensed civil & architectural team",
              "Drone survey & GIS mapping in-house",
              "Real-time 3D and VR walkthroughs",
              "Buildable, tender-ready document sets"
            ]
          },
          services: [],
          projects: [],
          workflow: [],
          testimonials: [],
          contact: {
            email: "studio@civilsphere.studio",
            phone: "+91 9511526868",
            address: "Dabok, Udaipur, Rajasthan, India 313022"
          },
          maps: { "2d": [], "3d": [] }
        };
      }

      // Seed the database
      await sql`
        INSERT INTO site_content (id, content, updated_at)
        VALUES (1, ${defaultContent as any}, CURRENT_TIMESTAMP);
      `;
      console.log("Successfully seeded database with default site content.");
    }
  } catch (error) {
    console.error("Failed to initialize and seed database:", error);
  }
}
