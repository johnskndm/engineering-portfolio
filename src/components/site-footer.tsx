import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {site.role}. {site.focus}. Graduating {site.graduation}.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              {site.email ? (
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              ) : (
                <span className="text-muted">[Email placeholder]</span>
              )}
            </li>
            <li>
              {site.linkedin ? (
                <a
                  href={site.linkedin}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              ) : (
                <span className="text-muted">[LinkedIn placeholder]</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 pb-10 font-mono text-[11px] uppercase tracking-widest text-muted sm:px-8">
        <span>© {site.name}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
