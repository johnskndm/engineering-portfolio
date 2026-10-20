import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { Mount, ProjectImage } from "@/lib/projects";

export function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}
      {...props}
    />
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const buttonStyles = {
  primary: "bg-ink text-paper hover:bg-black/80",
  secondary: "border border-ink/15 bg-surface text-ink hover:border-ink/40",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  external?: boolean;
  download?: boolean;
}) {
  const className = `group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${buttonStyles[variant]}`;
  const content = (
    <>
      {children}
      <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );
  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

/** A clearly labeled stand-in for content that hasn't been added yet. */
export function PlaceholderTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink/30 bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
      {children}
    </span>
  );
}

/**
 * Shows an image whole (never cropped) inside a framed panel.
 * With `aspect` the panel has a fixed shape and the image is fitted inside it;
 * without it the panel takes the image's own aspect ratio.
 */
export function MountedImage({
  image,
  mount,
  aspect,
  sizes,
  preload,
  hover,
}: {
  image: ProjectImage;
  mount: Mount;
  aspect?: string;
  sizes: string;
  preload?: boolean;
  hover?: boolean;
}) {
  const { width, height } = image.src;
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line ${aspect ?? ""}`}
      style={{
        backgroundColor: mount.bg,
        aspectRatio: aspect ? undefined : `${width} / ${height}`,
      }}
    >
      <div
        className={`absolute ${mount.padded ? "inset-[6%]" : "inset-0"} ${
          hover
            ? "transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            : ""
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-contain"
        />
      </div>
    </div>
  );
}

/**
 * A row of images that all share one height while keeping their own aspect
 * ratios (nothing is cropped). Stacks into a single column on phones.
 */
export function ImageRow({ images }: { images: ProjectImage[] }) {
  const totalRatio = images.reduce(
    (sum, img) => sum + img.src.width / img.src.height,
    0,
  );
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:gap-5">
      {images.map((img) => {
        const ratio = img.src.width / img.src.height;
        return (
          <figure
            key={img.caption}
            className="min-w-0 sm:[flex:var(--r)_1_0%]"
            style={{ "--r": ratio } as CSSProperties}
          >
            <div className="overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src={img.src}
                alt={img.alt}
                placeholder="blur"
                sizes={`(min-width: 1152px) ${Math.round(
                  (1088 * ratio) / totalRatio,
                )}px, (min-width: 640px) ${Math.round(
                  (100 * ratio) / totalRatio,
                )}vw, 100vw`}
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-snug text-muted">
              {img.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
