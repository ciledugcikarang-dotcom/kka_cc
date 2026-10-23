import { CrossMajorProject, CrossMajorTeam } from '../types';

export const INITIAL_CROSS_MAJOR_PROJECTS: CrossMajorProject[] = [
  // ==========================================================================
  // PROYEK 1: KAMPANYE HEMAT ENERGI SEKOLAH & OTOMASI EFISIENSI BERKELANJUTAN
  // ==========================================================================
  {
    project_id: 'cmp-01',
    title: 'Rancang Bangun Kampanye Hemat Energi & Otomasi Efisiensi Berkelanjutan di Lingkungan Sekolah',
    problem_statement: 'Berdasarkan audit internal sekolah, biaya rekening listrik bulanan melonjak 34% akibat lampu dan AC yang sering menyala di ruang kelas/bengkel kosong, ventilasi ruang yang kurang optimal, dan emisi kendaraan operasional sekolah yang belum terpantau. Dibutuhkan kolaborasi terpadu 8 jurusan SMK untuk merancang solusi holistik berbasis berpikir komputasional, otomasi, pengolahan data riil, dan kampanye visual yang bertanggung jawab.',
    theme: 'Energi Berkelanjutan & Green School (Adiwiyata KKA)',
    learning_objectives: [
      'Menerapkan 4 pilar berpikir komputasional (Dekomposisi, Pola, Abstraksi, Algoritma) dalam memecahkan masalah pemborosan energi multidisiplin.',
      'Mengolah dan menganalisis dataset numerik konsumsi daya listrik serta telemetri sensor tanpa alat berbayar.',
      'Merancang diagram alir logika otomasi kontrol sensor untuk penghematan listrik.',
      'Berkolaborasi lintas jurusan dengan pembagian peran terstruktur dan menghasilkan produk terintegrasi.',
      'Menilai kontribusi individu dan produk akhir kelompok secara adil dan transparan.'
    ],
    target_majors: ['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR'],
    target_classes: [
      'cls-dkv-1', 'cls-tkp-1', 'cls-dpib-1', 'cls-toi-1',
      'cls-titl-1', 'cls-tav-1', 'cls-tsm-1', 'cls-tkr-1'
    ],
    created_by: 'usr-guru-01',
    teacher_name: 'Budi Rahayu, S.Kom., M.Kom.',
    created_at: '2026-10-10T08:00:00Z',
    start_at: '2026-10-15T07:00:00Z',
    due_at: '2026-11-20T23:59:00Z',
    status: 'published',
    team_size_max: 8,
    is_template: true,
    guidelines: 'Setiap anggota tim bertanggung jawab mengerjakan tugas sesuai kejuruan masing-masing, lalu mengintegrasikan temuannya ke dalam laporan gabungan dan refleksi tim. Seluruh simulasi dan data dapat diakses gratis di aplikasi KKA Lab.',
    
    // Pembagian peran yang dapat diedit oleh guru
    role_definitions: [
      {
        major_code: 'DKV',
        major_name: 'Desain Komunikasi Visual',
        role_title: 'Desainer Poster & Media Kampanye Digital',
        role_description: 'Merancang infografis dan poster kampanye digital hemat energi dengan hierarki visual teratur, kontras warna aksesibel (standar WCAG 2.1 minimal 4.5:1), dan pesan etis.',
        deliverables: [
          'Poster infografis digital kampanye hemat energi (format gambar/PDF)',
          'Tabel audit kontras warna (HEX code teks vs background & rasio kontras)'
        ],
        computational_concept: 'Pengolahan citra digital, representasi warna RGB/HEX, dan kepatuhan WCAG.',
        suggested_tools: ['Lab DKV Kontras Studio', 'Canva Edu / Inkscape', 'Color Contrast Analyzer'],
        sample_guidance: 'Fokus pada keterbacaan teks utama dari jarak 2 meter pada mading digital sekolah.'
      },
      {
        major_code: 'TKP',
        major_name: 'Teknik Konstruksi & Perumahan',
        role_title: 'Analis Kebutuhan & Perbaikan Fisik Ruang',
        role_description: 'Menyusun data kebutuhan ruang, luas ventilasi alami, dan tahapan dekomposisi perbaikan fisik gedung untuk meminimalkan panas matahari dan pemakaian AC.',
        deliverables: [
          'Tabel kalkulasi rasio bukaan jendela terhadap luas lantai (minimal 15%)',
          'Algoritma tahapan prioritas perbaikan insulasi atap dan plafon ruang'
        ],
        computational_concept: 'Dekomposisi volume ruang dan kalkulasi rasio bukaan sirkulasi udara.',
        suggested_tools: ['Spreadsheet Latihan KKA', 'Formulir Evaluasi Ruang Virtual'],
        sample_guidance: 'Gunakan data ukuran ruang bengkel 8m x 12m dengan tinggi 3.8m sebagai acuan.'
      },
      {
        major_code: 'DPIB',
        major_name: 'Desain Pemodelan & Informasi Bangunan',
        role_title: 'Pengelola Data Ruang & Visualisasi CAD/BIM',
        role_description: 'Mengelola data spasial gedung sekolah, pemetaan orientasi arah matahari (lintasan timur-barat), dan visualisasi penempatan sensor lampu hemat energi.',
        deliverables: [
          'Denah skematis zona panas matahari dan rekomendasi kanopi peneduh',
          'Tabel matriks koordinat penempatan titik lampu dan sensor efisiensi'
        ],
        computational_concept: 'Abstraksi koordinat geometris dan simulasi sudut bayangan matahari.',
        suggested_tools: ['Lab DPIB Daylight Simulator', 'LibreCAD / SketchUp Viewer'],
        sample_guidance: 'Hindari bukaan kaca besar tanpa kisi-kisi pada sisi dinding menghadap barat.'
      },
      {
        major_code: 'TOI',
        major_name: 'Teknik Otomasi Industri',
        role_title: 'Pemrogram Logika Kontrol & Otomatisasi',
        role_description: 'Merancang diagram alir logika otomasi kontrol lampu dan kipas menggunakan sensor PIR (keberadaan gerak) dan LDR (intensitas cahaya) agar mati otomatis saat ruang kosong.',
        deliverables: [
          'Diagram alir (Flowchart) logika kendali otomatis 3 kondisi',
          'Tabel kebenaran (Truth Table) input sensor gerak & cahaya vs output relay'
        ],
        computational_concept: 'Algoritma percabangan kondisi (IF-ELSE), state machine, dan diagram logika digital.',
        suggested_tools: ['Lab Flowchart Studio', 'Tabel Logika KKA'],
        sample_guidance: 'Sertakan jeda waktu tunda (delay 5 menit) sebelum relay mematikan beban.'
      },
      {
        major_code: 'TITL',
        major_name: 'Teknik Instalasi Tenaga Listrik',
        role_title: 'Pengolah Data Telemetri Konsumsi Energi Listrik',
        role_description: 'Mengolah dataset latihan konsumsi daya listrik (kWh) per gedung sekolah, mengidentifikasi anomali pemakaian daya saat malam, dan menghitung penyeimbangan beban 3 fasa.',
        deliverables: [
          'Tabel ringkasan konsumsi energi mingguan dan estimasi penghematan (Rp dan kWh)',
          'Grafik beban puncak listrik harian dan kalkulasi ketidakseimbangan fasa R-S-T'
        ],
        computational_concept: 'Pengolahan data agregasi numerik, rumus statistik deskriptif, dan visualisasi tren.',
        suggested_tools: ['Spreadsheet KKA Dataset Energi', 'Kalkulator Fasa Listrik'],
        sample_guidance: 'Identifikasi standby power (vampire draw) pada peralatan laboratorium komputer.'
      },
      {
        major_code: 'TAV',
        major_name: 'Teknik Audio Video',
        role_title: 'Konseptor Media Audio-Visual & Edukasi Suara',
        role_description: 'Menyusun naskah audio pengumuman cerdas (Public Address System) dan konsep video edukasi hemat energi dengan parameter sampling suara yang jernih.',
        deliverables: [
          'Naskah narasi audio pengingat hemat energi (durasi 60 detik)',
          'Storyboard video pendek kampanye (6 frame alur narasi)'
        ],
        computational_concept: 'Sampling frekuensi audio, struktur sekuensial narasi, dan etika multimedia.',
        suggested_tools: ['Audio Script Studio', 'Storyboard Planner'],
        sample_guidance: 'Gunakan nada suara ramah, hindari nada menghakimi, dan tekankan aksi nyata.'
      },
      {
        major_code: 'TSM',
        major_name: 'Teknik Sepeda Motor',
        role_title: 'Analis Perawatan & Efisiensi Motor Operasional',
        role_description: 'Mengolah data simulasi perawatan berkala sepeda motor inventaris sekolah, menganalisis hubungan tekanan ban & busi terhadap efisiensi konsumsi BBM serta reduksi emisi.',
        deliverables: [
          'Tabel pohon keputusan pengecekan sistem injeksi & pengapian hemat bahan bakar',
          'Kalkulasi estimasi pengurangan emisi karbon per kilometer servis tepat waktu'
        ],
        computational_concept: 'Pohon keputusan (Decision Tree) dan komputasi perbandingan parameter servis.',
        suggested_tools: ['Lab TSM Decision Studio', 'Kalkulator Rasio Konsumsi BBM'],
        sample_guidance: 'Tekanan ban kurang 20% dapat meningkatkan pemborosan BBM hingga 5%.'
      },
      {
        major_code: 'TKR',
        major_name: 'Teknik Kendaraan Ringan',
        role_title: 'Analis Data Telemetri Kendaraan Roda Empat',
        role_description: 'Menganalisis parameter virtual sensor OBD-II pada mobil dinas sekolah (kecepatan rata-rata, RPM, fuel trim) untuk memodelkan rute perjalanan dinas paling hemat energi.',
        deliverables: [
          'Analisis tabel rekaman data sensor OBD-II virtual (RPM vs Fuel Rate)',
          'Rekomendasi algoritma eco-driving untuk pengemudi kendaraan sekolah'
        ],
        computational_concept: 'Penyaringan data telemetri (filtering), korelasi variabel, dan algoritma efisiensi.',
        suggested_tools: ['OBD-II Telemetry Viewer', 'Eco-Route Calculator'],
        sample_guidance: 'Hindari idling kendaraan melebihi 3 menit saat menunggu penjemputan dinas.'
      }
    ],

    // Dataset referensi yang aman dan siap digunakan
    dataset_reference: {
      dataset_name: 'Dataset Konsumsi Energi Harian & Suhu Gedung Sekolah (14 Hari)',
      description: 'Data latihan konsumsi listrik kWh, suhu luar, dan status hunian ruang kelas X.',
      headers: ['Hari', 'Tanggal', 'Gedung_A_kWh', 'Gedung_B_kWh', 'Bengkel_kWh', 'Suhu_Maks_C', 'Status_Hunian'],
      rows: [
        ['Senin', '2026-10-05', 182.4, 145.2, 290.5, 33.2, 'Penuh'],
        ['Selasa', '2026-10-06', 178.6, 142.0, 310.2, 34.0, 'Penuh'],
        ['Rabu', '2026-10-07', 185.1, 148.5, 295.0, 32.8, 'Penuh'],
        ['Kamis', '2026-10-08', 190.2, 150.1, 320.4, 34.5, 'Penuh'],
        ['Jumat', '2026-10-09', 142.0, 110.4, 210.0, 33.0, 'Setengah Hari'],
        ['Sabtu', '2026-10-10', 45.2, 38.0, 65.4, 31.5, 'Ekstrakurikuler'],
        ['Minggu', '2026-10-11', 28.5, 22.0, 42.1, 32.0, 'Kosong (Standby)'],
        ['Senin', '2026-10-12', 175.0, 140.2, 285.0, 33.0, 'Penuh'],
        ['Selasa', '2026-10-13', 180.4, 143.5, 298.1, 33.8, 'Penuh'],
        ['Rabu', '2026-10-14', 182.9, 144.0, 302.5, 34.1, 'Penuh'],
        ['Kamis', '2026-10-15', 188.0, 147.2, 315.0, 34.2, 'Penuh'],
        ['Jumat', '2026-10-16', 140.5, 108.0, 205.4, 32.5, 'Setengah Hari'],
        ['Sabtu', '2026-10-17', 42.0, 35.1, 60.0, 31.0, 'Ekstrakurikuler'],
        ['Minggu', '2026-10-18', 27.0, 21.5, 40.0, 31.8, 'Kosong (Standby)']
      ]
    },

    // Rubrik Penilaian Terpisah: Individu (sesuai peran)
    individual_rubric: [
      { id: 'ir1', name: 'Ketepatan Konsep KKA sesuai Jurusan', weight: 30, description: 'Penguasaan konsep komputasional/algoritma/data/AI yang diterapkan pada peran tugas kejuruan.' },
      { id: 'ir2', name: 'Kualitas & Kelengkapan Tagihan Bukti Karya', weight: 35, description: 'Kejelasan tabel, diagram, poster, naskah, atau kalkulasi yang diunggah secara mandiri.' },
      { id: 'ir3', name: 'Akurasi Analisis & Kerapian Sajian', weight: 20, description: 'Bebas dari kesalahan logika dasar, angka valid, dan penggunaan tata bahasa baku yang baik.' },
      { id: 'ir4', name: 'Kemandirian & Ketepatan Waktu', weight: 15, description: 'Mengunggah kontribusi tepat waktu sebelum tenggat tanpa bergantung penuh pada teman tim.' }
    ],

    // Rubrik Penilaian Terpisah: Kelompok (produk gabungan & refleksi)
    group_rubric: [
      { id: 'gr1', name: 'Integrasi Sinergis Antar-Jurusan', weight: 35, description: 'Keterpaduan solusi di mana kontribusi DKV, TKP, DPIB, TOI, TITL, TAV, TSM, dan TKR saling melengkapi.' },
      { id: 'gr2', name: 'Kelayakan & Relevansi Solusi Sekolah', weight: 30, description: 'Solusi dapat diterapkan nyata di sekolah menggunakan sumber daya yang ada tanpa beban biaya mahal.' },
      { id: 'gr3', name: 'Kedalaman Refleksi Tim & Etika KKA', weight: 20, description: 'Kesadaran tim atas pentingnya teknologi ramah lingkungan, etika data, dan pembelajaran bermakna.' },
      { id: 'gr4', name: 'Kekompakan & Pembagian Peran Berkeadilan', weight: 15, description: 'Semua anggota tim berkontribusi aktif dan saling menghargai disiplin keilmuan kejuruan rekan.' }
    ]
  },

  // ==========================================================================
  // PROYEK 2: SISTEM MITIGASI K3 & TANGGAP DARURAT BENGKEL/STUDIO TERPADU
  // ==========================================================================
  {
    project_id: 'cmp-02',
    title: 'Sistem Informasi Mitigasi Keselamatan Kerja (K3) & Jalur Evakuasi Cerdas Bengkel/Studio SMK',
    problem_statement: 'Area bengkel mesin, instalasi listrik, dan studio komputer memiliki potensi bahaya spesifik (sengatan arus, kebakaran, cairan licin, paparan bising). Diperlukan sistem digital terpadu lintas kejuruan untuk memetakan risiko, menyusun prosedur darurat berbasis algoritma, dan mengedukasi warga sekolah.',
    theme: 'Keselamatan & Kesehatan Kerja (K3 Lingkungan Sekolah)',
    learning_objectives: [
      'Menganalisis matriks risiko keselamatan kerja menggunakan dekomposisi masalah.',
      'Merancang diagram alir prosedur tanggap darurat evakuasi bertingkat.',
      'Mengembangkan media informasi visual dan audio yang mudah dipahami saat situasi panik.',
      'Mengkaji kepatuhan prosedur keselamatan virtual tanpa memicu bahaya fisik.'
    ],
    target_majors: ['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR'],
    target_classes: [
      'cls-dkv-1', 'cls-tkp-1', 'cls-dpib-1', 'cls-toi-1',
      'cls-titl-1', 'cls-tav-1', 'cls-tsm-1', 'cls-tkr-1'
    ],
    created_by: 'usr-guru-02',
    teacher_name: 'Dela Chaerani, M.Si.',
    created_at: '2026-10-12T09:00:00Z',
    start_at: '2026-10-20T07:00:00Z',
    due_at: '2026-11-25T23:59:00Z',
    status: 'published',
    team_size_max: 8,
    is_template: true,
    guidelines: 'Gunakan simulasi virtual dan data sekunder aman. Dilarang melakukan uji coba kontak listrik atau api nyata tanpa instruksi dan pengawasan langsung dari guru.',
    role_definitions: [
      {
        major_code: 'DKV',
        major_name: 'Desain Komunikasi Visual',
        role_title: 'Desainer Signage & Infografis K3 Standar ISO',
        role_description: 'Merancang rambu keselamatan K3 (Waspada, Bahaya, Jalur Evakuasi) menggunakan standar simbol internasional dan warna kontras tinggi.',
        deliverables: ['Set rambu visual K3 resolusi tinggi', 'Tabel standarisasi kode warna rambu'],
        computational_concept: 'Abstraksi simbol piktogram dan pengolahan citra grafis.',
        suggested_tools: ['Lab DKV Studio', 'Vector Designer'],
        sample_guidance: 'Pastikan rambu mudah dipahami dalam 3 detik pertama.'
      },
      {
        major_code: 'DPIB',
        major_name: 'Desain Pemodelan & Informasi Bangunan',
        role_title: 'Pembuat Denah Evakuasi & Titik Kumpul (Assembly Point)',
        role_description: 'Menggambar denah lantai bengkel dengan visualisasi rute terpendek evakuasi (Shortest Path) menuju titik kumpul aman.',
        deliverables: ['Denah peta jalur evakuasi berlabel rute hijau', 'Kalkulasi jarak maksimal evakuasi'],
        computational_concept: 'Graf rute terpendek dan optimasi jarak aman.',
        suggested_tools: ['CAD 2D Viewer', 'Path Planner'],
        sample_guidance: 'Jalur evakuasi tidak boleh melewati area penyimpanan bahan bakar.'
      },
      {
        major_code: 'TOI',
        major_name: 'Teknik Otomasi Industri',
        role_title: 'Perancang Sistem Interlock & Tombol Darurat (E-Stop)',
        role_description: 'Merancang diagram alir logika interlock pengaman mesin di mana mesin otomatis mati seketika jika sensor penutup pengaman terbuka.',
        deliverables: ['Flowchart logika interlock dan E-Stop', 'Diagram urutan sinyal alarm bahaya'],
        computational_concept: 'Logika state-machine dan proteksi fail-safe.',
        suggested_tools: ['Flowchart Studio', 'Tabel Logika'],
        sample_guidance: 'Sistem fail-safe harus selalu mengarah ke kondisi mati (safe state).'
      },
      {
        major_code: 'TITL',
        major_name: 'Teknik Instalasi Tenaga Listrik',
        role_title: 'Analis Proteksi ELCB & Kebocoran Arus Listrik',
        role_description: 'Menghitung sensitivitas ELCB (30mA untuk proteksi manusia) dan tabel mitigasi bahaya sentuh langsung kabel telanjang.',
        deliverables: ['Tabel kalkulasi batas arus aman dan waktu pemutusan ELCB', 'Prosedur isolasi daya darurat (Lockout-Tagout)'],
        computational_concept: 'Pemodelan matematis ambang batas (thresholding) dan dekomposisi bahaya listrik.',
        suggested_tools: ['Kalkulator Proteksi Listrik', 'Lembar Kerja K3'],
        sample_guidance: 'Arus di atas 50mA dapat menyebabkan fibrilasi jantung, proteksi harus memutus dalam <0.1 detik.'
      },
      {
        major_code: 'TAV',
        major_name: 'Teknik Audio Video',
        role_title: 'Pemrogram Sistem Sirene Audio Berfrekuensi Kritis',
        role_description: 'Merancang pola bunyi sirene darurat (dua nada frekuensi selang-seling 800Hz - 1000Hz) yang mampu menembus kebisingan mesin bengkel.',
        deliverables: ['Spesifikasi frekuensi sinyal sirene', 'Naskah panduan suara pemandu evakuasi'],
        computational_concept: 'Frekuensi gelombang suara dan masking noise filter.',
        suggested_tools: ['Audio Signal Analyzer', 'Script Pad'],
        sample_guidance: 'Frekuensi 1 kHz paling peka ditangkap oleh pendengaran manusia.'
      },
      {
        major_code: 'TKP',
        major_name: 'Teknik Konstruksi & Perumahan',
        role_title: 'Auditor Ketahanan Lantai & Pintu Darurat Kebakaran',
        role_description: 'Menyusun checklist pemeriksaan pintu darurat membuka ke arah luar (panic bar) dan material lantai anti-slip pada area basah.',
        deliverables: ['Tabel checklist inspeksi fisik gedung', 'Algoritma perawatan berkala alat pemadam APAR'],
        computational_concept: 'Algoritma inspeksi terjadwal dan verifikasi kepatuhan regulasi.',
        suggested_tools: ['Checklist Inspector KKA'],
        sample_guidance: 'Pintu darurat tidak boleh terkunci dari dalam saat jam operasional bengkel.'
      },
      {
        major_code: 'TSM',
        major_name: 'Teknik Sepeda Motor',
        role_title: 'SOP Penanganan Limbah Oli & Bahan Bakar Berbahaya',
        role_description: 'Menyusun diagram alir penanganan tumpahan oli bengkel sepeda motor agar tidak mencemari saluran pembuangan air sekolah.',
        deliverables: ['Flowchart penanganan tumpahan B3', 'Daftar alat pelindung diri (APD) mekanik'],
        computational_concept: 'Prosedur sekuensial bersyarat dan mitigasi dampak lingkungan.',
        suggested_tools: ['Flowchart Maker'],
        sample_guidance: 'Gunakan serbuk gergaji/pasir untuk menyerap tumpahan oli sebelum dibersihkan.'
      },
      {
        major_code: 'TKR',
        major_name: 'Teknik Kendaraan Ringan',
        role_title: 'Prosedur Keamanan Dongkrak & Penyangga Mobil (Jack Stand)',
        role_description: 'Merancang pohon keputusan pemeriksaan kestabilan kendaraan saat diangkat dongkrak hidrolik sebelum mekanik masuk ke kolong mobil.',
        deliverables: ['Pohon keputusan verifikasi 3 titik tumpu aman', 'Aturan keselamatan kerja lifting equipment'],
        computational_concept: 'Pohon keputusan (Decision Tree) dan validasi kondisi mutlak.',
        suggested_tools: ['Decision Tree Studio'],
        sample_guidance: 'Dilarang keras masuk ke kolong mobil yang hanya ditopang dongkrak tanpa jack stand pengunci.'
      }
    ],
    individual_rubric: [
      { id: 'ir1', name: 'Ketepatan Konsep K3 & Komputasi', weight: 35, description: 'Kesesuaian penerapan algoritma dan dekomposisi pada mitigasi risiko kerja.' },
      { id: 'ir2', name: 'Kelayakan Prosedur Keselamatan', weight: 35, description: 'Tagihan dokumen terperinci dan dapat diterapkan langsung di bengkel/studio.' },
      { id: 'ir3', name: 'Kerapian Dokumen & Etika Kerja', weight: 30, description: 'Format rapi, bahasa terstruktur, dan komitmen keselamatan tinggi.' }
    ],
    group_rubric: [
      { id: 'gr1', name: 'Keterpaduan Sistem Evakuasi Terpadu', weight: 40, description: 'Sinergi denah DPIB, rambu DKV, sirene TAV, dan interlock TOI/TITL.' },
      { id: 'gr2', name: 'Simulasi Keamanan & Kelayakan', weight: 35, description: 'Kejelasan alur penanganan darurat dari deteksi awal hingga evakuasi tuntas.' },
      { id: 'gr3', name: 'Refleksi Tanggung Jawab Sosial', weight: 25, description: 'Tingkat kepedulian bersama terhadap keselamatan seluruh warga sekolah.' }
    ]
  }
];

