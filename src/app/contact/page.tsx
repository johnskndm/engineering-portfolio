import type { Metadata } from "next";
import { ArrowIcon, Container, Eyebrow, PlaceholderTag } from "@/components/ui";
import { resumeIsAvailable } from "@/lib/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  const channels = [
    {
      label: "Email",
      value: site.email,
      href: site.email ? `mailto:${site.email}` : "",
      placeholder: "Email placeholder — add in src/lib/site.ts",
    },
    {
      label: "LinkedIn",
      value: site.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
      href: site.linkedin,
      placeholder: "LinkedIn placeholder — add in src/lib/site.ts",
      external: true,
    },
    {
      label: "Resume",
      value: resumeIsAvailable() ? "Download Resume" : "",
      href: resumeIsAvailable() ? site.resumeFile : "",
      placeholder: "Resume PDF not added yet",
      download: true,
    },
  ];

  return (
    <Container className="pb-24 pt-16 sm:pt-24">
      <div className="rise">
        <Eyebrow>Contact</Eyebrow>
      </div>
      <h1
        className="rise mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        Let&apos;s build something.
      </h1>
      <p
        className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
        style={{ animationDelay: "160ms" }}
      >
        I&apos;m open to conversations about product design and mechanical
        engineering opportunities. The best way to reach me is by email or
        LinkedIn.
      </p>

      <ul
        className="rise mt-14 divide-y divide-line border-y border-line"
        style={{ animationDelay: "220ms" }}
      >
        {channels.map((c) => (
          <li key={c.label}>
            {c.href ? (
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                download={c.download || undefined}
                className="group grid items-center gap-2 py-8 sm:grid-cols-[180px_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {c.label}
                </span>
                <span className="break-all text-2xl font-medium tracking-tight sm:text-4xl">
                  {c.value}
                </span>
                <ArrowIcon className="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 sm:block" />
              </a>
            ) : (
              <div className="grid items-center gap-3 py-8 sm:grid-cols-[180px_1fr] sm:gap-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {c.label}
                </span>
                <span>
                  <PlaceholderTag>{c.placeholder}</PlaceholderTag>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">
        {site.role} · Graduating {site.graduation}
      </p>
    </Container>
  );
}
