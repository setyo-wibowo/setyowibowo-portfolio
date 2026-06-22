import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SocialLinks } from "../components/SocialLinks";
import { PROFILE } from "../lib/portfolio-data";
import portrait from "../assets/setyo-profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang Saya — Setyo Wibowo" },
      { name: "description", content: PROFILE.bio },
      { property: "og:title", content: "Tentang Saya — Setyo Wibowo" },
      { property: "og:description", content: PROFILE.bio },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="About" title="Tentang Saya" subtitle="Front-End Dev | Cyber Security Enthusiast | Search Engine Optimization" />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="brutal-card bg-primary p-6 animate-pop-in">
          <div className="brutal-border bg-card aspect-square w-full overflow-hidden">
            <img
              src={portrait}
              alt={`Foto profil ${PROFILE.name}`}
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-1 text-sm font-bold uppercase">
            <div>{PROFILE.location}</div>
            <div>{PROFILE.role}</div>
          </div>
          <div className="mt-4 pt-4 border-t-[3px] border-foreground">
            <div className="text-xs font-black uppercase tracking-wider mb-2">Media Sosial</div>
            <SocialLinks variant="stack" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="brutal-card p-6 animate-pop-in" style={{animationDelay:"80ms"}}>
            <h2 className="text-2xl font-black uppercase mb-2">Profil</h2>
            <p className="leading-relaxed">Saya adalah Seorang Front-End Developer, SEO Specialist, dan Cyber Security Enthusiast, saya berdedikasi untuk menyediakan solusi digital komprehensif yang mengintegrasikan aspek estetika antarmuka, strategi optimasi mesin pencari yang terukur, serta implementasi standar keamanan siber yang ketat.</p>
          </div>
          <div className="brutal-card p-6 bg-card animate-pop-in" style={{animationDelay:"160ms"}}>
            <h2 className="text-2xl font-black uppercase mb-3">Riwayat Pendidikan</h2>
            <ul className="space-y-2">
              {[
                "SMK NEGERI 1 TEMPEH - Teknik Komputer Jaringan",
                "INSTITUT TEKNOLOGI INSAN CENDEKIA MANDIRI - S1 Informatika",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="brutal-border bg-primary w-6 h-6 grid place-items-center text-sm font-black shrink-0">🎓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
