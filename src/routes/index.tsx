import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-latent.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

const timeline = [
  { year: "2022", label: "Started CS", note: "Modern Academy Maadi." },
  { year: "2023", label: "Computer Vision", note: "OpenCV, classical + CNN pipelines." },
  { year: "2024", label: "Backend Engineering", note: "FastAPI, Celery, Redis, microservices." },
  { year: "2025", label: "Generative AI", note: "Latent diffusion, RAG, semantic retrieval." },
  { year: "Now", label: "Production AI systems", note: "Shipping CV & GenAI to real users.", active: true },
  { year: "Next", label: "Multimodal foundation models", note: "" },
];

const stack = {
  AI: ["PyTorch", "TensorFlow", "OpenCV", "Diffusion", "Transformers", "LangChain", "RAG"],
  Backend: ["FastAPI", "REST", "Celery", "Redis", "Docker", "Microservices"],
  Languages: ["Python", "C++", "JavaScript", "SQL"],
};

function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1088}
            aria-hidden
            className="h-full w-full object-cover opacity-60 [mask-image:radial-gradient(ellipse_at_50%_35%,black_40%,transparent_78%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 grid-bg" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-36">
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium text-muted" style={{ animation: "rise-in 0.6s ease-out both" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="font-mono uppercase tracking-widest text-muted-foreground">Available · Research-to-Production</span>
          </div>

          <h1
            className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl"
            style={{ animation: "rise-in 0.7s ease-out 0.05s both" }}
          >
            Building intelligent vision systems that bridge{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              AI research
            </span>{" "}
            and production.
          </h1>

          <p
            className="mt-8 max-w-2xl text-pretty text-lg text-muted md:text-xl"
            style={{ animation: "rise-in 0.7s ease-out 0.15s both" }}
          >
            I&apos;m <span className="text-foreground">Amro Rabea</span> — an AI engineer working across computer vision, diffusion models, and FastAPI-backed ML infrastructure. Currently shipping latent-diffusion virtual try-on and semantic video retrieval systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" style={{ animation: "rise-in 0.7s ease-out 0.25s both" }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-px"
            >
              View projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <a
              href="https://drive.google.com/file/d/1PEhBZUdtSyPvkREupkMzPKurL5hQPU6W/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface-2"
            >
              Download résumé
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Contact →
            </Link>
          </div>

          {/* Metrics panel */}
          <div
            className="mt-20 overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur-md"
            style={{ animation: "rise-in 0.7s ease-out 0.35s both" }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-2.5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }} />
                signal / metrics.json
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
                live · 2025—2026
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {[
                { k: "Focus", v: "CV · GenAI", sub: "Vision · Diffusion" },
                { k: "GPU VRAM saved", v: "30%", sub: "20GB → 14GB on T4" },
                { k: "Inference latency", v: "↓ 30%", sub: "prod pipelines" },
                { k: "Shipped systems", v: "3+", sub: "end-to-end" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="group relative bg-surface/60 px-5 py-6 transition-colors hover:bg-surface-2/80"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="mt-2 font-display text-3xl font-semibold text-foreground">
                    {s.v}
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-muted-foreground/80">{s.sub}</div>
                  <span className="absolute inset-x-5 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / About */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionLabel index="01" title="Trajectory" note="How I got here, and where next." />
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
          <p className="max-w-md text-muted">
            CS student turned ML engineer. I like the point where research papers become a service someone actually calls. Vision, diffusion, and the plumbing that ships them.
          </p>
          <ol className="relative border-l border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="mb-8 last:mb-0">
                <span
                  className={`absolute -left-[7px] mt-1.5 inline-block h-3.5 w-3.5 rounded-full border-2 border-background ${
                    t.active ? "bg-accent" : "bg-muted-foreground/40"
                  }`}
                  style={t.active ? { animation: "pulse-dot 2.4s ease-in-out infinite" } : undefined}
                />
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t.year}</div>
                <div className="mt-1 text-lg font-medium text-foreground">{t.label}</div>
                {t.note && <div className="text-sm text-muted">{t.note}</div>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel index="02" title="Stack" note="Tools I reach for by default." />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex items-end justify-between">
          <SectionLabel index="03" title="Selected work" note="End-to-end AI systems, from model to endpoint." />
          <Link to="/projects" className="hidden text-sm text-muted hover:text-foreground md:inline">
            All projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold leading-snug text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.tagline}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="font-mono text-muted-foreground">{p.period}</span>
                <span className="text-muted transition-colors group-hover:text-accent">Case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="relative">
            <h2 className="max-w-2xl text-4xl font-semibold text-foreground md:text-5xl">
              Have a vision problem worth solving?
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Open to collaborations, contract work, and full-time roles in computer vision and generative AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:amroalsafy@gmail.com"
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-px"
              >
                amroalsafy@gmail.com
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
              >
                All channels →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        {index} / {title}
      </div>
      {note && <h2 className="mt-3 max-w-xl text-3xl font-semibold text-foreground md:text-4xl">{note}</h2>}
    </div>
  );
}
