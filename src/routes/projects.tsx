import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { PROJECTS } from "../lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project — Setyo Wibowo" },
      { name: "description", content: "Kumpulan project pilihan: web app, dashboard, marketplace, dan eksperimen." },
      { property: "og:title", content: "Project — Setyo Wibowo" },
      { property: "og:description", content: "Kumpulan project pilihan." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Work" title="Project Pilihan" subtitle={`${PROJECTS.length} proyek yang merepresentasikan cara saya bekerja.`} />

      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="brutal-card brutal-card-hover bg-card p-5 flex flex-col animate-pop-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-black uppercase leading-tight">{p.title}</h2>
              <span className="tag-chip shrink-0">{p.year}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="brutal-border bg-muted px-2 py-0.5 text-[11px] font-bold uppercase">{t}</span>
              ))}
            </div>
            <a
              href={p.link}
              className="mt-4 inline-flex items-center gap-2 self-start brutal-border bg-foreground text-background px-3 py-1.5 text-xs font-black uppercase brutal-shadow-sm hover:bg-primary hover:text-foreground transition-colors"
            >
              Lihat <ExternalLink className="h-3 w-3" />
            </a>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
