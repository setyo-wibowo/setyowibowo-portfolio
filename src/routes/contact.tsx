import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Send, Mail, MapPin } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SocialLinks } from "../components/SocialLinks";
import { PROFILE } from "../lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — Setyo Wibowo" },
      { name: "description", content: "Mari Berinteraksi Dengan Saya" },
      { property: "og:title", content: "Kontak — Setyo Wibowo" },
      { property: "og:description", content: "Mari Berinteraksi Dengan Saya" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Halo ${PROFILE.name}!%0A%0A` +
      `*Nama:* ${encodeURIComponent(name)}%0A` +
      `*Subjek:* ${encodeURIComponent(subject)}%0A%0A` +
      `${encodeURIComponent(message)}`;
    const url = `https://wa.me/${PROFILE.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <PageShell>
      <PageHeader eyebrow="Contact" title="Kontak Saya" subtitle="Isi form di bawah — anda akan berinteraksi dengan secara online" />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={handleSubmit} className="brutal-card bg-card p-6 sm:p-8 space-y-4 animate-pop-in">
          <Field label="Nama Anda">
            <input
              required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Muhammad Setyo Wibowo"
              className="w-full brutal-border bg-background px-3 py-2.5 font-medium outline-none focus:bg-primary transition-colors"
            />
          </Field>
          <Field label="Subjek">
            <input
              required value={subject} onChange={(e) => setSubject(e.target.value)}
              placeholder="Saya ingin bangun website…"
              className="w-full brutal-border bg-background px-3 py-2.5 font-medium outline-none focus:bg-primary transition-colors"
            />
          </Field>
          <Field label="Pesan">
            <textarea
              required value={message} onChange={(e) => setMessage(e.target.value)}
              rows={5} placeholder="Ceritakan project Anda…"
              className="w-full brutal-border bg-background px-3 py-2.5 font-medium outline-none focus:bg-primary transition-colors resize-y"
            />
          </Field>
          <button
            type="submit"
            className="w-full brutal-border bg-[#25D366] text-foreground px-5 py-3 font-black uppercase brutal-shadow inline-flex items-center justify-center gap-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_var(--color-ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
          >
            <Send className="h-4 w-4" /> Kirim Pesan
          </button>
          <p className="text-xs font-medium text-muted-foreground text-center">
            Mohon Isi Form Dengan Benar
          </p>
        </form>

        <aside className="space-y-4">
          <div className="brutal-card bg-primary p-6 animate-pop-in" style={{animationDelay:"80ms"}}>
            <div className="flex items-center gap-2 text-sm font-black uppercase">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </div>
            <a
              href={`https://wa.me/${PROFILE.whatsapp}`}
              target="_blank" rel="noopener"
              className="mt-3 block brutal-border bg-card px-3 py-2 font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              +{PROFILE.whatsapp}
            </a>
          </div>
          <div className="brutal-card bg-card p-6 animate-pop-in" style={{animationDelay:"160ms"}}>
            <div className="flex items-center gap-2 text-sm font-black uppercase">
              <Mail className="h-4 w-4" /> Email
            </div>
            <div className="mt-2 font-mono text-sm break-all">{PROFILE.email}</div>
          </div>
          <div className="brutal-card bg-card p-6 animate-pop-in" style={{animationDelay:"240ms"}}>
            <div className="flex items-center gap-2 text-sm font-black uppercase">
              <MapPin className="h-4 w-4" /> Lokasi
            </div>
            <div className="mt-2 font-medium">{PROFILE.location}</div>
          </div>
          <div className="brutal-card bg-card p-6 animate-pop-in" style={{animationDelay:"320ms"}}>
            <div className="text-sm font-black uppercase mb-3">Media Sosial</div>
            <SocialLinks variant="stack" />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-black uppercase tracking-wider mb-1.5">{label}</span>
      {children}
    </label>
  );
}
