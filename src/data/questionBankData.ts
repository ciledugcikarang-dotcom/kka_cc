import { QuestionItem } from '../types';

export interface QuestionDistributionBreakdown {
  totalRequested: number;
  lotsCount: number;
  motsCount: number;
  hotsCount: number;
  lotsActualPercent: number;
  motsActualPercent: number;
  hotsActualPercent: number;
  isExactMultipleOfTen: boolean;
  transparencyNote: string;
}

/**
 * Menghitung pembagian proporsi target 50% LOTS, 30% MOTS, 20% HOTS.
 * Untuk jumlah soal yang tidak habis dibagi 10, fungsi ini menggunakan metode
 * Largest Remainder (Metode Hamilton) yang transparan dan terdokumentasi.
 */
export function calculateQuestionDistribution(totalCount: number): QuestionDistributionBreakdown {
  const safeCount = Math.max(1, Math.min(totalCount, 60));
  const isExact = safeCount % 10 === 0;

  // Kuota target teoritis
  const quotaLots = safeCount * 0.5;
  const quotaMots = safeCount * 0.3;
  const quotaHots = safeCount * 0.2;

  // Bagian bulat dasar
  let lots = Math.floor(quotaLots);
  let mots = Math.floor(quotaMots);
  let hots = Math.floor(quotaHots);

  let allocated = lots + mots + hots;
  const deficit = safeCount - allocated;

  // Sisa pecahan untuk dialokasikan berdasarkan sisa terbesar
  const remainders = [
    { type: 'LOTS', remainder: quotaLots - lots },
    { type: 'MOTS', remainder: quotaMots - mots },
    { type: 'HOTS', remainder: quotaHots - hots }
  ].sort((a, b) => b.remainder - a.remainder);

  for (let i = 0; i < deficit; i++) {
    if (remainders[i].type === 'LOTS') lots++;
    else if (remainders[i].type === 'MOTS') mots++;
    else if (remainders[i].type === 'HOTS') hots++;
  }

  // Jaminan minimal 1 soal jika total >= 3
  if (safeCount >= 3) {
    if (lots === 0) lots = 1;
    if (mots === 0) mots = 1;
    if (hots === 0) hots = 1;
    // Sesuaikan agar tetap pas safeCount
    while (lots + mots + hots > safeCount) {
      if (lots > mots && lots > 1) lots--;
      else if (mots > hots && mots > 1) mots--;
      else if (hots > 1) hots--;
    }
  }

  const lotsPercent = Number(((lots / safeCount) * 100).toFixed(1));
  const motsPercent = Number(((mots / safeCount) * 100).toFixed(1));
  const hotsPercent = Number(((hots / safeCount) * 100).toFixed(1));

  let transparencyNote = '';
  if (isExact) {
    transparencyNote = `Distribusi ideal terpenuhi sempurna: ${lots} Soal LOTS (50%), ${mots} Soal MOTS (30%), dan ${hots} Soal HOTS (20%).`;
  } else {
    transparencyNote = `Jumlah ${safeCount} butir soal tidak habis dibagi sepuluh. Menggunakan metode pembulatan kuota sisa terbesar (Hamilton Method) secara transparan: ${lots} LOTS (${lotsPercent}%), ${mots} MOTS (${motsPercent}%), dan ${hots} HOTS (${hotsPercent}%).`;
  }

  return {
    totalRequested: safeCount,
    lotsCount: lots,
    motsCount: mots,
    hotsCount: hots,
    lotsActualPercent: lotsPercent,
    motsActualPercent: motsPercent,
    hotsActualPercent: hotsPercent,
    isExactMultipleOfTen: isExact,
    transparencyNote
  };
}

