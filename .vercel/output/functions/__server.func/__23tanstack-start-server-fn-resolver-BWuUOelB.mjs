//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BWuUOelB.js
var manifest = {
	"3d811338cefd19b5b0710aade65195ad5a567fd0c943afa0ce0e2e28f01591fe": {
		functionName: "checkAdminAuth_createServerFn_handler",
		importer: () => import("./_ssr/cms-CyOZrW-D.mjs")
	},
	"4062dda5c6f9f4f7a164598c106ea903b3322a71b8f8c784131707c6a23f092f": {
		functionName: "getMediaFiles_createServerFn_handler",
		importer: () => import("./_ssr/cms-CyOZrW-D.mjs")
	},
	"b446ff1f9fe96cd2ea4066f52ea8c3b628ddee35899a4a9a97d8884aded50fdd": {
		functionName: "saveContent_createServerFn_handler",
		importer: () => import("./_ssr/cms-CyOZrW-D.mjs")
	},
	"c3159db4b74468f834de5abe23b36917584b34473369dbc35a375f4719282dd0": {
		functionName: "deleteMediaFile_createServerFn_handler",
		importer: () => import("./_ssr/cms-CyOZrW-D.mjs")
	},
	"fbb536c9889bd7a9173cc6495f008be799a815fb1c32f79ca4fb06bb215ea1d1": {
		functionName: "getContent_createServerFn_handler",
		importer: () => import("./_ssr/cms-CyOZrW-D.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
