// Konten situs Cineva (Multi-bahasa: Indonesia & English)
// Sumber: README.md dan RELEASE.md repositori https://github.com/cineva-stream/Cineva

export type Locale = "id" | "en";

export const REPO_URL = "https://github.com/cineva-stream/Cineva";
export const RELEASES_URL = "https://github.com/cineva-stream/Cineva/releases";
export const ISSUES_URL = "https://github.com/cineva-stream/Cineva/issues";
export const LICENSE_URL = "https://github.com/cineva-stream/Cineva/blob/main/LICENSE";
export const APK_DOWNLOAD_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.1.4/Cineva_v1.1.4-arm64-v8a.apk";
export const EXE_DOWNLOAD_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.1.4/Cineva_setup_v1.1.4.exe";

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

export const stack = [
  "Flutter",
  "Riverpod",
  "GoRouter",
  "media_kit (libmpv)",
  "Dio",
  "Hive",
  "TMDB",
  "OpenSubtitles",
];

export const subtitleLangs = [
  { name: "Indonesia", native: "Bahasa Indonesia", active: true },
  { name: "English", native: "English (US)" },
  { name: "Español", native: "Spanish" },
  { name: "日本語", native: "Japanese" },
  { name: "한국어", native: "Korean" },
];

export type Reason = {
  title: string;
  sub: string;
  src: string;
  badge?: string;
  maintenance?: boolean;
};

const SOURCE_CODE_SNIPPET = `git clone https://github.com/cineva-stream/Cineva.git
cd Cineva
cp .env.example .env
flutter pub get
flutter run`;

