import { ImageResponse } from "next/og";
import { kartvizit } from "@/lib/kartvizit";

export const alt = "ToalTech & ToBeCreative dijital kartvizit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "linear-gradient(140deg,#071231 0%,#12306b 55%,#4c1d95 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, letterSpacing: 6, color: "#93c5fd", textTransform: "uppercase" }}>
          NFC Dijital Kartvizit
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <div style={{ display: "flex", width: 132, height: 132, borderRadius: 34, background: "#ffffff", alignItems: "center", justifyContent: "center" }}>
            <svg width="76" height="76" viewBox="0 0 44 44">
              <path d="M4 10h30l-6 8H14l4 16L4 10z" fill="#2563eb" />
              <path d="M22 14h18l-4 6h-8l-6 18-4-14 4-10z" fill="#0f2a5a" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>{kartvizit.displayName}</div>
            <div style={{ fontSize: 30, color: "#c7d2fe" }}>{kartvizit.subtitle}</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#bfdbfe" }}>
          <span>toaltech.com · tobecreative.net</span>
          <span>{kartvizit.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
