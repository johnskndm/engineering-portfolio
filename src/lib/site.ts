/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit this file to fill in your placeholders.
 * ─────────────────────────────────────────────────────────────
 *  Leave a value as an empty string ("") and the site will show a
 *  clearly labeled placeholder in its place.
 */
export const site = {
  name: "Jacob Johnson",
  role: "Applied Engineering Sciences · Michigan State University",
  focus: "Product design & mechanical engineering",
  graduation: "May 2027",

  // TODO: add your email, e.g. "you@example.com"
  email: "john8373@msu.edu",
  // TODO: add your full LinkedIn URL, e.g. "https://www.linkedin.com/in/your-handle"
  linkedin: "https://www.linkedin.com/in/jacob-johnson-profile333/",

  /**
   * Resume: drop your PDF at  public/resume/Jacob-Johnson-Resume.pdf
   * The download buttons switch on automatically once the file exists
   * (restart `npm run dev` after adding it).
   */
  resumeFile: "/resume/Jacob-Johnson-Resume.pdf",
};

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const skills = {
  CAD: ["Siemens NX", "Creo", "SolidWorks", "Fusion 360", "AutoCAD", "Revit"],
  Manufacturing: ["Mastercam", "CNC toolpath planning", "G-code"],
  Programming: ["Python", "C", "Java", "AI-assisted development (Claude Code)"],
  "Field & documentation": [
    "Field measurements",
    "AutoCAD drawing updates",
    "Revit model updates",
  ],
} as const;
