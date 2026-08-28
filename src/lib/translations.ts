import type { Locale } from "./site";

const content = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      projects: "Hasil",
      process: "Proses",
      testimonials: "Testimoni",
      gallery: "Galeri",
      contact: "Kontak",
    },
    common: {
      whatsapp: "Konsultasi WhatsApp",
      sendPhoto: "Kirim Foto Kendaraan",
      maps: "Lihat Lokasi",
      viewDetail: "Lihat detail",
      soon: "Dokumentasi asli segera hadir",
      visualNote: "Visual sementara · akan diganti dokumentasi IDI Garage",
      close: "Tutup",
    },
    hero: {
      eyebrow: "Automotive workshop · Bintaro",
      kicker: "Paint. Polish. Restore.",
      title: "Kembalikan tampilan terbaik kendaraan Anda.",
      description:
        "Cat, body repair, detailing, restorasi, coating dan custom paint dengan pengerjaan profesional di Bintaro.",
      before: "Sebelum",
      after: "Sesudah",
      slider: "Geser untuk melihat perubahan",
    },
    services: {
      eyebrow: "Apa yang kami kerjakan",
      title: "Layanan kami",
      intro:
        "Dari perbaikan panel hingga finishing akhir, setiap pekerjaan ditangani dengan alur yang jelas dan perhatian pada detail.",
      items: [
        ["Cat Mobil", "Pengecatan panel maupun full body dengan persiapan permukaan dan pencocokan warna yang cermat."],
        ["Cat Motor", "Finishing body dan part motor dengan pilihan warna standar maupun personal."],
        ["Body Repair", "Perbaikan penyok, gores, dan kerusakan panel untuk mengembalikan bentuk kendaraan."],
        ["Poles / Detailing", "Koreksi permukaan dan perawatan detail untuk mengangkat kembali kilap kendaraan."],
        ["Restorasi", "Penanganan bertahap untuk kendaraan yang membutuhkan pemulihan tampilan menyeluruh."],
        ["Coating", "Lapisan proteksi untuk membantu menjaga kilap dan memudahkan perawatan permukaan."],
        ["Custom Paint", "Eksplorasi warna dan finishing khusus dengan eksekusi yang tetap presisi."],
      ],
    },
    facts: {
      eyebrow: "Detail menentukan hasil",
      title: "Tahukah Anda?",
      items: [
        ["01", "Color Matching", "Warna kendaraan berubah seiring usia dan paparan lingkungan. Pencocokan dilakukan dari kondisi aktual."],
        ["02", "Paint Booth / Oven", "Lingkungan pengecatan terkontrol membantu finishing lebih konsisten, bersih, dan merata."],
        ["03", "Surface Preparation", "Kerataan dan daya tahan hasil akhir sangat bergantung pada persiapan permukaan."],
        ["04", "Protection", "Finishing dan proteksi yang tepat membantu mempertahankan kilap lebih lama."],
      ],
    },
    comparison: {
      eyebrow: "Bukti ada pada hasil",
      title: "Lihat perbedaannya.",
      intro:
        "Bandingkan kondisi panel sebelum dan setelah proses body repair serta repaint.",
      project: "Body Panel Repair",
      service: "Body Repair + Repaint",
      filters: ["Semua", "Cat", "Body Repair", "Restorasi", "Detailing", "Motor"],
    },
    process: {
      eyebrow: "Tertata dari awal",
      title: "Proses pengerjaan",
      intro:
        "Alur transparan membantu Anda memahami apa yang dikerjakan pada kendaraan dan mengapa.",
      items: [
        ["01", "Konsultasi", "Ceritakan kebutuhan Anda atau kirim foto kondisi kendaraan."],
        ["02", "Inspeksi", "Tim memeriksa kondisi aktual dan area yang perlu ditangani."],
        ["03", "Estimasi", "Anda menerima estimasi pekerjaan, biaya, dan waktu pengerjaan."],
        ["04", "Persiapan", "Kendaraan dan permukaan dipersiapkan sesuai jenis layanan."],
        ["05", "Pengerjaan", "Proses repair, pengecatan, detailing, atau restorasi dilakukan."],
        ["06", "Quality Control", "Detail hasil dan konsistensi finishing diperiksa kembali."],
        ["07", "Serah Terima", "Kendaraan dikembalikan setelah hasil akhir disetujui."],
      ],
    },
    advantages: {
      eyebrow: "Dikerjakan dengan standar",
      title: "Kenapa IDI Garage?",
      items: [
        ["Paint Booth / Oven", "Proses pengecatan yang lebih terkontrol."],
        ["Precision Color Matching", "Warna disesuaikan dengan kondisi aktual kendaraan."],
        ["Experienced Technician", "Penanganan oleh teknisi berpengalaman."],
        ["Professional Equipment", "Peralatan yang sesuai untuk hasil optimal."],
        ["Quality Materials", "Material dipilih berdasarkan kebutuhan pekerjaan."],
        ["Workmanship Warranty", "Garansi pengerjaan mengikuti syarat layanan resmi."],
      ],
      warranty: "Informasi garansi final mengikuti kebijakan resmi IDI Garage.",
    },
    projects: {
      eyebrow: "Craftsmanship dalam fokus",
      title: "Selected works",
      intro: "Ruang untuk hasil pengerjaan asli IDI Garage.",
      items: [
        ["Body & Paint", "Panel restoration", "/images/after-repair.webp"],
        ["Paint Process", "Controlled finishing", "/images/paint-process.webp"],
        ["Paint Correction", "Surface detailing", "/images/detailing.webp"],
      ],
      view: "Lihat proyek",
    },
    gallery: {
      eyebrow: "Di balik hasil akhir",
      title: "Workshop gallery",
      intro: "Proses, presisi, dan finishing dalam satu rangkaian visual.",
    },
    testimonials: {
      eyebrow: "Kepercayaan dibangun dari pengalaman",
      title: "Apa kata mereka",
      emptyTitle: "Cerita pelanggan akan hadir di sini.",
      emptyText:
        "Kami tidak menampilkan testimoni rekaan. Bagian ini siap diisi ulasan pelanggan yang telah disetujui.",
    },
    video: {
      eyebrow: "Lihat proses lebih dekat",
      title: "Behind the work",
      subtitle: "Paint booth · body repair · detailing",
      play: "Putar video proses",
      empty: "Video dokumentasi akan ditambahkan setelah aset resmi tersedia.",
    },
    about: {
      eyebrow: "Tentang kami",
      title: "Craftsmanship, tanpa dibuat rumit.",
      body: "IDI Garage adalah bengkel automotive di Bintaro yang berfokus pada kualitas finishing, presisi pengerjaan, dan pelayanan yang transparan. Kami menangani berbagai kebutuhan kendaraan mulai dari pengecatan, body repair, detailing, restorasi hingga custom paint.",
      signature: "Precision finish · honest process",
    },
    location: {
      eyebrow: "Rencanakan kunjungan Anda",
      title: "Datang ke IDI Garage",
      address: "Alamat",
      hours: "Jam operasional",
      contact: "Kontak",
      waiting: "Informasi sedang menunggu konfirmasi pemilik.",
    },
    finalCta: {
      eyebrow: "Mulai dari satu foto",
      title: "Mobil atau motor Anda butuh sentuhan baru?",
      body: "Kirim foto kondisi kendaraan dan konsultasikan kebutuhan Anda bersama IDI Garage.",
    },
    footer: {
      strap: "Paint · Body Repair · Detailing · Restoration · Coating · Custom Paint",
      rights: "© IDI Garage. Seluruh hak dilindungi.",
    },
    messages: {
      consult: "Halo IDI Garage,\n\nSaya menemukan IDI Garage melalui website dan ingin konsultasi mengenai kendaraan saya.",
      photo: "Halo IDI Garage,\n\nSaya ingin konsultasi mengenai kendaraan saya.\n\nNama:\nKendaraan:\nTahun:\nKeluhan / layanan yang dibutuhkan:\n\nSaya akan mengirimkan foto kondisi kendaraan.",
      missingWhatsapp: "Nomor WhatsApp belum dikonfigurasi.",
      missingMaps: "Tautan Google Maps belum dikonfigurasi.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      process: "Process",
      testimonials: "Testimonials",
      gallery: "Gallery",
      contact: "Contact",
    },
    common: {
      whatsapp: "WhatsApp Consultation",
      sendPhoto: "Send Vehicle Photos",
      maps: "View Location",
      viewDetail: "View detail",
      soon: "Original documentation coming soon",
      visualNote: "Temporary visual · to be replaced with IDI Garage documentation",
      close: "Close",
    },
    hero: {
      eyebrow: "Automotive workshop · Bintaro",
      kicker: "Paint. Polish. Restore.",
      title: "Bring back the best look of your ride.",
      description:
        "Professional painting, body repair, detailing, restoration, coating and custom paint services in Bintaro.",
      before: "Before",
      after: "After",
      slider: "Drag to see the transformation",
    },
    services: {
      eyebrow: "What we do",
      title: "Our services",
      intro:
        "From panel repair to final finishing, every job follows a clear process with close attention to detail.",
      items: [
        ["Car Painting", "Panel or full-body refinishing with careful surface preparation and color matching."],
        ["Motorcycle Painting", "Body and parts finishing in standard or personalized color options."],
        ["Body Repair", "Dent, scratch, and panel damage repair to restore the vehicle's original shape."],
        ["Polish / Detailing", "Surface correction and detailed care that brings back the vehicle's gloss."],
        ["Restoration", "A structured approach for vehicles that need a comprehensive visual recovery."],
        ["Coating", "Protective layers that help preserve gloss and simplify surface maintenance."],
        ["Custom Paint", "Bespoke color and finish exploration, executed with precision."],
      ],
    },
    facts: {
      eyebrow: "Details shape the outcome",
      title: "Did you know?",
      items: [
        ["01", "Color Matching", "Vehicle color changes with age and exposure, so matching starts from its current condition."],
        ["02", "Paint Booth / Oven", "A controlled painting environment supports a cleaner, more consistent finish."],
        ["03", "Surface Preparation", "Final smoothness and durability depend heavily on proper surface preparation."],
        ["04", "Protection", "The right finish and protection can help preserve gloss for longer."],
      ],
    },
    comparison: {
      eyebrow: "The proof is in the finish",
      title: "See the difference.",
      intro: "Compare the panel before and after the body repair and repaint process.",
      project: "Body Panel Repair",
      service: "Body Repair + Repaint",
      filters: ["All", "Paint", "Body Repair", "Restoration", "Detailing", "Motorcycle"],
    },
    process: {
      eyebrow: "Clear from the start",
      title: "Our process",
      intro: "A transparent workflow helps you understand what your vehicle needs and why.",
      items: [
        ["01", "Consultation", "Tell us what you need or send photos of the vehicle's condition."],
        ["02", "Inspection", "Our team inspects the actual condition and affected areas."],
        ["03", "Estimation", "You receive an estimate for scope, cost, and turnaround time."],
        ["04", "Preparation", "The vehicle and surface are prepared for the selected service."],
        ["05", "Execution", "Repair, painting, detailing, or restoration work is completed."],
        ["06", "Quality Control", "Finish consistency and fine details are checked again."],
        ["07", "Delivery", "The vehicle is returned after final approval."],
      ],
    },
    advantages: {
      eyebrow: "Built around standards",
      title: "Why IDI Garage?",
      items: [
        ["Paint Booth / Oven", "A more controlled painting process."],
        ["Precision Color Matching", "Color is matched to the vehicle's current condition."],
        ["Experienced Technician", "Handled by experienced technicians."],
        ["Professional Equipment", "Purpose-fit tools for an optimal result."],
        ["Quality Materials", "Materials selected for the job's requirements."],
        ["Workmanship Warranty", "Workmanship warranty follows official service terms."],
      ],
      warranty: "Final warranty information follows IDI Garage's official policy.",
    },
    projects: {
      eyebrow: "Craftsmanship in focus",
      title: "Selected works",
      intro: "A dedicated space for IDI Garage's original project documentation.",
      items: [
        ["Body & Paint", "Panel restoration", "/images/after-repair.webp"],
        ["Paint Process", "Controlled finishing", "/images/paint-process.webp"],
        ["Paint Correction", "Surface detailing", "/images/detailing.webp"],
      ],
      view: "View project",
    },
    gallery: {
      eyebrow: "Behind the final finish",
      title: "Workshop gallery",
      intro: "Process, precision, and finishing in one visual sequence.",
    },
    testimonials: {
      eyebrow: "Trust grows from experience",
      title: "What our customers say",
      emptyTitle: "Customer stories will live here.",
      emptyText:
        "We do not display fabricated testimonials. This section is ready for approved customer feedback.",
    },
    video: {
      eyebrow: "See the process up close",
      title: "Behind the work",
      subtitle: "Paint booth · body repair · detailing",
      play: "Play process video",
      empty: "Workshop video will be added when official assets are available.",
    },
    about: {
      eyebrow: "About us",
      title: "Craftsmanship, kept simple.",
      body: "IDI Garage is an automotive workshop in Bintaro focused on finishing quality, workmanship precision, and transparent service. We handle automotive painting, body repair, detailing, restoration, coating, and custom paint services.",
      signature: "Precision finish · honest process",
    },
    location: {
      eyebrow: "Plan your visit",
      title: "Visit IDI Garage",
      address: "Address",
      hours: "Opening hours",
      contact: "Contact",
      waiting: "Information is awaiting owner confirmation.",
    },
    finalCta: {
      eyebrow: "Start with one photo",
      title: "Does your ride need a fresh look?",
      body: "Send us photos of your vehicle and let IDI Garage help you find the right treatment.",
    },
    footer: {
      strap: "Paint · Body Repair · Detailing · Restoration · Coating · Custom Paint",
      rights: "© IDI Garage. All rights reserved.",
    },
    messages: {
      consult: "Hello IDI Garage,\n\nI found IDI Garage through the website and would like to discuss my vehicle.",
      photo: "Hello IDI Garage,\n\nI would like to consult about my vehicle.\n\nName:\nVehicle:\nYear:\nIssue / service needed:\n\nI will send photos of the vehicle's condition.",
      missingWhatsapp: "The WhatsApp number has not been configured yet.",
      missingMaps: "The Google Maps link has not been configured yet.",
    },
  },
} as const;

export type SiteContent = (typeof content)[Locale];

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
