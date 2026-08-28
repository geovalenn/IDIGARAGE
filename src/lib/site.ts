export type Locale = "id" | "en";

export const locales: Locale[] = ["id", "en"];

const values = {
  brand: process.env.NEXT_PUBLIC_BRAND_NAME || "IDI Garage",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "[IDI_GARAGE_WHATSAPP]",
  phone: process.env.NEXT_PUBLIC_PHONE || "[IDI_GARAGE_PHONE]",
  address: process.env.NEXT_PUBLIC_ADDRESS || "[IDI_GARAGE_ADDRESS]",
  maps: process.env.NEXT_PUBLIC_MAPS || "[IDI_GARAGE_GOOGLE_MAPS_URL]",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "[IDI_GARAGE_INSTAGRAM]",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK || "[IDI_GARAGE_TIKTOK]",
  email: process.env.NEXT_PUBLIC_EMAIL || "[IDI_GARAGE_EMAIL]",
  openingHours:
    process.env.NEXT_PUBLIC_OPENING_HOURS || "[IDI_GARAGE_OPENING_HOURS]",
};

export const siteConfig = values;

export function isPlaceholder(value: string) {
  return /^\[.*\]$/.test(value.trim());
}

export function whatsappUrl(message: string) {
  if (isPlaceholder(siteConfig.whatsapp)) return null;
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function trackEvent(event: string) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event });
}
