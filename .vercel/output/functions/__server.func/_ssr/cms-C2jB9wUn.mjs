import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as cs } from "../_libs/neondatabase__serverless.mjs";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-C2jB9wUn.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) console.warn("WARNING: DATABASE_URL environment variable is not set!");
var sql = cs(databaseUrl || "");
/**
* Ensures the database schema is initialized and contains default seed content.
*/
async function initializeDatabase() {
	if (!databaseUrl) {
		console.error("Cannot initialize database: DATABASE_URL is missing.");
		return;
	}
	try {
		await sql`
      CREATE TABLE IF NOT EXISTS site_content (
        id INT PRIMARY KEY,
        content JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
		if ((await sql`
      SELECT id FROM site_content WHERE id = 1 LIMIT 1;
    `).length === 0) {
			console.log("Database table 'site_content' is empty. Seeding default data...");
			let defaultContent = null;
			try {
				const fileContent = await readFile(join(process.cwd(), "src", "data", "content.json"), "utf-8");
				defaultContent = JSON.parse(fileContent);
			} catch (err) {
				console.error("Could not read local content.json for seeding. Using static fallback.", err);
				defaultContent = {
					hero: {
						titlePart1: "Turning land into",
						titlePart2: "landmark developments.",
						subtitle: "Professional 2D mapping, 3D visualization, site planning and construction design for landowners, builders, developers and investors who expect more from the ground up.",
						stats: [
							{
								value: "180+",
								label: "Projects delivered"
							},
							{
								value: "42",
								label: "Master plans built"
							},
							{
								value: "14 yrs",
								label: "On the ground"
							}
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
					maps: {
						"2d": [],
						"3d": []
					}
				};
			}
			await sql`
        INSERT INTO site_content (id, content, updated_at)
        VALUES (1, ${defaultContent}, CURRENT_TIMESTAMP);
      `;
			console.log("Successfully seeded database with default site content.");
		}
	} catch (error) {
		console.error("Failed to initialize and seed database:", error);
	}
}
var content_default = {
	hero: {
		"titlePart1": "Turning land into",
		"titlePart2": "landmark developments.",
		"subtitle": "Professional 2D mapping, 3D visualization, site planning and construction design for landowners, builders, developers and investors who expect more from the ground up.",
		"videoUrl": "/uploads/1781780166930-Architectural_transformation_ani__202606181617.mp4",
		"bgOpacity": 49,
		"stats": [
			{
				"value": "180+",
				"label": "Projects delivered"
			},
			{
				"value": "42",
				"label": "Master plans built"
			},
			{
				"value": "14 yrs",
				"label": "On the ground"
			}
		]
	},
	about: {
		"title": "A studio where survey lines become skylines.",
		"description": "CivilSphere Studio is a civil architecture and land development studio working across the full arc of a project — from the first contour of a raw parcel to the final keys of a finished home. We pair rigorous engineering with cinematic 3D craft so every stakeholder sees, understands and believes in the plan.",
		"features": [
			"Licensed civil & architectural team",
			"Drone survey & GIS mapping in-house",
			"Real-time 3D and VR walkthroughs",
			"Buildable, tender-ready document sets"
		]
	},
	services: [
		{
			"icon": "Map",
			"title": "2D Plot Mapping",
			"body": "Survey-accurate site plans, boundary mapping and subdivision drawings ready for approval."
		},
		{
			"icon": "Box",
			"title": "3D Plot Modeling",
			"body": "Photoreal 3D models of every lot, façade and street so clients see the project before a stone is laid."
		},
		{
			"icon": "Compass",
			"title": "Site Planning",
			"body": "Master plans that balance density, sunlight, circulation and the character of the land."
		},
		{
			"icon": "Trees",
			"title": "Land Development Layouts",
			"body": "Subdivision layouts engineered for yield, livability and long-term value."
		},
		{
			"icon": "Ruler",
			"title": "Construction Drawings",
			"body": "Working drawings, sections and details coordinated for buildable, on-budget delivery."
		},
		{
			"icon": "Building2",
			"title": "Architectural Visualization",
			"body": "Cinematic renders, aerial flythroughs and VR walkthroughs that close the sale."
		}
	],
	projects: [
		{
			"img": "/uploads/project-masterplan.jpg",
			"tag": "Master plan",
			"title": "Verdant Ridge Estates",
			"meta": "124 plots · 38 ha · Phase 02 in construction"
		},
		{
			"img": "/uploads/project-hillside.jpg",
			"tag": "Hillside community",
			"title": "Marea Cliff Residences",
			"meta": "46 terraced villas · Coastal · 2025"
		},
		{
			"img": "/uploads/project-urban.jpg",
			"tag": "Mixed-use district",
			"title": "Linden Civic Quarter",
			"meta": "Mid-rise · Retail spine · Public plaza"
		},
		{
			"img": "/uploads/project-blueprint.jpg",
			"tag": "Subdivision study",
			"title": "Northgate Land Parcel",
			"meta": "Concept to permit · 11.4 ha"
		}
	],
	workflow: [
		{
			"step": "01",
			"title": "Site survey",
			"body": "Topographic survey, drone capture and parcel research."
		},
		{
			"step": "02",
			"title": "Concept & zoning",
			"body": "Massing studies, yield analysis and code-compliance checks."
		},
		{
			"step": "03",
			"title": "3D master plan",
			"body": "Interactive 3D plan with terrain, roads, plots and landscape."
		},
		{
			"step": "04",
			"title": "Construction set",
			"body": "Working drawings, schedules and tender-ready documentation."
		}
	],
	testimonials: [{
		"quote": "They turned a steep, awkward parcel into our best-selling community. The 3D plan sold the project before we broke ground.",
		"name": "Daniela Rocha",
		"role": "Managing Director, Norte Developments"
	}, {
		"quote": "Exceptional craft. Every drawing arrived coordinated, dimensioned and buildable. Our site foreman barely had a question.",
		"name": "Idris Khan",
		"role": "Principal, Halcyon Build Group"
	}],
	contact: {
		"email": "studio@civilsphere.studio",
		"phone": "+91 9511526868",
		"address": "Dabok, Udaipur, Rajasthan, India 313022"
	},
	maps: {
		"2d": [{
			"img": "/uploads/map-2d-subdivision.jpg",
			"title": "Verdant Ridge — Subdivision Plan",
			"meta": "124 plots · 38 ha · Permit set",
			"tag": "2D Plot Map"
		}, {
			"img": "/uploads/map-2d-zoning.jpg",
			"title": "Linden Quarter — Zoning Plan",
			"meta": "Mixed-use · Color-coded parcels",
			"tag": "2D Site Map"
		}],
		"3d": [{
			"img": "/uploads/map-3d-villas.jpg",
			"title": "Marea Villas — 3D Plot Visualization",
			"meta": "Isometric render · 46 villas",
			"tag": "3D Site Map"
		}, {
			"img": "/uploads/map-3d-hillside.jpg",
			"title": "Cliffside Heights — Aerial 3D",
			"meta": "Drone-accurate · Photoreal",
			"tag": "3D Master Plan"
		}]
	}
};
var isDbInitialized = false;
async function ensureDbReady() {
	if (!isDbInitialized) {
		await initializeDatabase();
		isDbInitialized = true;
	}
}
var getContent_createServerFn_handler = createServerRpc({
	id: "fbb536c9889bd7a9173cc6495f008be799a815fb1c32f79ca4fb06bb215ea1d1",
	name: "getContent",
	filename: "src/lib/cms.ts"
}, (opts) => getContent.__executeServer(opts));
var getContent = createServerFn({ method: "GET" }).handler(getContent_createServerFn_handler, async () => {
	try {
		if (!process.env.DATABASE_URL) {
			console.warn("DATABASE_URL environment variable is missing. Using static fallback content.");
			return content_default;
		}
		await ensureDbReady();
		const results = await sql`
      SELECT content FROM site_content WHERE id = 1 LIMIT 1;
    `;
		if (results.length > 0) return results[0].content;
		return content_default;
	} catch (error) {
		console.error("Error reading content from Neon DB, returning static default fallback.", error);
		return content_default;
	}
});
var saveContent_createServerFn_handler = createServerRpc({
	id: "b446ff1f9fe96cd2ea4066f52ea8c3b628ddee35899a4a9a97d8884aded50fdd",
	name: "saveContent",
	filename: "src/lib/cms.ts"
}, (opts) => saveContent.__executeServer(opts));
var saveContent = createServerFn({ method: "POST" }).validator((data) => data).handler(saveContent_createServerFn_handler, async ({ data }) => {
	const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
	if (!data.token || data.token !== expectedPassword) throw new Error("Unauthorized");
	if (!data.content || typeof data.content !== "object") throw new Error("Invalid content data structure");
	try {
		if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL environment variable is missing. Cannot save changes.");
		await ensureDbReady();
		await sql`
        INSERT INTO site_content (id, content, updated_at)
        VALUES (1, ${data.content}, CURRENT_TIMESTAMP)
        ON CONFLICT (id)
        DO UPDATE SET content = ${data.content}, updated_at = CURRENT_TIMESTAMP;
      `;
		try {
			await writeFile(join(process.cwd(), "src", "data", "content.json"), JSON.stringify(data.content, null, 2), "utf-8");
		} catch (writeErr) {
			console.warn("Could not write local backup copy of content.json (expected in serverless):", writeErr.message);
		}
		return { success: true };
	} catch (error) {
		console.error("Error saving content to database:", error);
		throw new Error("Failed to save content: " + error.message);
	}
});
var checkAdminAuth_createServerFn_handler = createServerRpc({
	id: "3d811338cefd19b5b0710aade65195ad5a567fd0c943afa0ce0e2e28f01591fe",
	name: "checkAdminAuth",
	filename: "src/lib/cms.ts"
}, (opts) => checkAdminAuth.__executeServer(opts));
var checkAdminAuth = createServerFn({ method: "POST" }).validator((data) => data).handler(checkAdminAuth_createServerFn_handler, async ({ data }) => {
	const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
	if (data.password && data.password === expectedPassword) return {
		authenticated: true,
		token: expectedPassword
	};
	return {
		authenticated: false,
		error: "Incorrect password"
	};
});
var getMediaFiles_createServerFn_handler = createServerRpc({
	id: "4062dda5c6f9f4f7a164598c106ea903b3322a71b8f8c784131707c6a23f092f",
	name: "getMediaFiles",
	filename: "src/lib/cms.ts"
}, (opts) => getMediaFiles.__executeServer(opts));
var getMediaFiles = createServerFn({ method: "POST" }).validator((data) => data).handler(getMediaFiles_createServerFn_handler, async ({ data }) => {
	const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
	if (!data.token || data.token !== expectedPassword) throw new Error("Unauthorized");
	try {
		const uploadDir = join(process.cwd(), "public", "uploads");
		await mkdir(uploadDir, { recursive: true });
		const filenames = await readdir(uploadDir);
		const files = [];
		for (const filename of filenames) {
			const fileStat = await stat(join(uploadDir, filename));
			if (!fileStat.isFile()) continue;
			const ext = filename.split(".").pop()?.toLowerCase() || "";
			const isVideo = [
				"mp4",
				"webm",
				"ogg",
				"mov",
				"mkv",
				"avi"
			].includes(ext);
			const isImage = [
				"jpg",
				"jpeg",
				"png",
				"webp",
				"gif",
				"svg",
				"bmp",
				"ico"
			].includes(ext);
			files.push({
				name: filename,
				url: `/uploads/${filename}`,
				size: fileStat.size,
				createdAt: fileStat.birthtime.toISOString(),
				isVideo,
				isImage
			});
		}
		files.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
		return files;
	} catch (error) {
		console.error("Error reading uploads folder", error);
		return [];
	}
});
var deleteMediaFile_createServerFn_handler = createServerRpc({
	id: "c3159db4b74468f834de5abe23b36917584b34473369dbc35a375f4719282dd0",
	name: "deleteMediaFile",
	filename: "src/lib/cms.ts"
}, (opts) => deleteMediaFile.__executeServer(opts));
var deleteMediaFile = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteMediaFile_createServerFn_handler, async ({ data }) => {
	const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
	if (!data.token || data.token !== expectedPassword) throw new Error("Unauthorized");
	const cleanFilename = join(process.cwd(), "public", "uploads", basename(data.filename));
	const uploadDir = join(process.cwd(), "public", "uploads");
	if (!cleanFilename.startsWith(uploadDir)) throw new Error("Invalid file deletion destination");
	try {
		await unlink(cleanFilename);
		return { success: true };
	} catch (error) {
		console.error("Error deleting media file", error);
		throw new Error("Failed to delete file: " + error.message);
	}
});
//#endregion
export { checkAdminAuth_createServerFn_handler, deleteMediaFile_createServerFn_handler, getContent_createServerFn_handler, getMediaFiles_createServerFn_handler, saveContent_createServerFn_handler };
