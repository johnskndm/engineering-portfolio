import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowIcon,
  Container,
  Eyebrow,
  PlaceholderTag,
} from "@/components/ui";
import { resumeIsAvailable } from "@/lib/resume";
import { site } from "@/lib/site";
import resumePreview from "../../../public/resume/resume-preview.png";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — ${site.role}, graduating ${site.graduation}.`,
};

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResumePage() {
  const available = resumeIsAvailable();
  const fileName = site.resumeFile.split("/").pop();

  return (
    <Container className="pb-24 pt-16 sm:pt-24">
      <div className="rise flex flex-wrap items-end justify-between gap-8">
        <div>
          <Eyebrow>Resume</Eyebrow>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">
            Resume
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.role}. {site.focus}. Graduating {site.graduation}.
          </p>
        </div>
        {available ? (
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={site.resumeFile}
              download={fileName}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-black/80"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <a
              href={site.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-ink/40"
            >
              Open PDF in new tab
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        ) : (
          <PlaceholderTag>Resume PDF not found</PlaceholderTag>
        )}
      </div>

      {available ? (
        <div className="rise mt-14" style={{ animationDelay: "120ms" }}>
          {/* Desktop & tablet: live, scrollable PDF viewer */}
          <div className="hidden overflow-hidden rounded-xl border border-line bg-[#525659] shadow-[0_30px_60px_-30px_rgb(0_0_0/0.25)] md:block">
            <iframe
              src={`${site.resumeFile}#view=FitH&toolbar=1`}
              title={`${site.name} resume (PDF)`}
              className="block h-[min(1100px,88vh)] w-full"
            />
          </div>

          {/* Phones: mobile browsers don't reliably render embedded PDFs,
              so show a page preview that opens the real PDF. */}
          <a
            href={site.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="group block md:hidden"
          >
            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_40px_-24px_rgb(0_0_0/0.3)]">
              <Image
                src={resumePreview}
                alt={`Preview of ${site.name}'s resume, page 1`}
                placeholder="blur"
                sizes="100vw"
                preload
                className="h-auto w-full"
              />
            </div>
            <span className="mt-3 inline-flex items-center gap-2 text-sm text-muted group-hover:text-ink">
              Tap to open the full PDF
              <ArrowIcon />
            </span>
          </a>
        </div>
      ) : (
        <div className="blueprint mt-14 flex min-h-[60vh] flex-col items-center justify-center rounded-xl border border-dashed border-ink/25 p-8 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Resume placeholder
          </span>
          <p className="mt-3 max-w-md text-lg font-medium">
            Add your resume PDF to enable the preview and download button.
          </p>
          <p className="mt-4 rounded-md bg-surface px-3 py-2 font-mono text-xs text-muted">
            public{site.resumeFile}
          </p>
        </div>
      )}
    </Container>
  );
}
