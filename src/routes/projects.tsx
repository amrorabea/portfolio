import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Amro Rabea" },
      { name: "description", content: "Selected AI engineering work: virtual try-on, semantic video retrieval, spatial transcriptomics." },
      { property: "og:title", content: "Projects — Amro Rabea" },
      { property: "og:description", content: "Selected AI engineering work by Amro Rabea." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsLayout,
});

function ProjectsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/projects/$slug");
  if (isChild) return <Outlet />;
  return <ProjectsIndex />;
}

function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Index / Projects</div>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
        End-to-end AI systems, from model to endpoint.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Each project below shipped as a real service. Case studies cover architecture, tradeoffs, and results — not just screenshots.
      </p>

      <ul className="mt-16 divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group grid gap-4 py-8 transition-colors md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <div>
                <h2 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {p.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">{p.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground md:text-right">
                {p.period}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}