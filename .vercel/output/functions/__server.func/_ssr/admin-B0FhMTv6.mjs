import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as saveContent, i as getMediaFiles, n as deleteMediaFile } from "./cms-qlv4q2yq.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Route } from "./admin-Btcz8-hb.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as ArrowUp, C as Eye, N as ArrowDown, O as Briefcase, S as FileText, _ as LogOut, a as Trash2, b as Info, f as MessageSquare, h as MapPin, i as Upload, l as RefreshCw, r as Video, s as Save, u as Plus, v as Layers, w as Copy, x as Image } from "../_libs/lucide-react.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B0FhMTv6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
function AdminDashboard() {
	const navigate = useNavigate();
	const [data, setData] = (0, import_react.useState)(Route.useLoaderData());
	const [publishing, setPublishing] = (0, import_react.useState)(false);
	const [mediaList, setMediaList] = (0, import_react.useState)([]);
	const [loadingMedia, setLoadingMedia] = (0, import_react.useState)(false);
	const lucideIconsList = [
		"Map",
		"Box",
		"Compass",
		"Trees",
		"Ruler",
		"Building2",
		"Phone",
		"Mail",
		"MapPin",
		"Sparkles",
		"CheckCircle2",
		"Play"
	];
	const fetchMedia = async () => {
		setLoadingMedia(true);
		try {
			setMediaList(await getMediaFiles({ data: { token: localStorage.getItem("cms_token") || "" } }));
		} catch (err) {
			console.error(err);
			toast.error("Failed to load uploads folder media list");
		} finally {
			setLoadingMedia(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchMedia();
	}, []);
	const handleSignOut = () => {
		localStorage.removeItem("cms_token");
		toast.success("Signed out successfully");
		navigate({ to: "/admin/login" });
	};
	const handlePublish = async () => {
		setPublishing(true);
		const token = localStorage.getItem("cms_token") || "";
		try {
			if ((await saveContent({ data: {
				content: data,
				token
			} })).success) toast.success("Site changes published successfully!");
		} catch (err) {
			console.error(err);
			toast.error(err.message || "Failed to publish changes");
		} finally {
			setPublishing(false);
		}
	};
	const setHeroField = (field, val) => {
		setData((prev) => ({
			...prev,
			hero: {
				...prev.hero,
				[field]: val
			}
		}));
	};
	const setAboutField = (field, val) => {
		setData((prev) => ({
			...prev,
			about: {
				...prev.about,
				[field]: val
			}
		}));
	};
	const setContactField = (field, val) => {
		setData((prev) => ({
			...prev,
			contact: {
				...prev.contact,
				[field]: val
			}
		}));
	};
	const handleFileUpload = async (e, callback) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const token = localStorage.getItem("cms_token") || "";
		const formData = new FormData();
		formData.append("file", file);
		formData.append("token", token);
		const uploadPromise = fetch("/api/upload", {
			method: "POST",
			body: formData
		}).then(async (res) => {
			if (!res.ok) {
				const errData = await res.json();
				throw new Error(errData.error || "Upload failed");
			}
			return res.json();
		});
		toast.promise(uploadPromise, {
			loading: "Uploading image...",
			success: (res) => {
				callback(res.url);
				fetchMedia();
				return "Image uploaded successfully!";
			},
			error: (err) => err?.message || "Failed to upload image."
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-zinc-50 text-zinc-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo/civilsphere-logo.png",
							alt: "CivilSphere Studio Logo",
							className: "h-8 w-8 object-cover rounded-full border border-zinc-200"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-sm sm:text-lg tracking-tight font-semibold",
							children: [
								"CivilSphere ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Studio"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-zinc-500 text-[10px] sm:text-xs uppercase ml-1 sm:ml-2 px-1.5 py-0.5 rounded border border-zinc-200",
									children: "CMS"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => navigate({ to: "/" }),
								className: "border-zinc-200 bg-white text-zinc-755 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4 sm:mr-1.5 sm:h-3.5 sm:w-3.5 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "View Site"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: handlePublish,
								disabled: publishing,
								size: "sm",
								className: "bg-zinc-900 text-white hover:bg-zinc-850 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4 sm:mr-1.5 sm:h-3.5 sm:w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: publishing ? "Publishing..." : "Publish Changes"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: handleSignOut,
								className: "text-zinc-500 hover:bg-zinc-100 hover:text-red-650",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "general",
					className: "w-full flex-1 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "inline-flex w-max min-w-full justify-start rounded-xl border border-zinc-200 bg-zinc-100 p-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "general",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mr-1.5 h-4 w-4" }), " General Page Info"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "services",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "mr-1.5 h-4 w-4" }), " Services"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "projects",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "mr-1.5 h-4 w-4" }), " Projects"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "maps",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-1.5 h-4 w-4" }), " Showcase Maps"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "workflow",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1.5 h-4 w-4" }), " Workflow"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "testimonials",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-1.5 h-4 w-4" }), " Testimonials"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "media",
										className: "rounded-lg data-[state=active]:bg-white data-[state=active]:text-zinc-900 data-[state=active]:shadow-sm text-zinc-600 hover:text-zinc-900 transition shrink-0",
										onClick: fetchMedia,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mr-1.5 h-4 w-4" }), " Media Library"]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "general",
							className: "space-y-6 outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "border-zinc-200 bg-white shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Hero Section Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Update the headline parts, subtitles, and background video shown at the very top of the page."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Headline Part 1 (Standard)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: data?.hero?.titlePart1 || "",
														onChange: (e) => setHeroField("titlePart1", e.target.value),
														className: "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Headline Part 2 (Gradient Colored)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: data?.hero?.titlePart2 || "",
														onChange: (e) => setHeroField("titlePart2", e.target.value),
														className: "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-zinc-500",
													children: "Hero Subtitle"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													rows: 3,
													value: data?.hero?.subtitle || "",
													onChange: (e) => setHeroField("subtitle", e.target.value),
													className: "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-450 focus:ring-0"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-zinc-500",
													children: "Showcase Hero Background Video"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-col gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
													children: data?.hero?.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "grid h-10 w-10 place-items-center rounded-lg bg-zinc-200 text-zinc-700 shrink-0",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-0.5 min-w-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs font-semibold text-zinc-800",
																	children: "Video background active"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[10px] text-zinc-500 truncate max-w-xs sm:max-w-md md:max-w-xl",
																	children: data.hero.videoUrl
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "outline",
															size: "sm",
															onClick: () => setHeroField("videoUrl", ""),
															className: "border-red-200 text-red-600 bg-white hover:bg-red-50 shrink-0 shadow-sm",
															children: "Remove Video"
														})]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-zinc-500 font-medium",
															children: "No video background active. Displaying default static image."
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
															className: "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 shadow-sm shrink-0",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
																" Upload Showcase Video",
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "file",
																	accept: "video/*",
																	className: "hidden",
																	onChange: async (e) => {
																		const file = e.target.files?.[0];
																		if (!file) return;
																		const token = localStorage.getItem("cms_token") || "";
																		const formData = new FormData();
																		formData.append("file", file);
																		formData.append("token", token);
																		const uploadPromise = fetch("/api/upload", {
																			method: "POST",
																			body: formData
																		}).then(async (res) => {
																			if (!res.ok) {
																				const errData = await res.json();
																				throw new Error(errData.error || "Upload failed");
																			}
																			return res.json();
																		});
																		toast.promise(uploadPromise, {
																			loading: "Uploading background video...",
																			success: (res) => {
																				setHeroField("videoUrl", res.url);
																				fetchMedia();
																				return "Background video uploaded successfully!";
																			},
																			error: (err) => err?.message || "Failed to upload video."
																		});
																	}
																})
															]
														})]
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex justify-between items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Hero Background Opacity"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-bold text-zinc-700",
														children: [data?.hero?.bgOpacity !== void 0 ? data.hero.bgOpacity : 75, "%"]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "range",
														min: "0",
														max: "100",
														value: data?.hero?.bgOpacity !== void 0 ? data.hero.bgOpacity : 75,
														onChange: (e) => setHeroField("bgOpacity", parseInt(e.target.value)),
														className: "w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														type: "number",
														min: "0",
														max: "100",
														value: data?.hero?.bgOpacity !== void 0 ? data.hero.bgOpacity : 75,
														onChange: (e) => {
															let val = parseInt(e.target.value);
															if (isNaN(val)) val = 0;
															if (val > 100) val = 100;
															if (val < 0) val = 0;
															setHeroField("bgOpacity", val);
														},
														className: "w-20 border-zinc-200 bg-white text-zinc-900 text-xs text-center"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3 pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-bold text-zinc-500 uppercase tracking-wider",
													children: "Hero Statistics"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid gap-3 sm:grid-cols-3",
													children: data?.hero?.stats?.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-xl border border-zinc-200 bg-zinc-50 p-4 space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															placeholder: "Value (e.g. 180+)",
															value: stat.value,
															onChange: (e) => {
																const newStats = [...data.hero.stats];
																newStats[index].value = e.target.value;
																setHeroField("stats", newStats);
															},
															className: "border-zinc-200 bg-white text-sm focus:border-zinc-400"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															placeholder: "Label (e.g. Projects delivered)",
															value: stat.label,
															onChange: (e) => {
																const newStats = [...data.hero.stats];
																newStats[index].label = e.target.value;
																setHeroField("stats", newStats);
															},
															className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-600"
														})]
													}, index))
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "border-zinc-200 bg-white shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "About Studio Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Update the headline descriptions and point details for the Studio profile section."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-zinc-500",
													children: "About Title"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: data?.about?.title || "",
													onChange: (e) => setAboutField("title", e.target.value),
													className: "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-xs font-semibold text-zinc-500",
													children: "About Description"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													rows: 4,
													value: data?.about?.description || "",
													onChange: (e) => setAboutField("description", e.target.value),
													className: "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 pt-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Studio Highlights Checklist"
													}),
													data?.about?.features?.map((feat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															value: feat,
															onChange: (e) => {
																const newFeats = [...data.about.features];
																newFeats[index] = e.target.value;
																setAboutField("features", newFeats);
															},
															className: "border-zinc-200 bg-white text-sm focus:border-zinc-400"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "ghost",
															onClick: () => {
																setAboutField("features", data.about.features.filter((_, idx) => idx !== index));
															},
															className: "text-zinc-400 hover:text-red-655 hover:bg-zinc-100",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
														})]
													}, index)),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														variant: "outline",
														size: "sm",
														onClick: () => {
															setAboutField("features", [...data?.about?.features || [], ""]);
														},
														className: "mt-2 border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 shadow-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-3.5 w-3.5 text-zinc-500" }), " Add Highlight Point"]
													})
												]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "border-zinc-200 bg-white shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Contact Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Update the address, phone and mail address details referenced in contact form / page footers."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
										className: "space-y-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Email Address"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: data?.contact?.email || "",
														onChange: (e) => setContactField("email", e.target.value),
														className: "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Phone Number"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: data?.contact?.phone || "",
														onChange: (e) => setContactField("phone", e.target.value),
														className: "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-xs font-semibold text-zinc-500",
														children: "Physical Address"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														value: data?.contact?.address || "",
														onChange: (e) => setContactField("address", e.target.value),
														className: "border-zinc-200 bg-white text-zinc-900 focus:border-zinc-400"
													})]
												})
											]
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "services",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Services Manager"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Add, edit, rearrange or remove client architectural services card layouts."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => {
											const newServ = [...data?.services || [], {
												icon: "Map",
												title: "New Service",
												body: "Description content goes here."
											}];
											setData((prev) => ({
												...prev,
												services: newServ
											}));
										},
										className: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0",
										size: "sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add Service"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "space-y-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: data?.services?.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-zinc-200 bg-zinc-50 p-5 space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between pb-2 border-b border-zinc-200/60",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs text-zinc-500 uppercase tracking-widest font-semibold",
														children: ["Service #", index + 1]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																variant: "ghost",
																size: "icon",
																disabled: index === 0,
																onClick: () => {
																	const newServ = [...data.services];
																	const temp = newServ[index];
																	newServ[index] = newServ[index - 1];
																	newServ[index - 1] = temp;
																	setData((prev) => ({
																		...prev,
																		services: newServ
																	}));
																},
																className: "h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100",
																type: "button",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																variant: "ghost",
																size: "icon",
																disabled: index === data.services.length - 1,
																onClick: () => {
																	const newServ = [...data.services];
																	const temp = newServ[index];
																	newServ[index] = newServ[index + 1];
																	newServ[index + 1] = temp;
																	setData((prev) => ({
																		...prev,
																		services: newServ
																	}));
																},
																className: "h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100",
																type: "button",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5" })
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
																variant: "ghost",
																size: "icon",
																onClick: () => {
																	const newServ = data.services.filter((_, idx) => idx !== index);
																	setData((prev) => ({
																		...prev,
																		services: newServ
																	}));
																},
																className: "h-7 w-7 text-zinc-400 hover:text-red-600 hover:bg-zinc-100",
																type: "button",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-3 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[10px] uppercase font-bold text-zinc-500",
															children: "Card Icon"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
															value: service.icon,
															onChange: (e) => {
																const newServ = [...data.services];
																newServ[index].icon = e.target.value;
																setData((prev) => ({
																	...prev,
																	services: newServ
																}));
															},
															className: "w-full rounded-lg border border-zinc-200 bg-white py-1.5 px-2.5 text-xs text-zinc-800 outline-none focus:border-zinc-400",
															children: lucideIconsList.map((ico) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: ico,
																children: ico
															}, ico))
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[10px] uppercase font-bold text-zinc-500",
															children: "Service Title"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															value: service.title,
															onChange: (e) => {
																const newServ = [...data.services];
																newServ[index].title = e.target.value;
																setData((prev) => ({
																	...prev,
																	services: newServ
																}));
															},
															className: "border-zinc-200 bg-white text-sm focus:border-zinc-400"
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] uppercase font-bold text-zinc-500",
														children: "Description"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														rows: 2,
														value: service.body,
														onChange: (e) => {
															const newServ = [...data.services];
															newServ[index].body = e.target.value;
															setData((prev) => ({
																...prev,
																services: newServ
															}));
														},
														className: "border-zinc-200 bg-white text-xs focus:border-zinc-400"
													})]
												})
											]
										}, index))
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "projects",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Projects Portfolio"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Manage the architectural designs displayed inside the main Grid list portfolio."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => {
											const newProj = [...data?.projects || [], {
												img: "/uploads/project-masterplan.jpg",
												tag: "General",
												title: "New Project",
												meta: "Description details"
											}];
											setData((prev) => ({
												...prev,
												projects: newProj
											}));
										},
										className: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0",
										size: "sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add Project"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "space-y-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 sm:grid-cols-2",
										children: data?.projects?.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-zinc-500 uppercase tracking-widest font-semibold",
													children: ["Project #", index + 1]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "ghost",
															size: "icon",
															disabled: index === 0,
															onClick: () => {
																const newProj = [...data.projects];
																const temp = newProj[index];
																newProj[index] = newProj[index - 1];
																newProj[index - 1] = temp;
																setData((prev) => ({
																	...prev,
																	projects: newProj
																}));
															},
															className: "h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "ghost",
															size: "icon",
															disabled: index === data.projects.length - 1,
															onClick: () => {
																const newProj = [...data.projects];
																const temp = newProj[index];
																newProj[index] = newProj[index + 1];
																newProj[index + 1] = temp;
																setData((prev) => ({
																	...prev,
																	projects: newProj
																}));
															},
															className: "h-7 w-7 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "h-3.5 w-3.5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
															variant: "ghost",
															size: "icon",
															onClick: () => {
																const newProj = data.projects.filter((_, idx) => idx !== index);
																setData((prev) => ({
																	...prev,
																	projects: newProj
																}));
															},
															className: "h-7 w-7 text-zinc-400 hover:text-red-655 hover:bg-zinc-100",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
														})
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 md:grid-cols-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "md:col-span-1 flex flex-col items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: project.img,
															alt: project.title,
															className: "h-full w-full object-cover"
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "group flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 text-zinc-550" }),
															" Upload Image",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "file",
																accept: "image/*",
																className: "hidden",
																onChange: (e) => handleFileUpload(e, (url) => {
																	const newProj = [...data.projects];
																	newProj[index].img = url;
																	setData((prev) => ({
																		...prev,
																		projects: newProj
																	}));
																})
															})
														]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "md:col-span-2 space-y-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid gap-3 sm:grid-cols-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] uppercase font-bold text-zinc-500",
																children: "Category Tag"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																value: project.tag,
																onChange: (e) => {
																	const newProj = [...data.projects];
																	newProj[index].tag = e.target.value;
																	setData((prev) => ({
																		...prev,
																		projects: newProj
																	}));
																},
																className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] uppercase font-bold text-zinc-500",
																children: "Title"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																value: project.title,
																onChange: (e) => {
																	const newProj = [...data.projects];
																	newProj[index].title = e.target.value;
																	setData((prev) => ({
																		...prev,
																		projects: newProj
																	}));
																},
																className: "border-zinc-200 bg-white text-sm focus:border-zinc-400 font-medium text-zinc-900"
															})]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[10px] uppercase font-bold text-zinc-500",
															children: "Metadata Details (e.g. Dimensions / Phase)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															value: project.meta,
															onChange: (e) => {
																const newProj = [...data.projects];
																newProj[index].meta = e.target.value;
																setData((prev) => ({
																	...prev,
																	projects: newProj
																}));
															},
															className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
														})]
													})]
												})]
											})]
										}, index))
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "maps",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-zinc-900",
									children: "Showcase 2D & 3D Maps"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "text-zinc-500",
									children: "Update the maps switcher dataset shown in the \"See your land in 2D & 3D\" showcase."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "space-y-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-sm font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-500" }), "2D Plot Maps"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-6 sm:grid-cols-2",
											children: data?.maps?.["2d"]?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: item.img,
															alt: item.title,
															className: "h-full w-full object-cover"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 text-zinc-500" }),
															" Replace map image",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "file",
																accept: "image/*",
																className: "hidden",
																onChange: (e) => handleFileUpload(e, (url) => {
																	const new2d = [...data.maps["2d"]];
																	new2d[index].img = url;
																	setData((prev) => ({
																		...prev,
																		maps: {
																			...prev.maps,
																			"2d": new2d
																		}
																	}));
																})
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid gap-2 sm:grid-cols-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[10px] uppercase font-bold text-zinc-500",
																	children: "Label Tag"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	value: item.tag,
																	onChange: (e) => {
																		const new2d = [...data.maps["2d"]];
																		new2d[index].tag = e.target.value;
																		setData((prev) => ({
																			...prev,
																			maps: {
																				...prev.maps,
																				"2d": new2d
																			}
																		}));
																	},
																	className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[10px] uppercase font-bold text-zinc-500",
																	children: "Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	value: item.title,
																	onChange: (e) => {
																		const new2d = [...data.maps["2d"]];
																		new2d[index].title = e.target.value;
																		setData((prev) => ({
																			...prev,
																			maps: {
																				...prev.maps,
																				"2d": new2d
																			}
																		}));
																	},
																	className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] uppercase font-bold text-zinc-500",
																children: "Subtext Details"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																value: item.meta,
																onChange: (e) => {
																	const new2d = [...data.maps["2d"]];
																	new2d[index].meta = e.target.value;
																	setData((prev) => ({
																		...prev,
																		maps: {
																			...prev.maps,
																			"2d": new2d
																		}
																	}));
																},
																className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
															})]
														})]
													})
												]
											}, index))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 pt-4 border-t border-zinc-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-sm font-semibold uppercase tracking-wider text-amber-500 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500" }), "3D Plot Maps"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-6 sm:grid-cols-2",
											children: data?.maps?.["3d"]?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: item.img,
															alt: item.title,
															className: "h-full w-full object-cover"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white py-1.5 px-3 text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 shadow-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 text-zinc-500" }),
															" Replace map image",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "file",
																accept: "image/*",
																className: "hidden",
																onChange: (e) => handleFileUpload(e, (url) => {
																	const new3d = [...data.maps["3d"]];
																	new3d[index].img = url;
																	setData((prev) => ({
																		...prev,
																		maps: {
																			...prev.maps,
																			"3d": new3d
																		}
																	}));
																})
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid gap-2 sm:grid-cols-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[10px] uppercase font-bold text-zinc-500",
																	children: "Label Tag"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	value: item.tag,
																	onChange: (e) => {
																		const new3d = [...data.maps["3d"]];
																		new3d[index].tag = e.target.value;
																		setData((prev) => ({
																			...prev,
																			maps: {
																				...prev.maps,
																				"3d": new3d
																			}
																		}));
																	},
																	className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "text-[10px] uppercase font-bold text-zinc-500",
																	children: "Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																	value: item.title,
																	onChange: (e) => {
																		const new3d = [...data.maps["3d"]];
																		new3d[index].title = e.target.value;
																		setData((prev) => ({
																			...prev,
																			maps: {
																				...prev.maps,
																				"3d": new3d
																			}
																		}));
																	},
																	className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "text-[10px] uppercase font-bold text-zinc-500",
																children: "Subtext Details"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
																value: item.meta,
																onChange: (e) => {
																	const new3d = [...data.maps["3d"]];
																	new3d[index].meta = e.target.value;
																	setData((prev) => ({
																		...prev,
																		maps: {
																			...prev.maps,
																			"3d": new3d
																		}
																	}));
																},
																className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
															})]
														})]
													})
												]
											}, index))
										})]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "workflow",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
									className: "text-zinc-900",
									children: "Workflow Steps"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
									className: "text-zinc-500",
									children: "Update the description and headers for each of the 4 steps of the design process."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "space-y-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: data?.workflow?.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-zinc-200 bg-zinc-50 p-5 space-y-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-2xl text-amber-600 font-bold",
													children: step.step
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													placeholder: "Step title",
													value: step.title,
													onChange: (e) => {
														const newWork = [...data.workflow];
														newWork[index].title = e.target.value;
														setData((prev) => ({
															...prev,
															workflow: newWork
														}));
													},
													className: "border-zinc-200 bg-white text-sm focus:border-zinc-400 font-semibold text-zinc-900"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] uppercase font-bold text-zinc-500",
													children: "Step Details"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
													rows: 2,
													value: step.body,
													onChange: (e) => {
														const newWork = [...data.workflow];
														newWork[index].body = e.target.value;
														setData((prev) => ({
															...prev,
															workflow: newWork
														}));
													},
													className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-700"
												})]
											})]
										}, index))
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "testimonials",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Client Reviews"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Edit quotes and citation details for client recommendations."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										onClick: () => {
											const newTest = [...data?.testimonials || [], {
												quote: "New recommendation quote goes here.",
												name: "Client Name",
												role: "Director, Company"
											}];
											setData((prev) => ({
												...prev,
												testimonials: newTest
											}));
										},
										className: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm shrink-0",
										size: "sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add Testimonial"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "space-y-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: data?.testimonials?.map((t, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative rounded-2xl border border-zinc-200 bg-zinc-50 p-5 space-y-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "ghost",
													size: "icon",
													onClick: () => {
														const newTest = data.testimonials.filter((_, idx) => idx !== index);
														setData((prev) => ({
															...prev,
															testimonials: newTest
														}));
													},
													className: "absolute right-4 top-4 h-7 w-7 text-zinc-400 hover:text-red-655 hover:bg-zinc-100",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] uppercase font-bold text-zinc-500",
														children: "Recommendation Quote"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
														rows: 3,
														value: t.quote,
														onChange: (e) => {
															const newTest = [...data.testimonials];
															newTest[index].quote = e.target.value;
															setData((prev) => ({
																...prev,
																testimonials: newTest
															}));
														},
														className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 italic text-zinc-800"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid gap-3 sm:grid-cols-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[10px] uppercase font-bold text-zinc-500",
															children: "Client Name"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															value: t.name,
															onChange: (e) => {
																const newTest = [...data.testimonials];
																newTest[index].name = e.target.value;
																setData((prev) => ({
																	...prev,
																	testimonials: newTest
																}));
															},
															className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 font-semibold text-zinc-900"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "text-[10px] uppercase font-bold text-zinc-500",
															children: "Role & Organization"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
															value: t.role,
															onChange: (e) => {
																const newTest = [...data.testimonials];
																newTest[index].role = e.target.value;
																setData((prev) => ({
																	...prev,
																	testimonials: newTest
																}));
															},
															className: "border-zinc-200 bg-white text-xs focus:border-zinc-400 text-zinc-800"
														})]
													})]
												})
											]
										}, index))
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "media",
							className: "space-y-6 outline-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
								className: "border-zinc-200 bg-white shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-zinc-900",
										children: "Media Library"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "text-zinc-500",
										children: "Upload, manage, and delete image and video assets served on your website. Copy URLs to paste into other dynamic fields."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2 mt-2 sm:mt-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											size: "sm",
											onClick: fetchMedia,
											disabled: loadingMedia,
											className: "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-3.5 w-3.5 mr-1 ${loadingMedia ? "animate-spin" : ""}` }), "Refresh"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-zinc-900 py-1.5 px-3 text-xs font-medium text-white hover:bg-zinc-800 shadow-sm shrink-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3" }),
												" Upload Media File",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: "image/*,video/*",
													className: "hidden",
													onChange: async (e) => {
														const file = e.target.files?.[0];
														if (!file) return;
														const token = localStorage.getItem("cms_token") || "";
														const formData = new FormData();
														formData.append("file", file);
														formData.append("token", token);
														const uploadPromise = fetch("/api/upload", {
															method: "POST",
															body: formData
														}).then(async (res) => {
															if (!res.ok) {
																const errData = await res.json();
																throw new Error(errData.error || "Upload failed");
															}
															return res.json();
														});
														toast.promise(uploadPromise, {
															loading: "Uploading asset...",
															success: () => {
																fetchMedia();
																return "Asset uploaded to library!";
															},
															error: (err) => err?.message || "Failed to upload asset."
														});
													}
												})
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: loadingMedia ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center py-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-8 w-8 animate-spin text-zinc-400" })
								}) : mediaList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center text-center py-12 text-zinc-500",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-12 w-12 text-zinc-300 mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: "No media uploads found"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-zinc-400 mt-1",
											children: "Upload images or videos above to populate your library."
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
									children: mediaList.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden flex flex-col justify-between shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-square bg-zinc-100 flex items-center justify-center relative overflow-hidden border-b border-zinc-200",
											children: [file.isVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "h-full w-full relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
													src: file.url,
													className: "h-full w-full object-cover opacity-80",
													muted: true,
													preload: "metadata"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute top-2 right-2 bg-zinc-900/70 text-white rounded p-0.5 text-[9px] font-bold uppercase tracking-wider",
													children: "Video"
												})]
											}) : file.isImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: file.url,
												alt: file.name,
												className: "h-full w-full object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-10 w-10 text-zinc-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "secondary",
													size: "icon",
													onClick: () => {
														navigator.clipboard.writeText(file.url);
														toast.success("Copied to clipboard: " + file.url);
													},
													className: "h-8 w-8 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 shadow",
													title: "Copy URL",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													variant: "destructive",
													size: "icon",
													onClick: async () => {
														if (!confirm("Are you sure you want to permanently delete this media file from disk?")) return;
														const token = localStorage.getItem("cms_token") || "";
														const delPromise = deleteMediaFile({ data: {
															filename: file.name,
															token
														} });
														toast.promise(delPromise, {
															loading: "Deleting asset...",
															success: () => {
																fetchMedia();
																return "Asset deleted from library!";
															},
															error: (err) => err.message || "Failed to delete file"
														});
													},
													className: "h-8 w-8 rounded-full bg-red-600 text-white hover:bg-red-700 shadow",
													title: "Delete File",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 bg-white text-[10px] space-y-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-zinc-800 truncate",
												title: file.name,
												children: file.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-zinc-500 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [(file.size / 1024 / 1024).toFixed(2), " MB"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "capitalize",
													children: file.isVideo ? "Video" : "Image"
												})]
											})]
										})]
									}, file.name))
								}) })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 bg-white",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" CivilSphere Studio CMS Panel."
				]
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
