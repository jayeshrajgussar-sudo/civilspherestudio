import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as checkAdminAuth } from "./cms-DIpxpoJE.mjs";
import { D as CircleAlert, M as ArrowRight, y as KeyRound } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BT1KGSfd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("cms_token")) navigate({ to: "/admin" });
	}, [navigate]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const res = await checkAdminAuth({ data: { password } });
			if (res.authenticated && res.token) {
				localStorage.setItem("cms_token", res.token);
				toast.success("Successfully authenticated");
				navigate({ to: "/admin" });
			} else {
				setError(res.error || "Authentication failed");
				toast.error(res.error || "Authentication failed");
			}
		} catch (err) {
			console.error(err);
			setError("An error occurred during authentication.");
			toast.error("An error occurred during authentication.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-50 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo/civilsphere-logo.png",
								alt: "CivilSphere Studio Logo",
								className: "h-12 w-12 object-cover rounded-full border border-zinc-200"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 font-display text-2xl font-medium tracking-tight text-zinc-900",
								children: [
									"CivilSphere ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-blue-600",
										children: "Studio"
									}),
									" CMS"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-zinc-600",
								children: "Enter the admin password to manage site content"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "password",
										className: "text-xs font-semibold uppercase tracking-wider text-zinc-500",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative rounded-xl border border-zinc-200 bg-white transition focus-within:border-zinc-400",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 text-zinc-400" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											id: "password",
											name: "password",
											type: "password",
											placeholder: "••••••••",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											className: "w-full bg-transparent py-3 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none"
										})]
									})]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										height: 0
									},
									animate: {
										opacity: 1,
										height: "auto"
									},
									className: "flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3 text-xs text-red-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "group flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800 disabled:opacity-50",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Access Dashboard", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })] })
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center text-xs text-zinc-500",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/",
							className: "hover:text-zinc-800 transition",
							children: "← Back to website"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { AdminLogin as component };
