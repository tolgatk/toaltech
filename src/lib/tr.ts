/** Türkçe ünlü uyumuna göre ek üretimi (özel isimler için kesme işaretli). */
const back = "aıouAIOU";
const lastVowel = (w: string) => [...w].reverse().find((c) => "aeıioöuüAEIİOÖUÜ".includes(c)) ?? "e";
const isBack = (w: string) => back.includes(lastVowel(w));
const endsVowel = (w: string) => "aeıioöuüAEIİOÖUÜ".includes(w[w.length - 1]);
const hardCons = "fstkçşhpFSTKÇŞHP";
const endsHard = (w: string) => hardCons.includes(w[w.length - 1]);

/** Kadıköy'de, Tuzla'da, Beşiktaş'ta */
export const de = (w: string) => `${w}'${endsHard(w) ? "t" : "d"}${isBack(w) ? "a" : "e"}`;
/** Kadıköy'deki, Tuzla'daki */
export const deki = (w: string) => `${de(w)}ki`;
/** Kadıköy'ün, Tuzla'nın, Şişli'nin, Beykoz'un */
export const nin = (w: string) => {
  const v = lastVowel(w);
  const suf = "aı".includes(v) ? "ın" : "ei".includes(v) ? "in" : "ou".includes(v) ? "un" : "ün";
  return `${w}'${endsVowel(w) ? "n" : ""}${suf}`;
};
/** Tuzla'ya, Kadıköy'e */
export const e = (w: string) => `${w}'${endsVowel(w) ? "y" : ""}${isBack(w) ? "a" : "e"}`;
