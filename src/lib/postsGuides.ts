import type { Post } from "./posts";

/** Hizmet sayfalarını destekleyen rehber yazıları (fiyat, izin, "nedir" aramaları). */
export const guidePosts: Post[] = [
  {
    slug: "drone-cekimi-fiyatlari-2026",
    title: "Drone Çekimi Fiyatları 2026: İstanbul'da Ne Kadar?",
    h1: "Drone Çekimi Fiyatları 2026",
    description: "2026'da İstanbul'da drone çekimi ne kadar? Piyasada ilan edilen fiyat aralıkları, fiyatı değiştiren 7 etken ve teklif alırken sorulacak 8 soru.",
    date: "2026-11-10",
    hub: "/drone-cekimi",
    sections: [
      {
        h2: "Kısa cevap",
        p: [
          "Kasım 2026 itibarıyla İstanbul'da ilan edilen drone çekimi fiyatları çok geniş bir aralıkta: hizmet pazaryerlerinde kısa çekimler için ortalama 4.000 - 12.000 TL görülürken, prodüksiyon şirketlerinin yarım günlük kurumsal paketleri 10.000 TL ile 50.000 TL arasında, tam günlük ve kurgulu tanıtım filmi paketleri bunun üzerinde ilan ediliyor. Fark; çekim süresi, izin gerekliliği, ekipman ve kurgu kapsamından kaynaklanıyor.",
          "Bunlar piyasada herkese açık ilan edilen rakamlardan derlenmiş bir gözlemdir, ToalTech'in fiyat listesi değildir. Kendi teklifimizi çekim noktanıza ve ihtiyacınıza göre aynı gün veriyoruz.",
        ],
      },
      {
        h2: "Fiyatı değiştiren 7 etken",
        p: ["Aynı gün iki farklı firmadan aldığınız tekliflerin birbirinin üç katı olması şaşırtıcı değildir; çünkü çoğu zaman aynı işi fiyatlamıyorlar."],
        list: [
          "Çekim süresi: tek lokasyonda bir-iki saat, yarım gün ya da tam gün",
          "Lokasyon ve izin: izne tabi bölgelerde başvuru ve planlama emeği eklenir",
          "Ekipman: standart kameralı drone, FPV drone ya da sinema sınıfı araç",
          "Ekip: tek pilot ya da pilot ve kameraman",
          "Kurgu: ham görüntü, kısa Reels ya da müzikli ve yazılı tanıtım filmi",
          "Teslim adedi: kaç video, kaç format, kaç fotoğraf",
          "Kullanım hakkı ve tekrar: reklamda kullanım, aylık düzenli çekim indirimi",
        ],
      },
      {
        h2: "Fiyata genellikle dahil olan ve olmayanlar",
        p: [
          "Teklifleri karşılaştırırken toplam rakama değil, kalemlere bakın. Dahil olanlar çoğunlukla: çekim, temel renk düzenlemesi ve bir adet kurgulanmış video. Ayrı fiyatlanabilenler: izin başvurusu, ek kurgu versiyonları (dikey, kısa, reklam kesiti), ham görüntülerin teslimi, İstanbul dışı yol masrafı, seslendirme ve lisanslı müzik.",
          "Hava koşulu nedeniyle ertelemenin ücretli olup olmadığını mutlaka sorun. Biz ek ücret almadan uygun ilk güne erteliyoruz.",
        ],
      },
      {
        h2: "Çekim türüne göre ne beklemeli?",
        p: [
          "Emlak ve arsa çekimleri en kısa işlerdir: tek lokasyon, kısa uçuş, birkaç fotoğraf ve bir dakikalık video. Şantiye takibinde çekim başı maliyet düşer çünkü aynı plan her ay tekrarlanır. Otel, restoran ve tesis tanıtımlarında gündüz ve gece ayrı çekildiği için süre uzar. Etkinlik çekimlerinde kalabalık üzerinde uçuş kuralları planlamayı zorlaştırır. FPV ile iç mekân çekimi ayrı bir pilotluk ve hazırlık gerektirdiği için ayrıca fiyatlanır.",
        ],
      },
      {
        h2: "Teklif alırken sorulacak 8 soru",
        p: ["Bu sorulara net cevap alamıyorsanız teklif karşılaştırılabilir değildir."],
        list: [
          "Uçuş için gereken belge ve izinler tamam mı?",
          "Çekim noktası izne tabi mi, süreç nasıl işleyecek?",
          "Fiyata kaç saatlik çekim dahil?",
          "Kurgu dahil mi, kaç versiyon teslim edilecek?",
          "Dikey (Reels) versiyon ayrıca ücretli mi?",
          "Ham görüntüleri alabiliyor muyum?",
          "Hava uygun olmazsa erteleme ücretli mi?",
          "Teslim süresi kaç iş günü?",
        ],
      },
      {
        h2: "Ucuz teklifte dikkat edilecekler",
        p: [
          "Çok düşük fiyatlı tekliflerde genellikle üç şeyden biri eksiktir: lisans ve izin, kurgu ya da görüntü kalitesi. İzinsiz yapılan bir uçuşun sorumluluğu operatörde olsa da, çekimin yarıda kesilmesi ya da görüntülerin kullanılamaması sizin kaybınız olur.",
        ],
      },
    ],
    faq: [
      { q: "Drone çekimi saatlik mi, günlük mü fiyatlanır?", a: "İkisi de kullanılıyor. Kısa emlak ve arsa çekimleri çoğunlukla iş başı ya da saatlik, kurumsal tanıtım ve etkinlik çekimleri yarım gün ya da tam gün olarak fiyatlanır." },
      { q: "Drone çekimi fiyatına kurgu dahil mi?", a: "Firmaya göre değişir; bu yüzden teklifte kurgunun ve kaç versiyonun dahil olduğunu yazılı olarak isteyin. ToalTech tekliflerinde kurgu, renk düzenlemesi ve müzik dahildir." },
      { q: "Emlak için drone çekimi ne kadar sürer?", a: "Tek bir daire, villa ya da arsa için çekim genellikle bir-iki saat sürer; düzenlenmiş fotoğraf ve video birkaç iş günü içinde teslim edilir." },
    ],
  },
  {
    slug: "drone-cekimi-izni-nasil-alinir",
    title: "Drone Çekimi İzni Nasıl Alınır? 2026 Kuralları",
    h1: "Drone Çekimi İzni: 2026 Kuralları ve İstanbul'da Süreç",
    description: "2026'da yenilenen SHT-İHA talimatına göre drone çekimi izni: P1 lisansı, M0-M3 sınıfları, yeşil ve kırmızı bölgeler, İstanbul'da izne tabi alanlar.",
    date: "2026-08-25",
    updated: "2026-11-10",
    hub: "/drone-cekimi",
    sections: [
      {
        h2: "Kısa cevap",
        p: [
          "Türkiye'de ticari drone çekimi için pilotun en az P1 lisansına sahip olması, aracın kayıtlı olması ve uçulacak nokta yeşil bölge dışında kalıyorsa Sivil Havacılık Genel Müdürlüğü'nden (SHGM) uçuş izni alınması gerekir. Bu süreci çekimi yaptıran işletme değil, uçuşu yapan ekip yürütür.",
        ],
      },
      {
        h2: "2026'da ne değişti?",
        p: [
          "SHGM'nin 2026 yazında yürürlüğe giren yeni SHT-İHA talimatı, 2016'dan beri kullanılan İHA0, İHA1, İHA2, İHA3 sınıflandırmasını kaldırdı. Artık araç sınıfı ile pilot lisansı birbirinden ayrı tanımlanıyor.",
          "Mevcut pilot belgeleri için geçiş hükümleri var: eski İHA0 belgesi P0'a, İHA1 belgesi P1'e, İHA2 ve İHA3 belgeleri P2'ye karşılık geliyor. Talimat, tam uyum için 31 Temmuz 2027'ye kadar süre tanıyor ve yeni kayıt sistemi (İHATTYS) devreye girene kadar kayıt ve izin işlemlerinde eski usulün uygulanmasına izin veriyor.",
        ],
        list: [
          "Araç sınıfları: M0 (500 gr - 4 kg), M1 (4 - 25 kg), M2 (25 - 150 kg), M3 (150 kg üzeri)",
          "P0 lisansı: hobi amaçlı, gündüz, görerek uçuş; en fazla 120 metre yükseklik",
          "P1 lisansı: ticari uçuş; görerek, en fazla 120 metre yükseklik ve 3.000 metre uzaklık",
          "P2 lisansı: görüş hattı dışı uçuş ve kalabalık üzerinde uçuş gibi özel operasyonlar",
        ],
      },
      {
        h2: "Yeşil, kırmızı ve turuncu bölge ne demek?",
        p: [
          "Yeni düzende izin gerekip gerekmediğini SHGM'nin yayımladığı harita belirliyor. Yeşil bölgelerde, belirlenen irtifa ve şartlara uyulduğu sürece ayrıca operasyon izni gerekmiyor. Kırmızı bölgeler bir kurum tarafından uçuşa kapatılmış alanlar; burada hem o kurumun onayı hem SHGM izni aranıyor. Turuncu bölgeler ise o an başka biri adına izin ya da tahsis yapılmış alanları gösteriyor.",
          "Önemli nokta şu: yeşil olarak işaretlenmemiş her yer kısıtlanmış bölge sayılıyor ve SHGM izni gerektiriyor. Yani haritada renksiz görünen bir alan serbest demek değil.",
        ],
      },
      {
        h2: "İstanbul'da hangi alanlar izne tabi?",
        p: [
          "İstanbul'un büyük bölümü havalimanı yaklaşma hatları, askeri alanlar ve kamu binaları nedeniyle dikkat gerektiriyor. Resmî ve güncel durum her zaman SHGM haritasından kontrol edilmelidir; aşağıdaki alanlar pratikte en sık izin gerektiren yerlerdir.",
          "Kısıtlı bir noktadaysanız çoğu zaman birkaç yüz metre öteden, farklı bir açıyla eşdeğer bir çekim yapılabiliyor. Bu yüzden çekim noktasını önceden paylaşmanız planlamayı hızlandırır.",
        ],
        list: [
          "İstanbul Havalimanı çevresi (Arnavutköy)",
          "Sabiha Gökçen çevresi (Pendik, Tuzla, Kartal yönü)",
          "Atatürk Havalimanı sahası çevresi (Bakırköy, Bahçelievler, Küçükçekmece)",
          "Boğaz hattı, köprüler ve Tarihi Yarımada",
          "Askeri tesisler, kamu binaları, cezaevleri ve konsolosluk çevreleri",
        ],
      },
      {
        h2: "İzin ne kadar sürer?",
        p: [
          "Talimatta sabit bir süre yazmıyor; süre başvurunun yapıldığı bölgeye ve onay vermesi gereken kurumlara göre değişiyor. İzin gerektirmeyen noktalarda çekim birkaç gün içinde planlanabilir. İzne tabi noktalarda çekim tarihinden en az iki-üç hafta önce haber vermenizi öneriyoruz.",
        ],
      },
      {
        h2: "Kalabalık üzerinde ve gece uçuş",
        p: [
          "Konser, miting, festival gibi kalabalık üzerinde uçuş P2 lisansı kapsamındadır; P1 lisansıyla yapılamaz. Etkinlik çekimlerinde bu yüzden uçuş hattı kalabalığın üzerinden değil, kenarından planlanır.",
          "Gece uçuşu P1 lisansıyla, uygun ışık donanımı olan araçla mümkündür. Yağmurda ve kuvvetli rüzgârda uçuş yapılmaz; çekim uygun bir güne ertelenir.",
        ],
      },
      {
        h2: "İşletme olarak sizin sorumluluğunuz",
        p: [
          "Uçuş izni operatörün işidir. Sizden beklenen, çekilecek alanın size ait ya da kullanımınızda olduğunu teyit etmeniz ve site yönetimi, AVM yönetimi ya da komşu parsel sahibi gibi tarafların onayı gerekiyorsa bunu önceden almanızdır. Kişilerin tanınabilir şekilde göründüğü görüntülerde kişisel verilerin korunması kuralları da geçerlidir.",
        ],
      },
      {
        h2: "Kaynak",
        p: [
          "Bu yazı SHGM'nin yayımladığı SHT-İHA talimat metnine dayanılarak hazırlanmıştır. Mevzuat ve geçiş süreci değişebileceği için güncel ve bağlayıcı bilgi için SHGM'nin resmî sitesine bakın; yazı hukuki danışmanlık yerine geçmez.",
        ],
      },
    ],
    faq: [
      { q: "Ticari drone çekimi için hangi lisans gerekir?", a: "Görerek yapılan ticari uçuşlar için en az P1 lisansı gerekir. Eski İHA1 ticari pilot belgesi geçiş hükümlerine göre P1'e karşılık gelir." },
      { q: "500 gramın altındaki drone için izin gerekir mi?", a: "Talimat, tasarımı gereği 10 metre yarıçap ve 20 metre yüksekliği aşamayan oyuncak sınıfını (Basit İHA) lisans ve kayıttan muaf tutuyor. Bu tanıma girmeyen 500 gram altı araçlar M0 sınıfı kurallarına tabidir." },
      { q: "Drone ile en fazla kaç metre yükseğe çıkılabilir?", a: "P0 ve P1 lisanslarında sınır 120 metre yükseklik ve 3.000 metre yatay uzaklıktır. Bunun ötesi P2 lisansı ve ayrı izin gerektirir." },
    ],
  },
  {
    slug: "yazilim-danismanligi-nedir",
    title: "Yazılım Danışmanlığı Nedir? Ne Zaman Gerekir?",
    h1: "Yazılım Danışmanlığı Nedir, Ne İşe Yarar?",
    description: "Yazılım danışmanlığı nedir, ne zaman gerekir, sonunda elinize ne geçer? Hazır ve özel yazılım farkı, ücret modelleri, firma seçerken 7 kriter.",
    date: "2026-11-10",
    hub: "/yazilim-danismanligi",
    sections: [
      {
        h2: "Kısa cevap",
        p: [
          "Yazılım danışmanlığı, bir işletmenin yazılımla ilgili kararlarını teknik bir uzmanla birlikte vermesidir: neye ihtiyaç var, hazır bir ürün yeter mi, kime yaptırılmalı, kaça mal olur ve iş doğru ilerliyor mu. Danışman kod yazmak zorunda değildir; işi, yanlış yazılıma para harcanmasını önlemektir.",
        ],
      },
      {
        h2: "Yazılım danışmanı ne yapar, ne yapmaz?",
        p: [
          "Danışman ihtiyacı analiz eder, seçenekleri karşılaştırır, teknik şartname hazırlar, tedarikçi tekliflerini değerlendirir ve proje boyunca işin doğru yapılıp yapılmadığını denetler. Geliştirmeyi kendisi de yapabilir, başka bir firmaya da yaptırabilir.",
          "Danışmanın yapmaması gereken şey, ihtiyacı dinlemeden elindeki ürünü satmaktır. Bir ürünün bayisi olan firma danışman değil satıcıdır; bu ayrımı görüşmenin başında sormak gerekir.",
        ],
      },
      {
        h2: "Hangi durumlarda gerekir?",
        p: ["Her yazılım alımında danışmana gerek yoktur. Şu durumlarda ise danışmanlık ücreti kendini çoğu zaman hızla çıkarır:"],
        list: [
          "Birden fazla firmadan teklif aldınız ve fiyatlar arasında büyük fark var",
          "E-ticarete, mobil uygulamaya ya da özel bir yönetim paneline yatırım yapacaksınız",
          "Mevcut yazılımınız işinizi yavaşlatıyor ama değiştirmek riskli görünüyor",
          "Yarım kalmış ya da geciken bir projeniz var",
          "Muhasebe, e-ticaret ve kargo sistemleriniz arasında veri elle taşınıyor",
          "İçeride teknik karar verebilecek biri yok",
        ],
      },
      {
        h2: "Hazır yazılım mı, özel yazılım mı?",
        p: [
          "Randevu, ön muhasebe, stok ve standart e-ticaret gibi yaygın ihtiyaçlar için hazır ürünler çoğu zaman daha hızlı ve daha ucuzdur. Özel yazılım, iş yapış şekliniz hazır ürünlere sığmadığında ya da lisans ve uyarlama maliyeti özel geliştirmeyi geçtiğinde anlam kazanır.",
          "Pratik bir ölçü: süreci sizin gibi yürüten yüzlerce işletme varsa büyük ihtimalle hazır bir ürünü vardır. Rekabet avantajınız tam da o sürecin farklı işlemesinden geliyorsa özel yazılım düşünülür.",
        ],
      },
      {
        h2: "Danışmanlık sonunda elinize ne geçer?",
        p: ["İyi bir danışmanlık sözlü tavsiyeyle bitmez; karar vermenizi sağlayan belgeler bırakır."],
        list: [
          "İhtiyaç analizi: hangi süreç, kim kullanacak, hangi veriler",
          "Seçenek karşılaştırması: hazır ürün, uyarlama, özel geliştirme; her biri için maliyet, süre ve risk",
          "Teknik şartname: firmalara aynı kapsamda teklif verdirebileceğiniz belge",
          "Teklif karşılaştırma tablosu",
          "Yol haritası: önce ne yapılacak, sonra ne eklenecek",
        ],
      },
      {
        h2: "Ücret nasıl belirlenir?",
        p: [
          "Piyasada üç model yaygındır: saatlik ya da günlük (adam-gün) ücret, kapsamı belli sabit fiyatlı analiz paketi ve aylık düzenli danışmanlık. Küçük işletmeler için en öngörülebilir olanı, kapsamı ve teslim edilecek belgeleri baştan yazılı olan sabit fiyatlı analizdir.",
          "Ücreti işin büyüklüğü belirler: kaç süreç inceleniyor, kaç sistem birbirine bağlanacak ve danışman geliştirme sürecini de takip edecek mi.",
        ],
      },
      {
        h2: "Yazılım danışmanlık firması seçerken 7 kriter",
        p: ["İstanbul'da bu hizmeti veren çok sayıda firma var; aralarındaki fark çoğu zaman web sitesinden anlaşılmaz. Görüşmede şunlara bakın:"],
        list: [
          "Bağımsızlık: Belirli bir ürünün bayisi mi, komisyon alıyor mu?",
          "Benzer iş: Sizin ölçeğinizde ve sektörünüzde ne yaptılar, gösterebiliyorlar mı?",
          "Sade anlatım: Teknik konuyu sizin anlayacağınız dille anlatabiliyorlar mı?",
          "Yazılı kapsam: Ne teslim edileceği ve ne edilmeyeceği yazılı mı?",
          "Mülkiyet: Kaynak kod, alan adı ve hesaplar kimin adına olacak?",
          "Sonrası: Yayın sonrası bakım ve destek nasıl işliyor?",
          "Çıkış: Çalışmayı bırakırsanız sistem başka bir ekibe devredilebilir mi?",
        ],
      },
    ],
    faq: [
      { q: "Yazılım danışmanlığı ile yazılım geliştirme arasındaki fark nedir?", a: "Geliştirme yazılımın yapılmasıdır; danışmanlık neyin, nasıl ve kime yaptırılacağına karar verilmesidir. Aynı firma ikisini de yapabilir, ancak danışmanlık aşamasında önerinin ihtiyaca göre verilmesi gerekir." },
      { q: "Küçük işletmeler yazılım danışmanlığı alır mı?", a: "Evet. Web sitesi, e-ticaret, randevu ya da stok sistemi alacak küçük bir işletme için tek seferlik kısa bir analiz, yanlış ürüne yapılacak harcamadan çok daha ucuzdur." },
      { q: "Yazılım danışmanlığı uzaktan alınabilir mi?", a: "Evet, sürecin büyük bölümü online yürütülebilir. İlk analiz toplantısının işletmede yüz yüze yapılması, süreçlerin yerinde görülmesi açısından faydalıdır." },
    ],
  },
  {
    slug: "sosyal-medya-danismanligi-nedir",
    title: "Sosyal Medya Danışmanlığı Nedir? Yönetimden Farkı",
    h1: "Sosyal Medya Danışmanlığı Nedir?",
    description: "Sosyal medya danışmanlığı nedir, yönetimden farkı ne, danışman ne yapar ve ne teslim eder? Kimler için uygun, ücret neye göre belirlenir?",
    date: "2026-11-10",
    hub: "/sosyal-medya-danismanligi",
    sections: [
      {
        h2: "Kısa cevap",
        p: [
          "Sosyal medya danışmanlığı, hesaplarını kendi ekibiyle yürüten bir işletmenin strateji, içerik planı ve düzenli geri bildirim almasıdır. Danışman ne yapılacağını söyler ve sonucu takip eder; içeriği üretmek ve paylaşmak işletmenin ekibindedir. İçerik üretimi ve paylaşım da devrediliyorsa bunun adı sosyal medya yönetimidir.",
        ],
      },
      {
        h2: "Danışmanlık, yönetim, freelancer ve iç ekip farkı",
        p: ["Dört seçenek de aynı sorunu çözer ama maliyeti ve sizden istediği zaman farklıdır."],
        list: [
          "Danışmanlık: plan ve yön dışarıdan, uygulama sizde. En düşük maliyet; içeride zaman ayıracak biri şart.",
          "Ajans yönetimi: plan, çekim, kurgu, paylaşım ve rapor dışarıda. Sizden yalnızca onay ve çekim için zaman istenir.",
          "Freelancer: tek kişi; tasarım ya da paylaşımda iyi olabilir ama çekim, kurgu ve reklamı aynı anda taşıması zordur.",
          "İç ekip: en kontrollü seçenek; maaş, ekipman ve yönetim yükü en yüksek olan da budur.",
        ],
      },
      {
        h2: "Danışman ne yapar, ne yapmaz?",
        p: [
          "Danışman hesabı ve rakipleri denetler, hedef kitleyi ve mesajı tanımlar, aylık içerik takvimini ve çekim listesini hazırlar, ekibin ürettiği içeriklere yayın öncesi geri bildirim verir ve sonuçları her ay birlikte değerlendirir.",
          "Danışman günlük paylaşım yapmaz, yorumlara cevap vermez ve tasarım üretmez. Bunlar isteniyorsa hizmetin adı yönetimdir ve ücreti de farklıdır.",
        ],
      },
      {
        h2: "Ne teslim alırsınız?",
        p: ["Somut çıktı istemek hakkınızdır. Beklenmesi gerekenler:"],
        list: [
          "Hesap denetim raporu ve rakip karşılaştırması",
          "Hedef kitle ve mesaj tanımı",
          "Aylık içerik takvimi ve çekim listesi",
          "Reels ve hikâye için örnek senaryolar",
          "Reklam veriliyorsa kampanya yapısı ve bütçe önerisi",
          "Aylık değerlendirme toplantısı ve güncellenmiş plan",
        ],
      },
      {
        h2: "Kimler için uygun?",
        p: [
          "İçeride içerik üretebilecek biri olan, yeni açılan ve hesabını doğru kurmak isteyen, paylaşım yapıp sonuç alamayan ya da çalıştığı ajansı bağımsız bir gözle denetletmek isteyen işletmeler için uygundur. Kimsenin zaman ayıramadığı işletmelerde danışmanlık kâğıtta kalır; bu durumda yönetim daha doğru seçimdir.",
        ],
      },
      {
        h2: "Ücret neye göre belirlenir?",
        p: [
          "Tek seferlik denetim ve yol haritası ile aylık takipli danışmanlık ayrı fiyatlanır. Ücreti hesap ve platform sayısı, toplantı sıklığı, ekibe eğitim verilip verilmeyeceği ve reklam danışmanlığının dahil olup olmadığı belirler. Yönetim hizmetinin piyasa aralıkları için Sosyal Medya Yönetimi Fiyatları 2026 yazımıza bakabilirsiniz.",
        ],
      },
      {
        h2: "Dikkat edilmesi gereken işaretler",
        p: [
          "Takipçi sayısı garantisi verenlerden, hesabınızın şifresini isteyip yetkilendirme kullanmayanlardan, yazılı plan sunmayanlardan ve raporu yalnızca beğeni sayısıyla yapanlardan uzak durun. Hesaplar ve reklam hesabı her zaman işletmenin adına olmalıdır.",
        ],
      },
    ],
    faq: [
      { q: "Sosyal medya danışmanı içerik üretir mi?", a: "Hayır. Danışman planı, senaryoyu ve geri bildirimi verir; içeriği işletmenin ekibi üretir. İçerik üretimi de isteniyorsa sosyal medya yönetimi hizmeti alınır." },
      { q: "Danışmanlık ne kadar sürer?", a: "Tek seferlik denetim ve yol haritası bir-iki haftada tamamlanır. Aylık takipli danışmanlıkta sonuçları görmek için en az üç aylık bir dönem önerilir." },
      { q: "Danışmanlıktan yönetime geçilebilir mi?", a: "Evet. Plan hazır olduğu için geçiş kolaydır; aynı ekip çekim, kurgu ve paylaşımı da üstlenir." },
    ],
  },
];