// ============================================================================
// MASTER BANK SOAL RESMI KKA KELAS X (60 BUTIR SOAL LENGKAP & TERSTANDARISASI)
// Distribusi Total: 30 LOTS (50%), 18 MOTS (30%), 12 HOTS (20%)
// Distribusi per Modul: 5 LOTS, 3 MOTS, 2 HOTS per Modul (10 Soal per Modul)
// ============================================================================
export const OFFICIAL_QUESTION_BANK_60: QuestionItem[] = [
  // ==========================================================================
  // MODUL 1: BERPIKIR KOMPUTASIONAL (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
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
    explanation: 'Andi memulai dengan memecah masalah besar menjadi komponen kecil (Dekomposisi), membaca tren jam sibuk berulang (Pengenalan Pola), menyaring info yang tidak relevan seperti warna gedung (Abstraksi), dan membuat alur langkah rute berurutan (Algoritma).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-02',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Siti menyadari bahwa setiap hari Senin pagi jalan arteri menuju sekolah selalu mengalami kemacetan parah dibanding hari lainnya. Kecakapan Siti mengenali kesamaan peristiwa berulang ini adalah contoh pilar...',
    options: ['Abstraksi', 'Algoritma', 'Dekomposisi', 'Pengenalan Pola', 'Evaluasi Kritis'],
    answer_key: 'Pengenalan Pola',
    explanation: 'Melihat tren keberulangan bahwa hari Senin pagi selalu macet adalah kecakapan mengenali pola (Pattern Recognition).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-03',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Dalam membuat diagram alur perakitan komputer di jurusan TKJ, siswa hanya fokus pada urutan pemasangan prosesor, RAM, dan kabel daya, tanpa mencatat warna baju teknisi yang merakitnya. Tindakan mengabaikan informasi yang tidak penting ini disebut...',
    options: ['Dekomposisi', 'Abstraksi', 'Algoritma', 'Debugging', 'Generalisasi'],
    answer_key: 'Abstraksi',
    explanation: 'Abstraksi adalah proses menyaring dan mengabaikan detail-detail yang tidak relevan dengan esensi penyelesaian masalah.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-04',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Langkah-langkah terstruktur dan logis yang disusun untuk membersihkan karburator motor di bengkel otomotif dari awal hingga selesai dinamakan...',
    options: ['Abstraksi', 'Pola', 'Algoritma', 'Sensori', 'Dataset'],
    answer_key: 'Algoritma',
    explanation: 'Algoritma adalah serangkaian instruksi atau prosedur bertahap yang berurutan, logis, dan terbatas untuk mencapai tujuan tertentu.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-05',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Memecah sistem penjualan toko online sekolah menjadi subsistem login, katalog barang, keranjang belanja, dan pembayaran kasir merupakan contoh nyata dari...',
    options: ['Dekomposisi', 'Abstraksi', 'Pengenalan Pola', 'Algoritma', 'Testing'],
    answer_key: 'Dekomposisi',
    explanation: 'Dekomposisi adalah teknik memecah masalah besar atau sistem yang rumit menjadi bagian-bagian yang lebih kecil dan mudah dikelola.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-06',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Pada sistem pengenalan wajah gerbang sekolah cerdas, kamera menangkap frame gambar siswa dan sensor inframerah membaca suhu tubuh. Dalam 4 siklus integrasi KA, proses penerimaan data mentah ini termasuk tahap...',
    options: ['Reasoning', 'Perception (Sensory)', 'Data Representation', 'Learning', 'Algoritma'],
    answer_key: 'Perception (Sensory)',
    explanation: 'Perception (Sensory) merujuk pada tahap penerimaan masukan data mentah dari lingkungan fisik menggunakan sensor perangkat keras atau API.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-07',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Sebuah sistem logistik sekolah menggunakan metode 5 Whys saat menemukan masalah "Pengiriman paket buku ke perpustakaan terlambat 3 hari". Mengapa metode 5 Whys efektif dalam dekomposisi masalah?',
    options: [
      'Karena langsung menyalahkan pegawai yang bertugas di lapangan',
      'Karena menelusuri rantai sebab-akibat secara mendalam hingga ke level kebijakan SOP',
      'Karena otomatis menulis kode program baru tanpa perlu campur tangan manusia',
      'Karena menghapus seluruh data pengiriman yang terlambat dari basis data',
      'Karena hanya membutuhkan waktu 5 detik untuk menyelesaikan masalah'
    ],
    answer_key: 'Karena menelusuri rantai sebab-akibat secara mendalam hingga ke level kebijakan SOP',
    explanation: 'Metode 5 Whys membantu tim melacak hubungan kausal bertingkat dari gejala di permukaan hingga menemukan akar masalah pada sistem atau SOP.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-08',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Seorang teknisi jaringan menemukan kabel LAN putus di lab. Ia memeriksa lampu indikator router (mati), mengukur tegangan kabel tester (nol), dan memeriksa konektor RJ45. Penerapan berpikir komputasional pada kegiatan investigasi ini berfokus pada...',
    options: [
      'Menulis puisi tentang jaringan komputer',
      'Mengisolasi titik kegagalan secara sistematis melalui pola uji terstruktur',
      'Membeli router baru tanpa melakukan pengecekan kabel fisik',
      'Mematikan aliran listrik seluruh sekolah',
      'Menghapus sistem operasi dari semua komputer lab'
    ],
    answer_key: 'Mengisolasi titik kegagalan secara sistematis melalui pola uji terstruktur',
    explanation: 'Menguji satu per satu indikator dari perangkat hulu ke hilir merupakan penerapan dekomposisi dan pola logika pengujian terstruktur.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-09',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Antrean kantin SMK saat istirahat mencapai 45 orang per kasir, menyebabkan siswa terlambat masuk kelas. Tim OSIS mengusulkan 3 solusi: (1) Menambah meja kasir tunai, (2) Menerapkan QRIS & pemesanan pra-bayar via web, (3) Memperpanjang jam istirahat. Dari sudut pandang efisiensi berpikir komputasional dan skalabilitas jangka panjang, analisis mana yang paling tepat?',
    options: [
      'Solusi 1 terbaik karena tidak membutuhkan koneksi internet sama sekali',
      'Solusi 2 terbaik karena mengabstraksi transaksi fisik menjadi antrean data digital terdesentralisasi sebelum waktu istirahat tiba',
      'Solusi 3 terbaik karena menambah waktu santai siswa tanpa perlu merubah sistem',
      'Ketiga solusi memiliki nilai efisiensi nol',
      'Kantin sebaiknya ditutup dan siswa dilarang jajan'
    ],
    answer_key: 'Solusi 2 terbaik karena mengabstraksi transaksi fisik menjadi antrean data digital terdesentralisasi sebelum waktu istirahat tiba',
    explanation: 'Pemesanan digital pra-bayar mengabstraksi antrean fisik di lokasi menjadi antrean data terstruktur yang disiapkan sebelum jam istirahat, menghilangkan bottleneck transaksi tunai secara tuntas.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-10',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Sebuah bengkel sekolah mendapati 20 motor pelanggan mogok setelah servis berkala. Hasil dekomposisi data menunjukkan: 18 motor menggunakan oli dari drum batch X-2026, dan 2 motor menggunakan oli drum Y-2026 yang teknisinya lupa mengencangkan busi. Sintesis keputusan berbasis pemisahan pola dan anomali adalah...',
    options: [
      'Memecat seluruh mekanik tanpa memeriksa drum oli',
      'Mengisolasi drum oli batch X-2026 untuk diuji lab kontaminasi, sekaligus menerbitkan SOP checklist torsi busi bagi mekanik',
      'Mengabaikan temuan karena motor sudah dibawa pulang konsumen',
      'Mengganti semua bensin di tangki motor tanpa memperhatikan oli',
      'Menyatakan bahwa motor mogok karena faktor cuaca semata'
    ],
    answer_key: 'Mengisolasi drum oli batch X-2026 untuk diuji lab kontaminasi, sekaligus menerbitkan SOP checklist torsi busi bagi mekanik',
    explanation: 'Keputusan HOTS memisahkan pola mayoritas (masalah kualitas suplai drum X) dari anomali kesalahan manusia (torsi busi), sehingga melahirkan solusi ganda yang terarah pada sistem.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // ==========================================================================
  // MODUL 2: LOGIKA ALGORITMA & FLOWCHART (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
  {
    question_id: 'q-m2-01',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Simbol flowchart berbentuk bangun belah ketupat (diamond) menurut standar ANSI/ISO digunakan untuk menggambarkan...',
    options: ['Proses perhitungan / operasi aritmatika', 'Keputusan / percabangan kondisi logika (Decision)', 'Input atau output data dari pengguna', 'Titik awal atau akhir program (Terminator)', 'Penghubung antar halaman'],
    answer_key: 'Keputusan / percabangan kondisi logika (Decision)',
    explanation: 'Bentuk belah ketupat (Decision) melambangkan titik percabangan logika dengan minimal dua keluaran (Ya/Tidak atau True/False).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-02',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Simbol flowchart yang digunakan untuk mengawali (Mulai / Start) dan mengakhiri (Selesai / End) suatu diagram alur adalah...',
    options: ['Persegi panjang', 'Jajar genjang', 'Oval / Kapsul (Terminator)', 'Lingkaran kecil', 'Segitiga sama sisi'],
    answer_key: 'Oval / Kapsul (Terminator)',
    explanation: 'Simbol kapsul atau oval (Terminator) berfungsi menandai titik awal dan titik akhir eksekusi program.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-03',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Simbol jajar genjang dalam diagram alir flowchart merepresentasikan tahapan...',
    options: ['Pemberian nilai awal variabel', 'Operasi Input dan Output data', 'Pemanggilan fungsi/subprogram', 'Pengulangan while do', 'Kondisi percabangan'],
    answer_key: 'Operasi Input dan Output data',
    explanation: 'Jajar genjang (Parallelogram) merupakan simbol standar ANSI untuk operasi masukan (input) seperti membaca keyboard atau keluaran (output) seperti mencetak ke layar.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-04',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Metode pengurutan data dengan cara mencari nilai terkecil dari elemen yang belum terurut lalu menukarnya ke posisi paling depan disebut...',
    options: ['Insertion Sort', 'Selection Sort', 'Bubble Sort', 'Quick Sort', 'Merge Sort'],
    answer_key: 'Selection Sort',
    explanation: 'Selection Sort bekerja dengan mencari nilai minimum/maksimum dari sekumpulan data lalu menukarnya ke indeks terdepan yang belum berurutan.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-05',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Algoritma pencarian yang memeriksa setiap elemen deret data satu per satu dari awal sampai akhir secara berurutan dinamakan...',
    options: ['Binary Search', 'Linear Search', 'Depth First Search', 'Hashing', 'Breadth Search'],
    answer_key: 'Linear Search',
    explanation: 'Linear Search (Sequential Search) menelusuri data satu demi satu secara sekuensial tanpa mensyaratkan data dalam keadaan terurut terlebih dahulu.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-06',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Jika terdapat deret angka terurut sebanyak 64 elemen, berapakah jumlah perbandingan maksimal yang dibutuhkan oleh algoritma Binary Search untuk menemukan angka target?',
    options: ['64 kali', '32 kali', '6 kali (log2 64)', '128 kali', '1 kali'],
    answer_key: '6 kali (log2 64)',
    explanation: 'Kompleksitas Binary Search adalah O(log2 N). Untuk N = 64, maka log2(64) = 6 kali perbandingan maksimal karena rentang pencarian selalu dibagi dua pada setiap langkah.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-07',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Perhatikan potongan logika: IF (nilai >= 75) THEN IF (kehadiran >= 80) THEN status = "Lulus" ELSE status = "Matrikulasi Presensi" ELSE status = "Remedial". Struktur logika ini dinamakan...',
    options: ['Percabangan Tunggal (Single IF)', 'Percabangan Bertingkat (Nested IF)', 'Perulangan For Loop', 'Array Multidimensi', 'Fungsi Rekursif'],
    answer_key: 'Percabangan Bertingkat (Nested IF)',
    explanation: 'Struktur kondisi di dalam kondisi lain disebut Nested IF (percabangan bersarang/bertingkat).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-08',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Apa yang akan terjadi pada alur program jika sebuah perulangan WHILE tidak memiliki ekspresi pengubah variabel pencacah (counter increment/decrement) di dalam blok badannya?',
    options: [
      'Program akan berjalan sangat cepat dan langsung berhenti',
      'Program akan mengalami Infinite Loop (perulangan tanpa henti) dan berpotensi freeze/crash',
      'Program otomatis mengubah perulangan menjadi switch-case',
      'Kompiler akan menghapus baris kode tersebut',
      'Variabel pencacah akan bertambah dengan sendirinya'
    ],
    answer_key: 'Program akan mengalami Infinite Loop (perulangan tanpa henti) dan berpotensi freeze/crash',
    explanation: 'Ketiadaan pengubah variabel kontrol membuat kondisi perulangan selalu bernilai True sehingga terjadi loop tak berhingga (infinite loop).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-09',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Toko ritel kejuruan ingin menyortir 10.000 transaksi harian berdasarkan nominal belanja. Data awal hampir terurut sempurna karena sebagian besar data masuk secara kronologis teratur. Antara Selection Sort dan Insertion Sort, algoritma manakah yang secara drastis lebih efisien dan mengapa?',
    options: [
      'Selection Sort, karena selalu melakukan pertukaran n kali apapun kondisi awal datanya',
      'Insertion Sort, karena pada kondisi data yang hampir terurut (nearly sorted), kompleksitas waktunya mendekati linear O(n)',
      'Keduanya sama-sama membutuhkan waktu berhari-hari',
      'Selection Sort, karena mengabaikan pembagian kartu remi',
      'Tidak ada algoritma yang bisa mengurutkan 10.000 data'
    ],
    answer_key: 'Insertion Sort, karena pada kondisi data yang hampir terurut (nearly sorted), kompleksitas waktunya mendekati linear O(n)',
    explanation: 'Best-case Insertion Sort pada data yang hampir berurutan adalah O(n) karena elemen yang sudah benar posisinya langsung lolos tanpa banyak pergeseran, sedangkan Selection Sort tetap memindai O(n^2).',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-10',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Sebuah pintu gerbang otomatis lab komputer memiliki sensor RFID dan sensor inframerah. Gerbang hanya boleh terbuka JIKA: (Kartu RFID terdaftar) DAN (Suhu tubuh < 37.5) DAN (Kapasitas lab saat ini < 36 orang). Jika terjadi kondisi darurat gempa bumi (Emergency Switch = ON), gerbang harus langsung terbuka tanpa syarat. Ekspresi logika Boolean yang benar untuk pengendali gerbang adalah...',
    options: [
      'Buka = (RFID_Valid AND Suhu_Aman AND Kapasitas_Aman) OR Emergency_Switch',
      'Buka = RFID_Valid AND (Suhu_Aman OR Emergency_Switch)',
      'Buka = (RFID_Valid OR Suhu_Aman) AND Emergency_Switch',
      'Buka = NOT (Emergency_Switch) AND Kapasitas_Aman',
      'Buka = RFID_Valid XOR Kapasitas_Aman'
    ],
    answer_key: 'Buka = (RFID_Valid AND Suhu_Aman AND Kapasitas_Aman) OR Emergency_Switch',
    explanation: 'Kondisi normal mensyaratkan konjungsi (AND) dari ketiga parameter keselamatan, sedangkan saklar darurat dihubungkan secara disjungsi (OR) sehingga jika darurat bernilai True, gerbang seketika terbuka.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // ==========================================================================
  // MODUL 3: DASAR PEMROGRAMAN & CLEAN CODE (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
  {
    question_id: 'q-m3-01',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Tipe data primitif yang digunakan untuk menyimpan nilai kebenaran logika yang hanya memiliki dua kemungkinan (True atau False) adalah...',
    options: ['Integer', 'String', 'Boolean', 'Float', 'Char'],
    answer_key: 'Boolean',
    explanation: 'Tipe data Boolean (dinamai dari George Boole) secara khusus menyimpan nilai kebenaran biner: True (benar/1) atau False (salah/0).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-02',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Manakah penulisan nama variabel yang VALID menurut konvensi bahasa pemrograman modern (JavaScript/Python)?',
    options: ['2nama_siswa', 'total-belanja', 'total_belanja', 'class', 'harga barang'],
    answer_key: 'total_belanja',
    explanation: 'Nama variabel tidak boleh diawali angka, tidak boleh mengandung spasi atau tanda hubung minus (-), dan tidak boleh menggunakan kata kunci sistem (seperti reserved word class).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-03',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Simbol operator aritmatika yang digunakan untuk menghitung sisa hasil bagi (Modulus) dalam pemrograman adalah...',
    options: ['/', '//', '%', '^', '**'],
    answer_key: '%',
    explanation: 'Tanda persen (%) adalah operator modulus yang menghasilkan sisa pembagian bulat, contohnya 10 % 3 = 1.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-04',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Blok kode mandiri yang dapat menerima input parameter, melakukan komputasi, dan mengembalikan hasil (return value) dinamakan...',
    options: ['Variabel', 'Konstanta', 'Fungsi / Prosedur', 'Komentar', 'Header'],
    answer_key: 'Fungsi / Prosedur',
    explanation: 'Fungsi (Function) adalah subprogram terisolasi yang dapat dipanggil berkali-kali untuk menghindari duplikasi kode.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-05',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Tipe data yang digunakan untuk menyimpan kumpulan teks kata atau kalimat seperti nama siswa atau alamat sekolah adalah...',
    options: ['Integer', 'Boolean', 'String', 'Double', 'Array'],
    answer_key: 'String',
    explanation: 'String adalah urutan karakter alfanumerik yang diapit oleh tanda petik tunggal atau ganda.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-06',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Perhatikan ekspresi kode: result = 10 + 5 * 2; Berapakah nilai akhir dari variabel result berdasarkan hierarki prioritas operator (operator precedence)?',
    options: ['30', '20', '25', '15', '100'],
    answer_key: '20',
    explanation: 'Operator perkalian (*) memiliki prioritas lebih tinggi daripada penjumlahan (+). Maka 5 * 2 = 10 dihitung terlebih dahulu, kemudian 10 + 10 = 20.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-07',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Jenis kesalahan pemrograman di mana kode berhasil dikompilasi tanpa pesan error, tetapi menghasilkan output nilai hitungan yang salah disebut...',
    options: ['Syntax Error', 'Runtime Error', 'Logic Error (Bug Logika)', 'Hardware Failure', 'Linker Error'],
    answer_key: 'Logic Error (Bug Logika)',
    explanation: 'Logic Error terjadi ketika tata bahasa program benar sehingga tidak ada crash, tetapi algoritma perhitungan di dalamnya keliru (misalnya salah meletakkan tanda kurung atau rumus).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-08',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Apa fungsi utama dari konstruksi blok `try ... catch` pada penanganan error modern?',
    options: [
      'Menghapus seluruh file program secara otomatis',
      'Menangkap exception/error di saat runtime sehingga aplikasi tidak crash mendadak dan dapat memberikan pesan ramah pengguna',
      'Mempercepat kecepatan clock prosesor komputer',
      'Menggandakan kapasitas memori RAM komputer',
      'Mengubah kode program menjadi bahasa mesin biner'
    ],
    answer_key: 'Menangkap exception/error di saat runtime sehingga aplikasi tidak crash mendadak dan dapat memberikan pesan ramah pengguna',
    explanation: 'Blok try...catch digunakan untuk mengisolasi potensi error tak terduga (seperti koneksi putus atau file tidak ditemukan) agar alur program tetap terkendali.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-09',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Kode kasir: `let total = 100000; if (isMember = true) { total = total * 0.9; }` Ketika diuji dengan pelanggan non-member (`isMember = false`), pelanggan tersebut anehnya tetap mendapatkan potongan diskon. Temukan akar penyebab bug tersebut!',
    options: [
      'Karena potongan diskon 0.9 terlalu kecil',
      'Karena menggunakan operator assignment `=` bukan perbandingan `===`, sehingga kondisi bernilai True dan mengubah status variabel',
      'Karena variabel total bertipe string bukan integer',
      'Karena JavaScript tidak mendukung diskon',
      'Karena komputer kehabisan memori'
    ],
    answer_key: 'Karena menggunakan operator assignment `=` bukan perbandingan `===`, sehingga kondisi bernilai True dan mengubah status variabel',
    explanation: 'Kesalahan klasik pemula: tanda sama dengan tunggal `=` adalah operator penugasan nilai (assignment). Pernyataan `isMember = true` justru mengubah nilai variabel menjadi true dan mengembalikan true ke blok if.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-10',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Dalam merancang sistem absensi berbasis sidik jari untuk bengkel SMK dengan 300 siswa, programmer menulis: `for(let i=0; i<300; i++) { readSensor(); saveToDB(); sendNotification(); }`. Mengapa kode ini buruk dalam Clean Code dan bagaimana refactoring yang paling tepat?',
    options: [
      'Kode sudah sempurna dan tidak butuh perbaikan',
      'Buruk karena coupling tinggi: I/O sensor, database, dan notifikasi dicampur aduk dalam 1 loop; sebaiknya dipisah menjadi fungsi modular asinkron dengan batch insert',
      'Sebaiknya loop diubah menjadi infinite loop while(true)',
      'Nama variabel `i` sebaiknya diganti menjadi `angka_satu_sampai_tiga_ratus`',
      'Jumlah siswa dibatasi maksimal 10 orang saja agar tidak lag'
    ],
    answer_key: 'Buruk karena coupling tinggi: I/O sensor, database, dan notifikasi dicampur aduk dalam 1 loop; sebaiknya dipisah menjadi fungsi modular asinkron dengan batch insert',
    explanation: 'Prinsip Single Responsibility Principle (SRP) mengharuskan pemisahan pembacaan sensor dari operasi database dan pengiriman pesan guna mencegah lag, blocking, dan memudahkan debugging.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // ==========================================================================
  // MODUL 4: LITERASI & ETIKA KECERDASAN ARTIFISIAL (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
  {
    question_id: 'q-m4-01',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Kemampuan sistem komputer untuk meniru kemampuan kognitif manusia seperti belajar dari data, bernalar, dan mengenali pola disebut...',
    options: ['Virtual Reality', 'Kecerdasan Artifisial (Artificial Intelligence)', 'Cloud Computing', 'Internet of Things', 'Cyber Security'],
    answer_key: 'Kecerdasan Artifisial (Artificial Intelligence)',
    explanation: 'Kecerdasan Artifisial (AI) mencakup rekayasa mesin cerdas yang mampu meniru penalaran dan pembelajaran kognitif manusia.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-02',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Model AI yang dilatih dengan data masukan beserta label jawaban yang benar (misalnya foto buah apel yang sudah dilabeli teks "Apel") termasuk kategori pembelajaran...',
    options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Genetic Algorithm', 'Deep Search'],
    answer_key: 'Supervised Learning',
    explanation: 'Supervised Learning menggunakan data latih berlabel (ground truth) di mana model belajar memetakan fitur ke label target.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-03',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Pedoman etika pemanfaatan kecerdasan artifisial di Indonesia yang menekankan prinsip akuntabilitas, transparansi, dan keamanan data diterbitkan melalui...',
    options: ['Surat Edaran (SE) Menkominfo No. 9 Tahun 2023', 'Undang-Undang Ketenagakerjaan 2003', 'Peraturan Lalu Lintas 2010', 'Surat Izin Mengemudi', 'Buku Manual Komputer'],
    answer_key: 'Surat Edaran (SE) Menkominfo No. 9 Tahun 2023',
    explanation: 'Kemenkominfo menerbitkan SE No. 9 Tahun 2023 sebagai rujukan etis pengembangan dan penggunaan AI di Indonesia.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-04',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Kondisi di mana model AI memberikan output yang tidak seimbang, diskriminatif, atau merugikan kelompok tertentu akibat data latih yang tidak representatif disebut...',
    options: ['AI Hallucination', 'Algorithmic Bias (Bias Algoritma)', 'Overfitting', 'Underfitting', 'Data Cleaning'],
    answer_key: 'Algorithmic Bias (Bias Algoritma)',
    explanation: 'Bias data terjadi saat komposisi dataset latih timpang sehingga model menduplikasi atau memperkuat prasangka dan ketidakadilan.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-05',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Teknologi AI generatif yang mampu memanipulasi video atau suara seseorang hingga terlihat dan terdengar sangat meyakinkan seolah orang tersebut mengucapkannya dinamakan...',
    options: ['Phishing', 'Deepfake', 'Malware', 'Spyware', 'Firewall'],
    answer_key: 'Deepfake',
    explanation: 'Deepfake adalah media sintetis berbasis deep learning yang mereplikasi wajah dan suara figur manusia secara manipulatif.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-06',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Sebuah kamera AI di sekolah dilatih dengan 950 foto siswa laki-laki dan hanya 50 foto siswa perempuan. Apa dampak teknis yang tak terhindarkan saat sistem ini dipasang di pintu masuk sekolah?',
    options: [
      'Akurasi pengenalan wajah siswa laki-laki dan perempuan akan sama persis 100%',
      'Sistem akan memiliki tingkat False Negative (kegagalan deteksi) yang sangat tinggi pada siswa perempuan karena ketimpangan data latih',
      'Kamera akan meledak karena kelebihan muatan foto',
      'Sistem otomatis menolak semua siswa tanpa terkecuali',
      'Komputer akan meminta update driver grafis'
    ],
    answer_key: 'Sistem akan memiliki tingkat False Negative (kegagalan deteksi) yang sangat tinggi pada siswa perempuan karena ketimpangan data latih',
    explanation: 'Dataset yang bias (imbalanced data) mengakibatkan model kurang mempelajari variasi fitur kelompok minoritas (under-represented), berujung pada error tinggi pada kelompok tersebut.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-07',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Tabel Confusion Matrix pengujian AI menunjukkan: Dari 100 spam yang sebenarnya, AI mendeteksi 90 sebagai spam dan 10 lolos ke inbox. Angka 10 email spam yang lolos ke inbox tersebut dalam istilah metrik AI disebut...',
    options: ['True Positive (TP)', 'False Negative (FN)', 'True Negative (TN)', 'False Positive (FP)', 'Accuracy'],
    answer_key: 'False Negative (FN)',
    explanation: 'False Negative (FN) terjadi ketika data berlabel positif (Spam) secara keliru diprediksi sebagai negatif (Bukan Spam) oleh model.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-08',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Siswa SMK menggunakan AI untuk membuat laporan tugas akhir. Menurut etika akademik dan integritas digital, tindakan yang paling bertanggung jawab adalah...',
    options: [
      'Menyalin mentah seluruh teks dari AI dan mengakuinya sebagai karya orisinal 100%',
      'Menggunakan AI sebagai mitra brainstorming ide, melakukan validasi silang fakta dari buku teks, dan mencantumkan transparansi sumber/prompts dalam lampiran',
      'Meminta AI menuliskan laporan dan menghapus semua catatan kaki',
      'Mengganti nama penulis AI dengan nama teman sekelas',
      'Melarang sama sekali penggunaan komputer di sekolah'
    ],
    answer_key: 'Menggunakan AI sebagai mitra brainstorming ide, melakukan validasi silang fakta dari buku teks, dan mencantumkan transparansi sumber/prompts dalam lampiran',
    explanation: 'Prinsip etika AI menekankan transparansi, akuntabilitas pribadi, verifikasi kebenaran informasi, dan integritas kepenulisan.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-09',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Algoritma seleksi beasiswa SMK menyaring 1.000 pelamar. Evaluasi menunjukkan siswa dari desa terpencil selalu mendapat skor rendah karena algoritma memberi bobot tinggi pada riwayat kepemilikan laptop pribadi dan kecepatan bandwidth internet rumah. Rekomendasi audit keadilan (Fairness Audit) yang paling solutif adalah...',
    options: [
      'Menghapus beasiswa tersebut secara permanen',
      'Melakukan re-engineering bobot fitur: menghapus variabel sarana ekonomi sebagai pengurang, dan menggantinya dengan rasio prestasi terhadap keterbatasan fasilitas',
      'Menyuruh seluruh siswa desa membeli laptop mahal',
      'Mengganti algoritma AI dengan undian koin acak',
      'Menerima hanya siswa yang tinggal di dekat kantor sekolah'
    ],
    answer_key: 'Melakukan re-engineering bobot fitur: menghapus variabel sarana ekonomi sebagai pengurang, dan menggantinya dengan rasio prestasi terhadap keterbatasan fasilitas',
    explanation: 'Audit etika bertindak mengeliminasi proxy variable yang mendiskriminasi latar belakang sosial-ekonomi (digital divide) dan mengarahkan model pada indikator meritokrasi sejati.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-10',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Sistem AI pengenal cacat suku cadang mesin di bengkel memiliki akurasi 98% di laboratorium. Namun saat dipasang di bengkel nyata, akurasi anjlok menjadi 61% karena debu, oli, dan lampu bengkel yang redup. Analisis penyebab kegagalan dan langkah penanganan sistematisnya adalah...',
    options: [
      'Kamera rusak dan harus dibuang',
      'Terjadi Data Drift / Distribution Shift akibat perbedaan lingkungan operasional; solusinya memperkaya dataset latih dengan augmentasi citra berdebu dan kondisi minim cahaya',
      'Model AI terkena virus komputer dari internet',
      'Teknisi bengkel sengaja merusak suku cadang',
      'AI tidak boleh digunakan di bidang permesinan'
    ],
    answer_key: 'Terjadi Data Drift / Distribution Shift akibat perbedaan lingkungan operasional; solusinya memperkaya dataset latih dengan augmentasi citra berdebu dan kondisi minim cahaya',
    explanation: 'Perbedaan distribusi data latih lab yang bersih versus lingkungan industri riil yang bising/dekil adalah fenomena Distribution Shift. Perbaikannya menuntut re-training dengan augmented real-world data.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // ==========================================================================
  // MODUL 5: PROMPT ENGINEERING & KREATIVITAS DIGITAL (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
  {
    question_id: 'q-m5-01',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Seni dan teknik merumuskan instruksi terstruktur kepada model kecerdasan artifisial generatif agar menghasilkan keluaran yang akurat dan relevan disebut...',
    options: ['Reverse Engineering', 'Prompt Engineering', 'Social Engineering', 'Web Scraping', 'Data Mining'],
    answer_key: 'Prompt Engineering',
    explanation: 'Prompt Engineering adalah kecakapan menyusun input/instruksi kontekstual untuk mengoptimalkan performa respons model bahasa besar (LLM).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-02',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Dalam kerangka kerja perumusan prompt PGTC, kepanjangan dari huruf "C" adalah...',
    options: ['Computer', 'Context / Constraint (Konteks & Batasan)', 'Creative', 'Coding', 'Calculation'],
    answer_key: 'Context / Constraint (Konteks & Batasan)',
    explanation: 'PGTC terdiri dari Persona (Peran), Goal (Tujuan), Context/Constraint (Konteks & Batasan), dan Target Audience/Format.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-03',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Teknik memberikan prompt tanpa menyertakan contoh masukan-keluaran sama sekali, melainkan hanya perintah langsung disebut...',
    options: ['Zero-Shot Prompting', 'Few-Shot Prompting', 'Chain of Thought', 'Fine Tuning', 'Embedding'],
    answer_key: 'Zero-Shot Prompting',
    explanation: 'Zero-Shot Prompting mengandalkan pemahaman bawaan model tanpa memberikan contoh ilustrasi (exemplars).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-04',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Lisensi Creative Commons dengan simbol "CC-BY" mewajibkan pengguna karya cipta untuk...',
    options: [
      'Membayar royalti miliaran rupiah ke pencipta',
      'Mencantumkan atribusi / kredit nama pencipta asli karya tersebut',
      'Melarang penyebarluasan karya di internet',
      'Menghapus nama pencipta dari sampul buku',
      'Menyerahkan karya kepada kantor pemerintah'
    ],
    answer_key: 'Mencantumkan atribusi / kredit nama pencipta asli karya tersebut',
    explanation: 'Simbol BY (Attribution) adalah syarat paling mendasar dari Creative Commons di mana karya boleh dipakai asal pembuat aslinya diakui dan dicantumkan.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-05',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Rekam jejak seluruh aktivitas digital seseorang di internet seperti posting media sosial, komentar, dan riwayat browsing dinamakan...',
    options: ['Digital Footprint (Jejak Digital)', 'IP Address', 'Cache Browser', 'DNS Server', 'Bandwidth'],
    answer_key: 'Digital Footprint (Jejak Digital)',
    explanation: 'Jejak digital (Digital Footprint) adalah jejak data yang tertinggal saat seseorang berinteraksi di ruang siber.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-06',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Perhatikan dua prompt berikut:\nPrompt A: "Jelaskan tentang firewall."\nPrompt B: "Bertindaklah sebagai Senior Network Engineer. Jelaskan konsep firewall kepada siswa kelas X SMK jurusan TKJ dalam 3 poin sederhana, hindari istilah teknis rumit, dan sertakan analogi pos satpam sekolah."\nMengapa prompt B menghasilkan kualitas respons yang jauh lebih tepat sasaran?',
    options: [
      'Karena prompt B menggunakan huruf kapital di awal kalimat',
      'Karena prompt B menetapkan Persona, Target Audiens, Format Spesifik, dan Batasan (Constraint) yang jelas',
      'Karena prompt B lebih pendek daripada prompt A',
      'Karena model AI lebih menyukai satpam daripada firewall',
      'Karena prompt B ditulis menggunakan bahasa pemrograman C++'
    ],
    answer_key: 'Karena prompt B menetapkan Persona, Target Audiens, Format Spesifik, dan Batasan (Constraint) yang jelas',
    explanation: 'Prompt B membatasi ruang parameter model (grounding) dengan persona ahli, target siswa SMK, batasan 3 poin, serta analogi pos satpam yang memicu metafora relevan.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-07',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Siswa jurusan DKV mengunduh font berlisensi CC BY-NC (Non-Commercial). Tindakan penggunaan manakah yang secara hukum DILARANG berdasarkan klausul lisensi tersebut?',
    options: [
      'Menggunakan font untuk poster tugas tugas kelas yang dipajang di mading sekolah',
      'Menggunakan font untuk desain kemasan kopi komersial yang dijual di supermarket dengan meraup laba',
      'Menggunakan font untuk kartu ucapan selamat ulang tahun kepada orang tua',
      'Memodifikasi bentuk huruf untuk portofolio pribadi',
      'Mencantumkan nama desainer font pada catatan kaki karya'
    ],
    answer_key: 'Menggunakan font untuk desain kemasan kopi komersial yang dijual di supermarket dengan meraup laba',
    explanation: 'Klausul NC (Non-Commercial) melarang keras penggunaan karya untuk tujuan bisnis komersial, periklanan berbayar, atau penjualan produk bernilai uang.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-08',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Dalam teknik Few-Shot Prompting, pengguna menyertakan 2 atau 3 contoh pasangan masukan-keluaran (input-output pairs). Manfaat utama penyertaan contoh ini adalah...',
    options: [
      'Membuat server AI menjadi restart',
      'Mengajarkan pola format output yang kaku dan konsisten kepada model tanpa perlu fine-tuning model',
      'Menghapus memori jangka panjang AI',
      'Membuat waktu respons menjadi lebih lambat tanpa guna',
      'Menghindari pembayaran langganan AI'
    ],
    answer_key: 'Mengajarkan pola format output yang kaku dan konsisten kepada model tanpa perlu fine-tuning model',
    explanation: 'Few-Shot membantu model menyelaraskan (in-context learning) gaya bahasa, struktur JSON, atau format tabel yang diinginkan pengguna melalui contoh konkret.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-09',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Sebuah tim siswa RPL menggunakan model AI untuk men-generate kode login. AI memberikan kode yang berfungsi, tetapi menyimpan password pengguna langsung dalam teks biasa (plain-text) di LocalStorage tanpa enkripsi/hashing. Sebagai calon programmer profesional yang beretika, langkah yang wajib diambil adalah...',
    options: [
      'Langsung merilis aplikasi ke publik karena yang penting login berhasil',
      'Mengabaikan celah keamanan karena kode dibuat oleh AI canggih',
      'Melakukan security review kritis: menolak saran plain-text, menggantinya dengan bcrypt hashing di backend dan transmisi HTTPS sesuai standar OWASP',
      'Menghapus form login dan membiarkan siapa saja masuk tanpa autentikasi',
      'Menyalahkan pembuat model AI di media sosial'
    ],
    answer_key: 'Melakukan security review kritis: menolak saran plain-text, menggantinya dengan bcrypt hashing di backend dan transmisi HTTPS sesuai standar OWASP',
    explanation: 'AI generatif sering menghasilkan kode yang rentan keamanan (insecure by default). Programmer manusia memegang tanggung jawab penuh memvalidasi kode terhadap prinsip OWASP.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-10',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Siswa DKV menggabungkan 4 gambar berlisensi CC-BY, 1 ilustrasi generator AI publik, dan foto jepretannya sendiri menjadi sebuah poster festival sekolah. Bagaimana penataan klausul hak cipta dan atribusi yang memenuhi etika hak kekayaan intelektual (UU Hak Cipta No. 28/2014 & Creative Commons)?',
    options: [
      'Mengklaim seluruh poster sebagai 100% ciptaan murni tanpa menyebut satupun sumber',
      'Mencantumkan bagian kredit spesifik: menyebut pencipta dan tautan lisensi masing-masing 4 gambar CC-BY, mencantumkan disclaimer karya kolaborasi AI generatif, serta mendaftarkan hak cipta atas tata letak aransemen orisinalnya',
      'Menghapus tanda air (watermark) dari semua gambar agar terlihat bersih',
      'Menjual poster tersebut ke galeri seni internasional secara rahasia',
      'Menyatakan bahwa gambar Creative Commons tidak berhak diakui'
    ],
    answer_key: 'Mencantumkan bagian kredit spesifik: menyebut pencipta dan tautan lisensi masing-masing 4 gambar CC-BY, mencantumkan disclaimer karya kolaborasi AI generatif, serta mendaftarkan hak cipta atas tata letak aransemen orisinalnya',
    explanation: 'Sintesis etika HKI pada karya turunan (derivative work) mewajibkan penghormatan atribusi karya asal (CC-BY), transparansi penggunaan tool generatif, serta pengakuan atas hak moral penyusun aransemen.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // ==========================================================================
  // MODUL 6: PENGELOLAAN INFORMASI DIGITAL & BASIS DATA (10 SOAL: 5 LOTS, 3 MOTS, 2 HOTS)
  // ==========================================================================
  {
    question_id: 'q-m6-01',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Perintah Structured Query Language (SQL) standar yang digunakan untuk membaca atau mengambil data dari sebuah tabel basis data adalah...',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE', 'DROP'],
    answer_key: 'SELECT',
    explanation: 'Perintah SELECT digunakan untuk memilih dan menampilkan baris data dari satu atau lebih tabel relasional.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-02',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Sebuah kolom unik dalam tabel basis data yang nilainya tidak boleh sama antara satu baris dengan baris lainnya dan tidak boleh bernilai kosong (NOT NULL) disebut...',
    options: ['Foreign Key', 'Primary Key (Kunci Utama)', 'Candidate Key', 'Index Key', 'Composite Key'],
    answer_key: 'Primary Key (Kunci Utama)',
    explanation: 'Primary Key adalah identitas pengenal unik bagi setiap entitas record di dalam tabel basis data.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-03',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Perintah SQL yang digunakan untuk menambahkan satu baris data baru ke dalam tabel siswa adalah...',
    options: ['ADD NEW siswa', 'INSERT INTO siswa VALUES (...)', 'UPDATE siswa SET ...', 'CREATE ROW siswa', 'PUSH siswa'],
    answer_key: 'INSERT INTO siswa VALUES (...)',
    explanation: 'Sintaks resmi DML untuk menyisipkan data baru adalah `INSERT INTO nama_tabel VALUES (...)`.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-04',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Dalam siklus Piramida DIKW, urutan tingkatan hierarki dari level paling dasar hingga level paling tinggi adalah...',
    options: [
      'Data → Information → Knowledge → Wisdom',
      'Information → Data → Wisdom → Knowledge',
      'Wisdom → Knowledge → Information → Data',
      'Data → Wisdom → Information → Knowledge',
      'Knowledge → Information → Data → Wisdom'
    ],
    answer_key: 'Data → Information → Knowledge → Wisdom',
    explanation: 'Hierarki DIKW: Data (fakta mentah) diproses jadi Informasi (punya makna), dipahami jadi Pengetahuan (know-how), dan diterapkan bijak menjadi Kebijaksanaan (Wisdom).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-05',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Singkatan dari operasi dasar manipulasi basis data CRUD adalah...',
    options: [
      'Compile, Run, Undo, Debug',
      'Create, Read, Update, Delete',
      'Copy, Rename, Upload, Download',
      'Connect, Route, Unlink, Disconnect',
      'Calculate, Reduce, Unify, Divide'
    ],
    answer_key: 'Create, Read, Update, Delete',
    explanation: 'CRUD adalah 4 fungsi fundamental dalam penyimpanan persisten: Create (Buat), Read (Baca), Update (Ubah), Delete (Hapus).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-06',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Apa akibat fatal yang terjadi jika seorang administrator basis data menjalankan perintah: `UPDATE siswa SET status = "Lulus";` tanpa menyertakan klausa `WHERE nis = "20261001";`?',
    options: [
      'Hanya siswa nomor urut satu yang statusnya berubah',
      'Server basis data akan menolak dan membatalkan otomatis',
      'SELURUH baris data siswa yang ada di dalam tabel tersebut seketika akan tertimpa menjadi "Lulus"',
      'Tabel siswa akan terhapus dari harddisk server',
      'Sistem akan meminta konfirmasi sidik jari admin'
    ],
    answer_key: 'SELURUH baris data siswa yang ada di dalam tabel tersebut seketika akan tertimpa menjadi "Lulus"',
    explanation: 'Klausa WHERE berfungsi sebagai predikat pemfilter baris. Tanpa WHERE, perintah UPDATE atau DELETE akan berdampak pada seluruh baris tabel.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-07',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Pada aplikasi lembar sebar (spreadsheet), seorang guru ingin merangkum data 500 nilai siswa untuk mengetahui rata-rata nilai per jurusan dan per jenis kelamin. Komponen Pivot Table yang paling tepat untuk meletakkan "Nama Jurusan" dan "Rata-rata Nilai" berturut-turut adalah...',
    options: [
      'Filters dan Columns',
      'Rows (Baris) dan Values (Nilai Agregasi)',
      'Values dan Rows',
      'Header dan Footer',
      'Formula Bar dan Status Bar'
    ],
    answer_key: 'Rows (Baris) dan Values (Nilai Agregasi)',
    explanation: 'Kategori pengelompokan vertikal diletakkan pada Rows, sedangkan kolom angka numerik diletakkan pada Values dengan fungsi agregasi AVERAGE.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-08',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Mengapa penggabungan sel (Merge Cells) sangat dilarang pada baris data tabel sumber yang akan diolah menggunakan Pivot Table atau diimpor ke basis data SQL?',
    options: [
      'Karena membuat ukuran file menjadi 10 gigabyte',
      'Karena saat sel dimerge, nilai data hanya tersimpan di sel kiri atas sementara sel lainnya dianggap bernilai NULL sehingga kalkulasi agregasi menjadi rusak',
      'Karena warna sel akan otomatis berubah menjadi hitam pekat',
      'Karena font huruf akan terhapus secara otomatis',
      'Karena lisensi Microsoft Excel akan kedaluwarsa'
    ],
    answer_key: 'Karena saat sel dimerge, nilai data hanya tersimpan di sel kiri atas sementara sel lainnya dianggap bernilai NULL sehingga kalkulasi agregasi menjadi rusak',
    explanation: 'Prinsip integritas data tabular (Flat Table) menuntut setiap sel memiliki identitas kolom dan baris yang independen tanpa nilai NULL tersembunyi akibat merge.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-09',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Di koperasi SMK, terdapat tabel `Barang` (id_barang, nama, harga, stok) dan tabel `Transaksi` (id_transaksi, id_barang, jumlah, tgl). Kasir ingin menampilkan daftar nama barang yang stoknya kurang dari 5 beserta total unit yang pernah terjual bulan ini. Query SQL dengan integrasi JOIN dan GROUP BY yang tepat adalah...',
    options: [
      'SELECT b.nama, SUM(t.jumlah) FROM Barang b LEFT JOIN Transaksi t ON b.id_barang = t.id_barang WHERE b.stok < 5 GROUP BY b.nama;',
      'SELECT * FROM Barang WHERE stok < 5;',
      'DELETE FROM Transaksi WHERE jumlah > 5;',
      'INSERT INTO Barang VALUES ("buku", 5000);',
      'DROP TABLE Transaksi;'
    ],
    answer_key: 'SELECT b.nama, SUM(t.jumlah) FROM Barang b LEFT JOIN Transaksi t ON b.id_barang = t.id_barang WHERE b.stok < 5 GROUP BY b.nama;',
    explanation: 'Query merelasikan tabel Barang dengan Transaksi lewat LEFT JOIN pada foreign key, menyaring stok kritis (< 5), dan mengelompokkan nama barang untuk mengagregasikan total unit terjual (SUM).',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-10',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: '[Studi Kasus] Sebuah sekolah menyimpan data kelulusan 1.000 siswa dalam spreadsheet tanpa kunci utama. Akibatnya, ada siswa dengan nama sama yang nilainya tertukar saat pengumuman rapor. Desain perbaikan arsitektur data relasional untuk mencegah anomali tersebut adalah...',
    options: [
      'Menyuruh salah satu siswa mengganti namanya di akta kelahiran',
      'Menerapkan skema relasional dengan Primary Key unik NIS/NISN, memecah tabel biodata dan tabel nilai dengan relasi Foreign Key, serta menerapkan constraint UNIQUE dan NOT NULL',
      'Mengunci file spreadsheet dengan password 12345',
      'Mencetak nilai ke kertas dan membakar harddisk lama',
      'Menghentikan penggunaan komputer dan kembali ke buku tulis'
    ],
    answer_key: 'Menerapkan skema relasional dengan Primary Key unik NIS/NISN, memecah tabel biodata dan tabel nilai dengan relasi Foreign Key, serta menerapkan constraint UNIQUE dan NOT NULL',
    explanation: 'Solusi arsitektur database profesional: Menghilangkan anomali pembaruan dan integritas data melalui normalisasi basis data, penetapan entitas unik Primary Key, dan integritas referensial Foreign Key.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  }
];
