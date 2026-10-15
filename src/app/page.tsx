import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/projects";
import { site, skills } from "@/lib/site";

const strengths = [
  {
    title: "Work ethic",
    body: "Nearly two years supporting engineers at MSU Infrastructure Planning and Facilities alongside my engineering studies.",
  },
  {
    title: "Adaptability",
    body: "Comfortable moving between CAD platforms, the CNC shop, field measurements, and code — whatever the problem calls for.",
  },
  {
    title: "Fast learning",
    body: "Picks up new technical tools quickly, from Mastercam toolpaths to AI-assisted development with Claude Code.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="rise">
            <Eyebrow>
              {site.role} — Class of {site.graduation}
            </Eyebrow>
          </div>
          <h1
            className="rise mt-6 max-w-5xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Designing products from first sketch to finished part.
          </h1>
          <div
            className="rise mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end"
            style={{ animationDelay: "160ms" }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              I&apos;m {site.name}, an engineering student focused on{" "}
              <span className="text-ink">product design</span> and{" "}
              <span className="text-ink">mechanical engineering</span> — working
              across CAD, CNC manufacturing, and code.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/resume" variant="secondary">
                Resume
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section aria-labelledby="work-heading">
        <Container className="py-20 sm:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2
                id="work-heading"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Projects
              </h2>
            </div>
            <span className="font-mono text-sm text-muted">
              {String(projects.length).padStart(2, "0")} case studies
            </span>
          </div>
          <div className="mt-12 grid gap-20 sm:gap-24">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How I work */}
      <section aria-labelledby="strengths-heading" className="bg-ink text-paper">
        <Container className="py-20 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
            How I work
          </p>
          <h2
            id="strengths-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Reliable, adaptable, and quick to get up to speed.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-paper/15 md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="bg-ink p-8">
                <span className="font-mono text-xs text-paper/50">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Toolkit */}
      <section aria-labelledby="toolkit-heading">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow>Toolkit</Eyebrow>
              <h2
                id="toolkit-heading"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Tools I use
              </h2>
            </div>
            <dl className="divide-y divide-line border-y border-line">
              {Object.entries(skills).map(([group, items]) => (
                <div
                  key={group}
                  className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted sm:pt-1">
                    {group}
                  </dt>
                  <dd className="text-lg leading-relaxed">
                    {items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
        <Container className="flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Open to opportunities in product design and mechanical
            engineering.
          </h2>
          <ButtonLink href="/contact">Get in touch</ButtonLink>
        </Container>
      </section>
    </>
  );
}
