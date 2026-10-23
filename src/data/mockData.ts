import {
  User,
  ClassItem,
  ModuleItem,
  LabItem,
  Assignment,
  Submission,
  LKPDItem,
  QuestionItem,
  Announcement,
  AcademicSupervisionRecord,
  MajorItem,
  TeacherClass
} from '../types';
import {
  OFFICIAL_MAJORS,
  INITIAL_EIGHT_CLASSES,
  INITIAL_TEACHER_CLASSES
} from './majorsData';

export { OFFICIAL_MAJORS, INITIAL_EIGHT_CLASSES, INITIAL_TEACHER_CLASSES };

export const INITIAL_USERS: User[] = [
  // 1. Admin
  {
    user_id: 'usr-admin-01',
    username: 'admin',
    email: 'admin@kkalab.sch.id',
    role: 'admin',
    full_name: 'Administrator Utama KKA',
    student_number: 'NIP. 197805122003121001',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },

  // 2. Guru Pengampu Rumpun 1 (DKV, DPIB, TITL, TSM)
  {
    user_id: 'usr-guru-01',
    username: 'budi.kka',
    email: 'budirahayu80@guru.sma.belajar.id',
    role: 'guru',
    full_name: 'Budi Rahayu, S.Kom., M.Kom.',
    student_number: 'NIP. 198004152008011012',
    status: 'active',
    created_at: '2026-07-01T08:30:00Z'
  },

  // 3. Guru Pengampu Rumpun 2 (TKP, TOI, TAV, TKR)
  {
    user_id: 'usr-guru-02',
    username: 'dela.guru',
    email: 'delachaerani@guru.smk.belajar.id',
    role: 'guru',
    full_name: 'Dela Chaerani, M.Si.',
    student_number: 'NIP. 198509202011012008',
    status: 'active',
    created_at: '2026-07-01T08:35:00Z'
  },

  // 4. Siswa Jurusan 1: DKV
  {
    user_id: 'usr-siswa-01',
    username: 'dela.citra',
    email: 'dela.citra@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Dela Citra Lestari',
    student_number: '20261001',
    class_id: 'cls-dkv-1',
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    major: 'Desain Komunikasi Visual',
    status: 'active',
    created_at: '2026-07-15T09:00:00Z'
  },

  // 5. Siswa Jurusan 2: TKP
  {
    user_id: 'usr-siswa-02',
    username: 'farhan.tkp',
    email: 'farhan.prakoso@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Farhan Prakoso',
    student_number: '20261002',
    class_id: 'cls-tkp-1',
    major_id: 'mjr-tkp',
    major_code: 'TKP',
    major: 'Teknik Konstruksi & Perumahan',
    status: 'active',
    created_at: '2026-07-15T09:05:00Z'
  },

  // 6. Siswa Jurusan 3: DPIB
  {
    user_id: 'usr-siswa-03',
    username: 'nadia.dpib',
    email: 'nadia.arisanti@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Nadia Arisanti',
    student_number: '20261003',
    class_id: 'cls-dpib-1',
    major_id: 'mjr-dpib',
    major_code: 'DPIB',
    major: 'Desain Pemodelan & Informasi Bangunan',
    status: 'active',
    created_at: '2026-07-15T09:10:00Z'
  },

  // 7. Siswa Jurusan 4: TOI
  {
    user_id: 'usr-siswa-04',
    username: 'rizki.toi',
    email: 'rizki.kurniawan@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Rizki Kurniawan',
    student_number: '20261004',
    class_id: 'cls-toi-1',
    major_id: 'mjr-toi',
    major_code: 'TOI',
    major: 'Teknik Otomasi Industri',
    status: 'active',
    created_at: '2026-07-15T09:15:00Z'
  },

  // 8. Siswa Jurusan 5: TITL
  {
    user_id: 'usr-siswa-05',
    username: 'hendra.titl',
    email: 'hendra.saputra@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Hendra Saputra',
    student_number: '20261005',
    class_id: 'cls-titl-1',
    major_id: 'mjr-titl',
    major_code: 'TITL',
    major: 'Teknik Instalasi Tenaga Listrik',
    status: 'active',
    created_at: '2026-07-15T09:20:00Z'
  },

  // 9. Siswa Jurusan 6: TAV
  {
    user_id: 'usr-siswa-06',
    username: 'kevin.tav',
    email: 'kevin.pratama@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Kevin Pratama',
    student_number: '20261006',
    class_id: 'cls-tav-1',
    major_id: 'mjr-tav',
    major_code: 'TAV',
    major: 'Teknik Audio Video',
    status: 'active',
    created_at: '2026-07-15T09:25:00Z'
  },

  // 10. Siswa Jurusan 7: TSM
  {
    user_id: 'usr-siswa-07',
    username: 'rio.tsm',
    email: 'rio.aditya@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Rio Aditya',
    student_number: '20261007',
    class_id: 'cls-tsm-1',
    major_id: 'mjr-tsm',
    major_code: 'TSM',
    major: 'Teknik Sepeda Motor',
    status: 'active',
    created_at: '2026-07-15T09:30:00Z'
  },

  // 11. Siswa Jurusan 8: TKR
  {
    user_id: 'usr-siswa-08',
    username: 'bagus.tkr',
    email: 'bagus.wicaksono@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Bagus Wicaksono',
    student_number: '20261008',
    class_id: 'cls-tkr-1',
    major_id: 'mjr-tkr',
    major_code: 'TKR',
    major: 'Teknik Kendaraan Ringan',
    status: 'active',
    created_at: '2026-07-15T09:35:00Z'
  },

  // Akun kompatibilitas versi sebelumnya untuk login lama
  {
    user_id: 'usr-siswa-09',
    username: 'bambang.ak',
    email: 'bambang.setiawan@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Bambang Setiawan',
    student_number: '20261009',
    class_id: 'cls-dkv-1',
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    major: 'Desain Komunikasi Visual',
    status: 'active',
    created_at: '2026-07-15T09:40:00Z'
  },
  {
    user_id: 'usr-siswa-10',
    username: 'reza.tkj',
    email: 'reza.pratama@siswa.belajar.id',
    role: 'siswa',
    full_name: 'Reza Pratama',
    student_number: '20261010',
    class_id: 'cls-toi-1',
    major_id: 'mjr-toi',
    major_code: 'TOI',
    major: 'Teknik Otomasi Industri',
    status: 'active',
    created_at: '2026-07-15T09:45:00Z'
  }
];

export const INITIAL_CLASSES: ClassItem[] = INITIAL_EIGHT_CLASSES;

