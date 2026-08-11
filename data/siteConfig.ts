export const siteConfig = {
  name: "EDITH",
  title: "EDITH — Context for AI in the Real World",
  description:
    "EDITH is an experimental context-aware AI wearable that helps multimodal AI understand what you see, hear and do.",
  location: "India",
  year: "2026",
  founder: {
    name: "Shivam",
    photo: "/media/shivam.jpg",
  },
  contact: {
    email: "",
    linkedin: "",
    x: "",
    github: "",
  },
  media: {
    hero: { type: "video" as const, src: "/media/prototype-demo.mp4", poster: "/media/prototype-poster.jpg" },
    prototype: { type: "video" as const, src: "/media/prototype-demo.mp4", poster: "/media/prototype-poster.jpg" },
  },
};

export const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Prototype", href: "#prototype" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Progress", href: "#progress" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Founder", href: "#founder" },
];
