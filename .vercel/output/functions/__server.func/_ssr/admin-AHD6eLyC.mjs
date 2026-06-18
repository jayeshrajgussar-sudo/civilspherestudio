import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getContent } from "./cms-DIpxpoJE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-AHD6eLyC.js
var $$splitComponentImporter = () => import("./admin-BfjX-J_N.mjs");
var Route = createFileRoute("/admin/")({
	loader: async () => {
		return await getContent();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
