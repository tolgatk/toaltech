import Script from "next/script";

/** Google Ads hesabı ve "WhatsApp ve Telefon Tıklaması" dönüşüm işlemi. */
const ADS_ID = "AW-18481339058";
const CONVERSION = `${ADS_ID}/knDnCPiwjLgdELK1y-xE`;

/**
 * Google etiketini yükler; WhatsApp ve telefon bağlantılarına yapılan
 * tıklamaları Google Ads'e dönüşüm olarak bildirir. `window.open` ile açılan
 * WhatsApp (iletişim formu) için `window.toaltechLead()` çağrılır.
 */
export default function GoogleAdsTag() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ADS_ID}');
window.toaltechLead = function () {
  gtag('event', 'conversion', { send_to: '${CONVERSION}', value: 1.0, currency: 'TRY' });
};
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if (!a) return;
  var h = a.getAttribute('href') || '';
  if (h.indexOf('tel:') === 0 || h.indexOf('wa.me') !== -1 || h.indexOf('whatsapp.com') !== -1) {
    window.toaltechLead();
  }
}, true);
        `}
      </Script>
    </>
  );
}
