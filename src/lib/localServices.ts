export type LocalService = {
  slug: string;
  name: string;         // "Sosyal Medya Danışmanlığı"
  keyword: string;      // "sosyal medya danışmanlığı"
  metaDescription: string;
  fitSectors: string[];
  localNote: string;    // {ilce} placeholder
  intro: string;
  benefits: string[];
  steps: string[];
  faq: { q: string; a: string }[];
};

export const localServices: LocalService[] = [
  {
    slug: "seo-hizmeti",
    name: "SEO ve Yapay Zeka Optimizasyonu",
    keyword: "SEO hizmeti",
    metaDescription: "İstanbul SEO hizmeti ve yapay zeka arama optimizasyonu: Google'da ilk sayfa, Google AI Modu ve ChatGPT gibi asistanlarda önerilmek için teknik SEO, yerel SEO ve içerik. Referanslı.",
    fitSectors: ["restoran","kafe","otel","turizm","sağlık","klinik","eğitim","emlak","perakende","hukuk","düğün","plaza","ofis","sanayi","tekstil","mobilya","butik"],
    localNote: "{ilce_deki} işletmeler için SEO'da hedef, müşteriniz Google'a \"{ilce} + hizmetiniz\" yazdığında ya da yapay zekaya \"{ilce_de} bana ... öner\" dediğinde sizin çıkmanız. Teknik altyapı, yerel sayfalar, Google işletme profili ve içerikle bunu kuruyoruz.",
    intro: "Google'da ilk sayfada çıkmak artık yetmiyor: müşteriler Google AI Modu, ChatGPT ve benzeri asistanlara da soruyor. Teknik SEO, yerel SEO ve yapay zeka aramalarına uygun içerik yapısıyla işletmenizin hem klasik aramada hem yapay zeka cevaplarında önerilmesini sağlıyoruz.",
    benefits: ["Teknik SEO denetimi ve düzeltmeler (hız, indeksleme, yapısal veri)", "Yerel SEO: ilçe/şehir bazlı hizmet sayfaları ve Google işletme profili", "Yapay zeka aramalarına uygun içerik (net cevaplar, sorular, tablolar)", "Anahtar kelime ve rakip analizi", "Aylık sıralama ve trafik raporu"],
    steps: ["Site ve rakip analizi", "Teknik düzeltmeler ve sayfa yapısı", "İçerik ve yerel sayfalar", "Ölçme, raporlama, iyileştirme"],
    faq: [
      { q: "Yapay zeka optimizasyonu (AEO/GEO) nedir?", a: "Google AI Modu, ChatGPT gibi asistanların bir soruya cevap verirken sizin sitenizi kaynak göstermesi ve işletmenizi önermesi için içeriği net, yapılandırılmış ve güvenilir hale getirmektir. Google'ın kendi açıklamasına göre bunun için özel bir hile yok; iyi teknik SEO ve gerçekten faydalı içerik gerekiyor." },
      { q: "SEO'da ne kadar sürede sonuç alınır?", a: "Teknik düzeltmelerin etkisi birkaç hafta içinde görülür; rekabetli kelimelerde ilk sayfa genellikle 3–6 ay sürer. Yerel ve niş aramalarda (ilçe + hizmet) çok daha hızlı sonuç alınabilir." },
      { q: "Referansınız var mı?", a: "Evet. Örneğin fasilekibi.org, \"Kadıköy / Bursa / Tekirdağ / Sakarya fasıl ekibi kiralama\" aramalarında Google'da 1. sırada ve Google AI Modu'nda doğrudan öneriliyor. Referanslar sayfamızda ekran görüntüleriyle anlatıyoruz." },
    ],
  },
  {
    slug: "web-tasarim",
    name: "Web Tasarım",
    keyword: "web tasarım",
    metaDescription: "İstanbul web tasarım: kurumsal site, e-ticaret ve landing page. Hızlı, mobil uyumlu, SEO altyapısı hazır teslim. Süreç, teslim süresi ve teklif için hemen yazın.",
    fitSectors: ["plaza","ofis","perakende","sağlık","klinik","eğitim","emlak","otel","restoran","kafe","hukuk","sanayi","OSB","tekstil","toptan","mobilya","teknoloji","turizm","düğün"],
    localNote: "{ilce_deki} işletmeler için web tasarımda hedefimiz Google'da bulunan, telefonda hızlı açılan ve ziyaretçiyi WhatsApp'a ya da teklif formuna yönlendiren bir site kurmak. Toplantıyı {ilce_deki} işyerinizde yapabiliyoruz.",
    intro: "Kurumsal web sitesi, e-ticaret ve landing page tasarlıyoruz: hızlı açılan, mobil uyumlu, SEO altyapısı hazır ve müşteriyi iletişime yönlendiren siteler.",
    benefits: ["Kurumsal web sitesi tasarımı", "E-ticaret sitesi kurulumu", "Mobil uyumlu ve hızlı (Core Web Vitals) yapı", "SEO altyapısı hazır teslim", "Hosting, domain, SSL ve bakım"],
    steps: ["İhtiyaç analizi ve içerik planı", "Tasarım onayı", "Geliştirme ve SEO kurulumu", "Test, yayın ve eğitim"],
    faq: [
      { q: "Web sitesi kaç günde hazır olur?", a: "Tek sayfalık siteler 1 hafta, kurumsal siteler 2–4 hafta, e-ticaret siteleri içeriğe göre 3–6 hafta içinde yayına alınır." },
      { q: "Web tasarım fiyatı neye göre belirlenir?", a: "Sayfa sayısı, özel tasarım ihtiyacı, e-ticaret/entegrasyon gereksinimleri ve içerik üretimi fiyatı belirler. İhtiyacınızı dinleyip net bir teklif veriyoruz." },
      { q: "Site teslim edildikten sonra destek var mı?", a: "Evet. Hosting, güvenlik güncellemeleri ve içerik değişiklikleri için aylık bakım paketi sunuyoruz." },
    ],
  },
  {
    slug: "sosyal-medya-danismanligi",
    metaDescription: "İstanbul sosyal medya danışmanlığı: strateji, içerik planı, hedef kitle analizi ve ekip eğitimi. Ajansa tam devretmek istemeyenler için. İlk görüşme ücretsiz.",
    fitSectors: ["kafe", "restoran", "perakende", "butik", "sağlık", "eğitim", "emlak", "otel", "klinik", "AVM", "düğün"],
    localNote: "{ilce_deki} işletmeler için sosyal medya danışmanlığında önce mevcut hesaplarınızı ve {ilce} pazarındaki rakiplerinizi analiz ediyor, ardından bölgenizdeki müşteri profiline uygun bir içerik ve büyüme planı kuruyoruz.",
    name: "Sosyal Medya Danışmanlığı",
    keyword: "sosyal medya danışmanlığı",
    intro: "İşletmenizin Instagram, Facebook ve TikTok hesaplarını stratejik olarak yönlendiriyor; içerik planı, hedef kitle analizi ve büyüme stratejisi ile markanızı dijitalde güçlendiriyoruz.",
    benefits: ["Size özel sosyal medya stratejisi", "Aylık içerik planı ve takvimi", "Hedef kitle ve rakip analizi", "Hesap denetimi ve iyileştirme önerileri", "Düzenli performans raporu"],
    steps: ["Hesap ve rakip analizi", "Strateji ve içerik planı", "Uygulama ve takip", "Aylık raporlama"],
    faq: [
      { q: "Sosyal medya danışmanlığı ile yönetimi arasındaki fark nedir?", a: "Danışmanlıkta strateji, plan ve yönlendirmeyi biz yapar, uygulamayı ekibinizle birlikte yürütürüz. Yönetimde ise içerik üretimi ve paylaşım dahil tüm süreci biz üstleniriz." },
      { q: "Ne kadar sürede sonuç alınır?", a: "Düzenli uygulama ile ilk 4–8 hafta içinde etkileşim ve takipçi kalitesinde gözle görülür değişim başlar; kalıcı büyüme 3 aylık süreçte oturur." },
      { q: "Yerinde toplantı yapıyor musunuz?", a: "Evet, İstanbul genelinde işletmenize gelerek ilk analiz toplantısını yerinde yapabiliyoruz; sonraki süreç online ve WhatsApp üzerinden devam eder." },
    ],
  },
  {
    slug: "reklam-danismanligi",
    metaDescription: "İstanbul reklam danışmanlığı: Meta (Instagram/Facebook) ve Google Ads kampanya kurulumu, ilçe bazlı hedefleme, bütçe optimizasyonu ve şeffaf raporlama.",
    fitSectors: ["perakende", "restoran", "kafe", "sağlık", "emlak", "eğitim", "AVM", "otomotiv", "mobilya", "düğün", "otel", "klinik"],
    localNote: "{ilce} reklam danışmanlığında kampanyaları yalnızca {ilce} ve çevresindeki mahallelere, hatta işletmenizin birkaç kilometre yarıçapına hedefleyebiliyoruz; böylece bütçeniz gerçekten size gelebilecek müşterilere harcanır.",
    name: "Reklam Danışmanlığı",
    keyword: "reklam danışmanlığı",
    intro: "Meta (Instagram & Facebook) ve Google Ads reklamlarınızı doğru hedef kitle, doğru bütçe ve ölçülebilir hedeflerle yönetiyoruz. Amaç görünürlük değil, gerçek müşteri.",
    benefits: ["Meta ve Google Ads kampanya kurulumu", "Hedef kitle ve bölge bazlı hedefleme", "Reklam görselleri ve metinleri", "A/B testleri ve bütçe optimizasyonu", "Dönüşüm takibi ve raporlama"],
    steps: ["Hedef ve bütçe planlaması", "Kampanya ve kreatif hazırlığı", "Yayın ve optimizasyon", "Haftalık performans takibi"],
    faq: [
      { q: "Minimum reklam bütçesi ne olmalı?", a: "Sektöre göre değişmekle birlikte yerel işletmeler için günlük 150–300 TL ile anlamlı sonuç alınabilecek kampanyalar kurulabilir. Bütçeyi hedefinize göre birlikte belirleriz." },
      { q: "Sadece ilçemdeki müşterilere reklam gösterebilir miyim?", a: "Evet. Reklamları ilçe, mahalle hatta işletmenizin çevresindeki belirli kilometre yarıçapı ile sınırlandırabiliyoruz." },
      { q: "Reklam hesabı kime ait olur?", a: "Reklam hesapları ve sayfalar her zaman size ait kalır; biz yetkili olarak yönetiriz." },
    ],
  },
  {
    slug: "sosyal-medya-yonetimi",
    metaDescription: "İstanbul sosyal medya yönetimi: içerik üretimi, reels, hikaye, topluluk yönetimi ve aylık rapor tek pakette. Yerinde çekim, şeffaf fiyat, 3 aylık plan.",
    fitSectors: ["kafe", "restoran", "perakende", "butik", "sağlık", "eğitim", "emlak", "otel", "klinik", "AVM", "düğün", "marina", "spor"],
    localNote: "{ilce} sosyal medya yönetiminde çekimleri işletmenizde yapıyor, {ilce_nin} dokusunu ve hedef kitlesini yansıtan içerikler üretiyoruz; paylaşım, hikaye ve yorum yönetimini uçtan uca üstleniyoruz.",
    name: "Sosyal Medya Yönetimi",
    keyword: "sosyal medya yönetimi",
    intro: "İçerik üretiminden paylaşıma, hikayelerden reels videolarına kadar sosyal medya hesaplarınızı uçtan uca biz yönetiyoruz; siz işinize odaklanın.",
    benefits: ["Aylık içerik takvimi", "Görsel ve video (reels) üretimi", "Hikaye ve paylaşım yönetimi", "Yorum ve mesaj (topluluk) yönetimi", "Aylık performans raporu"],
    steps: ["Marka ve hedef kitle analizi", "İçerik planı onayı", "Üretim ve paylaşım", "Ölçme ve iyileştirme"],
    faq: [
      { q: "Ayda kaç paylaşım yapılıyor?", a: "Paketlere göre ayda 8, 16 veya sınırsız paylaşım; hikayeler ve reels içerikler ayrıca planlanır." },
      { q: "Çekim için işletmeme geliyor musunuz?", a: "Evet, İstanbul genelinde yerinde fotoğraf ve video çekimi yapıyoruz." },
      { q: "Sözleşme süresi ne kadar?", a: "Minimum 3 aylık çalışma öneriyoruz; sosyal medyada kalıcı sonuç için düzenlilik şart." },
    ],
  },
  {
    slug: "yazilim-danismanligi",
    metaDescription: "İstanbul yazılım danışmanlığı: web sitesi, e-ticaret, CRM/ERP seçimi ve işletmeye özel yazılım kararlarında bağımsız teknik yol haritası. İlk görüşme ücretsiz.",
    fitSectors: ["plaza", "ofis", "teknoloji", "finans", "sanayi", "OSB", "lojistik", "sağlık", "eğitim", "hukuk", "tekstil", "toptan"],
    localNote: "{ilce_deki} firmalar için yazılım danışmanlığında hedefimiz yanlış yazılıma para harcamanızı önlemek: ihtiyaç analizi, doğru teknoloji ve tedarikçi seçimi, proje takibi. Toplantıları {ilce_deki} ofisinizde yapabiliyoruz.",
    name: "Yazılım Danışmanlığı",
    keyword: "yazılım danışmanlığı",
    intro: "Web sitesi, e-ticaret, mobil uygulama veya işletmenize özel yazılım ihtiyaçlarınızda doğru teknolojiyi, doğru bütçeyi ve doğru yol haritasını belirliyoruz.",
    benefits: ["İhtiyaç analizi ve teknik yol haritası", "Web sitesi & e-ticaret altyapısı", "İşletmeye özel yazılım çözümleri", "Mevcut sistemlerin denetimi ve iyileştirme", "Hosting, domain ve güvenlik yönetimi"],
    steps: ["İhtiyaç analizi", "Teknoloji ve bütçe planı", "Geliştirme / entegrasyon", "Test, yayın ve destek"],
    faq: [
      { q: "Küçük bir işletmeyim, yazılım danışmanlığına ihtiyacım var mı?", a: "Web siteniz, randevu sisteminiz veya stok takibiniz varsa evet. Gereksiz harcama yapmadan doğru araçları seçmenize yardımcı oluyoruz." },
      { q: "Mevcut web sitemi iyileştirebilir misiniz?", a: "Evet. Hız, güvenlik, SEO ve mobil uyumluluk denetimi yapıp gerekli geliştirmeleri uyguluyoruz." },
      { q: "Hangi teknolojileri kullanıyorsunuz?", a: "Modern web teknolojileri (Next.js, React, Node.js) ve ihtiyaca göre WordPress / e-ticaret altyapıları." },
    ],
  },
  {
    slug: "urun-cekimi",
    metaDescription: "İstanbul ürün çekimi: beyaz fon e-ticaret, konsept ve mankenli çekim; Trendyol/Hepsiburada standartlarına uygun retouch, ürün başı net fiyat, 3-7 iş gününde teslim.",
    fitSectors: ["tekstil", "konfeksiyon", "hazır giyim", "toptan", "perakende", "butik", "mobilya", "deri", "gıda", "hediyelik", "showroom", "imalat", "lüks"],
    localNote: "{ilce} ürün çekiminde işletmenize veya deponuza gelerek yerinde çekim yapabiliyoruz; pazaryeri ve Instagram için uygun ölçülerde, retouch edilmiş görselleri teslim ediyoruz.",
    name: "Ürün Çekimi",
    keyword: "ürün çekimi",
    intro: "E-ticaret, Instagram ve katalog için profesyonel ürün fotoğrafı ve videosu çekiyoruz. Beyaz fon, konsept ve yaşam tarzı (lifestyle) çekimleriyle ürünlerinizi satışa dönüştürüyoruz.",
    benefits: ["Beyaz fon e-ticaret çekimi", "Konsept ve lifestyle çekim", "Reels / kısa video ürün tanıtımı", "Profesyonel retouch ve renk düzenleme", "Pazaryeri (Trendyol, Hepsiburada) uyumlu teslim"],
    steps: ["Ürün ve konsept planlaması", "Stüdyo veya yerinde çekim", "Düzenleme ve retouch", "Teslim"],
    faq: [
      { q: "Çekim nerede yapılıyor?", a: "İşletmenizde yerinde çekim yapabildiğimiz gibi stüdyo ortamında da çekim planlayabiliyoruz." },
      { q: "Kaç ürün çekilebilir?", a: "Ürün sayısına göre paket fiyatı belirleriz; tek üründen yüzlerce ürünlü kataloglara kadar çalışıyoruz." },
      { q: "Teslim süresi ne kadar?", a: "Ürün adedine göre genellikle 3–7 iş günü içinde düzenlenmiş görseller teslim edilir." },
    ],
  },
  {
    slug: "drone-cekimi",
    metaDescription: "İstanbul drone çekimi: emlak, inşaat/şantiye, tesis ve etkinlik için 4K havadan video ve fotoğraf. Uçuş izinlerini biz takip ediyoruz. Yarım gün paketler.",
    fitSectors: ["emlak", "konut", "inşaat", "sanayi", "OSB", "tersane", "marina", "plaj", "sahil", "turizm", "otel", "düğün", "tarım", "çiftlik", "havalimanı", "liman", "villa", "fuar", "tema"],
    localNote: "{ilce} drone çekimi öncesinde lokasyonun uçuşa uygunluğunu ve gerekli izinleri kontrol ediyoruz; havalimanı, askeri bölge ve Boğaz hattı gibi kısıtlı alanlar için alternatif çekim planı öneriyoruz.",
    name: "Drone Çekimi",
    keyword: "drone çekimi",
    intro: "İşletme, tesis, inşaat, emlak ve etkinlikleriniz için havadan profesyonel drone fotoğraf ve video çekimi yapıyoruz. Tanıtım videoları ve sosyal medya için etkileyici görüntüler.",
    benefits: ["4K havadan video ve fotoğraf", "Emlak, tesis ve proje tanıtımı", "Etkinlik ve organizasyon çekimi", "Kurgu ve müzikli tanıtım videosu", "Sosyal medya formatlarında teslim"],
    steps: ["Lokasyon ve izin kontrolü", "Çekim planı", "Çekim", "Kurgu ve teslim"],
    faq: [
      { q: "Her yerde drone uçurulabiliyor mu?", a: "Hayır. Yasak ve kısıtlı bölgeler vardır; çekim öncesi lokasyonun uçuşa uygunluğunu ve gerekli izinleri kontrol ediyoruz." },
      { q: "Emlak / site tanıtımı için uygun mu?", a: "Evet, drone çekimi konut projeleri, siteler, arsalar ve tesisler için en etkili tanıtım yöntemlerinden biridir." },
      { q: "Hava koşulları çekimi etkiler mi?", a: "Evet; yağmur ve kuvvetli rüzgârda çekim yapılmaz, uygun bir güne ertelenir." },
    ],
  },
  {
    slug: "cafe-sosyal-medya-danismanligi",
    metaDescription: "İstanbul cafe sosyal medya danışmanlığı: mekân ve ürün çekimi, reels planı, yakın çevreye hedefli Instagram reklamı ve Google Haritalar optimizasyonu. Kafenize gelip çekiyoruz.",
    fitSectors: ["kafe", "kahvaltı", "öğrenci", "turizm", "sahil", "AVM", "üniversite", "sanat", "plaza"],
    localNote: "{ilce_deki} kafelerde rekabet yoğun; öne çıkmak için mekânınızın atmosferini yansıtan çekimler, {ilce} çevresine hedefli reklamlar ve Google Haritalar'da güçlü bir işletme profili kuruyoruz.",
    name: "Cafe Sosyal Medya Danışmanlığı",
    keyword: "cafe sosyal medya danışmanlığı",
    intro: "Kafeler için Instagram odaklı sosyal medya danışmanlığı: mekân ve ürün çekimleri, reels içerikler, yerel hedefli reklamlar ve müşteriyi mekâna getiren stratejiler.",
    benefits: ["Kafe konseptine uygun içerik stratejisi", "Menü, ürün ve mekân çekimi", "Reels ve hikaye planı", "Yakın çevreye hedefli Instagram reklamları", "Google Haritalar (işletme profili) optimizasyonu"],
    steps: ["Mekân ve hedef kitle analizi", "İçerik ve kampanya planı", "Çekim ve uygulama", "Raporlama"],
    faq: [
      { q: "Kafemiz için ne tür içerikler üretiyorsunuz?", a: "Ürün ve kahve çekimleri, mekân atmosferi videoları, kampanya görselleri, hikaye serileri ve reels içerikler." },
      { q: "Google Haritalar'da üst sıralara çıkabilir miyiz?", a: "İşletme profili optimizasyonu, düzenli fotoğraf/yorum yönetimi ile yerel aramalarda görünürlüğünüzü artırıyoruz." },
      { q: "Çekim için kafeye geliyor musunuz?", a: "Evet, ilçenizdeki kafenize gelerek yerinde çekim yapıyoruz." },
    ],
  },
  {
    slug: "restoran-sosyal-medya-danismanligi",
    metaDescription: "İstanbul restoran sosyal medya danışmanlığı: yemek/menü çekimi, rezervasyon odaklı Instagram reklamı, yorum yönetimi ve Google işletme profili. Masaları dolduran içerik.",
    fitSectors: ["restoran", "balık", "kahvaltı", "sahil", "otel", "turizm", "düğün", "AVM", "marina", "gece hayatı", "lüks"],
    localNote: "{ilce_deki} restoranınız için menü ve mekân çekimi yapıyor, {ilce} ve çevresindeki müşterilere rezervasyon odaklı reklamlar çıkıyor, Google ve Instagram yorumlarınızı yönetiyoruz.",
    name: "Restoran Sosyal Medya Danışmanlığı",
    keyword: "restoran sosyal medya danışmanlığı",
    intro: "Restoranlar için yemek çekimi, menü tanıtımı, rezervasyon odaklı reklamlar ve Google işletme profili yönetimi ile masalarınızı dolduran sosyal medya danışmanlığı.",
    benefits: ["Yemek ve menü fotoğraf/video çekimi", "Rezervasyon odaklı Instagram reklamları", "Kampanya ve özel gün içerikleri", "Yorum ve mesaj yönetimi", "Google Haritalar ve yerel görünürlük"],
    steps: ["Restoran ve rakip analizi", "İçerik ve reklam planı", "Çekim ve uygulama", "Raporlama"],
    faq: [
      { q: "Restoran için sosyal medya neden önemli?", a: "Müşterilerin büyük kısmı restoran seçmeden önce Instagram ve Google'da mekânın fotoğraflarına ve yorumlarına bakıyor. Güçlü bir profil doğrudan rezervasyona dönüşür." },
      { q: "Yemek çekimi yapıyor musunuz?", a: "Evet, restoranınızda profesyonel yemek ve mekân çekimi yapıyoruz." },
      { q: "Olumsuz yorumları yönetiyor musunuz?", a: "Evet, yorumlara profesyonel ve zamanında yanıt vererek marka itibarınızı koruyoruz." },
    ],
  },
];

export function getLocalService(slug: string) {
  return localServices.find((s) => s.slug === slug);
}
