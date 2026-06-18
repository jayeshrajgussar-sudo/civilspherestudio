import { createFileRoute } from "@tanstack/react-router";
import { motion } from "react-wrap-balancer"; // Wait, in standard React we can just use normal motion from framer-motion
import { motion as motionFramer } from "framer-motion";
import {
  Map,
  Box,
  Compass,
  Trees,
  Ruler,
  Building2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Play,
  Menu,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import MapsShowcase from "@/components/MapsShowcase";
import { getContent } from "../lib/cms";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";


export const Route = createFileRoute("/")({
  loader: async () => {
    return await getContent();
  },
  head: ({ loaderData }) => {
    const data = loaderData || defaultContent;
    const title = data.hero ? `${data.hero.titlePart1} ${data.hero.titlePart2} — CivilSphere Studio` : "CivilSphere Studio — Civil Architect & Land Development Studio";
    const desc = data.hero?.subtitle || "Premium civil architecture and land development studio.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/" },
      ],
      links: [{ rel: "canonical", href: "/" }],
    };
  },
  component: Home,
});

// Fallback site content in case the CMS JSON data file is missing
const defaultContent = {
  hero: {
    titlePart1: "Turning land into",
    titlePart2: "landmark developments.",
    subtitle: "Professional 2D mapping, 3D visualization, site planning and construction design for landowners, builders, developers and investors who expect more from the ground up.",
    stats: [
      { value: "180+", label: "Projects delivered" },
      { value: "42", label: "Master plans built" },
      { value: "14 yrs", label: "On the ground" }
    ]
  },
  about: {
    title: "A studio where survey lines become skylines.",
    description: "CivilSphere Studio is a civil architecture and land development studio working across the full arc of a project — from the first contour of a raw parcel to the final keys of a finished home. We pair rigorous engineering with cinematic 3D craft so every stakeholder sees, understands and believes in the plan.",
    features: [
      "Licensed civil & architectural team",
      "Drone survey & GIS mapping in-house",
      "Real-time 3D and VR walkthroughs",
      "Buildable, tender-ready document sets"
    ]
  },
  services: [
    {
      icon: "Map",
      title: "2D Plot Mapping",
      body: "Survey-accurate site plans, boundary mapping and subdivision drawings ready for approval."
    },
    {
      icon: "Box",
      title: "3D Plot Modeling",
      body: "Photoreal 3D models of every lot, façade and street so clients see the project before a stone is laid."
    },
    {
      icon: "Compass",
      title: "Site Planning",
      body: "Master plans that balance density, sunlight, circulation and the character of the land."
    },
    {
      icon: "Trees",
      title: "Land Development Layouts",
      body: "Subdivision layouts engineered for yield, livability and long-term value."
    },
    {
      icon: "Ruler",
      title: "Construction Drawings",
      body: "Working drawings, sections and details coordinated for buildable, on-budget delivery."
    },
    {
      icon: "Building2",
      title: "Architectural Visualization",
      body: "Cinematic renders, aerial flythroughs and VR walkthroughs that close the sale."
    }
  ],
  projects: [
    {
      img: "/uploads/project-masterplan.jpg",
      tag: "Master plan",
      title: "Verdant Ridge Estates",
      meta: "124 plots · 38 ha · Phase 02 in construction"
    },
    {
      img: "/uploads/project-hillside.jpg",
      tag: "Hillside community",
      title: "Marea Cliff Residences",
      meta: "46 terraced villas · Coastal · 2025"
    },
    {
      img: "/uploads/project-urban.jpg",
      tag: "Mixed-use district",
      title: "Linden Civic Quarter",
      meta: "Mid-rise · Retail spine · Public plaza"
    },
    {
      img: "/uploads/project-blueprint.jpg",
      tag: "Subdivision study",
      title: "Northgate Land Parcel",
      meta: "Concept to permit · 11.4 ha"
    }
  ],
  workflow: [
    { step: "01", title: "Site survey", body: "Topographic survey, drone capture and parcel research." },
    { step: "02", title: "Concept & zoning", body: "Massing studies, yield analysis and code-compliance checks." },
    { step: "03", title: "3D master plan", body: "Interactive 3D plan with terrain, roads, plots and landscape." },
    { step: "04", title: "Construction set", body: "Working drawings, schedules and tender-ready documentation." }
  ],
  testimonials: [
    {
      quote: "They turned a steep, awkward parcel into our best-selling community. The 3D plan sold the project before we broke ground.",
      name: "Daniela Rocha",
      role: "Managing Director, Norte Developments"
    },
    {
      quote: "Exceptional craft. Every drawing arrived coordinated, dimensioned and buildable. Our site foreman barely had a question.",
      name: "Idris Khan",
      role: "Principal, Halcyon Build Group"
    }
  ],
  contact: {
    email: "studio@civilsphere.studio",
    phone: "+1 (415) 555 0142",
    address: "22 Pier Lane, Studio 4 — Coastal District"
  },
  maps: {
    "2d": [],
    "3d": []
  }
};

