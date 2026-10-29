// Konten situs Cineva - ubah teks situs di file ini.
// Sumber: README.md dan RELEASE.md repositori https://github.com/cineva-stream/Cineva

export const REPO_URL = "https://github.com/cineva-stream/Cineva";
export const RELEASES_URL = "https://github.com/cineva-stream/Cineva/releases";
export const ISSUES_URL = "https://github.com/cineva-stream/Cineva/issues";
export const LICENSE_URL = "https://github.com/cineva-stream/Cineva/blob/main/LICENSE";
export const APK_DOWNLOAD_URL = "https://github.com/cineva-stream/Cineva/releases/download/v1.0.8/Cineva_v1.0.8.apk";

export const navLinks = [
  { href: "#alasan", label: "Alasan" },
  { href: "#fitur", label: "Fitur" },
  { href: "#tur", label: "Tur" },
  { href: "#pasang", label: "Pasang" },
  { href: "#faq", label: "FAQ" },
];

export const hero = {
  line1: "Nonton film & serial TV",
  line2: "tanpa batas.",
  sub: "Cari, putar, dan simpan tontonanmu dalam satu aplikasi Android. Gratis, tanpa iklan, subtitle Indonesia otomatis.",
  meta: "v1.0.8 · ~98 MB",
  perks: ["Gratis & open source", "Android 5.0+", "Tanpa langganan"],
};

export const heroScreens = [
  { src: "/screens/home.webp", alt: "Beranda Cineva dengan film trending dan Top 10", label: "Beranda" },
  { src: "/screens/search.webp", alt: "Layar pencarian Cineva dengan filter genre", label: "Pencarian" },
  { src: "/screens/watchlist.webp", alt: "Daftar watchlist Cineva", label: "Watchlist" },
];

export const posterWall = [
  "/posters/squid_game.webp",
  "/posters/breaking_bad.webp",
  "/posters/house_of_the_dragon.webp",
  "/posters/peaky_blinders.webp",
  "/posters/stranger_things.webp",
  "/posters/chernobyl.webp",
  "/posters/game_of_thrones.webp",
  "/posters/spiderman_brand_new_day.webp",
];

export const stats = [
  { id: "downloads", label: "Total Unduhan APK" },
  { id: "static", value: "2", label: "Bahasa" },
  { id: "static", value: "25+", label: "Bahasa Subtitle Dapat Diterjemahkan" },
  { id: "static", value: "1080p", label: "Pilih Kualitas" },
  { id: "static", value: "GPL-3.0", label: "Lisensi" },
];

export type Reason = {
  title: string;
  sub: string;
  src: string;
  badge?: string;
  maintenance?: boolean;
};

export const reasons: Reason[] = [
  { title: "Gratis, tanpa iklan", sub: "Tanpa langganan, tanpa paywall", src: "/posters/squid_game.webp", badge: "Gratis" },
  { title: "Streaming P2P cepat", sub: "Multi-server, buffering adaptif", src: "/posters/breaking_bad.webp" },
  { title: "Subtitle Indonesia otomatis", sub: "Diterjemahkan jika belum ada", src: "/posters/spiderman_brand_new_day.webp", badge: "Favorit" },
  { title: "Pemutar sinematik", sub: "Gestur dan kecepatan 0.5x - 2.0x", src: "/posters/house_of_the_dragon.webp" },
  { title: "Konten sesuai selera", sub: "Indonesia, Anime, Hollywood, Korea", src: "/posters/stranger_things.webp" },
  { title: "Pencarian dan filter genre", sub: "Riwayat dan tren langsung muncul", src: "/posters/peaky_blinders.webp" },
  { title: "Profil lokal, tanpa akun", sub: "Tanpa email dan nomor telepon", src: "/posters/chernobyl.webp" },
  { title: "Unduhan offline", sub: "Sedang diperbaiki", src: "/posters/game_of_thrones.webp", badge: "Under Maintenance", maintenance: true },
];

