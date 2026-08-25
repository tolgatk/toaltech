export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toaltech.com";
export const abs = (path: string) => `${SITE_URL}${path}`;
/** İçerikte anlamlı bir değişiklik yaptığında güncelle (sitemap lastmod). */
export const CONTENT_UPDATED = "2026-08-25";
