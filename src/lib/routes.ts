/**
 * Site kabuğunun (header, footer, yüzen butonlar, alt boşluk) gizlendiği
 * tam ekran rotalar. Dijital kartvizit bunlardan biri.
 */
export const BARE_ROUTES = ["/kartvizit"];

/**
 * Tek ürüne odaklı rotalar: ajans menüsü/footer'ı yerine sade başlık ve footer
 * gösterilir ki ziyaretçi diğer hizmetlere dağılmasın.
 */
export const FOCUSED_ROUTES = ["/cam-tablo"];

export const isFocusedRoute = (pathname: string | null | undefined) =>
  !!pathname && FOCUSED_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));

export const isBareRoute = (pathname: string | null | undefined) =>
  !!pathname && BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