export const translations = {
  id: {
    nav: {
      links: [
        { href: "#alasan", label: "Alasan" },
        { href: "#fitur", label: "Fitur" },
        { href: "#tur", label: "Tur" },
          { href: "#multiplatform", label: "Windows" },
        { href: "#pasang", label: "Pasang" },
        { href: "#faq", label: "FAQ" },
      ],
      download: "Unduh",
      downloadApk: "Unduh APK",
      brandAria: "Cineva, ke atas",
      mainNavAria: "Navigasi utama",
      mobileNavAria: "Navigasi menu mobile",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      langAria: "Pilih bahasa",
    },
    archModal: {
      title: "Pilih Versi Arsitektur CPU",
      subtitle: "Unduh varian APK yang dioptimalkan khusus untuk prosesor perangkat Anda agar ukuran lebih kecil dan kinerja lebih cepat.",
      recommendedBadge: "Disarankan untuk Perangkat Anda",
      guideTitle: "Bagaimana cara mengetahui prosesor HP saya?",
      guideDesc: "Hampir seluruh smartphone Android keluaran 2017 ke atas (Samsung, Xiaomi, Oppo, Vivo, Realme, Infinix, Pixel, dll.) menggunakan arsitektur 64-bit (arm64-v8a). Jika Anda ragu, pilih varian Universal.",
      closeAria: "Tutup pilihan arsitektur",
      downloadAction: "Unduh",
      openSelectorBtn: "Pilihan CPU Lain",
      variants: {
        windows: {
          title: "Windows Setup (64-bit)",
          badge: "PC & Laptop",
          desc: "Installer resmi tunggal untuk Windows 10 & 11 (64-bit). Dilengkapi pintasan keyboard & frameless player (28.2 MB).",
        },
        arm64: {
          title: "arm64-v8a (64-bit ARM)",
          badge: "Disarankan (99% HP Modern)",
          desc: "Optimal untuk hampir semua smartphone Android modern (2017 ke atas). Paling hemat kuota (35.5 MB) dan performa maksimal.",
        },
        armv7: {
          title: "armeabi-v7a (32-bit ARM)",
          badge: "HP Lawas / Entry-Level",
          desc: "Untuk smartphone Android jadul (keluaran sebelum 2017) atau perangkat ekonomis berbasis 32-bit (32.4 MB).",
        },
        x86_64: {
          title: "x86_64 (64-bit Intel/AMD)",
          badge: "Emulator PC & Chromebook",
          desc: "Untuk emulator Android di PC/Laptop (BlueStacks, LDPlayer, NoxPlayer) atau Chromebook berbasis prosesor Intel/AMD (40.3 MB).",
        },
        universal: {
          title: "Universal (Semua CPU)",
          badge: "Kompatibilitas Penuh",
          desc: "Menggabungkan semua pustaka prosesor. Ukuran lebih besar (99.2 MB), namun dijamin dapat terpasang di perangkat apapun.",
        },
      },
    },
    hero: {
      line1: "Nonton film & serial TV",
      line2: "tanpa batas.",
      sub: "Cari, putar, dan simpan tontonanmu dalam satu aplikasi Android. Gratis, tanpa iklan, subtitle Indonesia otomatis.",
      downloadBtn: "Unduh untuk Android",
      tourBtn: "Lihat tur",
      perks: ["Gratis & open source", "Android 5.0+", "Tanpa langganan"],
      selectViewAria: "Pilih tampilan",
      showScreenPrefix: "Tampilkan layar",
    },
    heroScreens: [
      { src: "/screens/home.webp", alt: "Beranda Cineva dengan film trending dan Top 10", label: "Beranda" },
      { src: "/screens/search.webp", alt: "Layar pencarian Cineva dengan filter genre", label: "Pencarian" },
      { src: "/screens/watchlist.webp", alt: "Daftar watchlist Cineva", label: "Watchlist" },
    ],
    stats: {
      sectionAria: "Statistik Cineva",
      items: [
        { id: "downloads", label: "Total Unduhan APK" },
        { id: "static", value: "2", label: "Bahasa" },
        { id: "static", value: "25+", label: "Bahasa Subtitle Dapat Diterjemahkan" },
        { id: "static", value: "1080p", label: "Pilih Kualitas" },
        { id: "static", value: "GPL-3.0", label: "Lisensi" },
      ],
    },
    reasons: {
      title1: "Delapan alasan untuk",
      title2: "tekan play.",
      prevAria: "Geser ke kiri",
      nextAria: "Geser ke kanan",
      listAria: "Daftar alasan, geser untuk melihat lainnya",
      items: [
        { title: "Gratis, tanpa iklan", sub: "Tanpa langganan, tanpa paywall", src: "/posters/squid_game.webp", badge: "Gratis" },
        { title: "Streaming P2P cepat", sub: "Multi-server, buffering adaptif", src: "/posters/breaking_bad.webp" },
        { title: "Subtitle Indonesia otomatis", sub: "Diterjemahkan jika belum ada", src: "/posters/spiderman_brand_new_day.webp", badge: "Favorit" },
        { title: "Pemutar sinematik", sub: "Gestur dan kecepatan 0.5x - 2.0x", src: "/posters/house_of_the_dragon.webp" },
        { title: "Konten sesuai selera", sub: "Indonesia, Anime, Hollywood, Korea", src: "/posters/stranger_things.webp" },
        { title: "Pencarian dan filter genre", sub: "Riwayat dan tren langsung muncul", src: "/posters/peaky_blinders.webp" },
        { title: "Profil lokal, tanpa akun", sub: "Tanpa email dan nomor telepon", src: "/posters/chernobyl.webp" },
        { title: "Unduhan offline", sub: "Sedang diperbaiki", src: "/posters/game_of_thrones.webp", badge: "Under Maintenance", maintenance: true },
      ] as Reason[],
    },
    maintenance: {
      badge: "Under Maintenance",
      title: "Unduhan offline sedang diperbaiki.",
      body: "Antrean unduhan akan kembali setelah perbaikan selesai. Sementara itu, streaming online berjalan normal.",
      notice:
        "Fitur Unduhan di dalam aplikasi masih dalam pengembangan (Under Maintenance). Untuk saat ini, nikmati lewat streaming online.",
    },
    bento: {
      title1: "Seluruh tontonanmu,",
      title2: "tertata rapi.",
      lead: "Cineva bukan sekadar katalog. Di sinilah kamu menemukan, menonton, menyimpan, dan kembali ke cerita favoritmu.",
      discover: {
        placeholder: "Cari film, serial TV...",
        kbd: "Instan",
        filterAria: "Filter genre",
        chips: ["Semua Genre", "Action", "Sci-Fi", "Romance", "Horror", "Anime"],
        tag: "Eksplorasi & Filter",
        title: "Temukan tanpa scroll tanpa ujung.",
        desc: "Tren, rating, dan genre dari Indonesia, Anime, Hollywood, Korea, sampai Bollywood. Riwayat pencarian muncul instan.",
      },
      player: {
        tag: "Media Kit Engine",
        title: "Pemutar yang bicara bahasamu.",
        desc: "Subtitle multi-bahasa, kecepatan 0.5x - 2.0x, dan Next Episode otomatis tanpa jeda.",
      },
      maint: {
        ariaLabel: "Unduhan: Under Maintenance",
        statusOnline: "Streaming online berjalan normal",
      },
      watch: {
        savedTag: "Tersimpan",
        tag: "Penyimpanan Lokal",
        title: "Simpan di sini, lanjut di mana saja.",
        desc: "Watchlist tersimpan di ponselmu dan tetap bisa dibuka kapan pun saat offline.",
        rows: [
          { title: "Stranger Things", src: "/posters/stranger_things.webp", meta: "Serial TV" },
          { title: "Spider-Man: Brand New Day", src: "/posters/spiderman_brand_new_day.webp", meta: "Film" },
          { title: "Breaking Bad", src: "/posters/breaking_bad.webp", meta: "Serial TV" },
        ],
      },
      sub: {
        tag: "OpenSubtitles + Auto Translate",
        title: "Subtitle selalu ada.",
        desc: "Tidak ada di database? Diterjemahkan otomatis ke bahasa utamamu.",
        autoTag: "Auto",
      },
      profile: {
        tag: "Privasi Penuh",
        title: "Profil lokal, tanpa akun.",
        desc: "Pilih avatar karakter sinema dan mulai menonton. Tidak ada registrasi, email, atau nomor telepon. Datamu tinggal sepenuhnya di ponselmu.",
        avatarLabel: "Pilih Avatar Karakter",
        avatarStatus: "100% Lokal di Perangkat",
        avatarAlt: "Pilihan avatar sinema di profil Cineva",
        perks: ["Tanpa email", "Tanpa nomor telepon", "Tanpa registrasi"],
      },
    },
    multiplatform: {
      badge: "WINDOWS & ANDROID TV",
      title1: "Hadir di layar lebar,",
      title2: "PC & Smart TV.",
      lead: "Katalog, watchlist, dan pemutar sinematik yang sama, didesain ulang penuh untuk keleluasaan monitor layar lebar PC dan televisi pintar dengan navigasi remote control D-Pad serta kontrol keyboard & mouse yang presisi.",
      screens: [
        {
          src: "/screens/android_tv.webp",
          alt: "Tampilan Cineva di Android TV & Smart TV",
          label: "Android TV (10-Foot UI)",
          desc: "Navigasi remote D-Pad, poster zoom 1.11x, dan efek ambient amber glow.",
        },
        {
          src: "/screens/windows_home.webp",
          alt: "Tampilan Beranda Cineva di Windows Desktop",
          label: "Beranda Layar Lebar",
          desc: "Billboard carousel 490px dengan navigasi rail kiri yang elegan.",
        },
        {
          src: "/screens/windows_details.webp",
          alt: "Tampilan Detail Film Cineva di Windows Desktop",
          label: "Detail Sinematik",
          desc: "Canvas header 480px, poster mengambang, dan grid episode 2-kolom.",
        },
      ],
      features: [
        { title: "Android TV (10-Foot UI)", desc: "Navigasi remote D-Pad, poster zoom 1.11x, dan efek ambient amber glow.", icon: "tv" },
        { title: "Frameless Obsidian UI", desc: "Tampilan borderless minimalis dengan tombol kontrol native.", icon: "windows" },
        { title: "Pintasan Keyboard Penuh", desc: "Spasi untuk jeda, panah untuk seek & volume boost 150%.", icon: "keyboard" },
        { title: "Single-File Installer", desc: "Setup instan berukuran ringan (28.2 MB) siap pasang.", icon: "download" },
      ],
    },
    showcase: {
      title1: "Dari penemuan",
      title2: "sampai play.",
      lead: "Tur singkat lewat layar asli Cineva: Beranda, Pencarian, Watchlist, Subtitle, dan Profil.",
      selectScreenAria: "Pilih layar",
      screens: [
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
      ],
    },
    player: {
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
    },
    marquee: {
      eyebrow: "SATU PENCARIAN. SEMUA PLATFORM.",
      title: "Ketahui tempat menontonnya.",
      subtitle:
        "Filter berdasarkan layanan langgananmu dan cek ketersediaan tayangan favoritmu - semua dalam satu tempat.",
      title1: "Apa pun seleramu,",
      title2: "ada di sini.",
      leadPrefix: "Pilih dari",
      leadSuffix: "lalu saring sesuai genre yang sedang kamu cari.",
      srTech: "Platform streaming yang didukung:",
      categories: ["Indonesia", "Anime", "Hollywood", "Korea", "Bollywood", "Serial TV", "Film"],
    },
    install: {
      title: "Pasang Cineva di Perangkat Anda",
      lead: "Pilih platform perangkat Anda untuk mengunduh paket resmi dan ikuti panduan pemasangan cepat di bawah ini.",
      downloadApk: "Unduh APK",
      allReleases: "Semua Rilis GitHub",
      copyLabel: "Salin",
      copiedLabel: "Tersalin",
      guideTitle: "Panduan Langkah Instalasi",
      platformAndroid: "Android",
      platformAndroidSub: "Ponsel & Tablet",
      platformWindows: "Windows",
      platformWindowsSub: "PC & Laptop (64-bit)",
      androidVariants: {
        tv: { title: "Android TV & Smart TV", note: "Smart TV, TV Box, Mi Stick & Leanback (Super Ringan)" },
        arm64: { title: "ARM64 (64-bit)", note: "Ponsel & tablet Android modern" },
        armv7: { title: "ARMv7 (32-bit)", note: "HP Android lawas / 32-bit" },
        x86: { title: "x86_64", note: "Emulator PC & Chromebook" },
        universal: { title: "Universal", note: "Kompatibel semua jenis prosesor" },
      },
      androidSteps: [
        { step: 1, title: "Unduh Berkas APK", desc: "Pilih dan unduh varian arsitektur di sebelah kiri (disarankan ARM64 untuk ponsel modern)." },
        { step: 2, title: "Buka Berkas Unduhan", desc: "Buka file .apk melalui notifikasi unduhan browser atau dari folder Download di Pengelola File." },
        { step: 3, title: "Izinkan Pemasangan", desc: "Jika muncul peringatan browser, buka Pengaturan lalu aktifkan 'Izinkan dari sumber ini' (Allow from this source)." },
        { step: 4, title: "Pasang & Selesai", desc: "Tekan Pasang (Install), tunggu beberapa detik hingga selesai, lalu buka Cineva untuk mulai streaming." },
      ],
      windowsCard: {
        title: "Cineva Windows Desktop (64-bit)",
        desc: "Instalasi mandiri satu berkas (.exe) untuk PC dan Laptop berbasis Windows 10 & 11.",
        os: "Windows 10 / 11 (64-bit)",
        dlBtn: "Unduh untuk Windows",
      },
      windowsSteps: [
        { step: 1, title: "Unduh Installer", desc: "Klik tombol unduh Cineva_setup.exe di sebelah kiri." },
        { step: 2, title: "Jalankan Setup", desc: "Buka berkas .exe yang telah selesai diunduh dari browser Anda." },
        { step: 3, title: "Konfirmasi Windows SmartScreen", desc: "Jika muncul jendela biru 'Windows protected your PC', klik teks 'More info' lalu pilih tombol 'Run anyway'." },
        { step: 4, title: "Selesai & Buka Cineva", desc: "Pemasangan selesai! Shortcut Cineva otomatis dibuat di Desktop dan Start Menu siap dinikmati." },
      ],
      specLabels: {
        version: "Versi",
        size: "Ukuran",
        os: "Target OS",
        cpu: "Arsitektur",
        pkg: "Berkas",
      },
    },
    faq: {
      title1: "Pertanyaan wajar.",
      title2: "Jawaban lurus.",
      regionAria: "Pertanyaan yang sering diajukan",
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
          a: "Unduh {apkName} dari halaman Releases, izinkan Sumber Tidak Dikenal di pengaturan ponsel, lalu tekan Install. Kamu juga bisa memasangnya lewat ADB.",
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
      contribute: [
        { label: "Beri bintang", href: REPO_URL },
        { label: "Laporkan bug", href: ISSUES_URL },
        { label: "Semua rilis", href: RELEASES_URL },
      ],
    },
    cta: {
      sectionAria: "Unduh Cineva",
      title1: "Cerita seru berikutnya",
      title2: "dimulai di sini.",
      desc: "Gratis, open source, dan siap menemani waktumu kapan saja.",
      downloadBtn: "Unduh untuk Android",
      allReleases: "Semua rilis",
    },
    footer: {
      subtext: "Nonton film dan serial TV favoritmu, gratis dan tanpa iklan.",
      navAria: "Tautan footer",
      colExplore: "Jelajahi",
      colProject: "Proyek",
      licenseLabel: "Lisensi GPL-3.0",
      colLegal: "Legal",
      termsLabel: "Syarat Penggunaan",
      privacyLabel: "Kebijakan Privasi",
      disclaimerLabel: "Disclaimer",
      disclaimer:
        "Cineva tidak menyimpan atau meng-host konten media apa pun. Aplikasi ini hanya antarmuka pencarian dan pemutar untuk jaringan P2P yang tersedia publik. Pengguna bertanggung jawab atas penggunaannya sesuai hukum setempat. Data film menggunakan TMDB API, tetapi tidak didukung atau disertifikasi oleh TMDB.",
      credit: "Dikembangkan oleh Cineva Group.",
    },
  },
  en: {
    nav: {
      links: [
        { href: "#alasan", label: "Reasons" },
        { href: "#fitur", label: "Features" },
        { href: "#tur", label: "Tour" },
          { href: "#multiplatform", label: "Windows" },
        { href: "#pasang", label: "Install" },
        { href: "#faq", label: "FAQ" },
      ],
      download: "Download",
      downloadApk: "Download APK",
      brandAria: "Cineva, back to top",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile menu navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langAria: "Select language",
    },
    archModal: {
      title: "Select CPU Architecture",
      subtitle: "Download the APK variant optimized specifically for your device processor for a smaller download size and faster performance.",
      recommendedBadge: "Recommended for Your Device",
      guideTitle: "How do I know my phone's CPU architecture?",
      guideDesc: "Nearly all Android smartphones released since 2017 (Samsung, Xiaomi, Oppo, Vivo, Realme, Infinix, Pixel, etc.) use 64-bit ARM (arm64-v8a). If in doubt, choose the Universal build.",
      closeAria: "Close architecture options",
      downloadAction: "Download",
      openSelectorBtn: "Choose other CPU",
      variants: {
        windows: {
          title: "Windows Setup (64-bit)",
          badge: "PC & Laptop",
          desc: "Official standalone installer for Windows 10 & 11 (64-bit). Features keyboard controls & frameless player (28.2 MB).",
        },
        arm64: {
          title: "arm64-v8a (64-bit ARM)",
          badge: "Recommended (99% Modern Phones)",
          desc: "Optimized for virtually all modern Android smartphones (2017+). Lightest download size (35.5 MB) and maximum performance.",
        },
        armv7: {
          title: "armeabi-v7a (32-bit ARM)",
          badge: "Older / 32-bit Phones",
          desc: "For older Android phones (released before 2017) or entry-level 32-bit devices (32.4 MB).",
        },
        x86_64: {
          title: "x86_64 (64-bit Intel/AMD)",
          badge: "PC Emulators & Chromebooks",
          desc: "For Android emulators on PC/Laptop (BlueStacks, LDPlayer, NoxPlayer) or Intel/AMD-powered Chromebooks (40.3 MB).",
        },
        universal: {
          title: "Universal (All CPUs)",
          badge: "Full Compatibility",
          desc: "Bundles all CPU libraries in one package. Larger file size (99.2 MB), but guaranteed to work on any device.",
        },
      },
    },
    hero: {
      line1: "Stream movies & TV series",
      line2: "without limits.",
      sub: "Discover, play, and save your favorite shows in one modern Android app. Free, ad-free, with automatic multi-language subtitles.",
      downloadBtn: "Download for Android",
      tourBtn: "Take a tour",
      perks: ["Free & open source", "Android 5.0+", "No subscription"],
      selectViewAria: "Select screen",
      showScreenPrefix: "Show screen",
    },
    heroScreens: [
      { src: "/screens/home.webp", alt: "Cineva home screen with trending movies and Top 10", label: "Home" },
      { src: "/screens/search.webp", alt: "Cineva search screen with genre filters", label: "Search" },
      { src: "/screens/watchlist.webp", alt: "Cineva saved watchlist", label: "Watchlist" },
    ],
    stats: {
      sectionAria: "Cineva Statistics",
      items: [
        { id: "downloads", label: "Total APK Downloads" },
        { id: "static", value: "2", label: "App Languages" },
        { id: "static", value: "25+", label: "Translatable Subtitle Languages" },
        { id: "static", value: "1080p", label: "Quality Options" },
        { id: "static", value: "GPL-3.0", label: "License" },
      ],
    },
    reasons: {
      title1: "Eight reasons to",
      title2: "hit play.",
      prevAria: "Scroll left",
      nextAria: "Scroll right",
      listAria: "Reasons list, scroll to see more",
      items: [
        { title: "100% free, zero ads", sub: "No subscriptions, no paywalls", src: "/posters/squid_game.webp", badge: "Free" },
        { title: "Fast P2P streaming", sub: "Multi-server, adaptive buffering", src: "/posters/breaking_bad.webp" },
        { title: "Auto-translated subtitles", sub: "Translated instantly when missing", src: "/posters/spiderman_brand_new_day.webp", badge: "Favorite" },
        { title: "Cinematic player", sub: "Touch gestures & 0.5x - 2.0x speed", src: "/posters/house_of_the_dragon.webp" },
        { title: "Curated for your taste", sub: "Indonesian, Anime, Hollywood, K-Drama", src: "/posters/stranger_things.webp" },
        { title: "Instant search & filters", sub: "Live search history and daily trends", src: "/posters/peaky_blinders.webp" },
        { title: "Local profile, no account", sub: "No email or phone number required", src: "/posters/chernobyl.webp" },
        { title: "Offline downloads", sub: "Currently being improved", src: "/posters/game_of_thrones.webp", badge: "Under Maintenance", maintenance: true },
      ] as Reason[],
    },
    maintenance: {
      badge: "Under Maintenance",
      title: "Offline downloads are being upgraded.",
      body: "The download queue will return once improvements are complete. Meanwhile, online streaming runs smoothly.",
      notice:
        "The in-app Offline Download feature is currently Under Maintenance. For now, enjoy seamless online streaming.",
    },
    bento: {
      title1: "All your shows,",
      title2: "neatly organized.",
      lead: "Cineva is more than just a catalog. It is where you discover, watch, bookmark, and return to the stories you love.",
      discover: {
        placeholder: "Search movies, TV series...",
        kbd: "Instant",
        filterAria: "Filter genres",
        chips: ["All Genres", "Action", "Sci-Fi", "Romance", "Horror", "Anime"],
        tag: "Explore & Filter",
        title: "Discover without endless scrolling.",
        desc: "Trends, ratings, and genres across Indonesian, Anime, Hollywood, Korean, and Bollywood titles. Search history appears instantly.",
      },
      player: {
        tag: "Media Kit Engine",
        title: "A player that speaks your language.",
        desc: "Multi-language subtitles, 0.5x - 2.0x playback speed, and seamless Auto Next Episode.",
      },
      maint: {
        ariaLabel: "Downloads: Under Maintenance",
        statusOnline: "Online streaming works normally",
      },
      watch: {
        savedTag: "Saved",
        tag: "Local Storage",
        title: "Save here, continue anywhere.",
        desc: "Your Watchlist is stored locally on your device and stays accessible anytime, even offline.",
        rows: [
          { title: "Stranger Things", src: "/posters/stranger_things.webp", meta: "TV Series" },
          { title: "Spider-Man: Brand New Day", src: "/posters/spiderman_brand_new_day.webp", meta: "Movie" },
          { title: "Breaking Bad", src: "/posters/breaking_bad.webp", meta: "TV Series" },
        ],
      },
      sub: {
        tag: "OpenSubtitles + Auto Translate",
        title: "Subtitles are always ready.",
        desc: "Not in the database? Automatically translated into your primary language on the fly.",
        autoTag: "Auto",
      },
      profile: {
        tag: "Full Privacy",
        title: "Local profile, no account needed.",
        desc: "Pick a cinema character avatar and start watching. No sign-ups, emails, or phone numbers. Your data stays 100% on your phone.",
        avatarLabel: "Choose Character Avatar",
        avatarStatus: "100% Local on Device",
        avatarAlt: "Cinema character avatar selection in Cineva profile",
        perks: ["No email", "No phone number", "No registration"],
      },
    },
    multiplatform: {
      badge: "WINDOWS & ANDROID TV",
      title1: "Made for the big screen,",
      title2: "Desktop & Smart TV.",
      lead: "The same cinematic streaming experience, redrawn for the widescreen clarity of desktop monitors and big-screen Smart TVs with 10-foot D-Pad remote navigation and precise keyboard & mouse controls.",
      screens: [
        {
          src: "/screens/android_tv.webp",
          alt: "Cineva on Android TV & Smart TV",
          label: "Android TV (10-Foot UI)",
          desc: "10-foot D-Pad remote navigation, 1.11x poster zoom, and ambient amber glow.",
        },
        {
          src: "/screens/windows_home.webp",
          alt: "Cineva Home on Windows Desktop",
          label: "Widescreen Home",
          desc: "490px billboard carousel with an elegant left navigation rail.",
        },
        {
          src: "/screens/windows_details.webp",
          alt: "Cineva Details on Windows Desktop",
          label: "Cinematic Details",
          desc: "480px canvas header, floating poster, and 2-column episode grid.",
        },
      ],
      features: [
        { title: "Android TV (10-Foot UI)", desc: "10-foot D-Pad remote navigation, 1.11x poster zoom, and ambient amber glow.", icon: "tv" },
        { title: "Frameless Obsidian UI", desc: "Minimal borderless dark window with integrated title controls.", icon: "windows" },
        { title: "Keyboard Shortcuts", desc: "Space for play/pause, arrows for seeking and 150% volume boost.", icon: "keyboard" },
        { title: "Single-File Installer", desc: "Lightweight standalone installer (28.2 MB) ready to run.", icon: "download" },
      ],
    },
    showcase: {
      title1: "From discovery",
      title2: "to play.",
      lead: "A quick tour through real Cineva screens: Home, Search, Watchlist, Subtitles, and Profile.",
      selectScreenAria: "Select screen",
      screens: [
        {
          num: "01",
          tag: "Home",
          title: "A home screen that feels like a world-class streaming service.",
          desc: "Featured blockbusters at the top, trending series, and the daily Top 10—ready to play in a single tap.",
          src: "/screens/home.webp",
          alt: "Cineva home screen with trending movies and Top 10",
        },
        {
          num: "02",
          tag: "Search",
          title: "Find what the world is watching today.",
          desc: "Fast search with genre filters, instant history, and real-time trending titles.",
          src: "/screens/search.webp",
          alt: "Cineva search screen with genre filters",
        },
        {
          num: "03",
          tag: "Watchlist",
          title: "Save your must-watch titles to Watchlist.",
          desc: "Your personal collection stays safely stored on your device's internal storage, even offline.",
          src: "/screens/watchlist.webp",
          alt: "Cineva watchlist screen",
        },
        {
          num: "04",
          tag: "Subtitles",
          title: "Precision subtitles in your preferred language.",
          desc: "Multi-language support with accurate sync, plus automatic translation when native subtitles aren't available.",
          src: "/screens/bahasa.webp",
          alt: "Primary subtitle language selection screen",
        },
        {
          num: "05",
          tag: "Profile",
          title: "Account-free local profile, private to you.",
          desc: "Choose a cinema character avatar without registering an email, phone number, or personal data.",
          src: "/screens/profil.webp",
          alt: "Edit profile screen with cinema avatar choices",
        },
      ],
    },
    player: {
      title: "A player built for your thumbs.",
      lead: "Powered by media_kit (libmpv) with intuitive one-handed controls.",
      src: "/screens/player.webp",
      alt: "Cineva video player streaming a series with automatic subtitles",
      points: [
        { t: "P2P BitTorrent", d: "Fast 7-second pre-buffering" },
        { t: "Adaptive quality", d: "Auto 1080p, 720p, down to data-saving 480p" },
        { t: "Auto subtitles", d: "Missing? Automatically translated to your language" },
        { t: "Touch gestures", d: "Swipe for brightness & volume, double-tap to seek 10s" },
        { t: "Fallback engine", d: "Built-in web player when P2P seeds are low" },
      ],
    },
    marquee: {
      eyebrow: "ONE SEARCH. EVERY SERVICE.",
      title: "Know where it's streaming.",
      subtitle:
        "Filter by the services you already pay for and see availability for your favorite titles - all in one place.",
      title1: "Whatever your taste,",
      title2: "it's right here.",
      leadPrefix: "Choose from",
      leadSuffix: "then filter by the exact genre you're in the mood for.",
      srTech: "Streaming platforms supported:",
      categories: ["Indonesian", "Anime", "Hollywood", "K-Drama", "Bollywood", "TV Series", "Movies"],
    },
    install: {
      title: "Install Cineva on Your Device",
      lead: "Choose your operating system to download the official package and follow the quick setup guide below.",
      downloadApk: "Download APK",
      allReleases: "All GitHub Releases",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      guideTitle: "Step-by-Step Installation Guide",
      platformAndroid: "Android",
      platformAndroidSub: "Phones & Tablets",
      platformWindows: "Windows",
      platformWindowsSub: "PC & Laptop (64-bit)",
      androidVariants: {
        tv: { title: "Android TV & Smart TV", note: "Smart TV, TV Box, Mi Stick & Leanback (Super Ringan)" },
        arm64: { title: "ARM64 (64-bit)", note: "Modern Android phones & tablets" },
        armv7: { title: "ARMv7 (32-bit)", note: "Older 32-bit Android devices" },
        x86: { title: "x86_64", note: "PC Emulators & Chromebooks" },
        universal: { title: "Universal", note: "Compatible with all CPU architectures" },
      },
      androidSteps: [
        { step: 1, title: "Download APK File", desc: "Select and download an architecture variant on the left (ARM64 recommended for modern phones)." },
        { step: 2, title: "Open Downloaded File", desc: "Open the downloaded .apk file via browser notification or your device's File Manager Download folder." },
        { step: 3, title: "Allow Unknown Sources", desc: "If prompted by browser security, open Settings and toggle on 'Allow from this source'." },
        { step: 4, title: "Install & Enjoy", desc: "Tap Install, wait a few seconds, then open Cineva to enjoy ad-free streaming." },
      ],
      windowsCard: {
        title: "Cineva Windows Desktop (64-bit)",
        desc: "Standalone single-file installer (.exe) for PC and Laptop running Windows 10 & 11.",
        os: "Windows 10 / 11 (64-bit)",
        dlBtn: "Download for Windows",
      },
      windowsSteps: [
        { step: 1, title: "Download Installer", desc: "Click the Cineva_setup.exe download button on the left." },
        { step: 2, title: "Run Setup", desc: "Open the downloaded .exe installer file from your browser." },
        { step: 3, title: "Confirm Windows SmartScreen", desc: "If the blue 'Windows protected your PC' window appears, click 'More info' then click 'Run anyway'." },
        { step: 4, title: "Ready to Watch", desc: "Setup complete! A Cineva desktop shortcut is created, ready to launch with mouse & keyboard controls." },
      ],
      specLabels: {
        version: "Version",
        size: "Size",
        os: "Target OS",
        cpu: "Architecture",
        pkg: "Package",
      },
    },
    faq: {
      title1: "Fair questions.",
      title2: "Straight answers.",
      regionAria: "Frequently asked questions",
      items: [
        {
          q: "Is Cineva really free?",
          a: "Yes. Cineva is 100% free, open source under the GPL-3.0 license, with zero ads and no subscriptions.",
        },
        {
          q: "Which devices are supported?",
          a: "Android phones and tablets running Android 5.0 or newer with arm64-v8a, armeabi-v7a, or x86_64 CPUs.",
        },
        {
          q: "How do I install the APK?",
          a: "Download {apkName} from the Releases page, allow Unknown Sources in your phone settings, and tap Install. You can also install it via ADB.",
        },
        {
          q: "Does Cineva host or store movies and TV shows?",
          a: "No. Cineva does not store or host any media content. The app is purely a search interface and media player for publicly available P2P networks.",
        },
        {
          q: "Do I need to create an account?",
          a: "Not at all. Your Profile and Watchlist are saved locally on your phone, requiring no email or phone number.",
        },
        {
          q: "Why is the Offline Download feature Under Maintenance?",
          a: "Offline downloading is currently being refactored and improved. Online streaming works normally. Check the Releases page for upcoming updates.",
        },
        {
          q: "How can I contribute?",
          a: "Visit our GitHub repository to report bugs via Issues or submit a pull request. Every contribution is welcome.",
        },
      ],
      contribute: [
        { label: "Star on GitHub", href: REPO_URL },
        { label: "Report a bug", href: ISSUES_URL },
        { label: "All releases", href: RELEASES_URL },
      ],
    },
    cta: {
      sectionAria: "Download Cineva",
      title1: "Your next great story",
      title2: "starts right here.",
      desc: "Free, open source, and ready to entertain you anytime.",
      downloadBtn: "Download for Android",
      allReleases: "All releases",
    },
    footer: {
      subtext: "Stream your favorite movies and TV series, 100% free and ad-free.",
      navAria: "Footer links",
      colExplore: "Explore",
      colProject: "Project",
      licenseLabel: "GPL-3.0 License",
      colLegal: "Legal",
      termsLabel: "Terms of Use",
      privacyLabel: "Privacy Policy",
      disclaimerLabel: "Disclaimer",
      disclaimer:
        "Cineva does not store or host any media content. The app serves solely as a search interface and media player for publicly available P2P networks. Users are responsible for complying with local laws. Movie metadata is provided by the TMDB API, but Cineva is not endorsed or certified by TMDB.",
      credit: "Developed by Cineva Group.",
    },
  },
};

