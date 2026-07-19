import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Amro Rabea" },
      { name: "description", content: "About Amro Rabea, AI engineer working across computer vision, generative AI, and production ML systems." },
      { property: "og:title", content: "About — Amro Rabea" },
      { property: "og:description", content: "AI engineer · CV · Generative AI · Production ML." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">About</div>
      <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
        I ship AI systems, not just notebooks.
      </h1>

      <div className="prose-invert mt-10 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          I&apos;m a Machine Learning Engineer specialising in Computer Vision and Generative AI. I like the messy part of ML: the point where a model has to leave the notebook and live behind an API, on constrained hardware, for real users.
        </p>
        <p>
          Recently I&apos;ve worked on latent-diffusion virtual try-on with 3D reconstruction, and on a semantic video retrieval platform combining YOLOv8, BLIP captioning, and ChromaDB. Both shipped as FastAPI microservices with Celery + Redis handling long-running jobs.
        </p>
        <p>
          I&apos;m currently finishing my Bachelor of Computer Science at Modern Academy Maadi (Sep 2022 – Jun 2026), and completed the Digital Egypt Pioneers Initiative (DEPI) as an AI & Data Science Fellow.
        </p>
        <p>
          Interests: multimodal learning, large-scale AI systems, diffusion, RAG, and everything about making inference cheaper and faster.
        </p>
      </div>

      <div className="mt-16 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
        <Block label="Education">
          <p className="text-foreground">B.S. Computer Science</p>
          <p className="text-sm text-muted">Modern Academy Maadi · 2022 — 2026 · GPA 3.34</p>
        </Block>
        <Block label="Fellowship">
          <p className="text-foreground">AI & Data Science Fellow</p>
          <p className="text-sm text-muted">Digital Egypt Pioneers Initiative (DEPI) · 2024 — 2025</p>
        </Block>
        <Block label="Based in">
          <p className="text-foreground">Cairo, Egypt · Remote-friendly</p>
        </Block>
        <Block label="Contact">
          <a className="text-accent hover:underline" href="mailto:amroalsafy@gmail.com">amroalsafy@gmail.com</a>
        </Block>
      </div>
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}