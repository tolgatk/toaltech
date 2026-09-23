import { districts, type District } from "./districts";
import { de, nin } from "./tr";

/** Cam tablo sayfalarının ortak içeriği: /cam-tablo, /cam-tablo/[ilce], /cam-tablo/[ilce]/[semt] */

export const camTabloImage = {
  src: "/cam-tablo/istanbul-cam-tablo-salon-dekorasyon.jpg",
  width: 1600,
  height: 1060,
  credit: "Fotoğraf: Caroline Badran / Unsplash",
};

export const camTabloWhatsapp = (yer?: string) =>
  `https://wa.me/905355152237?text=${encodeURIComponent(`Merhaba, ${yer ? `${yer} için ` : ""}cam tablo hakkında bilgi ve fiyat almak istiyorum.`)}`;

export const camTabloIntro =
  "Cam tablo, görselin temperli camın arka yüzüne UV baskıyla işlendiği, parlak ve derinlikli görünen modern bir duvar dekorasyonudur. Renkleri kanvasa göre daha canlı durur, nemden etkilenmez ve nemli bezle silinerek temizlenir; salon, yatak odası, mutfak, antre ve ofis duvarlarına uygundur.";

export const camTabloModels = [
  { name: "Tek Parça Cam Tablo", desc: "Koltuk üstü, konsol üstü ya da antre için tek, büyük ve etkili bir odak noktası." },
  { name: "3'lü ve 5'li Parçalı Cam Tablo", desc: "Geniş salon duvarlarında bütün bir görseli parçalara bölerek ritim ve derinlik kazandırır." },
  { name: "Kişiye Özel Fotoğraflı Cam Tablo", desc: "Kendi fotoğrafınız, çocuklarınızın resmi ya da düğün kareniz cama basılır; hediye için de çok tercih edilir." },
  { name: "Saatli Cam Tablo", desc: "Mutfak ve salon için hem dekoratif hem işlevsel; sessiz akar saat mekanizmasıyla." },
  { name: "Soyut ve Modern Cam Tablo", desc: "Minimal, mermer desenli, altın varak görünümlü ve geometrik tasarımlar." },
  { name: "Manzara ve İstanbul Temalı Cam Tablo", desc: "Boğaz, Galata, Kız Kulesi, doğa ve deniz manzaraları." },
  { name: "Hat Sanatı ve Tezhip Cam Tablo", desc: "Hat, ebru ve tezhip motifli klasik tasarımlar." },
  { name: "Kurumsal ve Ofis Cam Tablo", desc: "Logo, slogan ya da marka görselli tablolar; resepsiyon, toplantı odası ve mağaza duvarları için." },
];

export const camTabloSizes = [
  { size: "30 × 40 cm", use: "Mutfak, banyo, çalışma masası üstü, ikili-üçlü duvar düzenleri" },
  { size: "40 × 60 cm", use: "Yatak başı yanları, antre, dar duvarlar" },
  { size: "50 × 70 cm", use: "Yatak odası, çocuk odası, konsol üstü" },
  { size: "60 × 90 cm", use: "2'li–3'lü koltuk üstü, yemek odası" },
  { size: "70 × 100 cm", use: "Salon ana duvarı, ofis resepsiyonu" },
  { size: "80 × 120 cm ve üzeri", use: "Geniş salon duvarları, lobi, showroom" },
  { size: "3'lü set (3 × 40 × 60 cm)", use: "Köşe koltuk ve geniş TV ünitesi duvarları" },
];

