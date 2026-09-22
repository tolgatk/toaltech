import { readFile } from "node:fs/promises";
import path from "node:path";
import { brands, kartvizit } from "@/lib/kartvizit";

export const dynamic = "force-static";

/** vCard metin alanlarında \ , ; ve satır sonu kaçışlanmalı (RFC 6350). */
const esc = (v: string) => v.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

/**
 * Uzun satırlar 75 oktette katlanır, devam satırları bir boşlukla başlar (RFC 6350 §3.2).
 * Sınır karakter değil oktet bazlı olduğundan Türkçe karakterler ikişer bayt sayılır.
 */
function fold(line: string): string {
  const enc = new TextEncoder();
  if (enc.encode(line).length <= 75) return line;

  const out: string[] = [];
  let current = "";
  let bytes = 0;
  for (const ch of line) {
    const size = enc.encode(ch).length;
    if (bytes + size > 75) {
      out.push(current);
      current = ` ${ch}`;
      bytes = 1 + size;
    } else {
      current += ch;
      bytes += size;
    }
  }
  out.push(current);
  return out.join("\r\n");
}

async function photoLine(): Promise<string | null> {
  try {
    const file = await readFile(path.join(process.cwd(), "public", "marka", "toaltech-logo.png"));
    return `PHOTO;ENCODING=b;TYPE=PNG:${file.toString("base64")}`;
  } catch {
    return null; // Fotoğraf okunamazsa kart fotoğrafsız üretilir.
  }
}

function buildVCard(photo: string | null): string {
  const [toaltech, tobecreative] = brands;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(kartvizit.lastName)};${esc(kartvizit.firstName)};;;`,
    `FN:${esc(kartvizit.fullName)}`,
    `ORG:${esc(kartvizit.org)}`,
    `TITLE:${esc(kartvizit.title)}`,
    `TEL;TYPE=CELL,VOICE,WORK:${kartvizit.phoneTel}`,
    `URL;TYPE=WORK:${toaltech.siteUrl}`,
    `URL;TYPE=WORK:${tobecreative.siteUrl}`,
    `X-SOCIALPROFILE;TYPE=instagram:${toaltech.instagramUrl}`,
    `X-SOCIALPROFILE;TYPE=instagram:${tobecreative.instagramUrl}`,
    `IMPP:whatsapp:${kartvizit.phoneTel}`,
    `NOTE:${esc(kartvizit.note)}`,
    ...(photo ? [photo] : []),
    `REV:${new Date().toISOString().replace(/\.\d{3}Z$/, "Z")}`,
    "END:VCARD",
  ];
  return lines.map(fold).join("\r\n") + "\r\n";
}

export async function GET() {
  const vcard = buildVCard(await photoLine());
  return new Response(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${kartvizit.vcfFileName}"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
