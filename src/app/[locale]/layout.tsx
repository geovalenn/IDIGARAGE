import { baseMetadata, siteViewport } from "@/lib/metadata";
import { locales } from "@/lib/site";
import "../globals.css";

export const metadata = baseMetadata;
export const viewport = siteViewport;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