export const camTabloRooms = [
  { room: "Salon", tip: "Tablonun (ya da set halindeki toplam genişliğin) koltuk genişliğinin yaklaşık 2/3'ü kadar olması dengeli durur; alt kenarı koltuk sırtından 20–25 cm yukarıda olmalı." },
  { room: "Yatak Odası", tip: "Yatak başının üstünde yatay tek parça ya da 3'lü set; sakin tonlar, soyut ve doğa temaları tercih edilir." },
  { room: "Mutfak", tip: "Cam yüzey nem ve yağdan etkilenmez, silinerek temizlenir; 30×40 veya saatli modeller mutfak için idealdir." },
  { room: "Antre ve Koridor", tip: "Dikey 40×60 ya da 50×70 ölçü dar duvarları yüksek gösterir; tablonun merkezi yerden yaklaşık 145–150 cm yükseklikte olmalı." },
  { room: "Ofis ve İşyeri", tip: "Logo ya da marka renklerinde kurumsal cam tablo; resepsiyon ve toplantı odasında profesyonel bir ilk izlenim bırakır." },
];

export const camTabloSteps = [
  "WhatsApp'tan model, ölçü ya da kendi fotoğrafınızı gönderin",
  "Duvarınıza göre ölçü önerisi ve baskı önizlemesi hazırlanır",
  "Onayınızla temperli cama UV baskı yapılır, askı aparatı takılır",
  "Tablonuz özenli paketlenerek adresinize teslim edilir",
];

export const camTabloFaq = [
  { q: "Cam tablo fiyatları ne kadar?", a: "Fiyat; tablonun ölçüsüne, tek parça ya da set olmasına ve kişiye özel tasarım gerekip gerekmediğine göre değişir. Duvar ölçünüzü ve beğendiğiniz modeli WhatsApp'tan gönderirseniz güncel fiyatı hemen iletiyoruz." },
  { q: "Cam tablo kırılır mı, güvenli mi?", a: "Cam tablolarda temperli cam kullanılır. Temperli cam normal cama göre darbeye çok daha dayanıklıdır; kırılması durumunda da keskin büyük parçalar yerine küçük, künt parçalara ayrılır. Bu yüzden ev ve işyerleri için güvenli bir seçimdir." },
  { q: "Cam tablo nasıl asılır?", a: "Tablonun arkasında hazır askı aparatı bulunur. Duvara uygun dübel ve vidayla asılır; büyük ölçülerde iki askı noktası kullanılır. Parçalı setlerde parçalar arasında 3–5 cm boşluk bırakmak dengeli görünür." },
  { q: "Cam tablo nasıl temizlenir?", a: "Yumuşak, hafif nemli bir bez ya da cam temizleyiciyle silmek yeterlidir. Baskı camın arka yüzünde olduğu için ön yüzü silerken görsele zarar gelmez." },
  { q: "Kendi fotoğrafımı cam tablo yaptırabilir miyim?", a: "Evet. Telefonla çekilmiş fotoğraflar da basılabilir; çözünürlüğü seçtiğiniz ölçü için yetersizse bunu baskıdan önce size söylüyor ve uygun ölçüyü öneriyoruz." },
  { q: "Cam tablo mu kanvas tablo mu?", a: "Cam tablo daha parlak, derin ve modern görünür; silinerek temizlenir ve nemden etkilenmez. Kanvas daha mat ve yumuşak bir doku verir. Mutfak, banyo ve modern salonlarda cam tablo, klasik ve rustik dekorlarda kanvas öne çıkar." },
];

