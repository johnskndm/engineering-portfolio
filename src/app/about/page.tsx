import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PlaceholderFigure,
} from "@/components/ui";
import { site, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — Applied Engineering Sciences at Michigan State University.`,
};

const experience = {
  org: "MSU Infrastructure Planning and Facilities",
  role: "Technical Engineering Assistant",
  period: "Dec 2023 – Jun 2025",
  duties: [
    "Work alongside engineers in MSU's facilities organization",
    "Create and revise AutoCAD drawings",
    "Update Revit building models",
    "Conduct field measurements to verify and document existing conditions",
  ],
};

const qualities = [
  {
    title: "Work ethic",
    body: "I show up prepared and follow through. Working with professional engineers for nearly two years has taught me that accuracy and reliability matter as much as technical skill.",
  },
  {
    title: "Adaptability",
    body: "My work spans parametric CAD, building information models, CNC programming, and software. I'm comfortable switching contexts and tools to fit the problem.",
  },
  {
    title: "Rapid learning",
    body: "I learn new technical tools quickly — across six CAD and CAM platforms, three programming languages, and AI-assisted development with Claude Code.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="grid gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <div className="rise">
            <Eyebrow>About</Eyebrow>
          </div>
          <h1
            className="rise mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            An engineer who likes to see ideas become real things.
          </h1>
          <div
            className="rise mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            <p>
              I&apos;m {site.name}, an Applied Engineering Sciences student at
              Michigan State University, graduating in {site.graduation}. My
              focus is product design and mechanical engineering — the space
              where a design has to work for the person using it{" "}
              <em>and</em> for the process that makes it.
            </p>
            <p>
              Alongside my coursework, I&apos;ve spent nearly two years working
              with engineers at MSU Infrastructure Planning and Facilities,
              where I&apos;ve learned how real engineering work gets documented,
              checked, and delivered.
            </p>
          </div>
        </div>
        <div className="rise" style={{ animationDelay: "220ms" }}>
          {/* Headshot: save it as public/images/headshot.jpg and swap this
              placeholder for <Image src="/images/headshot.jpg" … /> */}
          <PlaceholderFigure
            label="Professional headshot"
            suggestedPath="/images/headshot.jpg"
            aspect="aspect-[4/5]"
          />
        </div>
      </Container>

      {/* Experience */}
      <section className="border-t border-line bg-surface">
        <Container className="grid gap-10 py-20 sm:py-24 md:grid-cols-[1fr_2fr]">
          <Eyebrow>Experience</Eyebrow>
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {experience.org}
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {experience.period}
              </span>
            </div>
            <p className="mt-3 text-muted">
              {experience.role}
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {experience.duties.map((d) => (
                <li key={d} className="flex gap-4 py-4 text-lg">
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Qualities */}
      <Container className="py-20 sm:py-24">
        <Eyebrow>What I bring</Eyebrow>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {qualities.map((q, i) => (
            <Reveal key={q.title} delay={i * 90}>
              <div className="border-t border-ink pt-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {q.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{q.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Skills */}
      <section className="border-t border-line">
        <Container className="grid gap-10 py-20 sm:py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Skills</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Technical toolkit
            </h2>
          </div>
          <div className="space-y-10">
            {Object.entries(skills).map(([group, items]) => (
              <Reveal key={group}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-16">
          <p className="text-2xl font-semibold tracking-tight">
            Want the full picture?
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/resume">View resume</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact me
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
