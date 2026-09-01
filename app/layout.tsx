import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edith.build"),
  title: "EDITH — The Interface for AI Agents in the Real World",
  description: "EDITH combines a context-aware wearable with an orchestration layer that helps users see, hear, remember, delegate and act.",
  openGraph: {
    title: "EDITH — The Interface for AI Agents in the Real World",
    description: "See. Hear. Remember. Delegate. Act.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EDITH — See. Hear. Remember. Delegate. Act." }],
  },
  twitter: { card: "summary_large_image", title: "EDITH — The Interface for AI Agents in the Real World", description: "See. Hear. Remember. Delegate. Act.", images: ["/opengraph-image"] },
};

export const viewport: Viewport = { themeColor: "#0a0a09", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
