import { VocationalProject, VocationalMajorCode } from '../types';

export const VOCATIONAL_MAJORS_META: {
  code: VocationalMajorCode;
  name: string;
  fieldCategory: string;
  color: string;
  iconBg: string;
  description: string;
}[] = [
  {
    code: 'DKV',
    name: 'Desain Komunikasi Visual',
    fieldCategory: 'Seni dan Ekonomi Kreatif',
    color: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-50 text-pink-700 border-pink-200',
    description: 'Penerapan komputasi grafis, kontras warna aksesibel, dan etika AI generatif gambar.'
  },
  {
    code: 'TKP',
    name: 'Teknik Konstruksi & Perumahan',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-amber-600 to-orange-700',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Algoritma estimasi material pondasi, dekomposisi volume beton, dan klasifikasi retak dinding.'
  },
  {
    code: 'DPIB',
    name: 'Desain Pemodelan & Informasi Bangunan',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-blue-600 to-indigo-700',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Abstraksi skala CAD, validasi aturan KDB, dan komputasi optimasi pencahayaan alami.'
  },
  {
    code: 'TOI',
    name: 'Teknik Otomasi Industri',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-emerald-600 to-teal-700',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Logika diagram alir konveyor pemilah barang dan deteksi anomali sensor motor (Predictive Maintenance).'
  },
  {
    code: 'TITL',
    name: 'Teknik Instalasi Tenaga Listrik',
    fieldCategory: 'Energi dan Pertambangan',
    color: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    description: 'Kalkulator penyeimbang beban 3 fasa (R-S-T) dan audit data konsumsi energi cerdas virtual.'
  },
  {
    code: 'TAV',
    name: 'Teknik Audio Video',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-purple-600 to-violet-700',
    iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Sampling sinyal gelombang suara, algoritma filter frekuensi, dan spektrogram keyword spotter.'
  },
  {
    code: 'TSM',
    name: 'Teknik Sepeda Motor',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-red-600 to-rose-700',
    iconBg: 'bg-red-50 text-red-700 border-red-200',
    description: 'Pohon keputusan diagnosis sistem starter dan pengolahan data telemetri sensor injeksi FI.'
  },
  {
    code: 'TKR',
    name: 'Teknik Kendaraan Ringan',
    fieldCategory: 'Teknologi dan Rekayasa',
    color: 'from-cyan-600 to-blue-700',
    iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: 'Pemodelan jarak pengereman aman dan diagnosis parameter live stream sensor OBD-II virtual.'
  }
];