// Ekspor default (Bahasa Indonesia) untuk kompatibilitas JSON-LD / SSR
export const navLinks = translations.id.nav.links;
export const hero = {
  line1: translations.id.hero.line1,
  line2: translations.id.hero.line2,
  sub: translations.id.hero.sub,
  meta: "v1.1.2 · 35.5 MB",
  perks: translations.id.hero.perks,
};
export const heroScreens = translations.id.heroScreens;
export const stats = translations.id.stats.items;
export const reasons = translations.id.reasons.items;
export const maintenance = translations.id.maintenance;
export const screens = translations.id.showcase.screens;
export const discover = {
  chips: translations.id.bento.discover.chips,
  placeholder: translations.id.bento.discover.placeholder,
};
export const watchlistRows = translations.id.bento.watch.rows;
export const player = translations.id.player;
export const multiplatform = translations.id.multiplatform;
export const categories = translations.id.marquee.categories;
export const install = translations.id.install;
export const specs = [
  { k: "Versi", v: "v1.1.4" },
  { k: "Ukuran", v: "28.2 MB (Windows) / 35.8 MB (Android)" },
  { k: "Target OS", v: "Windows 10/11 (64-bit), Android 5.0+" },
  { k: "CPU", v: "arm64-v8a, armeabi-v7a, x86_64, Universal" },
  { k: "Package", v: "com.primadev.cineva" },
];
export const faq = {
  title1: translations.id.faq.title1,
  title2: translations.id.faq.title2,
  items: translations.id.faq.items.map((item) => ({
    q: item.q,
    a: item.a.replace("{apkName}", "Cineva_v1.0.8.apk"),
  })),
};
export const contribute = translations.id.faq.contribute;
export const disclaimer = translations.id.footer.disclaimer;
export const credit = translations.id.footer.credit;

