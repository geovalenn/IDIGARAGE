import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GarageLanding from "@/components/GarageLanding";
import { locales, type Locale } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "IDI Garage Bintaro | Painting, Body Repair & Restoration",
      description:
        "IDI Garage Bintaro provides professional automotive painting, body repair, detailing, restoration, coating and custom paint services.",
      alternates: { canonical: "/en", languages: { "id-ID": "/id", "en-US": "/en" } },
    };
  }

  return {
    title: "IDI Garage Bintaro | Cat Mobil, Body Repair, Poles & Restorasi",
    alternates: { canonical: "/id", languages: { "id-ID": "/id", "en-US": "/en" } },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <GarageLanding locale={locale as Locale} />;
}