export const maintenance = {
  badge: "Under Maintenance",
  title: "Unduhan offline sedang diperbaiki.",
  body: "Antrean unduhan akan kembali setelah perbaikan selesai. Sementara itu, streaming online berjalan normal.",
  notice: "Fitur Unduhan di dalam aplikasi masih dalam pengembangan (Under Maintenance). Untuk saat ini, nikmati lewat streaming online.",
};

export const screens = [
  {
    num: "01",
    tag: "Beranda",
    title: "Beranda yang terasa seperti layanan streaming kelas dunia.",
    desc: "Film unggulan di bagian atas, serial populer, dan Top 10 harian, siap diputar dalam satu sentuhan.",
    src: "/screens/home.webp",
    alt: "Beranda Cineva dengan film trending dan Top 10",
  },
  {
    num: "02",
    tag: "Pencarian",
    title: "Temukan apa yang sedang ditonton dunia hari ini.",
    desc: "Pencarian cepat dengan filter genre, riwayat instan, dan tren terbaru.",
    src: "/screens/search.webp",
    alt: "Layar pencarian Cineva dengan filter genre",
  },
  {
    num: "03",
    tag: "Watchlist",
    title: "Simpan tontonan impianmu ke Watchlist.",
    desc: "Koleksimu tersimpan aman di penyimpanan internal ponsel, bahkan saat offline.",
    src: "/screens/watchlist.webp",
    alt: "Daftar watchlist Cineva",
  },
  {
    num: "04",
    tag: "Subtitle",
    title: "Subtitle presisi dalam bahasa pilihanmu.",
    desc: "Multi-bahasa dengan sinkronisasi akurat, plus terjemahan otomatis saat subtitle belum tersedia.",
    src: "/screens/bahasa.webp",
    alt: "Pilihan bahasa subtitle utama",
  },
  {
    num: "05",
    tag: "Profil",
    title: "Profil lokal tanpa akun, privat untukmu.",
    desc: "Pilih avatar karakter sinema tanpa registrasi email, nomor telepon, atau data pribadi.",
    src: "/screens/profil.webp",
    alt: "Layar edit profil dengan pilihan avatar sinema",
  },
];

export const discover = {
  chips: ["Semua Genre", "Action", "Sci-Fi", "Romance", "Horror", "Anime"],
  placeholder: "Cari film, serial TV...",
};

export const subtitleLangs = [
  { name: "Indonesia", native: "Bahasa Indonesia", active: true },
  { name: "English", native: "English (US)" },
  { name: "Español", native: "Spanish" },
  { name: "日本語", native: "Japanese" },
  { name: "한국어", native: "Korean" },
];

export const watchlistRows = [
  { title: "Stranger Things", src: "/posters/stranger_things.webp", meta: "Serial TV" },
  { title: "Spider-Man: Brand New Day", src: "/posters/spiderman_brand_new_day.webp", meta: "Film" },
  { title: "Breaking Bad", src: "/posters/breaking_bad.webp", meta: "Serial TV" },
];

export const player = {
  title: "Pemutar yang paham jempolmu.",
  lead: "Dibangun di atas media_kit (libmpv) dengan kontrol yang terjangkau satu tangan.",
  src: "/screens/player.webp",
  alt: "Pemutar Cineva saat menonton serial dengan subtitle Indonesia otomatis",
  points: [
    { t: "P2P BitTorrent", d: "Pre-buffering 7 detik" },
    { t: "Kualitas adaptif", d: "Auto 1080p, 720p, hingga 480p hemat kuota" },
    { t: "Subtitle otomatis", d: "Tidak ada? Diterjemahkan ke bahasa utamamu" },
    { t: "Gestur", d: "Geser untuk kecerahan dan volume, ketuk ganda lompat 10 detik" },
    { t: "Cadangan", d: "Web player jika seed kurang" },
  ],
};

export const categories = ["Indonesia", "Anime", "Hollywood", "Korea", "Bollywood", "Serial TV", "Film"];

export const stack = ["Flutter", "Riverpod", "GoRouter", "media_kit (libmpv)", "Dio", "Hive", "TMDB", "OpenSubtitles"];

