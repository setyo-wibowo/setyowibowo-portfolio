import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { EXPERIENCES } from "../lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Pengalaman — Setyo Wibowo" },
      { name: "description", content: "Pengalaman kerja: Search Engine Optimization, Front-End Dev, Freelance" },
      { property: "og:title", content: "Pengalaman — Setyo Wibowo" },
      { property: "og:description", content: "Pengalaman kerja: Search Engine Optimization, Front-End Dev, Freelance" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Career" title="Pengalaman" subtitle="Perjalanan saya sebagai SEO, Front-End Dev, Cyber Security." />

      <ol className="relative space-y-5 border-l-[3px] border-foreground pl-6 ml-2">
        {EXPERIENCES.map((e, i) => (
          <li key={e.role} className="relative animate-pop-in" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="absolute -left-[34px] top-3 brutal-border bg-primary w-5 h-5" />
            <div className="brutal-card bg-card p-5">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <h2 className="text-xl font-black uppercase leading-tight">{e.role}</h2>
                  <div className="text-sm font-bold mt-0.5">{e.company}</div>
                </div>
                <span className="tag-chip shrink-0">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <span className="font-black">▸</span><span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
