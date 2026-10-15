import type { StaticImageData } from "next/image";

// Laptop stand — Siemens NX screenshots
import standBase from "../../public/projects/laptop-stand/base-plate.png";
import standPlatformUnderside from "../../public/projects/laptop-stand/platform-underside.png";
import standPlatform from "../../public/projects/laptop-stand/platform-top.png";
import standFolded from "../../public/projects/laptop-stand/assembly-folded.png";
import standRaised from "../../public/projects/laptop-stand/assembly-raised.png";
import standMid from "../../public/projects/laptop-stand/assembly-mid-height.png";
import standRear from "../../public/projects/laptop-stand/assembly-rear.png";
import standPivot from "../../public/projects/laptop-stand/pivot-joint-detail.png";

// Golf club face — photos of the machined part + CAD detail
import clubAngle from "../../public/projects/golf-club-face/machined-face-angle.jpg";
import clubFace from "../../public/projects/golf-club-face/machined-face-front.jpg";
import clubCad from "../../public/projects/golf-club-face/cad-pyramid-pattern.png";

/**
 * PROJECT CONTENT
 * ───────────────
 * Images are statically imported from /public so Next.js knows their exact
 * dimensions, serves resized WebP/AVIF versions, and shows a blur-up preview
 * while they load. To add an image: put it in public/projects/<project>/,
 * import it above, and reference it below.
 */

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

/** Background behind an image when it is shown inside a framed panel. */
export type Mount = {
  bg: string;
  /** Inner padding so the subject isn't pressed against the frame. */
  padded: boolean;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  category: string;
  status: string;
  timeline?: string;
  tools: string[];
  disciplines: string[];
  /** Main image on the project page. */
  hero: ProjectImage & { mount: Mount; aspect: string };
  /** Image on project cards (home + projects list). */
  cover: ProjectImage & { mount: Mount };
  overview: string[];
  challenge: string;
  approach: { title: string; body: string }[];
  features: string[];
  outcome: { heading: string; body: string[]; note?: string };
  learned: string[];
  galleryTitle: string;
  /** Each group renders as one row; images in a row share a height. */
  gallery: { title: string; images: ProjectImage[] }[];
};

const cadMount: Mount = { bg: "#ffffff", padded: true };
const photoMount: Mount = { bg: "#e9e6e0", padded: true };

const standHero = {
  src: standMid,
  alt: "Siemens NX model of the adjustable laptop stand with support arms angled to hold the platform at a mid-height working position",
  caption: "Full assembly in a mid-height working position",
};

