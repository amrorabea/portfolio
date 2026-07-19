import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Notes — Amro Rabea" },
      { name: "description", content: "Notes on computer vision, diffusion models, RAG, and production ML systems." },
      { property: "og:title", content: "Notes — Amro Rabea" },
      { property: "og:description", content: "Notes on CV, diffusion, RAG, and production ML." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

const categories = ["Computer Vision", "Diffusion", "RAG", "FastAPI", "System Design", "Papers"];

function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Notes</div>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Working out loud.</h1>
      <p className="mt-4 text-muted">
        Long-form and short-form writing on what I&apos;m building and reading. First posts are drafting — check back soon.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <span key={c} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">{c}</span>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-border bg-surface/40 p-10 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Coming soon</div>
        <p className="mt-3 text-muted">
          First notes: memory-optimising latent diffusion for T4s, and building a semantic video index from scratch.
        </p>
      </div>
    </div>
  );
}