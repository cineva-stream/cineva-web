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
        { href: "#nobar", label: "Nobar" },
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
        { title: "Unduhan offline", sub: "Tonton film & serial tanpa internet", src: "/posters/game_of_thrones.webp", badge: "Bisa Dicoba" },
      ] as Reason[],
    },
    maintenance: {
      badge: "Bisa Dicoba",
      title: "Fitur Unduhan kini sudah bisa digunakan.",
      body: "Simpan film dan episode serial favorit langsung ke perangkatmu untuk ditonton secara offline kapan saja. Catatan: Kami tidak dapat memastikan untuk seluruh film maupun serial TV dapat diunduh.",
      notice:
        "Fitur Unduhan di dalam aplikasi kini sudah bisa dicoba. Catatan: Kami tidak dapat memastikan untuk seluruh film maupun TV series dapat diunduh.",
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
        ariaLabel: "Unduhan: Sudah Bisa Dicoba",
        statusOnline: "Streaming & unduhan offline siap digunakan",
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
        desc: "Pilih avatar karakter sinema dan mulai menonton. Tidak ada registrasi, email, atau nomor telepon. Secara bawaan, datamu tersimpan di ponselmu.",
        avatarLabel: "Pilih Avatar Karakter",
        avatarStatus: "Lokal Secara Bawaan",
        avatarAlt: "Pilihan avatar sinema di profil Cineva",
        perks: ["Tanpa email", "Tanpa nomor telepon", "Tanpa registrasi"],
      },
    },
    multiplatform: {
      badge: "ANDROID, ANDROID TV & WINDOWS",
      title1: "Satu pengalaman,",
      title2: "di semua layar.",
      lead: "Katalog film, watchlist, dan riwayat tontonan yang sama, dioptimalkan untuk sentuhan smartphone Android, navigasi remote D-Pad Android TV, serta keleluasaan layar lebar Windows Desktop.",
      screens: [
        {
          src: "/screens/home.webp",
          alt: "Tampilan Cineva di Smartphone Android",
          label: "Android Mobile",
          desc: "Navigasi sentuh cepat, gestur pemutar intuitif, dan unduhan APK teroptimasi.",
        },
        {
          src: "/screens/android_tv.webp",
          alt: "Tampilan Cineva di Android TV & Smart TV",
          label: "Android TV (10-Foot UI)",
          desc: "Navigasi remote D-Pad, poster zoom 1.11x, dan efek ambient amber glow.",
        },
        {
          src: "/screens/windows_home.webp",
          alt: "Tampilan Beranda Cineva di Windows Desktop",
          label: "Windows Desktop",
          desc: "Billboard carousel 490px dengan navigasi rail kiri dan kontrol keyboard presisi.",
        },
      ],
      features: [
        { title: "Android Mobile Native", desc: "Navigasi sentuh gesit, gestur pemutar intuitif, dan hemat baterai.", icon: "android" },
        { title: "Android TV (10-Foot UI)", desc: "Navigasi remote D-Pad, poster zoom 1.11x, dan efek ambient amber glow.", icon: "tv" },
        { title: "Frameless Obsidian UI", desc: "Tampilan borderless minimalis dengan kontrol keyboard & mouse presisi.", icon: "windows" },
        { title: "Single-File Installer", desc: "Setup instan berukuran ringan (28.2 MB) siap pasang di PC.", icon: "download" },
      ],
    },
    watchParty: {
      sectionAria: "Nonton Bareng Cineva",
      badge: "NONTON BARENG",
      beta: "BETA",
      title1: "Jauh di mata,",
      title2: "dekat di layar.",
      lead: "Buat ruangan, bagikan kode, lalu nonton film atau serial yang sama secara serempak bersama teman dan keluarga. Play, pause, dan geser durasi tersinkron real-time.",
      tabsAria: "Pilih tampilan Nonton Bareng",
      slideAria: "Slide",
      steps: [
        {
          num: "01",
          tab: "Buat Ruangan",
          title: "Buat ruangan dalam sekali ketuk.",
          desc: "Dari halaman film atau serial, pilih Nonton Bareng, isi nama panggilan, lalu atur izin kontrol tamu dan PIN opsional.",
          src: "/screens/party_create.webp",
          alt: "Modal Buat Ruangan Nonton Bareng di Cineva dengan opsi izin kontrol dan PIN",
          isPortrait: true,
          width: 1216,
          height: 2560,
        },
        {
          num: "02",
          tab: "Gabung Cepat",
          title: "Gabung lewat banner di Beranda.",
          desc: "Punya kode ruangan seperti CNV-8492? Ketuk Gabung Nobar, masukkan kode, dan Cineva langsung membuka judul yang sama dengan Host.",
          src: "/screens/party_join.webp",
          alt: "Banner Nonton Bareng Teman dengan tombol Gabung Nobar di Beranda Cineva",
          isPortrait: true,
          width: 1216,
          height: 2560,
        },
        {
          num: "03",
          tab: "Live Chat",
          title: "Ngobrol sambil nonton.",
          desc: "Panel Live Chat di sisi pemutar menampilkan kode ruangan, jumlah penonton, kolom pesan, dan reaksi emoji cepat.",
          src: "/screens/party_chat.webp",
          alt: "Panel Live Chat Watch Party di sisi kanan pemutar Cineva",
          isPortrait: false,
          width: 2560,
          height: 1216,
        },
      ],
      features: [
        { icon: "sync", title: "Sinkron real-time", desc: "Play, pause, dan seek serempak dengan kompensasi latensi jaringan." },
        { icon: "chat", title: "Live Chat & emoji", desc: "Obrolan langsung plus reaksi emoji yang melayang di atas video." },
        { icon: "lock", title: "Ruangan ber-PIN", desc: "Kunci ruangan dengan PIN 4 digit agar hanya tamu undangan yang masuk." },
        { icon: "shield", title: "Kontrol di tangan Host", desc: "Izinkan tamu ikut mengontrol video, atau pegang kendali sendiri." },
        { icon: "user", title: "Mode tamu", desc: "Cukup nama panggilan, tanpa registrasi akun." },
        { icon: "tv", title: "Lintas perangkat", desc: "Nobar antar Android, Android TV, dan Windows." },
      ],
      note: {
        title: "Fitur Dalam Tahap Beta",
        desc: "Fitur Nonton Bareng masih dalam tahap beta. Jika menemukan kendala atau bug, mohon dimaklumi dan Anda dapat melapor di halaman Pengaturan melalui menu \"Kirim Masukan\".",
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
        { step: 3, title: "Konfirmasi Windows SmartScreen", desc: "Jika muncul peringatan 'Windows protected your PC': Klik \"More info\" (Info selengkapnya) → lalu klik \"Run anyway\" (Tetap jalankan)." },
        { step: 4, title: "Selesai & Buka Cineva", desc: "Pemasangan selesai! Shortcut Cineva otomatis dibuat di Desktop dan Start Menu siap dinikmati." },
      ],
      smartScreenGuide: {
        title: "Panduan Windows SmartScreen",
        desc: "Jika muncul jendela 'Windows protected your PC' (Windows melindungi PC Anda), ikuti 2 langkah mudah berikut:",
        steps: [
          {
            step: 1,
            title: 'Klik "More info"',
            desc: 'Klik teks tautan "More info" (Info selengkapnya) pada dialog Windows SmartScreen.',
          },
          {
            step: 2,
            title: 'Pilih "Run anyway"',
            desc: 'Klik tombol "Run anyway" (Tetap jalankan) yang muncul di bagian bawah untuk melanjutkan instalasi.',
          },
        ],
      },
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
          q: "Bagaimana jika muncul peringatan Windows SmartScreen saat instalasi?",
          a: "Hal ini wajar untuk piranti lunak open source yang baru dirilis. Cukup ikuti 2 langkah mudah: Klik 'More info' (Info selengkapnya) → lalu klik 'Run anyway' (Tetap jalankan) untuk melanjutkan instalasi dengan aman.",
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
          a: "Tidak perlu. Profil dan Watchlist tersimpan di ponselmu, tanpa email atau nomor telepon. Masuk dengan Google bersifat opsional, hanya untuk sinkronisasi antar perangkat.",
        },
        {
          q: "Bagaimana cara Nonton Bareng di Cineva?",
          a: "Buka film atau serial, pilih Nonton Bareng lalu Buat Ruangan untuk mendapatkan kode seperti CNV-8492. Bagikan kode itu ke temanmu. Mereka cukup menekan banner Gabung Nobar di Beranda dan memasukkan kodenya. Play, pause, dan geser durasi akan tersinkron otomatis.",
        },
        {
          q: "Apakah Nonton Bareng butuh akun?",
          a: "Tidak. Cukup masukkan nama panggilan. Host juga bisa mengunci ruangan dengan PIN 4 digit. Fitur ini masih tahap beta, jadi jika menemukan kendala, laporkan lewat menu Kirim Masukan di Pengaturan. Semua peserta perlu memakai Cineva versi terbaru.",
        },
        {
          q: "Apakah seluruh film dan serial TV dapat diunduh?",
          a: "Fitur unduhan offline kini sudah bisa digunakan untuk menyimpan video langsung ke perangkatmu. Namun, kami tidak dapat memastikan untuk seluruh film maupun serial TV dapat diunduh dikarenakan ketersediaan sumber dan server pihak ketiga di internet.",
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
        { href: "#nobar", label: "Watch Party" },
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
        { title: "Offline downloads", sub: "Watch movies & series without internet", src: "/posters/game_of_thrones.webp", badge: "Available" },
      ] as Reason[],
    },
    maintenance: {
      badge: "Available to Try",
      title: "Offline downloads are now available.",
      body: "Save your favorite movies and series episodes directly to your device to watch offline anytime. Note: We cannot guarantee that all movies or TV series can be downloaded.",
      notice:
        "The in-app Offline Download feature is now ready to try. Note: We cannot guarantee that all movies or TV series can be downloaded.",
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
        ariaLabel: "Downloads: Available to Try",
        statusOnline: "Online streaming & offline downloads ready",
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
        desc: "Pick a cinema character avatar and start watching. No sign-ups, emails, or phone numbers. By default, your data stays on your phone.",
        avatarLabel: "Choose Character Avatar",
        avatarStatus: "Local by Default",
        avatarAlt: "Cinema character avatar selection in Cineva profile",
        perks: ["No email", "No phone number", "No registration"],
      },
    },
    multiplatform: {
      badge: "ANDROID, ANDROID TV & WINDOWS",
      title1: "One experience,",
      title2: "across every screen.",
      lead: "The same streaming catalog, watchlist, and user history, tailored for Android mobile touch, 10-foot Android TV remote navigation, and the widescreen clarity of Windows Desktop.",
      screens: [
        {
          src: "/screens/home.webp",
          alt: "Cineva on Android Mobile",
          label: "Android Mobile",
          desc: "Snappy touch navigation, intuitive playback gestures, and battery-friendly streaming.",
        },
        {
          src: "/screens/android_tv.webp",
          alt: "Cineva on Android TV & Smart TV",
          label: "Android TV (10-Foot UI)",
          desc: "10-foot D-Pad remote navigation, 1.11x poster zoom, and ambient amber glow.",
        },
        {
          src: "/screens/windows_home.webp",
          alt: "Cineva Home on Windows Desktop",
          label: "Windows Desktop",
          desc: "490px billboard carousel with an elegant left navigation rail and full keyboard shortcuts.",
        },
      ],
      features: [
        { title: "Android Mobile Native", desc: "Fast touch gestures, responsive playback, and battery optimization.", icon: "android" },
        { title: "Android TV (10-Foot UI)", desc: "10-foot D-Pad remote navigation, 1.11x poster zoom, and ambient amber glow.", icon: "tv" },
        { title: "Frameless Obsidian UI", desc: "Minimal borderless dark window with precise keyboard & mouse controls.", icon: "windows" },
        { title: "Single-File Installer", desc: "Lightweight standalone installer (28.2 MB) ready to run on PC.", icon: "download" },
      ],
    },
    watchParty: {
      sectionAria: "Cineva Watch Party",
      badge: "WATCH PARTY",
      beta: "BETA",
      title1: "Miles apart,",
      title2: "one screen.",
      lead: "Create a room, share the code, and watch the same movie or series in sync with friends and family. Play, pause, and seek stay in sync in real time.",
      tabsAria: "Select Watch Party view",
      slideAria: "Slide",
      steps: [
        {
          num: "01",
          tab: "Create Room",
          title: "Create a room in one tap.",
          desc: "From any movie or series page, choose Watch Party, enter a display name, then set guest control permission and an optional PIN.",
          src: "/screens/party_create.webp",
          alt: "Cineva Watch Party Create Room modal with guest control and PIN options",
          isPortrait: true,
          width: 1216,
          height: 2560,
        },
        {
          num: "02",
          tab: "Quick Join",
          title: "Join from the Home banner.",
          desc: "Got a room code like CNV-8492? Tap Join Party, enter the code, and Cineva opens the same title as the Host automatically.",
          src: "/screens/party_join.webp",
          alt: "Watch Party with Friends banner with a Join Party button on the Cineva home screen",
          isPortrait: true,
          width: 1216,
          height: 2560,
        },
        {
          num: "03",
          tab: "Live Chat",
          title: "Chat while you watch.",
          desc: "The Live Chat side panel shows the room code, viewer count, message box, and quick emoji reactions right next to the player.",
          src: "/screens/party_chat.webp",
          alt: "Watch Party Live Chat panel on the right side of the Cineva player",
          isPortrait: false,
          width: 2560,
          height: 1216,
        },
      ],
      features: [
        { icon: "sync", title: "Real-time sync", desc: "Play, pause, and seek stay together with network latency compensation." },
        { icon: "chat", title: "Live Chat & emoji", desc: "Instant chat plus emoji reactions floating over the video." },
        { icon: "lock", title: "PIN-protected rooms", desc: "Lock your room with a 4-digit PIN so only invited guests can join." },
        { icon: "shield", title: "Host in control", desc: "Let guests control playback too, or keep the remote to yourself." },
        { icon: "user", title: "Guest mode", desc: "Just a display name. No sign-up or account needed." },
        { icon: "tv", title: "Cross-device", desc: "Watch together across Android, Android TV, and Windows." },
      ],
      note: {
        title: "Beta Feature Notice",
        desc: "Watch Party is currently in beta. If you encounter any issues or bugs, please understand and feel free to report them in Settings via the \"Share Your Thoughts\" menu.",
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
        { step: 3, title: "Confirm Windows SmartScreen", desc: "If 'Windows protected your PC' appears: Click \"More info\" (Info selengkapnya) → then click \"Run anyway\" (Tetap jalankan)." },
        { step: 4, title: "Ready to Watch", desc: "Setup complete! A Cineva desktop shortcut is created, ready to launch with mouse & keyboard controls." },
      ],
      smartScreenGuide: {
        title: "Windows SmartScreen Notice",
        desc: "If the 'Windows protected your PC' dialog appears, follow these 2 simple steps:",
        steps: [
          {
            step: 1,
            title: 'Click "More info"',
            desc: 'Click the "More info" (Info selengkapnya) text link inside the Windows SmartScreen dialog.',
          },
          {
            step: 2,
            title: 'Select "Run anyway"',
            desc: 'Click the "Run anyway" (Tetap jalankan) button that appears at the bottom to continue installation.',
          },
        ],
      },
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
          q: "What if Windows SmartScreen shows a warning during installation?",
          a: "This is completely normal for newly released open-source software. Simply follow these 2 easy steps: Click 'More info' (Info selengkapnya) → then click 'Run anyway' (Tetap jalankan) to safely proceed with setup.",
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
          a: "Not at all. Your Profile and Watchlist are saved locally on your phone, requiring no email or phone number. Signing in with Google is optional and only used for cross-device sync.",
        },
        {
          q: "How does Watch Party work in Cineva?",
          a: "Open a movie or series, choose Watch Party then Create Room to get a code like CNV-8492. Share the code with your friends. They just tap the Join Party banner on Home and enter it. Play, pause, and seek stay in sync automatically.",
        },
        {
          q: "Does Watch Party require an account?",
          a: "No. Just enter a display name. Hosts can also lock a room with a 4-digit PIN. The feature is still in beta, so if you run into any issue, report it via the Share Your Thoughts menu in Settings. Everyone in the room needs the latest version of Cineva.",
        },
        {
          q: "Can all movies and TV series be downloaded?",
          a: "The offline download feature is now available to try. However, we cannot guarantee that all movies or TV series can be downloaded due to the dynamic availability of third-party streams and sources.",
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
