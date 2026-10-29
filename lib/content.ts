// Konten situs Cineva (Multi-bahasa: Indonesia & English)
// Sumber: README.md dan RELEASE.md repositori https://github.com/cineva-stream/Cineva

export type Locale = "id" | "en";

export const REPO_URL = "https://github.com/cineva-stream/Cineva";
export const RELEASES_URL = "https://github.com/cineva-stream/Cineva/releases";
export const ISSUES_URL = "https://github.com/cineva-stream/Cineva/issues";
export const LICENSE_URL = "https://github.com/cineva-stream/Cineva/blob/main/LICENSE";
export const APK_DOWNLOAD_URL =
  "https://github.com/cineva-stream/Cineva/releases/download/v1.0.8/Cineva_v1.0.8.apk";

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
      title1: "Apa pun seleramu,",
      title2: "ada di sini.",
      leadPrefix: "Pilih dari",
      leadSuffix: "lalu saring sesuai genre yang sedang kamu cari.",
      srTech: "Teknologi yang dipakai:",
      categories: ["Indonesia", "Anime", "Hollywood", "Korea", "Bollywood", "Serial TV", "Film"],
    },
    install: {
      title: "Pasang Cineva dalam hitungan menit.",
      lead: "Pilih cara yang paling nyaman. Semua berasal dari rilis resmi di GitHub.",
      downloadApk: "Unduh APK",
      allReleases: "Semua rilis",
      groupAria: "Cara memasang Cineva",
      tablistAria: "Metode instalasi",
      copyLabel: "Salin",
      copiedLabel: "Tersalin",
      apkStep1Prefix: "Unduh",
      apkStep1Middle: "dari",
      specLabels: {
        version: "Versi",
        size: "Ukuran APK",
        os: "Target OS",
        cpu: "CPU",
        pkg: "Package",
      },
      methods: [
        {
          id: "apk",
          tab: "Di Android",
          steps: [
            "Unduh APK dari Releases.",
            "Buka file APK, izinkan Sumber Tidak Dikenal.",
            "Tekan Install, lalu buka Cineva.",
          ],
          code: "",
        },
        {
          id: "adb",
          tab: "Via ADB",
          steps: ["Sambungkan ponsel dengan USB Debugging, lalu jalankan:"],
          code: "adb install -r",
        },
        {
          id: "source",
          tab: "Dari source",
          steps: ["Butuh Flutter 3.12+, Dart 3.0+, dan Android SDK API 34."],
          code: SOURCE_CODE_SNIPPET,
        },
      ],
      envNote: "Isi .env dengan API key TMDB dan OpenSubtitles.",
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
      title1: "Whatever your taste,",
      title2: "it's right here.",
      leadPrefix: "Choose from",
      leadSuffix: "then filter by the exact genre you're in the mood for.",
      srTech: "Powered by:",
      categories: ["Indonesian", "Anime", "Hollywood", "K-Drama", "Bollywood", "TV Series", "Movies"],
    },
    install: {
      title: "Install Cineva in minutes.",
      lead: "Pick the method that suits you best. Every release comes directly from our official GitHub.",
      downloadApk: "Download APK",
      allReleases: "All releases",
      groupAria: "How to install Cineva",
      tablistAria: "Installation methods",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      apkStep1Prefix: "Download",
      apkStep1Middle: "from",
      specLabels: {
        version: "Version",
        size: "APK Size",
        os: "Target OS",
        cpu: "CPU",
        pkg: "Package",
      },
      methods: [
        {
          id: "apk",
          tab: "On Android",
          steps: [
            "Download the APK from Releases.",
            "Open the APK file and allow Install from Unknown Sources.",
            "Tap Install, then open Cineva.",
          ],
          code: "",
        },
        {
          id: "adb",
          tab: "Via ADB",
          steps: ["Connect your phone with USB Debugging enabled, then run:"],
          code: "adb install -r",
        },
        {
          id: "source",
          tab: "From source",
          steps: ["Requires Flutter 3.12+, Dart 3.0+, and Android SDK API 34."],
          code: SOURCE_CODE_SNIPPET,
        },
      ],
      envNote: "Fill .env with your TMDB and OpenSubtitles API keys.",
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
  meta: "v1.0.8 · ~98 MB",
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
export const categories = translations.id.marquee.categories;
export const install = translations.id.install;
export const specs = [
  { k: "Versi", v: "v1.0.8" },
  { k: "Ukuran APK", v: "~98 MB" },
  { k: "Target OS", v: "Android 5.0+" },
  { k: "CPU", v: "arm64-v8a, armeabi-v7a, x86_64" },
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
