/**
 * Site kabuğunun (header, footer, yüzen butonlar, alt boşluk) gizlendiği
 * tam ekran rotalar. Dijital kartvizit bunlardan biri.
 */
export const BARE_ROUTES = ["/kartvizit"];

export const isBareRoute = (pathname: string | null | undefined) =>
  !!pathname && BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
