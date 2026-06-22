import { Github, Linkedin, Instagram, Twitter, Youtube, Mail, type LucideIcon } from "lucide-react";
import { SOCIALS } from "../lib/portfolio-data";

const ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  mail: Mail,
};

export function SocialLinks({ variant = "row" }: { variant?: "row" | "stack" }) {
  return (
    <ul
      className={
        variant === "row"
          ? "flex flex-wrap gap-2"
          : "grid grid-cols-2 gap-2"
      }
    >
      {SOCIALS.map((s, i) => {
        const Icon = ICONS[s.icon] ?? Mail;
        return (
          <li key={s.name}>
            <a
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={`${s.name} — ${s.handle}`}
              className="group inline-flex items-center gap-2 brutal-border bg-card px-3 py-2 text-sm font-black uppercase brutal-shadow-sm hover:bg-primary hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
              <span>{s.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function SocialIconRow() {
  return (
    <ul className="flex flex-wrap gap-2">
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.icon] ?? Mail;
        return (
          <li key={s.name}>
            <a
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.name}
              title={`${s.name} — ${s.handle}`}
              className="grid place-items-center h-10 w-10 brutal-border bg-card brutal-shadow-sm hover:bg-primary hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-all"
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
