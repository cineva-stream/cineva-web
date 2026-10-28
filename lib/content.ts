// Konten diringkas dari README.md dan RELEASE.md repositori
// https://github.com/iamwisnu99/Cineva - ubah teks situs di file ini.

export const REPO_URL = "https://github.com/iamwisnu99/Cineva";
export const RELEASES_URL = "https://github.com/iamwisnu99/Cineva/releases";
export const LICENSE_URL = "https://github.com/iamwisnu99/Cineva/blob/main/LICENSE";
export const APK_DOWNLOAD_URL = "https://github.com/iamwisnu99/Cineva/releases/download/v1.0.3/Cineva_v1.0.3.apk";

export const hero = {
  title: "Nonton Film & Serial TV Favorit Tanpa Batas",
  sub: "Aplikasi streaming & unduhan film dan serial TV modern berbasis Flutter untuk Android.",
  version: "v1.0.0 - Official Public Release",
  badges: [
    { label: "Flutter", value: "3.12+" },
    { label: "Android", value: "5.0+" },
    { label: "Iklan", value: "Nol" },
    { label: "License", value: "MIT" },
  ],
};

export const heroPosters = [
  // Kolom 1 (Bergerak ke Bawah)
  [
    { src: "/posters/squid_game.webp", title: "Squid Game" },
    { src: "/posters/breaking_bad.webp", title: "Breaking Bad" },
    { src: "/posters/house_of_the_dragon.webp", title: "House of the Dragon" },
    { src: "/posters/peaky_blinders.webp", title: "Peaky Blinders" },
  ],
  // Kolom 2 (Bergerak ke Atas)
  [
    { src: "/posters/spiderman_brand_new_day.webp", title: "Spider-Man: Brand New Day" },
    { src: "/posters/stranger_things.webp", title: "Stranger Things" },
    { src: "/posters/chernobyl.webp", title: "Chernobyl" },
    { src: "/posters/game_of_thrones.webp", title: "Game of Thrones" },
  ],
  // Kolom 3 (Bergerak ke Bawah)
  [
    { src: "/posters/peaky_blinders.webp", title: "Peaky Blinders" },
    { src: "/posters/spiderman_brand_new_day.webp", title: "Spider-Man: Brand New Day" },
    { src: "/posters/breaking_bad.webp", title: "Breaking Bad" },
    { src: "/posters/stranger_things.webp", title: "Stranger Things" },
  ],
  // Kolom 4 (Bergerak ke Atas)
  [
    { src: "/posters/house_of_the_dragon.webp", title: "House of the Dragon" },
    { src: "/posters/game_of_thrones.webp", title: "Game of Thrones" },
    { src: "/posters/squid_game.webp", title: "Squid Game" },
    { src: "/posters/chernobyl.webp", title: "Chernobyl" },
  ],
];

export const screens = [
  {
    num: "01",
    tag: "Beranda",
    title: "Beranda yang terasa seperti layanan streaming kelas dunia.",
    desc: "Katalog film unggulan di bagian atas, serial populer, dan deretan Top 10 harian - semuanya siap diputar dalam satu sentuhan.",
    src: "/screens/home.webp",
    alt: "Beranda Cineva dengan film trending dan Top 10",
  },
  {
    num: "02",
    tag: "Pencarian",
    title: "Temukan apa yang sedang ditonton dunia hari ini.",
    desc: "Pencarian cepat dengan filter genre lengkap, riwayat pencarian instan, dan eksplorasi tren terbaru tanpa hambatan.",
    src: "/screens/search.webp",
    alt: "Layar pencarian Cineva dengan filter genre",
  },
  {
    num: "03",
    tag: "Watchlist",
    title: "Simpan tontonan impianmu ke dalam Watchlist pribadi.",
    desc: "Koleksi tontonan tersimpan aman di penyimpanan internal ponselmu, siap diakses kapan pun bahkan saat offline.",
    src: "/screens/watchlist.webp",
    alt: "Daftar watchlist Cineva",
  },
  {
    num: "04",
    tag: "Subtitle",
    title: "Subtitle otomatis dan presisi dalam bahasa pilihanmu.",
    desc: "Kustomisasi subtitle multi-bahasa dengan sinkronisasi waktu akurat serta penerjemah otomatis saat subtitle belum tersedia.",
    src: "/screens/bahasa.webp",
    alt: "Pilihan bahasa subtitle utama",
  },
  {
    num: "05",
    tag: "Profil",
    title: "Profil lokal tanpa akun, privat sepenuhnya untukmu.",
    desc: "Kustomisasi avatar karakter sinema legendaris tanpa butuh registrasi email, nomor telepon, atau data pribadi apa pun.",
    src: "/screens/profil.webp",
    alt: "Layar edit profil dengan pilihan avatar sinema",
  },
];

