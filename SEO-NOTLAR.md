# ToalTech SEO Notları (25 Ağustos 2026)

## Yapılanlar
- **Teknik:** metadataBase, sayfa bazlı canonical (root canonical hatası giderildi), title template, unique description, OG/Twitter görselleri (`opengraph-image.tsx` — kök, hub ve ilçe için otomatik), manifest, icon.svg, viewport/themeColor, robots.txt, sitemap (gerçek lastmod: `CONTENT_UPDATED` sabiti `src/lib/seo.ts`), www→apex 308 redirect (`next.config.ts`), güvenlik header'ları, JSON-LD `<` escape, skip-link.
- **Structured data (`src/lib/schema.ts`):** tek `@id`'li ProfessionalService+Organization + WebSite (ana sayfa), CollectionPage+Service (hub), WebPage+Service (ilçe, `areaServed`), ContactPage, AboutPage, Article (blog), BreadcrumbList. FAQPage/HowTo/SearchAction/AggregateRating bilinçli olarak YOK (Google tarafından kaldırıldı / yasak).
- **Sayfalar:** 9 hizmet hub'ı (web-tasarim eklendi) × 39 ilçe = 351 ilçe sayfası; 4 blog yazısı; KVKK sayfası (noindex); toplam 372 URL sitemap'te.
- **İlçe sayfası içeriği:** `src/lib/districts.ts` (mahalleler, ticari karakter, sektörler, tier) × `src/lib/localServices.ts` (hizmete özel `localNote`, `fitSectors`) → sektör kesişimi, ilçeye özel SSS (drone için uçuş kısıtı), Türkçe ek uyumu (`src/lib/tr.ts`).
- **İçerik dürüstlüğü:** uydurma rakamlar (100+ müşteri vb.), sahte yorumlar ve anonim referanslar kaldırıldı; Referanslar sayfası "Çalıştığımız Sektörler" oldu. "En Çok Tercih Edilen" rozeti kaldırıldı.
- **UX/CRO:** header'da Hizmetlerimiz dropdown'ı, mobilde telefon ikonu, form etiketleri + KVKK onayı + gönderim sonrası durum mesajı, buton min. 44px, main'e mobil alt boşluk (sabit butonlar içerikle çakışmasın).

## Senin yapman gerekenler (kod dışı)
1. **Google Business Profile** aç: kategori "Pazarlama ajansı" (birincil), "Web tasarımcısı", "Ticari fotoğrafçı"; hizmet alanı = Tier 1 ilçeler + İstanbul; adres gizli (service-area). Profil URL'sini `src/lib/schema.ts` → `sameAs`'e ekle.
2. **Search Console:** domain doğrula → Sitemaps → `https://toaltech.com/sitemap.xml`. 2 hafta sonra "Sayfalar" raporunda "Keşfedildi – dizine eklenmedi" oranını kontrol et.
3. **Gerçek kanıt ekle:** ticari unvan/adres (KVKK sayfası + footer), en az 3 gerçek müşteri (isim + link + izin), gerçek proje görselleri. Bunlar olmadan ilçe sayfalarının çoğu "doorway" riskinde kalır.
4. **Paket fiyatları:** "Teklif Alın" yerine "X TL'den başlar" yazarsan CTR ve dönüşüm artar (fiyat aralığı sana ait).
5. **Öncelikli ilçeler (Tier 1):** Kadıköy, Beşiktaş, Şişli, Ataşehir, Beyoğlu, Ümraniye, Üsküdar, Maltepe, Kartal, Pendik, Bakırköy, Sarıyer, Bahçelievler, Beylikdüzü, Başakşehir, Fatih. Bu ilçelerde yaptığın gerçek işleri `districts.ts`'e eklemek için bana gönder.
6. Blog için sıradaki konular: web tasarım fiyatları 2026, ürün çekimi fiyatları 2026, Google Ads yönetim ücreti, ikas vs Shopify, e-ticaret kurulum maliyeti.

## Dosya haritası
- `src/lib/seo.ts` site URL + lastmod · `src/lib/schema.ts` JSON-LD · `src/lib/districts.ts` ilçeler · `src/lib/localServices.ts` hizmetler · `src/lib/localContent.ts` ilçe içerik motoru · `src/lib/tr.ts` Türkçe ekler · `src/lib/posts.ts` blog yazıları
- `src/app/[hizmet]/page.tsx` hub · `src/app/[hizmet]/[ilce]/page.tsx` ilçe · `src/app/blog/*` · `src/app/sitemap.ts` · `src/app/robots.ts` · `src/app/manifest.ts`
