import { kartvizit } from "@/lib/kartvizit";

export const dynamic = "force-static";

/**
 * Kartvizite özel manifest: ana ekrana eklendiğinde kök sayfayı değil
 * kartviziti tam ekran (standalone) açar.
 */
export function GET() {
  const manifest = {
    name: `${kartvizit.displayName} – Dijital Kartvizit`,
    short_name: "Kartvizit",
    description: "ToalTech & ToBeCreative dijital kartviziti.",
    start_url: "/kartvizit",
    scope: "/kartvizit",
    display: "standalone",
    orientation: "portrait",
    background_color: "#060f26",
    theme_color: "#060f26",
    icons: [
      { src: "/marka/toaltech-logo.png", sizes: "512x512", type: "image/png" },
      { src: "/marka/toaltech-logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };

  return Response.json(manifest, {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
