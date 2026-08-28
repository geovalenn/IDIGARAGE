import { baseMetadata, siteViewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = baseMetadata;
export const viewport = siteViewport;

export default function DefaultLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
