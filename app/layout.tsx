import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ask-edith-eta.vercel.app"),
  title: "EDITH — The Interface for AI Agents in the Real World",
  description: "EDITH combines a context-aware wearable with an orchestration layer that helps users see, hear, remember, delegate and act.",
  openGraph: {
    title: "EDITH — The Interface for AI Agents in the Real World",
    description: "See. Hear. Remember. Delegate. Act.",
    type: "website",
    images: [{ url: "/opengraph-image?v=3", width: 1200, height: 630, alt: "EDITH — The interface for AI agents in the real world" }],
  },
  twitter: { card: "summary_large_image", title: "EDITH — The Interface for AI Agents in the Real World", description: "See. Hear. Remember. Delegate. Act.", images: ["/opengraph-image?v=3"] },
};

export const viewport: Viewport = { themeColor: "#0a0a09", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
