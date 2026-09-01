export const siteConfig = {
  name: "EDITH",
  title: "EDITH — The Interface for AI Agents in the Real World",
  description:
    "EDITH combines a context-aware wearable with an orchestration layer that helps users see, hear, remember, delegate and act.",
  location: "India",
  year: "2026",
  founder: {
    name: "Shivam Tiwari",
    photo: "/media/shivam.jpg",
  },
  contact: {
    email: "shivam.83240@gmail.com",
    linkedin: "",
    x: "https://x.com/shivamt_builds",
    xHandle: "@shivamt_builds",
    github: "",
  },
  media: {
    hero: { type: "image" as const, src: "/media/edith-concept-enclosure.jpg", poster: "" },
    prototype: { type: "video" as const, src: "/media/prototype-demo.mp4", poster: "/media/prototype-poster.jpg" },
  },
};

export const navItems = [
  { label: "Product", href: "#vision" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Prototype", href: "#prototype" },
  { label: "Progress", href: "#progress" },
  { label: "Founder", href: "#founder" },
];
