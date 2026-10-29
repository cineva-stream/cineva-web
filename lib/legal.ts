export interface LegalSection {
  number: string;
  title: string;
  body: string;
  bulletPoints?: string[];
}

export interface LegalDocument {
  title: string;
  subtitle: string;
  calloutSummary: string;
  sections: LegalSection[];
  concludingNotice: string;
}

export const privacyPolicy: LegalDocument = {
  title: "Kebijakan Privasi",
  subtitle: "Prinsip Perlindungan Data Pribadi & Privasi Pengguna Global",
  calloutSummary:
    "Cineva dirancang dengan arsitektur privasi nol-pelacakan (Zero Data Collection). Kami tidak mengumpulkan, tidak menjual, dan tidak mentransmisikan data identitas pribadi Anda ke server mana pun.",
  sections: [
    {
      number: "1",
      title: "Filosofi Privasi Tanpa Akun & Tanpa Registrasi",
      body:
        "Cineva beroperasi tanpa memerlukan pendaftaran akun, alamat surel, nomor telepon, maupun informasi identitas pribadi (PII). Seluruh fitur aplikasi dapat diakses langsung tanpa autentikasi ke server terpusat milik Cineva. Kami meyakini bahwa akses terhadap piranti lunak pemutar media harus menjunjung tinggi privasi mutlak pengguna di seluruh dunia.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: "Penyimpanan Data Lokal di Perangkat Pengguna",
      body:
        "Seluruh preferensi konfigurasi dan data interaksi pengguna disimpan secara eksklusif pada penyimpanan lokal perangkat Anda menggunakan basis data tertanam terenkripsi (Hive). Data yang tersimpan meliputi:",
      bulletPoints: [
        "Daftar film dan serial yang Anda simpan ke dalam Watchlist.",
        "Riwayat tontonan dan posisi pemutaran terakhir (resume position).",
        "Riwayat kata kunci pencarian lokal.",
        "Preferensi tampilan: bahasa aplikasi, ukuran dan latar subtitle, serta preferensi kualitas pemutaran.",
        "File film dan subtitle yang Anda unduh melalui Manajer Unduhan.",
      ],
    },
    {
      number: "3",
      title: "Karakteristik Jaringan P2P & Alamat Protokol Internet (IP)",
      body:
        "Sebagai pemutar media yang mendukung protokol terdistribusi (Peer-to-Peer / BitTorrent):",
      bulletPoints: [
        "Saat Anda melakukan streaming atau mengunduh konten melalui protokol P2P, alamat IP publik perangkat Anda secara inheren dapat terlihat oleh peers (peserta jaringan) lain dalam kelompok distribusi (swarm). Ini merupakan karakteristik dasar arsitektur P2P di seluruh dunia, bukan tindakan pengumpulan data oleh Cineva.",
        "Cineva sama sekali tidak mencatat (no logs), tidak merekam, dan tidak mengarsipkan alamat IP Anda.",
        "Bagi pengguna yang membutuhkan privasi transmisi jaringan tingkat lanjut, Anda disarankan untuk menggunakan Virtual Private Network (VPN) terenkripsi dari pihak ketiga.",
      ],
    },
    {
      number: "4",
      title: "Interaksi dengan Layanan & API Pihak Ketiga",
      body:
        "Untuk menampilkan poster sinematik, sinopsis resmi, dan subtitle, Cineva berkomunikasi langsung dari perangkat Anda ke antarmuka pemrograman aplikasi (API) publik pihak ketiga:",
      bulletPoints: [
        "The Movie Database (TMDB): Digunakan untuk mengambil metadata poster, judul, tahun rilis, dan ringkasan alur cerita.",
        "OpenSubtitles: Digunakan untuk mengunduh berkas teks subtitle multibahasa secara publik.",
        "Indeks Pelacak Publik (Torrentio / Addon Scraper): Digunakan untuk mencocokkan ketersediaan data media terdistribusi.",
        "Interaksi dengan layanan pihak ketiga ini tunduk pada kebijakan privasi dan ketentuan layanan dari masing-masing penyedia layanan tersebut.",
      ],
    },
    {
      number: "5",
      title: "Kepatuhan Regulasi Privasi Internasional",
      body:
        "Meskipun Cineva tidak mengumpulkan data pribadi di server mana pun, arsitektur aplikasi ini selaras dengan prinsip-prinsip perlindungan data global, termasuk General Data Protection Regulation (GDPR) Uni Eropa, California Consumer Privacy Act (CCPA), dan standar privasi internasional lainnya yang menjamin hak pengguna untuk menghapus seluruh data lokal kapan saja melalui menu Pengaturan.",
      bulletPoints: [],
    },
    {
      number: "6",
      title: "Pembaruan Dokumen Kebijakan",
      body:
        "Kebijakan Privasi ini dapat diperbarui sewaktu-waktu seiring dengan evolusi fitur teknis aplikasi. Pembaruan akan selalu tercermin secara transparan pada dokumen ini.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "Jika Anda memiliki pertanyaan terkait privasi aplikasi atau arsitektur penyimpanan data lokal, Anda dapat meninjau kode sumber terbuka Cineva atau menghubungi pengembang.",
};

export const termsOfUse: LegalDocument = {
  title: "Syarat Penggunaan",
  subtitle: "Perjanjian Hukum Penggunaan Piranti Lunak Cineva Secara Global",
  calloutSummary:
    "PENTING: Aplikasi Cineva disediakan \"sebagaimana adanya\" tanpa jaminan apa pun. Seluruh film dan serial TV bukan milik Cineva. Cineva BUKAN layanan komersial dan BUKAN pengganti platform streaming berbayar resmi.",
  sections: [
    {
      number: "1",
      title: "Penerimaan Ketentuan Penggunaan",
      body:
        "Dengan mengunduh, memasang, menyalin, atau menggunakan piranti lunak Cineva pada perangkat apa pun di seluruh dunia, Anda menyatakan telah membaca, memahami, dan menyetujui secara mengikat seluruh Syarat dan Ketentuan ini. Apabila Anda tidak menyetujui salah satu butir ketentuan, Anda wajib segera menghentikan penggunaan dan menghapus aplikasi dari perangkat Anda.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: "Lisensi Sumber Terbuka (GPL-3.0) & Penyediaan \"Sebagaimana Adanya\" (As-Is Provision)",
      body:
        "Piranti lunak Cineva didistribusikan sebagai perangkat lunak bebas dan sumber terbuka di bawah lisensi GNU General Public License v3.0 (GPL-3.0). Aplikasi Cineva disediakan secara mutlak atas dasar \"SEBAGAIMANA ADANYA\" (\"AS IS\") dan \"SEBAGAIMANA TERSEDIA\" (\"AS AVAILABLE\"), tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan tersirat atas kelayakan untuk diperdagangkan (merchantability), kesesuaian untuk tujuan tertentu (fitness for a particular purpose), ketiadaan pelanggaran hak pihak ketiga, serta kebebasan dari cacat, galat, atau gangguan operasional.",
      bulletPoints: [],
    },
    {
      number: "3",
      title: "Kepemilikan Pihak Ketiga & Penafian Konten Media",
      body:
        "Pengguna mengakui dan menyepakati secara tegas bahwa:",
      bulletPoints: [
        "Seluruh konten Film, Serial TV, Trailer, Audio, Gambar Poster, dan Subtitle BUKAN merupakan milik aplikasi Cineva maupun pengembangnya.",
        "Cineva tidak memproduksi, tidak menerbitkan, tidak mengunggah, tidak menghosting, dan tidak mengendalikan file media apa pun.",
        "Hak cipta, merek dagang, paten, dan hak kekayaan intelektual atas seluruh film dan serial TV adalah milik penuh dan eksklusif dari masing-masing pemegang hak cipta, studio produksi, dan distributor resmi yang bersangkutan.",
      ],
    },
    {
      number: "4",
      title: "Bukan Pengganti Layanan Streaming Resmi & Sifat Non-Komersial",
      body:
        "Cineva dikembangkan secara murni sebagai piranti lunak utilitas pribadi sumber terbuka (open utility software) tanpa orientasi komersial:",
      bulletPoints: [
        "Aplikasi ini 100% NON-KOMERSIAL, bebas biaya langganan, dan tidak menghasilkan pendapatan dari penjualan konten berhak cipta.",
        "Cineva sama sekali BUKAN merupakan pengganti layanan streaming resmi berbayar (seperti Netflix, Disney+, Amazon Prime Video, HBO Max, bioskop, atau gerai distribusi resmi lainnya).",
        "Kami secara aktif mengimbau seluruh pengguna untuk menghargai para sineas, aktor, dan produser film dengan cara berlangganan dan membeli tiket/karya pada platform resmi berlisensi.",
      ],
    },
    {
      number: "5",
      title: "Penafian Ketersediaan & Kemampuan Pemutaran Konten",
      body:
        "Kami menyatakan secara tegas bahwa TIDAK SELURUH film atau serial TV dijamin tersedia, lengkap, atau dapat diputar:",
      bulletPoints: [
        "Cineva beroperasi dengan mem-parsing indeks publik P2P dan metadata internet secara dinamis.",
        "Keberhasilan streaming, kecepatan unduhan, dan resolusi video sepenuhnya bergantung pada ketersediaan seeders/peers publik aktif dan sumber pihak ketiga di internet.",
        "Pengembang Cineva tidak menjamin ketersediaan berkelanjutan atas judul media tertentu, kelancaran pemutaran, maupun kualitas tayangan.",
      ],
    },
    {
      number: "6",
      title: "Tanggung Jawab Hukum Pengguna di Seluruh Yurisdiksi",
      body:
        "Pengguna memikul tanggung jawab hukum tunggal dan mutlak atas cara penggunaan aplikasi ini. Anda bertanggung jawab penuh untuk memastikan bahwa penggunaan protokol P2P dan akses terhadap konten publik selaras dengan peraturan perundang-undangan dan undang-undang hak cipta yang berlaku di negara tempat Anda berdomisili. Pengembang dibebaskan secara penuh dari setiap tuntutan atau sengketa hukum yang melibatkan pengguna.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "Penggunaan berkelanjutan atas aplikasi Cineva merupakan bentuk kesepakatan abadi Anda terhadap seluruh klausul hukum dalam Syarat dan Ketentuan ini.",
};

export const disclaimerDoc: LegalDocument = {
  title: "Disclaimer",
  subtitle: "Pernyataan Penafian Hak Cipta, DMCA, & Batasan Tanggung Jawab",
  calloutSummary:
    "Cineva adalah antarmuka pemutar media terdesentralisasi. Cineva tidak meng-host file video apa pun di server kami sendiri. Seluruh materi hak cipta adalah milik pemilik resminya masing-masing.",
  sections: [
    {
      number: "1",
      title: "Pernyataan Penafian Hosting & Penyimpanan Konten",
      body:
        "Cineva TIDAK meng-host, TIDAK menyimpan, TIDAK mengarsipkan, dan TIDAK mentransmisikan konten video berhak cipta apa pun dari server internal milik Cineva. Aplikasi ini bekerja murni sebagai antarmuka pemutar media (media player client) sisi-klien yang mem-parsing informasi publik yang tersedia secara bebas di internet dan jaringan terdistribusi global.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: "Kepatuhan Hak Cipta, WIPO, & Pemberitahuan DMCA",
      body:
        "Pengembang Cineva sangat menjunjung tinggi hak kekayaan intelektual global sesuai Digital Millennium Copyright Act (DMCA), Berne Convention, dan traktat World Intellectual Property Organization (WIPO):",
      bulletPoints: [
        "Jika Anda adalah pemegang hak cipta atau agen resminya dan menemukan materi Anda terindeks oleh pelacak publik, mohon dipahami bahwa Cineva tidak memiliki kontrol atas server atau seeders pihak ketiga tempat file tersebut berada.",
        "Penghapusan tautan atau penghentian distribusi harus diajukan langsung kepada penyedia hosting web pihak ketiga atau swarm pelacak publik yang mendistribusikan berkas tersebut.",
        "Cineva tidak menyimpan repositori file apa pun yang dapat kami hapus dari server kami.",
      ],
    },
    {
      number: "3",
      title: "Penafian Ketiadaan Jaminan Ketersediaan Film & Serial TV",
      body:
        "Aplikasi ini tidak memberikan jaminan bahwa suatu judul film, musim serial, atau episode tertentu akan selalu tersedia atau dapat diputar dengan lancar. Ketiadaan seeders aktif pada jaringan publik akan menyebabkan konten tidak dapat dimuat atau mengalami buffering. Hal ini berada di luar kendali teknis piranti lunak Cineva.",
      bulletPoints: [],
    },
    {
      number: "4",
      title: "Penafian Komersialisasi & Imbauan Mendukung Karya Orisinal",
      body:
        "Cineva menegaskan kembali bahwa aplikasi ini bukan platform komersial dan tidak didesain untuk menggantikan layanan hiburan berlisensi. Kami mendorong setiap pengguna untuk menikmati film dan serial TV favorit melalui saluran bioskop resmi serta layanan streaming legal berlangganan guna mendukung keberlanjutan industri perfilman internasional.",
      bulletPoints: [],
    },
    {
      number: "5",
      title: "Pembatasan Tanggung Jawab Hukum (Limitation of Liability)",
      body:
        "Sejauh diizinkan oleh hukum yang berlaku, pengembang, kontributor, dan pihak terkait Cineva tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial dalam bentuk apa pun (termasuk kehilangan data, penggunaan bandwidth, atau tuntutan pihak ketiga) yang timbul dari pengunduhan, pemasangan, atau pengoperasian aplikasi ini oleh pengguna.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "Dengan menggunakan Cineva, Anda menegaskan pemahaman Anda bahwa Cineva adalah alat pemutar piranti lunak mandiri dan membebaskan pengembang dari segala tanggung jawab atas konten yang Anda akses.",
};
