import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product design and mechanical engineering projects by Jacob Johnson.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
          <div className="rise">
            <Eyebrow>Work · {String(projects.length).padStart(2, "0")}</Eyebrow>
          </div>
          <h1
            className="rise mt-5 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Projects
          </h1>
          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "160ms" }}
          >
            Case studies spanning CAD-driven product design and hands-on CNC
            manufacturing. Each one documents the goal, the process, and an
            honest account of the result.
          </p>
        </Container>
      </section>
      <Container className="grid gap-24 py-20 sm:py-28">
        {projects.map((project, i) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} priority={i === 0} />
          </Reveal>
        ))}
      </Container>
    </>
  );
}
