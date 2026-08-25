import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni", description: "ToalTech kişisel verilerin korunması ve işlenmesi hakkında aydınlatma metni.", alternates: { canonical: "/kvkk-aydinlatma-metni" }, robots: { index: false, follow: true } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="KVKK Aydınlatma Metni" desc="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme." />
      <Container className="max-w-3xl space-y-4 py-12 text-slate-700 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy">
        <h2>Veri Sorumlusu</h2>
        <p>{site.name} (&quot;Şirket&quot;) — İstanbul. E-posta: {site.email}, Telefon: {site.phoneDisplay}. <em>[Ticari unvan, adres ve MERSİS numarası eklenecek.]</em></p>
        <h2>İşlenen Kişisel Veriler ve Amaçlar</h2>
        <p>İletişim formu, WhatsApp veya telefon üzerinden paylaştığınız ad-soyad, telefon numarası, e-posta adresi ve mesaj içeriği; talebinizin değerlendirilmesi, teklif hazırlanması ve sizinle iletişime geçilmesi amacıyla işlenir.</p>
        <h2>Hukuki Sebep</h2>
        <p>Kişisel verileriniz KVKK m.5/2 (c) &quot;bir sözleşmenin kurulması veya ifası&quot; ve (f) &quot;meşru menfaat&quot; hukuki sebeplerine dayanılarak işlenir.</p>
        <h2>Aktarım</h2>
        <p>Verileriniz, hizmetin sunulması için zorunlu olan altyapı sağlayıcıları (e-posta, barındırma, mesajlaşma servisleri) dışında üçüncü kişilerle paylaşılmaz.</p>
        <h2>Saklama Süresi</h2>
        <p>Talebinizle ilgili veriler, iletişim amacının sona ermesinden itibaren en fazla 2 yıl saklanır; yasal yükümlülükler saklıdır.</p>
        <h2>Haklarınız</h2>
        <p>KVKK m.11 kapsamında verilerinize erişme, düzeltilmesini veya silinmesini isteme haklarınızı {site.email} adresine yazarak kullanabilirsiniz.</p>
      </Container>
    </>
  );
}