// Icon rendering helper mapping dynamic strings from JSON database to Lucide components
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <Compass className={className} />;
  return <IconComponent className={className} />;
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="bg-zinc-950/85 border border-zinc-800/60 backdrop-blur-md flex items-center justify-between rounded-2xl px-4 py-3 shadow-lg">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo/civilsphere-logo.png" alt="CivilSphere Studio Logo" className="h-8 w-8 object-cover rounded-full border border-zinc-800" />
            <span className="font-display text-lg tracking-tight text-white font-medium">
              CivilSphere <span className="text-gradient-blue">Studio</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#workflow" className="hover:text-white transition">Workflow</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="/admin" className="hover:text-white transition">Login</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 font-medium transition hover:bg-zinc-100 shadow-sm"
            >
              Request consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Nav Hamburger Sheet */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="flex items-center justify-center rounded-xl border border-zinc-850 bg-zinc-900/60 p-2 text-white hover:bg-zinc-800/80 transition cursor-pointer">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-zinc-950/98 border-l border-zinc-800 text-white p-6 flex flex-col justify-between">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 border-b border-zinc-900 pb-4">
                      <img src="/logo/civilsphere-logo.png" alt="CivilSphere Logo" className="h-7 w-7 object-cover rounded-full border border-zinc-800" />
                      <SheetTitle className="font-display text-md tracking-tight text-white font-medium">
                        CivilSphere <span className="text-gradient-blue">Studio</span>
                      </SheetTitle>
                    </div>
                    <nav className="flex flex-col gap-4 text-base text-zinc-400 font-medium mt-4">
                      <SheetClose asChild>
                        <a href="#services" className="py-2 hover:text-white transition border-b border-zinc-900 pb-2">Services</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#projects" className="py-2 hover:text-white transition border-b border-zinc-900 pb-2">Projects</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#workflow" className="py-2 hover:text-white transition border-b border-zinc-900 pb-2">Workflow</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="#contact" className="py-2 hover:text-white transition border-b border-zinc-900 pb-2">Contact</a>
                      </SheetClose>
                      <SheetClose asChild>
                        <a href="/admin" className="py-2 hover:text-white transition border-b border-zinc-900 pb-2">Login</a>
                      </SheetClose>
                    </nav>
                  </div>
                  <div className="mt-auto pt-6 border-t border-zinc-900">
                    <SheetClose asChild>
                      <a
                        href="#contact"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm text-zinc-950 font-semibold transition hover:bg-zinc-100 shadow-sm"
                      >
                        Request consultation
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero({ hero }: { hero: any }) {
  const heroImage = "/uploads/project-masterplan.jpg";

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 0%, oklch(0.96 0.02 240) 0%, oklch(0.99 0.005 240) 60%, oklch(0.97 0.01 230) 100%)",
          }}
        />
        <div className="absolute inset-0">
          {hero.videoUrl ? (
            <video
              src={hero.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ opacity: (hero.bgOpacity !== undefined ? hero.bgOpacity : 75) / 100 }}
            />
          ) : (
            <img
              src={heroImage}
              alt="Masterplan aerial view"
              className="h-full w-full object-cover"
              style={{ opacity: (hero.bgOpacity !== undefined ? hero.bgOpacity : 40) / 100 }}
            />
          )}
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
        <motionFramer.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Civil architecture · Land development · 3D visualization
          </div>
          <h1 className="mt-6 text-5xl leading-[1.02] tracking-tight md:text-7xl">
            {hero.titlePart1}
            <br />
            <span className="text-gradient-blue">{hero.titlePart2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm text-background shadow-elev transition hover:bg-foreground/90"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm text-foreground transition hover:bg-white"
            >
              Request consultation
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm">
            {hero.stats?.map((stat: any) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-4">
                <div className="font-display text-2xl tracking-tight">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motionFramer.div>
      </div>
    </section>
  );
}

function About({ about }: { about: any }) {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About the studio
          </div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
            {about.title}
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg text-muted-foreground">
            {about.description}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.features?.map((i: string) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-foreground/80">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services({ services }: { services: any[] }) {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </div>
            <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
              Everything between the
              <br />
              site survey and the skyline.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services?.map((s, i) => (
            <motionFramer.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-elev"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motionFramer.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ projects }: { projects: any[] }) {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Featured projects
            </div>
            <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
              Plans that became places.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            See the full portfolio <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {projects?.map((p, i) => (
            <motionFramer.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative block overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-elev ${
                i === 0 ? "md:col-span-8" : i === 3 ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1600}
                  height={1000}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="glass rounded-full px-3 py-1 text-[11px] text-foreground/80">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-background">
                  <div>
                    <div className="font-display text-2xl leading-tight tracking-tight">
                      {p.title}
                    </div>
                    <div className="mt-1 text-xs text-background/80">{p.meta}</div>
                  </div>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background/90 text-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motionFramer.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow({ workflow }: { workflow: any[] }) {
  return (
    <section id="workflow" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Workflow
          </div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
            From raw parcel to ribbon-cut, in four deliberate moves.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {workflow?.map((w, i) => (
            <motionFramer.div
              key={w.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <div className="font-display text-5xl text-gradient-gold">{w.step}</div>
              <div className="mt-6 text-lg tracking-tight">{w.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
            </motionFramer.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ testimonials }: { testimonials: any[] }) {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Clients
        </div>
        <h2 className="mt-4 max-w-3xl text-4xl tracking-tight md:text-5xl">
          Trusted by developers, builders and landowners.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials?.map((t) => (
            <figure key={t.name} className="glass rounded-3xl p-8">
              <blockquote className="font-display text-xl leading-snug tracking-tight md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/60 to-gold/60" />
                <div>
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ contact }: { contact: any }) {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-background shadow-elev md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="text-xs uppercase tracking-[0.2em] text-background/60">
                Request a quote
              </div>
              <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">
                Let's draw your
                <br />
                <span className="text-gradient-gold">next landmark</span>.
              </h2>
              <p className="mt-5 max-w-md text-background/70">
                Tell us about the parcel. We'll come back within 48 hours with a
                concept direction, scope and fee proposal.
              </p>

              <ul className="mt-10 space-y-4 text-sm text-background/80">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" /> {contact.email}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" /> {contact.phone}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" /> {contact.address}
                </li>
              </ul>
            </div>

            <form
              className="md:col-span-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your name"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
                  />
                </div>
                <input
                  placeholder="Project location"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
                />
                <select
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background outline-none transition focus:border-white/40"
                  defaultValue=""
                >
                  <option value="" disabled className="text-foreground">
                    What do you need?
                  </option>
                  <option className="text-foreground">2D plot mapping</option>
                  <option className="text-foreground">3D plot modeling</option>
                  <option className="text-foreground">Master plan</option>
                  <option className="text-foreground">Construction drawings</option>
                  <option className="text-foreground">Full development package</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about the parcel"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-background placeholder:text-background/50 outline-none transition focus:border-white/40"
                />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-medium text-gold-foreground shadow-[var(--shadow-gold)] transition hover:brightness-105"
                >
                  Send request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <img src="/logo/civilsphere-logo.png" alt="CivilSphere Studio Logo" className="h-6 w-6 object-cover rounded-full border border-zinc-200" />
          © {new Date().getFullYear()} CivilSphere Studio. All rights reserved.
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const loadedData = Route.useLoaderData();
  const content = loadedData || defaultContent;

  return (
    <main className="relative">
      <Nav />
      <Hero hero={content.hero} />
      <About about={content.about} />
      <Services services={content.services} />
      <MapsShowcase maps={content.maps} />
      <Projects projects={content.projects} />
      <Workflow workflow={content.workflow} />
      <Testimonials testimonials={content.testimonials} />
      <Contact contact={content.contact} />
      <Footer />
    </main>
  );
}
