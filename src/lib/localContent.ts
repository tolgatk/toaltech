import type { District } from "./districts";
import type { LocalService } from "./localServices";
import { de, deki, nin } from "./tr";

const norm = (s: string) => s.toLocaleLowerCase("tr");

/** İlçe sektörleri ile hizmetin uygun olduğu sektörlerin kesişimi */
export function matchedSectors(s: LocalService, d: District) {
  const hits = d.sectors.filter((sec) => s.fitSectors.some((f) => norm(sec).includes(norm(f)) || norm(f).includes(norm(sec))));
  return hits.length ? hits : d.sectors.slice(0, 3);
}

export function localNote(s: LocalService, d: District) {
  return s.localNote.replaceAll("{ilce_deki}", deki(d.name)).replaceAll("{ilce_nin}", nin(d.name)).replaceAll("{ilce_de}", de(d.name)).replaceAll("{ilce}", d.name);
}

/** İlçeye özel SSS */
export function localFaq(s: LocalService, d: District) {
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
        ? `${d.name}, havalimanı/askeri tesis yakınlığı nedeniyle kısıtlı uçuş bölgeleri içerebilir. Çekim noktasını paylaşırsanız uçuşa uygunluğu ve izin gerekliliğini önceden kontrol edip planı ona göre yapıyoruz.`
        : `${nin(d.name)} büyük bölümünde izin süreci tamamlanarak çekim yapılabilir; Boğaz hattı, kamu binaları ve kalabalık alanlar gibi noktalar için ek izin gerekebilir. Lokasyonu önceden kontrol ediyoruz.`,
    });
  }
  return faqs;
}
