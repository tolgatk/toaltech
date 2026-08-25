import { Monitor, Users, Target, BarChart3, MapPin, MessageCircle, FileText, ShieldCheck, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  href: string;
  title: string;
  short: string;
  desc: string;
  bullets: string[];
  icon: LucideIcon;
  color: string;
};

export const services: Service[] = [
  {
    slug: "web-tasarim", href: "/web-tasarim",
    title: "Web Tasarım",
    short: "Modern, hızlı ve SEO uyumlu web siteleri ile markanızı dijitale taşıyoruz.",
    desc: "İşletmenize özel, mobil uyumlu ve hızlı açılan web siteleri tasarlıyoruz. Kurumsal siteden e-ticarete kadar ihtiyacınıza uygun çözümler üretiyoruz.",
    bullets: ["Kurumsal web sitesi", "E-ticaret altyapısı", "SEO uyumlu yapı", "Hız ve güvenlik optimizasyonu", "Hosting & domain yönetimi"],
    icon: Monitor,
    color: "bg-blue-50 text-blue-600",
  },
  {
    slug: "sosyal-medya-yonetimi", href: "/sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    short: "Markanıza özel içerik üretimi ve sosyal medya yönetimi sağlıyoruz.",
    desc: "Instagram, Facebook ve diğer platformlarda markanızı düzenli, tutarlı ve etkileşim odaklı bir şekilde yönetiyoruz.",
    bullets: ["Aylık içerik planı", "Görsel & video tasarım", "Hikaye ve reels üretimi", "Topluluk yönetimi", "Aylık performans raporu"],
    icon: Users,
    color: "bg-rose-50 text-rose-600",
  },
  {
    slug: "meta-reklam-yonetimi", href: "/reklam-danismanligi",
    title: "Meta Reklam Yönetimi",
    short: "Hedef kitlenize ulaşın, reklam bütçenizi doğru yönetin.",
    desc: "Instagram ve Facebook reklamlarınızı doğru hedef kitle, doğru bütçe ve doğru kreatiflerle yönetiyor; satış ve müşteri kazanımına odaklanıyoruz.",
    bullets: ["Hedef kitle analizi", "Kampanya kurulumu", "A/B testleri", "Bütçe optimizasyonu", "Dönüşüm takibi"],
    icon: Target,
    color: "bg-amber-50 text-amber-600",
  },
  {
    slug: "raporlama-analiz", href: "/sosyal-medya-danismanligi",
    title: "Raporlama & Analiz",
    short: "Düzenli raporlama ve analiz ile performansınızı yönetin.",
    desc: "Tüm dijital çalışmalarınızın sonuçlarını ölçüyor, anlaşılır raporlar sunuyor ve sonraki adımlar için net öneriler veriyoruz.",
    bullets: ["Aylık performans raporu", "Rakip analizi", "Web sitesi trafik analizi", "Reklam getirisi (ROAS) takibi", "Strateji toplantıları"],
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export const stats = [
  { icon: MapPin, value: "39 İlçe", label: "İstanbul geneli yerinde hizmet", desc: "Avrupa ve Anadolu Yakası." },
  { icon: MessageCircle, value: "WhatsApp", label: "Tek muhatap, hızlı iletişim", desc: "Mesai içi hızlı dönüş." },
  { icon: FileText, value: "Aylık", label: "Şeffaf raporlama", desc: "Ne yapıldı, ne kazanıldı: net." },
  { icon: ShieldCheck, value: "Net Fiyat", label: "Gizli maliyet yok", desc: "Sözleşmeli, faturalı çalışma." },
];

export const packages = [
  {
    name: "Başlangıç",
    price: "Teklif Alın",
    desc: "Dijitale yeni adım atan işletmeler için.",
    features: ["Tek sayfa web sitesi", "Ayda 8 sosyal medya paylaşımı", "Temel görsel tasarım", "Aylık rapor"],
    highlight: false,
  },
  {
    name: "Profesyonel",
    price: "Teklif Alın",
    desc: "Büyümek isteyen işletmeler için en çok tercih edilen paket.",
    features: ["Kurumsal web sitesi (5+ sayfa)", "Ayda 16 paylaşım + hikayeler", "Reels / video içerik", "Meta reklam yönetimi", "Aylık strateji toplantısı"],
    highlight: false,
  },
  {
    name: "Kurumsal",
    price: "Teklif Alın",
    desc: "Tam kapsamlı dijital yönetim isteyen markalar için.",
    features: ["Özel tasarım web / e-ticaret", "Sınırsız içerik planı", "Reklam + influencer yönetimi", "Haftalık raporlama", "Öncelikli destek"],
    highlight: false,
  },
];

/** Gerçek referanslar eklenene kadar: çalıştığımız sektörler (rakam/isim yok). */
export const sectors = [
  { name: "Kafe & Restoran", desc: "Menü ve mekân çekimi, reels, yerel hedefli reklam, Google Haritalar yönetimi." },
  { name: "Güzellik & Sağlık", desc: "Randevu odaklı Instagram reklamları, hasta/müşteri bilgilendirme içerikleri." },
  { name: "Perakende & E-ticaret", desc: "Ürün çekimi, pazaryeri görselleri, e-ticaret sitesi ve Meta reklamları." },
  { name: "Emlak & İnşaat", desc: "Drone çekimi, proje tanıtım videoları, kurumsal web sitesi." },
  { name: "Eğitim", desc: "Kayıt dönemi kampanyaları, veli odaklı içerik ve web sitesi." },
  { name: "Sanayi & B2B", desc: "Kurumsal site, tesis drone çekimi, Google Ads ile bayi/müşteri kazanımı." },
];

