import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate, f as Outlet, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BLmcp-61.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem("cms_token") && location.pathname !== "/admin/login") {
			setIsAuthenticated(false);
			navigate({ to: "/admin/login" });
		} else setIsAuthenticated(true);
	}, [location.pathname, navigate]);
	if (isAuthenticated === null && location.pathname !== "/admin/login") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-zinc-50 text-zinc-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs tracking-wider text-zinc-500",
				children: "Verifying session..."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-zinc-50 text-zinc-900 antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "light",
			position: "bottom-right",
			closeButton: true
		})]
	});
}
//#endregion
export { AdminLayout as component };
