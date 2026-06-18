import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as getContent } from "./cms-qlv4q2yq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Btcz8-hb.js
var $$splitComponentImporter = () => import("./admin-B0FhMTv6.mjs");
var Route = createFileRoute("/admin/")({
	loader: async () => {
		return await getContent();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
