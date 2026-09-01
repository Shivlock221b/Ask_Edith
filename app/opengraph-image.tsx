import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EDITH — See. Hear. Remember. Delegate. Act.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a09", color: "#f1f0e9", padding: "72px 80px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, letterSpacing: 8 }}><span style={{ width: 12, height: 12, borderRadius: 99, background: "#d5ff3f" }} />EDITH</div>
      <div style={{ fontSize: 72, letterSpacing: -3, lineHeight: 1.05, maxWidth: 1000 }}>See. Hear. Remember. Delegate. Act.</div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#9a9a91", fontSize: 19, letterSpacing: 2 }}><span>CONTEXT + ACTION / PROTOTYPE v0</span><span>INDIA · 2026</span></div>
    </div>, size
  );
}
