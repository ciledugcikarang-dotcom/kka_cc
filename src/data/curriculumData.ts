import { ModuleItem, LKPDItem, Assignment, QuestionItem } from '../types';

export const COMPREHENSIVE_MODULES: ModuleItem[] = [
  // ==========================================
  // MODUL 1: BERPIKIR KOMPUTASIONAL
  // ==========================================
  {
    module_id: 'mod-01',
    sequence: 1,
    title: 'Modul 1: Berpikir Komputasional',
    description: 'Menerapkan penyelesaian masalah kompleks dalam kehidupan sehari-hari dan kejuruan melalui 4 pilar berpikir komputasional, analisis akar masalah 5 Whys, pemodelan rute graf berbobot, serta 4 siklus integrasi kecerdasan artifisial.',
    iconName: 'Cpu',
    color: 'from-blue-600 to-indigo-700',
    curriculumVerificationNote: 'Diselaraskan dengan Capaian Pembelajaran (CP) Fase E Kurikulum Merdeka Kemendikdasmen 2025. Catatan: Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) disesuaikan dengan KOSP satuan pendidikan.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membedakan masalah sederhana dan masalah kompleks serta menguraikannya dengan teknik dekomposisi',
        condition: 'diberikan studi kasus riil lingkungan sekolah atau kejuruan',
        degree: 'dengan minimal 3 sub-komponen logis dan runtut',
        text: 'Peserta didik mampu menguraikan masalah kompleks lingkungan sekolah/bengkel/kantor menjadi minimal 3 sub-masalah melalui teknik dekomposisi.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menemukan akar penyebab masalah menggunakan metode 5 Whys',
        condition: 'diberikan data observasi lapangan',
        degree: 'hingga mencapai level tata kelola/SOP prosedural',
        text: 'Peserta didik mampu menelusuri akar masalah dengan metode 5 Whys secara kritis hingga menemukan faktor kebijakan atau SOP.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu memodelkan jaringan jalan menjadi graf berbobot dan menentukan rute optimal',
        condition: 'menggunakan simulator Lab Berpikir Komputasional',
        degree: 'berdasarkan kalkulasi bobot waktu dan jarak terkecil',
        text: 'Peserta didik mampu memodelkan rute perjalanan menjadi representasi graf dan menentukan rute tercepat menggunakan prinsip algoritma pencarian.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu merumuskan 4 siklus integrasi KA (Persepsi, Representasi Data, Penalaran, Pembelajaran)',
        condition: 'dalam pemecahan masalah kejuruan',
        degree: 'secara tepat dan aplikatif',
        text: 'Peserta didik mampu merancang skema integrasi 4 siklus KA dalam memecahkan masalah kontekstual di bidang keahliannya.'
      }
    ],
    learning_objectives: [
      'Menjelaskan esensi berpikir komputasional sebagai metode berpikir terstruktur (bukan sekadar koding).',
      'Menerapkan 4 pilar: Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.',
      'Melakukan analisis penelusuran akar masalah menggunakan instrumen 5 Whys.',
      'Memodelkan dan memecahkan masalah optimasi rute menggunakan representasi graf (node, edge, weight).',
      'Memahami 4 siklus kecerdasan artifisial: Perception, Data Representation, Reasoning, dan Learning.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang belum mencapai KKTP pada identifikasi 4 pilar, berikan latihan terpandu memecah aktivitas harian (contoh: mencuci pakaian atau menyalakan sepeda motor) ke dalam tabel 4 kolom (Dekomposisi, Pola, Abstraksi, Algoritma).',
    enrichmentGuide: 'Bagi siswa yang telah mencapai ketuntasan, tantang untuk memodelkan rute pengantaran paket logistik atau kelistrikan bengkel otomotif dengan graf yang memiliki lebih dari 7 simpul dan kondisi cuaca bervariasi.',
    reflectionPrompts: [
      'Apa perbedaan mendasar antara cara berpikir reaktif (menebak-nebak) dengan cara berpikir komputasional saat menghadapi alat/mesin yang rusak?',
      'Bagian pilar mana (Dekomposisi, Pola, Abstraksi, Algoritma) yang paling sering kamu gunakan dalam kehidupan sehari-hari?',
      'Bagaimana metode 5 Whys membantumu menghindari saling menyalahkan saat bekerja dalam kelompok proyek?'
    ],
    vocabulary: [
      {
        term: 'Berpikir Komputasional (Computational Thinking)',
        definition: 'Kecakapan berpikir dalam menyelesaikan masalah kompleks dengan cara memformulasikan masalah dan solusinya ke dalam bentuk yang dapat dijalankan secara efektif oleh manusia maupun komputer.',
        contextExample: 'Mekanik otomotif mendiagnosis kerusakan sistem injeksi secara runtut mulai dari kelistrikan hingga suplai bensin.'
      },
      {
        term: 'Dekomposisi (Decomposition)',
        definition: 'Kemampuan memecah masalah besar, rumit, atau sistem yang kompleks menjadi bagian-bagian yang lebih kecil, terpisah, dan lebih mudah ditangani.',
        contextExample: 'Mengurai pembuatan video promosi DKV menjadi: riset naskah, storyboard, shooting, dan editing.'
      },
      {
        term: 'Pengenalan Pola (Pattern Recognition)',
        definition: 'Kemampuan mengenali kesamaan, tren, atau karakteristik berulang di antara beberapa masalah atau data untuk mempermudah prediksi.',
        contextExample: 'Akuntan mengenali pola pengeluaran operasional yang selalu melonjak setiap akhir bulan.'
      },
      {
        term: 'Abstraksi (Abstraction)',
        definition: 'Proses menyaring dan memilah informasi dengan hanya memfokuskan perhatian pada hal-hal esensial dan mengabaikan detail-detail yang tidak relevan dengan tujuan pemecahan masalah.',
        contextExample: 'Peta rute bus TransJakarta hanya menampilkan titik halte penting tanpa menggambarkan lekukan gang sempit.'
      },
      {
        term: 'Algoritma (Algorithm)',
        definition: 'Rangkaian instruksi atau langkah-langkah logis, berurutan, terstruktur, dan tidak ambigu untuk menyelesaikan suatu masalah atau mencapai tujuan tertentu.',
        contextExample: 'SOP langkah-langkah pengelasan logam di bengkel mesin mulai dari K3 sampai uji kekuatan sambungan.'
      },
      {
        term: '5 Whys Method',
        definition: 'Teknik tanya-jawab mendalam dengan mengulang pertanyaan "Mengapa/Kenapa" sebanyak 5 kali untuk mengikis asumsi superfisial dan menemukan akar penyebab utama (root cause) dari suatu kegagalan.',
        contextExample: 'Menelusuri penyebab printer kantor sering macet hingga ditemukan akar masalah tidak adanya anggaran penggantian pita tinta berkala.'
      },
      {
        term: 'Pemodelan Graf (Graph Modeling)',
        definition: 'Representasi matematis dari sekumpulan objek di mana objek dinyatakan sebagai simpul (node/vertex) dan keterhubungan antar objek dinyatakan sebagai sisi/ruas (edge), seringkali disertai nilai bobot (weight).',
        contextExample: 'Pemodelan jalur distribusi kurir antardaerah dengan bobot berupa durasi waktu tempuh.'
      },
      {
        term: '4 Siklus AI (Perception, Representation, Reasoning, Learning)',
        definition: 'Arsitektur pemrosesan cerdas: menerima masukan lingkungan (Persepsi), mengorganisasikan data ke memori (Representasi), mengambil keputusan logis (Penalaran), dan memperbarui bobot model berdasarkan pengalaman baru (Pembelajaran).',
        contextExample: 'Robot vacuum cleaner mendeteksi debu lewat sensor optik, membuat peta ruangan, merencanakan rute pembersihan, dan mengingat area yang sering kotor.'
      }
    ],
    chapters: [
      {
        id: 'c1-1',
        title: 'A. Penerapan Berpikir Komputasional dalam Masalah Sehari-hari',
        description: 'Memahami apa itu masalah kompleks dan bagaimana 4 pilar mempermudah penanganan masalah yang rumit tanpa merasa kewalahan.',
        readingMinutes: 10,
        keyConcepts: ['Masalah Sederhana vs Kompleks', 'Dekomposisi Masalah', 'Pola Berulang', 'Abstraksi Informasi', 'Algoritma Bertahap'],
        dailyAnalogy: 'Bayangkan kamarmu berantakan total dengan pakaian, buku, dan kabel berserakan. Jika kamu melihatnya sekaligus, kamu akan merasa stres (masalah kompleks). Namun jika kamu melakukan Dekomposisi (bereskan pakaian dulu, lalu buku, lalu kabel), Pengenalan Pola (semua buku pelajaran disusun di rak atas, pakaian kotor masuk keranjang), Abstraksi (abaikan debu kecil dulu sampai barang rapi), dan Algoritma (siapkan kardus → kumpulkan baju → lipat rapi → masukkan lemari), kamar bersih dalam 20 menit!',
        coreContent: `### 1. Masalah Sederhana vs. Masalah Kompleks
Dalam kehidupan sehari-hari dan dunia kerja industri, kita menemui dua kelompok masalah:
- **Masalah Sederhana:** Masalah yang penyebabnya tunggal, jelas, solusinya langsung diketahui, dan tidak melibatkan banyak variabel. Contoh: lampu kamar tidur mati karena bohlam putus; solusinya cukup mengganti bohlam baru.
- **Masalah Kompleks:** Masalah yang memiliki banyak variabel yang saling terkait, penyebabnya seringkali tersembunyi di bawah permukaan, dan dampaknya meluas ke berbagai aspek. Contoh: antrean panjang di kantin sekolah atau bengkel servis yang membuat pelanggan komplain dan siswa terlambat masuk kelas. Masalah ini tidak bisa diselesaikan hanya dengan "menyuruh kasir bekerja lebih cepat", melainkan butuh penataan ulang alur kerja.

### 2. Empat Pilar Berpikir Komputasional
Berpikir Komputasional (BK) bukanlah kemampuan menghafal kode pemrograman, melainkan cara berpikir terstruktur menggunakan 4 pilar:

#### Pilar 1: Dekomposisi (Memecah Masalah)
Dekomposisi adalah langkah awal yang sangat krusial. Ketika menghadapi pekerjaan besar, pecahlah menjadi bagian-bagian kecil yang dapat dikelola (manageable sub-tasks). 
- *Contoh di Sekolah:* Ingin membuat pameran karya kejuruan (Expo). Dekomposisi memecahnya menjadi: Divisi Acara, Divisi Logistik/Stan, Divisi Publikasi/Dokumentasi, Divisi Keuangan/Sponsorship, dan Divisi Konsumsi.

#### Pilar 2: Pengenalan Pola (Menemukan Keteraturan)
Setelah masalah dipecah, perhatikan apakah ada kemiripan atau tren yang pernah terjadi sebelumnya. Pola membantu kita tidak perlu menciptakan solusi dari nol jika pola tersebut sudah terbukti berhasil.
- *Contoh di Sekolah:* Mengamati bahwa keterlambatan siswa selalu melonjak di hari Senin pukul 06.45 karena upacara bendera dan cuaca gerimis. Dengan mengenali pola ini, guru piket dan satpam dapat bersiap lebih awal.

#### Pilar 3: Abstraksi (Fokus pada Hal yang Relevan)
Abstraksi berarti berani membuang informasi yang tidak penting dan memusatkan energi hanya pada data penentu keberhasilan. Jika semua detail dipikirkan bersamaan, pikiran kita akan macet (*cognitive overload*).
- *Contoh di Sekolah:* Dalam denah evakuasi gempa bumi sekolah, arsitek tidak perlu menggambar warna cat dinding atau merek meja, melainkan hanya pintu darurat, tangga utama, dan titik kumpul (assembly point).

#### Pilar 4: Perancangan Algoritma (Menyusun Langkah Bertahap)
Algoritma adalah panduan langkah kerja bertahap yang urut, terukur, dan tidak menimbulkan multitafsir (ambigu). Langkah algoritma yang baik dapat dijalankan oleh siapa saja dengan hasil yang konsisten.
- *Contoh di Sekolah:* Resep memasak kue atau SOP pengoperasian mesin bubut di bengkel teknik.`,
        practicalTips: [
          'Mulailah selalu dari Dekomposisi sebelum menyusun solusi apa pun.',
          'Jangan takut mengabaikan detail yang tidak esensial; itulah kekuatan Abstraksi.',
          'Pastikan setiap kalimat dalam algoritma diawali dengan kata kerja imperatif yang jelas (misal: "Tekan tombol daya", bukan "Daya dinyalakan").'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'Pengembangan Perangkat Lunak & Gim (PPLG / RPL)',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Dekomposisi Arsitektur Aplikasi E-Commerce Sekolah',
            scenario: 'Siswa diminta membuat aplikasi marketplace mini untuk memajang produk kreatif karya siswa SMK.',
            implementation: 'Siswa memecah aplikasi menjadi 4 modul: Modul Autentikasi Pengguna, Modul Katalog Produk, Modul Keranjang Belanja, dan Modul Checkout Pembayaran. Pola autentikasi menggunakan token JWT yang sudah standar industri.',
            impactNote: 'Pengembangan aplikasi menjadi terbagi rata antar anggota tim tanpa tumpang-tindih kode program.'
          },
          {
            majorId: 'tkj',
            majorName: 'Teknik Komputer & Jaringan (TJKT / TKJ)',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Troubleshooting Jaringan Internet Lab Komputer yang Lambat',
            scenario: 'Internet di 40 PC Lab Komputer tiba-tiba mengalami ping tinggi (RTO) saat jam ujian asesmen online.',
            implementation: 'Dekomposisi titik masalah: Router Utama → Switch Hub → Kabel UTP → Konfigurasi DNS → Utilisasi Bandwidth per IP. Pengenalan pola: Traffic tinggi terpusat pada IP ruang guru yang sedang mengunduh berkas video besar. Abstraksi: Mengabaikan tipe sistem operasi PC klien. Algoritma: Terapkan Queue Bandwidth Limiter pada router Mikrotik.',
            impactNote: 'Koneksi ujian asesmen langsung stabil dalam 5 menit tanpa perlu merestart seluruh perangkat.'
          },
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual (DKV)',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Perancangan Storyboard Animasi Iklan Layanan Masyarakat',
            scenario: 'Membuat animasi 60 detik tentang kampanye antinarkoba dan anti-bullying di kalangan remaja.',
            implementation: 'Dekomposisi: Babak 1 (Pengenalan masalah/hook 10 detik), Babak 2 (Konflik dan dampak 30 detik), Babak 3 (Solusi dan Call to Action 20 detik). Abstraksi: Fokus pada bahasa tubuh karakter utama dan kontras warna, abaikan detail latar belakang yang tidak disorot kamera.',
            impactNote: 'Pesan moral tersampaikan secara kuat dengan alur emosional penonton yang terjaga runtut.'
          },
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga (AKL)',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Rekonsiliasi Bank dan Penelusuran Selisih Saldo Kas',
            scenario: 'Terdapat selisih Rp2.450.000 antara buku kas kasir toko sekolah dan rekening koran bank mitra.',
            implementation: 'Dekomposisi: Kelompokkan mutasi menjadi Penerimaan Kas, Pengeluaran Cek, Biaya Administrasi Bank, dan Jasa Giro. Pola: Selisih angka 2.450.000 sering kali merupakan transaksi setoran dalam perjalanan (deposit in transit). Abstraksi: Abaikan nomor seri uang tunai, fokus pada nomor bukti kuitansi dan tanggal cap bank.',
            impactNote: 'Selisih pembukuan ditemukan dalam 15 menit dan laporan keuangan siap diaudit secara akuntabel.'
          },
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif (TO / TBSM / TKRO)',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Diagnosis Sepeda Motor Matic Mogok Tidak Mau Distarter',
            scenario: 'Sepeda motor matic konsumen mogok mendadak di jalan saat hujan lebat.',
            implementation: 'Dekomposisi: Periksa 3 pilar pembakaran mesin: Pengapian (Busi/Koil), Kompresi (Ruang bakar), dan Bahan Bakar (Injektor/Pompa bensin). Pola: Saat hujan, air sering masuk ke cop busi yang karetnya getas. Algoritma: 1) Cek indikator spidometer (aki aktif/tidak); 2) Dengarkan bunyi dengung fuel pump; 3) Lepas cop busi dan cek percikan api ke bodi mesin.',
            impactNote: 'Kerusakan teratasi dengan presisi tanpa membongkar bagian mesin yang sebenarnya sehat.'
          },
          {
            majorId: 'kuliner',
            majorName: 'Kuliner / Tata Boga',
            fieldCategory: 'Pariwisata',
            caseTitle: 'Manajemen Alur Kerja Dapur Komersial untuk Jamuan 200 Porsi',
            scenario: 'Pesanan katering pernikahan 200 porsi harus siap tepat pukul 11.00 WIB dalam kondisi hangat.',
            implementation: 'Dekomposisi mise en place: Stasiun pemotongan sayur, stasiun bumbu marinasi, stasiun penggorengan, dan stasiun plating. Algoritma urutan masak: Masak rendang daging terlebih dahulu (karena butuh 3 jam), sementara tumis sayur dimasak 30 menit sebelum penyajian agar tetap hijau segar.',
            impactNote: 'Makanan tersaji hangat, higienis, dan tidak ada pesanan yang terlambat ke meja tamu.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Bedah Masalah Harian dengan 4 Pilar',
          prompt: 'Pilihlah salah satu masalah di sekitarmu (misal: sering lupa jadwal piket, memori smartphone cepat penuh, atau rantai sepeda sering kendur). Buatlah tabel analisis 4 pilar di buku kerjamu.',
          steps: [
            'Tuliskan judul masalah secara spesifik di baris atas.',
            'Lakukan Dekomposisi: Tuliskan minimal 3 faktor kecil penyebab masalah.',
            'Temukan Pengenalan Pola: Kapan masalah ini paling sering terjadi?',
            'Terapkan Abstraksi: Tuliskan 2 hal yang tidak perlu kamu hiraukan dalam mencari solusi.',
            'Susun Algoritma: Tuliskan langkah aksi penyelesaian berurutan 1, 2, 3, dan 4.'
          ],
          expectedOutput: 'Catatan ringkas satu halaman berisi tabel 4 pilar yang terisi lengkap dan realistis.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok (PjBL): Observasi Alur Pelayanan Publik Sekolah',
          prompt: 'Bentuk kelompok beranggotakan 4 orang. Amati salah satu fasilitas sekolah (Koperasi Siswa, Perpustakaan, atau Bengkel Praktik). Analisis alur pelayanannya yang masih dirasa lambat.',
          roles: [
            'Ketua Kelompok: Memimpin jalannya observasi dan wawancara petugas.',
            'Notulis: Mencatat durasi waktu setiap tahapan pelayanan.',
            'Analis Dekomposisi: Mengurai alur pelayanan menjadi diagram alir.',
            'Presenter: Menjelaskan usulan algoritma baru di depan kelas.'
          ],
          expectedOutput: 'Paparan lembar kerja observasi disertai usulan SOP baru yang memangkas waktu tunggu minimal 30%.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa membagi masalah rumit menjadi bagian-bagian kecil (Dekomposisi) membuat kita lebih cepat menemukan solusi?',
            answerKey: 'Karena otak manusia memiliki keterbatasan dalam memproses banyak variabel sekaligus (working memory overload). Dengan mengisolasi satu bagian masalah, kita dapat fokus menyelesaikannya secara tuntas tanpa terganggu kerumitan bagian lain.',
            explanation: 'Dekomposisi mengurangi kompleksitas kognitif dan memungkinkan pembagian tugas secara paralel dalam tim.'
          },
          {
            question: 'Sebutkan contoh pilar Abstraksi saat seseorang menggunakan aplikasi peta digital (seperti Google Maps)!',
            answerKey: 'Aplikasi peta digital menampilkan nama jalan, warna kepadatan lalu lintas, dan jarak tempuh, namun mengabaikan warna atap rumah warga, jenis pohon di tepi jalan, dan nomor tiang listrik.',
            explanation: 'Abstraksi menyaring hanya data yang relevan dengan navigasi pengemudi, sehingga peta mudah dibaca dengan cepat.'
          }
        ]
      },
      {
        id: 'c1-2',
        title: 'B. Analisis Masalah dengan Metode 5 Whys',
        description: 'Menelusuri akar masalah dengan menanyakan "Kenapa" secara mendalam untuk menemukan penyebab sistemik dan SOP.',
        readingMinutes: 8,
        keyConcepts: ['Metode 5 Whys', 'Gejala vs Akar Masalah', 'Penyebab Prosedural', 'Budaya Tanpa Menyalahkan (No Blame Culture)'],
        dailyAnalogy: 'Jika kamu demam dan kepalamu pusing, meminum obat parasetamol hanya menghilangkan rasa pusing sementara (mengobati gejala). Jika kamu menanyakan "Kenapa demam?" → "Karena radang tenggorokan" → "Kenapa radang?" → "Karena minum es kotor" → "Kenapa minum es kotor?" → "Karena lupa membawa botol air minum dari rumah". Akar masalahnya adalah kebiasaan lupa membawa tumbler, bukan kepala yang sakit!',
        coreContent: `### 1. Apa itu Metode 5 Whys?
Metode 5 Whys pertama kali dikembangkan oleh Sakichi Toyoda dan diadopsi dalam Toyota Production System. Prinsip dasarnya sangat sederhana: ketika terjadi kegagalan atau cacat produk, **tanyakanlah "Mengapa" sebanyak lima kali berturut-turut** hingga kamu menyentuh akar penyebab masalah (*root cause*).

### 2. Membedakan Gejala (Symptom) dengan Akar Masalah (Root Cause)
- **Gejala:** Apa yang terlihat dan dirasakan di permukaan. Gejala seringkali memancing kita untuk mengambil tindakan kilat (*quick fix*) yang hanya bersifat sementara.
- **Akar Masalah:** Kondisi paling dasar yang jika diperbaiki, akan mencegah masalah tersebut terulang kembali selamanya. Akar masalah hampir selalu bermuara pada:
  1. Ketiadaan Standar Operasional Prosedur (SOP).
  2. SOP ada tetapi tidak disosialisasikan dengan baik.
  3. Ketiadaan jadwal pemeliharaan (maintenance) preventif.
  4. Alat pelindung atau sarana kerja yang kurang memadai.

### 3. Panduan Menerapkan 5 Whys yang Benar
1. **Fokus pada Proses, Bukan Pribadi:** Jangan jadikan 5 Whys sebagai ajang mencari kambing hitam (*"Kenapa telat? Karena si Budi malas"* adalah contoh salah). Tanyakan pada sistem kerja (*"Kenapa siswa menumpuk di gerbang? Karena pemindaian kartu barcode lambat"*).
2. **Berhenti Ketika Menyentuh Kebijakan/SOP:** Mengapa 5 kali? Angka 5 adalah panduan umum. Terkadang akar masalah ditemukan di pertanyaan ke-4 atau ke-6, yaitu saat jawaban menunjuk pada perbaikan sistem atau anggaran.`,
        practicalTips: [
          'Gunakan fakta lapangan hasil observasi, bukan asumsi atau gosip.',
          'Ujilah dengan arah sebaliknya menggunakan kata "Oleh karena itu": Jika jawaban ke-5 diperbaiki, apakah masalah di nomor 1 akan hilang?'
        ],
        majorApplications: [
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Analisis 5 Whys Baut Roda Mobil Konsumen Patah Saat Melaju',
            scenario: 'Sebuah mobil pelanggan mengalami patah baut roda 2 hari setelah keluar dari bengkel servis.',
            implementation: '1. Kenapa baut patah? Karena baut menerima torsi pengencangan berlebih.\n2. Kenapa torsi berlebih? Karena mekanik mengencangkan baut hanya mengandalkan perasaan dengan kunci roda manual.\n3. Kenapa tidak pakai kunci momen (torque wrench)? Karena kunci momen bengkel sedang rusak dan belum diganti.\n4. Kenapa belum diganti? Karena belum ada prosedur pelaporan alat rusak berkala ke kepala bengkel.\n5. Kenapa belum ada prosedur? Karena bengkel belum menerapkan SOP Kalibrasi & Manajemen Alat K3 industri.\nSolusi Akar Masalah: Penerapan SOP inspeksi alat harian dan pengadaan kunci momen torsi terkalibrasi.',
            impactNote: 'Mencegah potensi kecelakaan fatal di jalan raya dan melindungi reputasi bengkel sekolah.'
          },
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Analisis 5 Whys Keterlambatan Pembayaran Pajak PPh 21 Perusahaan',
            scenario: 'Perusahaan tempat magang siswa dikenakan sanksi denda administrasi pajak karena terlambat setor.',
            implementation: '1. Kenapa terlambat setor? Karena berkas rekap gaji pegawai terlambat diverifikasi.\n2. Kenapa terlambat verifikasi? Karena data lembur pegawai dari divisi operasional baru diserahkan tanggal 14.\n3. Kenapa divisi operasional telat? Karena absensi lembur masih dihitung manual lewat lembaran kertas.\n4. Kenapa masih pakai kertas? Karena mesin fingerprint belum terintegrasi ke aplikasi payroll keuangan.\n5. Kenapa belum terintegrasi? Karena bagian IT dan Akuntansi belum pernah menyusun modul integrasi data API bersama.\nSolusi: Membangun integrasi otomatis absensi digital ke sistem penggajian.',
            impactNote: 'Menghilangkan denda keterlambatan pajak 100% dan menghemat waktu kerja lembur kasir.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Latihan 5 Whys pada Kasus Diri Sendiri',
          prompt: 'Tuliskan satu kebiasaan buruk yang ingin kamu ubah (misal: sering begadang atau baterai HP sering drop di sekolah). Buatlah diagram 5 Whys bertingkat sampai menemukan faktor kebiasaan atau manajemen waktu dasar.',
          steps: [
            'Tulis Masalah Utama: "..."',
            'Kenapa 1: ...',
            'Kenapa 2: ...',
            'Kenapa 3: ...',
            'Kenapa 4: ...',
            'Kenapa 5 (Akar Masalah): ...',
            'Tindakan Korektif Nyata: ...'
          ],
          expectedOutput: 'Bagan 5 Whys lengkap dengan satu rencana aksi nyata yang bisa dimulai besok pagi.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Studi Kasus Kerusakan Alat di Bengkel/Lab Sekolah',
          prompt: 'Wawancarai teknisi atau toolman di bengkel/lab jurusanmu mengenai alat atau komputer yang paling sering rusak. Susun analisis 5 Whys bersama kelompok dan rekomendasikan poster SOP pencegahan.',
          expectedOutput: 'Laporan 5 Whys dan draf infografis SOP pemeliharaan alat yang siap dipasang di dinding bengkel.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa risiko terbesar jika kita hanya mengobati gejala tanpa menuntaskan akar masalah?',
            answerKey: 'Masalah yang sama akan terus berulang secara berkala, menghabiskan biaya, waktu, tenaga, dan pada akhirnya menimbulkan kerugian material yang jauh lebih besar.',
            explanation: 'Mengganti sekring yang putus tanpa memeriksa korsleting kabel di baliknya akan menyebabkan sekring baru putus kembali seketika.'
          }
        ]
      },
      {
        id: 'c1-3',
        title: 'C. Simulasi Penentuan Rute Tercepat Rumah ke Sekolah',
        description: 'Memodelkan jaringan jalan sebagai graf berbobot dan membandingkan alternatif rute menggunakan logika pencarian efisien.',
        readingMinutes: 10,
        keyConcepts: ['Pemodelan Graf', 'Node (Simpul Titik)', 'Edge (Ruas Jalan)', 'Weight (Bobot Waktu & Jarak)', 'Algoritma Dijkstra & A*'],
        dailyAnalogy: 'Saat membuka aplikasi peta digital di ponsel pintar, peta sebenarnya tidak melihat jalan seperti mata manusia. Komputer melihat persimpangan sebagai Titik (Node), jalan penghubung sebagai Garis (Edge), dan angka kemacetan/jarak sebagai Bobot (Weight). Komputer kemudian menjumlahkan angka bobot terkecil untuk menunjukkan jalur tercepat berwarna hijau.',
        coreContent: `### 1. Dasar Pemodelan Graf
Graf adalah struktur data matematika yang sangat ampuh untuk memodelkan jaringan di dunia nyata:
- **Node / Vertex (Simpul):** Titik lokasi fisik atau persimpangan. Contoh: Rumah (R), Simpang Lima (A), Lampu Merah Pasar (B), Sekolah (S).
- **Edge (Sisi / Ruas):** Jalur penghubung antara dua simpul. Bisa berupa jalan satu arah (*directed*) atau dua arah (*undirected*).
- **Weight (Bobot):** Nilai biaya yang harus dikeluarkan untuk melewati ruas tersebut. Bobot bisa berupa jarak fisik (kilometer), waktu tempuh (menit), atau tarif tol (rupiah).

### 2. Mengapa Jarak Fisik Terpendek Belum Tentu Tercepat?
Banyak orang salah mengira bahwa rute terpendek selalu menjadi rute terbaik. Dalam dunia nyata, terdapat faktor dinamis:
- Waktu keberangkatan (jam sibuk pagi vs siang lengang).
- Hambatan jalan (lampu lalu lintas, perlintasan kereta api, pasar tumpah).
- Kondisi cuaca (hujan lebat menyebabkan genangan air yang memperlambat laju kendaraan).

### 3. Logika Algoritma Pencarian Rute (Dijkstra dan A*)
- **Algoritma Dijkstra:** Memeriksa simpul terdekat secara bertahap dan mencatat akumulasi bobot terkecil dari titik awal hingga mencapai tujuan akhir. Algoritma ini menjamin rute optimal tetapi memeriksa banyak kemungkinan simpul.
- **Algoritma A\* (A-Star):** Menggabungkan akumulasi bobot sebenarnya dengan nilai perkiraan (*heuristic*) sisa jarak garis lurus ke tujuan, sehingga proses pencarian berjalan jauh lebih cepat.`,
        practicalTips: [
          'Saat menggambar graf, prioritaskan titik persimpangan utama daripada setiap belokan kecil.',
          'Gunakan satuan bobot yang seragam (misal: semua ruas menggunakan estimasi menit, bukan dicampur antara kilometer dan menit).'
        ],
        majorApplications: [
          {
            majorId: 'tkj',
            majorName: 'Teknik Komputer & Jaringan',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Routing Protokol OSPF (Open Shortest Path First) Jaringan Sekolah',
            scenario: 'Menghubungkan 5 gedung sekolah dengan kabel serat optik (fiber optic) yang memiliki bandwidth bervariasi.',
            implementation: 'Router menggunakan algoritma Dijkstra untuk menghitung jalur data tercepat. Jika jalur kabel Gedung A-B putus, router otomatis membelokkan paket data melalui rute cadangan Gedung A-C-B.',
            impactNote: 'Koneksi internet antar gedung sekolah tidak pernah terputus (*zero downtime*).'
          },
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis (MPLB)',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Optimasi Rute Kurir Distribusi Surat Undangan Rapat Yayasan',
            scenario: 'Kurir kantor harus mengantarkan 12 berkas penting ke dinas-dinas terkait di kota sebelum jam 12.00.',
            implementation: 'Membuat graf perjalanan dengan simpul kantor dinas dan bobot berupa waktu tempuh serta jam buka loket. Kurir memilih rute siklus yang menghemat bahan bakar bensin kendaraan operasional.',
            impactNote: 'Seluruh berkas terkirim tepat waktu dan anggaran BBM kantor hemat 25% per bulan.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Eksperimen Rute di Lab 1',
          prompt: 'Buka menu **LAB KKA > Lab 1: Berpikir Komputasional**. Lakukan pengujian rute dari Rumah (R) ke Sekolah (S) dengan 2 skenario berbeda: Skenario 1 (Pagi Cerah) dan Skenario 2 (Pagi Hujan Lebat Jam Sibuk).',
          expectedOutput: 'Catat rute yang direkomendasikan sistem pada kedua skenario dan simpan hasil simulasi ke portofolio belajarmu.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Pemetaan Peta Graf Jalur Evakuasi Sekolah',
          prompt: 'Bersama kelompokmu, petakan denah lantai 2 sekolahmu menjadi graf berbobot. Simpul adalah ruang kelas dan tangga, bobot adalah lebar lorong dan perkiraan waktu evakuasi saat darurat.',
          expectedOutput: 'Poster denah graf jalur evakuasi tercepat menuju lapangan terbuka sekolah.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa yang dimaksud dengan "Bobot Dinamis" pada pemodelan graf lalu lintas?',
            answerKey: 'Bobot dinamis adalah nilai biaya pada ruas jalan yang nilainya dapat berubah sewaktu-waktu tergantung kondisi real-time, seperti kemacetan jam sibuk, cuaca buruk, atau adanya perbaikan jalan.',
            explanation: 'Hal inilah yang membuat aplikasi peta dapat mengalihkan rute pengemudi secara otomatis di tengah perjalanan.'
          }
        ]
      },
      {
        id: 'c1-4',
        title: 'D. Integrasi Kecerdasan Artifisial dalam Berpikir Komputasional',
        description: 'Memahami 4 siklus kerja KA: Perception (sensor/API), Data Representation (graf berbobot), Reasoning (algoritma pencarian), dan Learning (prediksi pola historis).',
        readingMinutes: 10,
        keyConcepts: ['Perception (Sensorik & Input)', 'Data Representation (Memori Sistem)', 'Reasoning (Pengambilan Keputusan)', 'Learning (Adaptasi Model)'],
        dailyAnalogy: 'Saat seorang barista membuat kopi: 1) Matanya melihat warna biji kopi dan telinganya mendengar bunyi grinder (Perception); 2) Otaknya mengingat takaran gramasi air dan kopi (Representation); 3) Ia memutuskan menaikkan suhu air karena bijinya berkarakter dark roast (Reasoning); 4) Setelah mencicipi rasa kopi yang sedikit terlalu pahit, ia mencatat agar seduhan berikutnya grindernya dibuat lebih kasar (Learning). Begitulah AI bekerja!',
        coreContent: `### Empat Siklus Integrasi Kecerdasan Artifisial
Agar sebuah sistem komputasional dapat disebut sebagai "Kecerdasan Artifisial" (Artificial Intelligence), sistem tersebut harus memiliki kemampuan meniru 4 siklus kognitif manusia:

\`\`\`
  [ 1. PERCEPTION ] ───────> [ 2. DATA REPRESENTATION ]
         │                                 │
         ▼                                 ▼
  [ 4. LEARNING   ] <─────── [ 3. REASONING           ]
\`\`\`

1. **Perception (Persepsi / Sensorik):**
   Sistem mengumpulkan data mentah dari dunia nyata. Pada manusia, ini adalah panca indra (mata, telinga, kulit). Pada sistem AI, persepsi dilakukan menggunakan kamera web, sensor suhu inframerah, mikrofon, atau panggilan Application Programming Interface (API) cuaca dan satelit.

2. **Data Representation (Representasi Data):**
   Data mentah yang ditangkap sensor tidak berguna jika tidak diubah ke format yang dipahami algoritma. Sistem mengubah citra menjadi matriks piksel angka, kalimat suara menjadi gelombang frekuensi audio, atau peta jalan menjadi struktur data graf berbobot di memori komputer.

3. **Reasoning (Penalaran / Logika Keputusan):**
   Sistem mengevaluasi representasi data menggunakan aturan (*rules*), probabilitas matematika, atau pohon keputusan (*decision tree*) untuk menentukan tindakan terbaik yang harus diambil saat itu. Contoh: memilih rute alternatif yang lebih lengang.

4. **Learning (Pembelajaran / Adaptasi):**
   Inilah pembeda utama AI dengan kalkulator biasa. AI tidak berhenti setelah mengambil keputusan; ia membandingkan hasil keputusannya dengan realitas lapangan (*feedback*). Jika prediksinya meleset, sistem memperbarui bobot algoritma sehingga di masa depan prediksinya semakin akurat.`,
        practicalTips: [
          'Ingat singkatan P-R-R-L untuk menghafal 4 siklus AI: Perception, Representation, Reasoning, Learning.',
          'Sebuah program yang hanya memiliki IF-THEN tanpa kemampuan belajar dari data baru disebut Rule-Based System, belum mencapai siklus Learning penuh.'
        ],
        majorApplications: [
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Sistem Pengereman Darurat Otomatis (Autonomous Emergency Braking - AEB)',
            scenario: 'Mobil modern mendeteksi pejalan kaki menyeberang mendadak di malam hari dan mengerem sendiri.',
            implementation: '1. Perception: Kamera radar dan sensor LiDAR mendeteksi siluet manusia.\n2. Representation: Objek dipetakan sebagai vektor jarak 15 meter dengan kecepatan mendekat 40 km/jam.\n3. Reasoning: Algoritma menghitung jarak berhenti aman tidak mencukupi jika mengandalkan reaksi manusia → Aktifkan rem hidrolik ABS.\n4. Learning: Model neural network merekam kondisi pencahayaan malam untuk melatih akurasi deteksi pejalan kaki berikutnya.',
            impactNote: 'Menyelamatkan nyawa dan menurunkan angka fatalitas tabrakan hingga 80%.'
          },
          {
            majorId: 'kuliner',
            majorName: 'Kuliner / Tata Boga',
            fieldCategory: 'Pariwisata',
            caseTitle: 'AI Smart Refrigerator untuk Memprediksi Kedaluwarsa Bahan Makanan',
            scenario: 'Restoran hotel sering membuang bahan baku susu dan daging karena lupa tanggal kedaluwarsa.',
            implementation: 'Perception: Kamera internal kulkas memindai barcode dan kesegaran sayur. Representation: Daftar bahan tersimpan di tabel database beserta tanggal masuk. Reasoning: AI membuat rekomendasi menu spesial harian berbahan dasar stok yang mendekati kedaluwarsa. Learning: AI mempelajari kebiasaan konsumsi tamu untuk memesan bahan baku dengan jumlah pas.',
            impactNote: 'Memangkas limbah makanan (food waste) restoran hingga 45% per bulan.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Rancang Skema 4 Siklus AI untuk Jurusanmu',
          prompt: 'Pilihlah satu masalah di bidang keahlian jurusanmu. Tuliskan dalam 4 kotak alur kerja bagaimana AI dapat diterapkan melalui siklus Perception, Data Representation, Reasoning, dan Learning.',
          expectedOutput: 'Bagan 4 siklus AI orisinal disertai penjelasan sensor dan bentuk data yang diproses.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Proyek Ide Solusi KA Terintegrasi',
          prompt: 'Diskusikan dalam kelompok: Rancang satu ide produk cerdas untuk sekolah (misal: Tempat Sampah Cerdas yang memilah botol plastik dan daun otomatis, atau Absensi Wajah Cerdas di gerbang). Rincikan 4 siklusnya dan presentasikan di depan kelas.',
          expectedOutput: 'Slide presentasi atau poster konseptual produk cerdas sekolah.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa perbedaan utama antara pilar Penalaran (Reasoning) dan Pembelajaran (Learning) dalam AI?',
            answerKey: 'Penalaran adalah proses mengeksekusi keputusan berdasarkan aturan dan data yang ada saat ini, sedangkan Pembelajaran adalah proses memperbarui model algoritma berdasarkan hasil atau kesalahan masa lalu agar keputusan di masa depan semakin presisi.',
            explanation: 'Tanpa tahap Learning, sebuah mesin akan terus mengulangi kesalahan yang sama jika menghadapi situasi di luar aturan dasarnya.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 2: ALGORITMA DAN PEMROGRAMAN LANJUT
  // ==========================================
  {
    module_id: 'mod-02',
    sequence: 2,
    title: 'Modul 2: Algoritma dan Pemrograman Dasar',
    description: 'Menguasai representasi algoritma standar (flowchart, pseudocode, tabel IPO), struktur kontrol (array, nested if, nested loop), komparasi algoritma pencarian & pengurutan, dasar Machine Learning (Regresi, K-Means, Naive Bayes), serta sintaks teks dan debugging.',
    iconName: 'Code2',
    color: 'from-cyan-600 to-blue-700',
    curriculumVerificationNote: 'Diselaraskan dengan Capaian Pembelajaran Elemen Algoritma dan Pemrograman Fase E. Sesuai buku teks resmi KKA Kemendikdasmen 2025.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membuat diagram alir (flowchart) standar ANSI/ISO dengan simbol terminator, proses, I/O, dan decision yang tepat',
        condition: 'diberikan spesifikasi logika kelulusan atau perhitungan tarif',
        degree: 'tanpa kesalahan arah panah dan percabangan logika',
        text: 'Peserta didik mampu merancang diagram alir (flowchart) standar yang merepresentasikan alur keputusan bertingkat secara tepat.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu mengimplementasikan struktur data array 0-indexed dan nested if pada kasus nyata',
        condition: 'dalam bentuk pseudocode atau kode Python sederhana',
        degree: 'dengan hasil kalkulasi data yang benar',
        text: 'Peserta didik mampu menggunakan array dan percabangan nested if untuk menyelesaikan permasalahan seleksi data.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membandingkan efisiensi Linear Search vs Binary Search serta Selection Sort vs Insertion Sort',
        condition: 'diberikan deret data angka di simulator Lab 2',
        degree: 'berdasarkan jumlah operasi perbandingan dan pertukaran elemen',
        text: 'Peserta didik mampu menganalisis perbandingan performa algoritma pengurutan dan pencarian data.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu mendiagnosis dan memperbaiki 3 jenis kesalahan program (Syntax, Logic, Runtime Error)',
        condition: 'pada studi kasus kode Python di Lab 3 Debugging',
        degree: 'hingga program berjalan normal dan mengeluarkan hasil yang valid',
        text: 'Peserta didik mampu melakukan teknik debugging secara mandiri untuk mengatasi pesan galat pemrograman.'
      }
    ],
    learning_objectives: [
      'Membuat representasi algoritma menggunakan naratif, pseudocode, tabel IPO, dan flowchart standar.',
      'Menerapkan struktur data Array, logika percabangan bertingkat (Nested If), dan perulangan bertingkat (Nested Loop).',
      'Menganalisis perbandingan performa Sequential Search vs Binary Search dan Selection Sort vs Insertion Sort.',
      'Memahami konsep sistem berbasis aturan (Rule-Based) serta model dasar Machine Learning (Regresi, K-Means, Naive Bayes).',
      'Mengenal sintaks dasar pemrograman berbasis teks (Python, C, Java) dan menguasai teknik debugging galat.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang kesulitan memahami flowchart logika bertingkat, berikan panduan membuat diagram alir dari aktivitas membuat akun media sosial (Cek input password >= 8 karakter? Ya/Tidak).',
    enrichmentGuide: 'Bagi siswa yang telah mahir, arahkan untuk mencoba menulis kode Python pencarian biner (Binary Search) dan mengukur waktu eksekusi pada 1.000 data acak.',
    reflectionPrompts: [
      'Mengapa komputer selalu memulai penghitungan indeks array dari angka 0, bukan 1?',
      'Di antara syntax error, runtime error, dan logic error, manakah yang paling sulit dideteksi? Berikan alasannya!',
      'Bagaimana algoritma pengurutan data membantu pekerjaan di bidang keahlian jurusanmu sehari-hari?'
    ],
    vocabulary: [
      {
        term: 'Flowchart (Diagram Alir)',
        definition: 'Representasi grafis dari langkah-langkah penyelesaian masalah menggunakan sekumpulan simbol standar (oval, jajar genjang, persegi panjang, belah ketupat) yang dihubungkan dengan garis berpanah.',
        contextExample: 'Flowchart SOP peminjaman alat praktik di ruang teknisi sekolah.'
      },
      {
        term: 'Tabel IPO (Input-Process-Output)',
        definition: 'Tabel pemetaan yang membagi instruksi menjadi tiga kolom jelas: data masukan yang dibutuhkan, proses komputasi yang dijalankan, dan keluaran yang diharapkan.',
        contextExample: 'IPO menghitung luas lingkaran: Input = jari-jari r; Process = 3.14 * r * r; Output = luas.'
      },
      {
        term: 'Array (Larik Data)',
        definition: 'Struktur data yang dapat menyimpan kumpulan nilai dengan tipe data yang sama di bawah satu nama variabel, di mana setiap nilai diakses menggunakan nomor indeks (mulai dari 0).',
        contextExample: 'Variabel nilaiSiswa = [85, 90, 78, 92]; nilai pertama diakses dengan nilaiSiswa[0].'
      },
      {
        term: 'Nested If (Percabangan Bertingkat)',
        definition: 'Kondisi percabangan di mana sebuah blok pemeriksaan kondisi IF berada di dalam blok pemeriksaan kondisi IF lainnya.',
        contextExample: 'Jika nilai ujian >= 75, periksa lagi apakah kehadiran >= 80% untuk menentukan kelulusan sempurna atau bersyarat.'
      },
      {
        term: 'Binary Search (Pencarian Biner)',
        definition: 'Algoritma pencarian efisien khusus untuk data yang sudah terurut, dengan cara membelah dua data secara berulang hingga target ditemukan.',
        contextExample: 'Mencari kata di kamus tebal dengan langsung membuka halaman tengah.'
      },
      {
        term: 'Selection Sort',
        definition: 'Algoritma pengurutan yang mencari elemen dengan nilai terkecil pada deret yang belum terurut, lalu menukarnya dengan elemen di posisi paling depan.',
        contextExample: 'Menyusun barisan siswa dari yang paling pendek ke yang paling tinggi secara bergiliran.'
      },
      {
        term: 'Naive Bayes Classifier',
        definition: 'Algoritma klasifikasi berbasis Teorema Probabilitas Bayes yang mengasumsikan bahwa setiap atribut fitur bekerja secara independen tanpa saling mempengaruhi.',
        contextExample: 'Filter email spam yang menghitung probabilitas kata "diskon", "hadiah", dan "klik di sini".'
      },
      {
        term: 'Debugging',
        definition: 'Seni dan teknik menemukan, menganalisis akar penyebab, serta memperbaiki galat (bug) yang ada pada program komputer.',
        contextExample: 'Membaca pesan SyntaxError: unexpected EOF while parsing pada compiler Python.'
      }
    ],
    chapters: [
      {
        id: 'c2-1',
        title: 'A. Algoritma Dasar & Implementasi Flowchart Standar',
        description: 'Menyusun alur keputusan, simbol flowchart standar ISO/ANSI, aturan tata letak, dan konversi algoritma naratif ke pseudocode.',
        readingMinutes: 10,
        keyConcepts: ['Terminator (Mulai/Selesai)', 'Input/Output (Data Masukan/Keluaran)', 'Process (Perhitungan/Penugasan)', 'Decision (Pemeriksaan Logika Belah Ketupat)', 'Garis Alir (Flowline)'],
        dailyAnalogy: 'Flowchart sama persis seperti rambu-rambu petunjuk arah di jalan tol. Tanda mulai (gerbang masuk tol), rambu petunjuk jalan cabang (belah ketupat keputusan: jika mau ke Bandung belok kiri, jika mau ke Cirebon lurus terus), dan pintu keluar gerbang tol (terminator selesai). Rambu yang jelas mencegah pengemudi tersesat!',
        coreContent: `### 1. Representasi Algoritma
Sebelum menulis kode pemrograman dalam bahasa Python atau C, seorang programmer wajib merancang alur algoritmanya terlebih dahulu. Tiga bentuk representasi utama:
1. **Bahasa Naratif:** Ditulis dengan bahasa manusia sehari-hari. Mudah dibaca orang awam tetapi rentan menimbulkan salah tafsir jika kalimatnya terlalu panjang.
2. **Pseudocode (Kode Semu):** Ditulis mirip sintaks pemrograman (menggunakan kata kunci: READ, WRITE, IF-THEN-ELSE, WHILE) tetapi tanpa aturan sintaks yang kaku.
3. **Flowchart (Diagram Alir):** Menggunakan simbol grafis standar dunia (ANSI/ISO) sehingga alur logika dapat dibaca secara visual dalam hitungan detik.

### 2. Simbol-Simbol Standar Flowchart
- **Oval / Kapsul (Terminator):** Menandai titik awal (Mulai / Start) dan titik akhir (Selesai / End) dari suatu diagram alir.
- **Jajar Genjang (Input/Output):** Menandakan proses membaca data masukan dari pengguna (misal: "Input Nilai Siswa") atau menampilkan data hasil (misal: "Cetak Status Kelulusan").
- **Persegi Panjang (Process):** Menandakan proses perhitungan aritmatika, kalkulasi rumus, atau penugasan nilai variabel (misal: "Total = Nilai1 + Nilai2").
- **Belah Ketupat (Decision):** Menandakan pemeriksaan kondisi logika yang selalu menghasilkan dua cabang keluar: **YA (TRUE)** atau **TIDAK (FALSE)**. Contoh: "Apakah Nilai >= 75?".
- **Lingkaran Kecil (Connector):** Menghubungkan alur diagram pada halaman yang sama jika garis alir terlalu panjang agar tidak saling bersilangan.

### 3. Aturan Emas Membuat Flowchart
1. Alur diagram selalu bergerak dari **atas ke bawah** atau dari **kiri ke kanan**.
2. Simbol Decision (Belah Ketupat) wajib memiliki minimal dua cabang jalur keluar yang masing-masing diberi label jelas: "Ya" dan "Tidak".
3. Setiap flowchart wajib memiliki tepat satu simbol Mulai dan minimal satu simbol Selesai.`,
        practicalTips: [
          'Hindari membuat garis alir yang saling bersilangan tanpa konektor.',
          'Gunakan kata tanya ringkas di dalam simbol Decision (contoh: "Nilai >= 75?").'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Flowchart Verifikasi Pengajuan Klaim Kas Kecil (Petty Cash)',
            scenario: 'Memastikan staf kantor tidak mencairkan dana kas kecil tanpa nota resmi.',
            implementation: 'Flowchart: Mulai → Input Nota Pembelian → Decision "Apakah Nota Asli & Berstempel?" → Jika Tidak: Tolak Pencairan → Jika Ya: Decision "Apakah Nominal <= Rp1.000.000?" → Jika Ya: Cairkan Dana & Catat Jurnal Kas Kecil → Jika Tidak: Alihkan ke Kas Besar → Selesai.',
            impactNote: 'Mencegah kecurangan (*fraud*) dan menjaga tertib administrasi keuangan kasir.'
          },
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Flowchart Sistem Validasi Pendaftaran Akun Pengguna Baru',
            scenario: 'Memeriksa apakah password memenuhi standar keamanan minimal 8 karakter dan mengandung angka.',
            implementation: 'Mulai → Input Email & Password → Decision "Password >= 8 Karakter?" → Jika Tidak: Tampilkan Error → Jika Ya: Decision "Ada Simbol Khusus?" → Jika Ya: Hash SHA-256 & Simpan ke Database → Selesai.',
            impactNote: 'Aplikasi terbebas dari serangan peretasan akun bersandi lemah.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Rancang Flowchart di Lab 2',
          prompt: 'Buka menu **LAB KKA > Lab 2: Algoritma, Flowchart & ML**. Gunakan simulator Flowchart untuk menguji logika nilai kelulusan siswa dengan batas KKM 75. Perhatikan bagaimana jalur panah bergerak saat kamu memasukkan angka 80 vs 65.',
          expectedOutput: 'Tangkapan layar atau draf flowchart logika kelulusan yang terverifikasi berhasil.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Standardisasi SOP Bengkel/Lab Menjadi Flowchart',
          prompt: 'Pilihlah salah satu SOP di sekolahmu (misal: SOP Peminjaman Alat Praktik Bengkel atau SOP Pengembalian Buku Perpustakaan). Rancang flowchart-nya bersama kelompok di kertas karton.',
          expectedOutput: 'Poster flowchart SOP resmi yang rapi dan siap ditempel di bengkel jurusan.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa simbol belah ketupat (Decision) selalu memiliki lebih dari satu garis panah keluar?',
            answerKey: 'Karena simbol belah ketupat berfungsi mengevaluasi kondisi logika yang memiliki kemungkinan bercabang (misal: kondisi terpenuhi/Ya atau kondisi tidak terpenuhi/Tidak). Jalur yang diambil program bergantung pada hasil evaluasi tersebut.',
            explanation: 'Jika hanya ada satu garis keluar, maka itu bukan keputusan melainkan proses biasa (persegi panjang).'
          }
        ]
      },
      {
        id: 'c2-2',
        title: 'B. Algoritma Terstruktur: Array, Nested If & Nested Loop',
        description: 'Mendeklarasikan kumpulan data dalam array berindeks mulai dari 0, evaluasi keputusan bertingkat, dan iterasi di dalam iterasi.',
        readingMinutes: 12,
        keyConcepts: ['Array Berindeks 0', 'Panjang Array (Length)', 'Nested If (Kondisi Ganda)', 'Nested Loop (Tabel 2 Dimensi)'],
        dailyAnalogy: 'Array seperti kotak obat harian yang memiliki 7 sekat hari (Senin s.d. Minggu). Kotak pertama berlabel 0, kotak kedua berlabel 1, dan seterusnya. Daripada kamu membuat 7 toples obat terpisah (7 variabel berbeda), cukup gunakan 1 kotak obat dengan nomor sekat. Sangat praktis!',
        coreContent: `### 1. Struktur Data Array (Larik)
Bayangkan kamu harus mencatat nilai ujian 36 siswa di kelasmu. Tanpa array, kamu harus membuat 36 variabel berbeda: \`nilai1\`, \`nilai2\`, ..., \`nilai36\`. Ini sangat merepotkan.
Dengan **Array**, kamu cukup membuat satu variabel: \`nilaiSiswa = [80, 85, 90, 75, ...]\`.
- **Indeks Dimulai dari 0:** Dalam ilmu komputer, elemen pertama selalu berada di indeks ke-0 (\`nilaiSiswa[0] = 80\`). Elemen kedua di indeks ke-1 (\`nilaiSiswa[1] = 85\`).
- **Akses Cepat:** Kita dapat mengambil atau mengubah nilai siswa tertentu secara instan hanya dengan memanggil nomor indeksnya.

### 2. Logika Percabangan Bertingkat (Nested If)
Seringkali sebuah keputusan bergantung pada beberapa lapisan syarat. Inilah yang disebut **Nested If** (If di dalam If).
\`\`\`python
if nilai_ujian >= 75:
    if kehadiran >= 80:
        status = "Lulus Murni"
    else:
        status = "Lulus Bersyarat (Tugas Pengganti Absen)"
else:
    status = "Remedial"
\`\`\`
Pada contoh di atas, syarat kedua (kehadiran) hanya akan diperiksa jika siswa lolos pada syarat pertama (nilai ujian).

### 3. Perulangan Bertingkat (Nested Loop)
Nested Loop adalah perulangan yang berada di dalam perulangan lain. 
- *Contoh Nyata:* Menampilkan tabel perkalian matematika, memindai matriks baris dan kolom pada spreadsheet, atau merender piksel gambar pada layar monitor (perulangan baris Y dan kolom X).`,
        practicalTips: [
          'Ingat selalu: Indeks terakhir dari sebuah array berukuran N adalah N - 1.',
          'Gunakan indentasi (spasi tab) yang rapi pada bahasa Python agar hierarki blok Nested If tidak tertukar.'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Manipulasi Array Warna Piksel Gambar RGB',
            scenario: 'Mengubah foto berwarna menjadi hitam-putih (grayscale) menggunakan algoritma pengolahan citra.',
            implementation: 'Gambar disimpan sebagai array 2 dimensi (tinggi x lebar) di mana setiap elemen menyimpan array [R, G, B]. Algoritma menjalankan nested loop untuk membaca setiap piksel, menghitung rata-rata (R+G+B)/3, dan mengisikannya kembali ke piksel tersebut.',
            impactNote: 'Siswa memahami bahwa filter foto di Instagram/Photoshop murni dibangun menggunakan array dan loop matematika.'
          },
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Array Pembacaan Sensor Tekanan Ban (TPMS)',
            scenario: 'Mobil memiliki 4 sensor tekanan ban yang mengirimkan data psi setiap 1 detik.',
            implementation: 'Data disimpan dalam array: \`tekananBan = [32, 31, 22, 32]\` (Indeks 0: Roda Depan Kanan, 1: Depan Kiri, 2: Belakang Kanan, 3: Belakang Kiri). Loop memeriksa: Jika \`tekananBan[i] < 28\`, bunyikan alarm peringatan ban kempes pada layar dasbor.',
            impactNote: 'Pengemudi segera mengetahui roda belakang kanan kurang angin sebelum terjadi pecah ban di jalan tol.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Penulisan Logika Kelulusan Bertingkat',
          prompt: 'Tuliskan kode program atau pseudocode logika diskon toko kejuruan: Diskon 20% jika total belanja >= Rp200.000 DAN memiliki kartu anggota. Jika total >= Rp200.000 tapi tidak ada kartu anggota, diskon hanya 10%. Jika belanja di bawah Rp200.000, diskon 0%.',
          expectedOutput: 'Potongan kode Python atau pseudocode yang rapi dengan struktur if-elif-else bertingkat.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Simulasi Tabel Nilai Siswa 2 Dimensi',
          prompt: 'Buatlah tabel matriks 5 baris siswa x 3 kolom mata pelajaran (Matematika, Bahasa Indonesia, KKA). Bersama kelompokmu, hitung nilai rata-rata per mata pelajaran menggunakan logika perulangan array.',
          expectedOutput: 'Lembar kerja tabel array 2 dimensi beserta kalkulasi rata-rata per kolom.'
        },
        selfCheckQuestions: [
          {
            question: 'Jika sebuah array dideklarasikan dengan \`data = [12, 24, 36, 48, 60]\`, berapa nilai dari \`data[3]\`?',
            answerKey: 'Nilai dari data[3] adalah 48. Karena indeks dimulai dari 0: data[0]=12, data[1]=24, data[2]=36, data[3]=48.',
            explanation: 'Kesalahan paling umum pemula adalah mengira data[3] bernilai 36 karena menghitung dari angka 1.'
          }
        ]
      },
      {
        id: 'c2-3',
        title: 'C. Algoritma Pencarian & Pengurutan Data',
        description: 'Menganalisis kinerja Linear Search vs Binary Search, dan Selection Sort vs Insertion Sort beserta jumlah perbandingan elemen.',
        readingMinutes: 12,
        keyConcepts: ['Sequential / Linear Search', 'Binary Search (Data Terurut)', 'Selection Sort (Tukar Nilai Minimum)', 'Insertion Sort (Sisip Elemen)', 'Kompleksitas Perbandingan'],
        dailyAnalogy: 'Mencari nomor telepon teman di buku telepon tebal: Linear Search berarti kamu membaca dari halaman 1, baris demi baris sampai halaman 500 (sangat melelahkan). Binary Search berarti kamu langsung buka halaman tengah, lihat huruf awal nama temanmu, lalu buang separuh buku yang tidak cocok. Hanya butuh beberapa kali buka halaman!',
        coreContent: `### 1. Algoritma Pencarian Data (Searching)
- **Linear / Sequential Search:**
  Mengecek setiap elemen array satu per satu mulai dari indeks ke-0 hingga akhir.
  - *Kelebihan:* Bekerja pada deret data acak yang belum terurut.
  - *Kekurangan:* Lambat jika datanya sangat besar. Untuk 1 juta data, bisa butuh hingga 1 juta kali perbandingan!
- **Binary Search:**
  Membagi dua rentang data terurut secara berulang (*divide and conquer*).
  - *Syarat Mutlak:* Data wajib diurutkan terlebih dahulu (*sorted*).
  - *Kelebihan:* Sangat cepat. Untuk 1 juta data terurut, Binary Search hanya membutuhkan maksimal 20 kali perbandingan!

### 2. Algoritma Pengurutan Data (Sorting)
- **Selection Sort (Pilih Nilai Minimum):**
  Mencari elemen terkecil di seluruh sisa array, lalu menukarnya ke posisi awal yang belum terurut. Langkah ini diulang untuk posisi berikutnya.
  - *Karakteristik:* Jumlah pertukaran elemen (*swapping*) sedikit, tetapi jumlah perbandingannya tetap tinggi.
- **Insertion Sort (Sisip Kartu):**
  Mengambil satu elemen demi satu elemen, lalu menyisipkannya ke posisi yang tepat di antara elemen-elemen sebelumnya yang sudah terurut (mirip cara orang merapikan kartu remi di tangan).
  - *Karakteristik:* Sangat efisien jika data awalnya memang sudah hampir terurut.`,
        practicalTips: [
          'Gunakan Binary Search setiap kali datamu sudah dalam kondisi terurut.',
          'Pada data yang kecil (< 50 elemen), perbedaan kecepatan algoritma sorting hampir tidak terasa oleh mata manusia.'
        ],
        majorApplications: [
          {
            majorId: 'tkj',
            majorName: 'Teknik Komputer & Jaringan',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Pencarian Cepat Alamat MAC Address pada Tabel Switch Jaringan',
            scenario: 'Switch jaringan harus meneruskan paket data ke port yang tepat berdasarkan MAC address tujuan dalam mikrodetik.',
            implementation: 'Tabel CAM Switch menyimpan ribuan MAC address dalam kondisi terurut. Switch menerapkan pencarian berbasis biner untuk mencocokkan MAC address target dalam hitungan fraksi milidetik.',
            impactNote: 'Pengiriman paket data antar komputer di sekolah berlangsung tanpa latency (*lag*).'
          },
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Pengurutan Nomor Faktur Pajak Masukan Berdasarkan Tanggal Transaksi',
            scenario: 'Ratusan faktur pajak dari supplier datang tidak berurutan dan harus dirapikan sebelum dilaporkan ke Ditjen Pajak.',
            implementation: 'Menggunakan algoritma Insertion Sort untuk menyisipkan setiap faktur baru yang diinput kasir ke posisi kronologis tanggal yang tepat di tabel jurnal.',
            impactNote: 'Laporan pajak rapi kronologis dan mempermudah pemeriksaan fiskal.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Tracing Selection Sort di Lab 2',
          prompt: 'Buka menu **LAB KKA > Lab 2**. Masukkan array angka: \`[15, 25, 13, 5, 30, 40, 7]\`. Klik tombol "Langkah Demi Langkah (Step-by-Step)" pada Selection Sort. Catat berapa kali terjadi pertukaran elemen sampai data terurut sempurna.',
          expectedOutput: 'Catatan tabel tracing langkah putaran 1 sampai putaran terakhir.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Roleplay Simulasi Pengurutan Siswa di Lapangan',
          prompt: 'Tujuh orang siswa memegang kertas angka acak berbaris di depan kelas. Dua siswa lainnya berperan sebagai "Petunjuk Pointer" dan "Pembanding". Praktikkan gerakan Selection Sort secara nyata sesuai aba-aba algoritma.',
          expectedOutput: 'Dokumentasi foto/video simulasi gerak algoritma yang mendemonstrasikan pertukaran nilai.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa Binary Search tidak dapat dijalankan pada data yang masih acak?',
            answerKey: 'Karena Binary Search mengasumsikan bahwa jika nilai target lebih besar dari elemen tengah, maka target pasti berada di separuh kanan. Jika data belum terurut, asumsi ini gugur dan data target bisa saja tersembunyi di separuh kiri yang sudah dibuang.',
            explanation: 'Keterurutan data adalah prasyarat logika eliminasi pada algoritma pencarian biner.'
          }
        ]
      },
      {
        id: 'c2-4',
        title: 'D. Algoritma Rule-Based & Pengenalan Machine Learning',
        description: 'Membandingkan logika aturan manual dengan model pembelajaran mesin: Regresi Linear (y = a + bx), K-Means Clustering, dan Naive Bayes.',
        readingMinutes: 14,
        keyConcepts: ['Sistem Berbasis Aturan (Rule-Based)', 'Machine Learning Berbasis Data', 'Regresi Linear (Slope & Intercept)', 'K-Means Clustering (Jarak Sentroid)', 'Klasifikasi Naive Bayes'],
        dailyAnalogy: 'Program biasa seperti koki pemula yang memasak harus melihat buku resep persis: "Jika garam kurang dari 1 sendok, tambahkan". Machine Learning seperti koki legendaris: ia tidak membaca buku resep lagi, melainkan telah mencicipi ribuan mangkok sup di masa lalu, sehingga ia otomatis tahu takaran garam yang pas hanya dari mencium aromanya!',
        coreContent: `### 1. Rule-Based System vs. Machine Learning
- **Rule-Based System (Sistem Berbasis Aturan):**
  Manusia yang merumuskan aturannya (IF-THEN) secara eksplisit.
  - *Kelemahan:* Jika aturannya ada ribuan (misal: mendeteksi wajah orang dengan jutaan variasi sudut dan cahaya), manusia akan lelah menuliskan semua aturan tersebut secara manual.
- **Machine Learning (Pembelajaran Mesin):**
  Kita memberikan contoh data masukan dan hasil yang benar (*training data*), lalu komputer sendiri yang mencari pola matematis di balik data tersebut untuk menghasilkan model cerdas.

### 2. Tiga Algoritma Machine Learning Populer di Kelas X
1. **Regresi Linear (Linear Regression):**
   Digunakan untuk memprediksi angka kontinu (*kontinu numerik*). Menggunakan persamaan garis lurus:
   \`\`\`
   y = a + bx
   \`\`\`
   - *y:* Nilai target yang diprediksi (contoh: estimasi pengeluaran kas).
   - *x:* Variabel bebas pemicu (contoh: jumlah pesanan barang).
   - *b:* Kemiringan garis (*slope*); *a:* Titik potong (*intercept*).

2. **K-Means Clustering (Pengelompokan Tanpa Label):**
   Mengelompokkan sekumpulan data ke dalam sejumlah **K** kelompok berdasarkan kedekatan jarak matematis (jarak Euclidean) terhadap titik pusat (*centroid*). 
   - *Contoh:* Mengelompokkan pelanggan toko sekolah menjadi 3 segmen: Pelanggan Hemat, Pelanggan Sedang, dan Pelanggan Boros.

3. **Naive Bayes Classifier (Klasifikasi Peluang):**
   Menghitung probabilitas suatu objek masuk ke kelas tertentu berdasarkan kemunculan fitur-fiturnya. Sesuai buku teks halaman 69-70, Naive Bayes memprediksi jenis buah (Apel, Jeruk, Anggur) berdasarkan data warna dan rasa.`,
        practicalTips: [
          'Gunakan Regresi saat target prediksimu berupa angka (harga, suhu, waktu).',
          'Gunakan Klasifikasi saat target prediksimu berupa kategori/label (Lulus/Gagal, Spam/Bukan, Apel/Jeruk).'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Regresi Linear untuk Prediksi Biaya Listrik Bengkel Berdasarkan Jam Kerja',
            scenario: 'Kepala tata usaha ingin memprediksi tagihan listrik bulan depan jika jam praktik bertambah 40 jam.',
            implementation: 'Dari data historis 6 bulan lalu, dihitung nilai a (beban abonemen tetap) dan b (biaya per jam mesin menyala). Dengan rumus y = a + bx, tagihan listrik terprediksi akurat dengan toleransi error < 5%.',
            impactNote: 'Perencanaan anggaran sekolah menjadi terukur dan terhindar dari defisit operasional.'
          },
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'K-Means Clustering untuk Ekstraksi Palet Warna Dominan Desain',
            scenario: 'Mengekstrak 5 warna paling dominan dari sebuah foto karya fotografi untuk dijadikan palet identitas brand.',
            implementation: 'Setiap piksel gambar diposisikan dalam ruang koordinat warna 3D (R, G, B). Algoritma K-Means dengan K=5 mencari 5 titik sentroid yang mewakili kelompok warna terbanyak.',
            impactNote: 'Desainer mendapatkan palet warna harmonis secara otomatis dalam hitungan detik.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Uji Klasifikasi Buah Naive Bayes di Lab 2',
          prompt: 'Buka menu **LAB KKA > Lab 2**. Pada bagian Machine Learning Classifier, pilih fitur buah: Warna = Merah, Rasa = Manis. Klik tombol "Jalankan Prediksi Naive Bayes" dan perhatikan persentase peluang antara Apel, Jeruk, dan Anggur.',
          expectedOutput: 'Catat hasil probabilitas tertinggi dan cocokkan dengan data latihan tabel buku teks.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Klasterisasi Minat Ekstrakurikuler Siswa',
          prompt: 'Kumpulkan data minat olahraga (skor 1-10) dan seni (skor 1-10) dari 10 teman sekelasmu. Buat plot titik pada bidang kartesius dan kelompokkan secara visual menjadi 2 klaster K-Means (Klaster Olahragawan vs Klaster Seniman).',
          expectedOutput: 'Grafik scatter plot dua warna yang membagi 10 siswa ke dalam 2 klaster minat.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa perbedaan mendasar antara tugas Klasifikasi dan tugas Regresi dalam Machine Learning?',
            answerKey: 'Klasifikasi memprediksi label atau kategori diskret (contoh: Lulus/Tidak Lulus, Email Spam/Bukan Spam), sedangkan Regresi memprediksi nilai numerik kontinu berupa angka (contoh: memprediksi harga jual, memprediksi suhu udara, atau memprediksi omzet penjualan).',
            explanation: 'Pemilihan algoritma bergantung sepenuhnya pada bentuk variabel target yang ingin diprediksi.'
          }
        ]
      },
      {
        id: 'c2-5',
        title: 'E. Pemrograman Teks & Analisis Kesalahan (Debugging)',
        description: 'Perbandingan sintaks Python, C, Java, memahami 3 jenis bug pemrograman, dan menguasai teknik membaca pesan galat.',
        readingMinutes: 14,
        keyConcepts: ['Karakteristik Python vs C vs Java', 'Syntax Error (Typo Penulisan)', 'Runtime Error (Division by Zero, TypeError)', 'Logic Error (Hasil Keliru)', 'Teknik Print Debugging'],
        dailyAnalogy: 'Tiga jenis error program mirip kesalahan membuat kue: 1) Syntax Error seperti resep berbahasa asing yang hurufnya salah cetak hingga tidak bisa dibaca koki; 2) Runtime Error seperti oven meledak saat memanggang karena lupa menyalakan kipas pengaman; 3) Logic Error kuenya matang cantik tapi rasanya asin karena koki salah menuang garam alih-alih gula!',
        coreContent: `### 1. Karakteristik Bahasa Pemrograman Teks
Di kelas X, kita mengenal 3 bahasa pemrograman teks populer di industri:
- **Python:** Sintaks sangat bersih, menggunakan indentasi (spasi tab) alih-alih kurung kurawal, sangat populer untuk Kecerdasan Artifisial dan pengolahan data. Contoh: \`print("Halo Dunia")\`.
- **C:** Bahasa tingkat menengah yang sangat dekat dengan perangkat keras (hardware), cepat, wajib mendeklarasikan tipe data dan titik koma (;). Fondasi sistem operasi dan mikrokontroler IoT.
- **Java:** Bahasa berorientasi objek (*Object-Oriented Programming*), memiliki slogan *"Write Once, Run Anywhere"* menggunakan Java Virtual Machine (JVM). Fondasi aplikasi enterprise dan Android.

### 2. Tiga Jenis Kesalahan Program (Bugs)
1. **Syntax Error (Galat Sintaks):**
   Kesalahan tata bahasa pemrograman (salah ketik kata kunci, lupa tanda titik dua, kurung tidak berpasangan). Compiler/interpreter langsung menolak menjalankan program dan menampilkan nomor baris galat.
   - *Contoh:* \`pint("Halo")\` alih-alih \`print("Halo")\`.

2. **Runtime Error (Galat Saat Berjalan):**
   Kode program lolos kompilasi secara tata bahasa, tetapi mengalami kemacetan mendadak saat dieksekusi komputer karena operasi yang mustahil dilakukan.
   - *Contoh:* Pembagian angka dengan nol (\`ZeroDivisionError: division by zero\`) atau mencoba menjumlahkan teks dengan angka (\`TypeError: can only concatenate str to str\`).

3. **Logic Error (Galat Logika):**
   Jenis galat paling berbahaya. Program berjalan lancar tanpa pesan error sama sekali, tetapi menghasilkan keluaran yang keliru karena rumus programmer salah.
   - *Contoh:* Menghitung rata-rata dengan rumus \`rata = a + b / 2\` (karena tidak ada tanda kurung, pembagian dieksekusi lebih dulu daripada penjumlahan).

### 3. Teknik Debugging Andal: "Print Debugging"
Cara paling cepat dan efektif bagi pemula untuk menemukan bug adalah menyisipkan perintah \`print()\` pada baris-baris kritis untuk mengamati nilai variabel secara langsung saat program sedang berjalan (*tracing variable*).`,
        practicalTips: [
          'Saat muncul pesan error panjang, bacalah baris paling bawah terlebih dahulu (karena itulah jenis galat utamanya).',
          'Periksa jumlah kurung buka dan kurung tutup agar selalu seimbang.'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Debugging Script Formulir Pendaftaran Siswa Baru (PPDB)',
            scenario: 'Formulir online selalu crash saat siswa mengosongkan kolom nomor telepon rumah.',
            implementation: 'Analisis pesan: \`KeyError: "telepon_rumah"\`. Perbaikan: Menambahkan nilai default kosong atau menggunakan method \`.get("telepon_rumah", "")\` agar tidak memicu runtime error saat data opsional tidak diisi.',
            impactNote: 'Pendaftaran online berjalan lancar tanpa terhenti mendadak diakses ribuan calon siswa.'
          },
          {
            majorId: 'tkj',
            majorName: 'Teknik Komputer & Jaringan',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Debugging Script Otomasi Backup Mikrotik dengan Python Paramiko',
            scenario: 'Script otomasi backup konfigurasi router terjebak pada loop tak berujung (infinite loop).',
            implementation: 'Mendeteksi logic error: Variabel penghitung \`counter\` lupa dinaikkan di dalam blok \`while\`, sehingga kondisi \`counter < total_router\` selalu bernilai True selamanya.',
            impactNote: 'Backup konfigurasi selesai dalam 2 menit tanpa menghabiskan CPU server.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Studio Debugging di Lab 3',
          prompt: 'Buka menu **LAB KKA > Lab 3: Pemrograman & Debugging Studio**. Pilih skenario "Syntax Error Python" dan "Logic Error Menghitung Rata-rata". Analisis letak kesalahannya, perbaiki kodenya, dan tekan tombol "Jalankan & Verifikasi".',
          expectedOutput: 'Kode program yang berhasil diperbaiki hingga status berubah menjadi Hijau (Success).'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Code Review Berpasangan (Peer Review)',
          prompt: 'Tuliskan kode Python sederhana berisi 10 baris yang sengaja disisipi 2 buah bug tersembunyi. Tukarkan kode tersebut dengan pasangan teman sebangkumu untuk saling mendeteksi dan memperbaiki bug tersebut.',
          expectedOutput: 'Laporan peer-review berisi baris kode sebelum dan sesudah diperbaiki beserta penjelasannya.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa Logic Error dianggap jauh lebih berbahaya daripada Syntax Error?',
            answerKey: 'Karena Syntax Error langsung terdeteksi oleh komputer sebelum program dijalankan sehingga wajib diperbaiki seketika. Sebaliknya, Logic Error tidak memunculkan pesan kesalahan, program tampak normal, namun menghasilkan data atau transaksi keuangan yang salah tanpa disadari penggunanya.',
            explanation: 'Hal ini dapat menyebabkan kerugian fatal dalam sistem perbankan, medis, atau penerbangan.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 3: LITERASI DAN ETIKA KECERDASAN ARTIFISIAL
  // ==========================================
  {
    module_id: 'mod-03',
    sequence: 3,
    title: 'Modul 3: Literasi dan Etika Kecerdasan Artifisial',
    description: 'Mengenal mekanisme pengenalan pola citra dan suara, 5 profesi masa depan di bidang KA, standar kompetensi UNESCO 2024, dampak sosial teknologi, serta regulasi dan etika nasional (SE Menkominfo No 9/2023 & UU PDP).',
    iconName: 'ShieldAlert',
    color: 'from-amber-600 to-orange-700',
    curriculumVerificationNote: 'Diselaraskan dengan Standar Kompetensi AI UNESCO 2024 dan SE Menkominfo No. 9 Tahun 2023. Perlu diselaraskan dengan tata tertib integritas akademik sekolah.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membedakan karakteristik pengenalan pola visual (piksel, kontur) dan audio (frekuensi, tempo)',
        condition: 'diberikan eksperimen klasifikasi citra di Lab 4',
        degree: 'dengan akurasi identifikasi fitur minimal 80%',
        text: 'Peserta didik mampu menganalisis mekanisme ekstraksi fitur visual dan audio pada sistem kecerdasan artifisial.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu memetakan peran dan keterampilan 5 profesi kunci KA (Data Scientist, ML Engineer, Research Scientist, Robotics Engineer, Ethics Specialist)',
        condition: 'pada studi kasus proyek kejuruan',
        degree: 'secara tepat dan realistis',
        text: 'Peserta didik mampu memetakan spektrum karier dan kompetensi abad ke-21 di bidang kecerdasan artifisial.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menganalisis potensi bias data dan pelanggaran privasi',
        condition: 'diberikan simulasi audit dataset absensi wajah di Lab 4',
        degree: 'berdasarkan prinsip keadilan dan regulasi SE Menkominfo No. 9/2023',
        text: 'Peserta didik mampu mengaudit bias algoritma dan merumuskan langkah mitigasi etika penggunaan AI.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menyusun draf Kode Etik Siswa Pengguna AI di lingkungan sekolah',
        condition: 'dalam aktivitas kelompok kolaboratif',
        degree: 'memuat minimal 5 butir komitmen integritas akademik',
        text: 'Peserta didik mampu merumuskan panduan etis pemanfaatan AI yang mencegah plagiarisme dan melindungi data pribadi.'
      }
    ],
    learning_objectives: [
      'Menjelaskan mekanisme pengenalan pola citra (piksel, RGB, kontur) dan pola suara (amplitudo, frekuensi, timbre).',
      'Mengenal 5 profesi kunci masa depan di bidang AI beserta keterampilan yang dibutuhkan.',
      'Memahami kerangka kerja UNESCO AI Competency Framework (2024) dan pola pikir berpusat pada manusia (*Human-Centred*).',
      'Menganalisis dampak sosial AI: otomasi lapangan kerja, filter bubble, deepfake, dan bias algoritmik.',
      'Memahami pedoman Surat Edaran Menkominfo No. 9 Tahun 2023 dan menyusun Kode Etik Penggunaan AI di sekolah.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang belum memahami konsep bias algoritma, berikan analogi juri lomba memasak yang tidak menyukai makanan manis sehingga selalu memberi nilai rendah pada masakan daerah tertentu.',
    enrichmentGuide: 'Arahkan siswa membaca studi kasus implementasi UU Perlindungan Data Pribadi (UU PDP No. 27/2022) pada kebocoran data aplikasi layanan publik.',
    reflectionPrompts: [
      'Jika sebuah karya desain grafis atau tugas esai 100% dibuat oleh AI, siapakah pemilik hak cipta dan pihak yang bertanggung jawab atas isinya?',
      'Pernahkah kamu merasa media sosialmu hanya menampilkan konten dari sudut pandang yang kamu sukai saja (filter bubble)? Apa dampaknya bagi pemikiranmu?',
      'Bagaimana kamu memastikan penggunaan AI dalam tugas sekolah tidak melanggar prinsip kejujuran akademik?'
    ],
    vocabulary: [
      {
        term: 'Pengenalan Pola (Pattern Recognition)',
        definition: 'Cabang kecerdasan artifisial yang berfokus pada pengenalan keteraturan data visual atau audio melalui ekstraksi fitur matematis.',
        contextExample: 'Sistem pengenal wajah membuka kunci pintu gerbang sekolah secara otomatis.'
      },
      {
        term: 'Optical Character Recognition (OCR)',
        definition: 'Teknologi yang mengubah gambar teks (hasil pindaian kertas atau foto papan tulis) menjadi karakter teks digital yang dapat diedit.',
        contextExample: 'Memindai kuitansi fisik menjadi teks angka di aplikasi pembukuan kasir.'
      },
      {
        term: 'AI Ethics Specialist',
        definition: 'Profesi yang bertugas mengaudit algoritma dan dataset untuk memastikan teknologi AI tidak diskriminatif, menghormati privasi, transparan, dan adil.',
        contextExample: 'Memeriksa apakah AI seleksi beasiswa sekolah mendiskriminasi siswa dari latar belakang wilayah tertentu.'
      },
      {
        term: 'Bias Algoritmik (Algorithmic Bias)',
        definition: 'Kesalahan sistematis dan berulang pada keluaran sistem AI yang menghasilkan keputusan tidak adil bagi kelompok tertentu karena data latihnya tidak seimbang.',
        contextExample: 'AI absensi wajah gagal mengenali siswa berkulit gelap karena 90% data latih awalnya hanya wajah berkulit terang.'
      },
      {
        term: 'Filter Bubble',
        definition: 'Kondisi isolasi intelektual di mana algoritma rekomendasi media sosial hanya menyajikan informasi yang sejalan dengan preferensi masa lalu pengguna, mempersempit sudut pandang.',
        contextExample: 'Seseorang hanya disuguhi berita dari satu kubu politik sehingga menganggap seluruh dunia berpikiran sama dengannya.'
      },
      {
        term: 'SE Menkominfo No. 9 Tahun 2023',
        definition: 'Surat Edaran resmi Pemerintah Indonesia tentang Pedoman Etika Kecerdasan Artifisial yang mencakup nilai inklusivitas, keamanan, kredibilitas, dan akuntabilitas.',
        contextExample: 'Landasan hukum panduan etika penggunaan AI bagi institusi pendidikan dan industri di Indonesia.'
      }
    ],
    chapters: [
      {
        id: 'c3-1',
        title: 'A. Pengenalan Pola Citra dan Suara oleh Komputer',
        description: 'Bagaimana komputer melihat gambar digital lewat susunan matriks piksel RGB dan mendengarkan suara lewat gelombang frekuensi audio.',
        readingMinutes: 10,
        keyConcepts: ['Matriks Piksel RGB', 'Ekstraksi Fitur (Feature Extraction)', 'Kontur dan Tekstur', 'Spektrogram Suara', 'OCR & Speech-to-Text'],
        dailyAnalogy: 'Bagi mata manusia, foto kucing adalah hewan lucu berbulu. Namun bagi komputer, foto kucing hanyalah susunan kisi-kisi kotak (piksel) berisi jutaan angka dari 0 sampai 255. Angka merah, hijau, dan biru. Komputer mengenali kucing dengan mencari pola angka: ada pola segitiga di atas (telinga), dua pola lingkaran (mata), dan garis-garis tipis (kumis)!',
        coreContent: `### 1. Bagaimana Komputer Melihat Gambar (Citra Digital)?
Sebuah foto digital berukuran 1000 x 1000 piksel terdiri atas 1 juta titik kotak kecil. Setiap titik memiliki nilai intensitas warna dasar **RGB (Red, Green, Blue)** dengan rentang angka 0 hingga 255:
- Angka (255, 0, 0) menghasilkan warna merah murni.
- Angka (0, 0, 0) menghasilkan warna hitam pekat.
- Angka (255, 255, 255) menghasilkan warna putih terang.

Algoritma pengenalan pola citra bekerja melalui **Ekstraksi Fitur (Feature Extraction)**:
1. *Deteksi Tepi (Edge Detection):* Mencari lonjakan kontras angka piksel yang mendadak untuk menemukan garis batas objek.
2. *Deteksi Bentuk:* Menggabungkan garis-garis tepi menjadi bentuk dasar (lingkaran, segitiga, persegi).
3. *Klasifikasi:* Mencocokkan kombinasi bentuk tersebut dengan ribuan pola objek yang tersimpan dalam model neural network.

### 2. Bagaimana Komputer Mendengar Suara (Audio Digital)?
Gelombang suara analog ditangkap oleh mikrofon, lalu diubah menjadi sinyal digital melalui proses *sampling* (biasanya 44.100 kali per detik).
Komputer mengubah gelombang suara menjadi representasi visual frekuensi yang disebut **Spektrogram**:
- Sumbu X mewakili waktu (detik).
- Sumbu Y mewakili tinggi-rendahnya frekuensi (Hertz).
- Kecerahan warna mewakili kekuatan volume (Amplitudo).
Dengan spektrogram, komputer mengenali kata yang diucapkan manusia dengan cara "melihat" pola gambar gelombangnya!`,
        practicalTips: [
          'Resolusi gambar yang terlalu tinggi justru memperlambat kerja AI; oleh karena itu model AI sering mengecilkan foto ke ukuran 224x224 piksel terlebih dahulu.',
          'Kebisingan latar belakang (*noise*) adalah musuh utama sistem pengenalan suara.'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'AI Auto-Vectorization & Optical Character Recognition (OCR)',
            scenario: 'Mengubah sketsa logo gambar tangan siswa di buku gambar menjadi file vektor digital yang dapat diperbesar tanpa pecah.',
            implementation: 'AI menganalisis piksel kontur tinta hitam pada kertas, mengekstrak titik kurva kurva Bezier, dan otomatis menghasilkan file vektor SVG/EPS.',
            impactNote: 'Memangkas waktu tracing manual dari 2 jam menjadi 10 detik.'
          },
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Diagnosis Kerusakan Bantalan Mesin Lewat Analisis Pola Suara Akustik',
            scenario: 'Mendeteksi bantalan roda (bearing) yang aus sebelum roda macet total di jalan.',
            implementation: 'Mikrofon piezoelektrik merekam desingan suara mesin. AI membandingkan spektrogram suara dengan database pola suara bantalan rusak (frekuensi decit khas 2.500 Hz).',
            impactNote: 'Mekanik dapat melakukan perbaikan preventif tanpa harus membongkar seluruh blok mesin.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Uji Klasifikasi Sampah Teachable Machine di Lab 4',
          prompt: 'Buka menu **LAB KKA > Lab 4: Pengenalan Pola & Etika KA**. Pilih sampel gambar sampah (Daun Kering, Botol Plastik, Apel Bekas). Perhatikan bagaimana sistem mendeteksi fitur warna hijau/kuning dan tingkat kepastian (*confidence score*).',
          expectedOutput: 'Catat tingkat akurasi deteksi pada 3 jenis sampah dan simpan ke portofolio.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Analisis Fitur Pengenal Wajah di Sekolah',
          prompt: 'Amati sistem absensi kamera wajah di sekolah atau ponselmu. Diskusikan: Fitur wajah apa saja yang diukur oleh sistem (jarak kedua mata, lebar hidung, garis rahang)? Apa yang terjadi jika siswa memakai masker atau kacamata hitam?',
          expectedOutput: 'Ringkasan laporan tertulis mengenai batas toleransi ekstraksi fitur wajah manusia.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa komputer lebih mudah memproses gambar hitam-putih (grayscale) dibanding gambar berwarna RGB?',
            answerKey: 'Karena gambar hitam-putih hanya memiliki 1 saluran angka intensitas (0 s.d. 255) per piksel, sedangkan gambar berwarna RGB memiliki 3 saluran angka (Merah, Hijau, Biru). Memproses 1 saluran mengurangi beban komputasi dan memori hingga sepertiganya.',
            explanation: 'Banyak algoritma deteksi wajah mengubah citra ke grayscale terlebih dahulu untuk mempercepat respons.'
          }
        ]
      },
      {
        id: 'c3-2',
        title: 'B. Spektrum Karier & 5 Profesi Masa Depan AI',
        description: 'Tugas nyata Data Scientist, Machine Learning Engineer, AI Research Scientist, AI Robotics Engineer, dan AI Ethics Specialist.',
        readingMinutes: 10,
        keyConcepts: ['Data Scientist (Analis Pola)', 'ML Engineer (Insinyur Model)', 'AI Research Scientist (Peneliti)', 'AI Robotics Engineer', 'AI Ethics Specialist'],
        dailyAnalogy: 'Membangun ekosistem AI seperti mendirikan restoran bintang lima: Data Scientist adalah pemasok bahan segar yang memilah bahan berkualitas; ML Engineer adalah koki yang memasak dan melatih resep di dapur; Research Scientist adalah pencipta teknik memasak molekuler baru; Robotics Engineer adalah mekanik mesin oven dan kompor otomatis; dan AI Ethics Specialist adalah pengawas kebersihan dan kehalalan makanan (*food auditor*)!',
        coreContent: `### Lima Profesi Kunci di Era Kecerdasan Artifisial
Kecerdasan Artifisial bukanlah bidang monopoli lulusan perguruan tinggi saja; lulusan SMK memiliki peran sangat besar pada lapis implementasi dan rekayasa data:

1. **Data Scientist (Ilmuwan Data):**
   - *Peran:* Mengumpulkan, membersihkan data kotor (*data cleansing*), dan menemukan wawasan bisnis berharga di balik tumpukan data besar.
   - *Keahlian Utama:* Statistik dasar, bahasa Python/R, SQL basis data, dan kemampuan visualisasi data.

2. **Machine Learning Engineer (Insinyur Pembelajaran Mesin):**
   - *Peran:* Mengambil model AI hasil riset, melatihnya dengan dataset besar, lalu memasangnya (*deployment*) ke server cloud atau aplikasi smartphone agar dapat diakses jutaan pengguna secara stabil.
   - *Keahlian Utama:* Rekayasa perangkat lunak, arsitektur cloud (AWS/GCP), API integration, dan optimasi performa.

3. **AI Research Scientist (Peneliti Sains AI):**
   - *Peran:* Menemukan arsitektur matematika baru (misal: penemuan arsitektur Transformer yang menjadi dasar ChatGPT).
   - *Keahlian Utama:* Matematika kalkulus, aljabar linear lanjutan, dan publikasi riset sains.

4. **AI Robotics Engineer (Insinyur Robotika Cerdas):**
   - *Peran:* Menggabungkan perangkat lunak cerdas AI dengan perangkat keras fisik robot di industri manufaktur atau medis.
   - *Keahlian Utama:* Mekatronika, kontrol mikrokontroler (Arduino/Raspberry Pi/PLC), sensorik, dan Computer Vision.

5. **AI Ethics Specialist (Spesialis Etika & Kepatuhan AI):**
   - *Peran:* Menilai keadilan algoritma, memastikan transparansi sistem, melindungi data pribadi pengguna, dan memastikan kepatuhan terhadap regulasi hukum pemerintah.
   - *Keahlian Utama:* Hukum privasi digital, audit algoritma, sosiologi teknologi, dan etika profesi.`,
        practicalTips: [
          'Siswa SMK kelas X dapat mulai membangun portofolio sebagai Data Annotator atau Junior Python Developer.',
          'Kemampuan komunikasi (*soft skills*) sama pentingnya dengan kemampuan teknis koding.'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Jalur Karier Junior Machine Learning Operations (MLOps)',
            scenario: 'Lulusan SMK mengelola pembaruan model klasifikasi produk toko online secara otomatis saat ada data tren baru.',
            implementation: 'Membuat alur pipeline Continuous Integration / Continuous Deployment (CI/CD) yang menguji akurasi model sebelum dirilis ke server produksi.',
            impactNote: 'Model selalu mutakhir tanpa menyebabkan server web down.'
          },
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Peran Data Quality Officer & Kepatuhan Arsip Digital',
            scenario: 'Menjamin kerahasiaan data karyawan kantor sesuai prinsip UU Pelindungan Data Pribadi.',
            implementation: 'Melakukan anonimisasi (menghapus NIK dan nomor rekening) sebelum data absensi diserahkan ke vendor pihak ketiga pengembang AI.',
            impactNote: 'Perusahaan terhindar dari sanksi hukum denda kebocoran data pribadi.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Rencana Pengembangan Diri Karier AI',
          prompt: 'Pilihlah salah satu dari 5 profesi AI yang paling menarik minatmu. Tuliskan 3 keterampilan yang harus kamu pelajari mulai semester ini untuk mendekati cita-cita profesi tersebut.',
          expectedOutput: 'Rencana aksi belajar mandiri tertulis di lembar portofolio siswa.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Roleplay Sidang Evaluasi Etika Produk AI',
          prompt: 'Bentuk kelompok beranggotakan 4 orang: Perankan 1 orang Manajer Produk, 1 orang ML Engineer, 1 orang AI Ethics Specialist, dan 1 orang Perwakilan Konsumen. Debatkan apakah sebuah sistem deteksi emosi wajah siswa di kelas layak dipasang di sekolah.',
          expectedOutput: 'Notula hasil musyawarah mufakat yang menyeimbangkan antara manfaat dan hak privasi siswa.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa profesi AI Ethics Specialist kini sangat dicari oleh perusahaan teknologi terkemuka di dunia?',
            answerKey: 'Karena jika algoritma AI melakukan diskriminasi atau melanggar undang-undang privasi (seperti membocorkan data nasabah atau mendiskriminasi pelamar kerja), perusahaan dapat dituntut di pengadilan, dikenakan denda puluhan miliar rupiah, dan kehilangan kepercayaan publik.',
            explanation: 'Etika bukan lagi beban pelengkap, melainkan bagian dari mitigasi risiko hukum dan bisnis modern.'
          }
        ]
      },
      {
        id: 'c3-3',
        title: 'C. Standar Kompetensi AI UNESCO (2024) & Keterampilan Abad 21',
        description: 'Mendalami 4 dimensi kerangka UNESCO: Human-Centred Mindset, Ethics of AI, AI Techniques & Applications, dan AI System Design.',
        readingMinutes: 10,
        keyConcepts: ['Kerangka UNESCO 2024', 'Pola Pikir Berpusat pada Manusia', 'Ethics by Design', 'Critical AI Literacy', 'Pemberdayaan Lulusan SMK'],
        dailyAnalogy: 'Bayangkan kamu menaiki mobil dengan fitur cruise control otomatis. Apakah kamu boleh tidur di kursi pengemudi? Tentu tidak! Tanganmu tetap harus memegang setir dan matamu mengawasi jalan. Pola Pikir Berpusat pada Manusia (Human-Centred) menegaskan bahwa AI hanyalah asisten pembantu, sedangkan tanggung jawab penuh atas keselamatan ada pada manusia pemegang kemudi.',
        coreContent: `### Kerangka Kompetensi AI UNESCO (2024)
Pada tahun 2024, UNESCO merilis panduan resmi *AI Competency Framework for Students and Teachers*. Tujuannya agar generasi muda tidak sekadar menjadi konsumen pasif teknologi, melainkan menjadi pengguna yang bijak, kritis, dan berdaya:

1. **Dimensi 1: Human-Centred Mindset (Pola Pikir Berpusat pada Manusia)**
   Menyadari bahwa teknologi dibuat untuk melayani kemanusiaan dan memajukan kesejahteraan bersama, bukan sebaliknya. Manusia tidak boleh diperbudak atau dieksploitasi oleh sistem otomatis.

2. **Dimensi 2: Ethics of AI (Etika Kecerdasan Artifisial)**
   Memahami konsekuensi moral penggunaan AI: keadilan, transparansi (apakah alasan keputusan AI dapat dijelaskan?), privasi data, serta jejak karbon (*carbon footprint*) dari pusat data komputer yang mengonsumsi listrik besar.

3. **Dimensi 3: AI Techniques and Applications (Teknik & Aplikasi AI)**
   Kecakapan praktis dalam memilih alat AI yang tepat untuk menyelesaikan tugas nyata, memahami cara kerja dasar, batas kemampuan, serta kelemahan dari masing-masing alat.

4. **Dimensi 4: AI System Design (Perancangan Sistem AI)**
   Tingkat kemahiran lebih lanjut di mana siswa mampu merancang solusi berbasis AI sederhana menggunakan prinsip *Design Thinking* dan metodologi pemecahan masalah komputasional.`,
        practicalTips: [
          'Selalu verifikasi informasi yang dihasilkan AI dengan buku referensi resmi sebelum mempercayainya.',
          'Jangan pernah mengunggah data rahasia pribadi (NIK, password, foto keluarga) ke platform AI publik.'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Penerapan Human-Centred Mindset pada Pembuatan Desain Poster Digital',
            scenario: 'Menggunakan AI generatif gambar untuk ideasi konsep tanpa menghilangkan sentuhan orisinalitas desainer manusia.',
            implementation: 'Siswa menggunakan AI hanya untuk mengeksplorasi komposisi sketsa kasar (moodboard), kemudian menggambar ulang karakter dan tipografi secara orisinal dengan gaya personal siswa.',
            impactNote: 'Karya memiliki jiwa seni otentik dan terbebas dari tuntutan hak cipta gambar generatif.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Evaluasi Diri Terhadap 4 Dimensi UNESCO',
          prompt: 'Beri skor 1 sampai 5 pada dirimu sendiri untuk masing-masing dari 4 dimensi UNESCO (Human-Centred Mindset, Ethics, Techniques, System Design). Tuliskan alasan singkat untuk skormu.',
          expectedOutput: 'Tabel radar evaluasi diri kompetensi AI di lembar kerja portofolio.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Kampanye "Kritis Terhadap AI" di Sekolah',
          prompt: 'Rancang poster atau video pendek 30 detik yang mengajak teman-teman sekolah untuk tidak asal copy-paste tugas dari ChatGPT tanpa membaca dan memahaminya terlebih dahulu.',
          expectedOutput: 'Draf konten kampanye literasi digital yang siap disebarkan di mading atau media sosial OSIS.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa arti slogan "Human in the loop" dalam pengembangan dan penerapan sistem kecerdasan artifisial?',
            answerKey: 'Artinya proses pengambilan keputusan kritis (seperti diagnosa medis, vonis hukum, penerimaan pegawai, atau kelulusan siswa) tidak boleh diserahkan 100% kepada mesin otomatis tanpa adanya pengawasan, peninjauan, dan persetujuan akhir dari manusia yang kompeten.',
            explanation: 'Manusia memegang tanggung jawab moral dan hukum tertinggi yang tidak dimiliki oleh algoritma komputer.'
          }
        ]
      },
      {
        id: 'c3-4',
        title: 'D. Dampak dan Regulasi Etika KA di Indonesia',
        description: 'Kajian Surat Edaran Menkominfo No 9 Tahun 2023, UU Pelindungan Data Pribadi (UU PDP), mitigasi bias, dan perumusan Kode Etik Siswa.',
        readingMinutes: 12,
        keyConcepts: ['SE Menkominfo No 9/2023', 'UU PDP No 27/2022', 'Inklusivitas & Non-Diskriminasi', 'Transparansi & Akuntabilitas', 'Kode Etik Siswa Sekolah'],
        dailyAnalogy: 'Aturan etika dan hukum bagi AI sama persis seperti lampu lalu lintas dan marka jalan. Tanpa lampu merah dan marka jalan, mobil-mobil kencang akan saling bertabrakan dan mencelakai pejalan kaki. Regulasi bukan untuk menghentikan mobil melaju, melainkan agar semua pengguna jalan sampai ke tujuan dengan selamat!',
        coreContent: `### 1. Surat Edaran Menkominfo No. 9 Tahun 2023
Pemerintah Republik Indonesia melalui Kementerian Komunikasi dan Informatika menerbitkan panduan etika resmi bagi pengembang dan pengguna kecerdasan artifisial. Terdapat 9 prinsip nilai etika utama:
1. **Inklusivitas:** AI harus dapat diakses dan bermanfaat bagi seluruh lapisan masyarakat tanpa memandang suku, agama, gender, atau kondisi disabilitas.
2. **Kemanusiaan:** Menjaga martabat manusia dan tidak menggantikan nilai-nilai hak asasi.
3. **Keamanan:** Memastikan sistem terlindung dari peretasan dan tidak membahayakan fisik maupun psikis pengguna.
4. **Aksesibilitas:** Kemudahan akses bagi pengguna difabel.
5. **Transparansi:** Keputusan AI harus dapat dilacak dan dijelaskan logikanya (*explainable AI*).
6. **Kredibilitas & Akurasi:** Data yang digunakan harus valid dan bebas dari rekayasa hoaks.
7. **Pelindungan Data Pribadi:** Wajib mematuhi **UU PDP No. 27 Tahun 2022** dalam mengumpulkan dan menyimpan data warga.
8. **Pembangunan Berkelanjutan:** Memperhatikan efisiensi energi dan kelestarian lingkungan.
9. **Akuntabilitas:** Harus ada pihak hukum (manusia atau badan usaha) yang bertanggung jawab jika terjadi kegagalan sistem.

### 2. Bahaya Bias Algoritmik dan Deepfake
- **Bias Data:** Jika AI rekrutmen kerja dilatih dengan 90% data karyawan pria dari 20 tahun lalu, AI akan secara otomatis mendiskriminasi pelamar wanita yang kompeten. Solusinya: audit proporsi dataset sebelum melatih model.
- **Deepfake & Disinformasi:** Rekayasa video/suara palsu yang meniru tokoh publik atau teman sebaya untuk memfitnah atau menipu uang transfer. Di Indonesia, pelaku pembuatan dan penyebaran konten deepfake yang merugikan orang lain dapat dijerat pidana melalui UU ITE.

### 3. Merumuskan Kode Etik Siswa Pengguna AI di Sekolah
Sebagai siswa kelas X yang berkarakter Profil Pelajar Pancasila, terapkan 5 janji integritas:
1. Menggunakan AI sebagai sarana memperluas ide dan referensi belajar, bukan untuk menyontek (*anti-plagiarisme*).
2. Selalu mencantumkan sumber (*atribusi*) jika suatu tugas memanfaatkan bantuan AI.
3. Menjaga kerahasiaan data pribadi diri sendiri dan teman sekolah.
4. Tidak menggunakan AI untuk membuat konten perundungan (*cyberbullying*), meme bernada pelecehan, atau deepfake.
5. Melakukan verifikasi ulang fakta dari setiap jawaban yang diberikan oleh AI.`,
        practicalTips: [
          'Jika kamu menggunakan bantuan AI dalam menyusun laporan, buat bagian "Pernyataan Penggunaan AI" di halaman akhir laporanmu.',
          'Laporkan segera ke guru BK jika menemukan konten rekayasa deepfake yang mencemarkan nama teman di sekolah.'
        ],
        majorApplications: [
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Audit Kepatuhan UU PDP pada Formulir Buku Tamu Digital Kantor',
            scenario: 'Buku tamu resepsionis meminta nomor KTP, foto wajah, dan nomor HP tamu secara terbuka di tablet meja depan.',
            implementation: 'Staf kantor menerapkan prinsip minimalisasi data UU PDP: Nomor KTP dihapus dari kolom wajib karena tidak relevan dengan kunjungan biasa, dan layar otomatis mengunci (*privacy screen*) agar tamu lain tidak bisa melihat data tamu sebelumnya.',
            impactNote: 'Kantor mematuhi hukum privasi nasional dan melindungi data privasi tamu dari ancaman pencurian identitas.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Audit Bias Dataset Wajah di Lab 4',
          prompt: 'Buka menu **LAB KKA > Lab 4**. Masuk ke bagian **Audit Bias Dataset**. Amati rasio perbandingan data latih laki-laki vs perempuan. Geser slider distribusi data menjadi seimbang 50:50 dan amati bagaimana angka bias sistem menurun drastis.',
          expectedOutput: 'Catatan hasil audit bias sebelum dan sesudah penyeimbangan dataset.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Perumusan Piagam Kode Etik AI Kelas X',
          prompt: 'Diskusikan bersama kelompok: Rumuskan 5 butir naskah "Piagam Integritas Digital & Etika AI" yang disepakati bersama untuk diterapkan di kelasmu selama satu tahun ajaran.',
          expectedOutput: 'Naskah piagam deklarasi etika bermaterai moral yang ditandatangani seluruh perwakilan kelompok.'
        },
        selfCheckQuestions: [
          {
            question: 'Sebutkan 3 prinsip utama dalam SE Menkominfo No. 9 Tahun 2023 yang wajib dipatuhi pengembang kecerdasan artifisial di Indonesia!',
            answerKey: 'Tiga prinsip di antaranya adalah: 1) Inklusivitas (tidak diskriminatif bagi kelompok manapun); 2) Pelindungan Data Pribadi (mematuhi UU PDP dalam mengelola informasi sensitif warga); dan 3) Akuntabilitas (harus ada subjek hukum manusia/perusahaan yang bertanggung jawab atas dampak sistem).',
            explanation: 'Prinsip-prinsip ini memastikan teknologi AI berkembang selaras dengan nilai-nilai Pancasila dan hukum nasional.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 4: PROMPT ENGINEERING & DESIGN THINKING
  // ==========================================
  {
    module_id: 'mod-04',
    sequence: 4,
    title: 'Modul 4: Integrasi Prompt Engineering & Design Thinking',
    description: 'Memahami cara kerja Large Language Models (LLM), menyusun prompt berkinerja tinggi dengan formula PGTC (Persona, Goal, Task, Context), mitigasi halusinasi, serta memecahkan masalah kontekstual kejuruan melalui 5 siklus Design Thinking.',
    iconName: 'Sparkles',
    color: 'from-purple-600 to-indigo-700',
    curriculumVerificationNote: 'Diselaraskan dengan Capaian Pembelajaran Literasi Digital & Pemecahan Masalah Kreatif Fase E Kemendikdasmen 2025.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menjelaskan mekanisme kerja LLM (tokenisasi, probabilitas kata berikutnya, halusinasi)',
        condition: 'dalam asesmen formatif',
        degree: 'secara konseptual dan tepat',
        text: 'Peserta didik mampu menguraikan cara kerja model bahasa besar (LLM) dan faktor pemicu terjadinya halusinasi AI.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menyusun instruksi prompt terstruktur menggunakan formula PGTC',
        condition: 'diberikan skenario kebutuhan tugas kejuruan di Lab 5',
        degree: 'memuat keempat elemen (Persona, Goal, Task, Context) secara lengkap',
        text: 'Peserta didik mampu merancang prompt berkualitas tinggi dengan kerangka formula PGTC.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membedakan teknik prompting Zero-Shot dan Few-Shot',
        condition: 'melalui uji komparasi respons AI',
        degree: 'dengan memberikan contoh format keluaran terstandar',
        text: 'Peserta didik mampu menerapkan teknik Few-Shot prompting untuk mengontrol format dan konsistensi keluaran AI.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menerapkan 5 tahap siklus Design Thinking (Empathize, Define, Ideate, Prototype, Test)',
        condition: 'dalam menyelesaikan permasalahan nyata di sekolah/kejuruan',
        degree: 'menghasilkan lembar kanvas solusi yang teruji',
        text: 'Peserta didik mampu menghasilkan purwarupa solusi kreatif melalui metodologi 5 tahap Design Thinking.'
      }
    ],
    learning_objectives: [
      'Memahami mekanisme kerja Large Language Models (LLM), tokenisasi, prediksi probabilitas kata, dan fenomena halusinasi.',
      'Menerapkan formula PGTC (Persona, Goal, Task, Context) untuk menghasilkan prompt yang presisi dan relevan.',
      'Menganalisis perbandingan performa teknik Zero-Shot vs Few-Shot Prompting.',
      'Menerapkan teknik mitigasi bias, verifikasi fakta (*fact-checking*), dan penalaran langkah demi langkah (*Chain-of-Thought*).',
      'Menguasai metodologi 5 tahap Design Thinking untuk menghasilkan inovasi solusi di lingkungan sekolah dan dunia industri.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang kesulitan membedakan elemen PGTC, berikan latihan mencocokkan potongan kalimat acak ke dalam 4 kotak berlabel Persona, Goal, Task, dan Context.',
    enrichmentGuide: 'Tantang siswa merancang prompt "Meta-Prompting" di mana AI diperintahkan untuk mewawancarai siswa terlebih dahulu sebelum menyusun solusi proyek kejuruan.',
    reflectionPrompts: [
      'Mengapa AI generatif terkadang memberikan jawaban yang terdengar sangat meyakinkan tetapi faktanya salah (halusinasi)?',
      'Bagaimana penetapan peran (Persona) yang spesifik mengubah sudut pandang dan gaya bahasa jawaban dari AI?',
      'Di antara 5 tahap Design Thinking, mengapa tahap berempati (Empathize) diletakkan di urutan paling awal?'
    ],
    vocabulary: [
      {
        term: 'Large Language Model (LLM)',
        definition: 'Model kecerdasan artifisial berbasis jaringan saraf mendalam (deep learning) yang dilatih menggunakan miliaran dokumen teks untuk memahami dan menghasilkan bahasa alami manusia.',
        contextExample: 'Model bahasa besar seperti Gemini dan GPT yang mampu diajak berdiskusi interaktif.'
      },
      {
        term: 'Token & Tokenisasi',
        definition: 'Unit terkecil dari teks (dapat berupa kata utuh atau pecahan suku kata) yang diproses dan dihitung oleh model kecerdasan artifisial.',
        contextExample: 'Kata "pembelajaran" dapat dipecah menjadi token ["pem", "belajar", "an"].'
      },
      {
        term: 'Halusinasi AI (AI Hallucination)',
        definition: 'Keluaran sistem AI yang terdengar sangat meyakinkan, runtut, dan formal, namun informasinya keliru secara fakta matematis atau historis karena model hanya memprediksi probabilitas kata.',
        contextExample: 'AI mengarang judul buku fiktif lengkap dengan nomor halaman palsu saat ditanya kutipan ilmiah.'
      },
      {
        term: 'Formula PGTC',
        definition: 'Kerangka kerja perancangan prompt terstandar yang terdiri dari Persona (Peran ahli), Goal (Tujuan utama), Task (Langkah tugas detail), dan Context (Latar belakang situasi dan batasan format).',
        contextExample: 'Standar penyusunan prompt instruksi kerja siswa di Lab 5 KKA.'
      },
      {
        term: 'Few-Shot Prompting',
        definition: 'Teknik memberi instruksi kepada AI dengan menyertakan satu atau beberapa contoh pasangan (input -> output) yang benar sebelum meminta AI menyelesaikan tugas yang baru.',
        contextExample: 'Memberikan contoh format 2 email penawaran resmi sebelum meminta AI membuat draf email ketiga.'
      },
      {
        term: 'Design Thinking',
        definition: 'Metodologi inovasi yang berpusat pada empati terhadap pengguna (human-centered) melalui 5 tahapan berulang: Empathize, Define, Ideate, Prototype, dan Test.',
        contextExample: 'Merancang ulang gerobak sampah sekolah dengan mengamati beban kerja petugas kebersihan sekolah.'
      }
    ],
    chapters: [
      {
        id: 'c4-1',
        title: 'A. Cara Kerja Generative AI & Large Language Models (LLM)',
        description: 'Memahami bagaimana model bahasa besar memecah teks menjadi token, memprediksi kata berikutnya, dan mengapa AI dapat berhalusinasi.',
        readingMinutes: 10,
        keyConcepts: ['Next-Token Prediction', 'Tokenisasi Teks', 'Probabilitas Statistik Bahasa', 'Penyebab Halusinasi AI', 'Batas Pengetahuan Model'],
        dailyAnalogy: 'LLM bekerja mirip seperti fitur autocomplete (teks otomatis) pada keyboard ponsel pintarmu, tetapi dalam skala raksasa. Jika kamu mengetik "Ibu memasak di...", ponselmu akan menyarankan kata "dapur" karena kata itu paling sering muncul bersamaan di masa lalu. AI tidak memiliki "kesadaran", ia adalah mesin kalkulator probabilitas kata yang sangat cerdas!',
        coreContent: `### 1. Bagaimana AI Memahami Bahasa Manusia?
Berbeda dengan manusia yang memahami makna kata lewat pengalaman hidup, model bahasa besar (LLM) memproses bahasa menggunakan matematika statistik:
1. **Tokenisasi:** Teks yang kita ketikkan dipecah menjadi unit-unit kecil yang disebut **Token**. Rata-rata 1 kata bahasa Indonesia setara dengan 1 hingga 2 token.
2. **Embedding Vektor:** Setiap token diubah menjadi deretan koordinat angka (*vektor*) di dalam ruang berdimensi ribuan. Kata yang memiliki makna mirip (misal: "dokter" dan "perawat") akan memiliki koordinat yang sangat berdekatan.
3. **Prediksi Kata Berikutnya (Next-Token Prediction):** Saat kamu memberikan pertanyaan, AI tidak "berpikir" seperti manusia. AI menghitung token mana yang memiliki peluang probabilitas statistik tertinggi untuk muncul sebagai kata kelanjutan yang logis.

### 2. Mengapa AI Dapat Berhalusinasi (AI Hallucination)?
Halusinasi terjadi ketika AI menghasilkan jawaban yang salah secara fakta, mengarang nama tokoh, atau mengutip undang-undang fiktif dengan nada bahasa yang sangat percaya diri. Penyebab utamanya:
- AI **tidak memiliki basis pengetahuan fakta absolut**, AI hanya merangkai kata yang terdengar plausibel secara tata bahasa.
- Prompt pengguna terlalu ambigu atau tidak memberikan batasan konteks.
- Data latih AI mengandung informasi yang bertentangan atau sudah kedaluwarsa.

Oleh karena itu, peran manusia sebagai verifikator kebenaran (*fact-checker*) tidak akan pernah bisa digantikan oleh AI.`,
        practicalTips: [
          'Jika menginginkan AI tidak berhalusinasi, instruksikan di akhir prompt: "Jika kamu tidak menemukan fakta pastinya di dalam konteks, katakan dengan jujur bahwa kamu tidak tahu."',
          'Minta AI menyertakan kutipan kalimat rujukan untuk memverifikasi keaslian jawabannya.'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Pemanfaatan AI Code Assistant untuk Boilerplate Code',
            scenario: 'Programmer menggunakan AI untuk menghasilkan kerangka kode awal (boilerplate) koneksi database Express.js.',
            implementation: 'Siswa menuliskan prompt spesifikasi endpoint REST API. AI menghasilkan draf kode, kemudian siswa mengaudit keamanan kode dari celah SQL Injection secara manual sebelum dipakai.',
            impactNote: 'Mempercepat pembuatan prototype tanpa mengorbankan keamanan sistem.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Uji Halusinasi pada Topik Lokal',
          prompt: 'Ajukan pertanyaan yang sangat spesifik dan lokal ke model AI (misal: "Siapa nama kepala sekolah pertama di SMK Negeri 3 Kuningan tahun 1980?"). Amati apakah jawabannya benar atau AI berhalusinasi mengarang nama tokoh yang tidak pernah ada. Verifikasi ke arsip sekolah.',
          expectedOutput: 'Catatan komparasi antara jawaban AI dengan arsip sejarah sekolah yang sebenarnya.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Eksperimen Tokenisasi Kalimat',
          prompt: 'Tuliskan satu paragraf visi-misi sekolahmu. Hitung perkiraan jumlah kata dan diskusikan bagaimana komputer memecah kata berimbuhan (seperti "mengikutsertakan") menjadi beberapa sub-token kata.',
          expectedOutput: 'Tabel analisis pemecahan kata menjadi unit-unit token dasar.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa model AI generatif dapat menghasilkan jawaban yang berbeda meskipun diberi pertanyaan yang sama persis?',
            answerKey: 'Karena model AI memiliki parameter keacakan (disebut Temperature). AI tidak selalu memilih token dengan probabilitas peringkat 1 mutlak, melainkan mengambil sampel dari beberapa kata probabilitas teratas agar kalimatnya variatif dan tidak kaku seperti robot.',
            explanation: 'Nilai temperatur yang rendah menghasilkan jawaban kaku dan deterministik, sedangkan temperatur tinggi menghasilkan jawaban kreatif.'
          }
        ]
      },
      {
        id: 'c4-2',
        title: 'B. Formula Prompt Engineering Efektif: PGTC',
        description: 'Menerapkan kerangka kerja terstandar: Persona, Goal, Task, dan Context untuk memaksimalkan akurasi dan relevansi instruksi AI.',
        readingMinutes: 12,
        keyConcepts: ['Elemen Persona (Peran Ahli)', 'Elemen Goal (Capaian Hasil)', 'Elemen Task (Instruksi Langkah)', 'Elemen Context (Batasan & Format)', 'Zero-Shot vs Few-Shot'],
        dailyAnalogy: 'Memberi perintah ke AI sama seperti memberi tugas ke asisten magang baru di kantor. Jika kamu hanya bilang: "Bikinkan surat!" (prompt buruk), hasilnya pasti membingungkan. Namun jika kamu bilang: "Bertindaklah sebagai sekretaris direktur profesional (Persona). Tujuanmu adalah mengundang wali murid rapat pleno (Goal). Buatkan draf surat resmi 3 paragraf dengan bahasa baku (Task). Acara hari Sabtu jam 09.00 di aula sekolah, sertakan nomor kontak panitia (Context)" (formula PGTC), hasilnya langsung sempurna!',
        coreContent: `### Formula PGTC untuk Prompt Berkualitas Tinggi
Banyak orang mengeluh hasil AI buruk, padahal penyebabnya adalah prompt yang mereka tuliskan terlalu singkat dan tidak terarah (*Garbage In, Garbage Out*). Gunakan formula **PGTC**:

\`\`\`
  [ P - PERSONA ]  ──────> Siapa peran ahli yang harus diemban AI?
  [ G - GOAL    ]  ──────> Apa tujuan akhir atau masalah yang ingin diselesaikan?
  [ T - TASK    ]  ──────> Apa saja instruksi tindakan spesifik yang harus dikerjakan?
  [ C - CONTEXT ]  ──────> Apa latar belakang, batasan syarat, dan format keluaran?
\`\`\`

1. **Persona (P):**
   Tentukan identitas dan keahlian spesifik model. Contoh: *"Bertindaklah sebagai Konsultan Pajak Senior bersertifikat..."* atau *"Bertindaklah sebagai Guru Produktif Teknik Otomotif yang ramah..."*. Persona langsung menyaring gaya bahasa dan kedalaman istilah teknis.

2. **Goal (G):**
   Nyatakan hasil akhir yang diinginkan secara gamblang. Contoh: *"Tujuanmu adalah membantu siswa kelas X memahami cara menyusun neraca saldo awal."*

3. **Task (T):**
   Rincikan langkah kerja yang wajib dieksekusi langkah demi langkah. Gunakan penomoran agar terstruktur: *"1) Jelaskan konsep debit-kredit; 2) Berikan 1 contoh transaksi kas; 3) Buat tabel neraca saldonya."*

4. **Context (C):**
   Sertakan batasan situasi, audiens target, nada bicara (*tone*), dan format tabel atau JSON yang diharapkan. Contoh: *"Gunakan bahasa Indonesia yang santun dan mudah dipahami remaja usia 16 tahun, batasi jawaban maksimal 300 kata, hindari rumus yang rumit."*

### Zero-Shot vs. Few-Shot Prompting
- **Zero-Shot:** Memberikan instruksi langsung tanpa contoh sebelumnya. Efektif untuk pertanyaan pengetahuan umum.
- **Few-Shot:** Menyertakan minimal 1 atau 2 contoh pasangan masukan-keluaran yang benar di dalam prompt sebelum meminta AI mengerjakan data baru. Teknik ini sangat ampuh mengunci format output agar konsisten 100%.`,
        practicalTips: [
          'Gunakan kata kerja aksi operasional pada bagian Task (Analisis, Buatkan, Ringkas, Bandingkan).',
          'Sebutkan format keluaran secara eksplisit (misal: "Sajikan dalam bentuk tabel 4 kolom").'
        ],
        majorApplications: [
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Prompting PGTC untuk Draf Email Penawaran Kerja Sama PKL',
            scenario: 'Menulis draf email resmi penawaran magang industri ke manajer HRD perusahaan multinasional.',
            implementation: 'P: Staf Hubungan Industri SMK profesional. G: Membuka peluang kuota magang PKL untuk 10 siswa jurusan perkantoran. T: Susun email formal pengantar proposal kemitraan. C: Maksimal 200 kata, lampirkan daftar kompetensi siswa, nada hormat dan percaya diri.',
            impactNote: 'Email memiliki konversi balasan positif (*reply rate*) 4 kali lebih tinggi dari email umum.'
          },
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Prompting PGTC untuk Perancangan Brief Kreatif Desain Kemasan Produk UMKM',
            scenario: 'Menyusun creative brief sebelum mendesain kemasan keripik pisang lokal.',
            implementation: 'P: Creative Director agensi branding ternama. G: Merumuskan persona konsumen dan Unique Selling Point (USP). T: Buat ringkasan profil target pasar usia 18-25 tahun dan rekomendasi palet warna ceria. C: Sajikan dalam format tabel brief desain siap pakai.',
            impactNote: 'Desainer memiliki arahan visual yang solid sebelum mulai menggambar aset grafis.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Studio Prompt Builder PGTC di Lab 5',
          prompt: 'Buka menu **LAB KKA > Lab 5: Prompt Engineering**. Gunakan fitur interaktif PGTC Builder. Isi keempat kolom (Persona, Goal, Task, Context) sesuai kebutuhan kejuruanmu, lalu salin prompt dan uji coba keandalannya.',
          expectedOutput: 'Draf prompt PGTC yang terisi lengkap dan salinan respons AI yang presisi.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Eksperimen Few-Shot Prompting Format Data',
          prompt: 'Rancang sebuah prompt Few-Shot bersama kelompokmu untuk mengubah data biodata siswa yang berantakan menjadi format JSON terstruktur. Berikan 2 contoh di awal prompt, lalu uji coba pada 3 biodata baru.',
          expectedOutput: 'Bukti tangkapan layar bahwa AI berhasil memformat data ketiga dengan akurat sesuai contoh.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa dampak negatif jika kita melupakan elemen "Context" dalam menyusun prompt?',
            answerKey: 'AI akan menggunakan asumsi bebasnya sendiri, sehingga keluaran yang dihasilkan bisa terlalu panjang, menggunakan gaya bahasa yang tidak sesuai audiens, atau menggunakan format yang sulit diolah lebih lanjut.',
            explanation: 'Elemen Context berfungsi sebagai pembatas (*guardrail*) agar jawaban AI tidak melebar ke mana-mana.'
          }
        ]
      },
      {
        id: 'c4-3',
        title: 'C. Mitigasi Bias, Halusinasi & Verifikasi Fakta',
        description: 'Teknik grounding dokumen, penalaran berantai Chain-of-Thought, dan konfirmasi fakta silang.',
        readingMinutes: 10,
        keyConcepts: ['Grounding Dokumen', 'Chain-of-Thought (CoT)', 'Cross-Checking Fakta', 'Skeptisisme Ilmiah'],
        dailyAnalogy: 'Jika kamu bertanya kepada pemandu wisata yang belum pernah ke desamu, ia mungkin akan mengarang cerita mistis agar kamu terkesan (halusinasi). Tetapi jika kamu memberikannya buku sejarah desa terlebih dahulu dan berkata: "Jawablah hanya berdasarkan isi buku ini!", pemandu wisata itu akan menjawab dengan 100% fakta akurat. Itulah teknik Grounding!',
        coreContent: `### 1. Teknik Grounding (Memberikan Dokumen Sumber)
Salah satu cara paling ampuh mengeliminasi halusinasi AI adalah dengan teknik **Grounding** (*Retrieval-Augmented Generation / RAG*):
- Alih-alih bertanya secara terbuka: *"Apa aturan keselamatan kerja pengelasan di sekolah?"*,
- Lampirkan teks peraturan sekolah terlebih dahulu ke dalam prompt: *"Berdasarkan teks peraturan bengkel berikut ini: [lampiran teks], sebutkan 3 alat pelindung diri yang wajib dipakai!"*.
Dengan teknik ini, AI dipaksa mencari jawaban hanya dari batas dokumen yang kamu sediakan.

### 2. Teknik Chain-of-Thought (Penalaran Berantai)
Untuk memecahkan masalah logika matematika, fisika, atau akuntansi yang rumit, tambahkan kalimat sakti ini di akhir prompt:
> *"Pikirkan dan jelaskan langkah demi langkah sebelum memberikan jawaban akhir!"*

Teknik ini memaksa model AI mengeksekusi perhitungan secara runtut per tahap alih-alih langsung menebak jawaban akhir. Riset membuktikan teknik ini menaikkan akurasi hitungan matematika AI dari 40% menjadi lebih dari 80%!

### 3. Protokol Verifikasi 3 Langkah Siswa Cerdas
1. **Periksa Angka dan Tanggal:** Jangan pernah percaya tanggal sejarah atau angka kalkulasi AI tanpa menghitung ulang secara manual.
2. **Cek Ketersediaan Sumber:** Jika AI mengutip nama penulis atau undang-undang, cari nama tersebut di Google Search atau buku perpustakaan untuk memastikan keberadaannya.
3. **Waspadai Bahasa Hiperbolik:** Hindari jawaban AI yang menggunakan kata-kata bombastis tanpa bukti data konkret.`,
        practicalTips: [
          'Gunakan frasa "Langkah 1, Langkah 2, Langkah 3" saat menyusun pertanyaan pemecahan masalah.',
          'Bandingkan jawaban dari dua platform AI yang berbeda untuk melihat apakah ada pertentangan fakta.'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Grounding Dokumen Peraturan Perpajakan Terbaru',
            scenario: 'Menghitung besaran PPh Pasal 21 pegawai tetap sesuai tarif efektif rata-rata (TER) terbaru PP 58/2023.',
            implementation: 'Siswa melampirkan tabel tarif resmi dari Ditjen Pajak ke prompt, lalu menginstruksikan AI: "Berdasarkan tabel TER terlampir, hitung PPh 21 pegawai bergaji Rp7.500.000 dengan status PTKP TK/0. Jelaskan langkah hitungannya."',
            impactNote: 'Hasil potongan pajak tepat tanpa ada kesalahan pasal atau tarif lama.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Uji Komparasi Chain-of-Thought',
          prompt: 'Berikan soal cerita matematika/akuntansi yang agak rumit ke AI dengan dua cara: Cara A (pertanyaan langsung tanpa panduan) dan Cara B (menggunakan instruksi: "Jelaskan langkah demi langkah secara mendalam"). Bandingkan kualitas kedua jawaban.',
          expectedOutput: 'Catatan perbandingan yang menunjukkan bagaimana teknik CoT menghasilkan alur logika yang jauh lebih terstruktur.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Lomba "Detektif Fakta vs Hoaks AI"',
          prompt: 'Guru memberikan teks artikel pendek hasil buatan AI yang di dalamnya diselipkan 3 fakta palsu. Bersama kelompokmu, temukan ketiga kesalahan fakta tersebut menggunakan pencarian dokumen resmi perpustakaan.',
          expectedOutput: 'Daftar ketiga fakta palsu yang ditemukan lengkap dengan bukti sumber koreksi yang sah.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa instruksi "Pikirkan langkah demi langkah" (Chain-of-Thought) sangat efektif meningkatkan akurasi perhitungan AI?',
            answerKey: 'Karena model AI memprediksi kata berikutnya secara sekuensial. Dengan menuliskan langkah perhitungan perantara di awal, langkah-langkah tersebut menjadi token konteks tambahan yang memandu AI menuju hasil kesimpulan akhir yang benar.',
            explanation: 'Sama seperti manusia yang menghitung di kertas buram terlebih dahulu daripada langsung menebak jawaban di kepala.'
          }
        ]
      },
      {
        id: 'c4-4',
        title: 'D. Integrasi Design Thinking 5 Tahap untuk Inovasi Sekolah',
        description: 'Menerapkan 5 siklus berpusat pada manusia: Empathize, Define, Ideate, Prototype, dan Test untuk memecahkan masalah riil sekolah/bengkel.',
        readingMinutes: 14,
        keyConcepts: ['5 Tahap Design Thinking', 'Empathize (Wawancara & Observasi)', 'Define (Rumusan POV Problem)', 'Ideate (Brainstorming Solusi)', 'Prototype (Purwarupa Cepat)', 'Test (Uji Validasi Pengguna)'],
        dailyAnalogy: 'Membuat hadiah ulang tahun untuk sahabat: Kamu tidak langsung membeli barang yang kamu sukai. Kamu bertanya apa yang sedang ia butuhkan dan amati hobinya (Empathize). Kamu menyimpulkan: "Sahabatku butuh tas anti air karena sering kehujanan naik motor" (Define). Kamu memikirkan berbagai model tas (Ideate). Kamu membuat sketsa gambar model tasnya (Prototype). Kamu memperlihatkan sketsa itu padanya untuk meminta pendapat sebelum membelinya (Test). Itulah Design Thinking!',
        coreContent: `### Lima Tahap Metodologi Design Thinking
Design Thinking adalah pendekatan inovasi yang berfokus pada kebutuhan manusia (*human-centered*). Bukan dimulai dari kecanggihan teknologi, melainkan dimulai dari rasa empati mendalam terhadap penderitaan pengguna:

\`\`\`
  [ 1. EMPATHIZE ] ───> [ 2. DEFINE ] ───> [ 3. IDEATE ] ───> [ 4. PROTOTYPE ] ───> [ 5. TEST ]
          ▲                                                                                   │
          └─────────────────────────── Umpan Balik Iterasi ───────────────────────────────────┘
\`\`\`

1. **Tahap 1: Empathize (Membangun Empati)**
   Turun langsung ke lapangan, mengamati perilaku pengguna tanpa menghakimi, dan mewawancarai mereka untuk mendengar keluhan nyata. 
   - *Pertanyaan Kunci:* Apa yang dirasakan, dipikirkan, dilihat, dan dialami oleh pengguna?

2. **Tahap 2: Define (Merumuskan Masalah Inti)**
   Mengumpulkan semua temuan dari lapangan dan merumuskannya menjadi satu pernyataan masalah yang tajam dalam bentuk **Point of View (POV)**:
   > *"[Pengguna Spesifik] membutuhkan [Kebutuhan Nyata] karena [Wawasan/Insight yang Mengejutkan]."*

3. **Tahap 3: Ideate (Mengembangkan Ide Solusi Kreatif)**
   Melakukan sesi curah pendapat (*brainstorming*) tanpa membatasi imajinasi. Kuantitas ide lebih diutamakan daripada kualitas di awal. Jangan buru-buru mengkritik ide yang terdengar aneh. Gunakan pertanyaan pemantik: *"Bagaimana jika kita...? (How Might We?)"*.

4. **Tahap 4: Prototype (Membuat Purwarupa Sederhana)**
   Mengubah ide abstrak menjadi bentuk fisik atau visual yang nyata dengan biaya murah dan cepat (*fail fast, learn fast*). Purwarupa dapat berupa sketsa kertas, maket kardus, wireframe aplikasi di Figma, atau roleplay simulasi alur.

5. **Tahap 5: Test (Menguji ke Pengguna Asli)**
   Membawa purwarupa ke hadapan pengguna yang sebenarnya. Amati bagaimana mereka berinteraksi dengan purwarupa tersebut, dengarkan kritik mereka, lalu lakukan perbaikan berulang (*iterasi*).`,
        practicalTips: [
          'Jangan jatuh cinta pada ide pertamamu; bersiaplah mengubah ide berdasarkan masukan saat tahap Test.',
          'Purwarupa (Prototype) tidak harus langsung berupa aplikasi digital yang sempurna; gambar di atas kertas HVS pun sudah cukup untuk diuji.'
        ],
        majorApplications: [
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Design Thinking: Solusi Rak Kunci Pas Bengkel yang Sering Hilang',
            scenario: 'Alat kunci pas dan obeng di bengkel sekolah sering hilang atau tidak dikembalikan ke tempat semula setelah jam praktik.',
            implementation: '1. Empathize: Mengamati siswa saat selesai praktik yang terburu-buru membersihkan diri.\n2. Define: Siswa butuh cara mengembalikan alat dalam waktu kurang dari 10 detik tanpa harus membaca nomor ukuran baut satu per satu.\n3. Ideate: Ide shadow board (papan berbayang bentuk alat) dengan sensor magnetik.\n4. Prototype: Membuat papan tripleks yang dicat siluet bentuk kunci pas warna merah menyala.\n5. Test: Diterapkan selama 1 minggu, jika ada satu kunci yang belum kembali, siluet merahnya langsung terlihat mencolok dari kejauhan.',
            impactNote: 'Kehilangan alat bengkel berkurang hingga 0% tanpa ada siswa yang terbebani.'
          },
          {
            majorId: 'kuliner',
            majorName: 'Kuliner / Tata Boga',
            fieldCategory: 'Pariwisata',
            caseTitle: 'Design Thinking: Redesain Menu Sehat Kantin untuk Siswa Alergi',
            scenario: 'Siswa yang memiliki alergi susu sapi dan kacang kesulitan memilih jajanan kantin sekolah.',
            implementation: 'Empathize: Wawancara 15 siswa penderita alergi. Define: Siswa alergi butuh label informasi visual yang jelas pada etalase kantin. Ideate: Sistem stiker warna (Bebas Gluten, Bebas Kacang, Bebas Susu). Prototype: Mendesain stiker ikonik sederhana. Test: Uji coba di stan kantin kejujuran sekolah.',
            impactNote: 'Siswa alergi merasa aman, nyaman, dan inklusif saat menikmati istirahat sekolah.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Kanvas 5 Tahap Design Thinking di Lab 5',
          prompt: 'Buka menu **LAB KKA > Lab 5**. Masuk ke bagian **Kanvas Design Thinking**. Pilih tema "Solusi Sampah Sekolah" atau "Solusi Belajar Koding Menyenangkan". Isi kelima kotak tahapan (Empathize s.d. Test) dan simpan draf kanvasmu.',
          expectedOutput: 'Kanvas Design Thinking terisi lengkap dan tersimpan ke portofolio siswa.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok (PjBL): Uji Coba Purwarupa Kertas (Paper Prototype)',
          prompt: 'Buatlah purwarupa antarmuka aplikasi mobile sekolah di atas 4 lembar kertas memo (layar Beranda, Menu Pilihan, Detail Informasi, dan Konfirmasi). Mintalah teman kelompok lain mencoba menekan tombol kertas tersebut seolah-olah menggunakan layar sentuh.',
          expectedOutput: 'Dokumentasi pengujian paper prototype disertai daftar catatan revisi dari pengguna.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa tahap evaluasi dan pengujian (Test) sering kali mengarahkan tim kembali ke tahap Empathize atau Ideate?',
            answerKey: 'Karena Design Thinking adalah proses non-linear dan iteratif (berulang). Ketika pengguna mencoba purwarupa dan merasa kesulitan atau menemukan masalah baru, tim harus berempati kembali untuk memahami akar kesulitan tersebut dan merancang perbaikan ide yang lebih tepat sasaran.',
            explanation: 'Kegagalan pada tahap pengujian awal adalah kabar baik karena mencegah kegagalan yang memakan biaya besar di masa produksi massal.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 5: KREATIVITAS DIGITAL & ETIKA KONTEN
  // ==========================================
  {
    module_id: 'mod-05',
    sequence: 5,
    title: 'Modul 5: Kreativitas dan Etika Produksi Konten',
    description: 'Memahami konsep dan elemen multimedia digital, regulasi Hak Cipta (UU No. 28/2014), penerapan 6 ragam lisensi Creative Commons (CC), serta pengelolaan jejak digital dan etika komunikasi profesional siswa kejuruan.',
    iconName: 'Palette',
    color: 'from-pink-600 to-rose-700',
    curriculumVerificationNote: 'Diselaraskan dengan UU Hak Cipta No. 28 Tahun 2014 dan Standar Lisensi Internasional Creative Commons. Wajib dipraktikkan dalam pembuatan portofolio siswa.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membedakan karakteristik 5 elemen multimedia digital (teks, grafis vektor/bitmap, audio, video, animasi)',
        condition: 'dalam rancangan proyek konten edukasi',
        degree: 'dengan perpaduan komposisi visual yang harmonis',
        text: 'Peserta didik mampu mengombinasikan elemen multimedia digital secara harmonis untuk menyampaikan pesan edukatif.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu menjelaskan perlindungan Hak Moral dan Hak Ekonomi pencipta',
        condition: 'berdasarkan Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta',
        degree: 'secara tepat dan argumentatif',
        text: 'Peserta didik mampu memahami hak cipta atas karya intelektual dan batasan penggunaan wajar (*fair use*).'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu mengidentifikasi dan memilih 6 simbol lisensi Creative Commons (BY, SA, NC, ND)',
        condition: 'saat menerbitkan karya digital orisinal di portofolio',
        degree: 'sesuai izin hak penggunaan yang diinginkan',
        text: 'Peserta didik mampu menerapkan lisensi Creative Commons yang tepat pada aset konten digital buatannya.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu melakukan audit jejak digital pribadi (*digital footprint*) dan membersihkan konten tidak pantas',
        condition: 'dalam rangka persiapan etika karier dan magang PKL industri',
        degree: 'menghasilkan profil media sosial profesional',
        text: 'Peserta didik mampu mengelola reputasi jejak digital positif untuk kesiapan memasuki dunia kerja profesional.'
      }
    ],
    learning_objectives: [
      'Memahami konsep dasar multimedia dan integrasi harmonis 5 elemen digital.',
      'Memahami hukum perlindungan Hak Cipta nasional berdasarkan UU No. 28 Tahun 2014.',
      'Menguasai 6 variasi lisensi Creative Commons (CC) untuk berbagi karya secara legal.',
      'Menemukan dan memanfaatkan aset grafis/audio legal bebas royalti di internet.',
      'Mengelola jejak digital aktif dan pasif guna membangun reputasi profesional di dunia kerja.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang bingung membedakan simbol Creative Commons, gunakan kartu bergambar simbol Orang (BY), Panah Melingkar (SA), Coret Uang (NC), dan Tanda Sama Dengan (ND) untuk latihan tebak lisensi.',
    enrichmentGuide: 'Arahkan siswa mempublikasikan satu karya fotografi atau desain poster edukasi ke Wikimedia Commons dengan menyematkan lisensi CC BY-SA 4.0.',
    reflectionPrompts: [
      'Jika kamu menemukan foto bagus di Google Images tanpa tulisan hak cipta, apakah foto itu otomatis bebas kamu ambil untuk logo jualan tokomu? Mengapa?',
      'Ketikkan namamu di Google Search: Jejak digital apa saja yang muncul pertama kali? Apakah jejak tersebut mencerminkan calon profesional yang kredibel?',
      'Bagaimana lisensi Creative Commons membantu kreator muda saling berkolaborasi tanpa rasa takut saling menuntut di pengadilan?'
    ],
    vocabulary: [
      {
        term: 'Multimedia',
        definition: 'Kombinasi terpadu dari teks, gambar diam (grafis), suara (audio), gambar bergerak (video), dan animasi yang disajikan melalui perangkat elektronik digital.',
        contextExample: 'Video infografis edukasi yang menggabungkan teks penjelasan, animasi ikon, dan latar suara musik.'
      },
      {
        term: 'Grafis Vektor vs Bitmap',
        definition: 'Bitmap tersusun dari kisi piksel yang dapat pecah saat diperbesar (JPEG/PNG), sedangkan Vektor tersusun dari rumus garis matematis yang tidak akan pernah pecah pada resolusi berapapun (SVG/EPS).',
        contextExample: 'Logo perusahaan wajib dibuat dalam format vektor agar tajam saat dicetak di kartu nama maupun baliho raksasa.'
      },
      {
        term: 'Hak Cipta (Copyright)',
        definition: 'Hak eksklusif bagi pencipta yang timbul secara otomatis berdasarkan prinsip deklaratif setelah suatu ciptaan diwujudkan dalam bentuk nyata tanpa mengurangi pembatasan perundang-undangan.',
        contextExample: 'Pencipta lagu berhak melarang pihak lain menggunakan lagunya untuk iklan komersial tanpa izin dan royalti.'
      },
      {
        term: 'Hak Moral vs Hak Ekonomi',
        definition: 'Hak moral melekat abadi pada pencipta untuk mencantumkan namanya, sedangkan Hak ekonomi adalah hak untuk mendapatkan manfaat finansial (royalti) dari ciptaan tersebut.',
        contextExample: 'Meskipun sebuah foto dibeli oleh perusahaan, nama fotografer aslinya tetap tidak boleh dihilangkan secara sepihak.'
      },
      {
        term: 'Creative Commons (CC)',
        definition: 'Organisasi nirlaba global yang menyediakan lisensi hak cipta standar dan gratis untuk mempermudah kreator memberikan izin penggunaan karyanya kepada publik secara fleksibel.',
        contextExample: 'Menyematkan lisensi CC BY pada modul belajar agar guru di seluruh Indonesia bebas menyebarkannya dengan syarat menyebutkan nama penyusun.'
      },
      {
        term: 'Jejak Digital (Digital Footprint)',
        definition: 'Rekam jejak data dan aktivitas yang ditinggalkan seseorang saat menggunakan internet, mencakup komentar media sosial, riwayat pencarian, unggahan foto, dan data registrasi akun.',
        contextExample: 'Manajer HRD perusahaan memeriksa rekam jejak postingan media sosial pelamar kerja sebelum memutuskan menerimanya magang.'
      }
    ],
    chapters: [
      {
        id: 'c5-1',
        title: 'A. Konsep Dasar & Elemen Multimedia Digital',
        description: 'Mengenal karakteristik 5 elemen multimedia (teks, grafis bitmap/vektor, audio, video, animasi) dan prinsip komposisi visual yang harmonis.',
        readingMinutes: 10,
        keyConcepts: ['5 Elemen Multimedia', 'Grafis Bitmap vs Vektor', 'Format Audio (WAV vs MP3)', 'Framerate Video (FPS)', 'Hierarki Visual'],
        dailyAnalogy: 'Membuat konten multimedia persis seperti menyajikan hidangan es buah campur. Ada potongan buah segar (teks utama), es serut (grafis visual), sirup manis (latar musik audio), susu kental manis (animasi transisi), dan mangkok saji yang estetik (tata letak video). Jika sirupnya kebanyakan (audio terlalu berisik), rasa buahnya tidak akan terasa lagi!',
        coreContent: `### Lima Elemen Multimedia Digital
Konten digital modern tidak lagi berupa teks polos. Era multimedia menggabungkan 5 elemen sensorik:
1. **Teks:** Elemen paling dasar untuk menyampaikan pesan informasi faktual yang presisi. Perhatikan keterbacaan (*readability*) dan pemilihan tipografi font yang sesuai konteks.
2. **Grafis (Gambar):**
   - *Bitmap (Raster):* Terdiri dari susunan titik piksel. Contoh format: JPG (kompresi foto), PNG (mendukung latar belakang transparan). Jika di-*zoom*, gambar akan pecah buram (*pixelated*).
   - *Vektor:* Terdiri dari rumus garis matematis. Contoh format: SVG, AI, EPS. Dapat diperbesar hingga ukuran gedung tanpa kehilangan ketajaman sama sekali. Sangat ideal untuk logo dan ikon.
3. **Audio:** Mengatur suasana emosional (*ambience*) penonton. Format audio tanpa kompresi (WAV) memiliki kualitas studio tinggi tetapi ukuran file besar, sedangkan format MP3 dikompresi agar hemat memori.
4. **Video:** Rangkaian gambar bergerak cepat disertai sinkronisasi suara. Kehalusan gerak diukur dengan **Frame per Second (FPS)**. Standar sinematik menggunakan 24 FPS, sedangkan video animasi dan gim menggunakan 60 FPS.
5. **Animasi:** Ilusi gerakan yang diciptakan dari perubahan visual bertahap. Memberi daya tarik visual dan memperjelas proses yang tidak bisa dilihat mata telanjang (misal: animasi aliran darah di jantung).`,
        practicalTips: [
          'Gunakan maksimal 2 jenis font dalam satu karya desain (satu font tegas untuk judul, satu font bersih untuk teks isi).',
          'Pastikan volume musik latar belakang (*backsound*) tidak melebihi 20% agar tidak menenggelamkan suara narasi vokal.'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Optimasi Aset Multimedia untuk Konten Promosi Media Sosial',
            scenario: 'Membuat video promosi produk kriya lokal berdurasi 30 detik untuk feed Instagram dan TikTok.',
            implementation: 'Menggunakan teks dinamis (*kinetic typography*), ilustrasi logo berformat vektor SVG transparan, video rasio vertikal 9:16 (1080x1920 piksel pada 60 FPS), dan audio berlisensi komersial bebas klaim royalti.',
            impactNote: 'Video tajam, tidak pecah saat diunggah, dan akun bebas dari ancaman mute/takedown audio.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Identifikasi Format Aset di Komputermu',
          prompt: 'Periksa 5 file di komputermu (1 file dokumen, 1 file gambar foto, 1 file gambar logo, 1 file rekaman suara, dan 1 file video). Catat format ekstensi (.jpg, .png, .mp3, dll.) dan ukuran filenya ke dalam tabel catatan.',
          expectedOutput: 'Tabel inventaris 5 format file media digital beserta perbandingan ukuran memori.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Uji Komparasi Bitmap vs Vektor',
          prompt: 'Unduh sebuah logo dalam format PNG dan SVG. Lakukan pembesaran zoom hingga 500% di aplikasi pengolah grafis. Amati dan diskusikan perbedaannya bersama teman kelompokmu.',
          expectedOutput: 'Tangkapan layar komparasi ketajaman tepi garis piksel vs kurva vektor.'
        },
        selfCheckQuestions: [
          {
            question: 'Kapan seorang desainer sebaiknya memilih format PNG daripada format JPG?',
            answerKey: 'Saat gambar membutuhkan latar belakang transparan (seperti logo atau stiker grafis) atau saat gambar berisi teks tajam dan diagram yang tidak boleh mengalami penurunan kualitas buram akibat kompresi.',
            explanation: 'JPG menggunakan kompresi lossy yang membuang detail halus demi menghemat ukuran file foto.'
          }
        ]
      },
      {
        id: 'c5-2',
        title: 'B. Perlindungan Hak Cipta & UU No. 28 Tahun 2014',
        description: 'Prinsip deklaratif hak cipta, hak moral vs hak ekonomi, masa berlaku perlindungan, serta batasan penggunaan wajar dalam pendidikan.',
        readingMinutes: 10,
        keyConcepts: ['UU Hak Cipta No 28/2014', 'Prinsip Deklaratif', 'Hak Moral Pencipta', 'Hak Ekonomi (Royalti)', 'Penggunaan Wajar (Fair Use)'],
        dailyAnalogy: 'Hak Cipta sama seperti sertifikat kepemilikan sebidang tanah warisan orang tuamu. Orang lain boleh melintasi jalan setapak di tanah itu jika diizinkan (penggunaan wajar), tetapi orang lain sama sekali tidak boleh mendirikan ruko dan menyewakannya untuk mencari keuntungan tanpa izin tertulis dan bagi hasil denganmu!',
        coreContent: `### 1. Landasan Hukum Hak Cipta di Indonesia
Di Indonesia, karya cipta dilindungi secara kuat melalui **Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta**.
- **Prinsip Deklaratif Otomatis:** Hak Cipta timbul secara seketika (*otomatis*) saat sebuah karya diwujudkan dalam bentuk nyata (misal: saat tulisan selesai diketik, foto dijepret kamera, atau kode program disimpan). Pencipta **tidak wajib** mendaftarkan karyanya ke kementerian agar dilindungi hukum, meskipun pendaftaran resmi ke DJKI Kemenkumham sangat dianjurkan sebagai bukti otentik di pengadilan.

### 2. Membedakan Dua Sayap Hak Cipta
1. **Hak Moral:** Hak yang melekat abadi pada diri pencipta untuk tetap dicantumkan namanya pada karya ciptaannya, serta melarang orang lain mengubah, memotong, atau merusak karyanya yang dapat merendahkan martabat pencipta. Hak moral tidak dapat dipindahkan ke orang lain selama pencipta masih hidup.
2. **Hak Ekonomi:** Hak eksklusif pencipta untuk mendapatkan manfaat finansial atas karyanya, seperti hak penerbitan, penggandaan, penerjemahan, pengadaptasian, dan penyewaan karya.

### 3. Batasan Penggunaan Wajar dalam Pendidikan (Fair Use)
Undang-undang memberikan kelonggaran: Mengutip sebagian kecil karya orang lain **tidak dianggap pelanggaran hak cipta** dengan syarat:
- Digunakan semata-mata untuk keperluan pendidikan, penelitian, penulisan karya ilmiah, atau kritik ulasan.
- Sumber aslinya disebutkan atau dicantumkan secara lengkap dan jelas.
- Tidak merugikan kepentingan ekonomi yang wajar dari pencipta (misal: memfotokopi seluruh buku teks sekolah dari halaman pertama sampai terakhir untuk dijual kembali adalah **tindakan ilegal pelanggaran hukum**).`,
        practicalTips: [
          'Selalu cantumkan nama fotografer atau sumber tautan di bawah gambar presentasimu.',
          'Jangan gunakan lagu komersial berhak cipta untuk video promosi bisnis berbayar tanpa lisensi resmi.'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Pencegahan Pelanggaran Lisensi Tipografi Font Komersial',
            scenario: 'Siswa mendesain kemasan kopi UMKM menggunakan font yang diunduh dari situs penyedia font gratis.',
            implementation: 'Siswa memeriksa file readme.txt font tersebut: Tertulis lisensi "Free for Personal Use Only". Siswa segera mengganti font tersebut dengan font berlisensi "Open Font License (OFL)" atau membeli lisensi komersial seharga Rp150.000.',
            impactNote: 'UMKM terhindar dari somasi tuntutan ganti rugi pelanggaran hak cipta senilai puluhan juta rupiah.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Identifikasi Pelanggaran Hak Cipta di Sekitar',
          prompt: 'Tuliskan 2 contoh tindakan di lingkungan sekitarmu yang tanpa disadari sebenarnya melanggar UU Hak Cipta No. 28/2014 (misal: membajak software, membagikan PDF buku bajakan di grup chat, atau memakai logo orang lain). Berikan alternatif solusi legalnya.',
          expectedOutput: 'Refleksi analisis hukum singkat mengenai kesadaran hak kekayaan intelektual.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Analisis Batasan Fair Use pada Tugas Video Siswa',
          prompt: 'Diskusikan bersama kelompok: Sebuah kelompok siswa membuat film pendek tugas sekolah dan menggunakan lagu pop terkenal sebagai soundtrack. Apakah hal ini termasuk Fair Use? Bagaimana jika video itu diunggah ke YouTube dan diaktifkan monetisasi iklannya?',
          expectedOutput: 'Paparan pendapat hukum kelompok berdasarkan pasal-pasal UU Hak Cipta No. 28/2014.'
        },
        selfCheckQuestions: [
          {
            question: 'Apakah seorang siswa boleh dituntut melanggar hak cipta jika ia mengunduh foto orang lain dari internet dan mengaku bahwa foto tersebut adalah hasil jepretan kameranya sendiri?',
            answerKey: 'Sangat boleh dan melanggar hukum. Tindakan tersebut melanggar Hak Moral pencipta asli (karena menghilangkan nama pencipta dan mengklaim secara curang/plagiarisme), meskipun foto tersebut tidak dijual untuk mencari uang.',
            explanation: 'Hak moral melindungi nama baik dan atribusi karya cipta pencipta asli.'
          }
        ]
      },
      {
        id: 'c5-3',
        title: 'C. 6 Ragam Lisensi Creative Commons (CC)',
        description: 'Memahami simbol atribusi (BY), berbagi serupa (SA), non-komersial (NC), tanpa turunan (ND), dan cara memilih lisensi untuk portofolio karya.',
        readingMinutes: 12,
        keyConcepts: ['Simbol Atribusi (BY)', 'Simbol Non-Komersial (NC)', 'Simbol Berbagi Serupa (SA)', 'Simbol Tanpa Turunan (ND)', 'CC0 (Public Domain)'],
        dailyAnalogy: 'Lisensi Creative Commons seperti rambu izin masuk rumah: Pemilik rumah menempelkan stiker di pintu gerbang: "Boleh masuk dan memetik buah mangga, asalkan ucapkan terima kasih (BY); jangan dijual ke pasar (NC); dan bagikan mangga itu ke tetangga dengan cara yang sama (SA)". Siapapun yang membaca stiker itu langsung paham aturannya tanpa perlu mengirim surat izin resmi yang memakan waktu!',
        coreContent: `### Enam Kombinasi Lisensi Creative Commons
Creative Commons (CC) menciptakan jembatan antara perlindungan kaku *"All Rights Reserved"* dengan kebebasan total *"Public Domain"*. Kreator dapat memilih 4 elemen dasar untuk membentuk 6 jenis lisensi resmi:

1. **CC BY (Attribution / Atribusi):**
   Lisensi paling bebas. Pihak lain diizinkan mendistribusikan, memodifikasi, dan membuat karya turunan, bahkan untuk tujuan komersial, dengan satu syarat mutlak: **wajib mencantumkan nama pencipta asli**.

2. **CC BY-SA (Attribution-ShareAlike / Berbagi Serupa):**
   Boleh diubah dan digunakan untuk komersial, asalkan mencantumkan nama pencipta asli DAN karya baru turunannya **wajib disebarluaskan dengan lisensi yang persis sama**. Inilah lisensi yang digunakan oleh Wikipedia.

3. **CC BY-ND (Attribution-NoDerivs / Tanpa Turunan):**
   Boleh disebarluaskan kembali bahkan untuk tujuan komersial, dengan syarat mencantumkan nama pencipta DAN **karya tidak boleh diubah, dipotong, atau dimodifikasi sedikitpun** (harus utuh dalam bentuk aslinya).

4. **CC BY-NC (Attribution-NonCommercial / Non-Komersial):**
   Pihak lain bebas memodifikasi dan mengembangkan karya, dengan syarat mencantumkan nama pencipta dan **karya tidak boleh digunakan untuk mencari keuntungan uang/komersial**.

5. **CC BY-NC-SA (Attribution-NonCommercial-ShareAlike):**
   Boleh dimodifikasi untuk tujuan non-komersial, wajib mencantumkan nama pencipta, dan karya turunan harus berlisensi serupa. Sangat populer untuk materi modul belajar sekolah.

6. **CC BY-NC-ND (Attribution-NonCommercial-NoDerivs):**
   Lisensi paling ketat di keluarga CC. Pihak lain hanya boleh mengunduh dan membagikan karya secara utuh, mencantumkan nama pencipta, tidak boleh mengubah isi karya, dan tidak boleh untuk tujuan komersial.

- **CC0 (Creative Commons Zero / Domain Publik):**
  Pencipta melepaskan seluruh hak ciptanya ke publik. Siapapun bebas menggunakannya untuk tujuan apapun tanpa kewajiban mencantumkan nama.`,
        practicalTips: [
          'Situs seperti Unsplash, Pexels, Pixabay, dan Freesound menyediakan aset berlisensi bebas royalti yang aman dipakai siswa.',
          'Format penulisan atribusi ideal: "[Judul Karya]" oleh [Nama Pencipta], di bawah lisensi [Nama Lisensi CC + Tautan].'
        ],
        majorApplications: [
          {
            majorId: 'dkv',
            majorName: 'Desain Komunikasi Visual',
            fieldCategory: 'Seni & Ekonomi Kreatif',
            caseTitle: 'Penerbitan Portofolio Behance Siswa dengan Lisensi CC BY-NC-ND',
            scenario: 'Siswa memajang karya ilustrasi komik digital orisinal di internet tetapi tidak ingin gambarnya dijiplak atau dijual orang lain.',
            implementation: 'Siswa menyematkan lencana lisensi CC BY-NC-ND pada bagian kaki halaman portofolio, disertai tautan ke legal code Creative Commons.',
            impactNote: 'Karya siswa aman dipublikasikan secara global untuk menarik calon klien magang tanpa takut dicuri.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Berburu Aset Legal Bebas Royalti',
          prompt: 'Carilah 1 gambar foto bertema "teknologi" di Wikimedia Commons dan 1 efek suara audio di Freesound. Tuliskan nama pencipta, tautan sumber, dan jenis lisensi Creative Commons yang tertera pada kedua aset tersebut.',
          expectedOutput: 'Tabel atribusi legal 2 aset media yang siap disisipkan ke tugas presentasi.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Proyek Poster Edukasi Lisensi CC',
          prompt: 'Rancang poster infografis kreatif ukuran A3 bersama kelompokmu yang mengampanyekan arti dari 6 lisensi Creative Commons agar siswa di sekolah paham cara menghargai karya digital.',
          expectedOutput: 'Karya poster digital edukatif yang memadukan visual menarik dan penjelasan ringkas.'
        },
        selfCheckQuestions: [
          {
            question: 'Jika kamu memodifikasi sebuah gambar yang berlisensi CC BY-SA, apakah kamu boleh menjual karya barumu itu dengan lisensi komersial tertutup?',
            answerKey: 'Tidak boleh sama sekali. Simbol ShareAlike (SA) mewajibkan bahwa setiap karya turunan atau hasil modifikasi harus dibagikan kembali dengan lisensi yang persis sama (tetap terbuka dan berlisensi CC BY-SA).',
            explanation: 'Prinsip ShareAlike menjaga agar karya tetap menjadi milik bersama masyarakat (*copyleft*).'
          }
        ]
      },
      {
        id: 'c5-4',
        title: 'D. Keamanan Jejak Digital & Reputasi Profesional',
        description: 'Membedakan jejak digital aktif dan pasif, bahaya doxxing dan oversharing, serta membangun personal branding menyambut magang industri PKL.',
        readingMinutes: 10,
        keyConcepts: ['Jejak Digital Aktif vs Pasif', 'Oversharing & Doxxing', 'Rekam Jejak Abadi Internet', 'LinkedIn & Portofolio Profesional', 'Kesiapan Magang PKL'],
        dailyAnalogy: 'Jejak digital persis seperti jejak kaki di atas adukan semen basah. Saat kamu menginjaknya, terasa empuk dan sepele. Namun beberapa menit kemudian, semen itu mengering dan membeku menjadi batu beton permanen. Siapapun yang lewat 10 tahun kemudian akan tetap melihat bekas jejak kakimu yang tidak bisa dihapus lagi!',
        coreContent: `### 1. Dua Jenis Jejak Digital (Digital Footprint)
Setiap detik saat kita terhubung ke internet, kita meninggalkan dua jenis jejak:
- **Jejak Digital Aktif:** Data yang sengaja kita unggah atau tinggalkan secara sadar. Contoh: postingan foto di media sosial, komentar di video YouTube, mengisi formulir online, atau mengirim tweet kemarahan.
- **Jejak Digital Pasif:** Data yang dikumpulkan sistem secara diam-diam tanpa kita sadari langsung. Contoh: alamat IP perangkat, riwayat pencarian peramban (*cookies*), perkiraan lokasi geolokasi GPS, dan durasi berapa detik kita memandangi foto tertentu di feed Instagram.

### 2. Bahaya Nyata: Oversharing dan Doxxing
- **Oversharing (Berbagi Berlebihan):** Kebiasaan mengunggah foto kartu identitas, tiket pesawat (yang memiliki kode QR boarding pass), lokasi rumah secara langsung (*live location*), atau keluhan kasar tentang tempat magang/sekolah.
- **Doxxing:** Tindakan jahat menyebarkan informasi pribadi seseorang secara publik di media sosial dengan niat mengajak orang lain untuk melakukan perundungan massal (*cyberbullying*) atau penipuan perbankan.

### 3. Membangun Portofolio Digital Profesional Siswa SMK
Dunia industri modern (khususnya untuk seleksi magang PKL dan rekrutmen kerja lulusan SMK) rutin melakukan pemeriksaan latar belakang digital (*digital background check*):
1. **Bersihkan Akun Masa Lalu:** Hapus postingan lama yang bernada kebencian, kata-kata kotor, atau konten perundungan.
2. **Kembangkan Portofolio Nyata:** Gunakan platform profesional seperti **GitHub** (untuk jurusan IT/RPL), **Behance/Instagram Bisnis** (untuk DKV), atau **LinkedIn** (untuk seluruh jurusan).
3. **Pamerkan Proses Belajar:** Ceritakan proyek apa yang sedang kamu selesaikan di bengkel atau lab sekolah. Cerita tentang perjuangan belajar dan problem-solving sangat disukai oleh pimpinan perusahaan mitra!`,
        practicalTips: [
          'Jangan pernah membagikan foto tanda tangan, nomor rekening bank, dan NIK di media sosial.',
          'Terapkan "Ujian Nenek": Jika kamu malu bila postinganmu dibaca oleh nenekmu atau calon bos tempat kerjamu, jangan pernah unggah postingan itu!'
        ],
        majorApplications: [
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Etika Komunikasi Email dan Jejak Digital Staf Administrasi',
            scenario: 'Siswa magang membalas email komplain pelanggan perusahaan dengan nada emosional di media sosial pribadi.',
            implementation: 'Menjelaskan batas kerahasiaan perusahaan (Non-Disclosure Agreement) dan bagaimana keluhan di media sosial dapat merusak reputasi perusahaan serta menggugurkan sertifikat magang siswa.',
            impactNote: 'Siswa memiliki etika komunikasi profesional dan menjaga nama baik sekolah di mata DUDI.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Audit Jejak Digital Pribadi (Googling Diri Sendiri)',
          prompt: 'Buka peramban dalam mode Penyamaran (Incognito). Ketikkan nama lengkapmu di Google Search dan Google Images. Catat apa saja yang muncul: Apakah ada akun media sosial lamamu? Apakah ada foto atau data sensitif yang seharusnya tidak terbuka ke publik? Lakukan tindakan pembersihan jika perlu.',
          expectedOutput: 'Laporan refleksi hasil audit jejak digital pribadi dan rencana perbaikan profil akun.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Pembuatan Profil LinkedIn & Portofolio Siswa SMK',
          prompt: 'Bersama kelompokmu, saling ulas (*peer review*) draf profil portofolio profesional (foto profil formal, ringkasan keahlian jurusan, dan daftar proyek praktik sekolah yang pernah diselesaikan).',
          expectedOutput: 'Draf portofolio digital yang memenuhi standar industri dan siap dilampirkan ke berkas lamaran magang PKL.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa menghapus sebuah foto kontroversial di media sosial belum tentu menghilangkan jejak digital foto tersebut secara permanen?',
            answerKey: 'Karena dalam hitungan detik foto tersebut bisa saja sudah disimpan (*screenshot*) oleh orang lain, diarsipkan otomatis oleh mesin perayap internet (seperti Wayback Machine), atau masih tersimpan di server cadangan platform media sosial tersebut.',
            explanation: 'Prinsip utama internet: apa yang sudah diunggah ke internet harus dianggap abadi.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODUL 6: PENGELOLAAN INFORMASI DIGITAL & BASIS DATA
  // ==========================================
  {
    module_id: 'mod-06',
    sequence: 6,
    title: 'Modul 6: Pengelolaan Informasi Digital',
    description: 'Memahami transformasi data menjadi kebijakan melalui Piramida DIKW, karakteristik sistem basis data relasional (RDBMS) vs spreadsheet, perancangan Primary Key & Foreign Key, eksekusi perintah SQL dasar di phpMyAdmin, serta analisis data dengan Pivot Table.',
    iconName: 'Database',
    color: 'from-emerald-600 to-teal-700',
    curriculumVerificationNote: 'Diselaraskan dengan Capaian Pembelajaran Pengelolaan Informasi Digital Fase E Kemendikdasmen 2025. Sesuai Buku Teks Resmi Bab 6 hal. 235-285.',
    measurableObjectives: [
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu membedakan tingkatan Data, Informasi, Pengetahuan (Knowledge), dan Kebijaksanaan (Wisdom)',
        condition: 'diberikan studi kasus transaksi sekolah pada Piramida DIKW',
        degree: 'secara runtut dan tepat',
        text: 'Peserta didik mampu menguraikan hierarki transformasi data menjadi kebijakan strategis melalui model Piramida DIKW.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu merancang struktur tabel relasional yang memiliki Primary Key dan Foreign Key',
        condition: 'untuk menghubungkan tabel induk dan transaksi',
        degree: 'tanpa terjadi redundansi data dan menjaga integritas referensial',
        text: 'Peserta didik mampu merancang struktur basis data relasional dengan kunci primer dan kunci asing yang valid.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu mengetikkan dan mengeksekusi sintaks perintah SQL dasar (CREATE, INSERT, SELECT WHERE, ORDER BY, UPDATE)',
        condition: 'di simulator SQL Studio Lab 6',
        degree: 'menghasilkan keluaran data yang sesuai spesifikasi permintaan',
        text: 'Peserta didik mampu menuliskan query SQL DDL dan DML standar pada sistem basis data relasional.'
      },
      {
        audience: 'Peserta didik kelas X SMK semua jurusan',
        behavior: 'mampu mengolah kumpulan data lembar sebar dan menyusun analisis Pivot Table dua dimensi',
        condition: 'diberikan tabel data nilai dan kehadiran peserta didik',
        degree: 'dengan formula agregasi yang akurat',
        text: 'Peserta didik mampu menggunakan fitur Pivot Table pada spreadsheet untuk merangkum dan menganalisis kumpulan data besar.'
      }
    ],
    learning_objectives: [
      'Memahami hierarki pemrosesan informasi dari Data, Informasi, Pengetahuan, hingga Kebijaksanaan (Piramida DIKW).',
      'Membandingkan karakteristik spreadsheet sederhana dengan Sistem Manajemen Basis Data Relasional (RDBMS).',
      'Merancang tabel data terstruktur: Entitas, Atribut, Field, Record, Primary Key unik, Foreign Key, dan Kardinalitas Relasi.',
      'Mengeksekusi perintah SQL DDL (CREATE DATABASE/TABLE) dan DML (INSERT, SELECT WHERE, ORDER BY, UPDATE) di lingkungan phpMyAdmin.',
      'Mengolah data numerik spreadsheet menggunakan rumus agregasi (AVERAGE, MAX, MIN, COUNTIF) dan visualisasi Pivot Table.'
    ],
    status: 'active',
    remedialGuide: 'Bagi siswa yang kesulitan memahami relasi Primary Key dan Foreign Key, gunakan analogi Kartu Keluarga (KK): Nomor KK di lembar induk adalah Primary Key, sedangkan Nomor KK yang tertulis di biodata raport anak adalah Foreign Key.',
    enrichmentGuide: 'Arahkan siswa mempraktikkan perintah SQL JOIN dua tabel (SELECT siswa.nama, buku.judul FROM peminjaman JOIN siswa...) di Lab 6 untuk menampilkan nama siswa peminjam secara dinamis.',
    reflectionPrompts: [
      'Kapan sebuah toko atau kantor sekolah cukup menggunakan Microsoft Excel / Google Sheets, dan kapan mereka mutlak wajib beralih ke Database MySQL?',
      'Apa yang akan terjadi jika tabel peminjaman perpustakaan tidak memiliki Foreign Key yang terhubung ke tabel siswa?',
      'Bagaimana fitur Pivot Table membantu kepala sekolah atau manajer membuat keputusan cepat tanpa harus menghitung baris data satu demi satu?'
    ],
    vocabulary: [
      {
        term: 'Piramida DIKW (Data, Information, Knowledge, Wisdom)',
        definition: 'Kerangka konseptual hierarki yang menunjukkan bagaimana data mentah yang tidak berkonteks diproses menjadi informasi bermakna, dipahami menjadi pengetahuan aplikatif, dan dievaluasi menjadi keputusan bijaksana.',
        contextExample: 'Angka 38.5 (Data) -> Suhu badan 38.5°C (Informasi) -> Gejala demam infeksi (Knowledge) -> Memberikan resep penurun panas dan istirahat (Wisdom).'
      },
      {
        term: 'RDBMS (Relational Database Management System)',
        definition: 'Perangkat lunak pengelola basis data yang menyimpan data dalam tabel-tabel dua dimensi yang saling berelasi melalui kunci relasi khusus.',
        contextExample: 'Sistem basis data seperti MySQL, PostgreSQL, dan MariaDB yang dikelola melalui phpMyAdmin.'
      },
      {
        term: 'Primary Key (Kunci Primer)',
        definition: 'Atribut unik dalam tabel basis data yang nilainya tidak boleh sama antara satu baris data dengan baris data lainnya dan tidak boleh bernilai kosong (NOT NULL).',
        contextExample: 'Nomor Induk Siswa Nasional (NISN) atau Nomor Induk Kependudukan (NIK).'
      },
      {
        term: 'Foreign Key (Kunci Tamu / Asing)',
        definition: 'Atribut dalam tabel transaksi atau anak yang merujuk pada Primary Key tabel induk lain untuk menghubungkan kedua data secara konsisten.',
        contextExample: 'Kolom id_siswa yang ada di tabel peminjaman_buku merujuk ke tabel siswa.'
      },
      {
        term: 'Kardinalitas Relasi (Cardinality)',
        definition: 'Hubungan jumlah keterikatan antara baris data di satu tabel dengan baris data di tabel lain: Satu ke Satu (1:1), Satu ke Banyak (1:N), atau Banyak ke Banyak (N:M).',
        contextExample: 'Satu kelas memiliki banyak siswa (1:N), satu siswa hanya memiliki satu wali kelas (1:1).'
      },
      {
        term: 'SQL (Structured Query Language)',
        definition: 'Bahasa terstandar internasional yang digunakan untuk membuat, mengelola, mengubah, dan mencari data di dalam basis data relasional.',
        contextExample: 'Perintah SELECT * FROM buku WHERE tahun >= 2024.'
      },
      {
        term: 'Pivot Table',
        definition: 'Alat pengolahan data interaktif pada lembar sebar (spreadsheet) untuk merangkum, mengelompokkan, dan menganalisis kumpulan data tabular yang besar secara instan.',
        contextExample: 'Menampilkan rekapitulasi rata-rata nilai matematika berdasarkan kolom jurusan dan baris jenis kelamin.'
      }
    ],
    chapters: [
      {
        id: 'c6-1',
        title: 'A. Data, Informasi & Piramida DIKW',
        description: 'Memahami bagaimana data mentah ditransformasikan menjadi informasi berkonteks, pengetahuan aplikatif, hingga keputusan bijaksana.',
        readingMinutes: 10,
        keyConcepts: ['Data Mentah vs Informasi Terolah', 'Piramida DIKW (Data-Info-Knowledge-Wisdom)', 'Data Terstruktur vs Tidak Terstruktur', 'Pengambilan Keputusan Berbasis Fakta'],
        dailyAnalogy: '1) Data: Kamu melihat angka acak "120" di secarik kertas; 2) Informasi: Guru memberi tahu bahwa angka itu adalah "Kecepatan mobil 120 km/jam di jalan tol"; 3) Pengetahuan (Knowledge): Kamu tahu bahwa batas kecepatan maksimal jalan tol hanya 100 km/jam, sehingga mobil itu melanggar aturan dan berisiko kecelakaan; 4) Kebijaksanaan (Wisdom): Polisi lalu lintas memasang kamera tilang elektronik (ETLE) di ruas rawan tersebut untuk mendisiplinkan pengemudi!',
        coreContent: `### Piramida DIKW (Data - Information - Knowledge - Wisdom)
Dalam era digital, kita dibanjiri oleh data mentah. Namun, data tidak akan ada artinya jika tidak dikelola melalui hierarki **Piramida DIKW**:

\`\`\`
          /\\
         /  \\      [ 4. WISDOM ]      ──> Mengapa harus dilakukan? (Keputusan Bijak)
        /____\\
       /      \\    [ 3. KNOWLEDGE ]   ──> Bagaimana polanya? (Pemahaman Konseptual)
      /________\\
     /          \\  [ 2. INFORMATION ] ──> Siapa, apa, kapan, di mana? (Data Berkonteks)
    /____________\\
   /              \\ [ 1. DATA ]        ──> Fakta mentah tanpa arti (Simbol / Angka)
  /________________\\
\`\`\`

1. **Data (Tingkat 1 - Fakta Mentah):**
   Fakta, angka, teks, atau rekaman sinyal mentah yang belum diolah dan belum memiliki konteks arti. Contoh: \`[70, 75, 90, 85, 60]\`.

2. **Information (Tingkat 2 - Data Berkonteks):**
   Data yang telah diberi label, dikelompokkan, dan dihitung sehingga menjawab pertanyaan *Who, What, When, Where*. Contoh: *"Daftar nilai ujian KKA kelas X DKV 1 dengan rata-rata 76.0 pada tanggal 15 Oktober 2026."*

3. **Knowledge (Tingkat 3 - Pengetahuan Aplikatif):**
   Informasi yang dihubungkan dengan pengalaman dan pemahaman logika untuk menjawab pertanyaan *How*. Contoh: *"Siswa yang nilainya di bawah 70 ternyata adalah siswa yang sering tidak hadir di hari praktikum lab."*

4. **Wisdom (Tingkat 4 - Kebijaksanaan Strategis):**
   Tingkatan tertinggi di mana pengetahuan dipadukan dengan nilai etika, visi jangka panjang, dan penilaian moral untuk menjawab pertanyaan *Why*. Contoh: *"Wali kelas merancang program tutor sebaya (peer tutoring) dan modul remediasi interaktif agar semua siswa mencapai standar kelulusan tanpa ada yang merasa dikucilkan."*`,
        practicalTips: [
          'Jangan pernah mengambil keputusan besar hanya berdasarkan "Data Mentah" tanpa mengolahnya menjadi "Informasi" yang valid.',
          'Data yang terstruktur (dalam baris dan kolom tabel) jauh lebih mudah diproses komputer daripada data tidak terstruktur (seperti rekaman suara obrolan).'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Piramida DIKW pada Manajemen Kas Toko Ritel Sekolah',
            scenario: 'Mengolah tumpukan struk kasir toko sekolah menjadi kebijakan pengadaan barang bulan depan.',
            implementation: 'Data: Angka nominal kuitansi. Informasi: Rekap omzet penjualan per kategori jajanan. Knowledge: Penjualan jus buah melonjak 300% saat musim panas. Wisdom: Menambah kuota pemesanan buah segar dan mengurangi stok minuman manis berenergi demi kesehatan siswa.',
            impactNote: 'Keuntungan toko naik 25% sekaligus mendukung program gizi sehat sekolah.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Studi Kasus Piramida DIKW Sekolah',
          prompt: 'Pilihlah salah satu data di sekolahmu (misal: data presensi keterlambatan siswa atau data peminjaman buku perpustakaan). Tuliskan tahapannya mulai dari Data -> Informasi -> Pengetahuan -> Kebijaksanaan di buku catatanmu.',
          expectedOutput: 'Bagan Piramida DIKW terisi 4 tingkat yang realistis dan solutif.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Analisis Data Penjualan Kantin Menuju Kebijakan Kantin Sehat',
          prompt: 'Diberikan data fiktif 100 transaksi kantin sekolah: Olah data tersebut bersama kelompokmu menjadi laporan informasi, temukan pengetahuannya, dan rumuskan rekomendasi kebijakan (Wisdom) untuk disampaikan ke pengelola kantin.',
          expectedOutput: 'Laporan presentasi ringkas 1 halaman berisi rekomendasi strategis kantin sehat.'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa komputer super cepat sekalipun belum bisa mencapai tingkat "Wisdom" (Kebijaksanaan) secara mandiri?',
            answerKey: 'Karena Wisdom membutuhkan kesadaran moral, empati kemanusiaan, pemahaman budaya, dan pertimbangan etika jangka panjang yang hanya dimiliki oleh nurani manusia, sedangkan komputer hanya memproses kalkulasi probabilitas data matematis.',
            explanation: 'Itulah sebabnya keputusan akhir dalam peradilan, kedokteran, dan pendidikan tetap mutlak di tangan manusia.'
          }
        ]
      },
      {
        id: 'c6-2',
        title: 'B. Jenis-Jenis Basis Data & Konsep Relasional',
        description: 'Karakteristik RDBMS, NoSQL dokumen, Cloud database, dan teknologi terdistribusi (replikasi, mirroring, data warehouse).',
        readingMinutes: 10,
        keyConcepts: ['RDBMS Relasional', 'Basis Data NoSQL Dokumen', 'Cloud Database', 'Prinsip Integritas ACID', 'Multi-User Concurrency'],
        dailyAnalogy: 'Menyimpan data di spreadsheet seperti menaruh catatan bon di laci meja kamarmu: bagus jika hanya kamu yang membaca. Namun jika ada 50 karyawan toko yang ingin membuka dan mencatat bon di laci itu secara bersamaan, laci itu akan rusak dan berkasnya berantakan! RDBMS seperti brankas digital bank sentral: 1.000 teller kasir bisa mengakses data nasabah bersamaan secara aman dalam hitungan detik tanpa pernah ada saldo yang tertukar!',
        coreContent: `### 1. Keterbatasan Spreadsheet vs. Keunggulan RDBMS
Banyak pemula menggunakan Microsoft Excel atau Google Sheets untuk segala hal. Namun saat data membesar, kelemahan spreadsheet mulai terlihat:
- **Redundansi Data:** Nama siswa dan alamat harus diketik ulang berulang kali di setiap sheet transaksi, sehingga rawan salah ketik.
- **Benturan Pengeditan (Race Condition):** Jika dua guru mengedit nilai siswa yang sama secara bersamaan di jaringan lambat, salah satu nilai akan tertimpa dan hilang.
- **Kapasitas Terbatas:** Spreadsheet akan melambat drastis jika baris datanya melebihi 100.000 baris.

Sebaliknya, **RDBMS (Relational Database Management System)** dirancang dengan standar **ACID (Atomicity, Consistency, Isolation, Durability)**:
- Mampu melayani ribuan pengguna (*multi-user concurrent access*) secara bersamaan tanpa benturan.
- Mencegah duplikasi data melalui pemisahan tabel induk dan tabel transaksi.
- Mendukung sistem keamanan hak akses (Role-Based Access Control) bertingkat.

### 2. Kategori Basis Data Modern
1. **RDBMS (Relasional SQL):** Menyimpan data dalam bentuk tabel dua dimensi (baris dan kolom) yang memiliki relasi ketat. Contoh: MySQL, MariaDB, PostgreSQL, Oracle.
2. **NoSQL (Non-Relasional / Dokumen):** Menyimpan data dalam format dokumen fleksibel mirip JSON tanpa struktur tabel kaku. Sangat ideal untuk data media sosial dan percakapan chat. Contoh: MongoDB, Firebase Firestore.
3. **Cloud Database:** Basis data yang di-hosting di pusat data raksasa (Google Cloud Platform, AWS) dengan kemampuan *scale-to-zero* dan pencadangan otomatis terdistribusi.`,
        practicalTips: [
          'Gunakan Spreadsheet untuk kalkulasi cepat, analisis grafik internal, dan data di bawah 10.000 baris.',
          'Gunakan RDBMS untuk aplikasi sistem informasi resmi sekolah (PPDB, Raport Digital, Perpustakaan, Kasir).'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Arsitektur Basis Data Backend Aplikasi E-Learning Sekolah',
            scenario: 'Menangani 1.200 siswa yang mengerjakan kuis ujian online secara serentak pukul 08.00 pagi.',
            implementation: 'Menggunakan RDBMS PostgreSQL dengan fitur connection pooling dan transaksi ACID agar tidak ada jawaban siswa yang hilang tertimpa saat server sibuk.',
            impactNote: 'Ujian asesmen sekolah berjalan sukses tanpa ada insiden database terkunci (*lock freeze*).'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Tabel Komparasi Spreadsheet vs Database',
          prompt: 'Buatlah tabel perbandingan 4 kriteria (Kapasitas Baris, Kecepatan Multi-user, Pencegahan Duplikasi, dan Kemudahan Visualisasi) antara Google Sheets dan MySQL.',
          expectedOutput: 'Tabel komparasi yang merangkum kelebihan dan kekurangan masing-masing sistem.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Analisis Kebutuhan Database Sistem Informasi Sekolah',
          prompt: 'Diskusikan bersama kelompok: Pilihlah salah satu sistem di sekolahmu (misal: Absensi Siswa, Koperasi, atau Inventaris Bengkel). Tentukan apakah sistem tersebut lebih cocok memakai Spreadsheet atau RDBMS MySQL, jelaskan alasannya!',
          expectedOutput: 'Lembar rekomendasi teknis arsitektur basis data bagi kepala sekolah.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa kepanjangan dari ACID dalam prinsip keandalan transaksi basis data?',
            answerKey: 'ACID adalah singkatan dari Atomicity (transaksi tuntas semua atau batal semua), Consistency (data selalu mematuhi aturan validasi), Isolation (transaksi bersamaan tidak saling mengganggu), dan Durability (data yang sudah tersimpan permanen tidak hilang meskipun listrik padam).',
            explanation: 'Prinsip ACID menjamin transaksi perbankan dan akademik tidak pernah mengalami kerusakan saldo.'
          }
        ]
      },
      {
        id: 'c6-3',
        title: 'C. Struktur Tabel, Entitas, Atribut, PK, FK & Kardinalitas',
        description: 'Membedakan field/kolom, record/baris, tabel referensi vs transaksi, Primary Key unik, Foreign Key, dan jenis kardinalitas (1:1, 1:N, N:M).',
        readingMinutes: 12,
        keyConcepts: ['Entitas & Atribut', 'Field (Kolom) & Record (Baris)', 'Primary Key (PK Unik)', 'Foreign Key (Kunci Relasi)', 'Kardinalitas 1:1, 1:N, N:M'],
        dailyAnalogy: 'Tabel siswa seperti Buku Induk Sekolah. Setiap siswa punya nomor NIS (Primary Key) yang tidak mungkin sama dengan siswa lain. Ketika siswa meminjam buku di perpustakaan, petugas perpustakaan tidak perlu menulis ulang nama lengkap, alamat rumah, dan nama orang tua siswa di buku peminjaman. Cukup tulis NIS-nya saja (Foreign Key)! Melalui NIS itu, komputer otomatis tahu siapa peminjamnya. Sangat rapi dan hemat tempat!',
        coreContent: `### 1. Anatomi Tabel Basis Data Relasional
- **Entitas:** Objek nyata atau konsep di dunia nyata yang datanya ingin kita simpan. Contoh: Siswa, Guru, Buku, Kelas, Mata Pelajaran.
- **Atribut / Field (Kolom):** Karakteristik atau properti yang melekat pada entitas tersebut. Contoh pada entitas Siswa: \`nis\`, \`nama_lengkap\`, \`tanggal_lahir\`, \`alamat\`.
- **Record / Tuple (Baris):** Satu baris data lengkap yang mewakili satu individu objek tertentu. Contoh: Baris berisi \`['20261001', 'Dela Citra', '2009-05-12', 'Kuningan']\`.

### 2. Kunci Sakti Relasi: Primary Key (PK) dan Foreign Key (FK)
- **Primary Key (Kunci Primer):**
  Satu kolom khusus yang nilainya **dijamin 100% unik** dan tidak boleh kosong (*NOT NULL*). PK berfungsi sebagai tanda pengenal tunggal sebuah baris. Nama orang tidak boleh dijadikan PK karena di satu sekolah bisa saja ada dua siswa yang bernama sama ("Budi Setiawan"). Contoh PK terbaik: NISN, NIK KTP, atau Kode Barcode Buku.
- **Foreign Key (Kunci Asing / Tamu):**
  Kolom di tabel transaksi yang nilainya merujuk pada Primary Key di tabel induk. Foreign Key adalah "jembatan penghubung" antar tabel.

### 3. Kardinalitas Relasi Antartabel
Kardinalitas menunjukkan derajat hubungan kuantitas antara dua tabel:
1. **One-to-One (1 : 1):** Satu baris di tabel A hanya berhubungan dengan satu baris di tabel B. Contoh: Satu siswa hanya memiliki satu akun login portal resmi.
2. **One-to-Many (1 : N):** Satu baris di tabel A berhubungan dengan banyak baris di tabel B. Contoh: Satu kelas (1) menaungi banyak siswa (N); atau Satu siswa (1) dapat memiliki banyak riwayat peminjaman buku (N). Inilah kardinalitas yang paling sering digunakan!
3. **Many-to-Many (N : M):** Banyak baris di tabel A berhubungan dengan banyak baris di tabel B. Contoh: Banyak siswa (N) mengambil banyak mata pelajaran (M). Dalam perancangan basis data, relasi N:M wajib dipecah menjadi dua relasi 1:N menggunakan tabel perantara (*junction table*).`,
        practicalTips: [
          'Jangan gunakan data yang sering berubah (seperti nomor telepon atau alamat email) sebagai Primary Key.',
          'Pastikan tipe data Foreign Key sama persis dengan tipe data Primary Key yang dirujuknya (misal: jika PK bertipe VARCHAR(10), maka FK wajib VARCHAR(10)).'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Perancangan Relasi Tabel Faktur Penjualan dan Detail Barang',
            scenario: 'Satu nota faktur belanja dapat memuat 10 barang belanjaan yang berbeda.',
            implementation: 'Tabel Master: \`Barang\` (PK: kode_barang). Tabel Transaksi: \`Faktur\` (PK: no_faktur). Tabel Junction: \`Detail_Faktur\` (FK: no_faktur, FK: kode_barang, qty, subtotal). Relasi 1 Faktur ke Banyak Detail (1:N).',
            impactNote: 'Menghilangkan pengulangan nama toko dan tanggal faktur pada setiap baris barang.'
          },
          {
            majorId: 'to',
            majorName: 'Teknik Otomotif',
            fieldCategory: 'Teknologi & Rekayasa',
            caseTitle: 'Relasi Basis Data Riwayat Servis Sepeda Motor Berdasarkan Nomor Rangka',
            scenario: 'Bengkel resmi melacak riwayat pergantian oli dan suku cadang motor konsumen selama 3 tahun.',
            implementation: 'Tabel Induk: \`Motor\` (PK: nomor_rangka). Tabel Transaksi: \`Servis_Berkala\` (PK: id_servis, FK: nomor_rangka, tanggal, keluhan, km_jarak). Kardinalitas 1:N.',
            impactNote: 'Konsumen dapat melakukan servis di cabang bengkel manapun dan mekanik langsung tahu riwayat perbaikannya.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Mandiri: Identifikasi PK dan FK di Perpustakaan',
          prompt: 'Buka Buku Teks KKA Bab 6 halaman 255 (Gambar 6.2). Perhatikan Tabel Peserta Didik, Tabel Buku, dan Tabel Peminjaman. Tuliskan mana yang menjadi Primary Key dan Foreign Key pada ketiga tabel tersebut di buku kerjamu.',
          expectedOutput: 'Catatan analisis kunci tabel relasional perpustakaan sekolah.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Perancangan Skema Database Koperasi Sekolah',
          prompt: 'Rancanglah diagram relasi entitas (ERD) sederhana untuk Koperasi Siswa yang memuat 3 tabel: Tabel Anggota, Tabel Barang, dan Tabel Transaksi Penjualan. Tentukan Primary Key dan garis relasi 1:N nya bersama kelompokmu.',
          expectedOutput: 'Gambar skema tabel relasi yang rapi dengan penandaan PK (kunci emas) dan FK (kunci perak).'
        },
        selfCheckQuestions: [
          {
            question: 'Apa bahaya terbesar jika sebuah sistem basis data mengizinkan adanya "Orphaned Record" (baris anak yatim)?',
            answerKey: 'Orphaned Record terjadi ketika baris di tabel transaksi memiliki nilai Foreign Key yang tidak ada di tabel induk (contoh: ada transaksi peminjaman buku oleh siswa bernomor NIS "999999", padahal tidak ada siswa dengan NIS tersebut). Hal ini merusak integritas data dan membuat laporan keuangan atau akademik menjadi cacat hukum.',
            explanation: 'RDBMS mencegah hal ini melalui aturan Foreign Key Constraint (Referential Integrity).'
          }
        ]
      },
      {
        id: 'c6-4',
        title: 'D. Dasar Perintah SQL di phpMyAdmin & Server Lokal',
        description: 'Mengeksekusi perintah SQL DDL (CREATE DATABASE, CREATE TABLE) dan DML (INSERT INTO, SELECT WHERE, ORDER BY, UPDATE) di lingkungan web.',
        readingMinutes: 14,
        keyConcepts: ['Perintah DDL vs DML', 'CREATE DATABASE & TABLE', 'INSERT INTO (Tambah Data)', 'SELECT WHERE (Filter Pencarian)', 'ORDER BY (Pengurutan)', 'UPDATE (Ubah Data)'],
        dailyAnalogy: 'SQL seperti bahasa perintah saat kamu menyewa lemari loker baru di stasiun: 1) DDL seperti tukang kayu yang membuat lemari loker kayu baru dan memasang sekat-sekatnya (\`CREATE TABLE\`); 2) DML seperti kamu yang memasukkan koper ke dalam loker (\`INSERT\`), mencari koper warna biru milikmu (\`SELECT WHERE\`), dan menukar baju kotor dengan baju bersih (\`UPDATE\`)!',
        coreContent: `### 1. Pembagian Perintah SQL
SQL terbagi ke dalam dua kelompok perintah utama:
1. **Data Definition Language (DDL):**
   Perintah untuk membangun, mengubah, atau menghapus kerangka struktur basis data dan tabel (belum menyentuh isi datanya).
   - \`CREATE DATABASE db_sekolah;\` (Membuat database baru).
   - \`CREATE TABLE buku (...);\`: (Membuat struktur kolom tabel baru).
   - \`DROP TABLE nama_tabel;\`: (Menghapus tabel beserta seluruh isinya secara permanen).

2. **Data Manipulation Language (DML):**
   Perintah untuk mengelola isi baris data (*record*) di dalam tabel yang sudah dibuat.
   - **INSERT:** Menambahkan baris data baru ke dalam tabel.
   - **SELECT:** Mengambil dan menampilkan data sesuai kriteria tertentu.
   - **UPDATE:** Mengubah nilai data yang sudah ada di dalam tabel.
   - **DELETE:** Menghapus baris data tertentu.

### 2. Sintaks SQL Standar Resmi Buku Teks KKA
Berikut adalah contoh sintaks SQL resmi halaman 268-271 yang dapat langsung kamu coba di menu **LAB KKA > Lab 6**:

\`\`\`sql
-- 1. Membuat Tabel Buku
CREATE TABLE db_perpustakaan.buku (
  id_buku VARCHAR(10) PRIMARY KEY,
  judul VARCHAR(100) NOT NULL,
  penulis VARCHAR(50) NOT NULL,
  penerbit VARCHAR(50),
  tahun INT
);

-- 2. Memasukkan Data Record Baru
INSERT INTO db_perpustakaan.buku (id_buku, judul, penulis, penerbit, tahun)
VALUES ('B001', 'Koding dan Kecerdasan Artifisial', 'Saidun & Budi', 'Kemendikdasmen', 2025);

-- 3. Mencari Buku Tertentu dengan Filter Kondisi (WHERE)
SELECT judul, penulis, tahun 
FROM db_perpustakaan.buku 
WHERE tahun >= 2024 
ORDER BY tahun DESC;

-- 4. Memperbarui Data Buku (UPDATE)
UPDATE db_perpustakaan.buku 
SET penerbit = 'Pusat Kurikulum dan Perbukuan' 
WHERE id_buku = 'B001';
\`\`\`

> **Peringatan Kritis:** Jangan pernah menjalankan perintah \`UPDATE\` atau \`DELETE\` tanpa klausa \`WHERE\`! Jika kamu lupa menuliskan \`WHERE\`, maka **SELURUH baris data di dalam tabel akan berubah atau terhapus seketika**!`,
        practicalTips: [
          'Akhiri selalu setiap baris perintah SQL dengan tanda titik koma (;).',
          'Tuliskan kata kunci perintah SQL dengan huruf kapital (CREATE, SELECT, WHERE) dan nama tabel/kolom dengan huruf kecil agar kode mudah dibaca.'
        ],
        majorApplications: [
          {
            majorId: 'rpl',
            majorName: 'PPLG / RPL',
            fieldCategory: 'Teknologi Informasi',
            caseTitle: 'Eksekusi Query SQL untuk Menampilkan Siswa yang Berhak Menerima Beasiswa',
            scenario: 'Menyaring 1.000 data siswa untuk menemukan siswa dengan nilai rata-rata >= 85 dan penghasilan orang tua <= 3.000.000.',
            implementation: 'Query: \`SELECT nis, nama_lengkap, nilai_rata, penghasilan_ortu FROM siswa WHERE nilai_rata >= 85 AND penghasilan_ortu <= 3000000 ORDER BY nilai_rata DESC LIMIT 20;\`',
            impactNote: 'Daftar penerima beasiswa tersaring secara objektif dan instan tanpa ada kecurangan intervensi manual.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Studio SQL phpMyAdmin di Lab 6',
          prompt: 'Buka menu **LAB KKA > Lab 6: Basis Data Digital & SQL Studio**. Pilih tombol template "1. CREATE TABLE buku" lalu tekan tombol **Jalankan Query**. Lanjutkan dengan template INSERT data dan SELECT data. Amati perubahan isi tabel secara interaktif di layar.',
          expectedOutput: 'Tabel buku terisi 4 data dan query pencarian buku berhasil menampilkan hasil yang tepat.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Latihan Menulis Query Kasir Toko Sekolah',
          prompt: 'Diberikan tabel \`barang (kode_barang, nama_barang, harga, stok)\`. Bersama kelompokmu, tuliskan query SQL untuk: 1) Menampilkan barang yang stoknya kurang dari 5; 2) Menaikkan harga barang "Buku Tulis" sebesar Rp500.',
          expectedOutput: 'Catatan lembar kerja berisi sintaks query SELECT WHERE dan UPDATE yang benar.'
        },
        selfCheckQuestions: [
          {
            question: 'Apa akibat fatal jika seorang administrator menjalankan perintah: \`DELETE FROM siswa;\` tanpa menambahkan klausa \`WHERE\`?',
            answerKey: 'Seluruh baris data siswa yang ada di dalam tabel tersebut akan terhapus bersih secara permanen tanpa tersisa satupun, menyisakan hanya kerangka tabel yang kosong.',
            explanation: 'Klausa WHERE berfungsi mengunci baris spesifik mana yang boleh dihapus (misal: WHERE nis = "20261001").'
          }
        ]
      },
      {
        id: 'c6-5',
        title: 'E. Pengolahan Data Dasar Spreadsheet & Analisis Pivot Table',
        description: 'Mengolah data nilai dan kehadiran menggunakan formula AVERAGE, MIN, MAX, COUNTIF, dan membuat Pivot Table analisis dua dimensi.',
        readingMinutes: 12,
        keyConcepts: ['Formula Agregasi (AVERAGE, MAX, MIN)', 'Fungsi Logika Kriteria COUNTIF', 'Pivot Table (Baris, Kolom, Nilai Agregasi)', 'Visualisasi Data Chart'],
        dailyAnalogy: 'Bayangkan kamu memiliki toples besar berisi 1.000 koin receh campur aduk (uang koin Rp100, Rp200, Rp500, dan Rp1.000). Jika kamu menghitung satu per satu, kamu akan pusing. Pivot Table seperti mesin pemilah koin otomatis: dalam 3 detik, koin otomatis terpisah menurut pecahan (kolom) dan tahun cetak (baris), lalu langsung menjumlahkan total nominal uangnya!',
        coreContent: `### 1. Rumus Agregasi Lembar Sebar (Spreadsheet)
Untuk menganalisis data nilai siswa, kehadiran, atau inventaris barang, kuasai 5 rumus utama:
- \`=AVERAGE(C2:C35)\`: Menghitung nilai rata-rata dari rentang sel C2 hingga C35.
- \`=MAX(C2:C35)\`: Mencari angka tertinggi dari kumpulan data.
- \`=MIN(C2:C35)\`: Mencari angka terendah dari kumpulan data.
- \`=SUM(C2:C35)\`: Menjumlahkan seluruh angka di rentang sel tersebut.
- \`=COUNTIF(D2:D35, "Hadir")\`: Menghitung berapa banyak sel yang berisi teks kata "Hadir".

### 2. Keajaiban Analisis Dua Dimensi: Pivot Table
Pivot Table adalah fitur paling dahsyat pada aplikasi lembar sebar (Microsoft Excel atau Google Sheets) untuk merangkum ribuan baris data menjadi tabel ringkasan dalam hitungan detik tanpa perlu mengetik rumus matematika yang rumit.
Empat Komponen Utama Pivot Table:
1. **Rows (Baris):** Kategori data yang ingin ditampilkan sebagai baris ke bawah (contoh: Nama Jurusan — DKV, AKL, TKJ, SMA).
2. **Columns (Kolom):** Kategori data yang ingin ditampilkan menyamping ke kanan (contoh: Jenis Kelamin — Laki-laki / Perempuan).
3. **Values (Nilai):** Angka yang ingin dihitung atau diringkas (contoh: Nilai Rata-rata Ujian KKA).
4. **Filters (Penyaring):** Pilihan untuk menyaring data tertentu saja (contoh: hanya menampilkan data Tahun Ajaran 2026/2027).`,
        practicalTips: [
          'Pastikan tabel data sumbermu memiliki baris header yang jelas di baris paling atas dan tidak ada sel yang digabungkan (*merge cells*).',
          'Klik tombol "Refresh" pada Pivot Table jika ada pembaruan data pada tabel sumber aslinya.'
        ],
        majorApplications: [
          {
            majorId: 'akl',
            majorName: 'Akuntansi & Keuangan Lembaga',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Penyusunan Pivot Table Rekapitulasi Beban Biaya Operasional per Departemen',
            scenario: 'Manajer keuangan ingin melihat perbandingan pengeluaran ATK, Listrik, dan Konsumsi antar departemen selama 1 tahun.',
            implementation: 'Menempatkan Departemen pada Rows, Jenis Pengeluaran pada Columns, dan SUM(Nominal) pada Values.',
            impactNote: 'Laporan keuangan eksekutif selesai dalam 1 menit dan siap dipresentasikan di rapat direksi.'
          },
          {
            majorId: 'mplb',
            majorName: 'Manajemen Perkantoran & Layanan Bisnis',
            fieldCategory: 'Bisnis & Manajemen',
            caseTitle: 'Pivot Table Analisis Persentase Kehadiran Siswa Per Tingkat Kelas',
            scenario: 'Mengetahui kelas mana yang memiliki tingkat ketidakhadiran (Alpha/Izin) tertinggi di semester ganjil.',
            implementation: 'Menempatkan Kelas pada Rows, Status Kehadiran pada Columns, dan COUNT pada Values.',
            impactNote: 'Guru BK langsung mengetahui kelas yang butuh bimbingan khusus disiplin kehadiran.'
          }
        ],
        individualActivity: {
          title: 'Aktivitas Praktikum: Simulasi Pivot Table di Lab 6',
          prompt: 'Buka menu **LAB KKA > Lab 6**. Gulir ke bagian **Pivot Table Analisis Nilai Siswa**. Pilih dimensi Baris: "Jurusan" dan Nilai: "Rata-rata Nilai KKA". Amati perbandingan performa akademik antar jurusan di layar.',
          expectedOutput: 'Tabel pivot ringkas yang menunjukkan jurusan dengan rata-rata nilai tertinggi.'
        },
        groupActivity: {
          title: 'Aktivitas Kelompok: Analisis Tren Survei Minat Kuliah vs Bekerja Siswa SMK',
          prompt: 'Kumpulkan data angket dari 20 siswa: Nama, Jurusan, Jenis Kelamin, dan Rencana Kelulusan (Kuliah / Bekerja / Wirausaha). Buat tabel Pivot Table di spreadsheet untuk merangkum berapa persen siswa per jurusan yang ingin langsung bekerja.',
          expectedOutput: 'Laporan tabel pivot dua dimensi disertai visualisasi diagram batang (Bar Chart).'
        },
        selfCheckQuestions: [
          {
            question: 'Mengapa sel yang digabungkan (Merge Cells) sangat dilarang pada tabel sumber data yang akan dibuatkan Pivot Table?',
            answerKey: 'Karena saat sel digabungkan (Merge Cells), komputer hanya menyimpan nilai pada sel kiri atas, sedangkan sel-sel lainnya dianggap kosong (NULL). Hal ini menyebabkan Pivot Table salah membaca kategori data dan menghasilkan laporan perhitungan yang tidak akurat.',
            explanation: 'Tabel data yang baik wajib berupa flat table di mana setiap sel memiliki isi data yang berdiri sendiri.'
          }
        ]
      }
    ]
  }
];

// ==========================================
// 6 LKPD DIGITAL LENGKAP UNTUK 6 MODUL
// ==========================================
export const COMPREHENSIVE_LKPDS: LKPDItem[] = [
  {
    lkpd_id: 'lkpd-01',
    module_id: 'mod-01',
    title: 'LKPD Digital 1: Penerapan Berpikir Komputasional & 5 Whys Lingkungan Sekolah',
    learning_objectives: [
      'Mengidentifikasi dan membedakan masalah sederhana vs masalah kompleks di lingkungan sekolah.',
      'Menerapkan teknik Dekomposisi, Pengenalan Pola, dan Abstraksi pada kasus riil.',
      'Menelusuri akar masalah menggunakan metode 5 Whys hingga menyentuh level SOP.',
      'Merancang algoritma solusi bertahap 4 langkah yang aplikatif dan terukur.'
    ],
    starter_problem: 'Di lingkungan sekolahmu, antrean kantin saat jam istirahat sangat panjang dan padat. Akibatnya, banyak peserta didik tidak sempat makan, berdesak-desakan, hingga terlambat masuk ke ruang kelas pada jam pelajaran berikutnya.',
    instructions: 'Bacalah permasalahan pemantik di atas dengan saksama. Diskusikan atau lakukan observasi mandiri, lalu isi keempat bagian pertanyaan kerja, tabel analisis, kesimpulan, dan refleksi pada lembar kerja digital ini.',
    tools_needed: ['Buku Teks KKA Bab 1', 'Simulator Lab 1: Berpikir Komputasional', 'Catatan Observasi Lingkungan'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Dekomposisi): Uraikan masalah antrean kantin tersebut menjadi minimal 4 sub-komponen kecil (contoh: faktor petugas kasir, fasilitas tempat, metode pembayaran, jam istirahat bersamaan)!',
        placeholder: 'Tuliskan hasil pemecahan masalah (dekomposisi) di sini secara terstruktur...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Pengenalan Pola & Abstraksi): Pola apa yang berulang setiap hari saat antrean memuncak? Tentukan juga 2 informasi detail yang sebaiknya diabaikan (diabstraksikan) agar tidak memperkeruh fokus solusi!',
        placeholder: 'Pola berulang yang terlihat: ...\nInformasi yang diabaikan (Abstraksi): ...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Analisis 5 Whys): Lakukan penelusuran akar masalah mulai dari gejala "Pelayanan kantin lambat" hingga menemukan akar penyebab di tingkat SOP atau sistem!',
        placeholder: '1. Kenapa pelayanan lambat? Karena...\n2. Kenapa? Karena...\n3. Kenapa? Karena...\n4. Kenapa? Karena...\n5. Kenapa (Akar Masalah)? Karena...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Algoritma Solusi & Refleksi Diri): Susunlah 4 langkah algoritma solusi berurutan yang dapat diterapkan pihak sekolah. Tuliskan pula refleksi: Bagaimana cara berpikir ini membantumu menyelesaikan masalah lain di jurusanmu?',
        placeholder: 'Langkah 1: ...\nLangkah 2: ...\nLangkah 3: ...\nLangkah 4: ...\n\nRefleksi Diri: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-02',
    module_id: 'mod-02',
    title: 'LKPD Digital 2: Perancangan Flowchart Standar & Analisis Komparasi Algoritma',
    learning_objectives: [
      'Merancang diagram alir (flowchart) standar menggunakan simbol terminator, I/O, proses, dan keputusan (decision).',
      'Menganalisis perbandingan operasi perbandingan pada Selection Sort dan Insertion Sort.',
      'Memahami penerapan algoritma logika percabangan bertingkat (nested if) pada kasus kejuruan.'
    ],
    starter_problem: 'Sebuah bengkel/toko kejuruan sekolah ingin menerapkan sistem kelulusan uji sertifikasi siswa secara otomatis berdasarkan nilai ujian praktik (minimal 75) dan kehadiran (minimal 85%), dengan kebijakan dispensasi bagi siswa yang aktif berorganisasi.',
    instructions: 'Gunakan simulator Lab 2 (Algoritma, Flowchart & ML) untuk menguji alur logika dan simulasi pengurutan data, kemudian tuliskan jawaban analisis lengkapmu pada kolom di bawah ini.',
    tools_needed: ['Buku Teks KKA Bab 2', 'Simulator Lab 2 Flowchart & Sorting Arena'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Flowchart Logic): Jelaskan urutan alur simbol flowchart untuk menentukan kelulusan sertifikasi di atas! Sebutkan simbol apa saja yang digunakan beserta fungsinya masing-masing.',
        placeholder: 'Urutan simbol dan fungsinya: ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Sorting Analysis): Berdasarkan eksperimen pada deret angka [15, 25, 13, 5, 30, 40, 7] di Lab 2, analisislah perbedaan mendasar antara cara kerja Selection Sort dan Insertion Sort! Mana yang membutuhkan pertukaran (swap) lebih sedikit?',
        placeholder: 'Analisis komparasi sorting: ...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Debugging Case): Diberikan potongan kode: "total = 10; divider = 0; hasil = total / divider". Mengapa kode ini memicu Runtime Error (ZeroDivisionError) dan bagaimana cara memperbaikinya dengan logika percabangan IF?',
        placeholder: 'Penyebab error dan kode perbaikannya: ...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Kesimpulan & Refleksi): Mengapa seorang profesional di bidang kejuruanmu wajib memiliki logika algoritma yang runtut sebelum membuat produk atau melayani konsumen?',
        placeholder: 'Kesimpulan dan refleksi diri: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-03',
    module_id: 'mod-03',
    title: 'LKPD Digital 3: Eksplorasi Pengenalan Pola AI & Audit Etika Algoritmik',
    learning_objectives: [
      'Menganalisis mekanisme pengenalan pola citra dan suara pada sistem kecerdasan artifisial.',
      'Melakukan audit bias dataset absensi wajah berdasarkan prinsip SE Menkominfo No. 9 Tahun 2023.',
      'Merumuskan panduan etis penggunaan AI bagi siswa di sekolah.'
    ],
    starter_problem: 'Sistem absensi kamera cerdas di gerbang sekolah dilaporkan sering gagal mengenali wajah siswi yang mengenakan kerudung atau siswa berkulit gelap saat cuaca mendung, sementara siswa berkulit terang selalu terdeteksi cepat.',
    instructions: 'Gunakan simulator Lab 4 (Pengenalan Pola & Audit Etika KA) untuk meneliti rasio dataset wajah, lalu jawablah pertanyaan evaluasi berikut.',
    tools_needed: ['Buku Teks KKA Bab 3', 'Simulator Lab 4 Teachable Machine & Bias Auditor', 'Panduan SE Menkominfo No 9/2023'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Mekanisme Fitur Citra): Mengapa komputer memerlukan proses ekstraksi fitur (piksel, kontur, jarak mata-hidung) untuk mengenali wajah seseorang? Apa kelemahan utama dari citra digital jika pencahayaannya buruk?',
        placeholder: 'Penjelasan mekanisme fitur citra visual: ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Audit Bias Dataset): Berdasarkan uji coba di Lab 4, mengapa sistem absensi di atas mengalami bias dan diskriminatif? Bagaimana cara tim teknis menyeimbangkan data latih (training data) agar adil?',
        placeholder: 'Akar penyebab bias dan solusi penyeimbangan data: ...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Regulasi Etika): Jelaskan bagaimana prinsip "Inklusivitas" dan "Pelindungan Data Pribadi" dalam SE Menkominfo No. 9/2023 harus diterapkan pada sistem pengenal wajah sekolah!',
        placeholder: 'Kajian prinsip SE Menkominfo No 9/2023: ...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Refleksi Diri & Komitmen): Tuliskan 3 komitmen moral pribadimu dalam memanfaatkan teknologi AI agar tidak merugikan hak cipta orang lain dan tidak melakukan kecurangan akademik di sekolah!',
        placeholder: 'Tiga komitmen moral saya: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-04',
    module_id: 'mod-04',
    title: 'LKPD Digital 4: Perancangan Prompt PGTC & Kanvas Solusi Design Thinking',
    learning_objectives: [
      'Menyusun prompt berkinerja tinggi menggunakan kerangka PGTC (Persona, Goal, Task, Context).',
      'Menerapkan teknik mitigasi halusinasi dan verifikasi fakta pada keluaran AI.',
      'Menyelesaikan permasalahan sekolah menggunakan kanvas 5 tahap Design Thinking.'
    ],
    starter_problem: 'Banyak siswa merasa kesulitan memahami istilah teknis bahasa Inggris pada manual book mesin atau software kejuruan mereka, sehingga sering salah mengoperasikan alat di bengkel/lab.',
    instructions: 'Rancanglah prompt PGTC untuk menghasilkan panduan bahasa sederhana, lalu susun kanvas 5 tahap Design Thinking menggunakan simulator Lab 5.',
    tools_needed: ['Buku Teks KKA Bab 4', 'Simulator Lab 5: Prompt Builder & Design Thinking Canvas'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Rancang Prompt PGTC): Susunlah satu prompt lengkap dengan mengisi 4 elemen: [Persona] = ..., [Goal] = ..., [Task] = ..., dan [Context] = ... untuk memecahkan masalah manual book kejuruan di atas!',
        placeholder: 'P: ...\nG: ...\nT: ...\nC: ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Mitigasi Halusinasi): Mengapa model AI generatif dapat memberikan arti istilah teknis yang salah (*halusinasi*) jika tidak diberikan dokumen rujukan? Tuliskan instruksi tambahan pada prompt untuk mencegah hal tersebut!',
        placeholder: 'Penyebab halusinasi dan kalimat pencegahnya: ...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Kanvas Design Thinking): Tuliskan hasil pemikiranmu pada tahap Empathize (keluhan siswa) dan Define (rumusan masalah Point-of-View)!',
        placeholder: 'Empathize: ...\nDefine (POV): [Siswa jurusan ...] membutuhkan [...] karena [...].',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Ideate & Prototype): Usulkan 1 ide purwarupa kreatif (apakah berupa stiker barcode penjelasan cepat di mesin, poster glosarium visual, atau mini web) dan bagaimana rencanamu mengujinya (Test)?',
        placeholder: 'Purwarupa ide dan rencana pengujiannya: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-05',
    module_id: 'mod-05',
    title: 'LKPD Digital 5: Analisis Hak Cipta, Lisensi Creative Commons & Portofolio Siswa',
    learning_objectives: [
      'Memahami perlindungan hak moral dan hak ekonomi pencipta berdasarkan UU No. 28 Tahun 2014.',
      'Memilih dan menerapkan simbol lisensi Creative Commons (CC) yang tepat pada karya digital.',
      'Melakukan evaluasi jejak digital pribadi untuk kesiapan memasuki dunia kerja profesional.'
    ],
    starter_problem: 'Kelompok siswa membuat video profil promosi jurusan untuk media sosial sekolah. Mereka menggunakan foto karya fotografer profesional tanpa izin dan lagu hits komersial dari YouTube sebagai latar musik. Dua minggu kemudian, video tersebut dibisukan (*mute*) dan akun sekolah mendapat tegangan somasi hak cipta.',
    instructions: 'Kaji permasalahan pelanggaran hak cipta di atas, teliti alternatif lisensi Creative Commons, dan rancang strategi publikasi portofolio legal.',
    tools_needed: ['Buku Teks KKA Bab 5', 'Undang-Undang Hak Cipta No. 28/2014', 'Panduan Creative Commons Indonesia'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Pelanggaran Hak Cipta): Berdasarkan UU No. 28 Tahun 2014, hak apa saja (Hak Moral atau Hak Ekonomi) yang telah dilanggar oleh kelompok siswa tersebut? Jelaskan mengapa video promosi sekolah tetap dapat dituntut meskipun tidak memungut biaya tiket!',
        placeholder: 'Analisis pelanggaran hak cipta dan landasan hukumnya: ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Solusi Lisensi CC): Jelaskan apa arti dari lisensi "CC BY-SA" dan "CC BY-NC"! Di antara keduanya, mana yang paling tepat dipilih jika siswa ingin membagikan modul/videonya secara gratis tetapi melarang orang lain menjualnya?',
        placeholder: 'Penjelasan lisensi CC BY-SA vs CC BY-NC dan rekomendasinya: ...',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Atribusi Legal): Tuliskan contoh cara mencantumkan kredit atribusi yang benar jika kamu menggunakan foto dari situs Unsplash atau Wikimedia Commons pada karyamu!',
        placeholder: 'Format penulisan atribusi resmi: [Judul] oleh [Pencipta] di bawah lisensi [...], tautan: [...]',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Audit Jejak Digital & Refleksi): Lakukan audit ringkas terhadap rekam jejak akun media sosial pribadimu. Apa satu hal yang akan kamu perbaiki agar saat melamar magang PKL nanti, kamu dinilai sebagai pribadi yang beretika tinggi?',
        placeholder: 'Refleksi jejak digital dan komitmen perbaikan reputasi: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  },
  {
    lkpd_id: 'lkpd-06',
    module_id: 'mod-06',
    title: 'LKPD Digital 6: Perancangan Basis Data Relasional, Query SQL & Pivot Table',
    learning_objectives: [
      'Membedakan entitas, atribut, record, dan field pada model data relasional.',
      'Menentukan Primary Key unik dan Foreign Key untuk menghubungkan tabel induk dan transaksi.',
      'Menuliskan dan mengeksekusi sintaks SQL standar (CREATE, INSERT, SELECT WHERE, UPDATE).',
      'Menyusun analisis Pivot Table dua dimensi dari data transaksi lembar sebar.'
    ],
    starter_problem: 'Koperasi siswa dan perpustakaan sekolah kesulitan melacak transaksi peminjaman buku dan pembelian alat tulis karena pencatatan manual di buku folio sering hilang, dobel catat (redundansi), dan menyita waktu berjam-jam saat membuat laporan bulanan.',
    instructions: 'Rancang dua tabel relasional yang saling terhubung, jalankan perintah SQL di simulator Lab 6, dan analisis data dengan Pivot Table.',
    tools_needed: ['Buku Teks KKA Bab 6 hal. 250-285', 'Simulator Lab 6: Basis Data Digital & SQL Studio', 'Spreadsheet Pivot Table'],
    questions: [
      {
        id: 'q1',
        question: 'Bagian 1 (Struktur Tabel & Relasi): Tentukan Primary Key pada Tabel Peserta Didik dan Tabel Buku, serta jelaskan mengapa kolom NIS dijadikan Foreign Key pada Tabel Transaksi Peminjaman!',
        placeholder: 'PK Tabel Siswa = ...\nPK Tabel Buku = ...\nFungsi FK NIS pada Peminjaman = ...',
        type: 'text'
      },
      {
        id: 'q2',
        question: 'Bagian 2 (Sintaks SQL DDL & DML): Tuliskan perintah SQL lengkap untuk: 1) Membuat tabel buku; 2) Memasukkan 1 baris buku baru; 3) Menampilkan seluruh buku yang terbit di atas tahun 2024 diurutkan dari tahun terbaru!',
        placeholder: 'CREATE TABLE ...;\nINSERT INTO ...;\nSELECT ... FROM ... WHERE ... ORDER BY ...;',
        type: 'text'
      },
      {
        id: 'q3',
        question: 'Bagian 3 (Pencegahan Kesalahan SQL): Jelaskan bahaya fatal jika seorang administrator menjalankan perintah "UPDATE buku SET penerbit = \'Pusat Kurikulum\';" tanpa menyertakan klausa WHERE! Bagaimana cara mencegahnya?',
        placeholder: 'Akibat fatal tanpa WHERE dan cara mencegahnya: ...',
        type: 'text'
      },
      {
        id: 'q4',
        question: 'Bagian 4 (Analisis Pivot Table & Refleksi): Berdasarkan simulasi Pivot Table di Lab 6, bagaimana fitur penyilangan baris (Rows) dan kolom (Columns) membantu kepala sekolah mengambil keputusan kebijakan akademik lebih cepat dibanding membaca tabel mentah?',
        placeholder: 'Penjelasan manfaat Pivot Table dan refleksi diri: ...',
        type: 'conclusion'
      }
    ],
    status: 'active'
  }
];

// ==========================================
// TUGAS MANDIRI & KELOMPOK UNTUK SEMUA MODUL
// ==========================================
export const COMPREHENSIVE_ASSIGNMENTS: Assignment[] = [
  // Modul 1
  {
    assignment_id: 'asg-m1-ind',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-01',
    title: 'Tugas Mandiri: Analisis 5 Whys Masalah Efisiensi Bengkel/Laboratorium Kejuruan',
    instructions: 'Pilihlah salah satu masalah operasional di bengkel atau lab jurusanmu (misal: alat sering tercecer, komputer lemot saat booting, atau sisa bahan praktik terbuang sia-sia). Terapkan analisis 5 Whys secara mendalam hingga menemukan akar masalah pada SOP atau tata kelola, lalu susun 4 langkah algoritma solusi aplikatif.',
    assignment_type: 'Uraian',
    is_group: false,
    start_at: '2026-10-10T07:00:00Z',
    due_at: '2026-10-25T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Identifikasi Masalah & Dekomposisi', weight: 25, description: 'Kejelasan mengurai masalah kompleks menjadi sub-komponen terstruktur' },
      { id: 'r2', name: 'Kedalaman Analisis 5 Whys', weight: 35, description: 'Penelusuran logis tanpa asumsi dangkal hingga mencapai akar penyebab SOP/sistem' },
      { id: 'r3', name: 'Logika Algoritma Solusi', weight: 25, description: 'Rangkaian langkah solusi berurutan yang dapat dieksekusi secara nyata' },
      { id: 'r4', name: 'Kerapian Format & Refleksi', weight: 15, description: 'Sistematika penulisan laporan dan kedalaman refleksi pembelajaran' }
    ]
  },
  {
    assignment_id: 'asg-m1-grp',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-01',
    title: 'Tugas Kelompok (PjBL): Desain Integrasi 4 Siklus AI untuk Lingkungan Sekolah',
    instructions: 'Bersama kelompokmu (3-4 orang), pilihlah satu ide produk cerdas (Smart Waste Bin pemilah sampah otomatis, Sistem Pengenalan Wajah Presensi Gerbang, atau Smart Green House Pertanian). Rancang diagram 4 siklus AI: 1) Perception (sensor apa yang dipakai); 2) Data Representation (bagaimana data disimpan); 3) Reasoning (logika keputusan apa yang dijalankan); 4) Learning (bagaimana sistem belajar dari data baru).',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-10-12T07:00:00Z',
    due_at: '2026-10-30T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kreativitas & Relevansi Ide', weight: 25, description: 'Kemanfaatan produk cerdas dalam menyelesaikan masalah riil di sekolah' },
      { id: 'r2', name: 'Akurasi 4 Siklus AI', weight: 35, description: 'Kebenaran pemetaan komponen Perception, Representation, Reasoning, dan Learning' },
      { id: 'r3', name: 'Kolaborasi & Pembagian Peran', weight: 20, description: 'Kekompakan tim dan kejelasan kontribusi masing-masing anggota' },
      { id: 'r4', name: 'Presentasi & Media Visual', weight: 20, description: 'Kualitas slide atau poster diagram alir yang dipresentasikan' }
    ]
  },

  // Modul 2
  {
    assignment_id: 'asg-m2-ind',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-02',
    title: 'Tugas Mandiri: Perancangan Flowchart Standar Logika Bisnis & Debugging Kode',
    instructions: 'Buatlah flowchart standar sistem perhitungan potongan harga (diskon) atau seleksi penerimaan beasiswa yang memiliki minimal 2 kondisi bertingkat (Nested If). Kemudian, temukan dan perbaiki 3 galat (syntax error, runtime error, dan logic error) pada potongan kode program yang disediakan.',
    assignment_type: 'Praktikum',
    is_group: false,
    start_at: '2026-10-15T07:00:00Z',
    due_at: '2026-10-31T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Ketepatan Simbol Flowchart', weight: 30, description: 'Penggunaan simbol terminator, input/output, proses, dan decision sesuai standar ANSI' },
      { id: 'r2', name: 'Kebenaran Alur Logika Nested If', weight: 30, description: 'Percabangan logika memenuhi semua skenario kasus yang ditentukan' },
      { id: 'r3', name: 'Akurasi Analisis Debugging', weight: 40, description: 'Ketepatan mengidentifikasi dan memperbaiki 3 jenis bug pada kode program' }
    ]
  },
  {
    assignment_id: 'asg-m2-grp',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-02',
    title: 'Tugas Kelompok: Simulasi Komparasi Algoritma Pengurutan Nilai Kelas',
    instructions: 'Bersama kelompokmu, ambil data nilai ujian 10 siswa acak. Buat tabel perbandingan langkah demi langkah antara Selection Sort dan Insertion Sort. Hitung berapa kali terjadi perbandingan elemen dan berapa kali pertukaran elemen dilakukan hingga data terurut sempurna.',
    assignment_type: 'Praktikum',
    is_group: true,
    start_at: '2026-10-16T07:00:00Z',
    due_at: '2026-11-05T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Ketelitian Tracing Algoritma', weight: 40, description: 'Kebenaran pencatatan urutan array pada setiap putaran iterasi' },
      { id: 'r2', name: 'Analisis Jumlah Operasi', weight: 30, description: 'Ketepatan penghitungan komparasi dan pertukaran elemen' },
      { id: 'r3', name: 'Kesimpulan Efisiensi', weight: 30, description: 'Ketajaman argumentasi dalam memilih algoritma yang paling efisien' }
    ]
  },

  // Modul 3
  {
    assignment_id: 'asg-m3-ind',
    teacher_id: 'usr-guru-02',
    class_id: 'all',
    module_id: 'mod-03',
    title: 'Tugas Mandiri: Esai Refleksi Etika AI & Mitigasi Bias pada Bidang Kejuruan',
    instructions: 'Tuliskan esai analitis 400-500 kata mengenai potensi dampak positif dan dampak negatif kecerdasan artifisial di bidang keahlian jurusanmu. Bahas secara khusus bagaimana bias algoritma dapat terjadi dan bagaimana prinsip SE Menkominfo No. 9 Tahun 2023 dapat menjadi pedoman perlindungan hak asasi pengguna.',
    assignment_type: 'Refleksi',
    is_group: false,
    start_at: '2026-10-18T07:00:00Z',
    due_at: '2026-11-08T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kedalaman Relevansi Kejuruan', weight: 30, description: 'Kekayaan contoh penerapan nyata AI di bidang keahlian siswa' },
      { id: 'r2', name: 'Kajian Kritis Bias & Etika', weight: 40, description: 'Ketajaman analisis potensi diskriminasi algoritma dan perlindungan data pribadi' },
      { id: 'r3', name: 'Kepatuhan Regulasi & Bahasa', weight: 30, description: 'Rujukan tepat pada SE Menkominfo No. 9/2023 dan penggunaan bahasa Indonesia baku' }
    ]
  },
  {
    assignment_id: 'asg-m3-grp',
    teacher_id: 'usr-guru-02',
    class_id: 'all',
    module_id: 'mod-03',
    title: 'Tugas Kelompok: Perumusan Piagam Kode Etik Penggunaan AI di Sekolah',
    instructions: 'Susunlah naskah "Piagam Integritas & Etika Penggunaan AI Siswa" yang memuat minimal 5 pasal komitmen moral. Pasal-pasal tersebut harus mengatur tentang: larangan plagiarisme, kewajiban atribusi, perlindungan data pribadi teman, larangan deepfake/cyberbullying, dan prosedur verifikasi fakta.',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-10-20T07:00:00Z',
    due_at: '2026-11-12T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kelengkapan 5 Aspek Etika', weight: 40, description: 'Mencakup plagiarisme, atribusi, privasi data, larangan deepfake, dan verifikasi fakta' },
      { id: 'r2', name: 'Keterterapan di Lingkungan Sekolah', weight: 30, description: 'Pasal-pasal bersifat realistis dan dapat ditegakkan dalam kegiatan belajar harian' },
      { id: 'r3', name: 'Kerapian Desain Piagam', weight: 30, description: 'Format piagam deklarasi formal yang estetik dan siap dipasang di mading kelas' }
    ]
  },

  // Modul 4
  {
    assignment_id: 'asg-m4-ind',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-04',
    title: 'Tugas Mandiri: Portofolio Prompt Engineering Terstruktur (Formula PGTC)',
    instructions: 'Buatlah 3 pasang prompt terstruktur menggunakan formula PGTC (Persona, Goal, Task, Context) untuk 3 tugas kejuruan yang berbeda. Sertakan tangkapan layar respons AI, analisis apakah ada halusinasi fakta, dan perbaikan yang kamu lakukan untuk mengunci akurasi keluaran.',
    assignment_type: 'Praktikum',
    is_group: false,
    start_at: '2026-10-22T07:00:00Z',
    due_at: '2026-11-15T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kelengkapan Formula PGTC', weight: 35, description: 'Keempat elemen (Persona, Goal, Task, Context) tertulis jelas pada ketiga prompt' },
      { id: 'r2', name: 'Teknik Few-Shot / Mitigasi Halusinasi', weight: 35, description: 'Penyertaan contoh format dan instruksi grounding pembatas fakta' },
      { id: 'r3', name: 'Analisis Hasil & Kualitas Evaluasi', weight: 30, description: 'Kritis dalam mendeteksi kelemahan jawaban AI dan melakukan perbaikan iteratif' }
    ]
  },
  {
    assignment_id: 'asg-m4-grp',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-04',
    title: 'Tugas Kelompok (PjBL): Proyek Inovasi Solusi Sekolah Berbasis 5 Tahap Design Thinking',
    instructions: 'Bersama kelompokmu, selesaikan satu masalah nyata di lingkungan sekolah (misal: antrean parkir motor, pengelolaan sampah plastik, atau sistem peminjaman proyektor kelas). Lakukan 5 tahap lengkap: 1) Empathize (catatan wawancara korban); 2) Define (rumusan POV); 3) Ideate (minimal 5 ide); 4) Prototype (purwarupa kertas/sketsa/mockup); 5) Test (hasil masukan dari minimal 3 calon pengguna).',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-10-25T07:00:00Z',
    due_at: '2026-11-20T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kedalaman Empati Pengguna', weight: 25, description: 'Kualitas data wawancara riil dan observasi langsung di lingkungan sekolah' },
      { id: 'r2', name: 'Ketajaman Rumusan POV (Define)', weight: 20, description: 'Fokus masalah berpusat pada kebutuhan mendasar pengguna' },
      { id: 'r3', name: 'Kreativitas Solusi & Purwarupa (Prototype)', weight: 30, description: 'Keberanian berinovasi dan wujud purwarupa yang dapat diuji coba' },
      { id: 'r4', name: 'Hasil Uji Pengguna (Test) & Iterasi', weight: 25, description: 'Catatan kritik pengguna dan rencana perbaikan purwarupa tahap berikutnya' }
    ]
  },

  // Modul 5
  {
    assignment_id: 'asg-m5-ind',
    teacher_id: 'usr-guru-02',
    class_id: 'all',
    module_id: 'mod-05',
    title: 'Tugas Mandiri: Publikasi Karya Portofolio Digital Berlisensi Creative Commons',
    instructions: 'Buatlah sebuah karya konten digital edukatif orisinal (bisa berupa foto fotografi kejuruan, infografis ringkas, atau naskah panduan). Terbitkan karya tersebut di portofolio digitalmu dengan menyematkan salah satu lisensi Creative Commons (CC BY, CC BY-SA, atau CC BY-NC) lengkap dengan pernyataan hak cipta resmi.',
    assignment_type: 'Proyek',
    is_group: false,
    start_at: '2026-10-28T07:00:00Z',
    due_at: '2026-11-25T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Orisinalitas & Kualitas Konten', weight: 40, description: 'Karya bebas plagiarisme dan memiliki nilai manfaat edukasi kejuruan' },
      { id: 'r2', name: 'Ketepatan Pemilihan Lisensi CC', weight: 30, description: 'Kesesuaian jenis lisensi yang dipilih dengan intensi hak cipta kreator' },
      { id: 'r3', name: 'Kerapian Format Atribusi', weight: 30, description: 'Pencantuman lencana visual CC dan teks atribusi sesuai standar internasional' }
    ]
  },
  {
    assignment_id: 'asg-m5-grp',
    teacher_id: 'usr-guru-02',
    class_id: 'all',
    module_id: 'mod-05',
    title: 'Tugas Kelompok: Kampanye Poster Digital "Hargai Karya & Sadar Jejak Digital"',
    instructions: 'Rancanglah sebuah poster infografis edukatif ukuran A3 (resolusi tinggi) bersama kelompokmu yang mengampanyekan pentingnya menghormati Hak Cipta orang lain di internet dan membangun jejak digital positif demi kesiapan karier kerja siswa SMK.',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-10-30T07:00:00Z',
    due_at: '2026-11-28T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Komposisi Elemen Multimedia Visual', weight: 30, description: 'Keterpaduan tipografi, tata letak, hierarki visual, dan palet warna' },
      { id: 'r2', name: 'Ketajaman Pesan Edukasi', weight: 30, description: 'Kejelasan pesan ajakan moral menghargai lisensi dan merawat reputasi digital' },
      { id: 'r3', name: 'Legalitas Sumber Aset yang Digunakan', weight: 20, description: 'Seluruh ikon dan gambar pendukung berlisensi legal bebas royalti' },
      { id: 'r4', name: 'Kekompakan Tim & Presentasi', weight: 20, description: 'Pembagian peran adil dan kemampuan mempertahankan argumen saat presentasi' }
    ]
  },

  // Modul 6
  {
    assignment_id: 'asg-m6-ind',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-06',
    title: 'Tugas Mandiri: Praktikum Query SQL Dasar & Analisis Tabel Relasional',
    instructions: 'Gunakan simulator Lab 6 untuk membuat database perpustakaan/koperasi sekolah. Tuliskan kode SQL DDL (CREATE TABLE dengan Primary Key dan Foreign Key) dan kode SQL DML (INSERT 3 data, SELECT dengan kondisi WHERE dan pengurutan ORDER BY, serta UPDATE data). Sertakan bukti tangkapan layar hasil eksekusi query.',
    assignment_type: 'Praktikum',
    is_group: false,
    start_at: '2026-11-01T07:00:00Z',
    due_at: '2026-11-30T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Struktur DDL & Kunci Relasi', weight: 30, description: 'Ketepatan deklarasi Primary Key, Foreign Key, dan tipe data kolom' },
      { id: 'r2', name: 'Sintaks DML INSERT & UPDATE', weight: 30, description: 'Kebenaran penulisan klausa input data dan klausa WHERE pengunci baris' },
      { id: 'r3', name: 'Ketepatan Query SELECT & Filter', weight: 40, description: 'Hasil query menampilkan data yang benar sesuai kriteria pengurutan' }
    ]
  },
  {
    assignment_id: 'asg-m6-grp',
    teacher_id: 'usr-guru-01',
    class_id: 'all',
    module_id: 'mod-06',
    title: 'Tugas Kelompok: Analisis Data Penjualan Toko Sekolah Menggunakan Pivot Table',
    instructions: 'Bersama kelompokmu, olah kumpulan data 100 transaksi toko/koperasi sekolah menggunakan aplikasi lembar sebar (spreadsheet). Buatlah Pivot Table dua dimensi yang menyilangkan Nama Barang pada baris dan Bulan Penjualan pada kolom, lalu sajikan dalam bentuk grafik visual (Chart) disertai rekomendasi pengadaan barang.',
    assignment_type: 'Proyek',
    is_group: true,
    start_at: '2026-11-05T07:00:00Z',
    due_at: '2026-12-05T23:59:00Z',
    max_score: 100,
    status: 'published',
    rubric: [
      { id: 'r1', name: 'Kerapian Data Sumber & Formula', weight: 30, description: 'Tabel sumber bersih tanpa sel merge dan penggunaan rumus agregasi yang tepat' },
      { id: 'r2', name: 'Konfigurasi Pivot Table Dua Dimensi', weight: 40, description: 'Ketepatan penempatan bidang Rows, Columns, dan Values' },
      { id: 'r3', name: 'Wawasan Analisis & Rekomendasi (Wisdom)', weight: 30, description: 'Kualitas simpulan manajerial dalam menentukan strategi stok barang bulan depan' }
    ]
  }
];

