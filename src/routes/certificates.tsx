import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { CERTIFICATES } from "../lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Sertifikat — Setyo Wibowo" },
      { name: "description", content: "Sertifikat profesional Muhammad Setyo Wibowo" },
      { property: "og:title", content: "Sertifikat — Setyo Wibowo" },
      { property: "og:description", content: "Sertifikat profesional Muhammad Setyo Wibowo" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: CertPage,
});

function CertPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Credentials" title="Sertifikat" subtitle="Pembelajaran berkelanjutan — Menampilkan 2 Sertifikat yang Saya Miliki." />

      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATES.map((c, i) => (
          <div
            key={c.id}
            className="brutal-card brutal-card-hover p-5 bg-card animate-pop-in flex gap-4 items-start"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="brutal-border bg-primary w-14 h-14 grid place-items-center shrink-0">
              <Award className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-black uppercase leading-tight text-base">{c.title}</h2>
                <span className="tag-chip shrink-0">{c.year}</span>
              </div>
              <div className="text-sm font-bold mt-1">{c.issuer}</div>
              <div className="text-[11px] font-mono mt-1 text-muted-foreground truncate">ID: {c.id}</div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
