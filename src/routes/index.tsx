import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { SocialIconRow } from "../components/SocialLinks";
import { PROFILE } from "../lib/portfolio-data";
import portrait from "../assets/setyo-profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${PROFILE.name} | Front-End Dev & Cyber Security Enthusiast` },
      { name: "description", content: "Portofolio Setyo Wibowo: Front-End Developer, SEO Specialist, dan Cyber Security Enthusiast yang ahli membangun website modern, aman, dan teroptimasi." },
      { property: "og:title", content: `${PROFILE.name} | Front-End Dev & Cyber Security Enthusiast` },
      { property: "og:description", content: "Portofolio Setyo Wibowo: Front-End Developer, SEO Specialist, dan Cyber Security Enthusiast yang ahli membangun website modern, aman, dan teroptimasi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* Marquee */}
      <div className="brutal-border bg-foreground text-background overflow-hidden mb-8 animate-pop-in">
        <div className="flex whitespace-nowrap animate-marquee py-2 font-black uppercase text-sm tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8 pr-8">
              {["Available for hire", "★", "Front-End Dev", "★", "Cyber Security Enthusiast", "★", "Search Engine Optimization", "★"].map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-stretch">
        <div className="brutal-card bg-primary p-6 sm:p-10 animate-pop-in">
          <div className="flex items-start gap-4 sm:gap-5">
            <img
              src={portrait}
              alt={`Foto profil ${PROFILE.name}`}
              width={1024}
              height={1024}
              className="brutal-border brutal-shadow-sm bg-card h-20 w-20 sm:h-28 sm:w-28 object-cover shrink-0"
            />
            <div className="min-w-0">
              <span className="tag-chip bg-card">Halo! Saya,</span>
              <h1 className="mt-3 text-4xl sm:text-6xl font-black uppercase leading-[0.9] tracking-tight">
                Setyo <span className="hover-glitch inline-block">{PROFILE.name.split(" ")[1]}</span>.
              </h1>
            </div>
          </div>
          <div className="mt-4">
            <span className="bg-foreground text-background px-2 inline-block text-2xl sm:text-4xl font-black uppercase">{PROFILE.role}</span>
          </div>
          <p className="mt-5 max-w-xl font-medium text-base sm:text-lg">{PROFILE.tagline}</p>
          <div className="mt-6">
            <SocialIconRow />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projects" className="brutal-border bg-foreground text-background px-5 py-3 font-black uppercase brutal-shadow-sm inline-flex items-center gap-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all">
              Lihat Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="brutal-border bg-card px-5 py-3 font-black uppercase brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all">
              RESUME
            </Link>
          </div>
        </div>
        <div className="brutal-card bg-card p-6 flex flex-col justify-between animate-pop-in" style={{ animationDelay: "80ms" }}>
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase">
              <Sparkles className="h-4 w-4" /> Singkat Tentang Saya
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><b className="font-black">Alamat:</b> {PROFILE.location}</li>
              <li><b className="font-black">Status:</b> Bersedia Kerja Sama</li>
              <li><b className="font-black">Fokus:</b> Penetration Testing, Front-End Project, Search Engine Optimization</li>
              <li><b className="font-black">Bahasa:</b> Indonesia && English</li>
            </ul>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {PROFILE.stats.map((s) => (
              <div key={s.label} className="brutal-border bg-primary p-3 text-center">
                <div className="text-2xl font-black">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="mt-10">
        <h2 className="text-2xl font-black uppercase mb-3">Kemampuan</h2>
        <div className="flex flex-wrap gap-2">
          {PROFILE.skills.map((s) => (
            <span key={s} className="brutal-border bg-card px-3 py-1.5 text-sm font-bold uppercase brutal-shadow-sm hover:bg-primary transition-colors">
              {s}
            </span>
          ))}
        </div>
      </section>
      
    </PageShell>
  );
}
