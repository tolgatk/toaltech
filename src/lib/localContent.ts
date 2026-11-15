import type { District } from "./districts";
import type { LocalService } from "./localServices";
import type { ServiceContent } from "./serviceContent";
import { de, deki, nin } from "./tr";

const norm = (s: string) => s.toLocaleLowerCase("tr");

/** İlçe sektörleri ile hizmetin uygun olduğu sektörlerin kesişimi */
export function matchedSectors(s: LocalService, d: District) {
  const hits = d.sectors.filter((sec) => s.fitSectors.some((f) => norm(sec).includes(norm(f)) || norm(f).includes(norm(sec))));
  return hits.length ? hits : d.sectors.slice(0, 3);
}

export function localNote(s: LocalService, d: District) {
  return (d.kind === "venue" && s.venueNote ? s.venueNote : s.localNote).replaceAll("{ilce_deki}", deki(d.name)).replaceAll("{ilce_nin}", nin(d.name)).replaceAll("{ilce_de}", de(d.name)).replaceAll("{ilce}", d.name);
}

/** İlçeye özel SSS */
export function localFaq(s: LocalService, d: District) {
  if (d.kind === "venue") return venueFaq(s, d);
  const secs = matchedSectors(s, d);
  const list = secs.slice(0, 3).join(", ");
  const faqs = [
    {
      q: `${de(d.name)} yerinde hizmet veriyor musunuz?`,
      a: `Evet. ${d.name} (${d.neighborhoods.slice(0, 3).join(", ")} dahil) ve İstanbul ${d.side} Yakası genelinde işletmenize gelerek toplantı ve çekim yapabiliyoruz; süreç WhatsApp ve online araçlarla devam eder.`,
    },
    {
      q: `${de(d.name)} hangi sektörlerle çalışıyorsunuz?`,
      a: `${de(d.name)} ağırlıklı olarak ${list} alanındaki işletmelerle çalışıyoruz; ${s.keyword} ihtiyacı olan her ölçekten işletmeye teklif veriyoruz.`,
    },
  ];
  if (s.slug === "drone-cekimi") {
    const risky = ["arnavutkoy", "pendik", "bakirkoy", "kucukcekmece", "bahcelievler", "tuzla"].includes(d.slug);
    faqs.push({
      q: `${de(d.name)} drone uçuşu serbest mi?`,
      a: risky
        ? `${d.name}, havalimanı/askeri tesis yakınlığı nedeniyle kısıtlı uçuş bölgeleri içerebilir. Çekim noktasını paylaşırsanız uygunluğa önceden bakıp planı ona göre yapıyoruz.`
        : `${nin(d.name)} birçok noktasında çekim planlanabilir; Boğaz hattı, kamu binaları ve kalabalık alanlar gibi yerlerde izin gerekebilir. Lokasyona çekimden önce birlikte bakıyoruz.`,
    });
  }
  return faqs;
}

/**
 * Kullanım alanlarını ilçenin sektörlerine göre sıralar: ilçeyle en ilgili dört alan öne gelir.
 * Böylece her ilçe sayfası aynı listeyi değil, kendi iş dokusuna uyanları gösterir.
 */
export function localUseCases(c: ServiceContent, d: District) {
  const words = d.sectors.flatMap((x) => norm(x).split(/[\s&,]+/)).filter((w) => w.length > 3);
  const scored = c.useCases.map((u, i) => {
    const text = norm(`${u.title} ${u.text}`);
    return { u, i, score: words.filter((w) => text.includes(w.slice(0, 5))).length };
  });
  return scored.sort((a, b) => b.score - a.score || a.i - b.i).slice(0, 4).map((x) => x.u);
}

/** Fuar alanı sayfalarına özel SSS */
function venueFaq(s: LocalService, d: District) {
  const full = d.fullName ?? d.name;
  const faqs = [
    {
      q: `${de(d.name)} fuar sırasında çekim yapıyor musunuz?`,
      a: `Evet. ${full} içinde standınızda kurulum gününde ya da fuar günlerinde çekim yapıyoruz. Hangi gün ve saatte çekileceğini, kimlerle röportaj yapılacağını ve hangi ürünlerin gösterileceğini fuardan önce birlikte planlıyoruz.`,
    },
    {
      q: `Fuar alanında çekim için izin gerekir mi?`,
      a: `Katılımcı firmalar kendi stantlarında çekim yaptırabilir. Ekibimizin alana girişi için katılımcı ya da servis yaka kartı gerekir; bunu fuar öncesinde organizatörden sizin talep etmeniz gerekir. Stant dışındaki ortak alanlarda çekim kuralları fuar organizatörüne göre değiştiği için önceden sormanızı öneririz.`,
    },
    {
      q: `Videoyu fuar bitmeden alabilir miyim?`,
      a: `Fuar sürerken sosyal medyada paylaşılacak kısa videolar için hızlı teslim planlanabilir; bunun mümkün olup olmadığını ve teslim saatini çekimden önce netleştiriyoruz. Kurgulu özet film fuardan sonra teslim edilir.`,
    },
  ];
  if (s.slug === "drone-cekimi") {
    faqs.push({
      q: `${de(d.name)} drone uçurulabilir mi?`,
      a: `Salon içinde uçuş fuar organizatörünün iznine bağlıdır ve ziyaretçi varken yapılmaz; küçük FPV drone ile kurulum gününde ya da ziyaret saatleri dışında planlanır. Dış alanda uçuş için noktanın güncel uçuş durumuna çekimden önce bakıyoruz; izin gereken durumda süreci size önceden bildiriyoruz.`,
    });
  }
  return faqs;
}
