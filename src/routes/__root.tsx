import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home, User, FolderKanban, Award, Briefcase, MessageSquare } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="brutal-card p-8 max-w-md text-center bg-primary">
        <h1 className="text-7xl font-black">404</h1>
        <p className="mt-2 font-bold uppercase">Halaman tidak ditemukan</p>
        <Link to="/" className="mt-6 inline-block brutal-border bg-card px-4 py-2 font-bold brutal-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition">
          ← Pulang
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="brutal-card p-8 max-w-md text-center">
        <h1 className="text-2xl font-black uppercase">Ada error</h1>
        <p className="mt-2 text-sm">Coba muat ulang halaman.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 brutal-border bg-primary px-4 py-2 font-bold brutal-shadow-sm"
        >Coba lagi</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Setyo Wibowo — Portfolio" },
      { name: "description", content: "Portfolio brutalist Setyo Wibowo — project, sertifikat, pengalaman, dan kontak." },
      { name: "author", content: "Setyo Wibowo" },
      { property: "og:title", content: "Setyo Wibowo — Portfolio" },
      { property: "og:description", content: "Portfolio brutalist Setyo Wibowo — project, sertifikat, pengalaman, dan kontak." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Setyo Wibowo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Setyo Wibowo — Portfolio" },
      { name: "twitter:description", content: "Portfolio brutalist Setyo Wibowo — project, sertifikat, pengalaman, dan kontak." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c829061-9710-454b-bafa-321eb46147de/id-preview-c7dee3b8--c687b928-38fd-4224-a380-504221805918.lovable.app-1782096224959.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c829061-9710-454b-bafa-321eb46147de/id-preview-c7dee3b8--c687b928-38fd-4224-a380-504221805918.lovable.app-1782096224959.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/projects", label: "Projek", icon: FolderKanban },
  { to: "/certificates", label: "Sertif", icon: Award },
  { to: "/experience", label: "Karir", icon: Briefcase },
  { to: "/contact", label: "Kontak", icon: MessageSquare },
] as const;

function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-2xl"
    >
      <ul className="flex items-stretch justify-between gap-1 brutal-border bg-card brutal-shadow p-1.5">
        {NAV.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className={[
                  "flex flex-col items-center justify-center gap-0.5 px-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-150",
                  active
                    ? "bg-primary text-foreground translate-y-[-1px] brutal-shadow-sm"
                    : "bg-card text-foreground hover:bg-muted active:translate-y-[1px]",
                ].join(" ")}
              >
                <Icon className="h-5 w-5" strokeWidth={2.5} />
                <span className="hidden xs:inline sm:inline">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen pb-28">
        <Outlet />
      </div>
      <BottomNav />
    </QueryClientProvider>
  );
}
