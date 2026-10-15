import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import {
  ArrowIcon,
  Container,
  Eyebrow,
  ImageRow,
  MountedImage,
} from "@/components/ui";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const next = projects[(i + 1) % projects.length];

  const specs = [
    { label: "Type", value: project.category },
    { label: "Status", value: project.status },
    ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
    { label: "Tools", value: project.tools.join(", ") },
    { label: "Skills", value: project.disciplines.join(", ") },
  ];

  return (
    <article>
      {/* Header */}
      <Container className="pt-10 sm:pt-14">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowIcon className="rotate-180 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
        <div className="rise mt-10">
          <Eyebrow>
            Project {project.index} — {project.category}
          </Eyebrow>
        </div>
        <h1
          className="rise mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {project.title}
        </h1>
        <p
          className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {project.summary}
        </p>
      </Container>

      {/* Hero visual */}
      <Container className="rise mt-12" style={{ animationDelay: "220ms" }}>
        <figure>
          <MountedImage
            image={project.hero}
            mount={project.hero.mount}
            aspect={project.hero.aspect}
            sizes="(min-width: 1152px) 1000px, 90vw"
            preload
          />
          <figcaption className="mt-3 text-sm text-muted">
            {project.hero.caption}
          </figcaption>
        </figure>
      </Container>

      {/* Spec sheet */}
      <Container className="mt-12">
        <dl className={`grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 ${
            specs.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}>
          {specs.map((s) => (
            <div key={s.label} className="bg-paper p-5">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {s.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Overview */}
      <Container className="grid gap-10 py-20 md:grid-cols-[1fr_2fr] sm:py-24">
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
        </Reveal>
        <Reveal className="space-y-6 text-lg leading-relaxed sm:text-xl">
          {project.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </Container>

      {/* Challenge */}
      <section className="bg-ink text-paper">
        <Container className="py-20 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
            The challenge
          </p>
          <Reveal>
            <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
              {project.challenge}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Approach */}
      <Container className="py-20 sm:py-24">
        <Eyebrow>Design &amp; process</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Approach
        </h2>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {project.approach.map((step, idx) => (
            <li key={step.title} className="bg-paper p-7 sm:p-9">
              <Reveal delay={(idx % 2) * 80}>
                <span className="font-mono text-xs text-muted">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>

      {/* Gallery */}
      <Container className="pb-20 sm:pb-24">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.galleryTitle}
        </h2>
        <div className="mt-12 space-y-16">
          {project.gallery.map((group) => (
            <Reveal key={group.title}>
              <section aria-label={group.title}>
                <h3 className="mb-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {group.title}
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </h3>
                <ImageRow images={group.images} />
              </section>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Features + outcome */}
      <section className="border-t border-line bg-surface">
        <Container className="grid gap-16 py-20 sm:py-24 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Key features</Eyebrow>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {project.features.map((f) => (
                <li key={f} className="flex gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>{project.outcome.heading}</Eyebrow>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              {project.outcome.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {project.outcome.note && (
              <p className="mt-6 rounded-lg border border-line bg-paper p-4 text-sm leading-relaxed text-muted">
                <span className="font-medium text-ink">Note: </span>
                {project.outcome.note}
              </p>
            )}
            <h3 className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              What I learned
            </h3>
            <ul className="mt-4 space-y-3">
              {project.learned.map((l) => (
                <li key={l} className="leading-relaxed">
                  — {l}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Next project */}
      <Link
        href={`/projects/${next.slug}`}
        className="group block border-t border-line"
      >
        <Container className="flex items-center justify-between gap-6 py-14 sm:py-20">
          <div>
            <Eyebrow>Next project</Eyebrow>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {next.title}
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:bg-ink group-hover:text-paper">
            <ArrowIcon className="h-5 w-5" />
          </span>
        </Container>
      </Link>
    </article>
  );
}
