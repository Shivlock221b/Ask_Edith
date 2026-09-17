import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ask-edith-eta.vercel.app"),
  title: "Shivam Tiwari — AI Product Builder | EDITH",
  description: "The portfolio of Shivam Tiwari: EDITH, AI agents, marketplaces, commerce, and full-stack products.",
  openGraph: {
    title: "Shivam Tiwari — AI Product Builder",
    description: "EDITH, AI agents, marketplaces, commerce, and full-stack products.",
    type: "website",
    images: [{ url: "/opengraph-image?v=4", width: 1200, height: 630, alt: "EDITH — A working wearable AI agent prototype" }],
  },
  twitter: { card: "summary_large_image", title: "Shivam Tiwari — AI Product Builder", description: "EDITH, AI agents, marketplaces, commerce, and full-stack products.", images: ["/opengraph-image?v=4"] },
};

export const viewport: Viewport = { themeColor: "#0a0a09", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
