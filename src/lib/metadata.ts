import type { Metadata, Viewport } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://idi-garage.example";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IDI Garage Bintaro | Cat Mobil, Body Repair, Poles & Restorasi",
    template: "%s | IDI Garage",
  },
  description:
    "IDI Garage Bintaro melayani cat mobil dan motor, body repair, poles, detailing, restorasi, coating dan custom paint dengan pengerjaan profesional.",
  keywords: [
    "bengkel cat mobil Bintaro",
    "body repair Bintaro",
    "detailing mobil Bintaro",
    "restorasi mobil Bintaro",
    "custom paint Bintaro",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "IDI Garage",
    title: "IDI Garage — Paint · Polish · Restore",
    description:
      "Premium automotive workshop dengan hasil rapi, presisi, dan tetap approachable di Bintaro.",
    images: [
      {
        url: "/images/after-repair.webp",
        width: 1200,
        height: 630,
        alt: "IDI Garage Bintaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IDI Garage Bintaro",
    description: "Paint · Body Repair · Detailing · Restoration",
    images: ["/images/after-repair.webp"],
  },
  icons: {
    icon: "/images/idi-garage-logo.webp",
    apple: "/images/idi-garage-logo.webp",
  },
  robots: { index: true, follow: true },
};

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090909",
};
