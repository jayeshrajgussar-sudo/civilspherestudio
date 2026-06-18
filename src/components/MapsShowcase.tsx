import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Box, Maximize2, Ruler, Compass } from "lucide-react";
import map2dSubdivision from "@/assets/map-2d-subdivision.jpg";
import map2dZoning from "@/assets/map-2d-zoning.jpg";
import map3dVillas from "@/assets/map-3d-villas.jpg";
import map3dHillside from "@/assets/map-3d-hillside.jpg";

type Mode = "2d" | "3d";

const maps = {
  "2d": [
    {
      img: map2dSubdivision,
      title: "Verdant Ridge — Subdivision Plan",
      meta: "124 plots · 38 ha · Permit set",
      tag: "2D Plot Map",
    },
    {
      img: map2dZoning,
      title: "Linden Quarter — Zoning Plan",
      meta: "Mixed-use · Color-coded parcels",
      tag: "2D Site Map",
    },
  ],
  "3d": [
    {
      img: map3dVillas,
      title: "Marea Villas — 3D Plot Visualization",
      meta: "Isometric render · 46 villas",
      tag: "3D Site Map",
    },
    {
      img: map3dHillside,
      title: "Cliffside Heights — Aerial 3D",
      meta: "Drone-accurate · Photoreal",
      tag: "3D Master Plan",
    },
  ],
};

const defaultMaps = maps;

export default function MapsShowcase({ maps: dynamicMaps }: { maps?: any }) {
  const [mode, setMode] = useState<Mode>("2d");
  
  const activeMaps = dynamicMaps && (dynamicMaps["2d"]?.length > 0 || dynamicMaps["3d"]?.length > 0) ? dynamicMaps : defaultMaps;
  const items = activeMaps[mode] || [];

  return (
    <section id="maps" className="relative py-28">
      {/* Ambient 3D backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Plot mapping
            </div>
            <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
              See your land in <span className="text-gradient-blue">2D</span> &{" "}
              <span className="text-gradient-gold">3D</span>.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Survey-accurate plot maps and cinematic 3D site visualizations —
              the same parcel, told two ways. Approval-ready for authorities,
              persuasive for investors.
            </p>
          </div>

          {/* Modern 3D pill switcher */}
          <div className="glass relative inline-flex rounded-full p-1 shadow-elev">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-foreground ${
                mode === "2d" ? "left-1" : "left-[calc(50%+0rem)]"
              }`}
            />
            {(["2d", "3d"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`relative z-10 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm transition ${
                  mode === m ? "text-background" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {m === "2d" ? <Layers className="h-4 w-4" /> : <Box className="h-4 w-4" />}
                {m.toUpperCase()} maps
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((it, i) => (
              <motion.figure
                key={it.title}
                layout
                initial={{ opacity: 0, y: 30, rotateX: -8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elev"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                  <img
                    src={it.img}
                    alt={it.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className={`h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04] ${
                      mode === "2d" ? "mix-blend-multiply" : ""
                    }`}
                  />
                  {/* 3D grid overlay for premium feel */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute left-4 top-4">
                    <span className="glass rounded-full px-3 py-1 text-[11px] font-medium text-foreground/80">
                      {it.tag}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow-soft">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow-soft">
                      {mode === "2d" ? <Ruler className="h-3.5 w-3.5" /> : <Compass className="h-3.5 w-3.5" />}
                    </span>
                  </div>
                </div>
                <figcaption className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <div className="font-display text-lg tracking-tight">{it.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{it.meta}</div>
                  </div>
                  <div className="hidden items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[11px] text-muted-foreground sm:inline-flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live preview
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