/** İlçeye özel konut ve dekorasyon notu (içeriğin ilçeden ilçeye gerçekten farklı olması için) */
export const ilceDecorNotes: Record<string, string> = {
  adalar: "Adalar'ın ahşap köşkleri ve yazlık evlerinde deniz, çam ve ada manzaralı cam tablolar mekânın ruhuyla uyum sağlar; nemli ada havasında cam yüzeyin bozulmaması da büyük avantajdır.",
  arnavutkoy: "Arnavutköy'ün yeni konut sitelerinde geniş salon duvarları için 3'lü set ve büyük ölçü cam tablolar, Hadımköy çevresindeki işyerleri için de kurumsal logolu cam tablolar sık tercih edilir.",
  atasehir: "Ataşehir'in rezidans ve yüksek katlı sitelerindeki modern dairelerde minimal, soyut ve mermer desenli cam tablolar; plaza ofislerinde ise kurumsal cam tablolar öne çıkar.",
  avcilar: "Avcılar'da öğrenci evlerinden aile dairelerine kadar farklı ihtiyaçlar için uygun ölçülü tek parça cam tablolar ve deniz manzaralı modeller çok tercih edilir.",
  bagcilar: "Bağcılar'ın kalabalık aile evlerinde salon için büyük parçalı setler, mutfak için saatli cam tablolar; Güneşli'deki ofis ve atölyelerde kurumsal tablolar talep görür.",
  bahcelievler: "Bahçelievler'in yenilenen apartman dairelerinde koltuk üstü 3'lü setler ve modern soyut cam tablolar, E-5 aksındaki klinik ve ofislerde bekleme salonu tabloları sık istenir.",
  bakirkoy: "Bakırköy'ün Ataköy, Yeşilköy ve Florya'daki geniş ve ferah dairelerinde deniz temalı, açık tonlu ve büyük ölçülü cam tablolar dekorasyonu tamamlar.",
  basaksehir: "Başakşehir, Bahçeşehir ve Kayaşehir'in yeni, planlı sitelerindeki geniş salonlar büyük ölçü ve parçalı cam tablolar için ideal duvarlar sunar; yeni taşınanların ilk dekorasyon alışverişinde en çok aranan ürünlerdendir.",
  bayrampasa: "Bayrampaşa'daki aile dairelerinde hat sanatı, manzara ve saatli cam tablolar; tekstil atölyeleri ve showroom'larda marka görselli tablolar tercih edilir.",
  besiktas: "Beşiktaş'ın Etiler, Levent, Bebek ve Ortaköy'deki premium daire ve ofislerinde galeri etkisi veren büyük ölçülü, minimal ve siyah-beyaz fotoğraf baskılı cam tablolar öne çıkar.",
  beykoz: "Beykoz'un Boğaz kıyısındaki müstakil evleri ve Riva-Polonezköy'deki villalarında doğa, orman ve Boğaz manzaralı büyük cam tablolar mekânın içini dışıyla buluşturur.",
  beylikduzu: "Beylikdüzü'nün havuzlu, planlı sitelerindeki modern dairelerde koltuk üstü 3'lü setler, soyut ve altın detaylı cam tablolar en çok aranan modellerdir.",
  beyoglu: "Beyoğlu'nun Cihangir, Galata ve Karaköy'deki yüksek tavanlı tarihi dairelerinde, butik otel ve kafelerinde İstanbul temalı, sanatsal ve vintage görünümlü cam tablolar karakter katar.",
  buyukcekmece: "Büyükçekmece'nin sahil ve yazlık evlerinde deniz, göl ve gün batımı temalı cam tablolar; Alkent gibi sitelerde büyük ölçülü modern tablolar tercih edilir.",
  catalca: "Çatalca'nın müstakil ve bahçeli evlerinde doğa, çiftlik ve rustik temalı cam tablolar; kır düğünü ve kahvaltı mekânlarında ise duvar boyu büyük baskılar ilgi görür.",
  cekmekoy: "Çekmeköy'ün orman manzaralı yeni sitelerinde doğa temalı, yeşil tonlu ve büyük ölçülü cam tablolar ev ile çevre arasında doğal bir bağ kurar.",
  esenler: "Esenler'deki aile evlerinde hat sanatı, manzara ve saatli cam tablolar; Tekstilkent'teki işyerlerinde kurumsal cam tablolar talep görür.",
  esenyurt: "Esenyurt'un yüksek katlı sitelerindeki yeni dairelerde uygun ölçülü tek parça ve 3'lü set cam tablolar, taşınma sonrası dekorasyonun en hızlı ve etkili çözümüdür.",
  eyupsultan: "Eyüpsultan'da Göktürk ve Kemerburgaz'ın villa ve sitelerinde büyük ölçülü modern cam tablolar, Eyüp merkezde ise hat sanatı ve klasik İstanbul temalı tablolar öne çıkar.",
  fatih: "Fatih'in tarihi dokusundaki evler, butik oteller ve Balat kafelerinde İstanbul silüeti, hat sanatı, çini ve tezhip desenli cam tablolar mekânın hikâyesini tamamlar.",
  gaziosmanpasa: "Gaziosmanpaşa'nın kentsel dönüşümle yenilenen dairelerinde modern soyut cam tablolar, 3'lü setler ve mutfak için saatli modeller sık tercih edilir.",
  gungoren: "Güngören ve Merter'deki hazır giyim showroom'larında marka ve koleksiyon görselli büyük cam tablolar, evlerde ise modern ve soyut modeller öne çıkar.",
  kadikoy: "Kadıköy'ün Moda'daki sanatsal dairelerinden Bağdat Caddesi, Suadiye ve Erenköy'ün geniş ve aydınlık evlerine kadar; soyut, minimal ve kişiye özel fotoğraflı cam tablolar en çok aranan modellerdir.",
  kagithane: "Kağıthane'nin yeni rezidans ve ofis projelerinde minimal, siyah-beyaz ve modern cam tablolar; Çağlayan çevresindeki hukuk bürolarında kurumsal ve sade tasarımlar tercih edilir.",
  kartal: "Kartal'ın sahil hattındaki yeni rezidanslarında deniz ve Adalar manzaralı cam tablolar, ofis kulelerindeki büro ve kliniklerde kurumsal tablolar öne çıkar.",
  kucukcekmece: "Küçükçekmece'nin Halkalı, Sefaköy ve Atakent'teki geniş konut projelerinde salon için 3'lü setler ve büyük ölçülü modern cam tablolar sık tercih edilir.",
  maltepe: "Maltepe'nin sahile yakın dairelerinde açık tonlu, deniz temalı cam tablolar; Cevizli ve İdealtepe'deki aile evlerinde kişiye özel fotoğraflı tablolar ilgi görür.",
  pendik: "Pendik'in Kurtköy ve Yenişehir'deki yeni sitelerinde büyük ölçülü modern cam tablolar, marina çevresindeki evlerde deniz ve yelkenli temaları öne çıkar.",
  sancaktepe: "Sancaktepe'nin hızla büyüyen genç sitelerinde uygun ölçülü tek parça cam tablolar, 3'lü setler ve çocuk odası tasarımları çok tercih edilir.",
  sariyer: "Sarıyer'in Zekeriyaköy villaları, İstinye ve Tarabya'nın Boğaz evleri ile Maslak ofislerinde büyük ölçülü, galeri kalitesinde minimal ve Boğaz temalı cam tablolar öne çıkar.",
  silivri: "Silivri'nin yazlık ve sahil evlerinde deniz, kumsal ve gün batımı temalı cam tablolar; nemden etkilenmeyen cam yüzey sahil evleri için ayrıca avantajlıdır.",
  sultanbeyli: "Sultanbeyli'deki aile evlerinde hat sanatı, manzara ve saatli cam tablolar, mobilya mağazalarında ise teşhir amaçlı modern tablolar talep görür.",
  sultangazi: "Sultangazi'nin genç ve kalabalık ailelerinin evlerinde 3'lü set cam tablolar, çocuk odası tasarımları ve mutfak için saatli modeller öne çıkar.",
  sile: "Şile ve Ağva'daki yazlık evler, butik oteller ve pansiyonlarda deniz, deniz feneri ve doğa temalı cam tablolar mekâna tatil havası katar.",
  sisli: "Şişli'de Nişantaşı ve Teşvikiye'nin yüksek tavanlı klasik apartmanlarında sanatsal ve büyük ölçülü cam tablolar, Mecidiyeköy ve Bomonti'nin rezidans ve ofislerinde minimal modern tasarımlar öne çıkar.",
  tuzla: "Tuzla'nın sahil ve marina çevresindeki evlerinde deniz temalı cam tablolar, OSB ve tersane bölgesindeki şirket ofislerinde kurumsal logolu tablolar tercih edilir.",
  umraniye: "Ümraniye'nin Çakmak, Atakent ve Şerifali'deki yeni sitelerinde büyük ölçülü modern cam tablolar, Dudullu'daki işyerlerinde ise kurumsal tablolar talep görür.",
  uskudar: "Üsküdar'ın Kuzguncuk ve Çengelköy'deki tarihi evlerinde Boğaz ve İstanbul temalı cam tablolar, Altunizade'nin rezidans ve ofislerinde modern ve minimal tasarımlar öne çıkar.",
  zeytinburnu: "Zeytinburnu'nun Kazlıçeşme'deki yeni rezidanslarında deniz manzaralı ve modern cam tablolar, deri ve tekstil firmalarının showroom'larında ise marka görselli tablolar tercih edilir.",
};