export const install = {
  title: "Pasang Cineva dalam hitungan menit.",
  lead: "Pilih cara yang paling nyaman. Semua berasal dari rilis resmi di GitHub.",
  methods: [
    {
      id: "apk",
      tab: "Di Android",
      steps: [
        "Unduh Cineva_v1.0.8.apk dari Releases.",
        "Buka file APK, izinkan Sumber Tidak Dikenal.",
        "Tekan Install, lalu buka Cineva.",
      ],
      code: "",
    },
    {
      id: "adb",
      tab: "Via ADB",
      steps: ["Sambungkan ponsel dengan USB Debugging, lalu jalankan:"],
      code: "adb install -r Cineva_v1.0.8.apk",
    },
    {
      id: "source",
      tab: "Dari source",
      steps: ["Butuh Flutter 3.12+, Dart 3.0+, dan Android SDK API 34."],
      code: `git clone https://github.com/cineva-stream/Cineva.git
cd Cineva
cp .env.example .env
flutter pub get
flutter run`,
    },
  ],
  envNote: "Isi .env dengan API key TMDB dan OpenSubtitles.",
};

export const specs = [
  { k: "Versi", v: "v1.0.8" },
  { k: "Ukuran APK", v: "~98 MB" },
  { k: "Target OS", v: "Android 5.0+" },
  { k: "CPU", v: "arm64-v8a, armeabi-v7a, x86_64" },
  { k: "Package", v: "com.primadev.cineva" },
];

export const faq = {
  title1: "Pertanyaan wajar.",
  title2: "Jawaban lurus.",
  items: [
    {
      q: "Apakah Cineva benar-benar gratis?",
      a: "Ya. Cineva gratis, open source di bawah lisensi GPL-3.0, tanpa iklan, dan tanpa langganan.",
    },
    {
      q: "Perangkat apa yang didukung?",
      a: "Ponsel dan tablet Android 5.0 ke atas dengan CPU arm64-v8a, armeabi-v7a, atau x86_64.",
    },
    {
      q: "Bagaimana cara memasang APK-nya?",
      a: "Unduh Cineva_v1.0.8.apk dari halaman Releases, izinkan Sumber Tidak Dikenal di pengaturan ponsel, lalu tekan Install. Kamu juga bisa memasangnya lewat ADB.",
    },
    {
      q: "Apakah Cineva menyimpan film atau serial?",
      a: "Tidak. Cineva tidak menyimpan atau meng-host konten media apa pun. Aplikasi ini hanya antarmuka pencarian dan pemutar untuk jaringan P2P yang tersedia publik.",
    },
    {
      q: "Perlu membuat akun?",
      a: "Tidak perlu. Profil dan Watchlist tersimpan di ponselmu, tanpa email atau nomor telepon.",
    },
    {
      q: "Kenapa fitur Unduhan berstatus Under Maintenance?",
      a: "Unduhan offline sedang diperbaiki dan masih dalam pengembangan. Streaming online tetap berjalan normal. Pantau halaman Releases untuk kabar terbarunya.",
    },
    {
      q: "Bagaimana cara berkontribusi?",
      a: "Buka repositori di GitHub, lalu laporkan bug lewat Issues atau kirim pull request. Bantuan apa pun diterima.",
    },
  ],
};

export const contribute = [
  { label: "Beri bintang", href: REPO_URL },
  { label: "Laporkan bug", href: ISSUES_URL },
  { label: "Semua rilis", href: RELEASES_URL },
];

export const disclaimer =
  "Cineva tidak menyimpan atau meng-host konten media apa pun. Aplikasi ini hanya antarmuka pencarian dan pemutar untuk jaringan P2P yang tersedia publik. Pengguna bertanggung jawab atas penggunaannya sesuai hukum setempat. Data film menggunakan TMDB API, tetapi tidak didukung atau disertifikasi oleh TMDB.";

export const credit = "Dikembangkan oleh Cineva Group.";