export interface StreamingPlatform {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

export const platformsRow1: StreamingPlatform[] = [
  { id: "max", name: "Max", logo: "/platforms/hbo_max.png", alt: "HBO Max / Max" },
  { id: "apple_tv", name: "Apple TV+", logo: "/platforms/apple_tv.png", alt: "Apple TV+" },
  { id: "hulu", name: "Hulu", logo: "/platforms/hulu.png", alt: "Hulu" },
  { id: "peacock", name: "Peacock", logo: "/platforms/peacock.png", alt: "Peacock" },
  { id: "paramount", name: "Paramount+", logo: "/platforms/paramount.png", alt: "Paramount+" },
  { id: "youtube", name: "YouTube", logo: "/platforms/youtube.png", alt: "YouTube" },
  { id: "netflix", name: "Netflix", logo: "/platforms/netflix.png", alt: "Netflix" },
  { id: "prime_video", name: "Prime Video", logo: "/platforms/amazon_prime.png", alt: "Amazon Prime Video" },
  { id: "disney_plus", name: "Disney+", logo: "/platforms/disney_plus.png", alt: "Disney+" },
];

export const platformsRow2: StreamingPlatform[] = [
  { id: "disney_plus", name: "Disney+", logo: "/platforms/disney_plus.png", alt: "Disney+" },
  { id: "max", name: "Max", logo: "/platforms/hbo_max.png", alt: "HBO Max / Max" },
  { id: "apple_tv", name: "Apple TV+", logo: "/platforms/apple_tv.png", alt: "Apple TV+" },
  { id: "hulu", name: "Hulu", logo: "/platforms/hulu.png", alt: "Hulu" },
  { id: "peacock", name: "Peacock", logo: "/platforms/peacock.png", alt: "Peacock" },
  { id: "paramount", name: "Paramount+", logo: "/platforms/paramount.png", alt: "Paramount+" },
  { id: "youtube", name: "YouTube", logo: "/platforms/youtube.png", alt: "YouTube" },
  { id: "netflix", name: "Netflix", logo: "/platforms/netflix.png", alt: "Netflix" },
  { id: "prime_video", name: "Prime Video", logo: "/platforms/amazon_prime.png", alt: "Amazon Prime Video" },
];
