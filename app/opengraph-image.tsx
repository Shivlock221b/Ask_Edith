import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EDITH — A working wearable AI agent prototype";
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
        flexDirection: "column",
        overflow: "hidden",
        background: "#0a0a09",
        color: "#f2f1e9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          height: 72,
          width: "100%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          padding: "0 44px",
          borderBottom: "1px solid #292925",
          background: "#0d0d0c",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: "#d5ff3f",
            }}
          />
          EDITH
          <span style={{ color: "#707069", fontSize: 11, letterSpacing: 1 }}>
            / v0
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            marginLeft: "auto",
            marginRight: 30,
            color: "#aaa9a0",
            fontSize: 12,
          }}
        >
          <span>Demo</span>
          <span>Live flows</span>
          <span>System</span>
          <span>Build</span>
        </div>

        <div
          style={{
            height: 40,
            display: "flex",
            alignItems: "center",
            padding: "0 17px",
            borderRadius: 2,
            background: "#d5ff3f",
            color: "#151513",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          Contact Shivam&nbsp; →
        </div>
      </div>

      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 42,
          padding: "38px 44px 34px",
        }}
      >
        <div
          style={{
            width: "49%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 430,
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "9px 13px",
              border: "1px solid #292925",
              borderRadius: 99,
              color: "#aaa9a0",
              fontSize: 10,
              letterSpacing: 1.1,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 99,
                background: "#d5ff3f",
              }}
            />
            INDEPENDENT WORKING PROTOTYPE · BUILT BY SHIVAM TIWARI
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 104,
              fontWeight: 600,
              letterSpacing: -8,
              lineHeight: 0.76,
            }}
          >
            EDITH
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 35,
              maxWidth: 525,
              fontSize: 38,
              letterSpacing: -2,
              lineHeight: 1.01,
            }}
          >
            A wearable interface for AI agents.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              maxWidth: 500,
              color: "#aaa9a0",
              fontSize: 16,
              lineHeight: 1.45,
            }}
          >
            See the device, agent system, integrations, and product experience
            working together.
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <div
              style={{
                height: 43,
                display: "flex",
                alignItems: "center",
                padding: "0 18px",
                borderRadius: 2,
                background: "#d5ff3f",
                color: "#151513",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Watch the demo
            </div>
            <div
              style={{
                height: 43,
                display: "flex",
                alignItems: "center",
                padding: "0 18px",
                border: "1px solid #292925",
                borderRadius: 2,
                color: "#f2f1e9",
                fontSize: 12,
              }}
            >
              Contact Shivam
            </div>
          </div>
        </div>

        <div
          style={{
            width: "51%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #30302b",
            background: "#0e0e0c",
            transform: "rotate(0.5deg)",
            boxShadow: "0 28px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              height: 35,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 13px",
              borderBottom: "1px solid #242421",
              color: "#77776f",
              fontSize: 9,
              letterSpacing: 1.2,
            }}
          >
            <span>EDITH / CONCEPT STUDY</span>
            <span>FORM / 01</span>
          </div>

          <div
            style={{
              height: 405,
              display: "flex",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={heroImageData as unknown as string}
              alt=""
              width={685}
              height={941}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 46%",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 13,
                bottom: 13,
                display: "flex",
                padding: "8px 10px",
                border: "1px solid rgba(255,255,255,0.28)",
                background: "rgba(10,10,9,0.82)",
                color: "#dfded6",
                fontSize: 8,
                letterSpacing: 1,
              }}
            >
              AI-GENERATED CONCEPT · NOT CURRENT HARDWARE
            </div>
          </div>

          <div
            style={{
              height: 35,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 13px",
              borderTop: "1px solid #242421",
              color: "#62625a",
              fontSize: 9,
              letterSpacing: 1.2,
            }}
          >
            <span>CONCEPT / NOT CURRENT HARDWARE</span>
            <span>INDIA / 2026</span>
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
