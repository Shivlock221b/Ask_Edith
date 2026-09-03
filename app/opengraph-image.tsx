import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EDITH — The interface for AI agents in the real world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const heroImageData = await fetch(
    new URL("../public/media/edith-concept-enclosure.jpg", import.meta.url),
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a09",
        color: "#f1f0e9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={heroImageData as unknown as string}
        alt=""
        width={685}
        height={941}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "56%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 48%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "linear-gradient(90deg, #0a0a09 0%, #0a0a09 42%, rgba(10,10,9,0.92) 53%, rgba(10,10,9,0.22) 78%, rgba(10,10,9,0.08) 100%)",
        }}
      />

      <div
        style={{
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 68px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 8,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: "#d5ff3f",
            }}
          />
          EDITH
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              fontSize: 68,
              letterSpacing: -3,
              lineHeight: 1.02,
            }}
          >
            AI agents, in the real world.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 555,
              color: "#c6c5bd",
              fontSize: 24,
              lineHeight: 1.35,
            }}
          >
            See. Hear. Remember. Delegate. Act.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#9a9a91",
            fontSize: 15,
            letterSpacing: 1.6,
          }}
        >
          AI-GENERATED CONCEPT · NOT CURRENT HARDWARE
        </div>
      </div>
    </div>,
    size,
  );
}
