import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getContent } from "./cms-qlv4q2yq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-R8Zsq7lR.js
var defaultContent = {
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
		description: "CivilSphere Studio is a civil architecture and land development studio working across the full arc of a project — from the first contour of a raw parcel to the final keys of a finished home. We pair rigorous engineering with cinematic 3D craft so every stakeholder sees, understands and believes in the plan.",
		features: [
			"Licensed civil & architectural team",
			"Drone survey & GIS mapping in-house",
			"Real-time 3D and VR walkthroughs",
			"Buildable, tender-ready document sets"
		]
	},
	services: [
		{
			icon: "Map",
			title: "2D Plot Mapping",
			body: "Survey-accurate site plans, boundary mapping and subdivision drawings ready for approval."
		},
		{
			icon: "Box",
			title: "3D Plot Modeling",
			body: "Photoreal 3D models of every lot, façade and street so clients see the project before a stone is laid."
		},
		{
			icon: "Compass",
			title: "Site Planning",
			body: "Master plans that balance density, sunlight, circulation and the character of the land."
		},
		{
			icon: "Trees",
			title: "Land Development Layouts",
			body: "Subdivision layouts engineered for yield, livability and long-term value."
		},
		{
			icon: "Ruler",
			title: "Construction Drawings",
			body: "Working drawings, sections and details coordinated for buildable, on-budget delivery."
		},
		{
			icon: "Building2",
			title: "Architectural Visualization",
			body: "Cinematic renders, aerial flythroughs and VR walkthroughs that close the sale."
		}
	],
	projects: [
		{
			img: "/uploads/project-masterplan.jpg",
			tag: "Master plan",
			title: "Verdant Ridge Estates",
			meta: "124 plots · 38 ha · Phase 02 in construction"
		},
		{
			img: "/uploads/project-hillside.jpg",
			tag: "Hillside community",
			title: "Marea Cliff Residences",
			meta: "46 terraced villas · Coastal · 2025"
		},
		{
			img: "/uploads/project-urban.jpg",
			tag: "Mixed-use district",
			title: "Linden Civic Quarter",
			meta: "Mid-rise · Retail spine · Public plaza"
		},
		{
			img: "/uploads/project-blueprint.jpg",
			tag: "Subdivision study",
			title: "Northgate Land Parcel",
			meta: "Concept to permit · 11.4 ha"
		}
	],
	workflow: [
		{
			step: "01",
			title: "Site survey",
			body: "Topographic survey, drone capture and parcel research."
		},
		{
			step: "02",
			title: "Concept & zoning",
			body: "Massing studies, yield analysis and code-compliance checks."
		},
		{
			step: "03",
			title: "3D master plan",
			body: "Interactive 3D plan with terrain, roads, plots and landscape."
		},
		{
			step: "04",
			title: "Construction set",
			body: "Working drawings, schedules and tender-ready documentation."
		}
	],
	testimonials: [{
		quote: "They turned a steep, awkward parcel into our best-selling community. The 3D plan sold the project before we broke ground.",
		name: "Daniela Rocha",
		role: "Managing Director, Norte Developments"
	}, {
		quote: "Exceptional craft. Every drawing arrived coordinated, dimensioned and buildable. Our site foreman barely had a question.",
		name: "Idris Khan",
		role: "Principal, Halcyon Build Group"
	}],
	contact: {
		email: "studio@civilsphere.studio",
		phone: "+1 (415) 555 0142",
		address: "22 Pier Lane, Studio 4 — Coastal District"
	},
	maps: {
		"2d": [],
		"3d": []
	}
};
var $$splitComponentImporter = () => import("./routes-DIKIh7xH.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		return await getContent();
	},
	head: ({ loaderData }) => {
		const data = loaderData || defaultContent;
		const title = data.hero ? `${data.hero.titlePart1} ${data.hero.titlePart2} — CivilSphere Studio` : "CivilSphere Studio — Civil Architect & Land Development Studio";
		const desc = data.hero?.subtitle || "Premium civil architecture and land development studio.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: "/"
				}
			],
			links: [{
				rel: "canonical",
				href: "/"
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { defaultContent as n, Route as t };
