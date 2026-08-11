import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edith.build"),
  title: "EDITH — Context for AI in the Real World",
  description: "EDITH is an experimental context-aware AI wearable that helps multimodal AI understand what you see, hear and do.",
  openGraph: {
    title: "EDITH — Context for AI in the Real World",
    description: "Give AI eyes and ears in the real world.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EDITH — Give AI eyes and ears in the real world." }],
  },
  twitter: { card: "summary_large_image", title: "EDITH — Context for AI in the Real World", description: "Give AI eyes and ears in the real world.", images: ["/opengraph-image"] },
};

export const viewport: Viewport = { themeColor: "#0a0a09", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