// ==========================================
// 32 SOAL KUIS FORMATIF LENGKAP & PEMBAHASAN UNTUK 6 MODUL
// ==========================================
export const COMPREHENSIVE_QUESTIONS: QuestionItem[] = [
  // --- MODUL 1: BERPIKIR KOMPUTASIONAL ---
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
    question_text: 'Siti selalu mengalami kemacetan setiap hari Senin pagi saat berangkat ke sekolah. Ia pun menyadari bahwa hari dan jam tertentu lebih macet dibanding hari lain. Hal ini merupakan contoh penerapan pilar...',
    options: ['Abstraksi', 'Algoritma', 'Dekomposisi', 'Pengenalan Pola', 'Berpikir Kritis'],
    answer_key: 'Pengenalan Pola',
    explanation: 'Melihat tren keberulangan bahwa hari Senin pagi selalu lebih macet dibanding hari lain adalah kecakapan mengenali pola (Pattern Recognition), yang memungkinkan seseorang memprediksi kejadian di masa depan.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-03',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Pada sistem rekomendasi rute otonom yang mengintegrasikan kecerdasan artifisial, sistem mengumpulkan data cuaca real-time dari BMKG dan sensor kamera CCTV lalu lintas. Dalam 4 siklus integrasi KA, proses ini termasuk tahap...',
    options: ['Reasoning', 'Perception (Sensory)', 'Data Representation', 'Learning', 'Algoritma'],
    answer_key: 'Perception (Sensory)',
    explanation: 'Perception (Sensory) merujuk pada tahap penerimaan masukan data mentah dari lingkungan fisik menggunakan sensor perangkat keras (kamera CCTV, GPS, mikrofon) atau antarmuka API eksternal.',
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
    explanation: 'Learning memungkinkan sistem belajar dan beradaptasi dari pengalaman atau data historis masa lalu untuk memperbarui bobot model keputusan, sehingga prediksinya semakin akurat seiring berjalannya waktu.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-05',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Dalam penerapan metode 5 Whys untuk menganalisis keterlambatan penanganan servis sepeda motor di bengkel sekolah, penelusuran pertanyaan "Mengapa" sebaiknya dihentikan ketika menemukan...',
    options: [
      'Nama mekanik yang melakukan kesalahan awal',
      'Faktor cuaca hujan yang tidak dapat dihindari',
      'Akar penyebab sistemik pada ketiadaan atau pelanggaran SOP kerja dan kebijakan kalibrasi alat',
      'Harga suku cadang yang terlalu mahal di pasaran',
      'Keluhan pelanggan yang semakin marah di ruang tunggu'
    ],
    answer_key: 'Akar penyebab sistemik pada ketiadaan atau pelanggaran SOP kerja dan kebijakan kalibrasi alat',
    explanation: 'Metode 5 Whys berfokus pada perbaikan proses (bukan menyalahkan individu). Penelusuran dihentikan saat menyentuh akar masalah sistemik/prosedural (ketiadaan SOP, pelatihan, atau tata kelola alat) yang jika diperbaiki akan mencegah masalah terulang kembali.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m1-06',
    module_id: 'mod-01',
    question_type: 'multiple_choice',
    question_text: 'Dalam pemodelan graf rute perjalanan dari rumah ke sekolah, persimpangan jalan dimodelkan sebagai ..., ruas jalan penghubung sebagai ..., dan perkiraan waktu tempuh kemacetan dinyatakan sebagai...',
    options: [
      'Edge, Node, Weight',
      'Node, Edge, Weight',
      'Weight, Edge, Node',
      'Tree, Branch, Leaf',
      'Record, Field, Table'
    ],
    answer_key: 'Node, Edge, Weight',
    explanation: 'Dalam teori graf matematika: Titik persimpangan lokasi adalah Simpul (Node/Vertex), jalan penghubung antar persimpangan adalah Ruas (Edge), dan biaya/waktu tempuh perjalanan adalah Bobot (Weight).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },

  // --- MODUL 2: ALGORITMA DAN PEMROGRAMAN DASAR ---
  {
    question_id: 'q-m2-01',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Simbol belah ketupat (diamond) pada bagan alir (flowchart) standar ANSI/ISO berfungsi untuk...',
    options: [
      'Menandakan awal atau akhir program (Terminator)',
      'Melakukan operasi perhitungan matematis (Process)',
      'Menerima input data atau mencetak output layar (Input/Output)',
      'Pengambilan keputusan atau pemeriksaan kondisi logika percabangan (Decision)',
      'Menghubungkan alur pada halaman yang berbeda (Off-page Connector)'
    ],
    answer_key: 'Pengambilan keputusan atau pemeriksaan kondisi logika percabangan (Decision)',
    explanation: 'Simbol belah ketupat (Decision) digunakan untuk menguji kondisi logika (misal: "Apakah Nilai >= 75?") yang selalu memiliki minimal dua cabang jalur keluar bertanda Ya (True) atau Tidak (False).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-02',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Diberikan deklarasi array nilai = [70, 85, 90, 65, 100]. Berapakah hasil dari operasi perhitungan: nilai[1] + nilai[3] jika struktur data array menggunakan indeks mulai dari 0 (0-indexed)?',
    options: ['150', '155', '175', '135', '160'],
    answer_key: '150',
    explanation: 'Karena array dimulai dari indeks 0: nilai[0]=70, nilai[1]=85, nilai[2]=90, nilai[3]=65, nilai[4]=100. Maka nilai[1] + nilai[3] = 85 + 65 = 150.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-03',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Sebuah program penggajian kasir berjalan sukses tanpa ada pesan error dari compiler, namun saat mencetak slip gaji, angka potongan pajak bernilai minus dan total gaji menjadi membengkak tidak wajar. Jenis kesalahan (bug) yang terjadi adalah...',
    options: ['Syntax Error', 'Logic Error', 'Runtime Error', 'Compilation Error', 'Division by Zero Error'],
    answer_key: 'Logic Error',
    explanation: 'Logic Error terjadi ketika kode program mematuhi seluruh tata bahasa sintaks (sehingga berhasil dikompilasi), namun logika rumus matematika yang ditulis programmer salah, menghasilkan luaran perhitungan yang keliru.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-04',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Pada model klasifikasi Machine Learning Naive Bayes untuk mendeteksi buah (Apel, Jeruk, Anggur) dengan fitur masukan baru, didapatkan probabilitas posterior: P(Apel) = 0,072; P(Jeruk) = 0,000; P(Anggur) = 0,220. Keputusan klasifikasi yang diambil sistem adalah...',
    options: [
      'Jeruk karena bernilai 0 sehingga tidak mengandung error',
      'Apel karena warnanya paling sering ditemui di pasar',
      'Anggur karena memiliki nilai probabilitas tertinggi (0,220)',
      'Model gagal memprediksi karena seluruh nilai di bawah 1,0',
      'Sistem harus mengulang perhitungan dengan regresi linear'
    ],
    answer_key: 'Anggur karena memiliki nilai probabilitas tertinggi (0,220)',
    explanation: 'Pada algoritma Naive Bayes Classifier, kelas target yang dipilih sebagai hasil keputusan akhir adalah kelas yang memiliki nilai probabilitas posterior tertinggi (Maximum A Posteriori / MAP).',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m2-05',
    module_id: 'mod-02',
    question_type: 'multiple_choice',
    question_text: 'Perbedaan mendasar antara algoritma pengurutan Selection Sort dan Insertion Sort dalam menyusun data dari terkecil ke terbesar adalah...',
    options: [
      'Selection Sort menyisipkan elemen ke posisi yang tepat, sedangkan Insertion Sort membagi array menjadi dua bagian',
      'Selection Sort mencari elemen dengan nilai terkecil pada deret yang belum terurut lalu menukarnya ke posisi depan, sedangkan Insertion Sort mengambil elemen satu per satu dan menyisipkannya pada posisi yang pas di bagian deret yang sudah terurut',
      'Insertion Sort memerlukan memori dua kali lebih besar dari Selection Sort',
      'Selection Sort hanya dapat digunakan untuk data teks, sedangkan Insertion Sort khusus data angka',
      'Keduanya memiliki cara kerja yang persis sama tanpa perbedaan teknis'
    ],
    answer_key: 'Selection Sort mencari elemen dengan nilai terkecil pada deret yang belum terurut lalu menukarnya ke posisi depan, sedangkan Insertion Sort mengambil elemen satu per satu dan menyisipkannya pada posisi yang pas di bagian deret yang sudah terurut',
    explanation: 'Selection Sort bekerja dengan metode "mencari minimum lalu menukar", sedangkan Insertion Sort bekerja dengan metode "mengambil elemen lalu menggeser dan menyisipkannya" seperti menyusun kartu remi di tangan.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // --- MODUL 3: PENGENALAN CARA KERJA AI & ETIKA AI ---
  {
    question_id: 'q-m3-01',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Profesi di era kecerdasan artifisial yang bertugas secara khusus mengaudit dataset dan model algoritma agar terbebas dari bias diskriminatif, menjaga privasi data warga, serta memastikan transparansi sistem adalah...',
    options: ['Machine Learning Engineer', 'Data Scientist', 'AI Ethics Specialist', 'Robotics Hardware Engineer', 'DevOps Specialist'],
    answer_key: 'AI Ethics Specialist',
    explanation: 'AI Ethics Specialist bertanggung jawab mengaudit keadilan sosial, transparansi, mitigasi bias data, dan kepatuhan hukum privasi pada sistem kecerdasan artifisial modern.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-02',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Surat Edaran Menkominfo No. 9 Tahun 2023 mengatur pedoman nilai etika pengembangan dan pemanfaatan kecerdasan artifisial di Indonesia. Tiga di antara prinsip nilai utamanya adalah...',
    options: [
      'Monopoli bisnis, komersialisasi bebas, dan kerahasiaan algoritma tertutup',
      'Inklusivitas, Pelindungan Data Pribadi (UU PDP), dan Akuntabilitas',
      'Penghapusan profesi tenaga kerja manusia secara otomatis tanpa transisi',
      'Kebebasan hak cipta tanpa batas dan legalisasi plagiarisme AI',
      'Pelarangan penggunaan teknologi digital di lingkungan sekolah'
    ],
    answer_key: 'Inklusivitas, Pelindungan Data Pribadi (UU PDP), dan Akuntabilitas',
    explanation: 'SE Menkominfo No. 9/2023 menegaskan prinsip inklusivitas (bebas diskriminasi), kepatuhan terhadap UU Perlindungan Data Pribadi No. 27/2022, serta akuntabilitas hukum bagi pihak pengembang teknologi.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-03',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Bagaimana komputer merepresentasikan sebuah gambar berwarna digital beresolusi 200 x 200 piksel saat menjalankan proses pengenalan citra (Computer Vision)?',
    options: [
      'Sebagai satu rangkaian kalimat teks panjang berbahasa Inggris',
      'Sebagai susunan matriks kisi-kisi angka dengan 3 saluran warna RGB yang masing-masing bernilai antara 0 hingga 255',
      'Sebagai file audio frekuensi gelombang ultrasonik',
      'Sebagai diagram alir flowchart dengan simbol decision',
      'Sebagai tabel pivot spreadsheet dua dimensi'
    ],
    answer_key: 'Sebagai susunan matriks kisi-kisi angka dengan 3 saluran warna RGB yang masing-masing bernilai antara 0 hingga 255',
    explanation: 'Citra digital di mata komputer adalah matriks angka. Setiap piksel terdiri dari 3 nilai warna primer: Red, Green, Blue dengan skala intensitas 0 (gelap/mati) sampai 255 (intensitas penuh). Komputer mengenali objek melalui pola lonjakan angka pada matriks tersebut.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-04',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Dalam Kerangka Kompetensi AI UNESCO (2024), dimensi "Human-Centred Mindset" (Pola Pikir Berpusat pada Manusia) menegaskan bahwa...',
    options: [
      'Seluruh pekerjaan manusia harus digantikan oleh robot dalam waktu sesingkat-singkatnya',
      'Kecerdasan artifisial memiliki hak asasi yang setara dengan manusia',
      'Teknologi AI dikembangkan untuk melayani martabat kemanusiaan dan keadilan sosial, di mana tanggung jawab moral serta keputusan akhir tetap berada di tangan manusia',
      'Manusia tidak perlu lagi belajar berpikir kritis karena AI telah mengetahui segala jawaban',
      'Pengembangan AI tidak boleh diawasi oleh hukum pemerintah'
    ],
    answer_key: 'Teknologi AI dikembangkan untuk melayani martabat kemanusiaan dan keadilan sosial, di mana tanggung jawab moral serta keputusan akhir tetap berada di tangan manusia',
    explanation: 'Prinsip Human-Centred UNESCO menekankan konsep "Human in the loop": AI berfungsi sebagai penguat potensi manusia, namun tanggung jawab etis dan kendali keselamatan tertinggi mutlak dipegang oleh manusia.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m3-05',
    module_id: 'mod-03',
    question_type: 'multiple_choice',
    question_text: 'Sebuah kamera presensi pintar di gerbang sekolah sering gagal mengenali wajah siswa yang mengenakan kerudung atau siswa berkulit gelap saat cuaca mendung. Analisis akar penyebab paling tepat berdasarkan teori Machine Learning adalah...',
    options: [
      'Resolusi kamera terlalu tinggi sehingga komputer kelebihan memori',
      'Terjadi bias data (algorithmic bias) karena proporsi data latih (training dataset) tidak seimbang dan minim variasi pencahayaan serta ragam etnis',
      'Siswa tersebut sengaja mengubah struktur wajahnya',
      'Algoritma pemrograman Python tidak mendukung warna kulit gelap',
      'Kabel koneksi internet sekolah mengalami gangguan routing mikrotik'
    ],
    answer_key: 'Terjadi bias data (algorithmic bias) karena proporsi data latih (training dataset) tidak seimbang dan minim variasi pencahayaan serta ragam etnis',
    explanation: 'AI belajar murni dari data historis yang diberikan. Jika data latih pengenalan wajah mayoritas hanya berisi foto wajah terang dengan pencahayaan studio, model akan bias dan gagal menggeneralisasi wajah dengan kerudung atau variasi warna kulit di bawah cahaya redup.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },

  // --- MODUL 4: PROMPT ENGINEERING & DESIGN THINKING ---
  {
    question_id: 'q-m4-01',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Pada teknik prompt engineering, ketika pengguna memberikan instruksi langsung kepada model Large Language Model (LLM) tanpa menyertakan contoh masukan-keluaran (input-output pairs) sama sekali, teknik ini disebut...',
    options: ['Few-Shot Prompting', 'Zero-Shot Prompting', 'Chain-of-Thought Prompting', 'Grounding Prompting', 'Fine-Tuning'],
    answer_key: 'Zero-Shot Prompting',
    explanation: 'Zero-shot prompting adalah pemberian instruksi kerja langsung kepada AI tanpa memberikan contoh pasangan masukan-keluaran terlebih dahulu.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-02',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Dalam formula prompt engineering PGTC, kepanjangan dari keempat huruf tersebut yang benar adalah...',
    options: [
      'Problem, Goal, Task, Condition',
      'Persona, Goal, Task, Context',
      'Parameter, Grammar, Topic, Content',
      'Protocol, Guide, Template, Check',
      'Profile, Generation, Training, Code'
    ],
    answer_key: 'Persona, Goal, Task, Context',
    explanation: 'Formula PGTC terdiri dari Persona (Peran ahli yang diemban AI), Goal (Tujuan akhir yang ingin dicapai), Task (Langkah instruksi kerja spesifik), dan Context (Latar belakang situasi dan batasan format).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-03',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Mengapa model kecerdasan artifisial generatif berbasis Large Language Model (LLM) terkadang dapat menghasilkan jawaban yang salah secara fakta namun disampaikan dengan nada bahasa yang sangat percaya diri (fenomena Halusinasi AI)?',
    options: [
      'Karena AI sengaja ingin menipu manusia agar merasa pintar',
      'Karena LLM bekerja menggunakan kalkulasi statistik untuk memprediksi token kata berikutnya (next-token prediction) yang terdengar plausibel secara tata bahasa, bukan berdasarkan basis pemahaman fakta absolut',
      'Karena memori RAM komputer server AI sedang penuh',
      'Karena jaringan kabel fiber optik internasional mengalami packet loss',
      'Karena AI terinfeksi oleh virus trojan komputer'
    ],
    answer_key: 'Karena LLM bekerja menggunakan kalkulasi statistik untuk memprediksi token kata berikutnya (next-token prediction) yang terdengar plausibel secara tata bahasa, bukan berdasarkan basis pemahaman fakta absolut',
    explanation: 'LLM tidak memiliki kesadaran fakta; model ini dilatih memprediksi probabilitas kata berikutnya. Jika konteks prompt kurang spesifik, AI akan merangkai kata yang terdengar meyakinkan secara gramatikal meskipun secara faktual salah (halusinasi).',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-04',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Teknik menyertakan dokumen referensi resmi (seperti undang-undang atau SOP bengkel) ke dalam prompt dan menginstruksikan AI agar hanya menjawab dari teks tersebut untuk membasmi halusinasi disebut...',
    options: ['Chain-of-Thought', 'Grounding (RAG)', 'Few-Shot Example', 'Temperature Scaling', 'Next-Token Sampling'],
    answer_key: 'Grounding (RAG)',
    explanation: 'Grounding (menambatkan fakta) memaksa model AI mengambil fakta hanya dari batas teks sumber yang dilampirkan, sehingga mencegah model mengarang informasi fiktif.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m4-05',
    module_id: 'mod-04',
    question_type: 'multiple_choice',
    question_text: 'Urutan 5 tahapan berulang dalam metodologi inovasi Design Thinking yang benar adalah...',
    options: [
      'Define → Empathize → Ideate → Prototype → Test',
      'Empathize → Define → Ideate → Prototype → Test',
      'Ideate → Prototype → Test → Empathize → Define',
      'Prototype → Test → Define → Ideate → Empathize',
      'Empathize → Ideate → Prototype → Define → Test'
    ],
    answer_key: 'Empathize → Define → Ideate → Prototype → Test',
    explanation: 'Design Thinking selalu diawali dengan berempati memahami keluhan pengguna (Empathize), merumuskan fokus masalah POV (Define), mencurahkan banyak ide solusi (Ideate), membuat purwarupa cepat (Prototype), dan mengujinya ke pengguna asli (Test).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },

  // --- MODUL 5: KREATIVITAS DIGITAL, HAK CIPTA & JEJAK DIGITAL ---
  {
    question_id: 'q-m5-01',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Jenis lisensi Creative Commons yang mengizinkan orang lain menyebarluaskan dan memodifikasi karyamu, asalkan mencantumkan nama pencipta dan karya baru turunannya wajib dilisensikan dengan ketentuan yang persis sama, adalah...',
    options: ['CC BY-ND', 'CC BY-NC', 'CC BY-SA', 'CC BY-NC-ND', 'Domain Publik CC0'],
    answer_key: 'CC BY-SA',
    explanation: 'Simbol SA (ShareAlike / Berbagi Serupa) mewajibkan bahwa seluruh karya turunan atau modifikasi wajib disebarkan kembali dengan lisensi yang sama dengan karya aslinya.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-02',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Berdasarkan Undang-Undang Hak Cipta No. 28 Tahun 2014, hak cipta terdiri dari dua jenis hak utama: Hak Moral dan Hak Ekonomi. Perbedaan mendasar di antara keduanya adalah...',
    options: [
      'Hak Moral dapat dijual ke perusahaan lain, sedangkan Hak Ekonomi melekat abadi pada pencipta',
      'Hak Moral melekat abadi pada diri pencipta (seperti hak mencantumkan nama dan melarang pengubahan karya), sedangkan Hak Ekonomi adalah hak eksklusif untuk mendapatkan keuntungan finansial dari karya tersebut',
      'Hak Moral hanya berlaku bagi karya lagu, sedangkan Hak Ekonomi berlaku bagi karya software komputer',
      'Hak Ekonomi kedaluwarsa setelah 2 tahun, sedangkan Hak Moral kedaluwarsa setelah 5 tahun',
      'Keduanya memiliki fungsi yang sama persis dalam urusan pajak negara'
    ],
    answer_key: 'Hak Moral melekat abadi pada diri pencipta (seperti hak mencantumkan nama dan melarang pengubahan karya), sedangkan Hak Ekonomi adalah hak eksklusif untuk mendapatkan keuntungan finansial dari karya tersebut',
    explanation: 'Pasal 5 UU Hak Cipta menegaskan Hak Moral melekat secara abadi pada pencipta dan tidak dapat dialihkan selama pencipta hidup, sedangkan Hak Ekonomi (Pasal 8) mencakup hak penerbitan, penggandaan, dan royalti uang.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-03',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Lisensi Creative Commons yang paling ketat, di mana pihak lain hanya diperbolehkan mengunduh dan membagikan karya secara utuh, wajib mencantumkan nama pencipta, dilarang mengubah isi karya sedikitpun, dan dilarang untuk komersial adalah...',
    options: ['CC BY', 'CC BY-NC-SA', 'CC BY-NC-ND', 'CC BY-ND', 'CC0'],
    answer_key: 'CC BY-NC-ND',
    explanation: 'CC BY-NC-ND adalah lisensi CC paling restriktif: wajib Atribusi (BY), Non-Komersial (NC), dan Tanpa Turunan / NoDerivatives (ND).',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-04',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Di era digital, kita meninggalkan dua macam jejak digital. Contoh dari Jejak Digital Pasif adalah...',
    options: [
      'Mengunggah foto tugas praktikum ke Instagram Feed',
      'Menuliskan komentar kemarahan di video TikTok orang lain',
      'Alamat IP perangkat, data cookies riwayat penelusuran peramban web, dan koordinat lokasi GPS yang terekam secara otomatis oleh server aplikasi',
      'Mengirimkan surel (email) lamaran magang PKL ke perusahaan mitra',
      'Mengisi formulir angket kuis secara sukarela di Google Forms'
    ],
    answer_key: 'Alamat IP perangkat, data cookies riwayat penelusuran peramban web, dan koordinat lokasi GPS yang terekam secara otomatis oleh server aplikasi',
    explanation: 'Jejak digital pasif adalah jejak data yang tertinggal tanpa disadari langsung oleh pengguna saat mengakses sistem (IP address, log cookies, waktu tayang, GPS), sedangkan postingan atau komentar adalah jejak aktif.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m5-05',
    module_id: 'mod-05',
    question_type: 'multiple_choice',
    question_text: 'Seorang siswa SMK yang sedang melamar magang PKL di industri ternama ditolak oleh manajer HRD karena riwayat postingan media sosialnya 2 tahun lalu penuh dengan ujaran kebencian, cacian terhadap guru, dan rekam jejak cyberbullying. Pembelajaran moral terpenting dari kasus ini adalah...',
    options: [
      'Sebaiknya siswa menggunakan nama samaran saat membuat akun media sosial',
      'Internet memiliki sifat abadi di mana jejak digital masa lalu dapat memengaruhi reputasi karier profesional di masa depan',
      'Perusahaan tidak berhak memeriksa akun media sosial calon pegawai',
      'Siswa sebaiknya tidak perlu menggunakan internet sama sekali',
      'Hapus akun media sosial sebelum jam wawancara kerja'
    ],
    answer_key: 'Internet memiliki sifat abadi di mana jejak digital masa lalu dapat memengaruhi reputasi karier profesional di masa depan',
    explanation: 'Prinsip digital citizenship: internet tidak pernah benar-benar lupa (the internet never forgets). Jejak digital adalah cerminan integritas dan karakter personal yang kini menjadi indikator seleksi magang dan kerja profesional.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },

  // --- MODUL 6: PENGELOLAAN INFORMASI DIGITAL & BASIS DATA ---
  {
    question_id: 'q-m6-01',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Pada basis data relasional, kolom di tabel transaksi "Peminjaman_Buku" yang nilainya merujuk pada Primary Key kolom "NIS" di tabel induk "Peserta_Didik" disebut sebagai...',
    options: ['Candidate Key', 'Foreign Key (Kunci Asing / Tamu)', 'Super Key', 'Composite Key', 'Secondary Index'],
    answer_key: 'Foreign Key (Kunci Asing / Tamu)',
    explanation: 'Foreign Key adalah atribut pada tabel transaksi yang merujuk pada Primary Key tabel master/induk, berfungsi sebagai jembatan pembentuk integritas referensial antartabel.',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-02',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Perintah Structured Query Language (SQL) berikut ini yang seluruhnya termasuk dalam kelompok Data Manipulation Language (DML) adalah...',
    options: [
      'CREATE TABLE, ALTER TABLE, dan DROP TABLE',
      'GRANT, REVOKE, dan DENY',
      'INSERT INTO, SELECT FROM, UPDATE, dan DELETE FROM',
      'CREATE DATABASE, USE, dan TRUNCATE',
      'PRIMARY KEY, FOREIGN KEY, dan NOT NULL'
    ],
    answer_key: 'INSERT INTO, SELECT FROM, UPDATE, dan DELETE FROM',
    explanation: 'DML (Data Manipulation Language) adalah kelompok perintah SQL untuk memanipulasi baris data record: INSERT (menambah), SELECT (mengambil/menampilkan), UPDATE (mengubah), dan DELETE (menghapus data).',
    difficulty: 'Mudah',
    cognitive_level: 'LOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-03',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Dalam hierarki Piramida DIKW (Data, Information, Knowledge, Wisdom), perubahan dari tahap "Data" menjadi "Information" terjadi ketika...',
    options: [
      'Data mentah diacak menggunakan generator bilangan acak',
      'Data mentah diberi konteks makna, dikelompokkan, dan diproses sehingga memiliki arti bagi pembaca',
      'Data dienkripsi menggunakan algoritma SHA-256',
      'Data dihapus seluruhnya dari memori basis data',
      'Data dicetak ke atas kertas dokumen resmi'
    ],
    answer_key: 'Data mentah diberi konteks makna, dikelompokkan, dan diproses sehingga memiliki arti bagi pembaca',
    explanation: 'Data adalah fakta mentah tanpa konteks (misal angka "85"). Ketika diberi label dan konteks ("Nilai Ujian KKA Budi = 85, di atas KKM 75"), data tersebut bertransformasi menjadi Informasi yang bermakna.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-04',
    module_id: 'mod-06',
    question_type: 'multiple_choice',
    question_text: 'Apa akibat fatal yang terjadi jika seorang pengelola basis data menjalankan perintah: UPDATE siswa SET status = "Lulus"; tanpa menyertakan klausa WHERE nis = "20261001"?',
    options: [
      'Hanya siswa nomor 1 yang statusnya berubah menjadi lulus',
      'Server basis data akan menolak perintah dan mengeluarkan error otomatis',
      'SELURUH baris data siswa yang ada di dalam tabel tersebut seketika akan berubah statusnya menjadi "Lulus"',
      'Tabel siswa akan terhapus dari server phpMyAdmin',
      'Sistem akan meminta password administrator kedua'
    ],
    answer_key: 'SELURUH baris data siswa yang ada di dalam tabel tersebut seketika akan berubah statusnya menjadi "Lulus"',
    explanation: 'Dalam SQL, klausa WHERE berfungsi sebagai pengunci baris mana yang boleh diubah. Tanpa WHERE, perintah UPDATE akan menimpa seluruh baris data di dalam tabel secara serentak.',
    difficulty: 'Sukar',
    cognitive_level: 'HOTS',
    status: 'active'
  },
  {
    question_id: 'q-m6-05',
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
    explanation: 'Dalam Pivot Table dua dimensi: Kategori yang ingin ditampilkan ke bawah diletakkan pada Rows (Baris), sedangkan angka yang ingin dihitung rata-ratanya diletakkan pada Values dengan fungsi agregasi AVERAGE.',
    difficulty: 'Sedang',
    cognitive_level: 'MOTS',
    status: 'active'
  }
];
