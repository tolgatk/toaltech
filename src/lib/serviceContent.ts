import {
  Building2, HardHat, Factory, PartyPopper, Hotel, Ship, Clapperboard, Tractor,
  Code, Database, ShoppingCart, Server, ScanSearch, Plug, Smartphone,
  Camera, CalendarDays, Megaphone, MessageCircle, BarChart3, Compass, Users, Target, GraduationCap, SearchCheck,
  Search, Monitor, Drone, Coffee, UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/**
 * Hizmet ana sayfalarının (/{hizmet}) uzun içeriği.
 * Buradaki her şey sayfada görünür metindir; yapısal veri (FAQPage, Service) de buradan üretilir.
 * Kural: doğrulanamayan rakam, ödül, sertifika veya müşteri yorumu yazılmaz.
 */
export type ServiceContent = {
  /** <title> (şablon sonuna " | ToalTech" ekler; 50 karakteri geçmesin) */
  title: string;
  /** H1 altındaki kısa etiket satırı */
  eyebrow: string;
  /** "Kısaca" kutusu: soruya doğrudan cevap veren 2-3 cümle (yapay zeka aramaları buradan alıntılar) */
  answer: string;
  /** Hero altındaki olgusal etiketler */
  highlights: { v: string; l: string }[];
  /** Kullanım alanları / kimler için */
  useCasesTitle: string;
  useCasesLead: string;
  useCases: { icon: LucideIcon; title: string; text: string }[];
  /** steps ile aynı sırada, her adımın bir cümlelik açıklaması */
  stepDetails: string[];
  /** Uzun anlatım bölümleri */
  sections: { h2: string; p: string[]; list?: string[] }[];
  /** Fiyatı belirleyen etkenler (rakam yok) */
  priceTitle: string;
  priceFactors: { t: string; d: string }[];
  /** Hizmet verisindeki 3 soruya eklenen sorular */
  faq: { q: string; a: string }[];
  /** İlgili blog yazıları (slug) */
  posts: string[];
  /** İlgili hizmetler (slug) */
  related: string[];
};

export const serviceContent: Record<string, ServiceContent> = {
  "drone-cekimi": {
    title: "İstanbul Drone Çekimi: 4K Havadan Video ve Fotoğraf",
    eyebrow: "İstanbul geneli · 4K havadan çekim · Kurgu dahil",
    answer:
      "ToalTech, İstanbul genelinde emlak, inşaat, tesis, otel, mekân ve etkinlikler için 4K drone çekimi yapar. Çekim öncesinde lokasyonun uçuşa uygun olup olmadığını birlikte değerlendirir, izin gereken noktalarda sizi süreç hakkında bilgilendiririz; çekimden sonra görüntüleri kurgulayıp web siteniz, ilan sayfanız ve sosyal medya için ayrı formatlarda teslim ederiz.",
    highlights: [
      { v: "4K", l: "video ve yüksek çözünürlüklü fotoğraf" },
      { v: "Kurgu", l: "müzik, renk ve yazı dahil teslim" },
      { v: "Yatay + dikey", l: "web ve Reels formatı" },
      { v: "Ön kontrol", l: "lokasyonun uçuşa uygunluğu" },
    ],
    useCasesTitle: "Drone çekimi hangi işlerde kullanılır?",
    useCasesLead: "Havadan görüntü, yerden anlatılamayan üç şeyi gösterir: ölçek, konum ve çevre. En çok talep aldığımız alanlar:",
    useCases: [
      { icon: Building2, title: "Emlak ve konut projesi", text: "Daire, villa, arsa ve site tanıtımında binayı çevresiyle birlikte gösterir: ana yola, sahile, metroya, okula mesafe tek planda anlaşılır." },
      { icon: HardHat, title: "İnşaat ve şantiye", text: "Her ay aynı noktadan, aynı açıyla çekim yapılarak ilerleme videosu hazırlanır; yatırımcı ve alıcıya düzenli rapor olarak gönderilir." },
      { icon: Factory, title: "Fabrika ve tesis", text: "Üretim alanı, depo ve sevkiyat sahasının gerçek büyüklüğünü kurumsal tanıtım filmi, katalog ve ihracat sunumları için gösterir." },
      { icon: Hotel, title: "Otel, bungalov ve restoran", text: "Havuz, bahçe, manzara ve mekânın konumu rezervasyon kararını etkiler. Gündüz, gün batımı ve gece çekimleri ayrı ayrı planlanır." },
      { icon: PartyPopper, title: "Düğün, açılış ve etkinlik", text: "Kır düğünü, açılış, festival ve kurumsal etkinliklerde kalabalığı ve mekânı geniş açıyla kaydeder; kalabalık üzerinde uçuş kurallarına göre plan yapılır." },
      { icon: Ship, title: "Marina, tekne ve sahil", text: "Tekne, yat, plaj ve sahil işletmeleri için su üzerinde takip ve kuşbakışı planlar; rüzgâr durumuna göre çekim saati seçilir." },
      { icon: Tractor, title: "Arsa, arazi ve çiftlik", text: "Parselin sınırları, yola cephesi, eğimi ve çevresindeki yapılaşma havadan çekilen fotoğraf ve videoda net görünür." },
      { icon: Clapperboard, title: "Reklam filmi ve sosyal medya", text: "Reels, reklam filmi ve tanıtım videosu için açılış ve geçiş planları; FPV drone ile iç mekândan dışarıya kesintisiz geçişler." },
    ],
    stepDetails: [
      "Çekim noktasını (konum ya da adres) paylaşırsınız; noktanın uçuşa uygun olup olmadığına ve izin gerekip gerekmediğine birlikte bakarız.",
      "Neyi göstereceğimizi birlikte belirleriz: açı listesi, çekim saati (sabah, gün batımı ya da gece) ve yedek tarih.",
      "Çekimi yerinde yaparız; hava koşulu uygun değilse ek ücret olmadan uygun güne erteleriz.",
      "Görüntüler seçilir, renk düzenlemesi ve kurgu yapılır; yatay ve dikey dosyalar ile fotoğraflar indirme bağlantısıyla teslim edilir.",
    ],
    sections: [
      {
        h2: "İstanbul'da drone çekimi nasıl planlanır?",
        p: [
          "İstanbul'da drone çekiminin en çok vakit alan kısmı uçuşun kendisi değil, uçuştan önceki kontroldür. Şehrin önemli bir bölümü havalimanı yaklaşma hatları, askeri alanlar, kamu binaları ve Boğaz çevresi nedeniyle kısıtlı ya da izne tabi bölgelerden oluşur. Bu yüzden ilk adımda çekim noktasının tam konumunu isteriz.",
          "Nokta uçuşa açıksa çekim birkaç gün içinde planlanabilir. İzne tabi bir noktadaysa başvuru süresi kadar önceden haber vermeniz gerekir; çoğu durumda birkaç yüz metre öteden, farklı bir açıyla benzer bir çekim mümkündür ve bunu size alternatif olarak sunarız.",
          "Işık ikinci belirleyicidir. Cephe çekimlerinde güneşin binaya vurduğu saat, havuz ve bahçe çekimlerinde gün batımı, ışıklandırması olan mekânlarda hava kararırken geçen kısa aralık tercih edilir.",
        ],
      },
      {
        h2: "Drone çekimi için izin gerekir mi?",
        p: [
          "Türkiye'de insansız hava araçlarının kurallarını Sivil Havacılık Genel Müdürlüğü (SHGM) belirler. 2026 yazında yürürlüğe giren yeni SHT-İHA talimatıyla sistem değişti: eski İHA0 ve İHA1 sınıflarının yerini araçlar için M0-M3, pilotlar için P0, P1 ve P2 lisansları aldı. Görerek yapılan ticari çekimler için en az P1 lisansı gerekir; konser ve miting gibi kalabalık üzerinde uçuş ise P2 kapsamındadır.",
          "İzin gerekip gerekmediğini uçulacak nokta belirler. SHGM'nin yayımladığı haritada yeşil bölgelerde belirlenen irtifa ve şartlar içinde ayrıca operasyon izni aranmaz. Yeşil dışında kalan her yer kısıtlanmış bölge sayılır ve SHGM izni gerektirir; bir kurum tarafından kapatılmış kırmızı bölgelerde o kurumun onayı da şarttır. Geçiş süreci sürdüğü için çekimden önce her lokasyonun güncel durumuna ayrıca bakmak gerekir.",
          "İzin gereken bir noktada çekim, gerekli onay alınmadan planlanmaz. Sizin yapmanız gereken, çekilecek alanın sahibi ya da yetkilisi olduğunuzu teyit etmek ve site yönetimi gibi üçüncü tarafların onayı gerekiyorsa bunu önceden almaktır. Kişilerin tanınabilir şekilde göründüğü çekimlerde kişisel verilerin korunması kuralları da dikkate alınır.",
        ],
        list: [
          "Havalimanı çevreleri: İstanbul Havalimanı (Arnavutköy), Sabiha Gökçen (Pendik, Tuzla, Kartal yönü), Atatürk Havalimanı sahası (Bakırköy, Bahçelievler, Küçükçekmece)",
          "Askeri tesisler ve kamu binaları çevresi",
          "Boğaz hattı, köprü çevreleri ve Tarihi Yarımada",
          "Kalabalık alanlar: miting, konser, stadyum ve benzeri toplanmalar",
        ],
      },
      {
        h2: "Teslimde neler alırsınız?",
        p: [
          "Ham görüntü yığını değil, kullanıma hazır dosyalar teslim ederiz. Kurgu, renk düzenlemesi, müzik ve gerekiyorsa yazı ve logo yerleşimi teslimata dahildir.",
        ],
        list: [
          "Web sitesi ve YouTube için yatay (16:9) tanıtım videosu",
          "Instagram Reels, TikTok ve hikâye için dikey (9:16) kısa versiyonlar",
          "İlan ve katalog için düzenlenmiş havadan fotoğraflar",
          "İstenirse reklamlarda kullanılacak 10-15 saniyelik kısa kesitler",
        ],
      },
      {
        h2: "Standart drone mu, FPV drone mu?",
        p: [
          "Standart (kameralı, sabitleyicili) drone geniş, dengeli ve yüksek planlar için kullanılır: binanın çevresi, arazinin tamamı, gün batımında tesisin genel görünümü. Emlak, şantiye ve tesis çekimlerinin çoğu bu şekilde yapılır.",
          "FPV drone ise küçük ve çeviktir; kapıdan girip salonu dolaşan, pencereden çıkıp havuzun üzerinden yükselen tek parça planlar çeker. Mekân tanıtımlarında ve Reels videolarında dikkat çekici bir açılış sağlar. Hangi yöntemin işinize uygun olduğunu çekim planında birlikte belirleriz; çoğu projede ikisi birlikte kullanılır.",
        ],
      },
    ],
    priceTitle: "Drone çekimi fiyatı neye göre belirlenir?",
    priceFactors: [
      { t: "Çekim süresi", d: "Tek lokasyonda kısa bir çekim ile yarım günlük, birden fazla noktayı kapsayan çekim farklı fiyatlanır." },
      { t: "Lokasyon ve izin", d: "İzne tabi bölgelerde planlama uzar; süre ve varsa ek maliyet teklifte ayrıca belirtilir." },
      { t: "Kurgu kapsamı", d: "Yalnızca ham görüntü, kısa bir Reels ya da müzikli ve yazılı tam tanıtım filmi ayrı işlerdir." },
      { t: "Teslim adedi", d: "Kaç video, kaç format ve kaç fotoğraf istendiği." },
      { t: "FPV ve gece çekimi", d: "FPV uçuş ve gece çekimi ek ekipman ve hazırlık gerektirir." },
      { t: "Düzenli çekim", d: "Aylık şantiye takibi gibi tekrarlayan işlerde çekim başı maliyet düşer." },
    ],
    faq: [
      { q: "Drone çekimi fiyatları ne kadar?", a: "Fiyat; çekim süresine, lokasyonun izin durumuna, kurgu kapsamına ve teslim edilecek video ve fotoğraf adedine göre değişir. Konumu ve ne için kullanacağınızı WhatsApp'tan yazarsanız aynı gün net bir teklif veriyoruz." },
      { q: "Çekim ne kadar sürer, videoyu ne zaman teslim alırım?", a: "Tek lokasyonda çekim genellikle 1-3 saat sürer. Kurgulanmış video ve düzenlenmiş fotoğraflar, işin kapsamına göre çoğunlukla birkaç iş günü içinde teslim edilir; acil işlerde teslim tarihini çekimden önce netleştiririz." },
      { q: "Drone çekimi için izin gerekiyor mu?", a: "Uçulacak noktaya bağlıdır. SHGM haritasındaki yeşil bölgelerde belirlenen şartlar içinde ayrıca izin aranmaz; bunun dışındaki alanlar kısıtlanmış bölge sayılır ve SHGM izni gerekir. Çekim noktasının konumunu paylaştığınızda uygunluğa birlikte bakıyor, izin gereken durumlarda süreci ve süreyi size önceden bildiriyoruz." },
      { q: "Hava koşulları uygun olmazsa ne olur?", a: "Yağmurda ve kuvvetli rüzgârda uçuş yapılmaz. Çekim, ek ücret alınmadan uygun ilk güne ertelenir; bu yüzden planlamada bir yedek tarih belirliyoruz." },
      { q: "Görüntüler hangi formatlarda teslim edilir?", a: "Web ve YouTube için yatay (16:9), Reels ve hikâye için dikey (9:16) video ile düzenlenmiş fotoğraflar teslim edilir. Kurgu, renk düzenlemesi ve müzik teslimata dahildir; istenirse ham görüntüler de verilir." },
      { q: "Gece drone çekimi yapıyor musunuz?", a: "Evet. Işıklandırması olan otel, bungalov, restoran ve tesislerde gece ve alacakaranlık çekimi yapıyoruz. Gece uçuşunun mümkün olup olmadığı lokasyona göre değiştiği için önce noktayı kontrol ediyoruz." },
      { q: "İç mekânda drone çekimi olur mu?", a: "Evet, FPV drone ile salon, showroom, restoran ve fabrika içinde uçuş yapılabiliyor. Mekânın boş ya da kontrollü olması gerekir; çekimi çalışma saatleri dışında planlamak en iyi sonucu verir." },
      { q: "Sadece fotoğraf ya da sadece ham görüntü alabilir miyim?", a: "Evet. Yalnızca havadan fotoğraf, yalnızca ham video ya da kurgulanmış tanıtım filmi olarak ayrı ayrı teklif veriyoruz." },
      { q: "İstanbul dışında çekim yapıyor musunuz?", a: "Ağırlıklı olarak İstanbul'un iki yakasında çalışıyoruz. Tekirdağ, Kocaeli ve çevre iller için yol ve süre planını teklife ekleyerek çekim yapabiliyoruz." },
    ],
    posts: ["drone-cekimi-fiyatlari-2026", "drone-cekimi-izni-nasil-alinir"],
    related: ["sosyal-medya-yonetimi", "urun-cekimi", "web-tasarim"],
  },

  "yazilim-danismanligi": {
    title: "İstanbul Yazılım Danışmanlığı ve Özel Yazılım",
    eyebrow: "İstanbul · Bağımsız teknik danışmanlık · KOBİ odaklı",
    answer:
      "Yazılım danışmanlığı, bir işletmenin yazılıma para harcamadan önce neye ihtiyacı olduğunu, bunun hazır bir ürünle mi yoksa özel geliştirmeyle mi çözüleceğini ve kaça mal olacağını netleştirmesidir. ToalTech İstanbul'daki işletmeler için ihtiyaç analizi yapar, teknoloji ve tedarikçi seçiminde bağımsız görüş verir, gerektiğinde web sitesi, e-ticaret ve işletmeye özel yazılımı kendi ekibiyle geliştirir.",
    highlights: [
      { v: "Analiz", l: "önce ihtiyaç, sonra teknoloji" },
      { v: "Bağımsız", l: "ürün ya da lisans satmıyoruz" },
      { v: "Geliştirme", l: "Next.js, React, Node.js" },
      { v: "Devir", l: "kaynak kod ve hesaplar sizde" },
    ],
    useCasesTitle: "Yazılım danışmanlığına ne zaman ihtiyaç duyulur?",
    useCasesLead: "Bize en çok şu altı durumda geliniyor. Birinde kendinizi görüyorsanız ilk görüşme için yazın; çoğu soru bir saatte netleşir.",
    useCases: [
      { icon: ScanSearch, title: "Teklifleri karşılaştıramıyorsanız", text: "Elinizde üç yazılım firmasından üç farklı fiyat var ve hangisinin ne verdiği belli değil. Teklifleri aynı kapsama indirip karşılaştırıyoruz." },
      { icon: ShoppingCart, title: "E-ticarete başlayacaksanız", text: "Hazır altyapı mı, WordPress mi, özel yazılım mı? Ürün sayınıza, pazaryeri entegrasyonuna ve bütçenize göre hangisinin doğru olduğunu söylüyoruz." },
      { icon: Database, title: "Excel ve WhatsApp ile yönetiyorsanız", text: "Sipariş, stok, randevu ya da müşteri takibi tablolarda dağılmış durumda. Hazır bir CRM/ERP mi yeter, küçük bir özel panel mi gerekir, birlikte çıkarıyoruz." },
      { icon: Plug, title: "Sistemleriniz birbiriyle konuşmuyorsa", text: "Muhasebe, e-ticaret, kargo ve ödeme sistemleri ayrı ayrı çalışıyor, veriler elle taşınıyor. Entegrasyon ve otomasyon planı hazırlıyoruz." },
      { icon: Server, title: "Mevcut siteniz yavaş ya da güvensizse", text: "Site geç açılıyor, sık sık bozuluyor ya da kim yönettiği belli değil. Hız, güvenlik, yedekleme ve hosting denetimi yapıp düzeltiyoruz." },
      { icon: Smartphone, title: "Bir uygulama fikriniz varsa", text: "Mobil uygulama ya da web uygulaması yaptırmak istiyorsunuz. Önce en küçük çalışan sürümü (MVP) tanımlıyor, gerçekçi süre ve bütçe çıkarıyoruz." },
    ],
    stepDetails: [
      "İşinizi, mevcut araçlarınızı ve asıl sorunu dinliyoruz. Çoğu zaman istenen yazılım ile gereken yazılım aynı şey çıkmaz.",
      "Seçenekleri yan yana koyuyoruz: hazır ürün, uyarlama ya da özel geliştirme. Her biri için maliyet, süre ve risk yazılı olarak sunulur.",
      "Geliştirmeyi biz yapıyorsak haftalık ilerleme gösteriyoruz; başka bir firma yapıyorsa işi sizin adınıza teknik olarak takip ediyoruz.",
      "Yayına almadan önce test, yedekleme ve erişim devri yapılır. Sonrasında bakım ve geliştirme için aylık destek seçeneği sunuyoruz.",
    ],
    sections: [
      {
        h2: "Yazılım danışmanlığı nedir, ne işe yarar?",
        p: [
          "Yazılım danışmanlığı, teknik olmayan bir işletme sahibinin yazılım kararlarını teknik bilen birinin süzgecinden geçirmesidir. Bir inşaat yaptırırken mimarla çalışmak gibi düşünebilirsiniz: müteahhit işi yapar, mimar neyin yapılacağını ve doğru yapılıp yapılmadığını söyler.",
          "Küçük ve orta ölçekli işletmelerde en sık gördüğümüz hata, ihtiyaç netleşmeden yazılım satın alınmasıdır. Sonuç genellikle üç şekilde ortaya çıkar: hiç kullanılmayan bir panel, yarım kalan bir proje ya da her değişiklik için yeniden para ödenen bir sistem. Danışmanlığın amacı bu üç sonucu baştan engellemektir.",
        ],
      },
      {
        h2: "Hazır yazılım mı, özel yazılım mı?",
        p: [
          "Her işletmenin özel yazılıma ihtiyacı yoktur. Randevu, ön muhasebe, stok takibi ve standart e-ticaret gibi ihtiyaçların çoğu için aylık ücretli hazır ürünler daha hızlı ve daha ucuzdur. Özel yazılım, iş yapış şekliniz hazır ürünlere sığmadığında ya da hazır ürünün lisans ve uyarlama maliyeti özel geliştirmeyi geçtiğinde mantıklı hâle gelir.",
          "Karar verirken şu soruları soruyoruz: Bu süreci sizin gibi yapan başka işletmeler var mı? Kaç kişi kullanacak? Veriler başka hangi sistemlere gidecek? Üç yıl sonra iş hacminiz iki katına çıkarsa sistem bunu kaldırır mı? Cevaplara göre hazır ürün, hazır ürün üzerine uyarlama ya da sıfırdan geliştirme öneriyoruz.",
        ],
      },
      {
        h2: "Hangi konularda danışmanlık veriyoruz?",
        p: ["Çalışma alanımız, küçük ve orta ölçekli işletmelerin günlük işini doğrudan etkileyen yazılımlardır:"],
        list: [
          "Kurumsal web sitesi ve e-ticaret altyapısı seçimi, kurulumu ve taşınması",
          "İşletmeye özel yönetim panelleri: sipariş, stok, randevu, teklif ve müşteri takibi",
          "CRM, ERP ve ön muhasebe yazılımı seçimi ve tedarikçi tekliflerinin karşılaştırılması",
          "Ödeme, kargo, pazaryeri, e-fatura ve WhatsApp entegrasyonları",
          "Mevcut sitenin hız, güvenlik, SEO ve mobil uyumluluk denetimi",
          "Hosting, domain, e-posta, SSL ve yedekleme düzeninin kurulması",
          "Tekrarlayan işlerin otomasyonu ve yapay zeka araçlarının iş akışına eklenmesi",
        ],
      },
      {
        h2: "Bağımsız danışmanlık neden önemli?",
        p: [
          "Belirli bir ürünün bayisi ya da lisans satıcısı değiliz; bu yüzden önerimiz satmak istediğimiz ürüne göre değil, ihtiyacınıza göre şekillenir. İhtiyacınızı hazır ve ucuz bir araç karşılıyorsa bunu söyleriz.",
          "Geliştirdiğimiz her projede kaynak kod, alan adı, hosting ve tüm hesaplar sizin adınıza açılır. Bizimle çalışmayı bıraksanız da sisteminiz sizde kalır ve başka bir ekip kaldığı yerden devam edebilir.",
        ],
      },
    ],
    priceTitle: "Yazılım danışmanlığı ücreti neye göre belirlenir?",
    priceFactors: [
      { t: "Danışmanlık mı, geliştirme mi", d: "Yalnızca analiz ve yol haritası, geliştirme içeren bir projeden ayrı fiyatlanır." },
      { t: "Kapsam", d: "Kaç süreç, kaç kullanıcı ve kaç ekran olduğu işin büyüklüğünü belirler." },
      { t: "Entegrasyon sayısı", d: "Ödeme, kargo, muhasebe ve pazaryeri bağlantılarının her biri ayrı iş kalemidir." },
      { t: "Hazır altyapı ya da sıfırdan", d: "Hazır bir altyapı üzerine kurmak, sıfırdan geliştirmeye göre daha hızlı ve ekonomiktir." },
      { t: "Süre", d: "Sıkışık teslim tarihleri daha fazla kaynak ayırmayı gerektirir." },
      { t: "Bakım", d: "Yayın sonrası güncelleme, yedekleme ve destek aylık olarak ayrıca planlanır." },
    ],
    faq: [
      { q: "Yazılım danışmanlığı nedir?", a: "İşletmenin yazılımla ilgili kararlarını (ne alınacak, kime yaptırılacak, kaça mal olacak, nasıl takip edilecek) teknik bir ekiple birlikte vermesidir. Amaç yanlış yazılıma para harcanmasını ve yarım kalan projeleri önlemektir." },
      { q: "İlk görüşme ücretli mi?", a: "Hayır. İlk görüşmede ihtiyacınızı dinliyor ve genel bir yön veriyoruz. Yazılı analiz, teklif karşılaştırması ya da geliştirme istenirse kapsamı ve ücreti önceden bildiriyoruz." },
      { q: "Yazılımı siz mi geliştiriyorsunuz, yoksa sadece danışmanlık mı veriyorsunuz?", a: "İkisi de mümkün. Web sitesi, e-ticaret ve işletmeye özel panelleri kendi ekibimizle geliştiriyoruz. İş başka bir firmaya verilecekse şartnameyi hazırlıyor ve projeyi sizin adınıza teknik olarak takip ediyoruz." },
      { q: "Hazır ürün mü almalıyız, özel yazılım mı geliştirmeliyiz?", a: "Sürecinizi sizin gibi yürüten çok sayıda işletme varsa hazır ürün çoğu zaman daha hızlı ve ucuzdur. İş yapış şekliniz hazır ürünlere sığmıyorsa ya da uyarlama maliyeti özel geliştirmeyi geçiyorsa özel yazılım öneriyoruz; ikisini maliyet, süre ve riskle yan yana koyup birlikte karar veriyoruz." },
      { q: "Başka bir firmadan aldığımız teklifi değerlendirir misiniz?", a: "Evet. Teklifi kapsam, teknoloji, süre, bakım ve mülkiyet şartları açısından inceliyor; eksik ya da belirsiz kalemleri ve sormanız gereken soruları yazılı olarak iletiyoruz." },
      { q: "Siz de yazılım geliştiriyorsunuz; öneriniz gerçekten bağımsız mı?", a: "Hiçbir ürünün bayisi ya da lisans satıcısı değiliz. Analiz çıktısı, işi bize vermeseniz de başka bir firmaya aynı kapsamda teklif verdirebileceğiniz şekilde hazırlanır. İhtiyacınızı hazır ve ucuz bir araç karşılıyorsa bunu söyleriz." },
      { q: "Başka bir firmanın yarım bıraktığı projeyi devralır mısınız?", a: "Önce mevcut kodu ve altyapıyı inceliyoruz. Devam edilebilir durumdaysa kaldığı yerden sürdürüyor, değilse neyin kurtarılabileceğini ve yeniden yazmanın maliyetini açıkça söylüyoruz." },
      { q: "Kaynak kod ve hesaplar kime ait olur?", a: "Size. Alan adı, hosting, kaynak kod deposu ve üçüncü taraf hesapların tamamı işletmeniz adına açılır; proje sonunda erişimler eksiksiz devredilir." },
      { q: "Bir yazılım projesi ne kadar sürer?", a: "Kurumsal bir web sitesi 2-4 hafta, e-ticaret sitesi içeriğe göre 3-6 hafta sürer. İşletmeye özel paneller kapsamına göre birkaç haftadan birkaç aya kadar değişir; süreyi analiz sonunda yazılı olarak veriyoruz." },
      { q: "Toplantıları yüz yüze yapabiliyor muyuz?", a: "Evet. İstanbul genelinde ofisinize gelerek ilk analiz toplantısını yerinde yapabiliyoruz; sonraki süreç online toplantı ve WhatsApp üzerinden ilerliyor." },
    ],
    posts: ["yazilim-danismanligi-nedir"],
    related: ["web-tasarim", "seo-hizmeti", "reklam-danismanligi"],
  },

  "sosyal-medya-yonetimi": {
    title: "İstanbul Sosyal Medya Yönetimi: Çekim, İçerik, Reklam",
    eyebrow: "İstanbul · Yerinde çekim · İçerik ve reklam tek ekipte",
    answer:
      "Sosyal medya yönetimi; Instagram, Facebook ve TikTok hesaplarınız için içerik planının yapılması, fotoğraf ve videoların çekilip kurgulanması, paylaşımların yayınlanması, yorum ve mesajların takibi ve sonuçların her ay raporlanmasıdır. ToalTech bu işin tamamını İstanbul'da kendi çekim ve kurgu ekibiyle yürütür; reklam yönetimi istenirse aynı ekip üstlenir.",
    highlights: [
      { v: "Çekim", l: "işletmenizde, kendi ekibimizle" },
      { v: "Reels", l: "çekim, kurgu, altyazı" },
      { v: "Reklam", l: "Meta reklamları aynı ekipte" },
      { v: "Rapor", l: "her ay yazılı sonuç" },
    ],
    useCasesTitle: "Sosyal medya yönetimine neler dahil?",
    useCasesLead: "Tek tek hizmet satın almak yerine baştan sona tek ekiple çalışırsınız:",
    useCases: [
      { icon: CalendarDays, title: "Aylık içerik planı", text: "Her ay başında hangi gün ne paylaşılacağını gösteren takvimi onayınıza sunuyoruz; özel günler ve kampanyalar önceden planlanır." },
      { icon: Camera, title: "Yerinde fotoğraf ve video çekimi", text: "Stok görsel kullanmıyoruz. Çekim için işletmenize geliyor; ürün, mekân, ekip ve müşteri anlarını kaydediyoruz." },
      { icon: Clapperboard, title: "Reels kurgusu", text: "Dikey video, ilk üç saniyede dikkat çekecek şekilde kurgulanır; altyazı, müzik ve gerekiyorsa seslendirme eklenir." },
      { icon: MessageCircle, title: "Yorum ve mesaj takibi", text: "Gelen yorum ve mesajlara mesai içinde dönüş yapılır; satışa dönebilecek mesajlar size iletilir." },
      { icon: Megaphone, title: "Reklam yönetimi", text: "İstenirse Instagram ve Facebook reklamlarını içerikle birlikte kurguluyor, bütçeyi ilçenize ve hedef kitlenize göre yönetiyoruz." },
      { icon: BarChart3, title: "Aylık rapor", text: "Erişim, etkileşim, gelen mesaj ve reklam maliyetini tek sayfada özetliyor, sonraki ay için ne değişeceğini yazıyoruz." },
    ],
    stepDetails: [
      "İşletmenizi, mevcut hesabınızı ve bölgenizdeki rakipleri inceliyoruz; kime, ne dille konuşacağımızı belirliyoruz.",
      "İlk ayın takvimini, çekim listesini ve görsel dilini onayınıza sunuyoruz.",
      "Çekim yapılır, içerikler kurgulanır ve takvime göre yayınlanır; yorum ve mesajlar takip edilir.",
      "Ay sonunda neyin işe yaradığını raporlayıp bir sonraki ayın planını buna göre değiştiriyoruz.",
    ],
    sections: [
      {
        h2: "Sosyal medya yönetimi neden ajansa verilir?",
        p: [
          "Düzenli sosyal medya aslında dört ayrı iştir: planlama, çekim, kurgu ve yayın sonrası takip. İşletme sahibi bunları kendi işinin yanında yürütmeye çalıştığında ilk aksayan düzenlilik olur; iki hafta paylaşım yapılır, sonra bir ay ara verilir.",
          "Ajansla çalışmanın faydası daha iyi tasarım değil, kesintisiz üretimdir. Takvim önceden hazırdır, çekim günü bellidir ve hesap siz yoğunken de çalışmaya devam eder.",
        ],
      },
      {
        h2: "Hangi platformları yönetiyoruz?",
        p: [
          "Yerel işletmelerde ağırlık Instagram'dadır; Facebook reklam tarafında hâlâ önemlidir, TikTok ise genç kitleye hitap eden işletmelerde öne çıkar. Google işletme profili (Haritalar) sosyal medya sayılmasa da yerel müşteri için en az Instagram kadar etkilidir, bu yüzden fotoğraf ve yorum yönetimini plana dahil ediyoruz.",
          "Her platforma aynı içeriği kopyalamıyoruz. Bir çekimden Instagram için Reels, hikâye için kısa kesitler, Google profili için fotoğraflar ve reklam için ayrı bir versiyon çıkarıyoruz.",
        ],
      },
      {
        h2: "Sonuç nasıl ölçülür?",
        p: [
          "Takipçi sayısı tek başına bir sonuç değildir. Takip ettiğimiz göstergeler işletmenin türüne göre değişir: restoranda rezervasyon ve yol tarifi tıklaması, klinikte randevu mesajı, mağazada ürün sorusu, dershanede kayıt görüşmesi.",
          "Aylık raporda erişim ve etkileşim rakamlarının yanında gelen mesaj sayısını, reklam veriliyorsa mesaj başına maliyeti ve en iyi çalışan içerik türünü gösteriyoruz.",
        ],
      },
    ],
    priceTitle: "Sosyal medya yönetimi fiyatı neye göre değişir?",
    priceFactors: [
      { t: "Aylık içerik adedi", d: "Kaç gönderi, kaç Reels ve kaç hikâye üretileceği." },
      { t: "Çekim sıklığı", d: "Ayda bir çekim ile haftalık çekim farklı ekip süresi gerektirir." },
      { t: "Video ağırlığı", d: "Kurgulu Reels, tasarım gönderisine göre daha fazla emek ister." },
      { t: "Reklam yönetimi", d: "Reklam yönetimi ayrı bir kalemdir; reklam bütçesi doğrudan platforma ödenir." },
      { t: "Mesaj ve yorum takibi", d: "Topluluk yönetiminin kapsamı ve saatleri." },
      { t: "Platform sayısı", d: "Yalnızca Instagram ya da birden fazla platform." },
    ],
    faq: [
      { q: "Sosyal medya yönetimi nedir?", a: "İşletmenin sosyal medya hesapları için içerik planlama, fotoğraf ve video üretimi, paylaşım, yorum ve mesaj takibi ile raporlamanın düzenli olarak yürütülmesidir." },
      { q: "Sosyal medya yönetimi aylık ne kadar?", a: "Ücret; içerik adedine, çekim sıklığına, video ağırlığına ve reklam yönetiminin dahil olup olmadığına göre değişir. Piyasa aralıklarını blog yazımızda anlattık; işletmenize özel teklif için WhatsApp'tan yazabilirsiniz." },
      { q: "Reklam bütçesi ücrete dahil mi?", a: "Hayır. Reklam bütçesi doğrudan Meta'ya (Instagram ve Facebook) ödenir ve sizin kontrolünüzdedir; yönetim ücreti ayrı bir kalemdir." },
      { q: "Hesaplar ve içerikler kime ait?", a: "Hesaplar, reklam hesabı ve üretilen tüm içerikler işletmenize aittir. Biz yetkili kullanıcı olarak yönetiriz; çalışma bittiğinde yetkimiz kaldırılır." },
      { q: "İçerikleri paylaşmadan önce görebiliyor muyum?", a: "Evet. Aylık takvim ve hazırlanan içerikler yayından önce onayınıza sunulur; onaylamadığınız içerik paylaşılmaz." },
      { q: "Ne kadar sürede sonuç alınır?", a: "Düzenli paylaşımla ilk 4-8 haftada etkileşimde değişim görülür. Kalıcı büyüme için en az üç aylık bir dönem gerekir; reklamla desteklenen hesaplarda mesaj ve talep daha erken gelir." },
    ],
    posts: ["sosyal-medya-yonetimi-fiyatlari-2026", "restoran-sosyal-medya-yonetimi-nasil-yapilir", "instagram-reklam-butcesi-ne-kadar-olmali"],
    related: ["sosyal-medya-danismanligi", "reklam-danismanligi", "drone-cekimi"],
  },

  "sosyal-medya-danismanligi": {
    title: "İstanbul Sosyal Medya Danışmanlığı: Strateji ve Plan",
    eyebrow: "İstanbul · Strateji · Hesap denetimi · Ekip eğitimi",
    answer:
      "Sosyal medya danışmanlığı, hesaplarını kendi ekibiyle yönetmek isteyen işletmelere strateji, içerik planı ve düzenli yönlendirme verilmesidir. ToalTech hesabınızı ve rakiplerinizi analiz eder, kime ne anlatacağınızı ve nasıl ölçeceğinizi içeren bir plan hazırlar, uygulamayı ekibinizle birlikte takip eder. Tüm işi devretmek isterseniz aynı ekip sosyal medya yönetimini de üstlenir.",
    highlights: [
      { v: "Denetim", l: "hesap ve rakip analizi" },
      { v: "Plan", l: "aylık içerik takvimi" },
      { v: "Eğitim", l: "ekibinize uygulamalı anlatım" },
      { v: "Takip", l: "aylık değerlendirme toplantısı" },
    ],
    useCasesTitle: "Sosyal medya danışmanlığı kimler için uygun?",
    useCasesLead: "Danışmanlık, işi tamamen devretmek istemeyen ama yön arayan işletmeler içindir:",
    useCases: [
      { icon: Users, title: "Kendi ekibi olan işletmeler", text: "İçeriği üretecek biri var ama ne paylaşılacağı ve neyin işe yaradığı belli değil. Planı ve yönü biz veriyoruz." },
      { icon: Compass, title: "Yeni açılan işletmeler", text: "Hesabı sıfırdan kurarken profil, görsel dil, ilk ayın içerikleri ve açılış kampanyası için yol haritası çıkarıyoruz." },
      { icon: SearchCheck, title: "Büyümesi duran hesaplar", text: "Paylaşım yapılıyor ama etkileşim düşüyor. Hesabı denetleyip neyin yanlış gittiğini somut örneklerle gösteriyoruz." },
      { icon: Target, title: "Reklam vermeye başlayacaklar", text: "Reklam bütçesini boşa harcamadan önce hedef kitle, kreatif ve dönüşüm ölçümünü birlikte kuruyoruz." },
      { icon: GraduationCap, title: "Ekibini eğitmek isteyenler", text: "Çalışanınıza telefonla çekim, Reels kurgusu, hikâye kullanımı ve mesaj yanıtlama konusunda uygulamalı eğitim veriyoruz." },
      { icon: BarChart3, title: "Ajansını denetlemek isteyenler", text: "Çalıştığınız ajansın raporlarını ve reklam hesabını bağımsız bir gözle inceleyip değerlendirme sunuyoruz." },
    ],
    stepDetails: [
      "Hesabınızın son üç ayını, en iyi ve en kötü içeriklerinizi ve bölgenizdeki üç rakibi inceliyoruz.",
      "Hedef kitle, içerik başlıkları, paylaşım sıklığı ve ölçülecek göstergeleri içeren yazılı planı sunuyoruz.",
      "Ekibiniz planı uygular; biz içerikleri yayın öncesi gözden geçirir ve sorularınızı WhatsApp'tan yanıtlarız.",
      "Her ay sonuçları birlikte değerlendirip bir sonraki ayın planını güncelliyoruz.",
    ],
    sections: [
      {
        h2: "Danışmanlık ile yönetim arasındaki fark nedir?",
        p: [
          "Danışmanlıkta ne yapılacağını biz söyleriz, uygulamayı siz yaparsınız. Yönetimde ise planlama, çekim, kurgu ve paylaşım dahil işin tamamı bizdedir. Danışmanlık daha düşük maliyetlidir ama içeride bu işe zaman ayıracak birinin olmasını gerektirir.",
          "Emin değilseniz danışmanlıkla başlamak iyi bir yoldur: plan hazır olur, ekibiniz birkaç ay uygular, sonra işi devretmek isterseniz kaldığı yerden yönetime geçeriz.",
        ],
      },
      {
        h2: "Danışmanlık sürecinde elinize ne geçer?",
        p: ["Sözlü tavsiye değil, uygulanabilir belgeler teslim ediyoruz:"],
        list: [
          "Hesap denetim raporu: profil, içerik, etkileşim ve rakip karşılaştırması",
          "Hedef kitle ve mesaj tanımı",
          "Aylık içerik takvimi ve çekim listesi",
          "Reels ve hikâye için örnek senaryolar",
          "Reklam veriliyorsa kampanya yapısı ve bütçe önerisi",
          "Aylık değerlendirme toplantısı ve güncellenmiş plan",
        ],
      },
      {
        h2: "Sektöre göre danışmanlık",
        p: [
          "Her sektörde aynı içerik çalışmaz. Kafe ve restoranda mekân atmosferi ve ürün çekimi, klinikte bilgilendirici içerik ve güven, dershanede veliye hitap eden kayıt dönemi kampanyası, emlakta proje ve konum anlatımı öne çıkar.",
          "Kafe ve restoranlar için ayrı hizmet sayfalarımız var; sektörünüze özel örnekleri ilk görüşmede gösteriyoruz.",
        ],
      },
    ],
    priceTitle: "Sosyal medya danışmanlığı ücreti neye göre belirlenir?",
    priceFactors: [
      { t: "Tek seferlik ya da aylık", d: "Yalnızca denetim ve plan, aylık takipli danışmanlıktan ayrı fiyatlanır." },
      { t: "Hesap ve platform sayısı", d: "Tek hesap ile birden fazla şube ya da platform." },
      { t: "Toplantı sıklığı", d: "Aylık değerlendirme ya da haftalık takip." },
      { t: "Eğitim", d: "Ekibinize yerinde uygulamalı eğitim verilip verilmeyeceği." },
      { t: "Reklam danışmanlığı", d: "Reklam hesabının kurulumu ve takibi kapsama dahil mi." },
      { t: "Çekim desteği", d: "Planın yanında belirli çekimlerin bizim tarafımızdan yapılması." },
    ],
    faq: [
      { q: "Sosyal medya danışmanlığı nedir?", a: "İşletmenin sosyal medya hesapları için strateji, içerik planı ve düzenli yönlendirme alması; uygulamayı ise kendi ekibiyle yapmasıdır." },
      { q: "Tek seferlik danışmanlık alabilir miyim?", a: "Evet. Tek seferlik hesap denetimi ve üç aylık yol haritası hazırlıyoruz; devam etmek isterseniz aylık takipli danışmanlığa geçebilirsiniz." },
      { q: "İçerikleri kim üretiyor?", a: "Danışmanlıkta içerikleri sizin ekibiniz üretir, biz planı ve geri bildirimi veririz. Çekim ve kurguyu da devretmek isterseniz sosyal medya yönetimi hizmetimize geçilir." },
      { q: "Reklam danışmanlığı da veriyor musunuz?", a: "Evet. Meta (Instagram ve Facebook) ve Google Ads için hedefleme, kreatif ve bütçe planlaması yapıyoruz; ayrıntılar reklam danışmanlığı sayfamızda." },
      { q: "Ekibimize eğitim veriyor musunuz?", a: "Evet. Telefonla çekim, Reels kurgusu, hikâye kullanımı ve mesaj yönetimi konularında işletmenizde uygulamalı eğitim veriyoruz." },
    ],
    posts: ["sosyal-medya-danismanligi-nedir", "sosyal-medya-yonetimi-fiyatlari-2026", "instagram-reklam-butcesi-ne-kadar-olmali"],
    related: ["sosyal-medya-yonetimi", "reklam-danismanligi", "cafe-sosyal-medya-danismanligi"],
  },

  "reklam-ajansi": {
    title: "İstanbul Reklam Ajansı: Çekim, Kreatif, Reklam",
    eyebrow: "İstanbul geneli · Çekim · Kreatif · Meta ve Google reklamları",
    answer:
      "ToalTech, İstanbul'da işletmeler için reklamın bütün adımlarını tek ekipte yürüten bir reklam ajansıdır: reklam filmi ve ürün çekimi, görsel ve metin tasarımı, Meta (Instagram, Facebook) ve Google Ads yönetimi, reklamın yönlendiği web sitesi. Çekimi işletmenizde yapar, reklamları ilçenize ve çevresine hedefler, gelen arama ve mesajları aylık raporla gösteririz.",
    highlights: [
      { v: "Tek ekip", l: "çekim, tasarım, reklam ve web" },
      { v: "Yerinde çekim", l: "İstanbul'un iki yakasında" },
      { v: "Meta + Google", l: "reklam hesapları size ait" },
      { v: "Aylık rapor", l: "harcama, mesaj ve arama sayıları" },
    ],
    useCasesTitle: "Reklam ajansı hangi işlerde gerekir?",
    useCasesLead: "İşletmelerin bize en sık geldiği durumlar:",
    useCases: [
      { icon: Megaphone, title: "Yeni açılış ve lansman", text: "Açılış öncesi geri sayım videoları, açılış günü çekimi ve çevredeki müşterilere hedefli reklamlarla mekânın ilk haftalardan duyulması." },
      { icon: GraduationCap, title: "Kayıt ve sezon kampanyası", text: "Kurs, okul, spor salonu ve klinikler için kayıt dönemine özel reklam filmi ve başvuru odaklı reklamlar." },
      { icon: UtensilsCrossed, title: "Restoran, kafe ve mekân", text: "Menü ve mekân çekimi, rezervasyona yönlendiren Instagram reklamları ve Google Haritalar görünürlüğü." },
      { icon: Building2, title: "Emlak ve konut projesi", text: "Drone çekimi, proje tanıtım filmi ve talep formu toplayan reklam kampanyaları." },
      { icon: ShoppingCart, title: "Ürün ve e-ticaret", text: "Ürün çekimi, satışa yönlendiren Meta reklamları ve Google alışveriş aramaları için açılış sayfası." },
      { icon: Target, title: "Reklam veriyor ama sonuç alamayanlar", text: "Mevcut hesapların denetimi: hedefleme, kreatif, açılış sayfası ve ölçüm eksiklerinin tespiti ve yeniden kurulum." },
    ],
    stepDetails: [
      "Neyi satmak istediğinizi, kime ulaşmak istediğinizi ve ayırabileceğiniz bütçeyi konuşuruz.",
      "Kampanya fikrini, çekilecek videoları ve görselleri, yayınlanacak platformları yazılı plan olarak sunarız.",
      "Çekimi işletmenizde yapar, kurgular ve tasarlar; onayınızdan sonra reklamları yayına alırız.",
      "Harcamayı, gelen mesaj ve aramaları her ay raporlar; işlemeyen reklamı durdurur, işleyeni büyütürüz.",
    ],
    sections: [
      {
        h2: "Reklam ajansı ne iş yapar?",
        p: [
          "Reklam ajansı, bir işletmenin doğru kişiye doğru mesajla ulaşması için gereken işleri planlar ve üretir: kampanya fikri, video ve görsel üretimi, reklamın yayınlanacağı mecraların seçimi, bütçenin yönetimi ve sonucun ölçülmesi.",
          "Bugün yerel işletmeler için reklamın büyük kısmı dijitalde dönüyor: Instagram ve Facebook reklamları, Google arama reklamları ve Google Haritalar. Bu yüzden iyi bir reklam yalnızca güzel bir görsel değildir; o görselin kime gösterildiği, tıklayan kişinin nereye düştüğü ve sonunda arayıp aramadığı da işin parçasıdır.",
          "ToalTech'te bu halkaların hepsi aynı ekiptedir. Videoyu çeken ekip reklamı da yönetir, reklamın yönlendiği sayfayı da kurar. Böylece çekim ajansı, reklamcı ve web tasarımcı arasında mekik dokumazsınız.",
        ],
      },
      {
        h2: "Hangi reklam kanallarını yönetiyoruz?",
        p: [
          "Kanal seçimi işinize göre değişir. Müşteriniz sizi arayarak buluyorsa (tesisatçı, klinik, kurs) Google arama reklamları öne çıkar. Müşterinizin gözüne görünerek ihtiyaç doğuruyorsanız (restoran, butik, mekân) Instagram ve Facebook reklamları daha verimlidir. Çoğu işletmede ikisi birlikte kullanılır.",
        ],
        list: [
          "Meta reklamları: Instagram ve Facebook'ta video, Reels ve hikâye reklamları; WhatsApp'a mesaj ya da form hedefli kampanyalar",
          "Google Ads: arama reklamları, ilçe ve mahalle bazlı hedefleme, telefon araması ve WhatsApp tıklaması ölçümü",
          "Google Haritalar: işletme profili düzeni, fotoğraf ve yorum yönetimi",
          "Reklamın yönlendiği web sitesi ya da açılış sayfası",
        ],
      },
      {
        h2: "Reklam kreatifi neden çekimle başlar?",
        p: [
          "Aynı bütçeyle yayınlanan iki reklam arasındaki farkı çoğunlukla video belirler. Stok görüntüyle hazırlanan reklam, işletmenin kendi mekânında ve kendi ürünüyle çekilen videonun yerini tutmaz; izleyen kişi gerçek mekânı ve gerçek insanları görmek ister.",
          "Bu nedenle çalışmaya çekim planıyla başlarız. Çekmeköy'deki Atak Fen Bilimleri için hazırladığımız kayıt dönemi reklam filminde çekim, kurgu, altyazı ve seslendirme bize aitti; film Meta reklamlarında kreatif olarak kullanıldı. Beylikdüzü'ndeki The Capsule için ise açılış öncesi geri sayım videolarından açılış gününe uzanan bir seri hazırladık.",
        ],
      },
      {
        h2: "Sonuç nasıl ölçülür?",
        p: [
          "Beğeni ve görüntülenme tek başına bir şey söylemez. Raporlarımızda harcanan tutarı, reklamdan gelen WhatsApp mesajı, telefon araması ve form sayısını, bunların birim maliyetini gösteririz. Reklam hesapları sizin adınıza açılır; istediğiniz an kendiniz de girip bakabilirsiniz.",
          "Reklamın müşteri getirip getirmediği, mesaj atanların ne kadarının gerçekten alıcı olduğuna da bağlıdır. Bu yüzden ilk haftalarda gelen mesajların niteliğini sizinle birlikte değerlendirir, hedeflemeyi buna göre daraltırız.",
        ],
      },
    ],
    priceTitle: "Reklam ajansı ücreti neye göre belirlenir?",
    priceFactors: [
      { t: "Hizmet kapsamı", d: "Yalnızca reklam yönetimi ile çekim, tasarım ve web sitesi dahil tam hizmet farklı fiyatlanır." },
      { t: "Çekim sıklığı", d: "Tek seferlik reklam filmi ile her ay yenilenen çekim ayrı işlerdir." },
      { t: "Kanal sayısı", d: "Yalnızca Meta, yalnızca Google ya da ikisi birlikte yönetim." },
      { t: "Reklam bütçesi", d: "Reklam bütçesi platformlara doğrudan sizin hesabınızdan ödenir; ajans ücretine dahil değildir." },
      { t: "İçerik adedi", d: "Ayda kaç video, kaç görsel ve kaç kampanya hazırlanacağı." },
      { t: "Çalışma süresi", d: "Düzenli aylık çalışmada birim maliyet tek seferlik işlere göre düşer." },
    ],
    faq: [
      { q: "Reklam ajansı fiyatları ne kadar?", a: "Ücret; kapsama (yalnızca reklam yönetimi mi, çekim ve tasarım dahil mi), çekim sıklığına ve yönetilecek kanal sayısına göre değişir. Reklam bütçesi ajans ücretinden ayrıdır ve platformlara sizin hesabınızdan ödenir. İşletmenizi ve hedefinizi WhatsApp'tan yazarsanız yazılı kapsamla net teklif veriyoruz." },
      { q: "İstanbul'un hangi ilçelerinde çalışıyorsunuz?", a: "İstanbul'un iki yakasında çalışıyoruz. Çekim için işletmenize geliyor, reklamları ilçenize ve çevresindeki mahallelere hedefliyoruz." },
      { q: "Instagram reklamı da veriyor musunuz?", a: "Evet. Instagram ve Facebook reklamlarını Meta reklam yöneticisi üzerinden kuruyor ve yönetiyoruz: video ve Reels reklamları, WhatsApp'a mesaj hedefli kampanyalar ve yeniden pazarlama." },
      { q: "Google reklamı mı Instagram reklamı mı daha iyi?", a: "İşinize göre değişir. Müşteri sizi ihtiyaç anında arıyorsa Google arama reklamları, ürün ya da mekânı görerek karar veriyorsa Instagram reklamları daha verimlidir. İlk görüşmede hangisiyle başlamanın doğru olduğunu birlikte belirliyoruz." },
      { q: "Reklamdan ne kadar sürede sonuç alınır?", a: "Reklamlar yayına girdiği gün gösterilmeye başlar; ilk mesaj ve aramalar genellikle ilk günlerde gelir. Hangi reklamın ve hangi kitlenin işlediğini görmek ve maliyeti düşürmek için 2-4 haftalık veri gerekir." },
      { q: "Sözleşme süresi var mı?", a: "Tek seferlik işler (reklam filmi, kampanya kurulumu) ayrıca yapılabilir. Düzenli reklam yönetiminde en az 3 aylık çalışma öneriyoruz; kapsam ve süre teklifte yazılı olarak belirtilir." },
    ],
    posts: ["instagram-reklam-butcesi-ne-kadar-olmali", "sosyal-medya-yonetimi-fiyatlari-2026"],
    related: ["reklam-filmi-cekimi", "reklam-danismanligi", "sosyal-medya-yonetimi"],
  },

  "reklam-filmi-cekimi": {
    title: "İstanbul Reklam Filmi ve Tanıtım Filmi Çekimi",
    eyebrow: "İstanbul geneli · Senaryo · Çekim · Drone · Kurgu",
    answer:
      "ToalTech, İstanbul'da işletmeler için reklam filmi, kurumsal tanıtım filmi ve sosyal medya reklam videosu çeker. Senaryo, çekim, drone, kurgu, seslendirme ve altyazı aynı ekipte yapılır; film web siteniz için yatay, Instagram Reels ve reklamlar için dikey sürümleriyle birlikte teslim edilir.",
    highlights: [
      { v: "4K", l: "kamera ve drone çekimi" },
      { v: "Senaryodan teslime", l: "tek ekip" },
      { v: "Yatay + dikey", l: "web, Reels ve reklam sürümleri" },
      { v: "Seslendirme", l: "ve altyazı dahil edilebilir" },
    ],
    useCasesTitle: "Hangi tür filmleri çekiyoruz?",
    useCasesLead: "Filmin türünü, nerede yayınlanacağı ve izleyenin ne yapmasını istediğiniz belirler:",
    useCases: [
      { icon: Clapperboard, title: "Reklam filmi", text: "Tek mesaja ve tek çağrıya odaklanan 15-60 saniyelik film. Instagram, Facebook ve YouTube reklamlarında yayınlanmak üzere hazırlanır." },
      { icon: Building2, title: "Kurumsal tanıtım filmi", text: "Firmayı, ekibi ve çalışma biçimini anlatan 1-3 dakikalık film. Web sitesi, teklif sunumu ve fuar ekranı için." },
      { icon: Hotel, title: "Mekân ve tesis tanıtımı", text: "Davet salonu, otel, restoran ve tesisler için mekânı gezdiren, konumu ve olanakları gösteren film; drone planlarıyla birlikte." },
      { icon: GraduationCap, title: "Kayıt ve kampanya filmi", text: "Okul, kurs ve klinikler için kayıt ya da kampanya dönemine özel, seslendirmeli ve altyazılı film." },
      { icon: Factory, title: "Fabrika ve üretim filmi", text: "Üretim hattını, kapasiteyi ve kalite sürecini gösteren film; ihracat sunumları ve bayi toplantıları için." },
      { icon: Smartphone, title: "Sosyal medya reklam videosu", text: "Dikey çekilen, ilk saniyede dikkat çeken kısa videolar; aynı çekimden birkaç farklı sürüm hazırlanır." },
    ],
    stepDetails: [
      "Filmin kime, nerede gösterileceğini ve izleyenin ne yapmasını istediğinizi konuşuruz.",
      "Senaryoyu ya da çekim akışını, plan listesini ve çekim gününün programını yazılı olarak onayınıza sunarız.",
      "Çekimi işletmenizde ya da belirlenen mekânda yaparız; gerekiyorsa drone planları aynı gün çekilir.",
      "Kurgu, renk, müzik, altyazı ve seslendirme tamamlanır; revizyonunuzdan sonra bütün sürümler teslim edilir.",
    ],
    sections: [
      {
        h2: "Reklam filmi ile tanıtım filmi arasındaki fark",
        p: [
          "İkisi sık karıştırılır ama amaçları farklıdır. Reklam filmi sizi tanımayan birine gösterilir; bu yüzden kısadır, tek bir şey söyler ve bir çağrıyla biter: arayın, yazın, kayıt olun. Süre çoğunlukla 15 ile 60 saniye arasındadır.",
          "Tanıtım filmi ise sizi zaten merak eden kişiye gösterilir: web sitenize giren, teklifinizi inceleyen, fuarda standınıza uğrayan kişi. Daha uzundur (genellikle 1-3 dakika), firmayı, mekânı ya da süreci anlatır.",
          "Çoğu işletme için en verimli yol tek çekim gününden ikisini birden çıkarmaktır: bir tanıtım filmi ve ondan kesilen birkaç kısa reklam videosu.",
        ],
      },
      {
        h2: "Çekim süreci nasıl ilerler?",
        p: [
          "İyi bir filmin işinin büyük kısmı çekimden önce biter. Senaryo ya da çekim akışı, hangi planın nerede ve hangi saatte çekileceği, kimin kamera karşısına geçeceği çekim gününden önce yazılı hale gelir. Böylece çekim günü işletmenizin çalışması en az şekilde aksar.",
          "Çekim gününde kamera, ışık ve ses ekipmanıyla işletmenize geliriz. Dış plan ve genel görünüm gereken işlerde drone çekimi aynı gün yapılır; uçuşa uygunluk kontrolünü önceden biz yaparız.",
          "Kurgu aşamasında renk düzenlemesi, müzik, altyazı ve istenirse seslendirme eklenir. İlk kurguyu size gönderir, düzeltme isteklerinizi aldıktan sonra son sürümü hazırlarız.",
        ],
      },
      {
        h2: "Yaptığımız işlerden örnekler",
        p: [
          "Çekmeköy'deki Atak Fen Bilimleri için hazırladığımız kayıt dönemi reklam filminde çekim, kurgu, altyazı ve seslendirme bize aitti; film Meta reklamlarında kullanıldı. Aynı kurum için 4K kurum tanıtım videosu da çektik.",
          "Esenyurt Kıraç'taki Atalar Davet Evi için salonu, dekoru ve mutfak olanaklarını konum bilgisiyle anlatan bir tanıtım filmi hazırladık. Beylikdüzü'ndeki The Capsule için açılış öncesi geri sayım serisini ve ürün videolarını çektik. Bu işlerden kesitleri referanslar sayfamızda izleyebilirsiniz.",
        ],
      },
      {
        h2: "Teslimde neler alırsınız?",
        p: ["Tek bir video dosyası değil, kullanacağınız her yer için hazır sürümler teslim ederiz."],
        list: [
          "Web sitesi, YouTube ve sunumlar için yatay (16:9) ana film",
          "Instagram Reels, TikTok ve hikâye için dikey (9:16) sürüm",
          "Reklamlarda kullanmak üzere kısa kesitler",
          "Sessiz izleyenler için altyazılı sürüm",
          "İstenirse çekimden seçilmiş fotoğraflar",
        ],
      },
    ],
    priceTitle: "Reklam filmi ve tanıtım filmi fiyatı neye göre belirlenir?",
    priceFactors: [
      { t: "Çekim süresi", d: "Yarım günlük tek mekân çekimi ile birden fazla gün ve mekâna yayılan çekim farklı fiyatlanır." },
      { t: "Senaryo ve hazırlık", d: "Hazır bir metinle çekim ile fikrin ve senaryonun baştan yazıldığı iş ayrıdır." },
      { t: "Oyuncu ve seslendirme", d: "Kamera karşısına ekibiniz mi geçecek, oyuncu ya da seslendirme sanatçısı mı gerekecek; teklifte ayrıca yazılır." },
      { t: "Drone ve ek ekipman", d: "Havadan çekim, ek ışık ve özel ekipman ihtiyacı." },
      { t: "Kurgu kapsamı", d: "Filmin süresi, hareketli grafik, altyazı ve kaç farklı sürüm isteneceği." },
      { t: "Revizyon sayısı", d: "Teklifte belirtilen revizyon hakkının üzerindeki değişiklikler ayrıca fiyatlanır." },
    ],
    faq: [
      { q: "Reklam filmi çekimi fiyatları ne kadar?", a: "Fiyat; çekim süresine, senaryo hazırlığına, oyuncu ve seslendirme ihtiyacına, drone kullanımına ve kurgu kapsamına göre değişir. Ne için ve nerede kullanacağınızı WhatsApp'tan yazarsanız yazılı kapsamla net teklif veriyoruz." },
      { q: "Tanıtım filmi kaç dakika olmalı?", a: "Web sitesi ve sunum için 1-3 dakika yeterlidir; daha uzun filmler çoğunlukla sonuna kadar izlenmez. Sosyal medya ve reklam için aynı çekimden 15-60 saniyelik kısa sürümler hazırlıyoruz." },
      { q: "Çekim ne kadar sürer, filmi ne zaman teslim alırım?", a: "Tek mekânda çekim çoğunlukla yarım ya da bir gün sürer. Kurgulanmış ilk sürümü işin kapsamına göre genellikle 1-2 hafta içinde gönderiyoruz; kesin tarihi çekimden önce netleştiriyoruz." },
      { q: "Senaryoyu kim yazıyor?", a: "İsterseniz hazır metninizle çekim yaparız, isterseniz fikri ve senaryoyu biz yazarız. Her iki durumda da çekimden önce yazılı akışı onayınıza sunuyoruz." },
      { q: "Seslendirme ve altyazı yapıyor musunuz?", a: "Evet. Seslendirme, altyazı ve müzik kurgu aşamasında eklenir; kapsam teklifte belirtilir." },
      { q: "Drone çekimi filme dahil mi?", a: "Mekânın konumunu ya da büyüklüğünü göstermek gereken işlerde drone planları ekliyoruz. Lokasyonun uçuşa uygun olup olmadığına çekimden önce bakıyoruz." },
      { q: "Çekilen ham görüntüleri de alabilir miyim?", a: "Evet, istenirse ham görüntüler de teslim edilir; bunu teklif aşamasında belirtmeniz yeterli." },
    ],
    posts: ["instagram-reklam-butcesi-ne-kadar-olmali", "drone-cekimi-fiyatlari-2026"],
    related: ["reklam-ajansi", "drone-cekimi", "sosyal-medya-yonetimi"],
  },
};

export const getServiceContent = (slug: string): ServiceContent | undefined => serviceContent[slug];

/** Hizmet kartlarında kullanılan simgeler */
export const serviceIcons: Record<string, LucideIcon> = {
  "seo-hizmeti": Search,
  "web-tasarim": Monitor,
  "sosyal-medya-danismanligi": Compass,
  "reklam-danismanligi": Megaphone,
  "reklam-ajansi": Target,
  "reklam-filmi-cekimi": Clapperboard,
  "sosyal-medya-yonetimi": Users,
  "yazilim-danismanligi": Code,
  "urun-cekimi": Camera,
  "drone-cekimi": Drone,
  "cafe-sosyal-medya-danismanligi": Coffee,
  "restoran-sosyal-medya-danismanligi": UtensilsCrossed,
};
