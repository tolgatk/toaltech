import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function ogImage(eyebrow: string, title: string, sub: string) {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: "linear-gradient(135deg,#0a1f45 0%,#0f2a5a 60%,#1d4ed8 100%)", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36, fontWeight: 700 }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: "#2563eb", display: "flex" }} />
          <span>Toal<span style={{ color: "#93c5fd" }}>Tech</span></span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 28, color: "#93c5fd", letterSpacing: 4, textTransform: "uppercase" }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 40 ? 64 : 80, fontWeight: 800, lineHeight: 1.05 }}>{title}</div>
          <div style={{ fontSize: 30, color: "#dbeafe" }}>{sub}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#bfdbfe" }}>
          <span>toaltech.com</span><span>0535 515 22 37 · WhatsApp</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