export type Semt = { name: string; slug: string; ilce: string; note: string };

/** Ayrı sayfası olan semtler: aranma hacmi yüksek, kendine özgü konut dokusu olan bölgeler */
export const semtler: Semt[] = [
  { ilce: "sisli", name: "Nişantaşı", slug: "nisantasi", note: "Nişantaşı'nın yüksek tavanlı, pervazlı klasik apartman dairelerinde büyük ölçülü, sanatsal ve siyah-beyaz fotoğraf baskılı cam tablolar galeri etkisi yaratır. Moda ve tasarım butiklerinin duvarlarında da marka görselli cam tablolar sık kullanılır." },
  { ilce: "sisli", name: "Teşvikiye", slug: "tesvikiye", note: "Teşvikiye'nin köklü apartmanlarında klasik mobilyayla modern sanatı buluşturan soyut ve altın detaylı cam tablolar öne çıkar; klinik ve ofislerde ise sade kurumsal tasarımlar tercih edilir." },
  { ilce: "sisli", name: "Mecidiyeköy", slug: "mecidiyekoy", note: "Mecidiyeköy'ün rezidans daireleri ve plaza ofislerinde minimal, modern ve kurumsal cam tablolar; kompakt stüdyo dairelerde ise dikey 40×60 ve 50×70 ölçüler en çok tercih edilir." },
  { ilce: "sisli", name: "Bomonti", slug: "bomonti", note: "Bomonti'nin yeni rezidanslarında ve kafe-bar mekânlarında endüstriyel, siyah-beyaz şehir fotoğraflı ve soyut cam tablolar mekânın modern çizgisini tamamlar." },
  { ilce: "sisli", name: "Fulya", slug: "fulya", note: "Fulya'nın rezidans ve aile dairelerinde koltuk üstü 3'lü set, soyut ve doğa temalı cam tablolar sık tercih edilir." },
  { ilce: "besiktas", name: "Etiler", slug: "etiler", note: "Etiler'in geniş ve lüks dairelerinde 100 cm ve üzeri büyük ölçülü, minimal ve galeri kalitesinde cam tablolar; restoran ve butiklerde ise mekâna özel tasarımlar öne çıkar." },
  { ilce: "besiktas", name: "Levent", slug: "levent", note: "Levent'in plaza ofisleri, toplantı odaları ve rezidanslarında kurumsal, minimal ve İstanbul silüeti temalı cam tablolar profesyonel bir görünüm sağlar." },
  { ilce: "besiktas", name: "Bebek", slug: "bebek", note: "Bebek'in Boğaz manzaralı evlerinde açık tonlu, deniz ve Boğaz temalı büyük cam tablolar manzarayı içeri taşır; kafe ve restoranlarda da dekoratif cam tablolar sık kullanılır." },
  { ilce: "besiktas", name: "Ortaköy", slug: "ortakoy", note: "Ortaköy'ün tarihi dokusundaki evler ve kafelerde Ortaköy Camii, Boğaz Köprüsü ve İstanbul temalı cam tablolar en çok aranan modellerdendir." },
  { ilce: "kadikoy", name: "Moda", slug: "moda", note: "Moda'nın sanatsal ve bohem dairelerinde soyut, renkli ve illüstrasyon tarzı cam tablolar; kafe ve barlarda ise mekânın kimliğini yansıtan özel tasarımlar öne çıkar." },
  { ilce: "kadikoy", name: "Bağdat Caddesi", slug: "bagdat-caddesi", note: "Bağdat Caddesi çevresindeki geniş ve aydınlık dairelerde büyük ölçülü, açık tonlu ve modern cam tablolar; caddedeki mağaza ve kliniklerde ise marka görselli tablolar tercih edilir." },
  { ilce: "kadikoy", name: "Suadiye", slug: "suadiye", note: "Suadiye'nin sahile yakın ferah dairelerinde deniz temalı, beyaz-bej tonlu ve minimal cam tablolar dekorasyonu tamamlar." },
  { ilce: "kadikoy", name: "Göztepe", slug: "goztepe", note: "Göztepe'nin yenilenen apartman dairelerinde koltuk üstü 3'lü setler, soyut modeller ve kişiye özel aile fotoğraflı cam tablolar sık tercih edilir." },
  { ilce: "kadikoy", name: "Erenköy", slug: "erenkoy", note: "Erenköy'ün geniş aile dairelerinde salon için büyük ölçülü modern cam tablolar, çocuk odaları için eğlenceli tasarımlar ilgi görür." },
  { ilce: "kadikoy", name: "Caddebostan", slug: "caddebostan", note: "Caddebostan'ın sahil hattındaki dairelerinde deniz, Adalar ve gün batımı temalı cam tablolar manzarayla uyum sağlar." },
  { ilce: "kadikoy", name: "Kozyatağı", slug: "kozyatagi", note: "Kozyatağı'nın plaza ofisleri ve yeni rezidanslarında kurumsal ve minimal cam tablolar, aile dairelerinde ise 3'lü setler öne çıkar." },
  { ilce: "kadikoy", name: "Fenerbahçe", slug: "fenerbahce", note: "Fenerbahçe'nin deniz kıyısındaki evlerinde marina, deniz feneri ve deniz temalı cam tablolar; spor tutkunları için de kişiye özel tasarımlar hazırlanır." },
  { ilce: "sariyer", name: "Zekeriyaköy", slug: "zekeriyakoy", note: "Zekeriyaköy'ün villa ve müstakil evlerindeki geniş duvarlarda 120 cm ve üzeri büyük cam tablolar, orman ve doğa temaları öne çıkar." },
  { ilce: "sariyer", name: "İstinye", slug: "istinye", note: "İstinye'nin Boğaz evleri ve rezidanslarında minimal, lüks ve Boğaz temalı cam tablolar mekânın prestijini yansıtır." },
  { ilce: "sariyer", name: "Tarabya", slug: "tarabya", note: "Tarabya'nın Boğaz kıyısındaki evlerinde deniz ve koy manzaralı açık tonlu cam tablolar, restoranlarda dekoratif büyük baskılar tercih edilir." },
  { ilce: "sariyer", name: "Maslak", slug: "maslak", note: "Maslak'ın gökdelen ofisleri ve rezidanslarında kurumsal logolu, minimal ve şehir silüeti temalı cam tablolar profesyonel bir atmosfer kurar." },
  { ilce: "beyoglu", name: "Cihangir", slug: "cihangir", note: "Cihangir'in yüksek tavanlı tarihi dairelerinde sanatsal, vintage ve İstanbul temalı cam tablolar evin karakterini öne çıkarır." },
  { ilce: "beyoglu", name: "Galata", slug: "galata", note: "Galata'nın butik otelleri, kafeleri ve tarihi evlerinde Galata Kulesi ve eski İstanbul temalı cam tablolar hem turistlerin hem mekân sahiplerinin favorisidir." },
  { ilce: "beyoglu", name: "Karaköy", slug: "karakoy", note: "Karaköy'ün tasarım stüdyoları, kafe ve otellerinde endüstriyel, soyut ve siyah-beyaz fotoğraf baskılı cam tablolar mekânın modern dokusuna uyar." },
  { ilce: "bakirkoy", name: "Ataköy", slug: "atakoy", note: "Ataköy'ün geniş sitelerindeki ferah dairelerde koltuk üstü 3'lü setler, deniz ve marina temalı büyük ölçülü cam tablolar tercih edilir." },
  { ilce: "bakirkoy", name: "Yeşilköy", slug: "yesilkoy", note: "Yeşilköy'ün bahçeli ve müstakil evlerinde doğa, deniz ve klasik İstanbul temalı cam tablolar huzurlu bir atmosfer oluşturur." },
  { ilce: "bakirkoy", name: "Florya", slug: "florya", note: "Florya'nın sahile yakın villa ve dairelerinde açık tonlu, deniz temalı ve büyük ölçülü modern cam tablolar öne çıkar." },
  { ilce: "basaksehir", name: "Bahçeşehir", slug: "bahcesehir", note: "Bahçeşehir'in planlı sitelerindeki geniş salonlarda 3'lü ve 5'li set cam tablolar, gölet ve doğa temaları ile modern soyut tasarımlar çok tercih edilir." },
  { ilce: "basaksehir", name: "Kayaşehir", slug: "kayasehir", note: "Kayaşehir'in yeni konut projelerinde taşınma sonrası dekorasyon için uygun ölçülü tek parça ve 3'lü set cam tablolar en çok aranan ürünlerdir." },
  { ilce: "uskudar", name: "Kuzguncuk", slug: "kuzguncuk", note: "Kuzguncuk'un ahşap evlerinde ve kafelerinde Boğaz, eski İstanbul ve illüstrasyon tarzı cam tablolar mahallenin nostaljik havasıyla uyum sağlar." },
  { ilce: "uskudar", name: "Çengelköy", slug: "cengelkoy", note: "Çengelköy'ün Boğaz kıyısındaki evlerinde deniz ve Boğaz manzaralı cam tablolar, kahvaltı mekânlarında ise dekoratif büyük baskılar öne çıkar." },
  { ilce: "uskudar", name: "Altunizade", slug: "altunizade", note: "Altunizade'nin rezidans ve plaza ofislerinde minimal, kurumsal ve şehir silüeti temalı cam tablolar tercih edilir." },
  { ilce: "eyupsultan", name: "Göktürk", slug: "gokturk", note: "Göktürk'ün villa ve sitelerindeki geniş duvarlarda büyük ölçülü, orman ve doğa temalı ya da minimal modern cam tablolar öne çıkar." },
  { ilce: "eyupsultan", name: "Kemerburgaz", slug: "kemerburgaz", note: "Kemerburgaz'ın yeni ve lüks konut projelerinde galeri etkisi veren büyük ölçülü, minimal ve soyut cam tablolar tercih edilir." },
  { ilce: "kucukcekmece", name: "Halkalı", slug: "halkali", note: "Halkalı'nın toplu konut ve site dairelerinde koltuk üstü 3'lü setler, mutfak için saatli ve çocuk odası için eğlenceli cam tablolar sık tercih edilir." },
  { ilce: "kucukcekmece", name: "Sefaköy", slug: "sefakoy", note: "Sefaköy'ün aile dairelerinde modern soyut, manzara ve kişiye özel fotoğraflı cam tablolar; çarşıdaki işyerlerinde ise kurumsal tablolar talep görür." },
  { ilce: "kucukcekmece", name: "Atakent", slug: "atakent", note: "Atakent'in sitelerindeki geniş dairelerde büyük ölçülü modern cam tablolar ve 3'lü setler en çok aranan modellerdir." },
  { ilce: "bahcelievler", name: "Yenibosna", slug: "yenibosna", note: "Yenibosna'nın plaza ofislerinde kurumsal cam tablolar, yeni konutlarında ise modern ve soyut tasarımlar öne çıkar." },
  { ilce: "beylikduzu", name: "Gürpınar", slug: "gurpinar", note: "Gürpınar'ın sahile yakın sitelerinde deniz ve gün batımı temalı cam tablolar, geniş salonlarda büyük ölçülü modern modeller tercih edilir." },
  { ilce: "beylikduzu", name: "Yakuplu", slug: "yakuplu", note: "Yakuplu'nun yeni sitelerindeki dairelerde uygun ölçülü tek parça ve 3'lü set cam tablolar, mutfaklar için saatli modeller sık tercih edilir." },
  { ilce: "maltepe", name: "İdealtepe", slug: "idealtepe", note: "İdealtepe'nin sahile yakın aile dairelerinde deniz temalı, açık tonlu ve kişiye özel fotoğraflı cam tablolar ilgi görür." },
  { ilce: "pendik", name: "Kurtköy", slug: "kurtkoy", note: "Kurtköy'ün yeni sitelerinde modern soyut cam tablolar ve 3'lü setler, lojistik ve teknoloji firmalarının ofislerinde kurumsal tablolar tercih edilir." },
  { ilce: "gungoren", name: "Merter", slug: "merter", note: "Merter'in hazır giyim showroom'larında koleksiyon ve marka görselli büyük cam tablolar vitrin etkisi yaratır; evlerde ise modern tasarımlar öne çıkar." },
  { ilce: "fatih", name: "Balat", slug: "balat", note: "Balat'ın renkli tarihi evlerinde ve kafelerinde eski İstanbul, Haliç ve renkli sokak temalı cam tablolar mahallenin ruhunu yansıtır." },
  { ilce: "atasehir", name: "Barbaros", slug: "barbaros", note: "Ataşehir Barbaros'un rezidans ve finans merkezi ofislerinde minimal, lüks ve kurumsal cam tablolar öne çıkar." },
];

