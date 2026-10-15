import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowIcon, MountedImage } from "@/components/ui";

export function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl focus-visible:outline-offset-8"
    >
      <MountedImage
        image={project.cover}
        mount={project.cover.mount}
        sizes="(min-width: 1152px) 1088px, calc(100vw - 40px)"
        preload={priority}
        hover
      />
      <div className="mt-6 grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
        <span className="font-mono text-sm text-muted">{project.index}</span>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
            {[project.category, ...project.tools].map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          View case study
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