export const OFFICIAL_MODULES: ModuleItem[] = [
  {
    module_id: 'mod-01',
    sequence: 1,
    title: 'Modul 1: Berpikir Komputasional',
    description: 'Menerapkan penyelesaian masalah kompleks dalam kehidupan sehari-hari dengan 4 pilar berpikir komputasional, analisis 5 Whys, dan integrasi kecerdasan artifisial.',
    iconName: 'Cpu',
    color: 'from-blue-600 to-indigo-700',
    learning_objectives: [
      'Menjelaskan perbedaan masalah sederhana dan masalah kompleks dalam kehidupan sehari-hari.',
      'Menerapkan 4 pilar berpikir komputasional: Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma.',
      'Melakukan analisis akar masalah menggunakan metode 5 Whys pada studi kasus nyata.',
      'Menganalisis dan menyimulasikan rute tercepat berbasis pemodelan graf (node, edge, weight).',
      'Memahami integrasi berpikir komputasional dengan KA melalui 4 siklus: Perception, Data Representation, Reasoning, dan Learning.'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c1-1',
        title: 'A. Penerapan Berpikir Komputasional dalam Masalah Sehari-hari',
        description: 'Memahami apa itu masalah kompleks dan bagaimana dekomposisi mempermudah penanganan masalah yang rumit.',
        keyConcepts: ['Masalah Sederhana vs Kompleks', 'Dekomposisi Masalah', 'Pola Berulang', 'Abstraksi Informasi', 'Algoritma Bertahap'],
        readingMinutes: 8,
        activityCode: 'BK-K10-01',
        activityTitle: 'Observasi & Identifikasi Masalah Lingkungan (Kantin Sekolah)',
        activityType: 'Kelompok',
        activityPrompt: 'Amati lingkungan kantin sekolah. Identifikasi gejala, perkiraan masalah, dan dampaknya (misal antrean panjang karena alur pelayanan tidak efisien).'
      },
      {
        id: 'c1-2',
        title: 'B. Analisis Masalah dengan Metode 5 Whys',
        description: 'Menelusuri akar masalah dengan menanyakan "kenapa" sebanyak 5 kali secara mendalam dan kritis.',
        keyConcepts: ['Metode 5 Whys', 'Berpikir Kritis', 'Akar Masalah (Root Cause)', 'SOP dan Tata Kelola'],
        readingMinutes: 6,
        activityCode: 'BK-K10-02',
        activityTitle: 'Menganalisis Alur Kantin & 5 Whys',
        activityType: 'Kelompok',
        activityPrompt: 'Gunakan metode 5 Whys untuk menemukan akar keterlambatan pelayanan kantin sekolah hingga merumuskan solusi prosedural.'
      },
      {
        id: 'c1-3',
        title: 'C. Simulasi Penentuan Rute Tercepat Rumah ke Sekolah',
        description: 'Memodelkan jalan sebagai graf (node, edge, weight) dan membandingkan rute alternatif menggunakan logika Dijkstra dan A*.',
        keyConcepts: ['Pemodelan Graf', 'Node/Simpul Persimpangan', 'Edge/Ruas Jalan', 'Weight/Bobot Waktu', 'Algoritma Dijkstra & A*'],
        readingMinutes: 10,
        activityCode: 'BK-K10-05',
        activityTitle: 'Simulasi Menentukan Rute Tercepat ke Sekolah',
        activityType: 'Mandiri',
        activityPrompt: 'Buat model graf dari rumah ke sekolah dengan minimal 3 rute alternatif, hitung waktu tempuh dengan kondisi macet dan lampu lalu lintas.'
      },
      {
        id: 'c1-4',
        title: 'D. Integrasi Kecerdasan Artifisial dalam Berpikir Komputasional',
        description: 'Memahami 4 siklus kerja KA: Perception (sensor/API), Data Representation (graf berbobot), Reasoning (algoritma pencarian), dan Learning (prediksi pola historis).',
        keyConcepts: ['Perception (Sensorik & API)', 'Data Representation (Graf & Time Series)', 'Reasoning (Logika & Aturan)', 'Learning (Machine Learning & Umpan Balik)'],
        readingMinutes: 12,
        activityCode: 'BK-K10-06',
        activityTitle: 'Penyelesaian Masalah Kompleks Berbasis KA Terintegrasi',
        activityType: 'Kelompok',
        activityPrompt: 'Pilih satu tema (pengelolaan sampah, rekomendasi buku, kegiatan ekstrakurikuler, pencegahan perundungan, hemat air) dan rumuskan 4 siklus KA.'
      }
    ],
    vocabulary: [
      { term: 'Berpikir Komputasional', definition: 'Metode menyelesaikan masalah kompleks dengan menata masalah menjadi bagian kecil, mengenali pola, memilah informasi penting, dan menyusun langkah sistematis.' },
      { term: 'Dekomposisi', definition: 'Memecah masalah atau sistem yang besar dan rumit menjadi bagian-bagian yang lebih kecil dan mudah dikelola.' },
      { term: 'Abstraksi', definition: 'Memusatkan perhatian pada informasi relevan dan mengabaikan detail-detail yang tidak diperlukan.' },
      { term: 'Perception', definition: 'Pengumpulan dan pemrosesan data mentah dari lingkungan melalui sensor atau API untuk memahami situasi nyata.' },
      { term: 'Reasoning', definition: 'Proses pengambilan keputusan secara logis menggunakan aturan atau algoritma berbasis data yang telah terorganisir.' }
    ]
  },
  {
    module_id: 'mod-02',
    sequence: 2,
    title: 'Modul 2: Algoritma dan Pemrograman Lanjut',
    description: 'Menerapkan logika pemrograman, flowchart standar, array, nested if, nested loop, algoritma pencarian & pengurutan, pengenalan Python, C, Java, debugging, serta konsep Machine Learning.',
    iconName: 'Code2',
    color: 'from-cyan-600 to-blue-700',
    learning_objectives: [
      'Memahami bentuk representasi algoritma: naratif, pseudocode, tabel IPO, dan flowchart standar.',
      'Menerapkan struktur data Array, logika Nested If, dan Nested Loop pada kasus nyata.',
      'Melakukan analisis komparasi Sequential Search vs Binary Search, serta Selection Sort vs Insertion Sort.',
      'Menerapkan sistem Rule-Based dan dasar Machine Learning: Decision Tree, Regresi Linear (y = a + bx), K-Means Clustering, dan Naive Bayes.',
      'Memahami sintaks dasar pemrograman berbasis teks (Python, C, Java) dan melakukan teknik debugging (syntax, logic, runtime error).'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c2-1',
        title: 'A. Algoritma Dasar & Implementasi Flowchart',
        description: 'Menyusun alur keputusan, simbol flowchart (Terminator, Input/Output, Process, Decision, Connector), dan sequence logic.',
        keyConcepts: ['Pseudocode', 'Tabel IPO', 'Simbol Flowchart', 'Sequence Logic', 'Decision Branching'],
        readingMinutes: 10,
        activityCode: 'AP-K10-03',
        activityTitle: 'Membuat Flowchart Menghitung Nilai Rata-Rata',
        activityType: 'Mandiri',
        activityPrompt: 'Buat flowchart untuk menghitung rata-rata 3 mata pelajaran dengan alur input, proses penjumlahan dan pembagian, serta output kelulusan.'
      },
      {
        id: 'c2-2',
        title: 'B. Algoritma Terstruktur: Array, Nested If & Nested Loop',
        description: 'Mendeklarasikan array berindeks mulai dari 0, evaluasi keputusan bertingkat, dan iterasi di dalam iterasi.',
        keyConcepts: ['Array berindeks 0', 'Operasi Array', 'Nested If (Kondisi Bertingkat)', 'Nested Loop (Tabel Perkalian)'],
        readingMinutes: 10,
        activityCode: 'AP-K10-07',
        activityTitle: 'Membuat Algoritma Kelulusan dengan Nested If',
        activityType: 'Mandiri',
        activityPrompt: 'Tentukan kelulusan siswa berdasarkan nilai ujian (min 75) dan kehadiran (min 80%), dengan aturan dispensasi jika nilai 70-74 namun kehadiran > 90%.'
      },
      {
        id: 'c2-3',
        title: 'C. Algoritma Pencarian & Pengurutan Data',
        description: 'Menganalisis kinerja Linear Search vs Binary Search, dan Selection Sort vs Insertion Sort beserta jumlah perbandingan.',
        keyConcepts: ['Sequential / Linear Search', 'Binary Search (Data Terurut)', 'Selection Sort (Tukar Minimum)', 'Insertion Sort (Geser & Sisip)'],
        readingMinutes: 12,
        activityCode: 'AP-K10-08',
        activityTitle: 'Simulasi Pengurutan Data Array Step-by-Step',
        activityType: 'Berpasangan',
        activityPrompt: 'Lakukan pelacakan manual langkah demi langkah Selection Sort pada array [15, 25, 13, 5, 30, 40, 7].'
      },
      {
        id: 'c2-4',
        title: 'D. Algoritma Rule-Based & Pengenalan Machine Learning',
        description: 'Membandingkan aturan manual dengan model pembelajaran mesin: Decision Tree, Regresi Linear (y = a + bx), K-Means, dan Naive Bayes.',
        keyConcepts: ['Sistem Berbasis Aturan (Rule-Based)', 'Decision Tree (Root, Decision, Leaf)', 'Regresi Linear (Slope & Intercept)', 'K-Means Clustering', 'Teorema Naive Bayes'],
        readingMinutes: 15,
        activityCode: 'AP-K10-09',
        activityTitle: 'Prediksi Data & Pengelompokan Klaster Hobi',
        activityType: 'Mandiri',
        activityPrompt: 'Hitung prediksi berat badan berdasarkan tinggi badan dengan rumus regresi, dan klasterisasi hobi teman berdasarkan kedekatan jarak Pythagoras.'
      },
      {
        id: 'c2-5',
        title: 'E. Pemrograman Teks & Analisis Kesalahan (Debugging)',
        description: 'Perbandingan sintaks Python, C, Java, cara membaca pesan kesalahan compiler/interpreter, dan 3 jenis bug.',
        keyConcepts: ['Karakteristik Python, C, Java', 'Syntax Error', 'Logic Error (Hasil Keliru)', 'Runtime Error (Division by Zero, TypeError)', 'Teknik Print Debugging'],
        readingMinutes: 14,
        activityCode: 'AP-K10-10',
        activityTitle: 'Analisis dan Debugging Potongan Kode Program',
        activityType: 'Mandiri',
        activityPrompt: 'Temukan dan perbaiki syntax error pada baris input nilai ujian serta runtime error TypeError pada Python.'
      }
    ],
    vocabulary: [
      { term: 'Binary Search', definition: 'Algoritma pencarian efisien yang membagi dua rentang data terurut secara berulang untuk menemukan nilai target.' },
      { term: 'Selection Sort', definition: 'Algoritma pengurutan yang mencari elemen terkecil pada array belum terurut lalu menukarnya ke posisi awal.' },
      { term: 'Linear Regression', definition: 'Metode prediksi hubungan sebab-akibat antara variabel bebas X dan variabel terikat Y melalui persamaan y = a + bx.' },
      { term: 'K-Means Clustering', definition: 'Algoritma pembelajaran mesin tanpa label untuk mengelompokkan data berdasarkan jarak terdekat terhadap titik pusat (sentroid).' },
      { term: 'Debugging', definition: 'Proses mendeteksi, mengisolasi, dan memperbaiki galat (bug) pada kode sumber perangkat lunak.' }
    ]
  },
  {
    module_id: 'mod-03',
    sequence: 3,
    title: 'Modul 3: Literasi dan Etika Kecerdasan Artifisial',
    description: 'Mengenal pola citra & suara, profesi masa depan di bidang KA, standar kompetensi UNESCO 2024, dampak sosial teknologi, serta regulasi dan etika nasional (SE Kominfo No 9/2023).',
    iconName: 'ShieldAlert',
    color: 'from-amber-600 to-orange-700',
    learning_objectives: [
      'Menjelaskan mekanisme pengenalan pola citra (piksel, kontur, warna) dan suara (frekuensi, tempo, pitch) oleh sistem KA.',
      'Mengenal 5 profesi kunci KA: Data Scientist, ML Engineer, AI Research Scientist, Robotics Engineer, dan AI Ethics Specialist.',
      'Memahami kerangka kerja UNESCO AI Competency Framework (2024) dan kurikulum internasional ACM/IEEE/AAAI.',
      'Menganalisis dampak positif (efisiensi, inovasi, personalisasi) dan dampak negatif (ancaman kerja, bias, privasi, hoaks).',
      'Memahami pedoman Etika KA Indonesia (SE Menkominfo No. 9 Tahun 2023) dan merumuskan Kode Etik Siswa di sekolah.'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c3-1',
        title: 'A. Pengenalan Pola Citra dan Suara oleh Komputer',
        description: 'Bagaimana komputer mengekstraksi fitur visual (bentuk, tekstur, kontur) dan pola akustik (amplitudo, frekuensi, timbre).',
        keyConcepts: ['Pattern Recognition', 'Fitur Citra Digital', 'Pola Suara & Frekuensi', 'Optical Character Recognition (OCR)', 'Speech Recognition (ASR)'],
        readingMinutes: 8,
        activityCode: 'LEKA-K10-01',
        activityTitle: 'Klasifikasi Pola Citra & Eksperimen Quick Draw',
        activityType: 'Mandiri',
        activityPrompt: 'Identifikasi pola garis visual yang membuat sistem cerdas dapat membedakan objek gambar sederhana secara real-time.'
      },
      {
        id: 'c3-2',
        title: 'B. Profesi dan Spektrum Karier di Bidang Kecerdasan Artifisial',
        description: 'Tugas mendalam Data Scientist, Machine Learning Engineer, AI Research Scientist, Robotics Engineer, dan AI Ethics Specialist.',
        keyConcepts: ['Data Scientist (Arsitek Data)', 'ML Engineer (Pelatih Model)', 'AI Research Scientist (Peneliti Algoritma)', 'AI Robotics Engineer', 'AI Ethics Specialist'],
        readingMinutes: 12,
        activityCode: 'LEKA-K10-07',
        activityTitle: 'Pemetaan Peran Profesi KA pada Kasus Nyata',
        activityType: 'Kelompok',
        activityPrompt: 'Tentukan profesi mana yang paling memegang peranan vital pada perancangan robot pengantar makanan atau sistem rekrutmen kerja yang adil.'
      },
      {
        id: 'c3-3',
        title: 'C. Keterampilan Abad 21 & Standar Kerangka UNESCO (2024)',
        description: '4 Dimensi UNESCO: Human-Centred Mindset, Ethics of AI, AI Techniques & Applications, dan AI System Design.',
        keyConcepts: ['UNESCO AI Framework 2024', 'Human-Centred Mindset', 'Ethics by Design', 'Upskilling & Reskilling', 'Literasi Kritis Digital'],
        readingMinutes: 10,
        activityCode: 'LEKA-K10-08',
        activityTitle: 'Roleplay Simulasi Karier Masa Depan KA',
        activityType: 'Kelompok',
        activityPrompt: 'Perankan salah satu profesi KA di depan kelas, jelaskan kontribusi konkret serta keterampilan yang wajib dipersiapkan sejak kelas X.'
      },
      {
        id: 'c3-4',
        title: 'D. Dampak dan Regulasi Etika KA di Indonesia',
        description: 'Kajian Surat Edaran Menkominfo No 9 Tahun 2023: Inklusivitas, Aksesibilitas, Keamanan & Privasi, Kemanusiaan, Kredibilitas, dan Akuntabilitas.',
        keyConcepts: ['Bias Algoritmik', 'Deepfake & Disinformasi', 'Perlindungan Data Pribadi', 'SE Kominfo No 9/2023', 'Kode Etik Siswa Pengguna KA'],
        readingMinutes: 12,
        activityCode: 'LEKA-K10-14',
        activityTitle: 'Perumusan Kode Etik Penggunaan KA di Sekolah',
        activityType: 'Kelompok',
        activityPrompt: 'Susun 5 butir aturan etis penggunaan AI dalam kegiatan pembelajaran kelas X untuk mencegah plagiarisme dan menjaga kejujuran akademik.'
      }
    ],
    vocabulary: [
      { term: 'AI Ethics Specialist', definition: 'Ahli yang bertanggung jawab mengaudit dan memastikan pengembangan sistem KA adil, transparan, dan tidak melanggar hak asasi.' },
      { term: 'Filter Bubble', definition: 'Isolasi intelektual ketika algoritma rekomendasi hanya menyajikan konten yang disukai sehingga mempersempit sudut pandang pengguna.' },
      { term: 'SE Kominfo No. 9/2023', definition: 'Surat Edaran Menteri Komunikasi dan Informatika tentang pedoman etika penggunaan kecerdasan artifisial bagi pelaku industri dan masyarakat Indonesia.' },
      { term: 'Human-Centred Mindset', definition: 'Pendekatan yang menempatkan manusia sebagai pengendali utama dan pihak yang bertanggung jawab atas keputusan teknologi kecerdasan artifisial.' }
    ]
  },
  {
    module_id: 'mod-04',
    sequence: 4,
    title: 'Modul 4: Integrasi Prompt Engineering dan Design Thinking pada KA',
    description: 'Menguasai seni menyusun instruksi untuk Large Language Models (LLM), kerangka PGTC, pencegahan bias, serta 5 siklus Design Thinking untuk merancang solusi nyata.',
    iconName: 'Sparkles',
    color: 'from-emerald-600 to-teal-700',
    learning_objectives: [
      'Memahami cara kerja Large Language Model (LLM) dalam memprediksi urutan kata dan menghasilkan konten generatif.',
      'Menerapkan klasifikasi prompt: Zero-Shot, One-Shot, Few-Shot, Direct, Role-Playing, Inverse, Contextual, dan Multi-Turn.',
      'Menyusun prompt terstruktur menggunakan kerangka kerja PGTC (Persona, Goal, Task, Context).',
      'Mengidentifikasi dan memitigasi bias dataset, bias algoritma, dan bias pengguna (framing/confirmation bias).',
      'Menerapkan 5 tahap Design Thinking: Empathize, Define, Ideate, Prototype, dan Test untuk memecahkan persoalan sehari-hari.'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c4-1',
        title: 'A. Cara Kerja LLM & Ragam Pendekatan Prompt Engineering',
        description: 'Mengapa kualitas prompt menentukan output model, dan perbedaan mendasar Zero-Shot, One-Shot, dan Few-Shot prompting.',
        keyConcepts: ['Prediksi Token LLM', 'Zero-Shot (Tanpa Contoh)', 'One-Shot (Contoh Tunggal)', 'Few-Shot (Beberapa Contoh Acuan)', 'Verifikasi Jawaban Model'],
        readingMinutes: 10,
        activityCode: 'PR-K10-01',
        activityTitle: 'Uji Coba Ketepatan Zero-Shot Prompting',
        activityType: 'Mandiri',
        activityPrompt: 'Uji perintah langsung dan hitung validitas fakta jawaban model untuk menghindari halusinasi atau informasi keliru.'
      },
      {
        id: 'c4-2',
        title: 'B. Teknik Penyusunan Prompt & Kerangka Kerja PGTC',
        description: 'Direct Prompt, Role-Playing, Inverse Prompt, Contextual, serta komponen Persona, Goal, Task, dan Context.',
        keyConcepts: ['Direct vs Contextual Prompt', 'Role-Playing Prompt', 'Inverse Prompting', 'Formula PGTC (Persona, Goal, Task, Context)'],
        readingMinutes: 10,
        activityCode: 'PR-K10-02',
        activityTitle: 'Role Prompting: Bermain Peran Ahli dengan KA',
        activityType: 'Kelompok',
        activityPrompt: 'Susun prompt dengan persona guru sejarah, dokter anak, dan programmer untuk topik Revolusi Industri, bandingkan gaya bahasanya.'
      },
      {
        id: 'c4-3',
        title: 'C. Bias Kecerdasan Artifisial & Penyebabnya',
        description: 'Mengenal bias representasi, bias sampling, bias label, bias algoritma, serta bias konfirmasi dari pengguna.',
        keyConcepts: ['Bias Dataset', 'Bias Algoritma', 'Bias Pengguna (Framing Bias)', 'Dampak Diskriminasi Rekrutmen/Absensi'],
        readingMinutes: 8,
        activityCode: 'PR-K10-03',
        activityTitle: 'Analisis Studi Kasus Bias pada Sistem Deteksi Wajah',
        activityType: 'Kelompok',
        activityPrompt: 'Diskusikan mengapa sistem absensi wajah sering gagal mengenali pengguna berkacamata atau etnis tertentu dan temukan solusinya.'
      },
      {
        id: 'c4-4',
        title: 'D. Perancangan Sistem Berbasis Design Thinking',
        description: 'Menerapkan 5 tahapan: Empathize (wawancara empati), Define (rumuskan masalah), Ideate (timbang analogi), Prototype (kode/kartu), dan Test.',
        keyConcepts: ['Empathize (Dengar Aktif)', 'Define (Problem Statement)', 'Ideate (Brainstorm Solusi)', 'Prototype (Alat Peraga / Program)', 'Test (Umpan Balik Pengguna)'],
        readingMinutes: 14,
        activityCode: 'PR-K10-04',
        activityTitle: 'Merancang Puisi Digital / Solusi Pembelajaran via Design Thinking',
        activityType: 'Kelompok',
        activityPrompt: 'Rancang prototipe program atau media edukasi untuk teman sekelas yang kesulitan belajar menggunakan 5 tahap Design Thinking.'
      }
    ],
    vocabulary: [
      { term: 'Prompt Engineering', definition: 'Seni merancang instruksi input yang presisi agar model kecerdasan artifisial memberikan jawaban yang akurat, terstruktur, dan sesuai tujuan.' },
      { term: 'PGTC Framework', definition: 'Struktur formulasi prompt yang memuat Persona (peran), Goal (tujuan akhir), Task (tugas spesifik), dan Context (latar belakang kondisi).' },
      { term: 'Design Thinking', definition: 'Pendekatan pemecahan masalah berpusat pada manusia (human-centered) yang bersifat iteratif untuk menghasilkan inovasi yang relevan.' },
      { term: 'Bias Representasi', definition: 'Ketidakseimbangan data pelatihan yang didominasi oleh kelompok tertentu sehingga kinerja model menurun pada kelompok minoritas.' }
    ]
  },
  {
    module_id: 'mod-05',
    sequence: 5,
    title: 'Modul 5: Kreativitas dan Etika Produksi Konten Media Sosial',
    description: 'Konsep 5 elemen multimedia, Undang-Undang Hak Cipta No. 28/2014, 6 lisensi Creative Commons, proses produksi digital dengan Canva/AI, dan keamanan jejak digital.',
    iconName: 'Video',
    color: 'from-purple-600 to-indigo-800',
    learning_objectives: [
      'Memahami pengertian multimedia dan 5 elemennya: teks, foto/grafis, audio, video, dan animasi.',
      'Menjelaskan UU No. 28 Tahun 2014 tentang Hak Cipta dan UU No. 20 Tahun 2016 tentang Lisensi Digital.',
      'Membedakan 6 jenis lisensi Creative Commons (CC BY, CC BY-SA, CC BY-ND, CC BY-NC, CC BY-NC-SA, CC BY-NC-ND).',
      'Menerapkan etika produksi konten: menghindari plagiarisme, pelanggaran privasi, cyberbullying, dan disinformasi.',
      'Menguasai teknik visual pengambilan video (Eye Level, High/Low Angle, Over the Shoulder, Bird/Frog Eye) dan perlindungan jejak digital.'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c5-1',
        title: 'A. Konsep dan Elemen Dasar Multimedia',
        description: 'Etimologi multi dan media, peranan teks, foto vs grafis, audio/suara, video dinamis, dan ilusi animasi.',
        keyConcepts: ['Definisi Multimedia', 'Foto (Objek Nyata) vs Grafis (Ilustrasi)', 'Audio & Efek Suara', 'Animasi & Alur Waktu'],
        readingMinutes: 8,
        activityCode: 'MM-K10-01',
        activityTitle: 'Diskusi Elemen Multimedia dalam Komunikasi Efektif',
        activityType: 'Kelompok',
        activityPrompt: 'Diskusikan mengapa video edukasi pendek di media sosial lebih mudah dipahami dibanding teks panjang di buku catatan.'
      },
      {
        id: 'c5-2',
        title: 'B. Hak Cipta dan 6 Varian Lisensi Creative Commons',
        description: 'Prinsip deklaratif UU No. 28/2014, lisensi eksklusif vs noneksklusif, serta aturan atribusi karya cipta digital.',
        keyConcepts: ['UU Hak Cipta No 28/2014', 'Lisensi Digital UU No 20/2016', 'CC BY (Atribusi)', 'CC BY-SA (Share Alike)', 'CC BY-NC (Non-Komersial)', 'CC BY-ND (No Derivative)'],
        readingMinutes: 10,
        activityCode: 'MM-K10-03',
        activityTitle: 'Pembuatan Mind Map Lisensi Digital & Hak Cipta',
        activityType: 'Berpasangan',
        activityPrompt: 'Buat bagan perbandingan hak cipta dan 6 jenis lisensi Creative Commons beserta contoh penerapannya bagi karya siswa.'
      },
      {
        id: 'c5-3',
        title: 'C. Etika Produksi Konten & Perlindungan Privasi',
        description: 'Etika sebagai kompas moral, persetujuan rekaman, bahaya pembajakan audio, dan penanganan cyberbullying.',
        keyConcepts: ['Kompas Moral Kreator', 'Persetujuan Rekam (Consent)', 'Bahaya Plagiarisme', 'Etika Berbagi Karya Teman'],
        readingMinutes: 8,
        activityCode: 'MM-K10-04',
        activityTitle: 'Analisis Kasus Pelanggaran Hak Cipta Video Viral',
        activityType: 'Mandiri',
        activityPrompt: 'Kaji kasus konten kreator yang menggunakan video rekaman guru atau musik berhak cipta tanpa izin di media sosial.'
      },
      {
        id: 'c5-4',
        title: 'D. Teknik Produksi Konten, Sudut Kamera & Keamanan Jejak Digital',
        description: 'Sudut kamera (Eye Level, High Angle, Low Angle, Over the Shoulder, Bird/Frog Eye), watermark, dan audit jejak digital diri sendiri.',
        keyConcepts: ['6 Sudut Kamera Sinematik', 'Fitur AI Voice & AI Captions Canva', 'Watermark Kepemilikan', 'Audit Jejak Digital', 'Pengaturan Privasi Akun'],
        readingMinutes: 12,
        activityCode: 'MM-K10-07',
        activityTitle: 'Detektif Jejak Digital: Audit Profil Maya Pribadi',
        activityType: 'Mandiri',
        activityPrompt: 'Lakukan penelusuran nama diri sendiri di mesin pencari dan evaluasi konten mana yang perlu dibersihkan demi masa depan.'
      }
    ],
    vocabulary: [
      { term: 'Creative Commons (CC)', definition: 'Sistem lisensi hak cipta publik yang memudahkan pencipta memberikan izin pemanfaatan karya dengan syarat terstandarisasi.' },
      { term: 'Jejak Digital', definition: 'Rekaman aktivitas atau data historis yang ditinggalkan seseorang saat menjelajah dan berinteraksi di dunia digital.' },
      { term: 'Over the Shoulder', definition: 'Sudut pengambilan kamera dari belakang bahu seseorang yang lazim digunakan untuk menggambarkan percakapan dua orang.' },
      { term: 'Watermark', definition: 'Tanda visual atau logo semi-transparan yang dibubuhkan pada dokumen atau gambar untuk menandai hak kepemilikan cipta.' }
    ]
  },
  {
    module_id: 'mod-06',
    sequence: 6,
    title: 'Modul 6: Pengelolaan Informasi Digital',
    description: 'Piramida DIKW, basis data relasional vs NoSQL, entitas & atribut (PK/FK), kardinalitas relasi, perintah SQL (DML, DDL, DCL), serta olah data spreadsheet & Pivot Table.',
    iconName: 'Database',
    color: 'from-teal-600 to-cyan-800',
    learning_objectives: [
      'Menjelaskan perbedaan data dan informasi melalui kerangka Piramida DIKW (Data, Information, Knowledge, Wisdom).',
      'Membedakan jenis basis data: Relasional (RDBMS), NoSQL, Berbasis Cloud, dan Terdistribusi.',
      'Merancang tabel data relasional dengan Primary Key (PK), Foreign Key (FK), dan kardinalitas (1:1, 1:N, N:M).',
      'Menulis dan menjalankan perintah SQL dasar: CREATE TABLE, INSERT INTO, SELECT WHERE, ORDER BY, dan UPDATE di phpMyAdmin.',
      'Mengolah data spreadsheet menggunakan formula AVERAGE, MAX, MIN, COUNTIF, dan merangkum informasi dengan Pivot Table.'
    ],
    status: 'active',
    chapters: [
      {
        id: 'c6-1',
        title: 'A. Data, Informasi & Piramida DIKW',
        description: 'Memahami bagaimana data mentah diproses menjadi informasi bermakna, pengetahuan mendalam, hingga keputusan bijaksana.',
        keyConcepts: ['Data Mentah vs Informasi Terolah', 'Data Primer vs Sekunder', 'Data Terstruktur vs Tidak Terstruktur', 'Piramida DIKW'],
        readingMinutes: 8,
        activityCode: 'BD-K10-02',
        activityTitle: 'Analisis Pemilihan Ekstrakurikuler dengan Piramida DIKW',
        activityType: 'Kelompok',
        activityPrompt: 'Olah data jadwal, minat, dan waktu luang menjadi keputusan bijaksana dalam memilih ekstrakurikuler sekolah.'
      },
      {
        id: 'c6-2',
        title: 'B. Jenis-Jenis Basis Data & Konsep Relasional',
        description: 'Karakteristik RDBMS, NoSQL dokumen, Cloud database, dan teknologi terdistribusi (replikasi, mirroring, data warehouse).',
        keyConcepts: ['Basis Data Relasional', 'Basis Data NoSQL', 'Cloud Database', 'Replikasi & Mirroring Server'],
        readingMinutes: 10,
        activityCode: 'BD-K10-03',
        activityTitle: 'Eksplorasi 4 Peran Pengelola Basis Data',
        activityType: 'Kelompok',
        activityPrompt: 'Pahami peran Database Administrator, Database Designer, Application Developer, dan End-User dalam sistem informasi sekolah.'
      },
      {
        id: 'c6-3',
        title: 'C. Struktur Tabel, Entitas, Atribut, PK, FK & Kardinalitas',
        description: 'Membedakan field/kolom, record/baris, tabel referensi vs transaksi, Primary Key unik, dan relasi antartabel.',
        keyConcepts: ['Record vs Field', 'Primary Key (PK) & NIK/NIS', 'Foreign Key (FK) Sebagai Jembatan', 'Kardinalitas 1:1, 1:N, N:M', 'Tabel Referensi & Transaksi'],
        readingMinutes: 12,
        activityCode: 'BD-K10-06',
        activityTitle: 'Analisis Relasi Tabel Peminjaman Buku Perpustakaan',
        activityType: 'Mandiri',
        activityPrompt: 'Identifikasi siswa peminjam buku dari tabel transaksi peminjaman melalui foreign key NIS yang terhubung ke tabel induk siswa.'
      },
      {
        id: 'c6-4',
        title: 'D. Dasar Perintah SQL di phpMyAdmin & Server Lokal',
        description: 'Menjalankan DDL (CREATE DATABASE, CREATE TABLE) dan DML (INSERT INTO, SELECT WHERE, ORDER BY, UPDATE) di server lokal Apache/MySQL.',
        keyConcepts: ['Server Lokal (Apache, MySQL, Node.js)', 'DDL (CREATE, ALTER, DROP)', 'DML (INSERT, SELECT, UPDATE, DELETE)', 'Sintaks SQL Standar'],
        readingMinutes: 14,
        activityCode: 'BD-K10-07',
        activityTitle: 'Praktikum Membuat Database & Tabel db_perpustakaan',
        activityType: 'Mandiri',
        activityPrompt: 'Ketik perintah SQL CREATE TABLE buku dengan kolom id_buku, judul, penulis, penerbit, tahun dan masukkan 4 data buku.'
      },
      {
        id: 'c6-5',
        title: 'E. Pengolahan Data Dasar Spreadsheet & Analisis Pivot Table',
        description: 'Mengolah data nilai dan kehadiran menggunakan AVERAGE, MIN, MAX, COUNTIF, dan membuat Pivot Table dua dimensi.',
        keyConcepts: ['Rumus Spreadsheet (AVERAGE, MAX, MIN)', 'Fungsi Logika COUNTIF', 'Visualisasi Bar & Pie Chart', 'Pivot Table Dimensi Baris & Kolom'],
        readingMinutes: 12,
        activityCode: 'BD-K10-12',
        activityTitle: 'Penyusunan Pivot Table Komparasi Nilai Siswa',
        activityType: 'Kelompok',
        activityPrompt: 'Buat tabel pivot untuk membandingkan rata-rata nilai matematika siswa putra dan putri di kelas X dengan tepat.'
      }
    ],
    vocabulary: [
      { term: 'Piramida DIKW', definition: 'Model hierarki yang menggambarkan transformasi dari Data mentah menjadi Informasi berkonteks, Pengetahuan aplikatif, dan Kebijaksanaan keputusan.' },
      { term: 'Primary Key (PK)', definition: 'Kolom unik dalam tabel basis data yang membedakan satu baris data (record) dari baris lainnya dan tidak boleh bernilai kosong.' },
      { term: 'Foreign Key (FK)', definition: 'Kolom yang menjadi kunci tamu untuk mereferensikan Primary Key dari tabel referensi lain, membentuk relasi data.' },
      { term: 'Pivot Table', definition: 'Fitur interaktif pada lembar sebar (spreadsheet) untuk merangkum, mengelompokkan, dan menganalisis kumpulan data besar secara cepat.' }
    ]
  }
];