export const getSemt = (ilce: string, slug: string) => semtler.find((s) => s.ilce === ilce && s.slug === slug);
export const semtlerOf = (ilce: string) => semtler.filter((s) => s.ilce === ilce);

/** İlçe listesindeki "sınırı", "bölgesi" gibi anahtar kelime olmayan girdileri ayıklar */
const cleanNeighborhoods = (d: District) => d.neighborhoods.filter((n) => !/sınırı|bölgesi|^Havaalanı$/.test(n));

/** İlçe sayfasında bahsedilecek, ayrı sayfası olmayan semtler */
export const otherNeighborhoods = (d: District) => {
  const withPage = new Set(semtlerOf(d.slug).map((s) => s.name));
  return cleanNeighborhoods(d).filter((n) => !withPage.has(n) && n !== d.name);
};

export const ilceIntro = (d: District) =>
  `${d.name} cam tablo siparişinizi ${nin(d.name)} tüm mahallelerine teslim ediyoruz. Hazır modellerden seçebilir ya da kendi fotoğrafınızla kişiye özel cam tablo yaptırabilirsiniz; ölçü, model ve fiyat için WhatsApp'tan yazmanız yeterli.`;

export const ilceFaq = (d: District) => {
  const semts = [...semtlerOf(d.slug).map((s) => s.name), ...otherNeighborhoods(d)].slice(0, 4).join(", ");
  return [
    { q: `${d.name} cam tablo teslimatı yapıyor musunuz?`, a: `Evet. ${semts} dahil ${nin(d.name)} tüm mahallelerine cam tablo teslimatı yapıyoruz. Teslim süresi seçtiğiniz ölçüye ve kişiye özel tasarım olup olmadığına göre değişir; siparişte net tarihi bildiriyoruz.` },
    { q: `${de(d.name)} hangi cam tablo modelleri tercih ediliyor?`, a: ilceDecorNotes[d.slug] },
  ];
};

export const nearbyDistricts = (d: District, n = 8) =>
  districts.filter((x) => x.side === d.side && x.slug !== d.slug).sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name, "tr")).slice(0, n);
