import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectBySlug, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Amro Rabea` },
        { name: "description", content: project.tagline },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-accent">← All projects</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted">{error.message}</p>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-16">
      <Link to="/projects" className="font-mono text-xs text-muted-foreground hover:text-foreground">
        ← All projects
      </Link>

      <header className="mt-8 border-b border-border pb-10">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t: string) => (
            <span key={t} className="rounded-md border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.tagline}</p>
        <dl className="mt-8 grid gap-6 font-mono text-xs md:grid-cols-3">
          <div><dt className="text-muted-foreground uppercase tracking-widest">Role</dt><dd className="mt-1 text-foreground">{project.role}</dd></div>
          <div><dt className="text-muted-foreground uppercase tracking-widest">Timeline</dt><dd className="mt-1 text-foreground">{project.period}</dd></div>
          <div><dt className="text-muted-foreground uppercase tracking-widest">Links</dt>
            <dd className="mt-1 flex flex-col gap-1">
              {project.link && <a className="text-accent hover:underline" href={project.link.href} target="_blank" rel="noreferrer">{project.link.label} ↗</a>}
              {project.repo && <a className="text-accent hover:underline" href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
            </dd>
          </div>
        </dl>
      </header>

      <Section title="Summary">
        <p>{project.summary}</p>
      </Section>

      <Section title="Problem">
        <p>{project.problem}</p>
      </Section>

      <Section title="Approach">
        <ul className="space-y-3">
          {project.approach.map((a: string) => (
            <li key={a} className="flex gap-3 text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Results">
        <ul className="space-y-3">
          {project.results.map((r: string) => (
            <li key={r} className="flex gap-3 text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-success" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Stack">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((s: string) => (
            <li key={s} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground">{s}</li>
          ))}
        </ul>
      </Section>

      <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Next</span>
        <Link to="/projects/$slug" params={{ slug: next.slug }} className="text-right text-lg font-semibold text-foreground hover:text-accent">
          {next.title} →
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 grid gap-4 md:grid-cols-[160px_1fr]">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{title}</h2>
      <div className="text-base leading-relaxed text-foreground [&_p]:text-muted">{children}</div>
    </section>
  );
}