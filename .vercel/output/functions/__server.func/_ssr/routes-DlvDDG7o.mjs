import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as CircleCheck, M as ArrowRight, T as Compass, c as Ruler, d as Phone, g as Mail, h as MapPin, j as ArrowUpRight, k as Box, m as Maximize2, n as X, o as Sparkles, p as Menu, t as lucide_react_exports, v as Layers } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as defaultContent, t as Route } from "./routes-B9vq8QOM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlvDDG7o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultMaps = {
	"2d": [{
		img: "/assets/map-2d-subdivision-DC08Rxqw.jpg",
		title: "Verdant Ridge — Subdivision Plan",
		meta: "124 plots · 38 ha · Permit set",
		tag: "2D Plot Map"
	}, {
		img: "/assets/map-2d-zoning-BaD2jUpw.jpg",
		title: "Linden Quarter — Zoning Plan",
		meta: "Mixed-use · Color-coded parcels",
		tag: "2D Site Map"
	}],
	"3d": [{
		img: "/assets/map-3d-villas-Bu45b7eg.jpg",
		title: "Marea Villas — 3D Plot Visualization",
		meta: "Isometric render · 46 villas",
		tag: "3D Site Map"
	}, {
		img: "/assets/map-3d-hillside-DvyO6khm.jpg",
		title: "Cliffside Heights — Aerial 3D",
		meta: "Drone-accurate · Photoreal",
		tag: "3D Master Plan"
	}]
};
function MapsShowcase({ maps: dynamicMaps }) {
	const [mode, setMode] = (0, import_react.useState)("2d");
	const items = (dynamicMaps && (dynamicMaps["2d"]?.length > 0 || dynamicMaps["3d"]?.length > 0) ? dynamicMaps : defaultMaps)[mode] || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "maps",
		className: "relative py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-10 bottom-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "Plot mapping"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl tracking-tight md:text-5xl",
						children: [
							"See your land in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-blue",
								children: "2D"
							}),
							" &",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "3D"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted-foreground",
						children: "Survey-accurate plot maps and cinematic 3D site visualizations — the same parcel, told two ways. Approval-ready for authorities, persuasive for investors."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass relative inline-flex rounded-full p-1 shadow-elev",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						transition: {
							type: "spring",
							stiffness: 380,
							damping: 32
						},
						className: `absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground ${mode === "2d" ? "left-1" : "left-[calc(50%+0rem)]"}`
					}), ["2d", "3d"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setMode(m),
						className: `relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition ${mode === m ? "text-background" : "text-foreground/70 hover:text-foreground"}`,
						children: [
							m === "2d" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { className: "h-4 w-4" }),
							m.toUpperCase(),
							" maps"
						]
					}, m))]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
						layout: true,
						initial: {
							opacity: 0,
							y: 30,
							rotateX: -8
						},
						animate: {
							opacity: 1,
							y: 0,
							rotateX: 0
						},
						exit: {
							opacity: 0,
							y: -20
						},
						transition: {
							duration: .6,
							delay: i * .08,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						whileHover: {
							y: -6,
							rotateX: 2,
							rotateY: -2
						},
						style: {
							transformStyle: "preserve-3d",
							perspective: 1200
						},
						className: "group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elev",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden bg-secondary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: it.img,
									alt: it.title,
									width: 1280,
									height: 896,
									loading: "lazy",
									className: `h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04] ${mode === "2d" ? "mix-blend-multiply" : ""}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-0 opacity-30",
									style: {
										backgroundImage: "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
										backgroundSize: "32px 32px"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 top-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "glass rounded-full px-3 py-1 text-[11px] font-medium text-foreground/80",
										children: it.tag
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-4 top-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow-soft",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow-soft",
										children: mode === "2d" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "h-3.5 w-3.5" })
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "flex items-center justify-between gap-4 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg tracking-tight",
								children: it.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: it.meta
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] text-muted-foreground sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), "Live preview"]
							})]
						})]
					}, it.title))
				})
			})]
		})]
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function ServiceIcon({ name, className }) {
	const IconComponent = lucide_react_exports[name];
	if (!IconComponent) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className });
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-4 max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "bg-zinc-950/85 border border-zinc-800/60 backdrop-blur-md flex items-center justify-between rounded-2xl px-4 py-3 shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo/civilsphere-logo.png",
							alt: "CivilSphere Studio Logo",
							className: "h-8 w-8 object-cover rounded-full border border-zinc-800"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg tracking-tight text-white font-medium",
							children: ["CivilSphere ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-blue",
								children: "Studio"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-7 text-sm text-zinc-400 md:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-white transition",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "hover:text-white transition",
								children: "Projects"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#workflow",
								className: "hover:text-white transition",
								children: "Workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-white transition",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/admin",
								className: "hover:text-white transition",
								children: "Login"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group hidden sm:inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 font-medium transition hover:bg-zinc-100 shadow-sm",
							children: ["Request consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "flex items-center justify-center rounded-xl border border-zinc-850 bg-zinc-900/60 p-2 text-white hover:bg-zinc-800/80 transition cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "right",
								className: "bg-zinc-950/98 border-l border-zinc-800 text-white p-6 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-zinc-900 pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/logo/civilsphere-logo.png",
											alt: "CivilSphere Logo",
											className: "h-7 w-7 object-cover rounded-full border border-zinc-800"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
											className: "font-display text-md tracking-tight text-white font-medium",
											children: ["CivilSphere ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gradient-blue",
												children: "Studio"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										className: "flex flex-col gap-4 text-base text-zinc-400 font-medium mt-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#services",
													className: "py-2 hover:text-white transition border-b border-zinc-900 pb-2",
													children: "Services"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#projects",
													className: "py-2 hover:text-white transition border-b border-zinc-900 pb-2",
													children: "Projects"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#workflow",
													className: "py-2 hover:text-white transition border-b border-zinc-900 pb-2",
													children: "Workflow"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#contact",
													className: "py-2 hover:text-white transition border-b border-zinc-900 pb-2",
													children: "Contact"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "/admin",
													className: "py-2 hover:text-white transition border-b border-zinc-900 pb-2",
													children: "Login"
												})
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-auto pt-6 border-t border-zinc-900",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											className: "group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm text-zinc-950 font-semibold transition hover:bg-zinc-100 shadow-sm",
											children: ["Request consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
										})
									})
								})]
							})] })
						})]
					})
				]
			})
		})
	});
}
function Hero({ hero }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] overflow-hidden pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "radial-gradient(80% 60% at 50% 0%, oklch(0.96 0.02 240) 0%, oklch(0.99 0.005 240) 60%, oklch(0.97 0.01 230) 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					children: hero.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: hero.videoUrl,
						autoPlay: true,
						loop: true,
						muted: true,
						playsInline: true,
						className: "h-full w-full object-cover",
						style: { opacity: (hero.bgOpacity !== void 0 ? hero.bgOpacity : 75) / 100 }
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/uploads/project-masterplan.jpg",
						alt: "Masterplan aerial view",
						className: "h-full w-full object-cover",
						style: { opacity: (hero.bgOpacity !== void 0 ? hero.bgOpacity : 40) / 100 }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 pt-10 md:pt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
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
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), "Civil architecture · Land development · 3D visualization"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl leading-[1.02] tracking-tight md:text-7xl",
						children: [
							hero.titlePart1,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-blue",
								children: hero.titlePart2
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-muted-foreground md:text-lg",
						children: hero.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm text-background shadow-elev transition hover:bg-foreground/90",
							children: ["View projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm text-foreground transition hover:bg-white",
							children: "Request consultation"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm",
						children: hero.stats?.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl tracking-tight",
								children: stat.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: stat.label
							})]
						}, stat.label))
					})
				]
			})
		})]
	});
}
function About({ about }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "About the studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl tracking-tight md:text-5xl",
					children: about.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-muted-foreground",
					children: about.description
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 sm:grid-cols-2",
					children: about.features?.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/80",
							children: i
						})]
					}, i))
				})]
			})]
		})
	});
}
function Services({ services }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between gap-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 text-4xl tracking-tight md:text-5xl",
					children: [
						"Everything between the",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"site survey and the skyline."
					]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services?.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i * .05
					},
					className: "group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-elev",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceIcon, {
								name: s.icon,
								className: "h-5 w-5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl tracking-tight",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100",
							children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}, s.title))
			})]
		})
	});
}
function Projects({ projects }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Featured projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl tracking-tight md:text-5xl",
					children: "Plans that became places."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex",
					children: ["See the full portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-12",
				children: projects?.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
					href: "#",
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .7,
						delay: i * .05
					},
					className: `group relative block overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elev ${i === 0 ? "md:col-span-8" : i === 3 ? "md:col-span-8" : "md:col-span-4"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								width: 1600,
								height: 1e3,
								loading: i === 0 ? "eager" : "lazy",
								className: "h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-5 top-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass rounded-full px-3 py-1 text-[11px] text-foreground/80",
									children: p.tag
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl leading-tight tracking-tight",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-background/80",
									children: p.meta
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background/90 text-foreground transition group-hover:bg-gold group-hover:text-gold-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})]
							})
						]
					})
				}, p.title))
			})]
		})
	});
}
function Workflow({ workflow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "workflow",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl tracking-tight md:text-5xl",
					children: "From raw parcel to ribbon-cut, in four deliberate moves."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-4",
				children: workflow?.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i * .08
					},
					className: "relative rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-5xl text-gradient-gold",
							children: w.step
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-lg tracking-tight",
							children: w.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: w.body
						})
					]
				}, w.step))
			})]
		})
	});
}
function Testimonials({ testimonials }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: "Clients"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl text-4xl tracking-tight md:text-5xl",
					children: "Trusted by developers, builders and landowners."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: testimonials?.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass rounded-3xl p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-xl leading-snug tracking-tight md:text-2xl",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-gold/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-foreground",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: t.role
							})] })]
						})]
					}, t.name))
				})
			]
		})
	});
}
function Contact({ contact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-background shadow-elev md:p-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-12 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-[0.2em] text-background/60",
									children: "Request a quote"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 text-4xl tracking-tight md:text-5xl",
									children: [
										"Let's draw your",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient-gold",
											children: "next landmark"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-background/70",
									children: "Tell us about the parcel. We'll come back within 48 hours with a concept direction, scope and fee proposal."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-10 space-y-4 text-sm text-background/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold" }),
												" ",
												contact.email
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }),
												" ",
												contact.phone
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
												" ",
												contact.address
											]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							className: "md:col-span-6",
							onSubmit: (e) => {
								e.preventDefault();
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											placeholder: "Your name",
											className: "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											placeholder: "Email",
											className: "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										placeholder: "Project location",
										className: "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background outline-none transition focus:border-white/40",
										defaultValue: "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												className: "text-foreground",
												children: "What do you need?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "text-foreground",
												children: "2D plot mapping"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "text-foreground",
												children: "3D plot modeling"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "text-foreground",
												children: "Master plan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "text-foreground",
												children: "Construction drawings"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												className: "text-foreground",
												children: "Full development package"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 4,
										placeholder: "Tell us about the parcel",
										className: "rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-medium text-gold-foreground shadow-[var(--shadow-gold)] transition hover:brightness-105",
										children: ["Send request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})
						})]
					})
				]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo/civilsphere-logo.png",
						alt: "CivilSphere Studio Logo",
						className: "h-6 w-6 object-cover rounded-full border border-zinc-200"
					}),
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" CivilSphere Studio. All rights reserved."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Privacy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Instagram"
					})
				]
			})]
		})
	});
}
function Home() {
	const content = Route.useLoaderData() || defaultContent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { hero: content.hero }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, { about: content.about }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, { services: content.services }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapsShowcase, { maps: content.maps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { projects: content.projects }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { workflow: content.workflow }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, { testimonials: content.testimonials }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { contact: content.contact }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