export const features = [
  { icon: "stream", title: "Streaming cepat", body: "Multi-server dengan buffering adaptif." },
  { icon: "download", title: "Unduhan multi-worker", body: "Jeda, lanjutkan, atau batalkan kapan saja." },
  { icon: "subtitle", title: "Subtitle otomatis", body: "Tidak ada di database? Diterjemahkan otomatis ke bahasa utamamu." },
  { icon: "player", title: "Pemutar sinematik", body: "Gestur, kecepatan 0.5x - 2.0x, Next Episode." },
  { icon: "database", title: "Offline & privat", body: "Profil lokal, tanpa akun email atau nomor telepon." },
  { icon: "filter", title: "Konten sesuai selera", body: "Indonesia, Anime, Hollywood, Korea, Bollywood." },
];

export const player = {
  title: "Pemutar yang paham jempolmu",
  src: "/screens/player.webp",
  alt: "Pemutar Cineva saat menonton serial dengan subtitle Indonesia otomatis",
  points: [
    "P2P BitTorrent, pre-buffering 7 detik",
    "Auto 1080p, 720p, hingga 480p hemat kuota",
    "Subtitle tidak ada? Diterjemahkan otomatis ke bahasa utamamu",
    "Geser untuk kecerahan dan volume, ketuk ganda lompat 10 detik",
    "Backup web player jika seed kurang",
  ],
};

export const stack = ["Flutter", "Riverpod", "GoRouter", "media_kit (libmpv)", "Dio", "Hive", "TMDB", "OpenSubtitles"];

export const install = {
  title: "Pasang Cineva",
  methods: [
    {
      id: "apk",
      tab: "Di Android",
      steps: [
        "Unduh Cineva_v1.0.3.apk dari Releases.",
        "Buka file APK, izinkan Sumber Tidak Dikenal.",
        "Tekan Install, lalu buka Cineva.",
      ],
      code: "",
    },
    {
      id: "adb",
      tab: "Via ADB",
      steps: ["Sambungkan ponsel dengan USB Debugging, lalu jalankan:"],
      code: "adb install -r Cineva_v1.0.3.apk",
    },
    {
      id: "source",
      tab: "Dari source",
      steps: ["Butuh Flutter 3.12+, Dart 3.0+, dan Android SDK API 34."],
      code: `git clone https://github.com/username/cineva.git
cd cineva
cp .env.example .env
flutter pub get
flutter run`,
    },
  ],
  envNote: "Isi .env dengan API key TMDB dan OpenSubtitles.",
};

export const specs = [
  { k: "Versi", v: "1.0.0" },
  { k: "Ukuran APK", v: "~96.9 MB" },
  { k: "Target OS", v: "Android 5.0+" },
  { k: "CPU", v: "arm64-v8a, armeabi-v7a, x86_64" },
  { k: "Package", v: "com.primadev.cineva" },
];

export const notice = "Unduhan offline masih dalam perbaikan. Untuk saat ini, nikmati lewat streaming online.";

export const disclaimer =
  "Cineva tidak menyimpan atau meng-host konten media apa pun. Aplikasi ini hanya antarmuka pencarian dan pemutar untuk jaringan P2P yang tersedia publik. Pengguna bertanggung jawab atas penggunaannya sesuai hukum setempat.";

export const credit = "Dikembangkan oleh Cineva Group.";