export const INITIAL_CROSS_MAJOR_TEAMS: CrossMajorTeam[] = [
  {
    team_id: 'cmt-01',
    project_id: 'cmp-01',
    project_title: 'Rancang Bangun Kampanye Hemat Energi & Otomasi Efisiensi Berkelanjutan di Lingkungan Sekolah',
    team_name: 'Tim Kolaborasi Adiwiyata Cerdas 10',
    leader_student_id: 'usr-siswa-01',
    leader_name: 'Dela Citra Lestari (DKV)',
    created_at: '2026-10-15T09:00:00Z',
    updated_at: '2026-10-17T14:30:00Z',
    members: [
      {
        student_id: 'usr-siswa-01',
        student_name: 'Dela Citra Lestari',
        class_id: 'cls-dkv-1',
        major_code: 'DKV',
        assigned_role_title: 'Desainer Poster & Media Kampanye Digital',
        contribution_status: 'Terkirim',
        contribution_text: 'Telah merancang 2 set poster infografis digital "Matikan Lampu Saat Terang, Cabut Colokan Saat Pulang". Menggunakan palet Slate 900 (#0F172A) dan Amber 400 (#FBBF24) dengan rasio kontras 14.2:1 yang memenuhi standar WCAG AAA. Poster siap dipasang pada mading digital koridor sekolah.',
        submitted_at: '2026-10-16T10:15:00Z',
        individual_score: 96,
        individual_rubric_scores: { ir1: 29, ir2: 34, ir3: 19, ir4: 14 },
        individual_feedback: 'Karya poster sangat tajam, hierarki tipografi mudah dipahami, dan bukti uji kontras WCAG sangat lengkap!',
        individual_graded_at: '2026-10-17T11:00:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-02',
        student_name: 'Farhan Prakoso',
        class_id: 'cls-tkp-1',
        major_code: 'TKP',
        assigned_role_title: 'Analis Kebutuhan & Perbaikan Fisik Ruang',
        contribution_status: 'Terkirim',
        contribution_text: 'Hasil audit bengkel teknik 8m x 12m: Bukaan jendela saat ini seluas 8.4 m2 (8.7% luas lantai). Untuk mencapai sirkulasi udara alami minimal 15% (14.4 m2), diusulkan penambahan jalusi ventilasi atas seluas 6 m2 pada dinding utara yang tidak terpapar sinar matahari langsung.',
        submitted_at: '2026-10-16T11:30:00Z',
        individual_score: 92,
        individual_rubric_scores: { ir1: 28, ir2: 32, ir3: 18, ir4: 14 },
        individual_feedback: 'Analisis dekomposisi luas bukaan ventilasi sangat tepat dan aplikatif bagi bengkel sekolah.',
        individual_graded_at: '2026-10-17T11:05:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-03',
        student_name: 'Nadia Arisanti',
        class_id: 'cls-dpib-1',
        major_code: 'DPIB',
        assigned_role_title: 'Pengelola Data Ruang & Visualisasi CAD/BIM',
        contribution_status: 'Terkirim',
        contribution_text: 'Menyusun pemodelan denah zonasi panas matahari. Sisi barat gedung menerima radiasi radiatif tertinggi pada pukul 13.00 - 15.30 WIB. Direkomendasikan pemasangan kisi-kisi penangkal surya (sun shading) vertikal bersudut 45 derajat dan penempatan sensor cahaya 3 meter dari jendela.',
        submitted_at: '2026-10-16T13:00:00Z',
        individual_score: 94,
        individual_rubric_scores: { ir1: 28, ir2: 33, ir3: 19, ir4: 14 },
        individual_feedback: 'Data spasial dan pemetaan lintasan matahari sangat akurat dan terintegrasi dengan rekomendasi TKP.',
        individual_graded_at: '2026-10-17T11:10:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-04',
        student_name: 'Rizki Kurniawan',
        class_id: 'cls-toi-1',
        major_code: 'TOI',
        assigned_role_title: 'Pemrogram Logika Kontrol & Otomatisasi',
        contribution_status: 'Terkirim',
        contribution_text: 'Merancang diagram alir otomasi lampu: IF (Sensor Gerak PIR == 1) AND (Sensor Cahaya LDR < 300 Lux) THEN Nyalakan Lampu. ELSE IF (PIR == 0 selama > 300 detik) THEN Matikan Lampu. Logika ini mencegah lampu terus menyala saat kelas ditinggalkan istirahat.',
        submitted_at: '2026-10-16T14:40:00Z',
        individual_score: 95,
        individual_rubric_scores: { ir1: 29, ir2: 33, ir3: 19, ir4: 14 },
        individual_feedback: 'Flowchart logika otomasi sangat runtut, parameter delay 5 menit sangat realistis untuk mencegah flicker relay.',
        individual_graded_at: '2026-10-17T11:15:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-05',
        student_name: 'Hendra Saputra',
        class_id: 'cls-titl-1',
        major_code: 'TITL',
        assigned_role_title: 'Pengolah Data Telemetri Konsumsi Energi Listrik',
        contribution_status: 'Terkirim',
        contribution_text: 'Menganalisis dataset 14 hari: Total pemakaian listrik 3 gedung mencapai 6.840 kWh. Terdeteksi konsumsi standby malam hari rata-rata 35 kWh/malam (sekitar Rp 50.000/malam). Melalui penerapan otomasi TOI dan kebiasaan mematikan dispenser, sekolah dapat menghemat Rp 1.500.000/bulan.',
        submitted_at: '2026-10-16T15:20:00Z',
        individual_score: 97,
        individual_rubric_scores: { ir1: 30, ir2: 34, ir3: 19, ir4: 14 },
        individual_feedback: 'Kalkulasi data numerik telemetri sangat tajam! Konversi ke penghematan biaya riil rupiah sangat bermakna bagi manajemen sekolah.',
        individual_graded_at: '2026-10-17T11:20:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-06',
        student_name: 'Kevin Pratama',
        class_id: 'cls-tav-1',
        major_code: 'TAV',
        assigned_role_title: 'Konseptor Media Audio-Visual & Edukasi Suara',
        contribution_status: 'Terkirim',
        contribution_text: 'Menyusun naskah audio bel sekolah hemat energi berdurasi 45 detik dengan nada jingle ceria. Menggunakan frekuensi sampling 44.1 kHz dengan kompresi dinamis agar pesan terdengar bersih tanpa distorsi di speaker koridor saat jam istirahat dimulai.',
        submitted_at: '2026-10-16T16:00:00Z',
        individual_score: 90,
        individual_rubric_scores: { ir1: 27, ir2: 32, ir3: 18, ir4: 13 },
        individual_feedback: 'Naskah audio persuasif dan pertimbangan akustik lorong sekolah dianalisis dengan baik.',
        individual_graded_at: '2026-10-17T11:25:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-07',
        student_name: 'Rio Aditya',
        class_id: 'cls-tsm-1',
        major_code: 'TSM',
        assigned_role_title: 'Analis Perawatan & Efisiensi Motor Operasional',
        contribution_status: 'Terkirim',
        contribution_text: 'Menyusun SOP perawatan 4 sepeda motor dinas sekolah: pembersihan filter udara setiap 2.000 km dan pengecekan sensor O2 injeksi. Dari simulasi, motor dengan busi terawat menghemat 0.4 liter bensin per 100 km, mengurangi emisi karbon CO2 sebesar 960 gram/minggu.',
        submitted_at: '2026-10-16T16:30:00Z',
        individual_score: 93,
        individual_rubric_scores: { ir1: 28, ir2: 33, ir3: 18, ir4: 14 },
        individual_feedback: 'Pohon keputusan pengecekan sistem injeksi sangat aplikatif dan mendukung pengurangan emisi karbon sekolah.',
        individual_graded_at: '2026-10-17T11:30:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      },
      {
        student_id: 'usr-siswa-08',
        student_name: 'Bagus Wicaksono',
        class_id: 'cls-tkr-1',
        major_code: 'TKR',
        assigned_role_title: 'Analis Data Telemetri Kendaraan Roda Empat',
        contribution_status: 'Terkirim',
        contribution_text: 'Menganalisis data OBD-II mobil dinas sekolah: RPM ideal pada jalan arteri adalah 1.800 - 2.200 RPM. Mengurangi kebiasaan memanaskan mobil melebihi 3 menit saat pagi menghemat 150 ml bensin setiap hari keberangkatan dinas guru.',
        submitted_at: '2026-10-16T17:00:00Z',
        individual_score: 93,
        individual_rubric_scores: { ir1: 28, ir2: 32, ir3: 19, ir4: 14 },
        individual_feedback: 'Analisis telemetri OBD-II dan rekomendasi eco-driving sangat konkret dan terukur.',
        individual_graded_at: '2026-10-17T11:35:00Z',
        individual_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
      }
    ],
    group_deliverable: {
      final_product_title: 'Laporan Terpadu Blueprint Kampanye & Otomasi Hemat Energi SMK Negeri 2026',
      final_product_summary: 'Sintesis terintegrasi karya kolaboratif 8 jurusan SMK: Tim menggabungkan data audit konsumsi listrik TITL, denah zonasi panas matahari DPIB, kalkulasi sirkulasi udara TKP, diagram alir otomasi kontrol TOI, poster kampanye aksesibel DKV, jingle audio TAV, serta SOP operasional kendaraan hemat bahan bakar TSM & TKR. Proyek ini membuktikan bahwa penghematan energi tidak memerlukan biaya mahal jika didukung data yang akurat dan algoritma yang tepat.',
      integrated_solution_url: 'https://drive.google.com/file/d/blueprint-hemat-energi-smk-2026',
      team_reflection: 'Melalui proyek lintas jurusan ini, kami menyadari bahwa masalah nyata di dunia kerja tidak dapat diselesaikan oleh satu jurusan saja. Siswa DKV belajar membaca data teknis listrik, siswa teknik listrik belajar memvisualisasikan data, dan siswa otomotif memahami kontribusi emisi terhadap lingkungan. Berpikir komputasional menjadi jembatan bahasa bersama bagi kami berdelapan.',
      kka_concepts_applied: 'Dekomposisi sistem gedung, Pengenalan pola konsumsi energi mingguan, Abstraksi data spasial dan sensor, Algoritma percabangan otomasi kontrol, dan Etika teknologi inklusif.',
      submitted_at: '2026-10-17T09:30:00Z',
      status: 'Sudah Dinilai'
    },
    group_score: 95,
    group_rubric_scores: {
      gr1: 34,
      gr2: 29,
      gr3: 19,
      gr4: 13
    },
    group_feedback: 'Luar biasa! Kolaborasi lintas jurusan ini adalah contoh teladan Kurikulum Merdeka yang sejati. Seluruh temuan dari 8 jurusan saling menyatu menjadi solusi sekolah yang sangat konkret dan menginspirasi.',
    group_graded_at: '2026-10-17T14:30:00Z',
    group_graded_by: 'Budi Rahayu, S.Kom., M.Kom.'
  }
];
