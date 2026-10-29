import type { Locale } from "./content";

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
    'PENTING: Aplikasi Cineva disediakan "sebagaimana adanya" tanpa jaminan apa pun. Seluruh film dan serial TV bukan milik Cineva. Cineva BUKAN layanan komersial dan BUKAN pengganti platform streaming berbayar resmi.',
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
      title: 'Lisensi Sumber Terbuka (GPL-3.0) & Penyediaan "Sebagaimana Adanya" (As-Is Provision)',
      body:
        'Piranti lunak Cineva didistribusikan sebagai perangkat lunak bebas dan sumber terbuka di bawah lisensi GNU General Public License v3.0 (GPL-3.0). Aplikasi Cineva disediakan secara mutlak atas dasar "SEBAGAIMANA ADANYA" ("AS IS") dan "SEBAGAIMANA TERSEDIA" ("AS AVAILABLE"), tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan tersirat atas kelayakan untuk diperdagangkan (merchantability), kesesuaian untuk tujuan tertentu (fitness for a particular purpose), ketiadaan pelanggaran hak pihak ketiga, serta kebebasan dari cacat, galat, atau gangguan operasional.',
      bulletPoints: [],
    },
    {
      number: "3",
      title: "Kepemilikan Pihak Ketiga & Penafian Konten Media",
      body: "Pengguna mengakui dan menyepakati secara tegas bahwa:",
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

export const privacyPolicyEn: LegalDocument = {
  title: "Privacy Policy",
  subtitle: "Global Personal Data Protection & User Privacy Principles",
  calloutSummary:
    "Cineva is engineered with a Zero Data Collection privacy architecture. We do not collect, sell, or transmit your personal identity data to any server.",
  sections: [
    {
      number: "1",
      title: "Account-Free & Zero-Registration Privacy Philosophy",
      body:
        "Cineva operates without requiring account registration, email addresses, phone numbers, or any Personally Identifiable Information (PII). Every feature of the application is accessible directly without authenticating to any centralized Cineva server. We believe access to media player software should uphold absolute user privacy worldwide.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: "Local Data Storage on the User's Device",
      body:
        "All configuration preferences and user interaction data are stored exclusively on your device's internal storage using an encrypted embedded database (Hive). Locally stored data includes:",
      bulletPoints: [
        "Movies and TV series saved to your Watchlist.",
        "Viewing history and last playback position (resume position).",
        "Local search keyword history.",
        "Display preferences: app language, subtitle size and background, and playback quality preferences.",
        "Movie and subtitle files downloaded via the Download Manager.",
      ],
    },
    {
      number: "3",
      title: "P2P Network Characteristics & Internet Protocol (IP) Addresses",
      body:
        "As a media player supporting distributed protocols (Peer-to-Peer / BitTorrent):",
      bulletPoints: [
        "When streaming or downloading content over P2P protocols, your device's public IP address is inherently visible to other peers participating in the distribution swarm. This is a fundamental characteristic of P2P architecture worldwide, not data collection by Cineva.",
        "Cineva keeps zero logs—we never record, monitor, or archive your IP address.",
        "Users seeking enhanced network transmission privacy are encouraged to use a reputable encrypted third-party Virtual Private Network (VPN).",
      ],
    },
    {
      number: "4",
      title: "Interaction with Third-Party Services & Public APIs",
      body:
        "To display cinematic posters, official synopses, and subtitles, Cineva communicates directly from your device with public third-party Application Programming Interfaces (APIs):",
      bulletPoints: [
        "The Movie Database (TMDB): Used to fetch poster metadata, titles, release years, and plot summaries.",
        "OpenSubtitles: Used to fetch publicly available multi-language subtitle files.",
        "Public Tracker Indexes (Torrentio / Addon Scrapers): Used to match distributed media availability.",
        "Interactions with these third-party services are governed by their respective privacy policies and terms of service.",
      ],
    },
    {
      number: "5",
      title: "International Privacy Regulation Alignment",
      body:
        "Although Cineva collects no personal data on any server, its architecture aligns with global data protection principles—including the EU General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA)—guaranteeing users full control to erase all local data at any time via the Settings menu.",
      bulletPoints: [],
    },
    {
      number: "6",
      title: "Policy Document Updates",
      body:
        "This Privacy Policy may be updated periodically as the technical features of the application evolve. Updates will always be transparently reflected in this document.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "If you have any questions regarding application privacy or local data storage architecture, you may review Cineva's open-source code or contact the developers.",
};

export const termsOfUseEn: LegalDocument = {
  title: "Terms of Use",
  subtitle: "Global Software License & Usage Agreement for Cineva",
  calloutSummary:
    'IMPORTANT: The Cineva application is provided "as is" without warranty of any kind. All movies and TV series do not belong to Cineva. Cineva is NOT a commercial service and is NOT a replacement for official paid streaming platforms.',
  sections: [
    {
      number: "1",
      title: "Acceptance of Terms of Use",
      body:
        "By downloading, installing, copying, or using the Cineva software on any device worldwide, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree to any provision hereof, you must immediately cease use and remove the application from your device.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: 'Open-Source License (GPL-3.0) & "As-Is" Provision',
      body:
        'Cineva software is distributed as free and open-source software under the GNU General Public License v3.0 (GPL-3.0). The Cineva application is provided strictly on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement of third-party rights, or freedom from defects, errors, or operational interruptions.',
      bulletPoints: [],
    },
    {
      number: "3",
      title: "Third-Party Ownership & Media Content Disclaimer",
      body: "Users expressly acknowledge and agree that:",
      bulletPoints: [
        "All Movies, TV Series, Trailers, Audio, Poster Images, and Subtitles DO NOT belong to the Cineva application or its developers.",
        "Cineva does not produce, publish, upload, host, or control any media files whatsoever.",
        "Copyrights, trademarks, patents, and intellectual property rights over all movies and TV series remain the sole and exclusive property of their respective copyright holders, production studios, and official distributors.",
      ],
    },
    {
      number: "4",
      title: "Not a Replacement for Official Streaming Services & Non-Commercial Nature",
      body:
        "Cineva is developed purely as non-commercial open-source personal utility software:",
      bulletPoints: [
        "The application is 100% NON-COMMERCIAL, free of subscription fees, and generates zero revenue from the sale of copyrighted content.",
        "Cineva is in NO WAY a replacement for official paid streaming services (such as Netflix, Disney+, Amazon Prime Video, HBO Max, theaters, or other licensed distribution channels).",
        "We actively encourage all users to support filmmakers, actors, and producers by subscribing to and purchasing content on official licensed platforms.",
      ],
    },
    {
      number: "5",
      title: "Disclaimer of Content Availability & Playback Capability",
      body:
        "We expressly state that NOT ALL movies or TV series are guaranteed to be available, complete, or playable:",
      bulletPoints: [
        "Cineva operates by dynamically parsing public P2P indexes and internet metadata.",
        "Streaming success, download speed, and video resolution depend entirely on active public seeders/peers and third-party internet sources.",
        "Cineva developers do not guarantee continuous availability of specific titles, smooth playback, or video quality.",
      ],
    },
    {
      number: "6",
      title: "User Legal Responsibility Across Jurisdictions",
      body:
        "Users bear sole and absolute legal responsibility for how they use this application. You are fully responsible for ensuring that your use of P2P protocols and access to public content complies with applicable laws and copyright regulations in your country of residence. The developers are fully indemnified from any claims or legal disputes involving users.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "Your continued use of the Cineva application constitutes your ongoing agreement to all legal clauses set forth in these Terms of Use.",
};

export const disclaimerDocEn: LegalDocument = {
  title: "Disclaimer",
  subtitle: "Copyright Disclaimer, DMCA Compliance, & Limitation of Liability",
  calloutSummary:
    "Cineva is a decentralized media player interface. Cineva does not host any video files on its own servers. All copyrighted materials belong to their respective official owners.",
  sections: [
    {
      number: "1",
      title: "Content Hosting & Storage Disclaimer",
      body:
        "Cineva DOES NOT host, store, archive, or transmit any copyrighted video content from internal Cineva servers. The application functions purely as a client-side media player interface that parses publicly available information across the internet and global distributed networks.",
      bulletPoints: [],
    },
    {
      number: "2",
      title: "Copyright Compliance, WIPO, & DMCA Notices",
      body:
        "Cineva developers respect global intellectual property rights in accordance with the Digital Millennium Copyright Act (DMCA), the Berne Convention, and World Intellectual Property Organization (WIPO) treaties:",
      bulletPoints: [
        "If you are a copyright owner or authorized agent and find your material indexed by public trackers, please understand that Cineva has no control over third-party servers or seeders where such files reside.",
        "Takedown requests or distribution halts must be directed to the respective third-party web hosts or public tracker swarms distributing those files.",
        "Cineva maintains no file repository that can be removed from our servers.",
      ],
    },
    {
      number: "3",
      title: "No Warranty of Movie & TV Series Availability",
      body:
        "This application provides no guarantee that any specific movie title, season, or episode will always be available or play smoothly. The absence of active seeders on public networks will prevent content from loading or cause buffering, which is outside the technical control of Cineva software.",
      bulletPoints: [],
    },
    {
      number: "4",
      title: "Non-Commercialization & Support for Original Creators",
      body:
        "Cineva reiterates that this application is not a commercial platform and is not designed to replace licensed entertainment services. We encourage every user to enjoy their favorite movies and TV series through official movie theaters and legal subscription streaming platforms to support the global film industry.",
      bulletPoints: [],
    },
    {
      number: "5",
      title: "Limitation of Liability",
      body:
        "To the maximum extent permitted by applicable law, Cineva developers, contributors, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages of any kind (including data loss, bandwidth usage, or third-party claims) arising from the download, installation, or operation of this application by the user.",
      bulletPoints: [],
    },
  ],
  concludingNotice:
    "By using Cineva, you affirm your understanding that Cineva is a standalone software player utility and release the developers from any liability regarding the content you access.",
};

export const legalUi = {
  id: {
    backHome: "Kembali ke Beranda",
    backHomeAria: "Kembali ke Beranda Cineva",
    tabsAria: "Pilihan Dokumen Hukum",
    kicker: "Dokumen Hukum Resmi · Cineva",
    tabs: [
      { slug: "syarat-penggunaan" as const, label: "Syarat Penggunaan" },
      { slug: "kebijakan-privasi" as const, label: "Kebijakan Privasi" },
      { slug: "disclaimer" as const, label: "Disclaimer" },
    ],
    docs: {
      "syarat-penggunaan": termsOfUse,
      "kebijakan-privasi": privacyPolicy,
      disclaimer: disclaimerDoc,
    },
  },
  en: {
    backHome: "Back to Home",
    backHomeAria: "Back to Cineva Home",
    tabsAria: "Legal Documents Navigation",
    kicker: "Official Legal Document · Cineva",
    tabs: [
      { slug: "syarat-penggunaan" as const, label: "Terms of Use" },
      { slug: "kebijakan-privasi" as const, label: "Privacy Policy" },
      { slug: "disclaimer" as const, label: "Disclaimer" },
    ],
    docs: {
      "syarat-penggunaan": termsOfUseEn,
      "kebijakan-privasi": privacyPolicyEn,
      disclaimer: disclaimerDocEn,
    },
  },
};

export function getLegalUi(lang: Locale) {
  return legalUi[lang] || legalUi.id;
}
