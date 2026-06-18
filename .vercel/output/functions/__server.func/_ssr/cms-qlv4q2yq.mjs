import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BWuUOelB.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-qlv4q2yq.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getContent = createServerFn({ method: "GET" }).handler(createSsrRpc("fbb536c9889bd7a9173cc6495f008be799a815fb1c32f79ca4fb06bb215ea1d1"));
var saveContent = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b446ff1f9fe96cd2ea4066f52ea8c3b628ddee35899a4a9a97d8884aded50fdd"));
var checkAdminAuth = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("3d811338cefd19b5b0710aade65195ad5a567fd0c943afa0ce0e2e28f01591fe"));
var getMediaFiles = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("4062dda5c6f9f4f7a164598c106ea903b3322a71b8f8c784131707c6a23f092f"));
var deleteMediaFile = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("c3159db4b74468f834de5abe23b36917584b34473369dbc35a375f4719282dd0"));
//#endregion
export { saveContent as a, getMediaFiles as i, deleteMediaFile as n, getContent as r, checkAdminAuth as t };
