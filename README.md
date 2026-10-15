# Jacob Johnson — Engineering Portfolio

Next.js 16 · TypeScript · Tailwind CSS 4

## Preview locally

```bash
cd ~/Documents/engineering-portfolio
npm install        # only needed the first time / after pulling changes
npm run dev
```

Open http://localhost:3000. Edits reload automatically. Stop the server with `Ctrl + C`.

Production check: `npm run build && npm start`.

## Content

| What | Where |
| --- | --- |
| Email, LinkedIn | `src/lib/site.ts` (`email`, `linkedin`) |
| Resume PDF | `public/resume/Jacob-Johnson-Resume.pdf` |
| Resume phone preview | `public/resume/resume-preview.png` — page 1 of the PDF, shown on phones (mobile browsers can't embed PDFs). **Regenerate it whenever you replace the PDF:** `qlmanage -t -s 1700 -o /tmp public/resume/Jacob-Johnson-Resume.pdf && mv /tmp/Jacob-Johnson-Resume.pdf.png public/resume/resume-preview.png` |
| Project images | `public/projects/<project>/` — imported at the top of `src/lib/projects.ts` (hero, card cover, gallery rows) |
| Headshot (placeholder) | `public/images/headshot.jpg`, then replace `<PlaceholderFigure>` in `src/app/about/page.tsx` |
| Project text | `src/lib/projects.ts` |

Tip: macOS screenshot filenames contain an invisible special space before "AM/PM" that breaks imports — rename new screenshots to simple names like `assembly-front.png`.

## Structure

```
src/app/            pages: / , /projects, /projects/[slug], /about, /resume, /contact
src/components/     header, footer, project card, scroll reveal, shared UI
src/lib/site.ts     name, contact links, skills, navigation
src/lib/projects.ts all project case-study content
```
