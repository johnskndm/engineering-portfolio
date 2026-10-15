import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </Container>
  );
}
