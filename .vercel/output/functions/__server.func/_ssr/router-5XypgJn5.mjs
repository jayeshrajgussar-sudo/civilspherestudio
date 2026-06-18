import { o as __toESM } from "../_runtime.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Route$5 } from "./admin-Btcz8-hb.mjs";
import { t as Route$6 } from "./routes-R8Zsq7lR.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { mkdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-5XypgJn5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CpfO0uye.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CivilSphere Studio — Civil Architect & Land Development Studio" },
			{
				name: "description",
				content: "Premium civil architecture and land development studio specializing in 2D mapping, 3D visualization, site planning and construction design."
			},
			{
				property: "og:site_name",
				content: "CivilSphere Studio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	}].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./admin-BLmcp-61.mjs");
var Route$2 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var ALLOWED_EXTENSIONS = [
	"jpg",
	"jpeg",
	"png",
	"webp",
	"gif",
	"svg",
	"bmp",
	"ico",
	"mp4",
	"webm",
	"ogg",
	"mov",
	"mkv",
	"avi"
];
var MAX_FILE_SIZE = 50 * 1024 * 1024;
var Route$1 = createFileRoute("/api/upload")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const formData = await request.formData();
		const file = formData.get("file");
		const token = formData.get("token");
		const expectedPassword = process.env.CMS_PASSWORD || "Jeshraj_007jrg";
		if (!token || token !== expectedPassword) return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
		if (!file) return new Response(JSON.stringify({ error: "No file uploaded" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (file.size > MAX_FILE_SIZE) return new Response(JSON.stringify({ error: "File exceeds 50MB limit" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const originalName = file.name || "upload";
		const fileExt = originalName.split(".").pop()?.toLowerCase() || "";
		if (!ALLOWED_EXTENSIONS.includes(fileExt)) return new Response(JSON.stringify({ error: "Unsupported file format. Images and videos only." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const safeName = basename(originalName).replace(/[^a-zA-Z0-9.-]/g, "_");
		const filename = `${Date.now()}-${safeName}`;
		const uploadDir = join(process.cwd(), "public", "uploads");
		await mkdir(uploadDir, { recursive: true });
		const filePath = join(uploadDir, filename);
		if (!filePath.startsWith(uploadDir)) return new Response(JSON.stringify({ error: "Invalid upload destination" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const bytes = await file.arrayBuffer();
		await writeFile(filePath, Buffer.from(bytes));
		return new Response(JSON.stringify({ url: `/uploads/${filename}` }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Error in api/upload handler", error);
		return new Response(JSON.stringify({ error: "Upload failed: " + error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var $$splitComponentImporter = () => import("./login-NkP18bP1.mjs");
var Route = createFileRoute("/admin/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$4
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$4
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var AdminIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var ApiUploadRoute = Route$1.update({
	id: "/api/upload",
	path: "/api/upload",
	getParentRoute: () => Route$4
});
var AdminRouteChildren = {
	AdminLoginRoute: Route.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => AdminRoute
	}),
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	SitemapDotxmlRoute,
	ApiUploadRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
