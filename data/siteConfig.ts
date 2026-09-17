export const siteConfig = {
  name: "EDITH",
  title: "Shivam Tiwari — AI Product Builder | EDITH",
  description:
    "The portfolio of Shivam Tiwari: EDITH, AI agents, marketplaces, commerce, and full-stack products.",
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
  { label: "Demo", href: "#demo" },
  { label: "Live flows", href: "#use-cases" },
  { label: "System", href: "#system" },
  { label: "Selected work", href: "#work" },
  { label: "About", href: "#about" },
];
