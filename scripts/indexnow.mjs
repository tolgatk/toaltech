// IndexNow: site haritasındaki adresleri Bing, Yandex ve IndexNow kullanan diğer arama motorlarına bildirir.
// Kullanım: node scripts/indexnow.mjs            (tüm site haritası)
//           node scripts/indexnow.mjs /a /b      (yalnızca verilen yollar)
const HOST = "toaltech.com";
const KEY = "527ccc8eff79c234215eda39cc471555";
const base = "https://" + HOST;

let urls = process.argv.slice(2).map((p) => base + p);
if (!urls.length) {
  const xml = await (await fetch(base + "/sitemap.xml")).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  // Node'un varsayılan istemci kimliğiyle gelen istekler 403 alıyor; tarayıcı benzeri bir kimlik gerekir
  headers: { "Content-Type": "application/json; charset=utf-8", "User-Agent": "Mozilla/5.0 (compatible; toaltech-indexnow/1.0)" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: base + "/" + KEY + ".txt", urlList: urls }),
});
console.log(urls.length + " adres gönderildi, yanıt: " + res.status + " " + res.statusText);