export const OFFICIAL_LABS: LabItem[] = [
  {
    lab_id: 'lab-01',
    module_id: 'mod-01',
    title: 'Lab 1: Berpikir Komputasional — Rute Tercepat & 5 Whys',
    lab_type: 'graph_route_and_5whys',
    description: 'Simulasikan penentuan rute tercepat dari rumah ke sekolah dengan memanipulasi bobot jarak, kemacetan, dan cuaca berbasis graf Dijkstra/A*, serta pecahkan masalah menggunakan 5 Whys.',
    instructions: [
      'Pilih titik awal Rumah (R) dan tujuan Sekolah (S).',
      'Atur kondisi waktu keberangkatan (jam sibuk vs normal) dan cuaca (cerah vs hujan lebat).',
      'Perhatikan bagaimana bobot pada setiap ruas jalan (edge) berubah secara dinamis.',
      'Jalankan algoritma pencarian rute tercepat untuk membandingkan rute Jalur 1 (R-A-S), Jalur 2 (R-B-C-S), dan Jalur 3 (R-D-E-F-S).',
      'Tuliskan refleksi hasil praktikum dan simpan laporan ke portofolio belajarmu.'
    ],
    difficulty: 'Pemula',
    targetMajors: ['Semua Jurusan', 'Teknik', 'Logistik', 'SMA Umum'],
    reflectionQuestions: [
      'Mengapa rute yang lebih pendek secara jarak fisik belum tentu memiliki waktu tempuh tercepat saat jam sibuk?',
      'Bagaimana cara kerja dekomposisi dan abstraksi dalam membantu merumuskan rute alternatif?'
    ],
    status: 'active'
  },
  {
    lab_id: 'lab-02',
    module_id: 'mod-02',
    title: 'Lab 2: Algoritma, Flowchart & Machine Learning Classifier',
    lab_type: 'algorithm_sorting_and_ml',
    description: 'Bangun logika pemrograman melalui visualisasi flowchart interaktif, jalankan simulasi Selection vs Insertion Sort, serta uji coba algoritma K-Means hobi & Naive Bayes klasifikasi buah.',
    instructions: [
      'Bagian 1: Uji coba Flowchart logika kelulusan siswa (Nilai >= 70 Lulus vs Tidak Lulus).',
      'Bagian 2: Bandingkan jumlah operasi perbandingan pada Selection Sort dan Insertion Sort untuk array angka.',
      'Bagian 3: Jalankan model Naive Bayes untuk memprediksi buah berdasarkan warna dan rasa (Apel, Jeruk, Anggur) sesuai data buku hal. 69-70.',
      'Bagian 4: Simulasikan sentroid K-Means clustering untuk mengelompokkan minat hobi teman.'
    ],
    difficulty: 'Menengah',
    targetMajors: ['Semua Jurusan', 'Akuntansi', 'Bisnis Daring', 'Teknologi Informasi'],
    reflectionQuestions: [
      'Kapan Binary Search lebih unggul daripada Linear Search, dan mengapa data wajib diurutkan terlebih dahulu?',
      'Bagaimana rumus Teorema Bayes memanfaatkan probabilitas prior dan bersyarat untuk menentukan klasifikasi buah baru?'
    ],
    status: 'active'
  },
  {
    lab_id: 'lab-03',
    module_id: 'mod-02',
    title: 'Lab 3: Pemrograman & Debugging Studio',
    lab_type: 'code_and_debugging',
    description: 'Tulis dan amati jalannya kode pemrograman dasar dalam Python, C, dan Java. Lakukan deteksi serta perbaikan kesalahan sintaks, logika, dan runtime error secara interaktif.',
    instructions: [
      'Pilih bahasa pemrograman yang ingin dipelajari (Python, C, atau Java).',
      'Pilih skenario kode yang mengandung bug (Syntax Error titik koma/salah ketik, Logic Error pengurangan bukan penjumlahan, Runtime Error division by zero atau TypeError).',
      'Jalankan kode untuk melihat pesan diagnostik error interpreter.',
      'Gunakan fitur panduan debugging untuk memperbaiki baris kode hingga berhasil dieksekusi dengan hasil yang benar.'
    ],
    difficulty: 'Menengah',
    targetMajors: ['Semua Jurusan', 'RPL / TKJ', 'Teknik Elektronika', 'SMA MIPA'],
    reflectionQuestions: [
      'Mengapa kesalahan logika (logic error) sering kali lebih sulit dideteksi dibandingkan kesalahan sintaks (syntax error)?',
      'Apa fungsi dari teknik print debugging saat melacak aliran nilai variabel dalam program?'
    ],
    status: 'active'
  },
  {
    lab_id: 'lab-04',
    module_id: 'mod-03',
    title: 'Lab 4: Pengenalan Pola & Audit Etika Kecerdasan Artifisial',
    lab_type: 'pattern_recognition_and_ethics',
    description: 'Eksperimen ekstraksi fitur pola citra dan suara, simulasikan pelatihan klasifikasi Teachable Machine sederhana, dan lakukan audit bias dataset pelatihan sistem KA.',
    instructions: [
      'Pilih mode pengenalan: Pola Citra (Bentuk, Warna, Tekstur) atau Pola Suara (Frekuensi, Pitch, Tempo).',
      'Uji coba bagaimana sistem membedakan pola gambar daun vs botol plastik pada simulasi pemilahan sampah sekolah.',
      'Gunakan fitur Audit Bias untuk melihat dampak ketidakseimbangan dataset pelatihan pada akurasi deteksi wajah.',
      'Identifikasi kelompok pengguna mana yang berpotensi dirugikan jika dataset pelatihan tidak representatif.'
    ],
    difficulty: 'Pemula',
    targetMajors: ['Semua Jurusan', 'DKV', 'Layanan Kesehatan', 'Kriya Seni', 'SMA Umum'],
    reflectionQuestions: [
      'Mengapa dataset pelatihan yang tidak seimbang dapat menyebabkan kecerdasan artifisial berperilaku diskriminatif?',
      'Bagaimana sekolah dapat menerapkan sistem pengenalan pola untuk mendukung program Adiwiyata (pemilahan sampah)?'
    ],
    status: 'active'
  },
  {
    lab_id: 'lab-05',
    module_id: 'mod-04',
    title: 'Lab 5: Prompt Engineering Studio & Design Thinking Canvas',
    lab_type: 'prompt_builder_and_design_thinking',
    description: 'Rancang prompt berkinerja tinggi menggunakan kerangka PGTC (Persona, Goal, Task, Context), bandingkan Zero-Shot vs Few-Shot, dan selesaikan tantangan dengan kanvas 5 tahap Design Thinking.',
    instructions: [
      'Bagian 1: Bangun prompt terstruktur menggunakan formula PGTC dengan memilih Persona ahli, Goal capaian, Task terperinci, dan Context situasi siswa.',
      'Bagian 2: Bandingkan respons model KA pada mode Zero-Shot vs Few-Shot dengan contoh format terstandar.',
      'Bagian 3: Isi kanvas 5 tahap Design Thinking (Empathize, Define, Ideate, Prototype, Test) untuk memecahkan masalah pembelajaran aljabar atau puisi digital.',
      'Simpan draf kanvas solusi untuk dijadikan lampiran tugas LKPD.'
    ],
    difficulty: 'Menengah',
    targetMajors: ['Semua Jurusan', 'Pemasaran', 'Manajemen Perkantoran', 'Seni Budaya', 'SMA Bahasa'],
    reflectionQuestions: [
      'Bagaimana penetapan Persona spesifik mempengaruhi kedalaman dan gaya bahasa dari jawaban kecerdasan artifisial?',
      'Mengapa tahap Empathize menjadi langkah pertama yang mutlak sebelum merancang prototipe teknologi?'
    ],
    status: 'active'
  },
  {
    lab_id: 'lab-06',
    module_id: 'mod-06',
    title: 'Lab 6: Basis Data Digital & SQL Studio',
    lab_type: 'database_sql_and_pivot',
    description: 'Praktikkan perancangan tabel relasional (Primary Key & Foreign Key), jalankan perintah SQL (CREATE, INSERT, SELECT WHERE, UPDATE), dan lakukan analisis data dengan Pivot Table.',
    instructions: [
      'Jalankan perintah SQL DDL untuk membuat tabel db_perpustakaan.buku dengan atribut id_buku, judul, penulis, penerbit, tahun.',
      'Tambahkan record baru menggunakan perintah SQL INSERT INTO.',
      'Gunakan query SELECT dengan filter kondisi WHERE dan pengurutan ORDER BY.',
      'Amati keterhubungan antara tabel induk (Tabel Buku/Siswa) dengan tabel transaksi (Peminjaman) lewat Foreign Key.',
      'Gunakan fitur Pivot Table interaktif untuk menganalisis perbandingan nilai siswa antar jurusan.'
    ],
    difficulty: 'Tantangan Lanjutan',
    targetMajors: ['Semua Jurusan', 'Akuntansi', 'Bisnis Daring', 'Teknologi Informasi', 'Administrasi'],
    reflectionQuestions: [
      'Apa kegunaan utama dari Foreign Key dalam menjaga konsistensi data transaksi tanpa perlu menduplikasi data induk?',
      'Bagaimana Pivot Table membantu wali kelas atau kepala sekolah mengambil keputusan kebijakan akademik lebih cepat?'
    ],
    status: 'active'
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  // 1. Cakupan Semua Jurusan (all_classes)
  {
    assignment_id: 'asg-01',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    target_classes: ['cls-dkv-1', 'cls-tkp-1', 'cls-dpib-1', 'cls-toi-1', 'cls-titl-1', 'cls-tav-1', 'cls-tsm-1', 'cls-tkr-1'],
    scope_type: 'all_classes',
    target_majors: ['*'],
    module_id: 'mod-01',
    title: 'Tugas Terbuka: Analisis 5 Whys & Dekomposisi Solusi Sekolah',
    instructions: 'Terapkan metode 5 Whys untuk menemukan akar masalah di lingkungan sekolah kejuruanmu. Buat diagram dekomposisi masalah dan usulkan algoritma solusi 4 langkah.',
    assignment_type: 'Uraian',
    is_group: false,
    start_at: '2026-10-10T07:00:00Z',
    due_at: '2026-10-25T23:59:00Z',
    weight: 20,
    max_score: 100,
    status: 'published',
    publish_grades: true,
    allow_discussion_view: true,
    rubric: [
      { id: 'r1', name: 'Pemahaman Konsep & Dekomposisi', weight: 25, description: 'Ketepatan mengurai masalah kompleks menjadi sub-masalah logis' },
      { id: 'r2', name: 'Ketepatan Analisis 5 Whys', weight: 25, description: 'Kedalaman penelusuran akar masalah tanpa asumsi tergesa-gesa' },
      { id: 'r3', name: 'Logika Algoritma Solusi', weight: 25, description: 'Kejelasan urutan langkah penyelesaian yang terukur dan aplikatif' },
      { id: 'r4', name: 'Koneksi dengan Program Adiwiyata', weight: 25, description: 'Relevansi solusi dengan kepedulian lingkungan sekolah' }
    ]
  },

  // 2. Cakupan Jurusan Tertentu (single_class: DKV)
  {
    assignment_id: 'asg-02',
    teacher_id: 'usr-guru-01',
    class_id: 'cls-dkv-1',
    target_classes: ['cls-dkv-1'],
    scope_type: 'single_class',
    target_majors: ['DKV'],
    project_id: 'prj-dkv-01',
    module_id: 'mod-02',
    title: 'LKPD Praktikum: Audit Kontras Aksesibilitas WCAG & Flowchart Warna (DKV)',
    instructions: 'Selesaikan lembar kerja peserta didik digital mengenai audit kontras teks terhadap latar belakang poster puskesmas dan susun flowchart verifikasi kepatuhan rasio 4.5:1.',
    assignment_type: 'LKPD Digital',
    is_group: false,
    start_at: '2026-10-12T07:00:00Z',
    due_at: '2026-10-28T23:59:00Z',
    weight: 25,
    max_score: 100,
    status: 'published',
    publish_grades: true,
    allow_discussion_view: true,
    rubric: [
      { id: 'r1', name: 'Ketepatan Simbol Flowchart', weight: 30, description: 'Penggunaan simbol terminator, input/output, proses, dan keputusan sesuai standar' },
      { id: 'r2', name: 'Analisis Komparasi Algoritma', weight: 40, description: 'Ketelitian penghitungan jumlah perbandingan dan pemahaman efisiensi' },
      { id: 'r3', name: 'Refleksi Pembelajaran Bermakna', weight: 30, description: 'Kejujuran refleksi diri dan rencana tindak lanjut belajar mandiri' }
    ]
  },

  // 3. Cakupan Beberapa Jurusan (multiple_classes: TSM dan TKR Rumpun Otomotif)
  {
    assignment_id: 'asg-03',
    teacher_id: 'usr-guru-02',
    class_id: 'cls-tsm-1',
    target_classes: ['cls-tsm-1', 'cls-tkr-1'],
    scope_type: 'multiple_classes',
    target_majors: ['TSM', 'TKR'],
    project_id: 'prj-tsm-01',
    module_id: 'mod-03',
    title: 'Praktikum Komputasi Otomotif: Pohon Keputusan Diagnosis Starter & Rem ABS',
    instructions: 'Buat pohon keputusan (Decision Tree) terstruktur untuk mendiagnosis kelistrikan starter motor dan kalkulasi jarak pengereman aman kendaraan ringan.',
    assignment_type: 'Praktikum',
    is_group: false,
    start_at: '2026-10-14T07:00:00Z',
    due_at: '2026-11-05T23:59:00Z',
    weight: 25,
    max_score: 100,
    status: 'published',
    publish_grades: true,
    allow_discussion_view: true,
    rubric: [
      { id: 'r1', name: 'Keruntutan Logika Pohon Keputusan', weight: 35, description: 'Kelengkapan cabang kondisi voltase aki, switch rem, dan relay' },
      { id: 'r2', name: 'Akurasi Pengolahan Data Telemetri', weight: 35, description: 'Kebenaran interpretasi data numerik sensor kendaraan' },
      { id: 'r3', name: 'Keselamatan Kerja Virtual (K3)', weight: 30, description: 'Kepatuhan prosedur keselamatan tanpa risiko sengatan/mekanis' }
    ]
  },

  // 4. Cakupan Proyek Lintas Jurusan (cross_major: DKV + DPIB + TOI)
  {
    assignment_id: 'asg-04',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    target_classes: ['cls-dkv-1', 'cls-dpib-1', 'cls-toi-1'],
    scope_type: 'cross_major',
    target_majors: ['DKV', 'DPIB', 'TOI'],
    module_id: 'mod-05',
    title: 'Proyek Lintas Jurusan: Rancang Bangun Dashboard Smart Building & Kontrol Otomasi',
    instructions: 'Kolaborasi antarsiswa: Siswa DPIB merancang tata letak denah, siswa TOI memprogram logika sensor konveyor/lampu, dan siswa DKV merancang UI antarmuka dashboard ramah pengguna.',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-10-16T07:00:00Z',
    due_at: '2026-11-15T23:59:00Z',
    weight: 30,
    max_score: 100,
    status: 'published',
    publish_grades: true,
    allow_discussion_view: true,
    rubric: [
      { id: 'r1', name: 'Integrasi Lintas Disiplin Kejuruan', weight: 30, description: 'Sinergi desain arsitektur, otomatisasi sensor, dan antarmuka visual' },
      { id: 'r2', name: 'Penerapan Berpikir Komputasional & Algoritma', weight: 30, description: 'Dekomposisi sistem dan logika algoritma otomasi' },
      { id: 'r3', name: 'Kerja Tim & Portofolio Bersama', weight: 20, description: 'Pembagian peran yang jelas dan dokumentasi laporan terstruktur' },
      { id: 'r4', name: 'Etika & Hak Kekayaan Intelektual', weight: 20, description: 'Pemberian atribusi lisensi CC dan orisinalitas karya' }
    ]
  }
];

export const INITIAL_SUBMISSIONS: Submission[] = [
  {
    submission_id: 'sub-01',
    assignment_id: 'asg-01',
    student_id: 'usr-siswa-01',
    student_name: 'Dela Citra Lestari',
    student_nis: '20261001',
    class_id: 'cls-dkv-1',
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    answer: 'Dekomposisi Masalah Sampah di Sekolah:\n1. Jenis Sampah: Sampah plastik kemasan kantin (70%), sisa makanan organik (20%), kertas/tisu ruang kelas (10%).\n2. Analisis 5 Whys:\n- Kenapa sampah menumpuk di selokan? Karena banyak siswa membuang bungkus plastik sembarangan saat istirahat.\n- Kenapa siswa membuang sembarangan? Karena tempat sampah terdekat penuh dan tidak terpilah.\n- Kenapa tempat sampah cepat penuh? Karena semua jenis sampah dicampur jadi satu tanpa pemadatan.\n- Kenapa tidak dipilah? Karena belum ada tempat sampah terpisah berlabel jelas warna merah, kuning, dan hijau di koridor.\n- Kenapa belum ada sistem pemilahan? Karena belum ada SOP tata kelola bank sampah sekolah dan edukasi etika lingkungan terpadu.\n\nAlgoritma Solusi:\nLangkah 1: Pengadaan tempat sampah 3 warna (Organik, Plastik, Residu) di setiap kelas.\nLangkah 2: Kampanye poster digital Adiwiyata tentang pemilahan sampah.\nLangkah 3: Penerapan jadwal piket pemilahan oleh pengurus kelas.\nLangkah 4: Penimbangan dan penyaluran sampah plastik ke bank sampah mitra daur ulang setiap Jumat.',
    submitted_at: '2026-10-14T14:20:00Z',
    status: 'Sudah Dinilai',
    score: 95,
    feedback: 'Analisis 5 Whys sangat tajam dan runtut hingga ke tingkat SOP sekolah! Algoritma solusi sangat aplikatif dan mendukung program Adiwiyata sekolah kita. Pertahankan daya nalar kritis yang luar biasa ini, Dela!',
    rubric_scores: {
      r1: 24,
      r2: 25,
      r3: 23,
      r4: 23
    },
    graded_by: 'Budi Rahayu, S.Kom., M.Kom.',
    graded_at: '2026-10-15T09:30:00Z'
  },
  {
    submission_id: 'sub-02',
    assignment_id: 'asg-02',
    project_id: 'prj-dkv-01',
    student_id: 'usr-siswa-01',
    student_name: 'Dela Citra Lestari',
    student_nis: '20261001',
    class_id: 'cls-dkv-1',
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    answer: 'Hasil pengerjaan LKPD Digital Algoritma Kontras Warna DKV:\n1. Flowchart Kelulusan Kontras telah dibuat dengan flowchart builder menggunakan simbol Terminator Oval, Input RGB teks dan background, Process kalkulasi Luminansi Relatif L1 dan L2, serta Decision rasio >= 4.5.\n2. Dari sampel poster Puskesmas, warna teks abu-abu (#94A3B8) di atas putih (#FFFFFF) hanya menghasilkan rasio kontras 2.4:1 (GAGAL WCAG). Direkomendasikan mengganti teks menjadi Slate 800 (#1E293B) dengan rasio 12.6:1 (LOLOS WCAG AAA).\n3. Refleksi: Berpikir komputasional membantu saya mengukur estetika dengan sains dan angka pasti agar poster inklusif bagi penderita low vision.',
    submitted_at: '2026-10-15T06:45:00Z',
    status: 'Terkirim'
  },
  {
    submission_id: 'sub-03',
    assignment_id: 'asg-03',
    project_id: 'prj-tsm-01',
    student_id: 'usr-siswa-07',
    student_name: 'Rio Aditya',
    student_nis: '20261007',
    class_id: 'cls-tsm-1',
    major_id: 'mjr-tsm',
    major_code: 'TSM',
    answer: 'Laporan Praktikum Pohon Keputusan Starter Motor TSM:\n1. Dekomposisi Sistem Starter: Aki (sumber arus), Sakelar Kunci Kontak, Sakelar Standar Samping, Sakelar Rem Depan/Belakang, Tombol Starter, Relay Starter, dan Motor Starter.\n2. Alur Pohon Keputusan:\n   - Apakah voltase aki >= 12.4V? Jika TIDAK -> Cas/Ganti Aki.\n   - Jika YA, apakah standar samping dinaikkan? Jika TIDAK -> Naikkan standar samping.\n   - Jika YA, apakah tuas rem ditarik? Jika TIDAK -> Sakelar rem putus/tarik rem.\n   - Jika YA, apakah relay berbunyi klik? Jika TIDAK -> Periksa sekring dan tombol starter.\n   - Jika relay klik tapi dinamo diam -> Periksa kabel massa atau sikat arang dinamo starter aus.\n3. Refleksi: Pendekatan algoritmik menghemat waktu diagnosis mekanik di bengkel resmi tanpa tebak-tebak komponen.',
    submitted_at: '2026-10-16T11:20:00Z',
    status: 'Terkirim'
  }
];

export const INITIAL_LKPDS: LKPDItem[] = [
  {
    lkpd_id: 'lkpd-01',
    module_id: 'mod-01',
    title: 'LKPD Digital 1: Penerapan Berpikir Komputasional & 5 Whys Lingkungan',
    learning_objectives: [
      'Mengidentifikasi masalah kompleks di lingkungan sekolah.',
      'Menerapkan teknik 5 Whys untuk menelusuri akar penyebab masalah.',
      'Merancang algoritma solusi dalam 4 langkah sistematis.'
    ],
    starter_problem: 'Di lingkungan sekolahmu, antrean kantin saat jam istirahat sangat panjang hingga banyak siswa terlambat masuk ke kelas pada jam pelajaran berikutnya.',
    instructions: 'Bacalah permasalahan pemantik dengan saksama, lalu isi seluruh tabel pengamatan, pertanyaan analisis, kesimpulan, dan refleksi pada lembar kerja digital ini.',
    tools_needed: ['Buku Teks KKA Bab 1', 'Simulasi Lab 1', 'Catatan Observasi'],
    questions: [
      {
        id: 'q1',
        question: 'Tuliskan hasil dekomposisi masalah antrean kantin (faktor petugas, fasilitas, metode pembayaran, jam sibuk).',
        placeholder: 'Uraikan bagian-bagian kecil penyebab antrean...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Tuliskan analisis metode 5 Whys dari gejala utama "Pelayanan di kantin lambat".',
        placeholder: '1. Kenapa? Karena...\n2. Kenapa? Karena...\n3. Kenapa? Karena...\n4. Kenapa? Karena...\n5. Kenapa? Karena...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Abstraksikan informasi penting dan abaikan hal tidak relevan, lalu susun algoritma solusi terstruktur.',
        placeholder: 'Langkah 1: ...\nLangkah 2: ...\nLangkah 3: ...\nLangkah 4: ...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Tuliskan kesimpulan dan refleksi diri: Bagaimana berpikir komputasional mengubah caramu menghadapi masalah rumit?',
        placeholder: 'Refleksi saya...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-02',
    module_id: 'mod-06',
    title: 'LKPD Digital 2: Perancangan Basis Data Relasional & Query Perpustakaan',
    learning_objectives: [
      'Membedakan entitas, atribut, record, dan field pada model relasi.',
      'Menentukan Primary Key dan Foreign Key untuk menghubungkan tabel induk dan transaksi.',
      'Menulis perintah query SQL dasar untuk pencarian data.'
    ],
    starter_problem: 'Perpustakaan sekolah kesulitan melacak siapa peserta didik yang belum mengembalikan buku karena pencatatan manual sering hilang atau dobel.',
    instructions: 'Rancang dua tabel relasional (Tabel Buku dan Tabel Peminjaman) dan tuliskan sintaks SQL yang tepat.',
    tools_needed: ['Buku Teks KKA Bab 6', 'SQL Studio Lab 6', 'phpMyAdmin Emulator'],
    questions: [
      {
        id: 'q1',
        question: 'Tentukan Primary Key pada Tabel Peserta Didik dan Tabel Buku, serta Foreign Key pada Tabel Peminjaman.',
        placeholder: 'PK Tabel Peserta Didik = ...\nPK Tabel Buku = ...\nFK Tabel Peminjaman = ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Tuliskan sintaks SQL untuk membuat tabel buku (id_buku, judul, penulis, penerbit, tahun).',
        placeholder: 'CREATE TABLE db_perpustakaan.buku (\n  ...\n);',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Tuliskan query SELECT untuk menampilkan semua buku karya penulis "Tasaro GK" diurutkan dari tahun terbaru.',
        placeholder: 'SELECT * FROM ... WHERE ... ORDER BY ...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Refleksi: Mengapa duplikasi data (redudansi) berbahaya dalam sistem basis data sekolah?',
        placeholder: 'Tuliskan penjelasan logis...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  }
];

export const INITIAL_QUESTION_BANK: QuestionItem[] = [
  // Modul 1
  {
    question_id: 'q-m1-01',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Andi membagi masalah rute sekolah menjadi bagian kecil: waktu keberangkatan, rute jalan, dan kondisi lalu lintas. Kemudian mengenali jam sibuk, mengabaikan warna gedung, dan menyusun langkah sistematis. Urutan teknik berpikir komputasional yang dilakukan Andi adalah...',
    options: [
      'Abstraksi → Pengenalan Pola → Algoritma → Dekomposisi',
      'Dekomposisi → Pengenalan Pola → Abstraksi → Algoritma',
      'Pengenalan Pola → Dekomposisi → Algoritma → Abstraksi',
      'Algoritma → Abstraksi → Dekomposisi → Pengenalan Pola',
      'Dekomposisi → Abstraksi → Pengenalan Pola → Algoritma'
    ],
    answer_key: 'Dekomposisi → Pengenalan Pola → Abstraksi → Algoritma',
    explanation: 'Andi memulai dengan memecah masalah (dekomposisi), membaca tren jam sibuk (pengenalan pola), menyaring info tak penting (abstraksi), dan membuat alur langkah rute (algoritma).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-02',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Siti selalu mengalami kemacetan setiap hari Senin pagi saat berangkat ke sekolah. Ia pun menyadari bahwa hari dan jam tertentu lebih macet dibanding hari lain. Hal ini merupakan contoh penerapan pilar...',
    options: ['Abstraksi', 'Algoritma', 'Dekomposisi', 'Pengenalan Pola', 'Berpikir Kritis'],
    answer_key: 'Pengenalan Pola',
    explanation: 'Melihat tren keberulangan bahwa hari Senin pagi lebih macet merupakan kemampuan mengenali pola (pattern recognition).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-03',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Pada sistem rekomendasi rute otonom yang mengintegrasikan kecerdasan artifisial, sistem mengumpulkan data cuaca real-time dari BMKG dan sensor CCTV lalu lintas. Dalam 4 kategori integrasi KA, proses ini termasuk tahap...',
    options: ['Reasoning', 'Perception (Sensory)', 'Data Representation', 'Learning', 'Algoritma'],
    answer_key: 'Perception (Sensory)',
    explanation: 'Perception (sensory) merujuk pada pengumpulan dan pemrosesan data mentah dari lingkungan melalui sensor CCTV, GPS, dan API lalu lintas/cuaca.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-04',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Sebuah sistem KA merekomendasikan rute alternatif melalui jalan lingkungan pada pukul 06.30 karena berdasarkan data historis 3 bulan terakhir jalan arteri selalu macet total pada jam tersebut. Aspek integrasi KA yang bekerja adalah...',
    options: ['Perception', 'Data Representation', 'Reasoning', 'Learning', 'Sensory'],
    answer_key: 'Learning',
    explanation: 'Learning memungkinkan sistem belajar dari pola data historis waktu tempuh masa lalu untuk memperbarui dan meningkatkan akurasi prediksi rute masa depan.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // Modul 2
  {
    question_id: 'q-m2-01',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Simbol belah ketupat (diamond) pada bagan alir (flowchart) standar pemrograman berfungsi untuk...',
    options: [
      'Menandakan awal atau akhir program (Terminator)',
      'Melakukan operasi perhitungan matematis (Process)',
      'Menerima input atau mencetak output (Input/Output)',
      'Pengambilan keputusan atau pemeriksaan kondisi logika (Decision)',
      'Menghubungkan alur pada halaman yang berbeda (Connector)'
    ],
    answer_key: 'Pengambilan keputusan atau pemeriksaan kondisi logika (Decision)',
    explanation: 'Simbol belah ketupat digunakan untuk pengondisian (Decision) yang memiliki dua atau lebih cabang luaran seperti Ya/Tidak.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-02',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Diberikan array A = [10, 2, 30, 4]. Berapakah hasil dari operasi penjumlahan elemen A[1] + A[3] jika indeks array dimulai dari 0?',
    options: ['12', '32', '6', '14', '34'],
    answer_key: '6',
    explanation: 'A[0]=10, A[1]=2, A[2]=30, A[3]=4 (atau jika sesuai teks A[1]=2 dan elemen ke-4 adalah 4, maka 2 + 4 = 6).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-03',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Program dijalankan tanpa pesan error oleh compiler, namun hasil perhitungan gaji karyawan menghasilkan angka minus yang tidak sesuai rumus. Jenis kesalahan yang terjadi adalah...',
    options: ['Syntax Error', 'Logic Error', 'Runtime Error', 'Compilation Error', 'Division by Zero'],
    answer_key: 'Logic Error',
    explanation: 'Logic error terjadi ketika program berhasil dieksekusi tanpa error teknis namun logika perhitungannya keliru sehingga menghasilkan output salah.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-04',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Pada model klasifikasi Naive Bayes untuk menentukan jenis buah (Apel, Jeruk, Anggur) dengan data baru (Ukuran = Kecil, Rasa = Manis), hasil probabilitas P(databaru|Anggur) adalah 0,22, sementara Apel 0,072 dan Jeruk 0. Kesimpulan prediksi sistem adalah...',
    options: [
      'Buah tersebut adalah Jeruk karena bernilai 0',
      'Buah tersebut adalah Apel karena ukuran kecil sering identik dengan apel malang',
      'Buah tersebut adalah Anggur karena memiliki nilai probabilitas tertinggi (0,22)',
      'Model tidak dapat memprediksi karena probabilitas kurang dari 1',
      'Sistem memerlukan kalibrasi ulang regresi linear'
    ],
    answer_key: 'Buah tersebut adalah Anggur karena memiliki nilai probabilitas tertinggi (0,22)',
    explanation: 'Sesuai algoritma Naive Bayes, kelas dengan probabilitas posterior tertinggi dipilih sebagai hasil keputusan akhir (buku hal. 70-71).',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // Modul 3
  {
    question_id: 'q-m3-01',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Profesi di bidang KA yang bertanggung jawab untuk memastikan bahwa pengembangan sistem cerdas tidak memuat bias diskriminatif, menjaga privasi data, serta berpihak pada nilai kemanusiaan adalah...',
    options: ['Machine Learning Engineer', 'Data Scientist', 'AI Ethics Specialist', 'Robotics Engineer', 'Cloud Architect'],
    answer_key: 'AI Ethics Specialist',
    explanation: 'AI Ethics Specialist bertugas mengaudit etika, dampak sosial, privasi, dan kepatuhan regulasi dalam sistem kecerdasan artifisial.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-02',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Surat Edaran Menteri Komunikasi dan Informatika No. 9 Tahun 2023 mengatur pedoman etika kecerdasan artifisial di Indonesia dengan memuat nilai-nilai utama, di antaranya...',
    options: [
      'Monopoli teknologi, komersialisasi bebas, dan kerahasiaan tertutup',
      'Inklusivitas, Aksesibilitas, Keamanan & Privasi, Kemanusiaan, Kredibilitas, dan Akuntabilitas',
      'Penghapusan profesi manual secara wajib dan otomatisasi penuh tanpa intervensi',
      'Kebebasan mutlak pencipta tanpa kewajiban mencantumkan label konten buatan AI',
      'Pelarangan penggunaan AI pada seluruh jenjang pendidikan menengah'
    ],
    answer_key: 'Inklusivitas, Aksesibilitas, Keamanan & Privasi, Kemanusiaan, Kredibilitas, dan Akuntabilitas',
    explanation: 'SE Kominfo No. 9/2023 menetapkan 6 nilai panduan etis kecerdasan artifisial yang selaras dengan nilai-nilai Pancasila (buku hal. 136-137).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },

  // Modul 4
  {
    question_id: 'q-m4-01',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Pada teknik prompt engineering, pengguna memberikan instruksi kepada model KA tanpa menyertakan contoh masukan-keluaran sama sekali. Teknik ini disebut...',
    options: ['Few-Shot Prompting', 'One-Shot Prompting', 'Zero-Shot Prompting', 'Inverse Prompting', 'Chain of Thought'],
    answer_key: 'Zero-Shot Prompting',
    explanation: 'Zero-shot prompting adalah teknik ketika model KA diberikan instruksi langsung tanpa diberi contoh sebelumnya (buku hal. 149-150).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-02',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Dalam kerangka kerja PGTC untuk perumusan prompt yang efektif, huruf "T" dan "C" merepresentasikan...',
    options: [
      'Target dan Condition',
      'Task (tugas spesifik yang diminta) dan Context (latar belakang/situasi)',
      'Topic dan Category',
      'Template dan Constraint',
      'Testing dan Correction'
    ],
    answer_key: 'Task (tugas spesifik yang diminta) dan Context (latar belakang/situasi)',
    explanation: 'Formula PGTC terdiri atas Persona (peran), Goal (tujuan), Task (tugas spesifik), dan Context (latar belakang).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },

  // Modul 5
  {
    question_id: 'q-m5-01',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Jenis lisensi Creative Commons yang memperbolehkan orang lain menggunakan dan memodifikasi karyamu, asalkan karya turunan tersebut dibagikan kembali dengan lisensi yang sama, adalah...',
    options: ['CC BY-ND', 'CC BY-NC', 'CC BY-SA', 'CC BY-NC-ND', 'Domain Publik'],
    answer_key: 'CC BY-SA',
    explanation: 'CC BY-SA (Share Alike / Berbagi Serupa) mewajibkan ciptaan turunan dilisensikan dengan ketentuan yang sama (buku hal. 206).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },

  // Modul 6
  {
    question_id: 'q-m6-01',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Pada basis data relasional, sebuah kolom di tabel "Peminjaman" yang mengacu pada nilai Primary Key kolom NIS di tabel induk "Peserta Didik" disebut sebagai...',
    options: ['Candidate Key', 'Foreign Key (Kunci Tamu)', 'Super Key', 'Composite Key', 'Index Key'],
    answer_key: 'Foreign Key (Kunci Tamu)',
    explanation: 'Foreign Key adalah atribut di suatu tabel yang menjadi referensi ke Primary Key tabel lain untuk menghubungkan kedua tabel secara logis (buku hal. 258).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-02',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Perintah SQL berikut yang termasuk dalam kelompok Data Manipulation Language (DML) adalah...',
    options: [
      'CREATE TABLE dan ALTER TABLE',
      'GRANT dan REVOKE',
      'INSERT, UPDATE, dan DELETE',
      'DROP TABLE dan TRUNCATE',
      'CREATE DATABASE dan USE'
    ],
    answer_key: 'INSERT, UPDATE, dan DELETE',
    explanation: 'DML digunakan untuk memanipulasi baris data dalam tabel: INSERT (tambah), UPDATE (ubah), dan DELETE (hapus).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  }
];

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    announcement_id: 'anc-01',
    author_id: 'usr-guru-01',
    author_name: 'Budi Rahayu, S.Kom., M.Kom.',
    target_class: 'all',
    title: 'Selamat Datang di KKA Learning Lab Semester Ganjil 2026/2027',
    message: 'Halo seluruh peserta didik kelas X! Mari kita mulai petualangan belajar koding dan kecerdasan artifisial dengan semangat Deep Learning: Bermakna, Berkesadaran, dan Menggembirakan. Silakan pelajari Modul 1 dan jelajahi Lab Berpikir Komputasional.',
    published_at: '2026-10-10T08:00:00Z',
    status: 'published'
  },
  {
    announcement_id: 'anc-02',
    author_id: 'usr-guru-02',
    author_name: 'Dela Chaerani, M.Si.',
    target_class: 'cls-dkv-1',
    title: 'Pengumpulan Tugas 1: 5 Whys & Jadwal Supervisi Pembelajaran',
    message: 'Pengingat bagi kelas X DKV 1 bahwa tenggat pengumpulan analisis 5 Whys adalah tanggal 25 Oktober. Pastikan kalian telah menguji coba simulasi graf rute tercepat di menu Lab KKA.',
    published_at: '2026-10-13T10:00:00Z',
    status: 'published'
  }
];

export const INITIAL_SUPERVISION_RECORD: AcademicSupervisionRecord = {
  supervision_id: 'spv-2026-001',
  teacher_id: 'usr-guru-01',
  teacher_name: 'Budi Rahayu, S.Kom., M.Kom.',
  subject: 'Koding dan Kecerdasan Artifisial (KKA)',
  class_fase: 'Kelas X / Fase E',
  date: '2026-10-14',
  supervisor: 'SAIDUN, S.Pd., M.M.',
  c1_planning: [
    { no: 1, aspect: 'Tujuan Pembelajaran', indicator: 'Tujuan jelas, sesuai CP Kurikulum Merdeka, menekankan 4C/5C', score: 4 },
    { no: 2, aspect: 'Materi', indicator: 'Materi sesuai konteks nyata dan mendorong keterkaitan lintas disiplin (STEAM)', score: 4 },
    { no: 3, aspect: 'Strategi Deep Learning', indicator: 'Rencana menggunakan pertanyaan mendalam, PjBL/PBL, simulasi bermakna', score: 4 },
    { no: 4, aspect: 'Diferensiasi', indicator: 'Rencana memfasilitasi perbedaan kemampuan, minat, dan gaya belajar murid semua jurusan', score: 4 }
  ],
  c2_execution: [
    { no: 1, aspect: 'Kegiatan Pendahuluan', indicator: 'Membuka dengan motivasi, menghubungkan pengalaman murid, pertanyaan pemantik', score: 4 },
    { no: 2, aspect: 'Interaksi Guru-Murid', indicator: 'Guru memfasilitasi bukan mendominasi, memberi ruang eksplorasi ide murid', score: 4 },
    { no: 3, aspect: 'Aktivitas Murid', indicator: 'Murid aktif bertanya, berdiskusi, berpikir kritis, dan menyelesaikan masalah nyata', score: 3 },
    { no: 4, aspect: 'Kolaborasi', indicator: 'Ada kerja kelompok, Peer Learning, atau kolaborasi lintas tema', score: 4 },
    { no: 5, aspect: 'Pemanfaatan Teknologi & Sumber Belajar', indicator: 'Guru menggunakan media digital KKA Learning Lab yang mendukung Deep Learning', score: 4 }
  ],
  c3_deep_learning_5c: [
    { no: 1, aspect: 'Critical Thinking', indicator: 'Guru menstimulasi murid dengan pertanyaan tingkat tinggi (HOTS)', score: 4 },
    { no: 2, aspect: 'Creativity', indicator: 'Murid menghasilkan produk/ide baru dari pembelajaran', score: 4 },
    { no: 3, aspect: 'Collaboration', indicator: 'Terjadi interaksi positif antar murid dalam menyelesaikan tugas/proyek', score: 4 },
    { no: 4, aspect: 'Communication', indicator: 'Murid mampu menyampaikan gagasan secara lisan/tulisan dengan baik', score: 3 },
    { no: 5, aspect: 'Connection to Real Life', indicator: 'Pembelajaran terhubung dengan isu nyata, lingkungan, atau kehidupan sehari-hari', score: 4 }
  ],
  c4_assessment_reflection: [
    { no: 1, aspect: 'Asesmen Formatif', indicator: 'Digunakan untuk memantau proses, guru memberi umpan balik konstruktif', score: 4 },
    { no: 2, aspect: 'Asesmen Sumatif', indicator: 'Penilaian berbasis proyek, portofolio, presentasi, atau produk nyata', score: 4 },
    { no: 3, aspect: 'Refleksi Guru', indicator: 'Guru melakukan refleksi terhadap proses dan hasil pembelajaran', score: 4 },
    { no: 4, aspect: 'Refleksi Murid', indicator: 'Murid diberi kesempatan merefleksi apa yang dipelajari dan tantangan yang dihadapi', score: 4 }
  ],
  supervisor_notes: {
    planning: 'Modul ajar dirancang sangat komprehensif, mengintegrasikan 6 modul resmi Kemendikdasmen 2025 dengan diferensiasi lintas jurusan SMK dan SMA.',
    execution: 'Pelaksanaan di kelas interaktif dengan pemanfaatan laboratorium digital KKA Learning Lab. Siswa antusias mempraktikkan simulasi rute tercepat dan flowchart.',
    deep_learning: 'Pendekatan 5C tampak menonjol, terutama pada Connection to Real Life melalui studi kasus sampah kantin dan transportasi.',
    assessment: 'Asesmen berbasis rubrik 4 level dan LKPD digital mempermudah pelacakan portofolio siswa secara transparan.'
  },
  followup_recommendations: {
    for_teacher: 'Tingkatkan durasi sesi presentasi kelompok agar aspek Communication semakin terlatih secara lisan.',
    for_student: 'Manfaatkan laboratorium digital mandiri untuk eksplorasi debugging kode sebelum pengumpulan tugas.',
    for_school: 'Dukung kestabilan jaringan laboratorium komputer sekolah dan integrasikan lebih lanjut dengan program Adiwiyata & Gerakan Indonesia ASRI.'
  },
  school_programs: ['Adiwiyata', 'Gerakan Indonesia ASRI', 'Literasi dan Numerasi', 'Gapura Pancawaluya', 'Simpanan Pelajar (SimPel)'],
  status: 'final'
};

export const CODE_GS_TEMPLATE = `/**
 * ============================================================================
 * KKA LEARNING LAB — GOOGLE APPS SCRIPT BACKEND (Code.gs)
 * ============================================================================
 * Backend API untuk menghubungkan aplikasi web KKA Learning Lab dengan Google Sheets.
 * Database: Google Spreadsheet dengan 16 Sheet terstandar.
 * 
 * CARA DEPLOY:
 * 1. Buka Google Sheets baru di Google Drive Anda.
 * 2. Klik menu 'Ekstensi' > 'Apps Script'.
 * 3. Hapus kode bawaan dan tempel (paste) seluruh kode ini ke 'Code.gs'.
 * 4. Klik ikon Save (Disket).
 * 5. Jalankan fungsi 'setupSpreadsheetDatabase()' sekali untuk membuat otomatis
 *    ke-16 tabel/sheet dan data awal.
 * 6. Klik tombol 'Deploy' (Terapkan) > 'New deployment' (Penerapan baru).
 * 7. Pilih tipe: 'Web app' (Aplikasi web).
 * 8. Konfigurasi:
 *    - Description: KKA Learning Lab API v1.0
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja - agar aplikasi web dapat memanggilnya)
 * 9. Salin Web App URL yang dihasilkan (akhiran /exec) dan tempelkan ke
 *    menu Admin > Pengaturan Google Sheets di aplikasi KKA Learning Lab!
 * ============================================================================
 */

function setupSpreadsheetDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  const tables = [
    { name: "Users", headers: ["user_id", "username", "email", "password_hash", "role", "full_name", "student_number", "class_id", "major", "status", "created_at"] },
    { name: "Classes", headers: ["class_id", "class_name", "grade", "major", "academic_year", "homeroom_teacher_id"] },
    { name: "TeacherClasses", headers: ["assignment_id", "teacher_id", "class_id", "subject", "status"] },
    { name: "Modules", headers: ["module_id", "title", "description", "sequence", "learning_objectives", "status"] },
    { name: "Lessons", headers: ["lesson_id", "module_id", "title", "content", "learning_media", "sequence", "status"] },
    { name: "Labs", headers: ["lab_id", "module_id", "title", "lab_type", "instructions", "configuration", "status"] },
    { name: "Assignments", headers: ["assignment_id", "teacher_id", "class_id", "module_id", "title", "instructions", "assignment_type", "rubric", "start_at", "due_at", "max_score", "status"] },
    { name: "Submissions", headers: ["submission_id", "assignment_id", "student_id", "answer", "file_url", "submitted_at", "status", "score", "feedback", "graded_by", "graded_at"] },
    { name: "LKPD", headers: ["lkpd_id", "module_id", "title", "instructions", "worksheet_schema", "status"] },
    { name: "LKPDResponses", headers: ["response_id", "lkpd_id", "student_id", "response_data", "status", "submitted_at", "score", "feedback"] },
    { name: "QuestionBank", headers: ["question_id", "module_id", "question_type", "question_text", "options", "answer_key", "explanation", "difficulty", "cognitive_level", "status"] },
    { name: "QuizAttempts", headers: ["attempt_id", "quiz_id", "student_id", "answers", "score", "started_at", "submitted_at"] },
    { name: "LabResults", headers: ["result_id", "lab_id", "student_id", "experiment_data", "result_summary", "reflection", "saved_at"] },
    { name: "Progress", headers: ["progress_id", "student_id", "lesson_id", "completion_status", "completion_percentage", "updated_at"] },
    { name: "Announcements", headers: ["announcement_id", "author_id", "target_class", "title", "message", "published_at", "status"] },
    { name: "AuditLogs", headers: ["log_id", "actor_id", "action", "target_type", "target_id", "timestamp", "status"] }
  ];

  tables.forEach(table => {
    let sheet = ss.getSheetByName(table.name);
    if (!sheet) {
      sheet = ss.insertSheet(table.name);
      sheet.appendRow(table.headers);
      sheet.getRange(1, 1, 1, table.headers.length).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
  });

  Logger.log("Berhasil menginisialisasi 16 sheet database KKA Learning Lab!");
}

function doGet(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const action = e.parameter.action || "ping";
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "ping") {
      return jsonResponse({
        success: true,
        message: "KKA Learning Lab Google Apps Script API aktif!",
        spreadsheetTitle: ss.getName(),
        spreadsheetId: ss.getId(),
        timestamp: new Date().toISOString()
      });
    }

    if (action === "getData") {
      const sheetName = e.parameter.sheet;
      if (!sheetName) throw new Error("Parameter 'sheet' wajib diisi.");

      const sheet = ss.getSheetByName(sheetName);
      if (!sheet) throw new Error("Sheet tidak ditemukan: " + sheetName);

      const data = getSheetDataAsJson(sheet);
      return jsonResponse({ success: true, sheet: sheetName, count: data.length, data: data });
    }

    throw new Error("Aksi GET tidak dikenali: " + action);
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(15000);

  try {
    if (!e.postData || !e.postData.contents) {
      throw new Error("Tidak ada data post yang diterima.");
    }

    const payload = JSON.parse(e.postData.contents);
    const action = payload.action;
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "saveSubmission") {
      const sheet = ss.getSheetByName("Submissions");
      const record = payload.data;
      sheet.appendRow([
        record.submission_id || "sub-" + new Date().getTime(),
        record.assignment_id,
        record.student_id,
        record.answer,
        record.file_url || "",
        new Date().toISOString(),
        record.status || "Terkirim",
        record.score || "",
        record.feedback || "",
        record.graded_by || "",
        record.graded_at || ""
      ]);

      logAudit(ss, record.student_id, "SUBMIT_ASSIGNMENT", "Submission", record.assignment_id);
      return jsonResponse({ success: true, message: "Pengumpulan berhasil disimpan ke Google Sheets!" });
    }

    if (action === "gradeSubmission") {
      const sheet = ss.getSheetByName("Submissions");
      const data = sheet.getDataRange().getValues();
      const submissionId = payload.submission_id;
      let rowFound = -1;

      for (let i = 1; i < data.length; i++) {
        if (data[i][0] === submissionId) {
          rowFound = i + 1;
          break;
        }
      }

      if (rowFound > 0) {
        sheet.getRange(rowFound, 7).setValue("Sudah Dinilai"); // status
        sheet.getRange(rowFound, 8).setValue(payload.score); // score
        sheet.getRange(rowFound, 9).setValue(payload.feedback); // feedback
        sheet.getRange(rowFound, 10).setValue(payload.graded_by); // graded_by
        sheet.getRange(rowFound, 11).setValue(new Date().toISOString()); // graded_at

        logAudit(ss, payload.graded_by, "GRADE_SUBMISSION", "Submission", submissionId);
        return jsonResponse({ success: true, message: "Nilai berhasil diperbarui di Google Sheets!" });
      } else {
        throw new Error("Data pengumpulan tidak ditemukan: " + submissionId);
      }
    }

    if (action === "saveLabResult") {
      const sheet = ss.getSheetByName("LabResults");
      const record = payload.data;
      sheet.appendRow([
        record.result_id || "res-" + new Date().getTime(),
        record.lab_id,
        record.student_id,
        JSON.stringify(record.experiment_data || {}),
        record.result_summary || "",
        record.reflection || "",
        new Date().toISOString()
      ]);

      logAudit(ss, record.student_id, "SAVE_LAB_RESULT", "Lab", record.lab_id);
      return jsonResponse({ success: true, message: "Hasil praktikum lab tersimpan di Google Sheets!" });
    }

    throw new Error("Aksi POST tidak dikenali: " + action);
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

function getSheetDataAsJson(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];

  const headers = values[0];
  const rows = values.slice(1);

  return rows.map(row => {
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
}

function logAudit(ss, actorId, action, targetType, targetId) {
  try {
    const sheet = ss.getSheetByName("AuditLogs");
    if (sheet) {
      sheet.appendRow([
        "log-" + new Date().getTime(),
        actorId,
        action,
        targetType,
        targetId,
        new Date().toISOString(),
        "success"
      ]);
    }
  } catch(e) {
    Logger.log("Audit log gagal: " + e.toString());
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
`;
