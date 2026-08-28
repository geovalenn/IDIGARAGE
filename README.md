# IDI Garage Landing Page

Landing page bilingual untuk IDI Garage, dibuat dengan Next.js dan pendekatan static-first agar dapat diekspor ke hosting statis.

## Menjalankan proyek

```bash
npm install
npm run optimize:images
npm run dev
```

Buka `http://localhost:3000/id` atau `http://localhost:3000/en`.

## Production build

```bash
npm run build
```

Hasil static export tersedia di folder `out/` dan dapat diunggah ke Hostinger.

## Data bisnis

Salin `.env.example` menjadi `.env.local`, lalu ganti semua nilai placeholder. CTA WhatsApp dan Maps sengaja tidak membuka tautan eksternal sampai data tersebut dikonfigurasi.

## Asset

Visual workshop saat ini adalah visual sementara yang dibuat untuk membangun dan menguji layout. Ganti file di `public/images/` dengan dokumentasi asli IDI Garage sebelum website dipublikasikan. Pertahankan nama file atau perbarui referensinya di `src/lib/translations.ts` dan `src/components/GarageLanding.tsx`.