export const projects: Project[] = [
  {
    slug: "adjustable-laptop-stand",
    index: "01",
    title: "Adjustable Laptop Stand",
    summary:
      "An ergonomic, height- and angle-adjustable laptop stand designed in Siemens NX, built around adjustable support arms, pivot joints, and a fully constrained assembly.",
    category: "Product Design · CAD",
    status: "CAD design — not a manufactured prototype",
    tools: ["Siemens NX"],
    disciplines: [
      "Parametric modeling",
      "Assembly constraints",
      "Mechanism design",
      "Ergonomics",
    ],
    hero: { ...standHero, mount: cadMount, aspect: "aspect-[4/3] sm:aspect-[16/9]" },
    cover: { ...standHero, mount: cadMount },
    overview: [
      "Long hours on a laptop push the screen too low and the wrists into awkward positions. This project explores a stand that lets the user tune both the height and the viewing angle of the laptop to fit their own posture and workspace.",
      "The design was developed entirely in Siemens NX as a digital product model: a base plate, a laptop platform, and a pair of support arms joined by pivots, brought together in a constrained assembly that can be moved through its range of positions.",
    ],
    challenge:
      "Design a stand that is genuinely adjustable while still feeling stable and simple to use — the mechanism should add flexibility without adding complexity for the user.",
    approach: [
      {
        title: "Adjustable support arms",
        body: "Two support arms carry the laptop platform. Changing their angle raises, lowers, and tilts the platform, so a single product can serve different users, desks, and tasks.",
      },
      {
        title: "Pivot joints",
        body: "Clevis-style brackets on the base plate and the underside of the platform form pivot joints at both ends of each arm, giving the stand its range of motion.",
      },
      {
        title: "Assembly constraints",
        body: "The assembly was built with mating and angle constraints so the parts behave like a real mechanism — the arms rotate about their pivots, and the platform follows.",
      },
      {
        title: "Ergonomics & usability",
        body: "Design decisions were weighed against how a person actually uses a laptop: raising the screen toward eye level, angling the keyboard comfortably, and keeping the laptop secure with front lips and corner pads.",
      },
    ],
    features: [
      "Two adjustable support arms with pivot joints at each end",
      "Base plate with clevis brackets and corner pads",
      "Laptop platform with front retaining lips, corner pads, and cutouts",
      "Folds down low or raises to an elevated working height",
      "Fully constrained multi-part assembly in Siemens NX",
    ],
    outcome: {
      heading: "Result",
      body: [
        "A complete Siemens NX part and assembly model of an adjustable laptop stand. The constrained assembly can be posed from a folded position through mid-height and raised configurations, showing how the mechanism is intended to move.",
      ],
      note: "This is a CAD design project. It has not been manufactured or physically tested.",
    },
    learned: [
      "Planning an assembly around how it needs to move, not just how it looks",
      "Using constraints deliberately to model real joint behavior",
      "Translating ergonomic goals into specific geometric decisions",
    ],
    galleryTitle: "Inside the model",
    gallery: [
      {
        title: "Components",
        images: [
          {
            src: standBase,
            alt: "Base plate of the laptop stand with two clevis brackets and dark corner pads",
            caption: "Base plate with clevis brackets for the arm pivots",
          },
          {
            src: standPlatformUnderside,
            alt: "Underside of the laptop platform showing mounting brackets and two cutouts",
            caption: "Platform underside with arm mounting brackets",
          },
          {
            src: standPlatform,
            alt: "Top of the laptop platform showing corner pads, cutouts, and front retaining lips",
            caption: "Platform top with front lips and corner pads",
          },
        ],
      },
      {
        title: "Range of motion",
        images: [
          {
            src: standFolded,
            alt: "Laptop stand assembly folded into its low position with angle constraints visible",
            caption: "Folded, low position",
          },
          {
            src: standRaised,
            alt: "Laptop stand assembly with support arms raised upright and the platform elevated",
            caption: "Raised position",
          },
        ],
      },
      {
        title: "Arms & pivot joints",
        images: [
          {
            src: standRear,
            alt: "Rear view of the raised laptop stand showing both support arms and their pivots",
            caption: "Rear view of the raised assembly",
          },
          {
            src: standPivot,
            alt: "Close-up of one support arm with its upper and lower pivot joints",
            caption: "Support arm and pivot joint detail",
          },
        ],
      },
    ],
  },
  {
    slug: "cnc-golf-club-face",
    index: "02",
    title: "CNC-Machined Golf Club Face",
    summary:
      "A custom aluminum golf club face with pyramidal groove geometry, programmed in Mastercam, CNC-machined, and evaluated over 100 test shots.",
    category: "Manufacturing · CAM · Testing",
    status: "Machined prototype (non-USGA-conforming), range-tested",
    timeline: "April – May 2023",
    tools: ["Mastercam", "G-code", "CNC vertical mill"],
    disciplines: [
      "CAM programming",
      "Toolpath planning",
      "Dimensional verification",
      "Comparative testing",
    ],
    hero: {
      src: clubAngle,
      alt: "The finished CNC-machined aluminum club face with its pyramidal texture, mounted on a club",
      caption: "The finished, machined club face",
      mount: photoMount,
      aspect: "aspect-[4/5] sm:aspect-[16/10]",
    },
    cover: {
      src: clubCad,
      alt: "CAD model of the club face showing the grid of pyramidal features with a dimensioned detail view",
      caption: "CAD model of the pyramidal face pattern",
      mount: { bg: "#2b2d31", padded: false },
    },
    overview: [
      "The grooves on a golf club face influence how much spin the ball carries and how it behaves after it lands. This project asked a simple question: what happens if the conventional groove pattern is replaced with a pyramidal geometry?",
      "The face was designed to reduce ball spin and produce a flatter trajectory, programmed in Mastercam, converted to G-code, and machined from aluminum on a CNC vertical mill — then taken to the range and actually hit.",
    ],
    challenge:
      "Produce an accurate, repeatable pyramidal surface pattern on a small aluminum part, then evaluate whether it changed the ball's behavior in a way that could be observed.",
    approach: [
      {
        title: "Pyramidal groove geometry",
        body: "Instead of straight grooves, the face is covered in a grid of small pyramids, intended to reduce ball spin and produce a flatter trajectory.",
      },
      {
        title: "Mastercam toolpaths",
        body: "2.5D roughing and finishing toolpaths were developed in Mastercam to produce the face profile and the pyramid pattern from aluminum stock.",
      },
      {
        title: "G-code & CNC machining",
        body: "Toolpaths were post-processed to G-code and run on a CNC vertical mill. The finished part was dimensionally verified against the CAD design.",
      },
      {
        title: "Range testing",
        body: "The prototype was evaluated over 100 test shots in comparative range testing against a standard club face, with attention to how the ball behaved after landing.",
      },
    ],
    features: [
      "Custom aluminum club face",
      "Pyramidal groove pattern across the full face",
      "2.5D roughing and finishing toolpaths in Mastercam",
      "Machined on a CNC vertical mill and checked against the CAD model",
      "Evaluated over 100 test shots against a standard club face",
    ],
    outcome: {
      heading: "What the testing showed",
      body: [
        "Across 100 test shots, I observed substantially reduced post-landing roll on most shots compared with a standard club face.",
      ],
      note: "Results are summarized qualitatively here; no specific measured values are claimed. The face is a non-USGA-conforming prototype built for experimentation.",
    },
    learned: [
      "Going from a design intent all the way to a physical part through CAM and G-code",
      "How toolpath choices shape what geometry is actually achievable",
      "Designing a simple comparative test and being honest about what it can and can't show",
    ],
    galleryTitle: "From CAD to machined part",
    gallery: [
      {
        title: "Design to part",
        images: [
          {
            src: clubCad,
            alt: "CAD model of the club face showing the grid of pyramidal features with a dimensioned detail view",
            caption: "CAD model with a dimensioned detail of the pyramid geometry",
          },
          {
            src: clubFace,
            alt: "Face-on photo of the machined club face showing the diamond pattern of pyramids",
            caption: "Machined face, straight on",
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
