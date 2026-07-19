import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amro Rabea" },
      { name: "description", content: "Get in touch with Amro Rabea — AI engineer, computer vision and generative AI." },
      { property: "og:title", content: "Contact — Amro Rabea" },
      { property: "og:description", content: "Email, GitHub, LinkedIn." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "amroalsafy@gmail.com", href: "mailto:amroalsafy@gmail.com" },
  { label: "GitHub", value: "github.com/amrorabea", href: "https://github.com/amrorabea" },
  { label: "LinkedIn", value: "linkedin.com/in/amro-rabea", href: "https://www.linkedin.com/in/amro-rabea/" },
  { label: "Phone", value: "+20 103 358 8509", href: "tel:+201033588509" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-32 pt-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Contact</div>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Let&apos;s build something.</h1>
      <p className="mt-6 max-w-xl text-muted">
        Open to collaborations, contract work, and full-time roles in computer vision and generative AI. Fastest reply by email.
      </p>

      <ul className="mt-14 divide-y divide-border border-y border-border">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-baseline justify-between py-6 transition-colors hover:text-foreground"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
              <span className="text-lg text-foreground transition-colors group-hover:text-accent">{c.value} →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}