export const VOCATIONAL_PROJECTS: VocationalProject[] = [
  // ==========================================================================
  // 1. DKV - DESAIN KOMUNIKASI VISUAL
  // ==========================================================================
  {
    project_id: 'prj-dkv-01',
    major_code: 'DKV',
    major_name: 'Desain Komunikasi Visual',
    field_category: 'Seni dan Ekonomi Kreatif',
    project_level: 'Dasar',
    title: 'Audit Kontras Aksesibilitas WCAG & Ekstraksi Palet Warna Digital',
    problem_statement: 'Banyak poster edukasi dan antarmuka media interaktif karya siswa kelas X sulit dibaca oleh pengguna lanjut usia atau individu dengan gangguan penglihatan warna karena kombinasi warna teks dan latar belakang memiliki kontras rendah di bawah standar inklusivitas web internasional (WCAG 2.1).',
    learning_objectives: [
      'Menjelaskan representasi numerik warna dalam format RGB dan heksadesimal.',
      'Menerapkan algoritma percabangan (IF-ELSE) untuk menentukan kepatuhan rasio kontras warna terhadap standar WCAG AA (minimal 4.5:1).',
      'Mengolah tabel data palet warna untuk merekomendasikan perbaikan kontras yang estetis namun tetap inklusif.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi elemen warna menjadi komponen Red, Green, Blue, dan kalkulasi Luminansi Relatif (L).',
      algorithm: 'Algoritma sekuensial perhitungan kontras (L1 + 0.05) / (L2 + 0.05) dilanjutkan percabangan kelayakan WCAG AA/AAA.',
      data_processing: 'Ekstraksi nilai heksadesimal ke desimal RGB (0-255) dan komparasi nilai dalam bentuk tabel.',
      ai_or_ethics: 'Prinsip Inklusivitas Desain & Aksesibilitas Digital bagi seluruh lapisan masyarakat.'
    },
    realistic_scenario: 'Studio Desain SMK diminta oleh Puskesmas setempat untuk merancang poster digital kampanye "Pola Hidup Bersih". Poster harus dapat terbaca jelas pada layar ponsel dengan kecerahan rendah maupun di papan mading digital sekolah tanpa menyilaukan mata.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Uji Palet Warna Poster DKV',
      description: 'Daftar 6 kombinasi warna yang sering digunakan siswa beserta nilai heksadesimal dan peruntukannya.',
      headers: ['ID Sampel', 'Elemen Desain', 'Hex Warna Teks', 'Hex Warna Latar', 'Tujuan Elemen'],
      rows: [
        ['DKV-01', 'Judul Utama Poster', '#FFFFFF', '#0284C7', 'Header poster tema kesehatan'],
        ['DKV-02', 'Sub-judul Informasi', '#94A3B8', '#FFFFFF', 'Keterangan tanggal dan waktu'],
        ['DKV-03', 'Tombol Aksi Penting', '#F59E0B', '#FFFFFF', 'Tombol pendaftaran daring'],
        ['DKV-04', 'Teks Isi Pengumuman', '#0F172A', '#F8FAFC', 'Uraian paragraf edukasi'],
        ['DKV-05', 'Label Peringatan', '#DC2626', '#FEF2F2', 'Peringatan bahaya infeksi'],
        ['DKV-06', 'Kredit Desainer Footer', '#64748B', '#0F172A', 'Informasi hak cipta studio']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Input Kode Warna',
        description: 'Pilih pasangan warna teks dan warna latar belakang dari dataset atau masukkan kode Hex kustom Anda sendiri.',
        expected_action: 'Pastikan format kode heksadesimal valid diawali tanda pagar (#) dengan 6 karakter.'
      },
      {
        step_number: 2,
        title: 'Konversi Nilai & Hitung Luminansi',
        description: 'Simulasi akan mengonversi nilai Hex ke kanal RGB (0-255) kemudian menghitung luminansi relatif masing-masing warna.',
        expected_action: 'Perhatikan bagaimana komponen warna terang memiliki nilai luminansi mendekati 1.0 dan warna gelap mendekati 0.0.'
      },
      {
        step_number: 3,
        title: 'Evaluasi Rasio Kontras Algoritmik',
        description: 'Algoritma menghitung rasio (L_terang + 0.05) / (L_gelap + 0.05) dan menguji apakah rasio >= 4.5:1 untuk teks normal.',
        expected_action: 'Amati status kelulusan: "Lolos WCAG AA (Aman)" atau "Gagal (Kontras Terlalu Rendah)".'
      },
      {
        step_number: 4,
        title: 'Rekomendasi Penyesuaian Nilai Warna',
        description: 'Jika kombinasi gagal, geser slider kecerahan untuk menemukan warna alternatif yang tetap serasi dengan tema desain.',
        expected_action: 'Catat kode hex hasil perbaikan ke dalam LKPD digital siswa.'
      }
    ],
    simulation_config: {
      simulation_type: 'color_contrast_analyzer',
      title: 'Simulator Audit Kontras Warna Aksesibel DKV',
      description: 'Uji rasio kontras warna secara real-time dan tinjau kelayakan keterbacaan teks menurut standar WCAG 2.1.',
      safety_guidelines: 'Simulasi visual aman di layar peramban. Tidak memerlukan instalasi perangkat lunak luar.',
      default_inputs: {
        textColor: '#94A3B8',
        bgColor: '#FFFFFF',
        fontSize: 'normal'
      }
    },
    analysis_questions: [
      {
        id: 'q-dkv1-1',
        question: 'Mengapa kombinasi warna DKV-02 (#94A3B8 di atas #FFFFFF) dinyatakan gagal dalam standar aksesibilitas?',
        kka_focus: 'Pengolahan Data & Luminansi',
        sample_answer_guide: 'Karena kedua warna memiliki luminansi relatif yang sama-sama tinggi sehingga selisih kecerahannya menghasilkan rasio kontras di bawah 4.5:1, membuat teks sulit dibaca.'
      },
      {
        id: 'q-dkv1-2',
        question: 'Tuliskan algoritma percabangan (pseudocode) sederhana untuk menentukan kelulusan kontras teks ukuran normal dan besar!',
        kka_focus: 'Algoritma Percabangan',
        sample_answer_guide: 'JIKA ukuran == "besar" DAN rasio >= 3.0 MAKA status = "Lolos AA" LAIN JIKA ukuran == "normal" DAN rasio >= 4.5 MAKA status = "Lolos AA" LAINNYA status = "Gagal".'
      },
      {
        id: 'q-dkv1-3',
        question: 'Sebagai desainer grafis kelas X, bagaimana Anda menyeimbangkan antara estetika artistik dengan kepatuhan aksesibilitas komputasional?',
        kka_focus: 'Berpikir Komputasional & Inklusivitas',
        sample_answer_guide: 'Estetika tidak boleh mengorbankan keterbacaan; desainer dapat memilih warna turunan yang lebih gelap/terang dari palet yang sama agar rasio matematis terpenuhi tanpa merusak keselarasan visual.'
      }
    ],
    expected_final_product: 'Laporan Audit Palet Warna Aksesibel Digital berisi daftar 6 pasangan warna yang telah diperbaiki, rasio kontras terverifikasi, dan mockup mini poster yang memenuhi standar inklusif.',
    digital_lkpd: {
      lkpd_id: 'lkpd-dkv-01',
      title: 'LKPD Digital: Audit Kontras & Palet Warna Inklusif',
      sections: [
        {
          section_title: 'Bagian A: Identifikasi Nilai Warna & Luminansi',
          tasks: [
            {
              id: 't-dkv1-a1',
              prompt: 'Isi tabel pengamatan rasio kontras untuk 3 kombinasi warna dari dataset contoh:',
              input_type: 'table',
              table_columns: ['ID Sampel', 'Warna Teks', 'Warna Latar', 'Rasio Kontras Terhitung', 'Status WCAG (Lolos/Gagal)'],
              default_rows: [
                ['DKV-01', '#FFFFFF', '#0284C7', '4.62 : 1', 'Lolos AA'],
                ['DKV-02', '#94A3B8', '#FFFFFF', 'Isi hasil...', 'Isi status...'],
                ['DKV-03', '#F59E0B', '#FFFFFF', 'Isi hasil...', 'Isi status...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Solusi Rekayasa Warna',
          tasks: [
            {
              id: 't-dkv1-b1',
              prompt: 'Tuliskan rekomendasi kode warna pengganti untuk sampel DKV-02 agar mencapai rasio minimal 4.5:1:',
              input_type: 'text'
            },
            {
              id: 't-dkv1-b2',
              prompt: 'Jelaskan konsep dekomposisi data piksel yang Anda gunakan saat mengubah warna Hex menjadi nilai RGB:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemahaman Konsep Warna Digital (RGB & Hex)', weight: 25, description: 'Ketepatan menjelaskan representasi biner dan heksadesimal warna.' },
      { id: 'r2', name: 'Penerapan Algoritma Kontras & Standar WCAG', weight: 25, description: 'Keruntutan alur pengujian rasio matematis dan logika percabangan.' },
      { id: 'r3', name: 'Solusi Alternatif Palet Warna Inklusif', weight: 25, description: 'Kualitas estetika dan keterbacaan kode warna hasil perbaikan.' },
      { id: 'r4', name: 'Kelengkapan dan Kejujuran Laporan LKPD', weight: 25, description: 'Kerapian dokumentasi dan ketepatan pengisian seluruh data.' }
    ],
    success_criteria: [
      'Mampu menghitung dan memverifikasi rasio kontras minimal 3 pasang warna.',
      'Dapat merumuskan pseudocode percabangan kelayakan WCAG AA.',
      'Menghasilkan minimal 2 kode warna alternatif yang lulus uji kontras >= 4.5:1.'
    ],
    reflection_prompts: [
      'Apakah warna yang terlihat nyaman di mata kita secara otomatis aman bagi semua orang?',
      'Bagaimana algoritma sederhana dapat membantu desainer menghindari diskriminasi visual terhadap penyandang disabilitas low vision?'
    ]
  },
  {
    project_id: 'prj-dkv-02',
    major_code: 'DKV',
    major_name: 'Desain Komunikasi Visual',
    field_category: 'Seni dan Ekonomi Kreatif',
    project_level: 'Pengembangan',
    title: 'Audit Etika Hak Cipta & Deteksi Artifak AI Generatif pada Portofolio Kreatif',
    problem_statement: 'Integrasi AI generatif (seperti model Text-to-Image) di kalangan siswa SMK sering menimbulkan persoalan etika: penggunaan tanpa atribusi, pelanggaran hak cipta seniman asli, serta masuknya gambar cacat anatomi (artifak jari/teks terdistorsi) ke dalam portofolio komersial klien.',
    learning_objectives: [
      'Menganalisis metadata gambar (EXIF/C2PA) dan karakteristik visual untuk mendeteksi tanda-tanda citra buatan AI.',
      'Menerapkan checklist audit etika AI berbasis pohon keputusan untuk menentukan kelayakan publikasi karya.',
      'Menyusun dokumen deklarasi orisinalitas dan lisensi karya digital secara bertanggung jawab.'
    ],
    kka_concepts: {
      computational_thinking: 'Pengenalan pola visual (anomali tekstur, distorsi simetri) dan abstraksi parameter prompt.',
      algorithm: 'Pohon keputusan klasifikasi etika AI (Original vs AI-Assisted vs Full Synthetic Copyright Risk).',
      data_processing: 'Ekstraksi dan pembacaan metadata berkas citra digital.',
      ai_or_ethics: 'Etika Pemanfaatan AI, Transparansi Sumber Belajar, Hak Kekayaan Intelektual (HAKI).'
    },
    realistic_scenario: 'Agensi kreatif siswa DKV menerima pesanan ilustrasi buku anak dari penerbit lokal. Salah satu desainer menyerahkan gambar yang dicurigai merupakan hasil prompt AI tanpa izin hak cipta seniman lain dan memuat cacat visual pada jari karakter.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Metadata & Fitur 5 Aset Portofolio Grafis',
      description: 'Data atribut 5 berkas karya digital untuk diuji kepatuhan etika dan orisinalitasnya.',
      headers: ['ID Aset', 'Nama Berkas', 'Metode Pembuatan', 'Deteksi Artifak Visual', 'Status Hak Cipta Prompt', 'Rekomendasi Awal'],
      rows: [
        ['AST-01', 'maskot_kucing.png', 'Vektor Manual Illustrator', 'Tidak Ada (Garis Vektor Murni)', '100% Hak Milik Siswa', 'Layak Publikasi'],
        ['AST-02', 'pemandangan_senja.jpg', 'AI Text-to-Image (Midjourney)', 'Tekstur Daun Kabur & Simetri Salah', 'Meniru gaya seniman hidup tanpa izin', 'Tolak / Perlu Revisi'],
        ['AST-03', 'karakter_robot.png', 'Hybrid (AI Base + Retouch Manual)', 'Artifak diperbaiki desainer', 'Prompt orisinal konsep fiksi ilmiah', 'Perlu Deklarasi AI-Assisted'],
        ['AST-04', 'logo_kopi_daerah.png', 'Generatif AI Otomatis', 'Teks Typo ("COFFFE") & Simbol Terdistorsi', 'Logo mirip merek terdaftar nasional', 'Pelanggaran HAKI Tinggi'],
        ['AST-05', 'infografis_sampah.svg', 'Sketsa Manual + Trace Komputer', 'Tidak Ada Artifak', 'Data bersumber dari dinas LH resmi', 'Sangat Layak']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Inspeksi Visual & Deteksi Artifak',
        description: 'Periksa aset menggunakan simulator inspeksi: cari ketidakkonsistenan pencahayaan, teks acak, atau anatomi ganjil.',
        expected_action: 'Tandai area artifak pada grid gambar simulator.'
      },
      {
        step_number: 2,
        title: 'Penelusuran Metadata & Sumber Prompt',
        description: 'Analisis apakah berkas memuat metadata generator AI atau apakah prompt menyebut nama seniman hidup tanpa lisensi.',
        expected_action: 'Evaluasi risiko hukum plagiarisme gaya seni.'
      },
      {
        step_number: 3,
        title: 'Eksekusi Checklist Pohon Keputusan Etika',
        description: 'Jalankan kuis keputusan etika komputasional: jika ada AI, apakah ada nilai tambah manual siswa? Apakah ada keterbukaan publik?',
        expected_action: 'Tentukan label transparansi: "Karya Orisinal", "AI-Assisted", atau "Karya Berisiko Ditolak".'
      },
      {
        step_number: 4,
        title: 'Penerbitan Sertifikat Deklarasi Orisinalitas',
        description: 'Susun surat pernyataan integritas akademik/profesional untuk klien penerbit.',
        expected_action: 'Lampirkan hasil audit ke dalam berkas pengumpulan LKPD.'
      }
    ],
    simulation_config: {
      simulation_type: 'ai_asset_ethics_audit',
      title: 'Simulator Audit Etika & Deteksi Artifak AI DKV',
      description: 'Lakukan pemindaian fitur artifak gambar dan uji kepatuhan lisensi HAKI melalui pohon keputusan etis interaktif.',
      safety_guidelines: 'Gunakan dataset gambar simulasi yang aman untuk lingkungan pendidikan sekolah.',
      default_inputs: {
        assetId: 'AST-02',
        hasArtifacts: true,
        artistNameInPrompt: true,
        humanEffortPercentage: 15
      }
    },
    analysis_questions: [
      {
        id: 'q-dkv2-1',
        question: 'Mengapa menyebut nama seniman yang masih hidup dalam prompt AI komersial dapat memicu sengketa etika dan hukum?',
        kka_focus: 'Etika AI & HAKI',
        sample_answer_guide: 'Karena model AI dilatih menggunakan karya seniman tersebut tanpa izin (consent) atau kompensasi (royalti), sehingga mengeksploitasi identitas gaya seniman untuk keuntungan sepihak.'
      },
      {
        id: 'q-dkv2-2',
        question: 'Bagaimana pendekatan Berpikir Komputasional (Pengenalan Pola) membantu kita membedakan tekstur alami dengan artifak difusi AI?',
        kka_focus: 'Pengenalan Pola (Pattern Recognition)',
        sample_answer_guide: 'Melalui analisis pola pengulangan piksel dan konsistensi fisik cahaya; AI generatif sering gagal mempertahankan logika bayangan dan menghasilkan pola kabur (blurry hallucination) pada detail rumit.'
      },
      {
        id: 'q-dkv2-3',
        question: 'Jika siswa SMK menggunakan AI hanya untuk mencari ide konsep (brainstorming) lalu menggambar ulang 100% secara mandiri, apa status karyanya?',
        kka_focus: 'Klasifikasi Keputusan Etis',
        sample_answer_guide: 'Karyanya berstatus "AI-Inspired / Human-Executed". Siswa memiliki hak cipta penuh atas gambar akhir, namun tetap terpuji jika menyebutkan AI sebagai alat bantu eksplorasi ide.'
      }
    ],
    expected_final_product: 'Matriks Audit Etika Aset Kreatif dan Dokumen Deklarasi Transparansi AI untuk proyek klien DKV.',
    digital_lkpd: {
      lkpd_id: 'lkpd-dkv-02',
      title: 'LKPD Digital: Audit Etika AI & Hak Cipta Karya Kreatif',
      sections: [
        {
          section_title: 'Bagian A: Uji Kasus Aset Portofolio',
          tasks: [
            {
              id: 't-dkv2-a1',
              prompt: 'Berdasarkan simulator, masukkan hasil audit untuk aset AST-02 dan AST-03:',
              input_type: 'table',
              table_columns: ['ID Aset', 'Skor Kepatuhan (0-100)', 'Kategori Etika', 'Tindakan yang Diwajibkan'],
              default_rows: [
                ['AST-02', '20', 'Pelanggaran Gaya / HAKI', 'Tarik dari portofolio klien'],
                ['AST-03', 'Isi skor...', 'Isi kategori...', 'Isi tindakan...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Rumusan Sikap Profesional Desainer',
          tasks: [
            {
              id: 't-dkv2-b1',
              prompt: 'Tuliskan rancangan teks disclaimer keterbukaan penggunaan AI yang akan Anda cantumkan pada deskripsi karya portofolio Anda:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Analisis Cacat Visual & Pola Artifak AI', weight: 25, description: 'Ketelitian mendeteksi kelemahan render gambar generatif.' },
      { id: 'r2', name: 'Penerapan Kaidah Etika AI & HAKI', weight: 30, description: 'Kedalaman argumen hukum hak cipta dan perlindungan kreator manusia.' },
      { id: 'r3', name: 'Alur Pohon Keputusan Audit', weight: 25, description: 'Ketepatan klasifikasi risiko portofolio berdasarkan data kasus.' },
      { id: 'r4', name: 'Kejelasan Dokumen Deklarasi Transparansi', weight: 20, description: 'Profesionalisme bahasa dalam menyusun surat pernyataan karya.' }
    ],
    success_criteria: [
      'Mampu mengklasifikasikan 5 sampel aset ke dalam kategori risiko etika yang tepat.',
      'Dapat mengidentifikasi minimal 3 jenis artifak khas citra AI.',
      'Menyusun teks deklarasi orisinalitas yang memenuhi standar industri kreatif.'
    ],
    reflection_prompts: [
      'Apakah kehadiran AI menurunkan nilai keahlian seorang desainer grafis, atau justru menuntut kita menjadi kurator yang lebih kritis?',
      'Nilai integritas apa yang paling dipertaruhkan ketika seorang kreator mengklaim karya buatan mesin sebagai hasil keringatnya sendiri?'
    ]
  },

  // ==========================================================================
  // 2. TKP - TEKNIK KONSTRUKSI & PERUMAHAN
  // ==========================================================================
  {
    project_id: 'prj-tkp-01',
    major_code: 'TKP',
    major_name: 'Teknik Konstruksi & Perumahan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Algoritma Estimasi Kebutuhan Material Sloof Pondasi Bangunan Sederhana',
    problem_statement: 'Pada proyek pembangunan perumahan sederhana tipe 36, mandor dan tukang sering mengalami kerugian akibat selisih perhitungan material semen, pasir, dan kerikil cor sloof karena perhitungan volume beton masih dilakukan secara taksiran manual yang tidak konsisten.',
    learning_objectives: [
      'Mendekomposisi struktur sloof beton bertulang menjadi variabel dimensi geometris (panjang, lebar, tinggi penampang).',
      'Menyusun algoritma sekuensial perhitungan volume beton dan konversi kebutuhan sak semen (50 kg), pasir (m³), dan kerikil split (m³) dengan rasio SNI 1:2:3.',
      'Menerapkan fungsi pembulatan ke atas (CEIL) komputasional untuk memastikan tidak ada kekurangan material di lokasi proyek.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi struktur sloof per segmen dinding dan abstraksi koefisien campuran material standar.',
      algorithm: 'Algoritma sekuensial berurutan: Hitung Total Panjang -> Hitung Volume -> Kalikan Koefisien -> Bulatkan Stok.',
      data_processing: 'Kalkulasi variabel numerik dan penyajian rekapitulasi data anggaran material.',
      ai_or_ethics: 'Kejujuran takaran bahan bangunan dan keselamatan penghuni rumah (mencegah korupsi semen).'
    },
    realistic_scenario: 'Siswa kelas X TKP ditugaskan menyusun lembar hitung otomatis untuk proyek bedah rumah warga. Dana bantuan terbatas, sehingga perhitungan material beton sloof ukuran 15 cm x 20 cm harus presisi agar bangunan kokoh tahan gempa tanpa membuang-buang anggaran.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Denah Segmen Sloof Rumah Sederhana',
      description: 'Panjang bentang dinding pada denah rumah untuk dihitung total volume balok sloofnya.',
      headers: ['Segmen Dinding', 'Arah Bentang', 'Panjang (meter)', 'Lebar Sloof (meter)', 'Tinggi Sloof (meter)'],
      rows: [
        ['Sloof A-1', 'Utara (Dinding Utama Depan)', 6.0, 0.15, 0.20],
        ['Sloof A-2', 'Selatan (Dinding Belakang)', 6.0, 0.15, 0.20],
        ['Sloof B-1', 'Timur (Dinding Samping Kanan)', 6.0, 0.15, 0.20],
        ['Sloof B-2', 'Barat (Dinding Samping Kiri)', 6.0, 0.15, 0.20],
        ['Sloof C-1', 'Tengah (Sekat Kamar Tidur)', 3.0, 0.15, 0.20],
        ['Sloof C-2', 'Tengah (Sekat Kamar Mandi)', 3.0, 0.15, 0.20]
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Penjumlahan Total Panjang Balok Sloof',
        description: 'Lakukan penjumlahan seluruh panjang segmen dinding untuk mendapatkan variabel L_total (meter).',
        expected_action: 'Gunakan operator akumulasi penambahan data.'
      },
      {
        step_number: 2,
        title: 'Kalkulasi Volume Kubikasi Beton',
        description: 'Hitung Volume (m³) = L_total * Lebar * Tinggi penampang sloof.',
        expected_action: 'Perhatikan konversi satuan dari sentimeter ke meter (15 cm = 0.15 m).'
      },
      {
        step_number: 3,
        title: 'Perkalian Koefisien Campuran Mutu K-175 / SNI',
        description: 'Semen (sak) = Volume * 6.5 sak/m³; Pasir = Volume * 0.54 m³; Kerikil Split = Volume * 0.81 m³.',
        expected_action: 'Gunakan faktor pengali standar kejuruan teknik sipil.'
      },
      {
        step_number: 4,
        title: 'Penerapan Logika Pembulatan & Faktor Susut (Waste 5%)',
        description: 'Tambahkan faktor keamanan 5% untuk ceceran, lalu bulatkan jumlah sak semen ke bilangan bulat terdekat ke atas.',
        expected_action: 'Hasilkan rekapitulasi kebutuhan bahan jadi yang siap dibeli ke toko material.'
      }
    ],
    simulation_config: {
      simulation_type: 'volume_material_estimator',
      title: 'Simulator Estimator Material Beton Sloof TKP',
      description: 'Hitung volume kubikasi beton struktur pondasi dan estimasi kebutuhan semen, pasir, dan split secara otomatis.',
      safety_guidelines: 'Simulasi komputasi numerik aman di peramban. Tidak ada interaksi bahan kimia semen basah.',
      default_inputs: {
        totalLengthMeters: 30.0,
        widthCm: 15,
        heightCm: 20,
        safetyWastePercent: 5
      }
    },
    analysis_questions: [
      {
        id: 'q-tkp1-1',
        question: 'Berapakah total volume beton sloof jika total panjang dinding adalah 30 meter dengan penampang 15 cm x 20 cm?',
        kka_focus: 'Perhitungan Variabel Geometri',
        sample_answer_guide: 'Volume = 30 m x 0.15 m x 0.20 m = 0.9 m³.'
      },
      {
        id: 'q-tkp1-2',
        question: 'Mengapa dalam pemrograman estimasi logistik bangunan, kita harus menggunakan pembulatan ke atas (ceiling) daripada pembulatan biasa (round)?',
        kka_focus: 'Algoritma & Batasan Logika',
        sample_answer_guide: 'Karena semen hanya dijual per sak utuh. Jika dibutuhkan 5.2 sak lalu dibulatkan ke bawah menjadi 5 sak, pengecoran akan terhenti di tengah jalan dan struktur beton menjadi cacat sambungan dingin (cold joint).'
      },
      {
        id: 'q-tkp1-3',
        question: 'Jelaskan risiko etika profesi jika seorang pengawas bangunan sengaja mengurangi takaran sak semen hasil perhitungan algoritma!',
        kka_focus: 'Etika Keselamatan Bangunan',
        sample_answer_guide: 'Mengurangi semen menurunkan mutu kuat tekan beton, yang berakibat fatal pada runtuhnya pondasi saat terjadi gempa dan membahayakan keselamatan jiwa penghuni rumah.'
      }
    ],
    expected_final_product: 'Aplikasi Spreadsheet / Lembar Hitung Otomatis Kebutuhan Bahan Sloof yang dilengkapi diagram alir algoritma perhitungan.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tkp-01',
      title: 'LKPD Digital: Algoritma Estimasi Kubikasi Material Sloof',
      sections: [
        {
          section_title: 'Bagian A: Identifikasi Variabel & Perhitungan Manual Terpandu',
          tasks: [
            {
              id: 't-tkp1-a1',
              prompt: 'Berdasarkan data 6 segmen sloof, hitung akumulasi total panjang dan volume betonnya:',
              input_type: 'table',
              table_columns: ['Parameter', 'Nilai Perhitungan', 'Satuan', 'Rumus yang Digunakan'],
              default_rows: [
                ['Total Panjang Sloof', '27.0', 'meter', 'Penjumlahan Segmen A1..C2'],
                ['Volume Bersih Beton', '0.81', 'm³', 'Panjang x 0.15 x 0.20'],
                ['Volume + Waste 5%', 'Isi nilai...', 'm³', 'Volume x 1.05'],
                ['Jumlah Sak Semen', 'Isi nilai...', 'sak (50kg)', 'Volume x 6.5']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Refleksi Algoritmik',
          tasks: [
            {
              id: 't-tkp1-b1',
              prompt: 'Tuliskan langkah-langkah logika pemrograman jika lebar sloof diubah menjadi 20 cm dan tingginya 30 cm:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Dekomposisi Struktur Geometris Bangunan', weight: 25, description: 'Kemampuan mengurai denah menjadi elemen perhitungan panjang dan luas.' },
      { id: 'r2', name: 'Ketepatan Algoritma Konversi Material SNI', weight: 30, description: 'Akurasi rumus volume dan faktor pengali campuran beton.' },
      { id: 'r3', name: 'Penerapan Logika Pembulatan Logistik', weight: 25, description: 'Ketepatan menggunakan ceiling function dan antisipasi susut bahan.' },
      { id: 'r4', name: 'Kesadaran Etika K3 & Mutu Konstruksi', weight: 20, description: 'Komitmen terhadap kejujuran spesifikasi teknis untuk keamanan publik.' }
    ],
    success_criteria: [
      'Menghitung volume total beton sloof dari data denah dengan 100% akurat.',
      'Dapat menentukan jumlah zak semen, pasir m³, dan split m³ dengan pembulatan aman.',
      'Mampu menjelaskan diagram alir algoritma estimasi kepada teman sebaya.'
    ],
    reflection_prompts: [
      'Bagaimana berpikir komputasional membantu tukang dan mandor menghemat biaya tanpa mengurangi kekuatan struktur bangunan?',
      'Jika Anda kelak menjadi pengembang perumahan, mengapa rumus transparan lebih dipercaya konsumen daripada taksiran perkiraan?'
    ]
  },
  {
    project_id: 'prj-tkp-02',
    major_code: 'TKP',
    major_name: 'Teknik Konstruksi & Perumahan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Klasifikasi Pola Retak Dinding Bangunan Berbasis Pohon Keputusan (Decision Tree)',
    problem_statement: 'Setelah terjadi guncangan gempa bumi ringan atau proses penurunan tanah pada gedung sekolah, guru dan siswa sering cemas melihat retakan dinding. Banyak yang kesulitan membedakan mana retak plesteran non-struktural yang aman dan mana retak diagonal tembus yang menandakan kegagalan struktur sloof/kolom.',
    learning_objectives: [
      'Mengidentifikasi parameter karakteristik fisik retakan (lebar celah dalam mm, arah garis, kedalaman tembus bata, dan lokasi pertemuan balok-kolom).',
      'Membangun model klasifikasi berbasis aturan (Rule-based Decision Tree) untuk menentukan tingkat keparahan risiko bangunan (Aman/Hijau, Waspada/Kuning, Bahaya/Merah).',
      'Menghasilkan rekomendasi tindakan mitigasi bencana berbasis data observasi lapangan.'
    ],
    kka_concepts: {
      computational_thinking: 'Pengenalan pola retak (diagonal vs vertikal vs acak rambut) dan dekomposisi parameter risiko fisik.',
      algorithm: 'Pohon keputusan biner bertingkat (Decision Tree Classifier) dengan cabang multi-kondisi.',
      data_processing: 'Kompilasi log observasi lapangan ke dalam tabel data inspeksi struktural.',
      ai_or_ethics: 'Prinsip Keandalan AI dalam Keselamatan Bangunan & Pencegahan Korban Jiwa Gempa.'
    },
    realistic_scenario: 'Tim Palang Merah Remaja dan Jurusan TKP membentuk tim tanggap darurat pasca gempa 4.8 SR di kabupaten. Siswa ditugaskan melakukan inspeksi cepat 8 ruang kelas dengan panduan alur logika komputasi untuk memutuskan apakah ruang kelas boleh dimasuki kembali untuk belajar.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Log Inspeksi Retak Gedung Sekolah',
      description: 'Data hasil pengukuran 6 sampel retakan dinding di gedung bengkel dan laboratorium.',
      headers: ['Titik Sampel', 'Lokasi Elemen', 'Lebar Retak (mm)', 'Arah Retakan', 'Tembus Kedua Sisi?', 'Status Rekomendasi'],
      rows: [
        ['SMP-01', 'Dinding Bawah Jendela', 0.5, 'Vertikal', 'Tidak', 'Ringan (Plaster Crazing)'],
        ['SMP-02', 'Sudut Pertemuan Balok & Kolom', 3.5, 'Diagonal 45 Derajat', 'Ya (Tembus)', 'Kritis (Bahaya Geser Struktur)'],
        ['SMP-03', 'Tengah Dinding Sekat', 1.2, 'Vertikal Lurus', 'Tidak', 'Sedang (Perlu Pemantauan)'],
        ['SMP-04', 'Dinding Luar Dekat Pondasi', 4.0, 'Diagonal Tangga', 'Ya (Tembus)', 'Kritis (Penurunan Pondasi)'],
        ['SMP-05', 'Permukaan Acian Dinding', 0.2, 'Pola Rambut Acak', 'Tidak', 'Sangat Ringan (Non-Struktural)'],
        ['SMP-06', 'Sekitar Kusen Pintu', 2.0, 'Diagonal Pendek', 'Tidak', 'Sedang (Konsentrasi Tegangan)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pengukuran & Ekstraksi Ciri Fisik Retak',
        description: 'Ukur lebar retak menggunakan penggaris retak (crack gauge) dan tentukan arah geometri retakan.',
        expected_action: 'Catat data ke dalam parameter input simulasi.'
      },
      {
        step_number: 2,
        title: 'Penelusuran Logika Pohon Keputusan',
        description: 'Algoritma memeriksa simpul pertama: JIKA lebar >= 2.0 mm DAN tembus kedua sisi -> Jalur Risiko Tinggi.',
        expected_action: 'Periksa simpul kedua: JIKA arah == "Diagonal" -> Indikasi tegangan geser (Shear Failure).'
      },
      {
        step_number: 3,
        title: 'Penetapan Klasifikasi Status Bangunan',
        description: 'Simulasi menghasilkan kategori: HIJAU (Aman ditempati), KUNING (Perlu perbaikan non-darurat), atau MERAH (Evakuasi segera).',
        expected_action: 'Amati alasan logis di balik keputusan algoritma.'
      },
      {
        step_number: 4,
        title: 'Penyusunan Rencana Mitigasi Teknis',
        description: 'Untuk status MERAH, sarankan pemasangan perancah penopang darurat (propping) dan audit ahli teknik sipil.',
        expected_action: 'Tuliskan laporan resmi ke dalam form LKPD digital.'
      }
    ],
    simulation_config: {
      simulation_type: 'crack_pattern_classifier',
      title: 'Simulator Klasifikasi Pola Retak Bangunan TKP',
      description: 'Klasifikasikan keparahan kerusakan struktural dinding bangunan menggunakan model pohon keputusan komputasional.',
      safety_guidelines: 'Inspeksi virtual menggunakan data foto kasus. Dilarang mendekati dinding retak parah di dunia nyata tanpa helm K3 dan izin ahli.',
      default_inputs: {
        crackWidthMm: 3.5,
        crackOrientation: 'Diagonal',
        isThroughWall: true,
        isNearStructuralJoint: true
      }
    },
    analysis_questions: [
      {
        id: 'q-tkp2-1',
        question: 'Mengapa retak berbentuk diagonal (kemiringan sekitar 45 derajat) jauh lebih berbahaya daripada retak vertikal pada dinding?',
        kka_focus: 'Pengenalan Pola & Analisis Gaya',
        sample_answer_guide: 'Karena retak diagonal 45 derajat menandakan terjadinya gaya geser (shear stress) akibat penurunan pondasi yang tidak merata atau gaya inersia gempa bumi, yang dapat meruntuhkan dinding penopang.'
      },
      {
        id: 'q-tkp2-2',
        question: 'Tuliskan representasi IF-THEN-ELSE dalam bentuk aturan pakar untuk mendeteksi status "MERAH (Evakuasi Segera)"!',
        kka_focus: 'Algoritma Aturan Pakar (Rule-based AI)',
        sample_answer_guide: 'JIKA (Lebar >= 2.0 mm) DAN (Arah == "Diagonal") DAN (TembusKeduaSisi == TRUE) MAKA Status = "MERAH (Evakuasi Segera)".'
      },
      {
        id: 'q-tkp2-3',
        question: 'Mengapa dalam sistem pendukung keputusan keselamatan, kita tidak boleh hanya mengandalkan satu parameter (misal lebar saja)?',
        kka_focus: 'Multi-Variabel & Berpikir Kritis',
        sample_answer_guide: 'Karena retak lebar 2 mm akibat plesteran terkelupas (non-struktural) tidak berbahaya, sedangkan retak 1.5 mm yang menembus beton kolom struktural sangat fatal. Keputusan harus menggabungkan multi-faktor.'
      }
    ],
    expected_final_product: 'Peta Status Keamanan Bangunan Sekolah dan Laporan Rekomendasi Audit Struktural berbasis Pohon Keputusan Komputasional.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tkp-02',
      title: 'LKPD Digital: Pohon Keputusan Klasifikasi Retak Bangunan',
      sections: [
        {
          section_title: 'Bagian A: Simulasi Pengambilan Keputusan Sampel Kasus',
          tasks: [
            {
              id: 't-tkp2-a1',
              prompt: 'Uji sampel SMP-02 dan SMP-05 menggunakan simulator pohon keputusan dan lengkapi tabel berikut:',
              input_type: 'table',
              table_columns: ['Titik Sampel', 'Tingkat Bahaya', 'Warna Status', 'Tindakan Evakuasi/Perbaikan'],
              default_rows: [
                ['SMP-02', 'Kritis Struktural', 'MERAH', 'Pasang garis pembatas, kosongkan ruangan'],
                ['SMP-05', 'Isi tingkat...', 'Isi status...', 'Isi tindakan...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Diagram Logika Siswa',
          tasks: [
            {
              id: 't-tkp2-b1',
              prompt: 'Gambarkan secara tekstual percabangan logika pohon keputusan yang Anda susun dari simpul akar hingga daun:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Analisis Parameter Fisik Kerusakan', weight: 25, description: 'Ketepatan mengidentifikasi lebar, arah, dan tembus dinding.' },
      { id: 'r2', name: 'Penyusunan Pohon Keputusan Komputasional', weight: 30, description: 'Kebenaran alur percabangan dan kelengkapan aturan inferensi.' },
      { id: 'r3', name: 'Validitas Keputusan Mitigasi Bencana', weight: 25, description: 'Kesesuaian rekomendasi perbaikan teknis dengan tingkat keparahan.' },
      { id: 'r4', name: 'Kerapian LKPD & Kesadaran K3', weight: 20, description: 'Sikap kehati-hatian dalam mengutamakan keselamatan manusia.' }
    ],
    success_criteria: [
      'Mampu mengklasifikasikan 6 data sampel retak dengan akurasi 100% menggunakan model aturan.',
      'Dapat menjelaskan logika di balik jalur percabangan status Merah, Kuning, dan Hijau.',
      'Menyusun rekomendasi mitigasi yang realistis untuk sekolah.'
    ],
    reflection_prompts: [
      'Bagaimana kecerdasan artifisial berbasis aturan (Rule-based AI) dapat bertindak seperti asisten insinyur sipil di lokasi bencana?',
      'Mengapa ketelitian observasi data di lapangan menentukan hidup matinya penghuni gedung?'
    ]
  },

  // ==========================================================================
  // 3. DPIB - DESAIN PEMODELAN DAN INFORMASI BANGUNAN
  // ==========================================================================
  {
    project_id: 'prj-dpib-01',
    major_code: 'DPIB',
    major_name: 'Desain Pemodelan & Informasi Bangunan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Konversi Skala Arsitektur CAD & Validasi Aturan Koefisien Dasar Bangunan (KDB)',
    problem_statement: 'Siswa juru gambar arsitektur sering melakukan kesalahan proporsi saat mengubah gambar sketsa denah ke perangkat lunak CAD dengan skala berbeda (misal 1:100 ke 1:50). Selain itu, sering terabaikan kepatuhan regulasi tata kota mengenai Koefisien Dasar Bangunan (KDB maksimal 60%), sehingga luas resapan air hijau dilanggar.',
    learning_objectives: [
      'Menerapkan abstraksi matematis untuk konversi ukuran gambar (milimeter/sentimeter pada viewport) ke ukuran nyata (meter persegi di lapangan).',
      'Menyusun algoritma validasi komputasional untuk memeriksa apakah rasio Luas Lantai Dasar terhadap Luas Lahan mematuhi batas KDB zonasi daerah.',
      'Mengolah data tabel tapak kavling untuk menghitung luas Ruang Terbuka Hijau (RTH) yang wajib dipertahankan.'
    ],
    kka_concepts: {
      computational_thinking: 'Abstraksi representasi skala dan dekomposisi ruang lantai dasar vs ruang terbuka.',
      algorithm: 'Algoritma validasi batasan: Hitung Luas Terbangun -> Hitung % KDB -> Percabangan Legalitas IMB/PBG.',
      data_processing: 'Kalkulasi rasio persentase dan kompilasi data zonasi tata ruang perkotaan.',
      ai_or_ethics: 'Etika Lingkungan Berkelanjutan & Pencegahan Bencana Banjir Perkotaan.'
    },
    realistic_scenario: 'Kantor Konsultan Arsitek SMK menerima proyek desain rumah tinggal di kawasan resapan kota Bandung. Regulasi tata ruang membatasi KDB maksimal 60% dan mewajibkan KDH (Koefisien Daerah Hijau) minimal 20%. Siswa harus memprogram alat verifikasi otomatis sebelum gambar kerja diserahkan ke dinas perizinan.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Uji Kavling & Desain Denah DPIB',
      description: 'Data ukuran lahan dan rencana luas lantai dasar 5 kavling perumahan.',
      headers: ['Nomor Kavling', 'Panjang Lahan (m)', 'Lebar Lahan (m)', 'Luas Lantai Dasar (m²)', 'Batas KDB Resmi', 'Rencana Skala Gambar'],
      rows: [
        ['KV-01', 15.0, 10.0, 85.0, 60, '1:100'],
        ['KV-02', 12.0, 8.0, 65.0, 60, '1:100'],
        ['KV-03', 20.0, 12.0, 160.0, 60, '1:50'],
        ['KV-04', 10.0, 7.0, 52.0, 60, '1:100'],
        ['KV-05', 25.0, 15.0, 240.0, 60, '1:50']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Kalkulasi Luas Total Lahan Kavling',
        description: 'Hitung Luas Lahan (m²) = Panjang Lahan * Lebar Lahan.',
        expected_action: 'Simpan nilai ke dalam variabel luasLahan.'
      },
      {
        step_number: 2,
        title: 'Penghitungan Nilai KDB Aktual Desain',
        description: 'Hitung KDB_aktual (%) = (Luas Lantai Dasar / Luas Lahan) * 100%.',
        expected_action: 'Hasilkan persentase terukur dengan 2 angka di belakang koma.'
      },
      {
        step_number: 3,
        title: 'Penerapan Aturan Validasi Hukum Zonasi',
        description: 'JIKA KDB_aktual <= Batas_KDB_Resmi MAKA "Disetujui / Taat Regulasi" LAINNYA "Ditolak / Melanggar KDB".',
        expected_action: 'Uji algoritma terhadap seluruh data baris kavling.'
      },
      {
        step_number: 4,
        title: 'Konversi Satuan Gambar CAD Berdasarkan Skala',
        description: 'Hitung panjang garis pada lembar kertas A3 (cm) = (Panjang Nyata (m) * 100) / Nilai_Skala.',
        expected_action: 'Verifikasi kesesuaian gambar teknis arsitektur.'
      }
    ],
    simulation_config: {
      simulation_type: 'scale_area_optimizer',
      title: 'Simulator Konversi Skala Arsitektur & KDB Checker DPIB',
      description: 'Verifikasi kepatuhan Koefisien Dasar Bangunan (KDB) dan konversi skala viewport CAD secara otomatis.',
      safety_guidelines: 'Simulasi pemodelan digital 100% aman di browser tanpa kebutuhan lisensi CAD berbayar.',
      default_inputs: {
        lotLengthM: 15.0,
        lotWidthM: 10.0,
        groundFloorAreaM2: 85.0,
        maxKdbPercent: 60,
        scaleFactor: 100
      }
    },
    analysis_questions: [
      {
        id: 'q-dpib1-1',
        question: 'Pada kavling KV-03 (Lahan 20m x 12m, Lantai 160 m²), apakah desain tersebut melanggar batas KDB 60%? Jelaskan perhitungannya!',
        kka_focus: 'Perhitungan Rasio & Validasi',
        sample_answer_guide: 'Luas Lahan = 240 m². KDB Aktual = (160 / 240) * 100% = 66.67%. Karena 66.67% > 60%, maka desain KV-03 MELANGGAR regulasi tata ruang dan harus dikurangi luas lantainya minimal 16 m².'
      },
      {
        id: 'q-dpib1-2',
        question: 'Bagaimana rumus komputasi untuk menghitung panjang garis dinding 6 meter jika digambar pada skala 1:50 di lembar kerja AutoCAD dalam satuan milimeter?',
        kka_focus: 'Konversi Skala Komputasi',
        sample_answer_guide: 'Panjang nyata = 6000 mm. Pada skala 1:50, ukuran gambar = 6000 mm / 50 = 120 mm (atau 12 cm).'
      },
      {
        id: 'q-dpib1-3',
        question: 'Mengapa arsitek era modern wajib menyertakan algoritma validasi lingkungan dalam aplikasi Building Information Modeling (BIM)?',
        kka_focus: 'Etika Lingkungan & BIM',
        sample_answer_guide: 'Untuk mencegah kesalahan manusia (human error) yang dapat menyebabkan banjir akibat hilangnya daerah resapan air tanah dan penolakan izin mendirikan bangunan oleh pemerintah kota.'
      }
    ],
    expected_final_product: 'Dokumen Verifikasi Kepatuhan KDB Digital dan Tabel Konversi Skala Gambar CAD untuk portofolio rancang bangun.',
    digital_lkpd: {
      lkpd_id: 'lkpd-dpib-01',
      title: 'LKPD Digital: Verifikasi KDB & Skala Gambar Arsitektur',
      sections: [
        {
          section_title: 'Bagian A: Uji Kepatuhan 5 Kavling Perumahan',
          tasks: [
            {
              id: 't-dpib1-a1',
              prompt: 'Gunakan simulator untuk memvalidasi status KDB kavling KV-01 s.d KV-03:',
              input_type: 'table',
              table_columns: ['Nomor Kavling', 'Luas Lahan (m²)', 'KDB Aktual (%)', 'Status Perizinan (Lolos/Tolak)', 'Kelebihan/Sisa Luas (m²)'],
              default_rows: [
                ['KV-01', '150.0', '56.67%', 'Lolos', 'Sisa 5.0 m²'],
                ['KV-02', 'Isi luas...', 'Isi KDB...', 'Isi status...', 'Isi selisih...'],
                ['KV-03', 'Isi luas...', 'Isi KDB...', 'Isi status...', 'Isi selisih...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Solusi Desain Komputasional',
          tasks: [
            {
              id: 't-dpib1-b1',
              prompt: 'Tuliskan usulan desain revisi jika sebuah kavling terbukti melanggar KDB namun klien tetap membutuhkan luas ruang yang sama:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Akurasi Perhitungan Geometri Luas Tapak', weight: 25, description: 'Ketepatan formula matematis perkalian dan persentase luas.' },
      { id: 'r2', name: 'Penerapan Logika Batasan KDB Zonasi', weight: 30, description: 'Kebenaran aturan percabangan kelayakan izin tata kota.' },
      { id: 'r3', name: 'Keahlian Konversi Skala Arsitektur CAD', weight: 25, description: 'Ketepatan konversi ukuran dunia nyata ke viewport digital.' },
      { id: 'r4', name: 'Kesadaran Konservasi Ruang Hijau (KDH)', weight: 20, description: 'Komitmen merancang bangunan ramah lingkungan berkelanjutan.' }
    ],
    success_criteria: [
      'Menghitung luas lahan dan % KDB pada 5 sampel kavling secara presisi.',
      'Mendeteksi kavling yang melanggar batas KDB dan menghitung selisih luasan koreksinya.',
      'Melakukan konversi skala arsitektur dengan satuan mm, cm, dan meter tanpa galat.'
    ],
    reflection_prompts: [
      'Bagaimana komputasi data membantu arsitek mematuhi hukum tata ruang secara otomatis?',
      'Jika klien memaksa membangun melebihi KDB, argumen etis komputasional apa yang akan Anda sampaikan?'
    ]
  },
  {
    project_id: 'prj-dpib-02',
    major_code: 'DPIB',
    major_name: 'Desain Pemodelan & Informasi Bangunan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Simulasi Komputasi Pencahayaan Alami & Estimasi Beban Panas Ruang Kelas Hijau',
    problem_statement: 'Banyak ruang kelas dan bengkel praktik SMK terasa gerah dan boros lampu listrik di siang hari karena arsitek tidak memperhitungkan orientasi bukaan jendela terhadap lintasan matahari tropis. Ruang menghadap barat menerima radiasi panas berlebih (glare), sedangkan bukaan yang salah kekurangan cahaya alami (di bawah standar 250 lux).',
    learning_objectives: [
      'Menganalisis dataset deret waktu tingkat pencahayaan (lux) dan suhu (°C) pada berbagai arah orientasi bangunan.',
      'Menerapkan algoritma optimasi dimensi kanopi sun-shading untuk memfilter radiasi termal namun tetap mempertahankan intensitas lux alami optimal.',
      'Menghitung estimasi penghematan daya listrik lampu tahunan (kWh) menggunakan pemodelan komputasional sederhana.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi faktor iklim mikro (intensitas cahaya vs beban radiasi termal) dan pemodelan matematis.',
      algorithm: 'Algoritma optimasi multi-kriteria: Cari sudut kanopi yang memaksimalkan Lux (>=250 lux) dan meminimalkan Suhu (<=28°C).',
      data_processing: 'Analisis data time-series pencahayaan dari jam 08.00 hingga 16.00 WIB.',
      ai_or_ethics: 'Prinsip Bangunan Hijau (Green Building) & Efisiensi Energi Berkelanjutan (SDG 7 & 13).'
    },
    realistic_scenario: 'SMK mengikuti lomba Sekolah Adiwiyata Mandiri. Siswa DPIB ditugaskan mendesain renovasi fasad jendela ruang laboratorium KKA agar pada jam sekolah (08.00-15.00) lampu tidak perlu dinyalakan namun ruangan tidak panas menyengat.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Sensor Lux & Suhu Ruang Kelas Tropis',
      description: 'Rekaman rata-rata intensitas cahaya dan suhu pada 4 arah orientasi jendela pada siang hari.',
      headers: ['Waktu Pengamatan', 'Orientasi Hadap Jendela', 'Intensitas Cahaya Alami (Lux)', 'Suhu Ruang (°C)', 'Kebutuhan Lampu Tambahan'],
      rows: [
        ['Pagi (08:00)', 'Timur', 420, 26.5, 'Tidak Perlu (Cukup)'],
        ['Siang (12:00)', 'Timur', 310, 28.0, 'Tidak Perlu (Cukup)'],
        ['Siang (12:00)', 'Selatan', 380, 27.5, 'Tidak Perlu (Ideal)'],
        ['Sore (14:30)', 'Barat (Tanpa Shading)', 890, 33.5, 'Silau Parah & Panas Menyengat'],
        ['Sore (14:30)', 'Barat (Dengan Kanopi 60cm)', 360, 28.2, 'Sangat Ideal & Sejuk'],
        ['Siang (12:00)', 'Utara', 340, 27.0, 'Tidak Perlu (Ideal)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pemetaan Arah Orientasi Jendela Fasad',
        description: 'Tentukan arah kompas hadap jendela ruang belajar (Utara, Selatan, Timur, Barat).',
        expected_action: 'Perhatikan bahwa di Indonesia khatulistiwa, bukaan Utara dan Selatan adalah orientasi paling ideal.'
      },
      {
        step_number: 2,
        title: 'Pemeriksaan Ambang Batas Lux & Standar SNI',
        description: 'Standar SNI 03-6197 menetapkan pencahayaan ruang kelas minimal 250 lux dan maksimal 500 lux (di atas 700 lux silau).',
        expected_action: 'Gunakan operator pembanding: 250 <= Lux <= 500.'
      },
      {
        step_number: 3,
        title: 'Simulasi Pengaruh Panjang Kanopi Penahan Panas',
        description: 'Atur slider panjang kanopi (overhang) dari 0 cm hingga 100 cm pada simulasi untuk mengamati penurunan radiasi termal.',
        expected_action: 'Cari panjang kanopi optimal yang menurunkan suhu tanpa membuat ruangan gelap di bawah 250 lux.'
      },
      {
        step_number: 4,
        title: 'Estimasi Penghematan Listrik Lampu Tahunan',
        description: 'Hitung Penghematan (kWh) = Jumlah Lampu (8 x 40W) * Jam Mati Lampu (6 jam/hari) * 220 hari sekolah / 1000.',
        expected_action: 'Tampilkan hasil analisis efisiensi biaya listrik ke dalam laporan green building.'
      }
    ],
    simulation_config: {
      simulation_type: 'daylight_energy_calc',
      title: 'Simulator Pencahayaan Alami & Efisiensi Energi DPIB',
      description: 'Simulasikan distribusi cahaya alami lux dan dampak kanopi fasad terhadap pengurangan beban pendingin AC.',
      safety_guidelines: 'Eksperimen virtual berbasis data fisika bangunan. Aman dan bebas risiko termal fisik.',
      default_inputs: {
        orientation: 'Barat',
        overhangLengthCm: 60,
        windowAreaM2: 8.0,
        roomFloorAreaM2: 56.0,
        lampCount: 8,
        lampWattage: 36
      }
    },
    analysis_questions: [
      {
        id: 'q-dpib2-1',
        question: 'Mengapa jendela yang menghadap ke arah Barat tanpa kanopi menghasilkan suhu ruang tertinggi (33.5°C) pada sore hari?',
        kka_focus: 'Analisis Data Fisis Bangunan',
        sample_answer_guide: 'Karena pada sore hari sudut elevasi matahari rendah sehingga radiasi langsung sinar matahari menembus jauh ke dalam ruangan kaca, memicu efek rumah kaca internal yang menaikkan suhu termal.'
      },
      {
        id: 'q-dpib2-2',
        question: 'Tuliskan formula perhitungan komputasional untuk menentukan berapa rupiah tagihan listrik yang dihemat per tahun jika 8 unit lampu TL 36 Watt dipadamkan 6 jam sehari (asumsi tarif listrik Rp 1.444 per kWh)!',
        kka_focus: 'Pemodelan Algoritma Finansial Hijau',
        sample_answer_guide: 'Daya = 8 * 36W = 288W = 0.288 kW. Energi/hari = 0.288 kW * 6 jam = 1.728 kWh/hari. Energi/tahun (220 hari) = 380.16 kWh. Hemat Rupiah = 380.16 * 1444 = Rp 548.951 per tahun.'
      },
      {
        id: 'q-dpib2-3',
        question: 'Bagaimana peran data sensor Internet of Things (IoT) dalam mengotomatisasi buka-tutup tirai jendela pintar di era smart school?',
        kka_focus: 'AI & Otomasi Cerdas',
        sample_answer_guide: 'Sensor LDR (cahaya) dan suhu mengirim data real-time; mikrokontroler menjalankan algoritma JIKA lux > 600 MAKA motor stepper menurunkan tirai 50%, menjaga kenyamanan visual siswa secara adaptif.'
      }
    ],
    expected_final_product: 'Laporan Rekomendasi Fasad Pasif Bangunan Hijau dilengkapi grafik perbandingan lux dan estimasi penghematan energi tahunan.',
    digital_lkpd: {
      lkpd_id: 'lkpd-dpib-02',
      title: 'LKPD Digital: Simulasi Pencahayaan Alami & Hemat Energi',
      sections: [
        {
          section_title: 'Bagian A: Analisis Pengaruh Shading Fasad',
          tasks: [
            {
              id: 't-dpib2-a1',
              prompt: 'Uji variasi panjang kanopi pada jendela hadap Barat dan lengkapi tabel pengamatan:',
              input_type: 'table',
              table_columns: ['Panjang Kanopi (cm)', 'Intensitas Lux Siang', 'Suhu Ruang (°C)', 'Tingkat Kenyamanan Visual', 'Rekomendasi'],
              default_rows: [
                ['0 cm (Tanpa Kanopi)', '890 lux', '33.5 °C', 'Sangat Silau & Gerah', 'Ditolak'],
                ['30 cm', 'Isi lux...', 'Isi suhu...', 'Isi kenyamanan...', 'Isi rekomendasi...'],
                ['60 cm (Optimal)', 'Isi lux...', 'Isi suhu...', 'Isi kenyamanan...', 'Isi rekomendasi...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Komitmen Arsitektur Berkelanjutan',
          tasks: [
            {
              id: 't-dpib2-b1',
              prompt: 'Rangkum konsep berpikir komputasional apa saja yang Anda gunakan untuk menyelesaikan masalah suhu dan cahaya ruang kelas:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Analisis Data Time-Series Pencahayaan', weight: 25, description: 'Kemampuan membaca grafik fluktuasi lux dan suhu harian.' },
      { id: 'r2', name: 'Optimasi Multi-Parameter Fasad Bangunan', weight: 30, description: 'Ketepatan memilih dimensi kanopi yang menyeimbangkan lux dan suhu.' },
      { id: 'r3', name: 'Kalkulasi Matematis Efisiensi Energi', weight: 25, description: 'Akurasi perhitungan penghematan kWh dan konversi biaya listrik.' },
      { id: 'r4', name: 'Pemahaman Prinsip Arsitektur Hijau (SDGs)', weight: 20, description: 'Wawasan pelestarian lingkungan dan kenyamanan ruang belajar.' }
    ],
    success_criteria: [
      'Menemukan panjang kanopi fasad yang mempertahankan rentang lux 250 - 500 lux.',
      'Menghitung estimasi penghematan energi listrik tahunan dengan rumus yang tepat.',
      'Dapat menjelaskan hubungan orientasi kompas matahari dengan beban pendinginan ruangan.'
    ],
    reflection_prompts: [
      'Apakah bangunan modern harus selalu bergantung pada AC menyala sepanjang hari?',
      'Bagaimana arsitek cerdas menggunakan algoritma alam (sinar matahari dan angin) untuk merancang ruang belajar yang sehat dan hemat?'
    ]
  },

  // ==========================================================================
  // 4. TOI - TEKNIK OTOMASI INDUSTRI
  // ==========================================================================
  {
    project_id: 'prj-toi-01',
    major_code: 'TOI',
    major_name: 'Teknik Otomasi Industri',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Simulasi Diagram Alir Logika Pemilah Barang Konveyor Berdasarkan Sensor Ketinggian',
    problem_statement: 'Pada lini pengemasan pabrik otomatis, paket barang berukuran besar (tinggi > 150 mm) dan kecil (tinggi <= 150 mm) meluncur bersamaan di satu ban berjalan (konveyor). Jika penyortiran dilakukan manual oleh tangan manusia, timbul risiko terjepit mesin dan kelambatan distribusi.',
    learning_objectives: [
      'Menerapkan gerbang logika Boolean (AND, NOT) dan sensor fotoelektrik digital (sinyal HIGH/LOW) dalam sistem kontrol otomatis.',
      'Menyusun diagram alir (flowchart) dan algoritma percabangan kondisi kendali aktuator pendorong pneumatik (cylinder extend/retract).',
      'Menghitung akumulasi data statistik jumlah barang tersortir per kategori ukuran.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi siklus konveyor menjadi tahapan (Deteksi -> Evaluasi Kondisi -> Pemicuan Aktuator -> Reset).',
      algorithm: 'Algoritma percabangan waktu nyata (Real-time Event-Driven Branching): IF Sensor_Tinggi == 1 AND Sensor_Posisi == 1 THEN Aktifkan_Pneumatik.',
      data_processing: 'Penghitungan pencacah (counter variable) dan penghitungan laju throughput barang per menit.',
      ai_or_ethics: 'Keselamatan dan Kesehatan Kerja (K3) Otomasi Industri & Perlindungan Operator Manusia.'
    },
    realistic_scenario: 'Pabrik logistik modern bekerja sama dengan SMK untuk merancang miniatur sistem penyortir kardus paket e-commerce. Siswa TOI harus merancang program logika pengendali sebelum diaplikasikan ke Programmable Logic Controller (PLC) sesungguhnya.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Log Lintasan Paket Konveyor',
      description: 'Data stream 8 kardus yang melintas di depan sensor ketinggian dan sensor keberadaan.',
      headers: ['ID Paket', 'Waktu Deteksi', 'Sensor Keberadaan (0/1)', 'Sensor Ketinggian (0/1)', 'Tinggi Aktual (mm)', 'Target Saluran'],
      rows: [
        ['PKT-01', '08:00:02', 1, 0, 110, 'Jalur Kecil (Lurus)'],
        ['PKT-02', '08:00:05', 1, 1, 185, 'Jalur Besar (Pneumatik Aktif)'],
        ['PKT-03', '08:00:09', 1, 1, 205, 'Jalur Besar (Pneumatik Aktif)'],
        ['PKT-04', '08:00:14', 1, 0, 95, 'Jalur Kecil (Lurus)'],
        ['PKT-05', '08:00:18', 1, 0, 140, 'Jalur Kecil (Lurus)'],
        ['PKT-06', '08:00:23', 1, 1, 160, 'Jalur Besar (Pneumatik Aktif)'],
        ['PKT-07', '08:00:28', 1, 0, 120, 'Jalur Kecil (Lurus)'],
        ['PKT-08', '08:00:33', 1, 1, 190, 'Jalur Besar (Pneumatik Aktif)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pemetaan Variabel Masukan (Inputs) & Keluaran (Outputs)',
        description: 'Tentukan variabel biner: Input X0 (Sensor Keberadaan), Input X1 (Sensor Tinggi), Output Y0 (Silinder Pendorong), Output Y1 (Motor Konveyor).',
        expected_action: 'Dokumentasikan tabel I/O PLC.'
      },
      {
        step_number: 2,
        title: 'Penyusunan Logika Algoritma Sortir',
        description: 'JIKA X0 bernilai 1 DAN X1 bernilai 1, MAKA aktifkan Y0 selama 1.5 detik untuk mendorong barang ke konveyor cabang.',
        expected_action: 'Uji logika kombinasi gerbang AND pada simulator.'
      },
      {
        step_number: 3,
        title: 'Simulasi Siklus Berjalan & Pencacahan Data',
        description: 'Jalankan simulasi animasi konveyor, amati pergerakan kotak paket, dan periksa penambahan angka counter paket besar vs kecil.',
        expected_action: 'Pastikan tidak ada paket besar yang lolos ke jalur kecil.'
      },
      {
        step_number: 4,
        title: 'Pengujian Kondisi Darurat (Emergency Stop Logic)',
        description: 'Simulasikan penekanan tombol E-Stop (Input X2). Algoritma wajib menghentikan motor konveyor seketika (< 0.1 detik).',
        expected_action: 'Tuliskan prinsip interlock keselamatan industri pada LKPD.'
      }
    ],
    simulation_config: {
      simulation_type: 'conveyor_logic_flow',
      title: 'Simulator Konveyor Sortir Logika Industri TOI',
      description: 'Simulasikan kendali biner logika sensor dan pemicuan silinder pneumatik penyortir barang secara virtual.',
      safety_guidelines: 'Simulasi virtual aman. Menghindari bahaya terjepit mekanik rantai dan semburan tekanan udara pneumatik nyata.',
      default_inputs: {
        conveyorSpeedMps: 0.5,
        heightThresholdMm: 150,
        cylinderPulseDurationSec: 1.5,
        emergencyStopActive: false
      }
    },
    analysis_questions: [
      {
        id: 'q-toi1-1',
        question: 'Mengapa aktuator pendorong pneumatik membutuhkan kondisi (Sensor_Keberadaan AND Sensor_Tinggi) dan tidak cukup hanya Sensor_Tinggi saja?',
        kka_focus: 'Logika Gerbang Boolean',
        sample_answer_guide: 'Karena jika hanya sensor tinggi yang aktif (misal terkena pantulan cahaya atau gangguan debu saat tidak ada barang), silinder akan menembak ke ruang kosong dan membahayakan peralatan.'
      },
      {
        id: 'q-toi1-2',
        question: 'Tuliskan tabel kebenaran (truth table) dengan masukan X0, X1 dan keluaran Y0 (Silinder Pendorong)!',
        kka_focus: 'Representasi Tabel Kebenaran',
        sample_answer_guide: 'X0=0, X1=0 -> Y0=0; X0=0, X1=1 -> Y0=0; X0=1, X1=0 -> Y0=0; X0=1, X1=1 -> Y0=1 (Logika AND murni).'
      },
      {
        id: 'q-toi1-3',
        question: 'Dalam standar keselamatan industri (K3 Otomasi), mengapa tombol Emergency Stop selalu menggunakan kontak Normally Closed (NC)?',
        kka_focus: 'Prinsip Fail-Safe Design',
        sample_answer_guide: 'Prinsip Fail-Safe: jika kabel darurat putus atau sakelar rusak, sistem menganggapnya sebagai sinyal darurat dan langsung mematikan mesin, mencegah mesin tetap menyala saat kontrol keselamatan gagal.'
      }
    ],
    expected_final_product: 'Diagram Alir (Flowchart) Kontrol Sortir, Tabel I/O PLC, dan Laporan Uji Siklus Pemilahan Paket Otomatis.',
    digital_lkpd: {
      lkpd_id: 'lkpd-toi-01',
      title: 'LKPD Digital: Logika Kontrol Konveyor Otomasi',
      sections: [
        {
          section_title: 'Bagian A: Verifikasi Sinyal Sensor & Aksi Aktuator',
          tasks: [
            {
              id: 't-toi1-a1',
              prompt: 'Uji data paket PKT-01 s.d PKT-04 dan tentukan respon status kendali sistem:',
              input_type: 'table',
              table_columns: ['ID Paket', 'Tinggi (mm)', 'Kondisi Logika Boolean', 'Status Aktuator Y0', 'Jalur Akhir'],
              default_rows: [
                ['PKT-01', '110', '1 AND 0 = 0', 'Retract (Mati)', 'Jalur Kecil'],
                ['PKT-02', '185', '1 AND 1 = 1', 'Extend (Mendorong)', 'Jalur Besar'],
                ['PKT-03', 'Isi tinggi...', 'Isi logika...', 'Isi status...', 'Isi jalur...'],
                ['PKT-04', 'Isi tinggi...', 'Isi logika...', 'Isi status...', 'Isi jalur...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Penyusunan Algoritma Kendali',
          tasks: [
            {
              id: 't-toi1-b1',
              prompt: 'Tuliskan pseudocode instruksi berurutan dari saat paket terdeteksi hingga silinder kembali ke posisi semula (home position):',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemahaman Sinyal Sensor Digital & Biner', weight: 25, description: 'Ketepatan menerjemahkan kondisi fisik ke sinyal logika HIGH/LOW.' },
      { id: 'r2', name: 'Penyusunan Alur Diagram Alir (Flowchart)', weight: 30, description: 'Kelengkapan simbol flowchart, percabangan keputusan, dan perulangan.' },
      { id: 'r3', name: 'Analisis Tabel Kebenaran & Waktu Siklus', weight: 25, description: 'Kebenaran matriks logika gerbang Boolean dan pewaktuan tunda.' },
      { id: 'r4', name: 'Penerapan Kaidah K3 & Fail-Safe Sistem', weight: 20, description: 'Integrasi prosedur penghentian darurat untuk melindungi manusia.' }
    ],
    success_criteria: [
      'Menyelesaikan diagram alir pemilahan paket tanpa kesalahan logika percabangan.',
      'Memverifikasi keluaran aktuator pada 8 data sampel dengan tingkat keberhasilan 100%.',
      'Mampu menjelaskan konsep fail-safe pada rangkaian emergency stop industri.'
    ],
    reflection_prompts: [
      'Bagaimana cara kerja otak komputer industri (PLC) dalam mengeksekusi ribuan baris logika sensor dalam hitungan milidetik?',
      'Mengapa otomatisasi industri dirancang bukan untuk menggantikan manusia, melainkan membebaskan manusia dari pekerjaan fisik berbahaya dan berulang?'
    ]
  },
  {
    project_id: 'prj-toi-02',
    major_code: 'TOI',
    major_name: 'Teknik Otomasi Industri',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Deteksi Anomali Sensor Getaran & Suhu Motor Induksi (Predictive Maintenance)',
    problem_statement: 'Kerusakan mendadak pada motor listrik 3 fasa penggerak kompresor di pabrik kimia dapat menyebabkan ledakan pipa atau kerugian ratusan juta rupiah per jam akibat mesin mati total (breakdown). Pemeliharaan tradisional hanya menunggu motor rusak baru diperbaiki (Corrective Maintenance) atau jadwal ganti berkala yang sering terlambat mendeteksi keausan bearing.',
    learning_objectives: [
      'Menganalisis dataset time-series telemetri sensor getaran (vibration RMS mm/s) dan sensor suhu (°C) motor industri.',
      'Menerapkan algoritma deteksi anomali multi-ambang batas (Multi-threshold Anomaly Detection) berstandar ISO 10816.',
      'Menghitung indikator degradasi kesehatan mesin untuk memprediksi waktu sisa sebelum kegagalan (Remaining Useful Life dasar).'
    ],
    kka_concepts: {
      computational_thinking: 'Pengenalan pola tren kenaikan data sensor dan pemilahan derau data (noise filtering).',
      algorithm: 'Algoritma deteksi anomali bertingkat: Normal (<2.8 mm/s) -> Waspada (2.8 - 7.1 mm/s) -> Kritis (>7.1 mm/s) -> Trip.',
      data_processing: 'Kalkulasi moving average data getaran dan korelasi kenaikan suhu terhadap gesekan mekanis.',
      ai_or_ethics: 'Konsep Dasar AI Pemeliharaan Prediktif & Pencegahan Bencana Industri Pabrik.'
    },
    realistic_scenario: 'Siswa TOI magang di pembangkit listrik tenaga uap. Mereka dibekali rekaman 24 jam data sensor getaran bantalan (bearing) motor pompa sirkulasi air pendingin dan ditugaskan memprogram alarm peringatan dini sebelum bantalan motor macet total.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Sensor Telemetri Motor Induksi 24 Jam',
      description: 'Data log berkala getaran (mm/s) dan temperatur (°C) motor induksi 3 fasa 15 kW.',
      headers: ['Jam Operasi', 'Getaran RMS (mm/s)', 'Suhu Bearing (°C)', 'Arus Fasa (Ampere)', 'Status ISO 10816', 'Tindakan Sistem'],
      rows: [
        ['00:00 - 04:00', 1.8, 48.0, 22.4, 'Zone A (Kondisi Sangat Baik)', 'Operasi Normal'],
        ['04:00 - 08:00', 2.2, 51.5, 22.6, 'Zone A (Kondisi Baik)', 'Operasi Normal'],
        ['08:00 - 12:00', 3.4, 58.0, 23.1, 'Zone B (Dapat Diterima)', 'Kirim Notifikasi Teknisi'],
        ['12:00 - 16:00', 5.6, 69.5, 24.8, 'Zone C (Waspada Pelumasan)', 'Jadwalkan Injeksi Gemuk'],
        ['16:00 - 20:00', 8.4, 86.0, 27.5, 'Zone D (Bahaya Getaran Kritis)', 'Peringatan Alarm Suara'],
        ['20:00 - 22:00', 11.2, 98.5, 31.2, 'Zone D (Risiko Macet Bearing)', 'Perintah Emergency Trip Motor']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pembacaan Parameter Telemetri Motor',
        description: 'Amati aliran data getaran (mm/s) dan suhu (°C) pada dasbor simulasi.',
        expected_action: 'Identifikasi korelasi: apakah kenaikan getaran diiringi lonjakan suhu?'
      },
      {
        step_number: 2,
        title: 'Konfigurasi Ambang Batas Standar ISO 10816-3',
        description: 'Terapkan aturan batas standar getaran mesin kelas II: Zona A (<2.8), Zona B (2.8-4.5), Zona C (4.5-7.1), Zona D (>7.1 mm/s).',
        expected_action: 'Masukkan nilai threshold ke dalam blok variabel logika.'
      },
      {
        step_number: 3,
        title: 'Eksekusi Algoritma Deteksi Anomali',
        description: 'JIKA getaran > 7.1 mm/s ATAU suhu > 85°C, sistem memicu alarm kuning. JIKA kedua kondisi terpenuhi, picu alarm merah trip.',
        expected_action: 'Uji sistem proteksi otomatis pada simulator.'
      },
      {
        step_number: 4,
        title: 'Rekomendasi Pemeliharaan Terjadwal',
        description: 'Buat tiket perintah kerja pemeliharaan (Work Order): kapan pelumasan harus dilakukan dan kapan bearing harus diganti.',
        expected_action: 'Susun laporan diagnosa prediktif ke LKPD digital.'
      }
    ],
    simulation_config: {
      simulation_type: 'predictive_maintenance_sensor',
      title: 'Simulator Pemeliharaan Prediktif Motor Industri TOI',
      description: 'Pantau kurva getaran dan suhu waktu nyata serta uji deteksi anomali kerusakan bantalan mekanis berstandar ISO 10816.',
      safety_guidelines: 'Eksperimen data virtual. Tidak ada paparan medan listrik tegangan tinggi 380V atau bagian mesin berputar kencang.',
      default_inputs: {
        vibrationLevelMms: 5.6,
        bearingTempC: 69.5,
        isoThresholdWarning: 4.5,
        isoThresholdCritical: 7.1
      }
    },
    analysis_questions: [
      {
        id: 'q-toi2-1',
        question: 'Berdasarkan data jam 12:00-16:00, getaran naik ke 5.6 mm/s dan suhu mencapai 69.5°C. Apakah motor harus langsung dimatikan paksa?',
        kka_focus: 'Pengambilan Keputusan Berbasis Data',
        sample_answer_guide: 'Tidak perlu dimatikan paksa langsung karena masih berada di Zona C (Waspada). Tindakan yang tepat adalah menjadwalkan pemeriksaan dan pelumasan ulang (re-greasing) pada jam istirahat terdekat tanpa mematikan proses produksi secara mendadak.'
      },
      {
        id: 'q-toi2-2',
        question: 'Bagaimana keterkaitan fisis antara kenaikan getaran mekanis dengan lonjakan arus listrik (Ampere) yang diserap motor?',
        kka_focus: 'Korelasi Data Multi-Sensor',
        sample_answer_guide: 'Bantalan yang aus menimbulkan gesekan mekanis berlebih, sehingga beban torsi rotor bertambah berat. Motor merespon dengan menarik arus listrik fasa lebih tinggi untuk mempertahankan putaran (RPM).'
      },
      {
        id: 'q-toi2-3',
        question: 'Mengapa pemeliharaan prediktif (Predictive Maintenance berbasis data AI) jauh lebih efisien daripada pemeliharaan pencegahan berkala (Preventive Maintenance rutin)?',
        kka_focus: 'Konsep AI Industri & Optimasi',
        sample_answer_guide: 'Preventive maintenance mengganti komponen berdasarkan kalender waktu walau komponen masih bagus (boros suku cadang). Predictive maintenance hanya mengganti komponen saat data sensor menunjukkan gejala awal degradasi nyata.'
      }
    ],
    expected_final_product: 'Laporan Analisis Kesehatan Mesin Industri (Health Index Report) dan Dasbor Visual Deteksi Anomali Motor.',
    digital_lkpd: {
      lkpd_id: 'lkpd-toi-02',
      title: 'LKPD Digital: Pemeliharaan Prediktif & Anomali Sensor Motor',
      sections: [
        {
          section_title: 'Bagian A: Diagnosis Status Mesin Berdasarkan ISO 10816',
          tasks: [
            {
              id: 't-toi2-a1',
              prompt: 'Uji data jam 16:00 dan jam 20:00 pada simulator dan tentukan tindakan teknisnya:',
              input_type: 'table',
              table_columns: ['Waktu Log', 'Nilai Getaran (mm/s)', 'Kategori Zona ISO', 'Tingkat Keparahan', 'Perintah Sistem'],
              default_rows: [
                ['Jam 16:00', '8.4', 'Zone D', 'Bahaya / Kritis', 'Peringatan Alarm & Persiapan Pengalihan Jalur'],
                ['Jam 20:00', 'Isi getaran...', 'Isi zona...', 'Isi keparahan...', 'Isi perintah...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Rumusan Logika Algoritma Proteksi',
          tasks: [
            {
              id: 't-toi2-b1',
              prompt: 'Tuliskan kode logika atau aturan JIKA-MAKA yang memprogram sistem agar memicu trip kontaktor listrik utama jika kondisi kritis berlanjut lebih dari 3 menit:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Analisis Data Deret Waktu Sensor Fisika', weight: 25, description: 'Kemampuan menganalisis tren peningkatan getaran dan suhu.' },
      { id: 'r2', name: 'Penerapan Standar Industri ISO 10816', weight: 30, description: 'Ketepatan klasifikasi Zona A, B, C, dan D pada mesin berputar.' },
      { id: 'r3', name: 'Algoritma Deteksi Anomali Multi-Parameter', weight: 25, description: 'Keruntutan logika proteksi otomatis dan pencegahan false alarm.' },
      { id: 'r4', name: 'Rekomendasi Manajemen Pemeliharaan Aset', weight: 20, description: 'Kualitas penjadwalan suku cadang dan efisiensi biaya pabrik.' }
    ],
    success_criteria: [
      'Mampu mengelompokkan data telemetri 6 jam operasi ke dalam zona ISO yang tepat.',
      'Memprogram ambang batas anomali yang membedakan kondisi waspada dengan kondisi darurat.',
      'Menyusun laporan pemeliharaan prediktif yang menyelamatkan aset motor industri.'
    ],
    reflection_prompts: [
      'Bagaimana data sensor mengubah cara teknisi pabrik bekerja dari yang semula "pemadam kebakaran darurat" menjadi "analis kesehatan mesin cerdas"?',
      'Mengapa keselamatan kerja di pabrik modern sangat bergantung pada algoritma perangkat lunak yang andal?'
    ]
  },

  // ==========================================================================
  // 5. TITL - TEKNIK INSTALASI TENAGA LISTRIK
  // ==========================================================================
  {
    project_id: 'prj-titl-01',
    major_code: 'TITL',
    major_name: 'Teknik Instalasi Tenaga Listrik',
    field_category: 'Energi dan Pertambangan',
    project_level: 'Dasar',
    title: 'Kalkulator Algoritmik Penyeimbang Beban Listrik 3 Fasa (R-S-T) Panel Distribusi',
    problem_statement: 'Pada panel hubung bagi (PHB) listrik sekolah, pembagian beban daya lampu dan stop kontak pada fasa R, fasa S, dan fasa T sering tidak seimbang. Ketidakseimbangan arus > 10% menyebabkan kawat netral dialiri arus bocor tinggi, suhu kawat memanas, dan MCB utama sering trip tanpa sebab korsleting.',
    learning_objectives: [
      'Memahami representasi arus beban listrik fasa R, S, T dan formulasi matematis ketidakseimbangan beban SPLN / IEEE.',
      'Menyusun algoritma pengurutan (Sorting) dan pembagian kelompok sirkuit untuk menyeimbangkan beban arus listrik mendekati nilai rata-rata (I_avg).',
      'Menghitung arus kawat netral secara komputasional untuk memastikan keamanan kabel instalasi.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi beban sirkuit cabang dan pemodelan matematis selisih deviasi dari nilai rata-rata.',
      algorithm: 'Algoritma Greedy penyeimbang beban: Urutkan beban terbesar -> Tempatkan ke fasa dengan total arus terkecil.',
      data_processing: 'Kalkulasi data numerik arus fasa, perhitungan persentase ketidakseimbangan (% Unbalance).',
      ai_or_ethics: 'K3 Kelistrikan, Pencegahan Bahaya Kebakaran Akibat Panas Netral, Penghematan Rugi Tembaga (I²R).'
    },
    realistic_scenario: 'Siswa TITL melakukan audit panel listrik bengkel otomotif sekolah. Pengukuran menunjukkan arus Fasa R = 38 A, Fasa S = 14 A, Fasa T = 22 A. Kawat netral teraba hangat. Siswa ditugaskan merancang algoritma perombakan koneksi sirkuit agar beban fasa seimbang dengan deviasi di bawah 5%.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Pengukuran 9 Sirkuit Cabang Panel Distribusi',
      description: 'Daftar nama sirkuit, daya watt, arus listrik, dan fasa awal yang terpasang.',
      headers: ['Nomor Sirkuit', 'Beban Ruangan', 'Daya (Watt)', 'Arus Terhitung (Ampere)', 'Fasa Awal', 'Fasa Rekomendasi'],
      rows: [
        ['CKT-01', 'Mesin Las Listrik 1', 3520, 16.0, 'Fasa R', 'Fasa S'],
        ['CKT-02', 'Kompresor Angin Besar', 2640, 12.0, 'Fasa R', 'Fasa T'],
        ['CKT-03', 'Lampu Bengkel Depan', 880, 4.0, 'Fasa R', 'Fasa R'],
        ['CKT-04', 'Lampu Bengkel Belakang', 880, 4.0, 'Fasa R', 'Fasa R'],
        ['CKT-05', 'Stop Kontak Meja Praktik A', 1320, 6.0, 'Fasa S', 'Fasa S'],
        ['CKT-06', 'Stop Kontak Meja Praktik B', 1760, 8.0, 'Fasa S', 'Fasa R'],
        ['CKT-07', 'AC Ruang Guru Bengkel', 1540, 7.0, 'Fasa T', 'Fasa T'],
        ['CKT-08', 'Lampu Kantor Guru', 660, 3.0, 'Fasa T', 'Fasa S'],
        ['CKT-09', 'Gerinda Duduk & Bor Bangku', 2640, 12.0, 'Fasa T', 'Fasa T']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Penjumlahan Total Arus per Fasa Eksisting',
        description: 'Hitung total arus awal: I_R = 16+12+4+4 = 36 A; I_S = 6+8 = 14 A; I_T = 7+3+12 = 22 A.',
        expected_action: 'Simpan ke variabel arus fasa awal.'
      },
      {
        step_number: 2,
        title: 'Penghitungan Nilai Rata-Rata & Persentase Ketidakseimbangan',
        description: 'I_rata = (36 + 14 + 22) / 3 = 24 A. Hitung deviasi maksimum dari rata-rata: |36 - 24| / 24 * 100% = 50% (Sangat Buruk).',
        expected_action: 'Amati peringatan bahaya ketidakseimbangan sistem.'
      },
      {
        step_number: 3,
        title: 'Eksekusi Algoritma Penyeimbangan (Load Rebalancing)',
        description: 'Pindahkan sirkuit CKT-01 (16A) dari Fasa R ke Fasa S, dan CKT-06 (8A) dari S ke R.',
        expected_action: 'Periksa nilai arus fasa baru: I_R baru = 24 A, I_S baru = 25 A, I_T baru = 23 A.'
      },
      {
        step_number: 4,
        title: 'Verifikasi Arus Kawat Netral',
        description: 'Dengan beban seimbang (24A, 25A, 23A), arus netral mendekati 0 Ampere sehingga kabel netral dingin dan aman.',
        expected_action: 'Dokumentasikan wiring diagram hasil modifikasi ke LKPD.'
      }
    ],
    simulation_config: {
      simulation_type: 'load_balancer_rst',
      title: 'Simulator Penyeimbang Beban Listrik 3 Fasa TITL',
      description: 'Hitung persentase ketidakseimbangan beban arus listrik R-S-T dan optimalkan distribusi kelompok beban secara interaktif.',
      safety_guidelines: 'Simulasi komputasi virtual. Dilarang memindahkan kabel fisik di panel listrik sekolah tanpa isolasi APD dan instruksi guru pembimbing.',
      default_inputs: {
        currentR: 36.0,
        currentS: 14.0,
        currentT: 22.0,
        maxAllowedUnbalancePercent: 10.0
      }
    },
    analysis_questions: [
      {
        id: 'q-titl1-1',
        question: 'Mengapa ketidakseimbangan beban arus yang tinggi pada sistem 3 fasa dapat menyebabkan panas berlebih pada kawat penghantar netral?',
        kka_focus: 'Fisika Komputasional & Vektor Arus',
        sample_answer_guide: 'Pada sistem 3 fasa seimbang dengan sudut beda fasa 120 derajat, penjumlahan vektor arus netral I_N = I_R + I_S + I_T = 0. Jika beban tidak seimbang, resultan vektor tidak lagi nol dan arus residu yang besar mengalir melalui kawat netral, menimbulkan panas rugi daya I²R.'
      },
      {
        id: 'q-titl1-2',
        question: 'Tuliskan algoritma Greedy sederhana dalam bahasa manusia untuk membagi 9 beban listrik ke 3 fasa agar seimbang!',
        kka_focus: 'Algoritma Greedy Partitioning',
        sample_answer_guide: '1. Urutkan semua sirkuit beban dari yang berarus terbesar hingga terkecil. 2. Ambil beban satu per satu secara berurutan. 3. Masukkan beban yang sedang diambil ke fasa (R, S, atau T) yang saat itu memiliki akumulasi arus paling rendah. 4. Ulangi hingga semua beban terpasang.'
      },
      {
        id: 'q-titl1-3',
        question: 'Bagaimana penyeimbangan beban fasa listrik berkontribusi langsung pada efisiensi energi dan penurunan emisi karbon sekolah?',
        kka_focus: 'Efisiensi Energi & Lingkungan',
        sample_answer_guide: 'Arus netral yang mendekati nol mengurangi disipasi energi panas yang terbuang percuma pada kabel dan transformator listrik (rugi jala-jala), sehingga konsumsi kWh meter PLN berkurang dan usia peralatan trafo lebih awet.'
      }
    ],
    expected_final_product: 'Bagan Distribusi Beban PHB 3 Fasa Terseimbang dan Kalkulator Persentase Ketidakseimbangan Berbasis Spreadsheet/Web.',
    digital_lkpd: {
      lkpd_id: 'lkpd-titl-01',
      title: 'LKPD Digital: Optimasi Beban 3 Fasa R-S-T Panel PHB',
      sections: [
        {
          section_title: 'Bagian A: Perhitungan Kondisi Awal vs Rekomendasi',
          tasks: [
            {
              id: 't-titl1-a1',
              prompt: 'Gunakan simulator untuk menghitung kondisi sebelum dan sesudah penyeimbangan beban:',
              input_type: 'table',
              table_columns: ['Kondisi Sistem', 'Arus R (A)', 'Arus S (A)', 'Arus T (A)', 'Ketidakseimbangan (%)', 'Status Keamanan'],
              default_rows: [
                ['Awal (Sebelum Audit)', '36.0', '14.0', '22.0', '50.0%', 'Bahaya (Netral Panas)'],
                ['Hasil Optimasi Algoritma', '24.0', '25.0', '23.0', '4.17%', 'Sangat Aman (< 5%)']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Evaluasi Prosedur K3 Listrik',
          tasks: [
            {
              id: 't-titl1-b1',
              prompt: 'Sebutkan 3 langkah keselamatan kerja (K3) yang wajib dilakukan sebelum teknisi memindahkan kabel fasa pada panel listrik fisik:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemahaman Konsep Sistem 3 Fasa & Vektor Arus', weight: 25, description: 'Ketepatan menjelaskan peran fasa R-S-T dan kawat netral.' },
      { id: 'r2', name: 'Penerapan Algoritma Pembagian Beban Seimbang', weight: 30, description: 'Ketepatan merancang redistribusi sirkuit dengan deviasi minimal.' },
      { id: 'r3', name: 'Akurasi Perhitungan Persentase Ketidakseimbangan', weight: 25, description: 'Kebenaran rumus IEEE/SPLN unbalance percentage.' },
      { id: 'r4', name: 'Kepatuhan Standar Keselamatan PUIL / K3', weight: 20, description: 'Kedisiplinan menerapkan prosedur lockout-tagout (LOTO) virtual.' }
    ],
    success_criteria: [
      'Menghitung persentase ketidakseimbangan beban arus sebelum dan sesudah optimasi.',
      'Menghasilkan rekomendasi pemindahan sirkuit dengan ketidakseimbangan di bawah 5%.',
      'Menjelaskan dampak arus netral terhadap keselamatan instalasi listrik.'
    ],
    reflection_prompts: [
      'Bagaimana algoritma pembagian beban seimbang dapat menyelamatkan sekolah dari bahaya kebakaran korsleting listrik?',
      'Mengapa seorang instalator listrik profesional masa depan harus menguasai berpikir komputasional data selain keterampilan memegang obeng dan tang?'
    ]
  },
  {
    project_id: 'prj-titl-02',
    major_code: 'TITL',
    major_name: 'Teknik Instalasi Tenaga Listrik',
    field_category: 'Energi dan Pertambangan',
    project_level: 'Pengembangan',
    title: 'Analisis Data Profil Konsumsi Listrik Cerdas & Deteksi Kebocoran Arus Virtual',
    problem_statement: 'Tagihan listrik gedung bengkel praktik sekolah membengkak tajam. Diduga terdapat pemborosan beban siaga (phantom load) seperti adaptor dan komputer yang dibiarkan menyala semalaman, serta potensi bahaya degradasi isolasi kabel lama yang memicu kebocoran arus (earth leakage) ke konduktor grounding.',
    learning_objectives: [
      'Menganalisis dataset deret waktu pemakaian daya (kWh per jam) selama 24 jam untuk mendeteksi beban dasar nokturnal (nocturnal baseload).',
      'Menerapkan algoritma deteksi selisih arus (Differential Current Protection) JIKA I_fasa != I_netral untuk mendeteksi kebocoran arus tanah (mA).',
      'Menyusun strategi otomasi hemat energi dan rekomendasi pemasangan Residual Current Circuit Breaker (RCCB/ELCB).'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi pola penggunaan listrik siang vs malam hari dan isolasi anomali arus bocor.',
      algorithm: 'Algoritma deteksi kebocoran: I_bocor = |I_fasa - I_netral|. JIKA I_bocor > 30 mA MAKA Bahaya Sengatan Listrik.',
      data_processing: 'Analisis data time-series konsumsi daya 24 jam dan perhitungan biaya pemborosan bulanan.',
      ai_or_ethics: 'Keamanan Nyawa Manusia dari Sengatan Listrik (K3) & Budaya Hemat Energi Sekolah.'
    },
    realistic_scenario: 'Siswa TITL memasang alat perekam data daya (power logger) digital di panel utama bengkel. Mereka menganalisis data log 24 jam untuk membuktikan ke kepala sekolah bahwa terdapat kebocoran arus 45 mA di malam hari yang membahayakan gedung dan membuang anggaran listrik.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Pemantauan Daya 24 Jam Bengkel Listrik',
      description: 'Data log per 4 jam konsumsi daya aktif, arus fasa, arus netral, dan arus bocor tanah.',
      headers: ['Waktu (Jam)', 'Aktivitas Bengkel', 'Daya Aktif (Watt)', 'Arus Fasa (A)', 'Arus Netral (A)', 'Arus Bocor Tanah (mA)'],
      rows: [
        ['00:00 - 04:00', 'Tutup (Tengah Malam)', 650, 2.95, 2.91, 40],
        ['04:00 - 08:00', 'Persiapan Pembelajaran', 1200, 5.45, 5.41, 40],
        ['08:00 - 12:00', 'Praktik Siswa Pagi', 5800, 26.36, 26.31, 50],
        ['12:00 - 16:00', 'Praktik Siswa Siang', 6200, 28.18, 28.13, 50],
        ['16:00 - 20:00', 'Ekskul & Pembersihan', 1800, 8.18, 8.14, 40],
        ['20:00 - 24:00', 'Tutup (Malam Hari)', 750, 3.41, 3.37, 40]
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Analisis Beban Dasar Malam Hari (Vampire Power)',
        description: 'Periksa daya aktif pada jam 00:00-04:00 (650 Watt). Cari tahu peralatan apa saja yang menyala tanpa ada orang di bengkel.',
        expected_action: 'Hitung pemborosan kWh malam = 650 W * 8 jam * 30 hari = 156 kWh/bulan.'
      },
      {
        step_number: 2,
        title: 'Kalkulasi Kebocoran Arus Diferensial',
        description: 'Hitung selisih arus: Delta_I = (I_fasa - I_netral) dalam satuan miliampere (mA).',
        expected_action: 'Amati bahwa Delta_I konstan 40-50 mA, menandakan isolasi kabel telah bocor ke pipa konduit atau tanah.'
      },
      {
        step_number: 3,
        title: 'Evaluasi Ambang Batas Keselamatan Manusia',
        description: 'Berdasarkan PUIL 2011, batas arus bocor aman untuk kontak manusia adalah maksimal 30 mA.',
        expected_action: 'Tetapkan status: "BAHAYA: Wajib Pasang ELCB 30mA & Uji Megger Tahanan Isolasi".'
      },
      {
        step_number: 4,
        title: 'Penyusunan Rencana Tindakan Perbaikan',
        description: 'Rekomendasikan pemasangan smart timer breaker untuk mematikan beban phantom malam hari dan peremajaan kabel isolasi rusak.',
        expected_action: 'Tuliskan laporan audit energi dan keselamatan instalasi ke LKPD.'
      }
    ],
    simulation_config: {
      simulation_type: 'energy_audit_anomaly',
      title: 'Simulator Audit Energi Cerdas & Arus Bocor TITL',
      description: 'Lakukan audit grafik konsumsi daya 24 jam dan deteksi kebocoran arus diferensial tanah secara aman.',
      safety_guidelines: 'Simulasi data digital. Tidak ada sentuhan kabel beraliran listrik tegangan tinggi 220V.',
      default_inputs: {
        phantomLoadWatts: 650,
        earthLeakageMa: 45.0,
        elcbThresholdMa: 30.0,
        electricityRatePerKwh: 1444
      }
    },
    analysis_questions: [
      {
        id: 'q-titl2-1',
        question: 'Mengapa kebocoran arus sebesar 40 mA pada kawat grounding sangat berbahaya bagi keselamatan siswa di bengkel listrik?',
        kka_focus: 'Fisika Sengatan Listrik & K3',
        sample_answer_guide: 'Arus listrik di atas 30 mA yang melewati tubuh manusia ke tanah dapat memicu kontraksi otot tak terkendali, kelumpuhan pernapasan, dan fibrilasi ventrikel jantung yang dapat menyebabkan kematian dalam hitungan detik.'
      },
      {
        id: 'q-titl2-2',
        question: 'Tuliskan logika algoritma komputasional untuk sistem cerdas yang mematikan sirkuit secara otomatis jika mendeteksi kebocoran arus lebih dari 30 mA selama lebih dari 0.1 detik!',
        kka_focus: 'Algoritma Proteksi Diferensial',
        sample_answer_guide: 'JIKA (Arus_Fasa - Arus_Netral) > 0.030 Ampere DAN Durasi >= 0.1 detik MAKA Kirim_Sinyal_Trip_ELCB() DAN Aktifkan_Alarm_Bahaya().'
      },
      {
        id: 'q-titl2-3',
        question: 'Berapakah estimasi biaya rupiah yang terbuang percuma setiap bulan akibat beban phantom 650 Watt yang dibiarkan menyala 8 jam setiap malam (tarif Rp 1.444 / kWh)?',
        kka_focus: 'Pengolahan Data Finansial Energi',
        sample_answer_guide: 'Energi per malam = 0.65 kW * 8 jam = 5.2 kWh. Energi per bulan (30 hari) = 156 kWh. Biaya terbuang = 156 * Rp 1.444 = Rp 225.264 per bulan (sekitar Rp 2,7 juta per tahun).'
      }
    ],
    expected_final_product: 'Laporan Audit Energi Cerdas & Sertifikat Inspeksi Kelayakan Isolasi Kabel Panel Distribusi.',
    digital_lkpd: {
      lkpd_id: 'lkpd-titl-02',
      title: 'LKPD Digital: Audit Energi Cerdas & Deteksi Arus Bocor',
      sections: [
        {
          section_title: 'Bagian A: Analisis Data Arus Bocor Diferensial',
          tasks: [
            {
              id: 't-titl2-a1',
              prompt: 'Berdasarkan data pengukuran 24 jam, lengkapi tabel evaluasi risiko kebocoran arus:',
              input_type: 'table',
              table_columns: ['Rentang Waktu', 'Arus Bocor (mA)', 'Batas Aman PUIL', 'Tingkat Bahaya', 'Tindakan Mitigasi'],
              default_rows: [
                ['00:00 - 04:00', '40 mA', '30 mA', 'Bahaya (Di atas ambang aman)', 'Lacak titik isolasi kabel bocor'],
                ['08:00 - 12:00', 'Isi arus...', '30 mA', 'Isi tingkat...', 'Isi tindakan...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Solusi Efisiensi Energi Cerdas',
          tasks: [
            {
              id: 't-titl2-b1',
              prompt: 'Rancang strategi sistem otomatis (Smart Relay / IoT) untuk mematikan stop kontak komputer dan adaptor di bengkel pada pukul 17:00 hingga 06:00 secara otomatis:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Analisis Profil Beban Listrik 24 Jam', weight: 25, description: 'Kemampuan membaca kurva beban dan mendeteksi vampire load.' },
      { id: 'r2', name: 'Kalkulasi Arus Diferensial & Standar PUIL', weight: 30, description: 'Ketepatan menghitung arus bocor tanah dan standar ELCB 30mA.' },
      { id: 'r3', name: 'Perhitungan Penghematan Biaya Listrik', weight: 25, description: 'Akurasi konversi Watt-jam ke kWh dan nilai rupiah tagihan PLN.' },
      { id: 'r4', name: 'Rancangan Solusi Otomasi Berkelanjutan', weight: 20, description: 'Kreativitas pemanfaatan timer/smart switch hemat energi.' }
    ],
    success_criteria: [
      'Mendeteksi adanya arus bocor 40-50 mA yang melebihi standar aman PUIL.',
      'Menghitung kerugian finansial akibat beban phantom semalam suntuk secara akurat.',
      'Menyusun rekomendasi perbaikan instalasi dan pemasangan ELCB pengaman nyawa.'
    ],
    reflection_prompts: [
      'Bagaimana data telemetri arus diferensial mampu menyelamatkan nyawa manusia sebelum insiden kebakaran terjadi?',
      'Jika Anda mengelola instalasi listrik rumah tangga Anda sendiri, langkah digital apa yang pertama kali Anda terapkan untuk menekan tagihan listrik bulanan?'
    ]
  },

  // ==========================================================================
  // 6. TAV - TEKNIK AUDIO VIDEO
  // ==========================================================================
  {
    project_id: 'prj-tav-01',
    major_code: 'TAV',
    major_name: 'Teknik Audio Video',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Visualisasi Gelombang Audio & Algoritma Filter Kebisingan Frekuensi Rendah (High-Pass)',
    problem_statement: 'Pada produksi rekaman siaran podcast dan video pembelajaran di studio TAV SMK, audio vokal sering terganggu oleh suara dengung listrik jala-jala (humming 50 Hz dari trafo lampu) dan desau getaran AC (low rumble di bawah 80 Hz), membuat suara guru terdengar mendem dan tidak jernih.',
    learning_objectives: [
      'Memahami representasi sinyal suara kontinu ke bentuk digital diskrit (Sampling Rate & Amplitudo).',
      'Menerapkan algoritma pemfilteran High-Pass Filter (HPF) matematis untuk memotong frekuensi bising di bawah batas cutoff (misal 100 Hz) tanpa merusak suara vokal.',
      'Membandingkan bentuk gelombang suara sebelum dan sesudah filtering menggunakan visualisasi grafik komputasional.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi sinyal suara komposit menjadi penjumlahan frekuensi fundamental vokal dan frekuensi derau.',
      algorithm: 'Algoritma filter digital IIR/FIR sederhana (Moving Difference / High-Pass transfer function).',
      data_processing: 'Pengolahan larik data numerik sampel audio (array of audio samples).',
      ai_or_ethics: 'Etika Kualitas Produksi Media Komunikasi & Aksesibilitas Audio bagi Tunarungu Ringan.'
    },
    realistic_scenario: 'Siswa TAV bertugas sebagai sound engineer siaran radio komunitas sekolah. Rekaman pidato kepala sekolah memiliki dengung berat 50 Hz karena kabel mic diletakkan berdekatan dengan kabel daya stop kontak. Siswa harus merancang algoritma pembersih suara digital.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Sampel Sinyal Gelombang Suara (10 Titik Waktu)',
      description: 'Nilai amplitudo sinyal suara yang terkontaminasi gelombang dengung frekuensi rendah.',
      headers: ['Indeks Titik (t)', 'Waktu (milidetik)', 'Sinyal Asli Vokal', 'Komponen Dengung (50 Hz)', 'Sinyal Campuran Kotor', 'Sinyal Hasil Filter HPF'],
      rows: [
        ['t_0', 0.0, 0.00, 0.60, 0.60, 0.02],
        ['t_1', 0.5, 0.75, 0.55, 1.30, 0.73],
        ['t_2', 1.0, 0.95, 0.35, 1.30, 0.94],
        ['t_3', 1.5, 0.45, 0.05, 0.50, 0.46],
        ['t_4', 2.0, -0.30, -0.30, -0.60, -0.28],
        ['t_5', 2.5, -0.85, -0.55, -1.40, -0.83],
        ['t_6', 3.0, -0.90, -0.60, -1.50, -0.88],
        ['t_7', 3.5, -0.40, -0.45, -0.85, -0.39],
        ['t_8', 4.0, 0.20, -0.15, 0.05, 0.19],
        ['t_9', 4.5, 0.80, 0.20, 1.00, 0.78]
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Visualisasi Sinyal Mentah yang Terkontaminasi',
        description: 'Tampilkan grafik bentuk gelombang sinyal campuran kotor (Sinyal Vokal + Dengung 50 Hz).',
        expected_action: 'Perhatikan bagaimana gelombang vokal terangkat naik-turun mengikuti gelombang dengung lambat.'
      },
      {
        step_number: 2,
        title: 'Penentuan Frekuensi Cutoff Filter (f_c)',
        description: 'Vokal manusia umumnya berada di atas 100 Hz, sedangkan dengung AC berada di 50-60 Hz. Atur cutoff filter = 100 Hz.',
        expected_action: 'Pahami logika memotong frekuensi rendah tanpa memotong vokal.'
      },
      {
        step_number: 3,
        title: 'Eksekusi Algoritma High-Pass Filter',
        description: 'Jalankan fungsi komputasi filter: y[n] = alpha * (y[n-1] + x[n] - x[n-1]).',
        expected_action: 'Amati bentuk gelombang yang telah dibersihkan kembali ke sumbu nol.'
      },
      {
        step_number: 4,
        title: 'Evaluasi Signal-to-Noise Ratio (SNR)',
        description: 'Bandingkan kualitas kejernihan suara sebelum dan sesudah filtering dalam satuan decibel (dB).',
        expected_action: 'Catat hasil pengujian ke dalam LKPD digital siswa.'
      }
    ],
    simulation_config: {
      simulation_type: 'audio_waveform_filter',
      title: 'Simulator Filter Gelombang Audio TAV',
      description: 'Eksplorasi visualisasi gelombang suara digital dan terapkan algoritma pemotongan dengung frekuensi rendah secara interaktif.',
      safety_guidelines: 'Simulasi visual dan audio digital peramban. Atur volume speaker/headphone sekolah pada tingkat wajar (< 70 dB).',
      default_inputs: {
        cutoffFrequencyHz: 100,
        humFrequencyHz: 50,
        audioGainDb: 0.0,
        filterOrder: 1
      }
    },
    analysis_questions: [
      {
        id: 'q-tav1-1',
        question: 'Mengapa frekuensi dengung trafo listrik di Indonesia selalu berada di sekitar 50 Hz?',
        kka_focus: 'Fisika Sinyal Listrik PLN',
        sample_answer_guide: 'Karena sistem transmisi tenaga listrik PLN di Indonesia beroperasi pada frekuensi bolak-balik (AC) standar 50 Hertz, sehingga induksi elektromagnetik yang bocor ke kabel mic memiliki gelombang fundamental 50 siklus per detik.'
      },
      {
        id: 'q-tav1-2',
        question: 'Jika seorang siswa secara keliru mengatur frekuensi cutoff High-Pass Filter terlalu tinggi (misal 500 Hz), apa yang akan terjadi pada suara vokal manusia?',
        kka_focus: 'Algoritma Pemfilteran Frekuensi',
        sample_answer_guide: 'Suara vokal manusia akan kehilangan komponen frekuensi dasar rendah dan menengah (body/warmth), sehingga terdengar sangat cempreng, tipis seperti suara dari kaleng biskuit atau telepon lama.'
      },
      {
        id: 'q-tav1-3',
        question: 'Bagaimana konsep dekomposisi dalam Berpikir Komputasional diterapkan pada perangkat lunak audio workstation modern?',
        kka_focus: 'Dekomposisi Berpikir Komputasional',
        sample_answer_guide: 'Sinyal suara komposit yang rumit didekomposisi menjadi ribuan komponen pita frekuensi sinusoidal murni (melalui Fourier Transform / FFT), sehingga teknisi dapat memanipulasi atau menghapus frekuensi bising secara terisolasi.'
      }
    ],
    expected_final_product: 'Grafik Perbandingan Sinyal Gelombang Suara (Sebelum & Sesudah Filter) dan Parameter Konfigurasi High-Pass Filter.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tav-01',
      title: 'LKPD Digital: Visualisasi Gelombang & Pembersihan Audio',
      sections: [
        {
          section_title: 'Bagian A: Analisis Reduksi Amplitudo Dengung',
          tasks: [
            {
              id: 't-tav1-a1',
              prompt: 'Uji algoritma filter pada titik t_1 dan t_5 dan catat perbaikan sinyalnya:',
              input_type: 'table',
              table_columns: ['Titik Waktu', 'Sinyal Kotor', 'Komponen Dengung', 'Sinyal Bersih HPF', 'Deviasi dari Asli'],
              default_rows: [
                ['t_1 (0.5 ms)', '1.30', '0.55', '0.73', '0.02 (Sangat Mirip Vokal Asli)'],
                ['t_5 (2.5 ms)', 'Isi kotor...', 'Isi dengung...', 'Isi bersih...', 'Isi deviasi...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Algoritma Pembersihan Derau',
          tasks: [
            {
              id: 't-tav1-b1',
              prompt: 'Jelaskan logika pemilihan frekuensi cutoff 100 Hz untuk membersihkan dengung AC tanpa merusak artikulasi suara manusia:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemahaman Sampling Sinyal Audio Digital', weight: 25, description: 'Ketepatan menjelaskan amplitudo, frekuensi, dan laju sampling.' },
      { id: 'r2', name: 'Penerapan Algoritma High-Pass Filter', weight: 30, description: 'Ketepatan pemilihan frekuensi cutoff dan eliminasi komponen bising.' },
      { id: 'r3', name: 'Analisis Grafik Bentuk Gelombang Suara', weight: 25, description: 'Kemampuan membaca visual osiloskop/waveform sebelum dan sesudah.' },
      { id: 'r4', name: 'Kualitas Dokumentasi Audio Engineering', weight: 20, description: 'Kerapian data hasil uji laboratorium suara kejuruan.' }
    ],
    success_criteria: [
      'Menghilangkan komponen bising frekuensi 50 Hz pada grafik simulasi.',
      'Mempertahankan bentuk gelombang vokal asli dengan deviasi error < 5%.',
      'Menyusun laporan teknis audio filter yang siap diterapkan pada mixer podcast.'
    ],
    reflection_prompts: [
      'Bagaimana algoritma matematika mampu membersihkan suara manusia yang tercemar derau lingkungan?',
      'Mengapa teknologi noise cancellation di earphone modern pada dasarnya adalah penerapan berpikir komputasional waktu nyata?'
    ]
  },
  {
    project_id: 'prj-tav-02',
    major_code: 'TAV',
    major_name: 'Teknik Audio Video',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Pencocokan Pola Spektrogram untuk Sistem Perintah Suara Cerdas (Voice Keyword Spotting)',
    problem_statement: 'Teknisi di ruang kontrol siaran televisi studio TAV sering kesulitan mengoperasikan tombol rekam atau pemutar media manual saat kedua tangan mereka sedang memegang kamera atau naskah siaran. Diperlukan sistem pengenalan perintah suara sederhana (Voice Keyword Spotter) yang mampu mengenali kata "REKAM" atau "BERHENTI" tanpa mengirim data suara ke server internet luar (menjaga privasi studio).',
    learning_objectives: [
      'Memahami representasi visual frekuensi terhadap waktu dalam bentuk matriks Spektrogram Audio (Acoustic Spectrogram).',
      'Menerapkan algoritma pengenalan pola (Pattern Recognition) berbasis pencocokan kemiripan vektor jarak Euclidean.',
      'Mengevaluasi akurasi sistem pengenal kata kunci dan meminimalkan kesalahan deteksi (False Positive vs False Negative).'
    ],
    kka_concepts: {
      computational_thinking: 'Pengenalan pola akustik (ciri khas format formant vokal) dan abstraksi spektrogram matriks 2D.',
      algorithm: 'Algoritma pencocokan pola kemiripan (Pattern Similarity Matching) dengan ambang batas batas keputusan (Threshold).',
      data_processing: 'Ekstraksi fitur magnitudo frekuensi audio per jendela waktu (Time-Frequency Windows).',
      ai_or_ethics: 'Prinsip AI Edge Computing & Perlindungan Privasi Data Rekaman Suara Siswa.'
    },
    realistic_scenario: 'Siswa TAV merancang sistem otomatisasi studio siaran mini sekolah. Kamera dan perekam digital harus dapat diaktifkan saat penyiar mengucapkan kata "REKAM" dengan intonasi wajar, dan mengabaikan suara obrolan santai lainnya.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Matriks Fitur Spektrogram Kata Perintah',
      description: 'Data ciri khas frekuensi rendah (F1), menengah (F2), dan tinggi (F3) untuk 5 rekaman uji kata suara.',
      headers: ['Sampel Uji', 'Kata yang Diucapkan', 'Fitur F1 (Hz)', 'Fitur F2 (Hz)', 'Fitur F3 (Hz)', 'Kemiripan dg "REKAM" (%)', 'Keputusan Sistem'],
      rows: [
        ['SND-01', 'REKAM (Pengucapan Jelas)', 480, 1420, 2650, 96, 'AKSI: Mulai Perekaman'],
        ['SND-02', 'REKAM (Suara Agak Serak)', 510, 1380, 2580, 88, 'AKSI: Mulai Perekaman'],
        ['SND-03', 'STOP / BERHENTI', 320, 1850, 3100, 35, 'ABA內KAN (Bukan Kata Kunci)'],
        ['SND-04', 'SELAMAT PAGI', 650, 1920, 2400, 42, 'ABAIKAN (Bukan Kata Kunci)'],
        ['SND-05', 'TEKAN (Kata Mirip)', 490, 1680, 2620, 68, 'ABAIKAN (Di Bawah Ambang 80%)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Ekstraksi Fitur Akustik Spektrogram',
        description: 'Ubah sinyal audio rekaman menjadi visualisasi spektrogram frekuensi F1 (formant 1), F2, dan F3.',
        expected_action: 'Perhatikan bagaimana vokal "E" dan "A" pada kata "REKAM" membentuk sidik jari akustik yang khas.'
      },
      {
        step_number: 2,
        title: 'Komparasi Jarak Pola terhadap Template Master',
        description: 'Hitung persentase kemiripan pola sampel uji terhadap template master kata "REKAM".',
        expected_action: 'Gunakan formula perhitungan jarak kemiripan vektor numerik.'
      },
      {
        step_number: 3,
        title: 'Penerapan Ambang Batas Keputusan (Threshold 80%)',
        description: 'JIKA kemiripan >= 80% MAKA micu perintah rekam; JIKA kemiripan < 80% MAKA tolak untuk menghindari salah rekam.',
        expected_action: 'Uji coba ketahanan terhadap kata yang mirip seperti "TEKAN" (68%).'
      },
      {
        step_number: 4,
        title: 'Evaluasi Privasi & Pemrosesan Lokal (On-Device)',
        description: 'Pastikan seluruh proses pengenalan berjalan di peramban tanpa mengunggah suara ke server cloud pihak ketiga.',
        expected_action: 'Dokumentasikan analisis privasi ke dalam LKPD digital.'
      }
    ],
    simulation_config: {
      simulation_type: 'voice_keyword_spotter',
      title: 'Simulator Spektrogram & Voice Keyword Spotter TAV',
      description: 'Simulasikan pencocokan pola sidik jari spektrogram audio untuk mengenali kata perintah kendali studio secara lokal.',
      safety_guidelines: 'Simulasi aman di lingkungan browser. Data suara tidak disimpan permanen atau dikirim ke server luar.',
      default_inputs: {
        targetKeyword: 'REKAM',
        similarityThresholdPercent: 80,
        testedSampleId: 'SND-01'
      }
    },
    analysis_questions: [
      {
        id: 'q-tav2-1',
        question: 'Mengapa kata "TEKAN" yang memiliki kemiripan 68% dengan "REKAM" harus ditolak oleh sistem otomasi studio?',
        kka_focus: 'Ambang Batas Keputusan (Thresholding)',
        sample_answer_guide: 'Karena ambang batas ditetapkan pada 80% untuk mencegah "False Positive" (salah mengenali kata biasa sebagai perintah), yang dapat merusak rekaman produksi yang sedang berlangsung.'
      },
      {
        id: 'q-tav2-2',
        question: 'Bagaimana spektrogram audio mengabstraksikan gelombang suara yang rumit menjadi gambar matriks data 2 dimensi?',
        kka_focus: 'Abstraksi Data & Spektrogram',
        sample_answer_guide: 'Spektrogram memetakan sumbu horizontal sebagai waktu, sumbu vertikal sebagai rentang frekuensi (Hz), dan intensitas warna/kecerahan piksel sebagai besaran amplitudo atau energi suara.'
      },
      {
        id: 'q-tav2-3',
        question: 'Dari sudut pandang etika privasi, mengapa teknologi pengenal suara lokal (On-Device AI) lebih aman daripada asisten pintar berbasis cloud internet?',
        kka_focus: 'Etika Privasi AI Audio',
        sample_answer_guide: 'On-Device AI memproses suara langsung di prosesor lokal tanpa mentransmisikan data audio percakapan pribadi pengguna ke server cloud korporasi, sehingga tidak ada risiko penyadapan atau kebocoran data audio sensitif.'
      }
    ],
    expected_final_product: 'Laporan Matriks Kemiripan Pola Akustik dan Rekomendasi Integrasi Kontrol Suara Hands-Free Studio TAV.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tav-02',
      title: 'LKPD Digital: Pengenalan Pola Spektrogram Perintah Suara',
      sections: [
        {
          section_title: 'Bagian A: Uji Kemiripan Pola 5 Sampel Suara',
          tasks: [
            {
              id: 't-tav2-a1',
              prompt: 'Gunakan simulator untuk menguji 5 sampel rekaman kata dan isi tabel keputusan:',
              input_type: 'table',
              table_columns: ['ID Sampel', 'Kata Diucapkan', 'Skor Kemiripan (%)', 'Status Ambang (>=80%)', 'Respon Perangkat Studio'],
              default_rows: [
                ['SND-01', 'REKAM (Jelas)', '96%', 'Lolos Ambang', 'Lampu Indikator TALLY Menyala Merah (Merekam)'],
                ['SND-03', 'STOP', '35%', 'Di Bawah Ambang', 'Abaikan'],
                ['SND-05', 'TEKAN', 'Isi skor...', 'Isi status...', 'Isi respon...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Evaluasi Keandalan Sistem Cerdas',
          tasks: [
            {
              id: 't-tav2-b1',
              prompt: 'Jelaskan apa yang terjadi jika ambang batas (threshold) diturunkan menjadi 60%, dan mengapa hal tersebut berbahaya bagi jalannya siaran langsung:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemahaman Ciri Akustik & Spektrogram', weight: 25, description: 'Kemampuan membaca distribusi frekuensi formant vokal.' },
      { id: 'r2', name: 'Penerapan Algoritma Pencocokan Pola Kemiripan', weight: 30, description: 'Akurasi komparasi vektor matriks terhadap template master.' },
      { id: 'r3', name: 'Analisis Ambang Batas & False Positives', weight: 25, description: 'Ketajaman logika dalam membatasi salah deteksi perintah audio.' },
      { id: 'r4', name: 'Kesadaran Etika Privasi Data Suara', weight: 20, description: 'Komitmen terhadap pemrosesan AI lokal tanpa pelanggaran data pribadi.' }
    ],
    success_criteria: [
      'Mengklasifikasikan 5 sampel perintah suara dengan ambang batas kemiripan 80%.',
      'Menjelaskan perbedaan mendasar antara kata kunci target dan kata pengganggu mirip.',
      'Menyusun analisis keamanan privasi untuk studio siaran sekolah.'
    ],
    reflection_prompts: [
      'Bagaimana kecerdasan artifisial dapat "mendengar" dan mengenali suara manusia tanpa benar-benar memahami arti kata tersebut?',
      'Mengapa menjaga privasi mikrofon di sekitar kita adalah prinsip etika digital yang sangat krusial di era sekarang?'
    ]
  },

  // ==========================================================================
  // 7. TSM - TEKNIK SEPEDA MOTOR
  // ==========================================================================
  {
    project_id: 'prj-tsm-01',
    major_code: 'TSM',
    major_name: 'Teknik Sepeda Motor',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Pohon Keputusan (Decision Tree) Troubleshooting Sistem Starter Elektrik Sepeda Motor',
    problem_statement: 'Mekanik pemula siswa kelas X TSM sering kebingungan saat menghadapi sepeda motor matik yang tidak dapat distarter elektrik. Sering terjadi salah vonis dengan langsung membongkar motor starter atau meminta pemilik mengganti dinamo mahal, padahal akar masalahnya hanya sakelar standar samping kotor atau sekring putus.',
    learning_objectives: [
      'Mendekomposisi sistem starter elektrik sepeda motor menjadi rangkaian komponen bertingkat (Aki -> Sekring -> Kunci Kontak -> Sakelar Rem -> Switch Standar Samping -> Relay Starter -> Motor Starter).',
      'Membangun alur logika Pohon Keputusan (Decision Tree) biner untuk melacak titik kerusakan secara sistematis dan efisien.',
      'Menghitung waktu dan efisiensi langkah pemeriksaan komputasional dibandingkan metode coba-coba (trial and error).'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi rangkaian kelistrikan sepeda motor dan pohon penelusuran masalah (Search Tree).',
      algorithm: 'Pohon keputusan bertingkat: IF Tegangan_Aki < 12.4V THEN Cas_Aki ELSE IF Lampu_Netral == Mati THEN Periksa_Sekring...',
      data_processing: 'Kompilasi data pengukuran voltmeter dan uji kontinuitas multimeter ke dalam matriks logika.',
      ai_or_ethics: 'Etika Pelayanan Bengkel Terpercaya & Pencegahan Penipuan Biaya Servis Terhadap Konsumen.'
    },
    realistic_scenario: 'Bengkel Teaching Factory (Tefa) TSM SMK menerima pelanggan motor matik 125cc yang mogok starter di pagi hari. Siswa ditugaskan mendiagnosis penyebab menggunakan alur pohon keputusan digital di tablet bengkel sebelum menyentuh kunci pas.'
    ,
    safe_sample_dataset: {
      dataset_name: 'Dataset Kasus Gangguan Starter Sepeda Motor',
      description: 'Log hasil pengukuran 6 unit motor konsumen dengan berbagai kombinasi gejala gangguan.',
      headers: ['Nomor Kendaraan', 'Tegangan Aki (V)', 'Kondisi Spidometer', 'Bunyi Relay Starter', 'Switch Standar Samping', 'Diagnosis Komputasional'],
      rows: [
        ['MTR-01', 11.2, 'Redup', 'Hening (Tidak Klik)', 'Normal', 'Aki Lemah (Perlu Dicas / Ganti)'],
        ['MTR-02', 12.6, 'Menyala Terang', 'Hening (Tidak Klik)', 'Kabel Terputus', 'Switch Standar Samping Kotor/Rusak'],
        ['MTR-03', 12.5, 'Menyala Terang', 'Bunyi Klik-Klik Keras', 'Normal', 'Bantalan/Brush Motor Starter Aus'],
        ['MTR-04', 12.6, 'Mati Total', 'Hening (Tidak Klik)', 'Normal', 'Sekring Utama (Main Fuse 15A) Putus'],
        ['MTR-05', 12.7, 'Menyala Terang', 'Hening (Tidak Klik)', 'Normal (Tapi Switch Rem Macet)', 'Sakelar Rem Kiri Kotor'],
        ['MTR-06', 12.6, 'Menyala Terang', 'Klik Sekali, Dinamo Berputar', 'Normal', 'Sistem Starter Normal (Cek Busi/BBM)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pengukuran Sumber Daya Utama (Tegangan Aki)',
        description: 'Ukur tegangan terminal baterai menggunakan multimeter digital.',
        expected_action: 'JIKA tegangan < 12.4 Volt, hentikan penelusuran: sumber daya tidak cukup untuk memutar dinamo.'
      },
      {
        step_number: 2,
        title: 'Pemeriksaan Jalur Pengaman (Interlock Safety Switch)',
        description: 'Sepeda motor matik mewajibkan standar samping dinaikkan dan tuas rem ditarik sebelum starter dapat berputar.',
        expected_action: 'Periksa kontinuitas sakelar pengaman pada cabang pohon keputusan.'
      },
      {
        step_number: 3,
        title: 'Verifikasi Sakelar Starter & Bunyi Relay Magnetik',
        description: 'Tekan tombol starter: dengarkan apakah relay berbunyi "klik".',
        expected_action: 'JIKA berbunyi klik namun dinamo hening, masalah ada pada kabel utama dinamo atau sikat arang (carbon brush).'
      },
      {
        step_number: 4,
        title: 'Penerbitan Estimasi Biaya Servis yang Jujur',
        description: 'Cetak rekomendasi suku cadang yang benar-benar rusak sesuai bukti diagnosa komputasional.',
        expected_action: 'Masukkan laporan perbaikan ke LKPD digital.'
      }
    ],
    simulation_config: {
      simulation_type: 'motorcycle_troubleshoot_tree',
      title: 'Simulator Pohon Keputusan Starter Motor TSM',
      description: 'Lacak gangguan kelistrikan starter sepeda motor matik menggunakan diagram alir keputusan interaktif.',
      safety_guidelines: 'Simulasi virtual aman. Menghindari risiko percikan api baterai dan kejutan listrik sekring nyata.',
      default_inputs: {
        batteryVoltage: 12.6,
        spidoLightsOn: true,
        relayClickSound: false,
        sideStandSwitchOk: false,
        brakeSwitchOk: true
      }
    },
    analysis_questions: [
      {
        id: 'q-tsm1-1',
        question: 'Pada kasus MTR-02, mengapa motor starter tidak berputar meskipun aki bertegangan normal (12.6V) dan lampu spidometer menyala terang?',
        kka_focus: 'Logika Rangkaian Seri & Interlock',
        sample_answer_guide: 'Karena sakelar standar samping (side stand switch) terputus atau kotor. Pada motor matik, sistem memutus ground relay starter saat standar samping turun sebagai pengaman agar motor tidak meloncat saat dihidupkan.'
      },
      {
        id: 'q-tsm1-2',
        question: 'Bandingkan efisiensi waktu antara metode penelusuran pohon keputusan biner dengan metode coba-coba ganti komponen!',
        kka_focus: 'Kompleksitas Waktu & Berpikir Komputasional',
        sample_answer_guide: 'Metode pohon keputusan biner membagi ruang pencarian menjadi separuh pada setiap langkah (kompleksitas O(log N)), menemukan masalah dalam 3-4 langkah ukur (< 5 menit). Metode coba-coba membutuhkan waktu berjam-jam dan biaya mahal membongkar suku cadang yang sebenarnya tidak rusak.'
      },
      {
        id: 'q-tsm1-3',
        question: 'Bagaimana etika transparansi diagnosa komputasional membangun loyalitas dan kepercayaan konsumen bengkel TSM?',
        kka_focus: 'Etika Profesional Bengkel',
        sample_answer_guide: 'Konsumen melihat data pengukuran nyata di layar diagnosis, merasa tidak dibohongi, dan yakin bahwa mekanik hanya mengganti komponen yang benar-benar terbukti rusak secara teknis.'
      }
    ],
    expected_final_product: 'Bagan Alur Pohon Keputusan (Decision Tree Chart) Servis Starter dan Lembar Kerja Estimasi Perbaikan Konsumen.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tsm-01',
      title: 'LKPD Digital: Pohon Keputusan Diagnosis Kelistrikan Starter',
      sections: [
        {
          section_title: 'Bagian A: Simulasi Penelusuran Kasus Konsumen',
          tasks: [
            {
              id: 't-tsm1-a1',
              prompt: 'Uji data kasus MTR-03 dan MTR-04 pada simulator dan tentukan akar permasalahannya:',
              input_type: 'table',
              table_columns: ['ID Motor', 'Gejala Utama', 'Komponen Tersangka', 'Langkah Uji Multimeter', 'Kesimpulan Akhir'],
              default_rows: [
                ['MTR-03', 'Relay bunyi klik keras, dinamo diam', 'Motor Starter / Dinamo', 'Ukur tegangan kutub dinamo saat tombol ditekan', 'Sikat karbon aus / armature macet'],
                ['MTR-04', 'Isi gejala...', 'Isi tersangka...', 'Isi langkah uji...', 'Isi kesimpulan...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Diagram Keputusan Logika Mandiri',
          tasks: [
            {
              id: 't-tsm1-b1',
              prompt: 'Gambarkan urutan pertanyaan logika JIKA-MAKA yang harus ditanyakan mekanik sejak pelanggan datang hingga motor diperbaiki:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Dekomposisi Rangkaian Starter Motor', weight: 25, description: 'Ketepatan membagi rangkaian menjadi sumber, kontrol, dan beban.' },
      { id: 'r2', name: 'Konstruksi Diagram Pohon Keputusan (Decision Tree)', weight: 30, description: 'Keruntutan alur logika pencarian dan pemilahan kondisi biner.' },
      { id: 'r3', name: 'Kecepatan & Akurasi Diagnosis Masalah', weight: 25, description: 'Ketepatan menentukan akar penyebab kerusakan pada 6 kasus uji.' },
      { id: 'r4', name: 'Penerapan Etika Kejujuran Servis Bengkel', weight: 20, description: 'Komitmen memberikan estimasi biaya yang transparan dan dapat dipertanggungjawabkan.' }
    ],
    success_criteria: [
      'Mendiagnosis 6 kasus gangguan starter motor secara tepat menggunakan alur pohon keputusan.',
      'Menyusun diagram alir diagnosa yang mudah dipahami teknisi junior.',
      'Menjelaskan fungsi safety interlock standar samping dan sakelar rem.'
    ],
    reflection_prompts: [
      'Bagaimana algoritma berpikir sistematis membedakan mekanik handal berkelas profesional dengan tukang ganti suku cadang sembarangan?',
      'Mengapa kejujuran berbasis data adalah aset termahal dalam bisnis bengkel sepeda motor modern?'
    ]
  },
  {
    project_id: 'prj-tsm-02',
    major_code: 'TSM',
    major_name: 'Teknik Sepeda Motor',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Analisis Data Riwayat Kedipan MIL Injeksi (PGM-FI) & Prediksi Konsumsi Bahan Bakar',
    problem_statement: 'Sepeda motor berteknologi injeksi elektronik (FI) dilengkapi lampu indikator Malfunction Indicator Lamp (MIL) pada panel spidometer. Siswa kelas X sering hafal jumlah kedipan kode eror (misal 7 kedipan = EOT, 12 kedipan = Injektor), namun belum mampu menganalisis secara komputasional bagaimana kerusakan sensor tersebut berdampak pada lonjakan konsumsi bahan bakar (pemborosan bensin km/liter) dan emisi gas buang.',
    learning_objectives: [
      'Menerjemahkan kode kedipan biner panjang-pendek MIL ke dalam kode angka kerusakan Electronic Control Unit (ECU).',
      'Menganalisis korelasi data telemetri sensor (suhu mesin, bukaan gas TPS, sensor O2) terhadap rasio bahan bakar (Air-Fuel Ratio).',
      'Menyusun model estimasi regresi komputasional sederhana untuk memprediksi penurunan efisiensi konsumsi bahan bakar akibat sensor rusak.'
    ],
    kka_concepts: {
      computational_thinking: 'Pengenalan pola sinyal kedipan optik (Panjang = 10, Pendek = 1) dan pemodelan hubungan sebab-akibat data sensor.',
      algorithm: 'Algoritma decoding kode biner Morse/MIL dan perhitungan estimasi konsumsi BBM: km_per_liter = km_standar * faktor_koreksi_sensor.',
      data_processing: 'Analisis data log servis kendaraan injeksi dan grafik deviasi konsumsi bensin.',
      ai_or_ethics: 'Etika Perawatan Mesin Ramah Lingkungan & Pengurangan Emisi Karbon Kendaraan Bermotor.'
    },
    realistic_scenario: 'Pelanggan mengeluhkan motor injeksinya terasa boros bensin (biasanya 52 km/liter turun drastis menjadi 34 km/liter) dan lampu MIL berkedip 7 kali saat kunci kontak ON. Siswa TSM harus menganalisis data sensor suhu mesin (EOT) yang membeku di angka dingin sehingga ECU menyemprot bensin berlebih terus-menerus.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Riwayat Kedipan MIL & Telemetri Sensor Injeksi',
      description: 'Data 6 sepeda motor injeksi dengan kode MIL, parameter sensor, dan konsumsi bensin aktual.',
      headers: ['Nomor Rangka', 'Pola Kedipan MIL', 'Kode Angka', 'Sensor Bermasalah', 'Suhu Terbaca ECU (°C)', 'Konsumsi BBM Aktual (km/L)', 'Status Konsumsi'],
      rows: [
        ['FI-001', '7 Kedipan Cepat', 7, 'Sensor EOT (Engine Oil Temp)', -20, 34.0, 'Sangat Boros (-35%)'],
        ['FI-002', '1 Kedipan Lambat, 2 Cepat', 12, 'Injektor Bahan Bakar', 85, 28.0, 'Sangat Boros & Brebet'],
        ['FI-003', '8 Kedipan Cepat', 8, 'Sensor TPS (Throttle Position)', 85, 38.5, 'Boros & Tarikan Berat'],
        ['FI-004', '2 Kedipan Lambat, 1 Cepat', 21, 'Sensor Oksigen (O2 Sensor)', 88, 41.0, 'Boros Emisi Tinggi'],
        ['FI-005', 'Tidak Ada Kedipan (Normal)', 0, 'Semua Sensor Normal', 88, 52.5, 'Sangat Irit (Standar Pabrik)'],
        ['FI-006', '1 Kedipan Cepat', 1, 'Sensor MAP (Manifold Air Pressure)', 80, 37.0, 'Boros & Asap Hitam']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Decoding Sinyal Kedipan MIL',
        description: 'Hitung kedipan panjang (1.3 detik = puluhan/10) dan kedipan pendek (0.5 detik = satuan/1).',
        expected_action: 'Konversikan pola kedipan optik ke angka kode eror kerusakan.'
      },
      {
        step_number: 2,
        title: 'Analisis Parameter Sensor pada ECU',
        description: 'Pada kode 7 (EOT), sensor putus menyebabkan resistansi tak terhingga sehingga ECU membaca suhu mesin -20°C (sangat dingin).',
        expected_action: 'Pahami logika fail-safe ECU yang mengaktifkan mode pemanasan (enrichment choke) secara permanen.'
      },
      {
        step_number: 3,
        title: 'Simulasi Prediksi Konsumsi Bahan Bakar',
        description: 'Hitung persentase penurunan efisiensi bensin: ((52.5 - 34.0) / 52.5) * 100% = 35.2% pemborosan.',
        expected_action: 'Gunakan slider simulator untuk mengamati dampak perbaikan sensor terhadap efisiensi bensin.'
      },
      {
        step_number: 4,
        title: 'Penerbitan Laporan Emisi & Penghematan Finansial',
        description: 'Hitung berapa ratus ribu rupiah uang bensin yang dihemat pemilik motor per tahun setelah sensor diganti.',
        expected_action: 'Dokumentasikan analisis ke LKPD digital.'
      }
    ],
    simulation_config: {
      simulation_type: 'injection_telemetry_analyzer',
      title: 'Simulator Telemetri Sensor Injeksi & Konsumsi BBM TSM',
      description: 'Decode sinyal kedipan MIL dan simulasikan dampak kerusakan sensor injeksi terhadap keborosan bahan bakar sepeda motor.',
      safety_guidelines: 'Simulasi data sensor virtual. Mesin motor tidak perlu dinyalakan di ruang tertutup untuk menghindari racun gas CO.',
      default_inputs: {
        milBlinkCode: 7,
        standardMileageKmL: 52.5,
        dailyCommuteKm: 30.0,
        fuelPricePerLiter: 10000
      }
    },
    analysis_questions: [
      {
        id: 'q-tsm2-1',
        question: 'Mengapa sensor suhu mesin (EOT) yang rusak dapat menyebabkan motor injeksi menjadi sangat boros bensin?',
        kka_focus: 'Logika Algoritma ECU Injeksi',
        sample_answer_guide: 'Ketika sensor EOT rusak/putus, sinyal tegangan menjadi tinggi dan ECU membaca suhu mesin berada di -20°C (beku). Algoritma ECU menyimpulkan mesin sedang dingin dan memerintahkan injektor menyemprot bensin lebih banyak (choke elektronik aktif terus-menerus), sehingga bahan bakar terbuang percuma.'
      },
      {
        id: 'q-tsm2-2',
        question: 'Tuliskan aturan dekode algoritma untuk menerjemahkan kedipan lampu MIL (variabel KedipanPanjang dan KedipanPendek) menjadi KodeEror!',
        kka_focus: 'Algoritma Decoding',
        sample_answer_guide: 'KodeEror = (KedipanPanjang * 10) + (KedipanPendek * 1). Contoh: 2 panjang dan 1 pendek = (2 * 10) + (1 * 1) = 21 (Sensor Oksigen).'
      },
      {
        id: 'q-tsm2-3',
        question: 'Hitung berapa rupiah biaya bensin ekstra yang terbuang sia-sia oleh pengendara motor FI-001 dalam setahun jika setiap hari ia menempuh jarak 30 km (asumsi bensin Rp 10.000 / liter)!',
        kka_focus: 'Pengolahan Data Finansial Konsumen',
        sample_answer_guide: 'Kondisi normal: 30 km / 52.5 km/L = 0.571 L/hari. Kondisi rusak: 30 km / 34 km/L = 0.882 L/hari. Selisih boros = 0.311 L/hari. Setahun (365 hari) = 113.5 liter bensin terbuang = Rp 1.135.000 per tahun!'
      }
    ],
    expected_final_product: 'Laporan Diagnosa Sistem PGM-FI Cerdas dan Kalkulator Penghematan Finansial Bahan Bakar Konsumen.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tsm-02',
      title: 'LKPD Digital: Telemetri Sensor Injeksi & Efisiensi BBM',
      sections: [
        {
          section_title: 'Bagian A: Analisis Pengaruh Kode Eror MIL',
          tasks: [
            {
              id: 't-tsm2-a1',
              prompt: 'Gunakan simulator untuk menganalisis data motor FI-001 dan FI-004:',
              input_type: 'table',
              table_columns: ['Nomor Rangka', 'Kode MIL', 'Komponen Rusak', 'Efisiensi BBM (km/L)', 'Persentase Keborosan', 'Biaya Terbuang / Tahun'],
              default_rows: [
                ['FI-001', '7', 'Sensor Suhu Mesin EOT', '34.0 km/L', '35.2%', 'Rp 1.135.000'],
                ['FI-004', 'Isi kode...', 'Isi komponen...', 'Isi efisiensi...', 'Isi persentase...', 'Isi biaya...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Solusi Komputasional Mekanik Modern',
          tasks: [
            {
              id: 't-tsm2-b1',
              prompt: 'Jelaskan mengapa pemahaman logika data sensor jauh lebih penting bagi mekanik sepeda motor masa kini daripada sekadar menyetel baut karburator lama:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Decoding Sinyal Optik & Komunikasi ECU', weight: 25, description: 'Ketepatan mengonversi kedipan lampu MIL ke kode angka diagnosis.' },
      { id: 'r2', name: 'Analisis Hubungan Data Sensor terhadap Injeksi', weight: 30, description: 'Pemahaman logika Air-Fuel Ratio berdasarkan suhu dan tekanan.' },
      { id: 'r3', name: 'Pemodelan Perhitungan Konsumsi & Biaya BBM', weight: 25, description: 'Akurasi matematis perhitungan km/liter dan kerugian finansial per tahun.' },
      { id: 'r4', name: 'Kesadaran Lingkungan & Emisi Gas Buang', weight: 20, description: 'Wawasan dampak keborosan bahan bakar terhadap polusi udara kota.' }
    ],
    success_criteria: [
      'Mendekode 6 pola kedipan MIL sensor injeksi sepeda motor dengan 100% tepat.',
      'Menghitung dampak penurunan efisiensi konsumsi bensin akibat sensor rusak.',
      'Menyusun kalkulasi penghematan biaya bahan bakar tahunan bagi konsumen.'
    ],
    reflection_prompts: [
      'Bagaimana komputer kecil di sepeda motor (ECU) membuat jutaan keputusan penyemprotan bensin setiap detiknya?',
      'Mengapa merawat sepeda motor injeksi dengan benar adalah kontribusi nyata siswa SMK dalam mengurangi polusi udara bumi?'
    ]
  },

  // ==========================================================================
  // 8. TKR - TEKNIK KENDARAAN RINGAN
  // ==========================================================================
  {
    project_id: 'prj-tkr-01',
    major_code: 'TKR',
    major_name: 'Teknik Kendaraan Ringan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Dasar',
    title: 'Algoritma Pemodelan Jarak Pengereman Aman Kendaraan (Braking Distance Model)',
    problem_statement: 'Kecelakaan tabrakan beruntun di jalan tol sering dialami pengemudi karena tidak memahami hukum fisika komputasional jarak berhenti aman. Pengemudi sering mengira mobil yang melaju 100 km/jam dapat berhenti seketika dalam jarak 10 meter saat rem diinjak, mengabaikan waktu reaksi manusia dan koefisien gesek ban pada aspal basah.',
    learning_objectives: [
      'Mendekomposisi proses pengereman mobil menjadi dua komponen waktu komputasional: Jarak Reaksi Sopir ($d_{reaksi} = v \cdot t_{reaksi}$) dan Jarak Pengereman Fisik ($d_{rem} = \frac{v^2}{2 \cdot \mu \cdot g}$).',
      'Menyusun algoritma komputasi untuk menghitung total jarak berhenti aman pada berbagai variasi kecepatan dan kondisi cuaca (aspal kering vs hujan licin).',
      'Menerapkan aturan batas keselamatan "Aturan 3 Detik" jalan raya dalam bentuk logika simulasi komputasional.'
    ],
    kka_concepts: {
      computational_thinking: 'Pemodelan matematis fisika pengereman dan dekomposisi variabel dinamis kecepatan serta koefisien gesek ban.',
      algorithm: 'Algoritma sekuensial perhitungan jarak berhenti total: Total_Distance = Reaction_Distance + Braking_Distance.',
      data_processing: 'Konversi satuan kecepatan (km/jam ke meter/detik) dan komparasi data tabel jarak berhenti aman.',
      ai_or_ethics: 'Etika Keselamatan Berkendara (Safety Driving) & Pencegahan Kecelakaan Fatal di Jalan Raya.'
    },
    realistic_scenario: 'Siswa TKR merancang modul edukasi keselamatan berkendara untuk sekolah mengemudi. Mereka harus memprogram kalkulator visual yang menunjukkan kepada calon pengemudi mengapa menjaga jarak 60 meter di jalan tol saat hujan adalah batas hidup dan mati.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Uji Jarak Pengereman Mobil Penumpang',
      description: 'Data eksperimen virtual jarak berhenti mobil pada kecepatan berbeda dan kondisi permukaan jalan.',
      headers: ['Kecepatan (km/jam)', 'Kecepatan (m/s)', 'Waktu Reaksi (detik)', 'Kondisi Jalan', 'Koefisien Gesek (μ)', 'Jarak Berhenti Total (m)'],
      rows: [
        [30, 8.33, 1.0, 'Aspal Kering', 0.8, 12.7],
        [50, 13.89, 1.0, 'Aspal Kering', 0.8, 26.2],
        [80, 22.22, 1.0, 'Aspal Kering', 0.8, 53.8],
        [100, 27.78, 1.0, 'Aspal Kering', 0.8, 77.0],
        [80, 22.22, 1.0, 'Aspal Basah Hujan', 0.4, 85.3],
        [100, 27.78, 1.0, 'Aspal Basah Hujan', 0.4, 126.3]
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Konversi Satuan Kecepatan',
        description: 'Ubah kecepatan kendaraan dari km/jam ke meter per detik: v (m/s) = v (km/jam) / 3.6.',
        expected_action: 'Contoh: 100 km/jam = 27.78 meter per detik.'
      },
      {
        step_number: 2,
        title: 'Perhitungan Jarak Reaksi Manusia (Reaction Distance)',
        description: 'Waktu reaksi sopir rata-rata adalah 1 detik (melihat bahaya hingga kaki menginjak pedal rem): d_reaksi = v * 1.0.',
        expected_action: 'Perhatikan bahwa pada 100 km/jam, mobil sudah meluncur 27.8 meter sebelum rem mulai bekerja!'
      },
      {
        step_number: 3,
        title: 'Perhitungan Jarak Gesek Mekanis (Braking Distance)',
        description: 'Hitung d_rem = (v^2) / (2 * mu * 9.81), di mana mu = 0.8 (jalan kering) atau 0.4 (jalan basah licin).',
        expected_action: 'Amati kuadratik: jika kecepatan naik 2x lipat, jarak pengereman mekanis melonjak 4x lipat!'
      },
      {
        step_number: 4,
        title: 'Total Jarak Berhenti & Verifikasi Batas Aman',
        description: 'Jumlahkan Total = d_reaksi + d_rem. Evaluasi apakah jarak aman antar-mobil terpenuhi.',
        expected_action: 'Tampilkan hasil ke dalam LKPD digital siswa.'
      }
    ],
    simulation_config: {
      simulation_type: 'braking_distance_calc',
      title: 'Simulator Jarak Pengereman Aman Kendaraan TKR',
      description: 'Simulasikan jarak reaksi pengemudi dan jarak gesek pengereman mobil pada kondisi aspal kering vs basah licin.',
      safety_guidelines: 'Simulasi komputasi fisika digital. Menghindari bahaya tabrakan nyata di lintasan sirkuit.',
      default_inputs: {
        speedKmh: 100,
        reactionTimeSec: 1.0,
        roadCondition: 'Aspal Basah Hujan',
        frictionCoefficient: 0.4
      }
    },
    analysis_questions: [
      {
        id: 'q-tkr1-1',
        question: 'Pada kecepatan 100 km/jam di aspal basah hujan, total jarak berhenti mobil mencapai 126.3 meter. Mengapa jarak pengereman mekanis melonjak drastis saat hujan?',
        kka_focus: 'Pemodelan Fisika Komputasional',
        sample_answer_guide: 'Karena air hujan membentuk lapisan tipis yang memisahkan telapak ban dari aspal (aquaplaning), menurunkan koefisien gesek (mu) dari 0.8 menjadi 0.4. Karena mu berada di penyebut formula d_rem = v² / (2 * mu * g), penurunan separuh koefisien gesek menggandakan jarak pengereman mekanis.'
      },
      {
        id: 'q-tkr1-2',
        question: 'Jika kecepatan kendaraan dinaikkan dari 50 km/jam menjadi 100 km/jam (naik 2x lipat), mengapa jarak pengereman mekanisnya tidak naik 2x lipat melainkan 4x lipat?',
        kka_focus: 'Analisis Fungsi Kuadratik',
        sample_answer_guide: 'Karena energi kinetik mobil berbanding lurus dengan kuadrat kecepatan (E_k = 1/2 * m * v²). Untuk menyerap energi kinetik tersebut melalui gesekan rem, jarak pengereman sebanding dengan v², sehingga (2v)² = 4 kali lipat lebih jauh.'
      },
      {
        id: 'q-tkr1-3',
        question: 'Bagaimana teknologi sensor radar dan pengereman otomatis darurat (Autonomous Emergency Braking / AEB) pada mobil modern menerapkan konsep komputasi ini?',
        kka_focus: 'AI & Sistem Keselamatan Otomasi Mobil',
        sample_answer_guide: 'Sensor radar terus-menerus mengukur jarak dan kecepatan mobil di depan. Komputer mobil menghitung total jarak berhenti secara real-time. Jika jarak aktual lebih kecil dari total jarak pengereman darurat, algoritma mobil langsung mengaktifkan rem hidrolik secara otomatis tanpa menunggu reaksi pengemudi manusia.'
      }
    ],
    expected_final_product: 'Grafik Interaktif Hubungan Kecepatan vs Jarak Berhenti Aman dan Panduan Pengemudi Cerdas Jalan Raya.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tkr-01',
      title: 'LKPD Digital: Pemodelan Jarak Pengereman Kendaraan Ringan',
      sections: [
        {
          section_title: 'Bagian A: Uji Simulasi Jarak Berhenti Mobil',
          tasks: [
            {
              id: 't-tkr1-a1',
              prompt: 'Gunakan simulator untuk menghitung komponen jarak pengereman pada kecepatan 50 km/jam dan 80 km/jam di aspal basah:',
              input_type: 'table',
              table_columns: ['Kecepatan (km/jam)', 'Kondisi Jalan', 'Jarak Reaksi (m)', 'Jarak Pengereman (m)', 'Total Jarak Berhenti (m)'],
              default_rows: [
                ['50 km/jam', 'Aspal Basah (μ=0.4)', '13.9 m', '24.6 m', '38.5 meter'],
                ['80 km/jam', 'Aspal Basah (μ=0.4)', 'Isi reaksi...', 'Isi rem...', 'Isi total...'],
                ['100 km/jam', 'Aspal Kering (μ=0.8)', 'Isi reaksi...', 'Isi rem...', 'Isi total...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Evaluasi Aturan 3 Detik',
          tasks: [
            {
              id: 't-tkr1-b1',
              prompt: 'Jelaskan mengapa "Aturan Menjaga Jarak 3 Detik" di jalan raya secara matematis mampu mencegah tabrakan beruntun di berbagai tingkat kecepatan:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pemodelan Matematis Jarak Reaksi & Pengereman', weight: 25, description: 'Ketepatan rumus fisika kecepatan dan koefisien gesek.' },
      { id: 'r2', name: 'Analisis Faktor Kuadratik Kecepatan Mobil', weight: 30, description: 'Pemahaman pengaruh eksponensial v² terhadap jarak berhenti.' },
      { id: 'r3', name: 'Komparasi Kondisi Lingkungan (Kering vs Basah)', weight: 25, description: 'Akurasi membaca data penurunan traksi ban pada jalan licin.' },
      { id: 'r4', name: 'Edukasi Budaya Keselamatan Berkendara', weight: 20, description: 'Kepedulian terhadap keselamatan nyawa pengguna jalan raya.' }
    ],
    success_criteria: [
      'Menghitung jarak reaksi dan jarak pengereman mobil pada berbagai kecepatan secara tepat.',
      'Menjelaskan mengapa kecepatan 100 km/jam saat hujan memerlukan jarak aman > 120 meter.',
      'Menyusun pedoman keselamatan pengereman kendaraan berbasis data komputasi.'
    ],
    reflection_prompts: [
      'Bagaimana hukum fisika dan matematika melindungi kita di jalan raya jika kita mematuhinya secara sadar?',
      'Mengapa teknologi mobil otonom masa depan membutuhkan perhitungan jarak berhenti yang sangat presisi dalam hitungan milidetik?'
    ]
  },
  {
    project_id: 'prj-tkr-02',
    major_code: 'TKR',
    major_name: 'Teknik Kendaraan Ringan',
    field_category: 'Teknologi dan Rekayasa',
    project_level: 'Pengembangan',
    title: 'Diagnosis Diagnostik Data Sensor OBD-II Virtual & Analisis Rasio Emisi Gas Buang Lambda',
    problem_statement: 'Mobil modern yang gagal uji emisi gas buang karbon monoksida (CO) dan hidrokarbon (HC) sering membingungkan teknisi muda TKR. Mekanik sering mengira knalpot bocor atau busi mati, padahal data stream OBD-II (On-Board Diagnostics II) menunjukkan parameter Short Term Fuel Trim (STFT) mencapai +25% akibat sensor aliran udara (Mass Air Flow / MAF) kotor atau kebocoran vakum intake.',
    learning_objectives: [
      'Membaca dan menganalisis parameter telemetri live stream scanner OBD-II: RPM, MAF (g/s), STFT (%), LTFT (%), Tegangan Sensor O2 (mV), dan Rasio Lambda (λ).',
      'Mengklasifikasikan kondisi pembakaran mesin mobil: Campuran Terlalu Kaya (Rich / λ < 1.0) vs Campuran Terlalu Kurus (Lean / λ > 1.0) vs Campuran Stoikiometri Ideal (λ = 1.0).',
      'Menerapkan algoritma diagnosis berbasis data untuk merekomendasikan perbaikan komponen sebelum melakukan uji emisi resmi pemerintah.'
    ],
    kka_concepts: {
      computational_thinking: 'Dekomposisi sistem injeksi multi-sensor dan pengenalan pola deviasi persentase koreksi bahan bakar (Fuel Trim).',
      algorithm: 'Algoritma diagnosis multi-kondisi: JIKA STFT + LTFT > +15% MAKA Status = "Lean Miskin (Bocor Vakum)", JIKA < -15% MAKA "Rich Kaya".',
      data_processing: 'Analisis data stream telemetri OBD-II dan visualisasi grafik rasio stoikiometri Lambda.',
      ai_or_ethics: 'Etika Lingkungan Bersih, Pengurangan Polusi Gas Buang Beracun (Kepatuhan Standar EURO 4).'
    },
    realistic_scenario: 'Bengkel Tefa TKR SMK mengadakan uji emisi gratis untuk mobil dinas sekolah dan masyarakat sekitar. Sebuah mobil MPV 1500cc menunjukkan emisi gas buang berbau tajam dan boros bahan bakar. Siswa menghubungkan scanner diagnostik OBD-II virtual untuk melacak akar masalah pembakaran.',
    safe_sample_dataset: {
      dataset_name: 'Dataset Live Telemetri Scanner OBD-II Mobil MPV',
      description: 'Data stream 6 kondisi operasi mesin mobil dengan parameter sensor gas buang.',
      headers: ['Kondisi Uji', 'RPM Mesin', 'Sensor MAF (g/s)', 'STFT (%)', 'LTFT (%)', 'O2 Sensor 1 (mV)', 'Nilai Lambda (λ)', 'Status Campuran'],
      rows: [
        ['IDLE-01 (Normal)', 750, 2.1, '+1.5%', '+2.0%', 450, 1.00, 'Stoikiometri Sempurna (Lolos Emisi)'],
        ['IDLE-02 (Bocor Vakum)', 820, 1.4, '+22.5%', '+18.0%', 95, 1.25, 'Campuran Terlalu Kurus (Lean Anomaly)'],
        ['IDLE-03 (Injektor Bocor)', 740, 2.8, '-19.0%', '-14.0%', 880, 0.82, 'Campuran Terlalu Kaya (Rich Anomaly)'],
        ['ACCEL-01 (Akselerasi 2500)', 2500, 8.5, '+3.0%', '+2.0%', 520, 0.98, 'Normal Akselerasi Power Mode'],
        ['IDLE-04 (MAF Kotor)', 710, 1.2, '+24.0%', '+21.0%', 110, 1.30, 'Campuran Sangat Kurus (Sensor Kotor)'],
        ['CRUISE-01 (Kecepatan 60)', 1800, 6.2, '-1.0%', '+0.5%', 480, 1.01, 'Jelajah Stabil (Sangat Bersih)']
      ]
    },
    step_by_step_instructions: [
      {
        step_number: 1,
        title: 'Pembacaan Parameter Live Data OBD-II',
        description: 'Buka scanner diagnostik virtual, perhatikan nilai Short Term Fuel Trim (STFT) dan Long Term Fuel Trim (LTFT).',
        expected_action: 'Rentang normal bahan bakar adalah antara -10% hingga +10%.'
      },
      {
        step_number: 2,
        title: 'Evaluasi Tegangan Sensor Oksigen (O2 Sensor)',
        description: 'Tegangan O2 Sensor berosilasi antara 100 mV (udara banyak / miskin) hingga 900 mV (bensin banyak / kaya).',
        expected_action: 'Periksa apakah sensor macet di tegangan rendah (< 200 mV) atau tinggi (> 800 mV).'
      },
      {
        step_number: 3,
        title: 'Penghitungan Nilai Lambda Pembakaran (λ)',
        description: 'Nilai Lambda ideal = 1.00 (campuran 14.7 kg udara : 1 kg bensin). JIKA λ < 1.0 berarti Rich, JIKA λ > 1.0 berarti Lean.',
        expected_action: 'Simulasikan perbaikan kebocoran selang intake dan amati nilai STFT kembali ke 0%.'
      },
      {
        step_number: 4,
        title: 'Penerbitan Sertifikat Rekomendasi Uji Emisi',
        description: 'Tentukan apakah kendaraan siap lulus uji emisi gas buang resmi pemerintah (CO < 0.5%, HC < 200 ppm).',
        expected_action: 'Dokumentasikan analisis telemetri ke dalam LKPD digital siswa.'
      }
    ],
    simulation_config: {
      simulation_type: 'obd2_emission_diagnostic',
      title: 'Simulator Scanner OBD-II & Emisi Lambda TKR',
      description: 'Analisis live stream data sensor mesin mobil (RPM, MAF, Fuel Trim, Lambda) dan diagnosis kegagalan uji emisi gas buang.',
      safety_guidelines: 'Simulasi telemetri virtual aman di peramban. Menghindari paparan gas beracun Karbon Monoksida (CO) knalpot mobil di bengkel.',
      default_inputs: {
        engineRpm: 750,
        mafAirflowGs: 1.4,
        shortTermFuelTrimPercent: 22.5,
        longTermFuelTrimPercent: 18.0,
        o2SensorVoltageMv: 95
      }
    },
    analysis_questions: [
      {
        id: 'q-tkr2-1',
        question: 'Pada data IDLE-02, nilai STFT mencapai +22.5% dan LTFT +18.0% (total Fuel Trim +40.5%). Mengapa komputer mobil (ECU) menambah semprotan bensin sebesar itu?',
        kka_focus: 'Analisis Feedback Loop Kontrol Tertutup',
        sample_answer_guide: 'Nilai Fuel Trim positif yang sangat tinggi berarti ECU mendeteksi sinyal sensor O2 rendah (95 mV / Lean). Ada udara palsu yang menyusup ke ruang bakar akibat selang intake bocor (vakum bocor) yang tidak terukur oleh sensor MAF, sehingga ECU terpaksa mengoreksi dengan menambah durasi injeksi bensin hingga +40.5% agar mesin tidak mati.'
      },
      {
        id: 'q-tkr2-2',
        question: 'Tuliskan aturan algoritma diagnosis logika untuk mendeteksi kemungkinan "Kebocoran Selang Intake Vakum"!',
        kka_focus: 'Algoritma Aturan Diagnostik',
        sample_answer_guide: 'JIKA (STFT + LTFT > +15%) DAN (Sensor_O2 < 200 mV) DAN (MAF_Idle < 1.8 g/s) MAKA Status = "Curigai Kebocoran Selang Vakum Intake / Sambungan Manifold Kendor".'
      },
      {
        id: 'q-tkr2-3',
        question: 'Mengapa pembakaran dengan nilai Lambda terlalu kaya (λ = 0.82) menghasilkan emisi gas buang beracun Karbon Monoksida (CO) dan polusi udara tinggi?',
        kka_focus: 'Kimia Pembakaran & Etika Lingkungan',
        sample_answer_guide: 'Karena pasokan molekul oksigen (O2) tidak mencukupi untuk membakar seluruh rantai hidrokarbon bensin secara sempurna menjadi CO2 dan H2O. Akibatnya terjadi pembakaran tak sempurna yang menghasilkan gas Karbon Monoksida (CO) yang sangat beracun bagi pernapasan manusia dan hidrokarbon mentah (HC) yang memicu kabut asap (smog).'
      }
    ],
    expected_final_product: 'Laporan Diagnostik Scanner OBD-II Lengkap dan Sertifikat Verifikasi Kesiapan Uji Emisi Gas Buang Kendaraan.',
    digital_lkpd: {
      lkpd_id: 'lkpd-tkr-02',
      title: 'LKPD Digital: Telemetri OBD-II & Analisis Rasio Emisi Lambda',
      sections: [
        {
          section_title: 'Bagian A: Diagnosis Data Scanner OBD-II',
          tasks: [
            {
              id: 't-tkr2-a1',
              prompt: 'Uji kondisi IDLE-02 dan IDLE-03 pada simulator dan tentukan diagnosisnya:',
              input_type: 'table',
              table_columns: ['Kondisi Uji', 'Total Fuel Trim (STFT+LTFT)', 'Tegangan Sensor O2', 'Rasio Lambda', 'Penyebab Kerusakan'],
              default_rows: [
                ['IDLE-02', '+40.5% (Sangat Positif)', '95 mV (Kurus/Lean)', 'λ = 1.25', 'Kebocoran udara intake / selang vakum'],
                ['IDLE-03', 'Isi fuel trim...', 'Isi tegangan O2...', 'Isi lambda...', 'Isi penyebab...']
              ]
            }
          ]
        },
        {
          section_title: 'Bagian B: Rencana Perbaikan Emisi Bersih',
          tasks: [
            {
              id: 't-tkr2-b1',
              prompt: 'Tuliskan langkah-langkah mekanik untuk menormalkan kembali nilai Lambda mendekati 1.00 sebelum mobil diuji emisi resmi:',
              input_type: 'text'
            }
          ]
        }
      ]
    },
    assessment_rubric: [
      { id: 'r1', name: 'Pembacaan Parameter Telemetri OBD-II', weight: 25, description: 'Ketepatan membaca MAF, Fuel Trim, dan tegangan sensor Oksigen.' },
      { id: 'r2', name: 'Analisis Rasio Stoikiometri Lambda Pembakaran', weight: 30, description: 'Kemampuan mengidentifikasi kondisi Rich vs Lean vs Ideal.' },
      { id: 'r3', name: 'Algoritma Diagnostik Multi-Sensor', weight: 25, description: 'Ketepatan menyimpulkan komponen yang rusak berdasarkan data live stream.' },
      { id: 'r4', name: 'Komitmen terhadap Emisi Bersih Standar EURO 4', weight: 20, description: 'Kepedulian terhadap kelestarian lingkungan dan penurunan polusi udara.' }
    ],
    success_criteria: [
      'Mendiagnosis 6 kondisi live data scanner OBD-II secara akurat.',
      'Membedakan anomali kebocoran vakum (Lean) dengan injektor menetes (Rich).',
      'Menyusun rekomendasi perbaikan emisi gas buang yang sesuai standar kelayakan pemerintah.'
    ],
    reflection_prompts: [
      'Bagaimana scanner komputer diagnostik mengubah bengkel mobil dari tempat menebak-nebak menjadi laboratorium sains data presisi tinggi?',
      'Mengapa memastikan kendaraan menghasilkan emisi bersih adalah tanggung jawab moral mekanik otomotif terhadap kesehatan masyarakat luas?'
    ]
  }
];

export function getVocationalProjects(filterMajor?: VocationalMajorCode | 'all', filterLevel?: 'Dasar' | 'Pengembangan' | 'all'): VocationalProject[] {
  return VOCATIONAL_PROJECTS.filter(p => {
    if (filterMajor && filterMajor !== 'all' && p.major_code !== filterMajor) return false;
    if (filterLevel && filterLevel !== 'all' && p.project_level !== filterLevel) return false;
    return true;
  });
}

export function getProjectById(projectId: string): VocationalProject | undefined {
  return VOCATIONAL_PROJECTS.find(p => p.project_id === projectId);
}
