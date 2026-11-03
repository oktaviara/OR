export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'system-analysis' | 'ui-ux' | 'web-database' | 'business-intelligence';
  categoryLabel: string;
  date: string;
  role: string;
  client: string;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  methodology: string;
  keyDeliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  location: string;
  gpa: string;
  description: string;
  coursework: string[];
  achievements: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  skillsLearned: string[];
}

export const PERSONAL_INFO = {
  name: 'Oktavia Rara Ramadani',
  preferredName: 'Oktavia Rara',
  headline: 'Mahasiswi Sistem Informasi · Universitas Komputama',
  subHeadline: 'Merancang Solusi Digital, Arsitektur Basis Data & Antarmuka yang Efektif',
  bio: 'Saya mahasiswi program studi Sistem Informasi di Universitas Komputama (Cilacap, Jawa Tengah) yang berfokus pada analisis sistem, pemodelan proses bisnis, desain UI/UX, dan arsitektur basis data relasional. Menggabungkan ketelitian logika analisis bisnis dengan kreativitas perancangan perangkat lunak untuk menghasilkan sistem yang efisien dan tepat sasaran.',
  university: 'Universitas Komputama',
  faculty: 'Fakultas Teknologi Informasi dan Bisnis',
  major: 'S1 Sistem Informasi',
  location: 'Cilacap, Jawa Tengah, Indonesia',
  email: 'oktaviararamadani38@gmail.com',
  whatsappNumber: '6281234567890', // Default placeholder format that can be customized
  gpa: '3.84',
  maxGpa: '4.00',
  semester: 'Semester 5 (Tahun Akademik 2024/2025)',
  status: 'Mahasiswi Aktif & Terbuka untuk Program Magang / Kolaborasi Proyek',
  portraitImage: '/src/assets/images/student_portrait_1793696492862.jpg',
  stats: [
    { value: '3.84', label: 'IPK Kumulatif', subtext: 'Skala 4.00' },
    { value: '8+', label: 'Proyek Sistem & Studi Kasus', subtext: 'Analisis & Prototipe' },
    { value: '14+', label: 'Matakuliah Inti Selesai', subtext: 'Predikat Unggul (A)' },
    { value: '100%', label: 'Dedikasi Solusi Nyata', subtext: 'Berorientasi Kebutuhan Pengguna' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'siakad-komputama',
    title: 'SIAKAD Mobile & Portal Akademik Kampus',
    subtitle: 'Redesain Alur Pengisian KRS dan Dashboard Monitoring Capaian Mahasiswa',
    category: 'system-analysis',
    categoryLabel: 'Analisis Sistem & UI/UX',
    date: 'Oktober 2024',
    role: 'System Analyst & UI/UX Designer',
    client: 'Studi Kasus Akademik Universitas Komputama',
    image: '/src/assets/images/project_siakad_dashboard_1793696493161.jpg',
    summary: 'Rancang bangun konseptual dan prototipe portal sistem informasi akademik kampus dengan integrasi verifikasi KRS real-time, grafik tren IPK, dan manajemen jadwal kuliah terpusat.',
    problem: 'Sistem lama mengalami kendala antrean server saat masa pengisian KRS serentak serta minim visualisasi progres akademik bagi mahasiswa dan dosen pembimbing.',
    solution: 'Merumuskan alur proses baru menggunakan BPMN 2.0 dan merancang antarmuka berbasis komponen modern di Figma, dilengkapi arsitektur basis data ternormalisasi (3NF).',
    methodology: 'SDLC Prototyping Model, Analisis Kebutuhan PIECES, Perancangan DFD Level 0–2, ERD Relasional.',
    keyDeliverables: [
      'Diagram Alir Data (DFD) & Use Case Diagram 15+ Aktor',
      'Desain Prototipe Interaktif High-Fidelity di Figma',
      'Dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL)',
      'Struktur Relasi Tabel Database Akademik (PostgreSQL)',
    ],
    techStack: ['Figma', 'Draw.io', 'BPMN 2.0', 'PostgreSQL', 'Tailwind CSS', 'React'],
    metrics: [
      { label: 'Efisiensi Alur KRS', value: '-45% Klik' },
      { label: 'Skor Pengujian SUS', value: '86.5 / 100' },
      { label: 'Kompleksitas DFD', value: '3 Tingkat' },
    ],
  },
  {
    id: 'logisync-erp',
    title: 'LogiSync - Sistem Inventaris & Rantai Pasok UMKM',
    subtitle: 'Aplikasi Web Pengendalian Stok Barang dan Laporan Penjualan Real-time',
    category: 'web-database',
    categoryLabel: 'Web & Manajemen Basis Data',
    date: 'Agustus 2024',
    role: 'Database Designer & Frontend Developer',
    client: 'Mitra Usaha Dagang Mitra Cilacap',
    image: '/src/assets/images/project_inventory_erp_1793696493775.jpg',
    summary: 'Sistem informasi manajemen pergudangan UMKM terpadu untuk melacak mutasi barang, ambang batas minimum stok, dan pembuatan laporan otomatis tanpa rekonsiliasi manual.',
    problem: 'Pencatatan inventaris konvensional menggunakan buku kas fisik sering memicu selisih stok (stock loss) dan keterlambatan pengadaan barang ke supplier.',
    solution: 'Membangun aplikasi web dengan basis data terstruktur yang memvalidasi setiap transaksi masuk-keluar secara transaksional (ACID) dan menyediakan dashboard alert stok kritis.',
    methodology: 'Agile Kanban, Normalisasi Database (1NF-BCNF), Entity Relationship Modeling, User Story Mapping.',
    keyDeliverables: [
      'Skema Database Relasional 12 Entitas & Stored Procedure',
      'Dashboard Web Responsif dengan Grafik Analitik Penjualan',
      'Modul Notifikasi Batas Minimum Stok Otomatis',
      'Fitur Ekspor Rekapitulasi Laporan Laba Kotor & Transaksi',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'Chart.js'],
    metrics: [
      { label: 'Akurasi Stok Barang', value: '99.4%' },
      { label: 'Pengurangan Waktu Rekap', value: '3 Jam/Hari' },
      { label: 'Entitas Relasional', value: '12 Tabel' },
    ],
  },
  {
    id: 'medicare-his',
    title: 'MediCare Plus - SIM Rekam Medis & Antrean Klinik',
    subtitle: 'Digitalisasi Rekam Medis Elektronik (RME) dan Pendaftaran Pasien',
    category: 'system-analysis',
    categoryLabel: 'Sistem Informasi Manajemen',
    date: 'Desember 2024',
    role: 'Lead Business Analyst',
    client: 'Proyek Tugas Akhir Mata Kuliah Perancangan Sistem',
    image: '/src/assets/images/project_clinic_system_1793696494520.jpg',
    summary: 'Analisis dan desain sistem informasi rekam medis elektronik terintegrasi dengan penjadwalan poliklinik, resep farmasi, dan monitoring antrean berbasis display publik.',
    problem: 'Waktu tunggu pasien klinik memakan waktu lebih dari 60 menit karena berkas rekam medis manual masih dicari di gudang arsip fisik.',
    solution: 'Merancang alur digitalisasi dari registrasi mandiri, pemeriksaan dokter, billing kasir, hingga pengambilan obat dengan akses data rekam medis terenkripsi.',
    methodology: 'Waterfall SDLC, Analisis Kelayakan TELOS, Pemodelan UML (Activity & Sequence Diagram).',
    keyDeliverables: [
      'Blueprint Arsitektur Sistem Informasi Kesehatan',
      'Diagram Alur Pasien (Activity & Statechart Diagram)',
      'Prototipe Layar Anjungan Antrean Mandiri',
      'Kamus Data & Spesifikasi Keamanan Hak Akses (RBAC)',
    ],
    techStack: ['UML Modeling', 'Figma', 'System Architecture', 'MySQL', 'BPMN'],
    metrics: [
      { label: 'Estimasi Pangkas Antrean', value: '-55% Durasi' },
      { label: 'Akurasi Riwayat Medis', value: '100% Digital' },
      { label: 'Dokumen Standar', value: 'Permenkes RME' },
    ],
  },
  {
    id: 'db-distribution',
    title: 'Arsitektur Basis Data Logistik Distribusi Regional',
    subtitle: 'Perancangan Skema Database Relasional Kompleks & Optimalisasi Query SQL',
    category: 'web-database',
    categoryLabel: 'Basis Data & Query SQL',
    date: 'Juni 2024',
    role: 'Database Analyst & Modeler',
    client: 'Mata Kuliah Basis Data Lanjut',
    image: '/src/assets/images/project_inventory_erp_1793696493775.jpg',
    summary: 'Studi komprehensif pemodelan data relasional untuk menangani multi-gudang, armada pengiriman, tracking resi real-time, dan audit trail pergerakan armada logistik.',
    problem: 'Query laporan bulanan pada struktur data non-relasional memerlukan waktu eksekusi tinggi dan sering terjadi redundansi data pelanggan.',
    solution: 'Menerapkan normalisasi ketat sampai tingkat 3NF, pembuatan index gabungan (composite index), serta perancangan skema snowflake untuk pelaporan cepat.',
    methodology: 'Database Lifecycle (DBLC), Conceptual, Logical, & Physical Database Design.',
    keyDeliverables: [
      'ERD Konseptual, Logikal, & Fisikal 18 Tabel',
      'Skrip DDL, DML, Trigger, & Stored Procedures SQL',
      'Analisis Kinerja Eksekusi Query (EXPLAIN ANALYZE)',
      'Dokumentasi Kamus Data Relasional Lengkap',
    ],
    techStack: ['PostgreSQL', 'pgAdmin', 'SQL Query Tuning', 'ER Studio', 'Draw.io'],
    metrics: [
      { label: 'Normalisasi Tingkat', value: '3NF / BCNF' },
      { label: 'Peningkatan Kecepatan Query', value: '3.4x Lebih Cepat' },
      { label: 'Tabel Terelasi', value: '18 Tabel' },
    ],
  },
  {
    id: 'usability-publik',
    title: 'Audit Usability Heuristik & Redesain Portal Layanan Publik',
    subtitle: 'Evaluasi 10 Prinsip Nielsen dan Peningkatan Aksesibilitas Web Desa',
    category: 'ui-ux',
    categoryLabel: 'UI/UX Research & Audit',
    date: 'Maret 2024',
    role: 'UX Researcher & Evaluator',
    client: 'Proyek Pengabdian Komunitas Komputama',
    image: '/src/assets/images/project_siakad_dashboard_1793696493161.jpg',
    summary: 'Riset evaluasi pengalaman pengguna terhadap portal administrasi kelurahan berbasis metode Heuristic Evaluation Nielsen Norman Group dan kuesioner System Usability Scale.',
    problem: 'Warga lansia dan masyarakat awam kesulitan mengurus surat keterangan daring karena hierarki navigasi yang membingungkan dan kontras warna yang tidak memenuhi standar.',
    solution: 'Menyusun daftar temuan masalah usability berprioritas severity rating, kemudian merombak antarmuka dengan pendekatan design system aksesibel (WCAG AA).',
    methodology: 'Nielsen’s 10 Usability Heuristics, System Usability Scale (SUS), Think-Aloud Testing.',
    keyDeliverables: [
      'Laporan Usability Evaluation Severity Matrix',
      'Desain Wireframe & Hi-Fi Redesign Teruji Aksesibilitas',
      'Rekomendasi Alur Navigasi Bertahap (Step Wizard)',
      'Peningkatan Skor SUS dari 52 (F) menjadi 84 (A)',
    ],
    techStack: ['Figma', 'Miro', 'Google Forms', 'Heuristic Evaluation', 'WCAG 2.1'],
    metrics: [
      { label: 'Peningkatan Skor SUS', value: '52 → 84' },
      { label: 'Tingkat Sukses Tugas', value: '94% Responden' },
      { label: 'Temuan Isu Diperbaiki', value: '19 Temuan' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'system-analysis',
    name: 'Analisis & Perancangan Sistem',
    description: 'Metodologi rekayasa kebutuhan, pemodelan proses bisnis, dan dokumentasi arsitektur sistem.',
    skills: [
      { name: 'SDLC (Waterfall & Agile Scrum)', level: 'Mahir', context: 'Diterapkan dalam 5+ studi kasus siklus hidup pengembangan sistem informasi' },
      { name: 'BPMN 2.0 & Flowchart', level: 'Mahir', context: 'Pemodelan alur kerja bisnis lintas divisi secara standar industri' },
      { name: 'DFD & Use Case Diagram', level: 'Mahir', context: 'Dekomposisi fungsional sistem bertingkat dari konteks hingga modul teknis' },
      { name: 'Analisis Kebutuhan (SKPL/SRS)', level: 'Mahir', context: 'Penyusunan dokumen spesifikasi fungsional dan non-fungsional sistem' },
      { name: 'Analisis Kelayakan Sistem (TELOS/PIECES)', level: 'Kompeten', context: 'Evaluasi kelayakan teknis, operasional, dan ekonomi perancangan IT' },
    ],
  },
  {
    id: 'database',
    name: 'Basis Data & Pemodelan Data',
    description: 'Arsitektur data relasional, normalisasi skema, dan optimasi query data terstruktur.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Mahir', context: 'Konfigurasi schema, indexing, constraints integritas referensial' },
      { name: 'Normalisasi Database (1NF-3NF)', level: 'Mahir', context: 'Pencegahan anomali insert, update, delete pada tabel relasional' },
      { name: 'Perancangan ERD (Entity Relationship)', level: 'Mahir', context: 'Pemodelan entitas, kardinalitas relasi, dan kamus data atribut' },
      { name: 'Query SQL Lanjut & Stored Procedures', level: 'Kompeten', context: 'JOIN multi-tabel, aggregasi analitik, trigger, dan view data' },
    ],
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design & Prototyping',
    description: 'Perancangan antarmuka pengguna digital yang berpusat pada kenyamanan dan keterbacaan.',
    skills: [
      { name: 'Figma & Design Systems', level: 'Mahir', context: 'Komponen dinamis, auto-layout, typography scale, token warna terstruktur' },
      { name: 'Wireframing & User Journey Mapping', level: 'Mahir', context: 'Perancangan kerangka alur dari eksplorasi ide kasar hingga visual final' },
      { name: 'Usability Testing & SUS Evaluation', level: 'Kompeten', context: 'Pengujian keterpakaian antarmuka dengan kuesioner dan observasi langsung' },
      { name: 'Prinsip Keterbacaan & WCAG AA', level: 'Mahir', context: 'Penerapan rasio kontras warna standar dan tipografi hierarkis bebas clutter' },
    ],
  },
  {
    id: 'frontend-tools',
    name: 'Pengembangan Web & Perangkat Pendukung',
    description: 'Penerjemahan rancangan desain ke dalam kode antarmuka web yang responsif.',
    skills: [
      { name: 'HTML5, CSS3 & Tailwind CSS', level: 'Mahir', context: 'Pembangunan halaman web modern responsif lintas perangkat desktop & mobile' },
      { name: 'JavaScript & React Dasar', level: 'Kompeten', context: 'Komponen interaktif, state management hooks, dan konsumsi API data' },
      { name: 'Git & GitHub Version Control', level: 'Kompeten', context: 'Kolaborasi kode tim, commit convention, dan branching repositori' },
      { name: 'Draw.io & Microsoft Visio', level: 'Mahir', context: 'Visualisasi diagram teknis arsitektur perangkat lunak' },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'Universitas Komputama',
    degree: 'Sarjana Komputer (S.Kom)',
    field: 'Program Studi Sistem Informasi',
    period: '2023 — Sekarang (Target Kelulusan 2027)',
    status: 'Mahasiswi Aktif (Semester 5)',
    location: 'Cilacap, Jawa Tengah',
    gpa: '3.84 / 4.00',
    description: 'Menempuh pendidikan sarjana dengan fokus utama pada analisis perancangan sistem informasi bisnis, rekayasa basis data relasional, pemodelan tata kelola teknologi informasi, serta implementasi antarmuka digital yang ramah pengguna.',
    coursework: [
      'Analisis & Perancangan Sistem Informasi (Nilai A)',
      'Sistem Manajemen Basis Data & SQL (Nilai A)',
      'Interaksi Manusia dan Komputer (Nilai A)',
      'Pemrograman Web & Aplikasi Bisnis (Nilai A)',
      'Manajemen Proyek Sistem Informasi (Nilai A)',
      'Sistem Informasi Manajemen & ERP (Nilai A)',
    ],
    achievements: [
      'Penerima Apresiasi Mahasiswa Berprestasi Akademik Semester Genap 2024',
      'Anggota Aktif Himpunan Mahasiswa Sistem Informasi (HIMASI) Universitas Komputama',
      'Koordinator Tim Analis Proyek Perancangan SIAKAD Terpadu',
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'System Analysis & Information Systems Modeling',
    issuer: 'Komputama Tech Academy & Certification Center',
    date: 'November 2024',
    credentialId: 'UK-SA-2024-8891',
    category: 'Sistem Informasi',
    skillsLearned: ['UML Modeling', 'BPMN 2.0', 'DFD Leveling', 'SRS Documentation'],
  },
  {
    title: 'Relational Database Design & SQL Optimization',
    issuer: 'National Data Academy',
    date: 'September 2024',
    credentialId: 'NDA-SQL-2024-4102',
    category: 'Basis Data',
    skillsLearned: ['PostgreSQL', 'Database Normalization', 'Complex Queries', 'Indexing'],
  },
  {
    title: 'UI/UX Design Mastery with Figma',
    issuer: 'Digital Creative Lab Indonesia',
    date: 'Juli 2024',
    credentialId: 'DCL-UIUX-7729',
    category: 'Desain Antarmuka',
    skillsLearned: ['Figma Auto-Layout', 'Design Tokens', 'User Journey Mapping', 'Usability Testing'],
  },
  {
    title: 'IT Project Management & Agile Fundamentals',
    issuer: 'Professional IT Competence Center',
    date: 'Maret 2024',
    credentialId: 'PM-AGL-2024-1920',
    category: 'Manajemen TI',
    skillsLearned: ['Scrum Framework', 'Sprint Planning', 'Risk Assessment', 'Trello/Jira Workflows'],
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Oktavia menunjukkan pemahaman analisis kebutuhan sistem yang sangat matang di kelas. Dokumen perancangan DFD dan ERD yang ia susun selalu rapi, komprehensif, dan logis.',
    author: 'Dosen Pembimbing Akademik',
    role: 'Pengajar Mata Kuliah Analisis & Perancangan Sistem',
    organization: 'Universitas Komputama',
  },
  {
    quote: 'Bekerja sama dalam perancangan aplikasi inventaris UMKM dengan Rara sangat menyenangkan. Prototipe Figma buatannya sangat mudah dipahami oleh pemilik usaha yang awam teknologi.',
    author: 'Bagas Prasetyo',
    role: 'Rekan Tim Pengembang & Mahasiswa Komputama',
    organization: 'Proyek Kolaborasi LogiSync',
  },
  {
    quote: 'Hasil audit kemudahan penggunaan website layanan kelurahan dari Oktavia memberikan rekomendasi konkret yang langsung bisa diimplementasikan oleh tim IT kami.',
    author: 'Ahmad S.',
    role: 'Pengelola Sistem Informasi Desa & Komunitas',
    organization: 'Mitra Pengabdian Masyarakat',
  },
];
