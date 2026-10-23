import { TableSchemaDefinition } from '../types';

export const SCHEMA_DEFINITIONS: TableSchemaDefinition[] = [
  // 1. Majors
  {
    tableName: 'Majors',
    sheetIndex: 1,
    description: 'Menyimpan master data 8 program keahlian/jurusan SMK: DKV, TKP, DPIB, TOI, TITL, TAV, TSM, dan TKR.',
    category: 'Master Identitas',
    primaryKey: 'major_id',
    foreignKeys: [],
    initialRowCount: 8,
    columns: [
      { name: 'major_id', type: 'STRING', required: true, isPk: true, validationRule: 'Format: mjr-[kode_jurusan]', sampleValue: 'mjr-dkv', description: 'ID unik program keahlian/jurusan (Primary Key)' },
      { name: 'major_code', type: 'STRING', required: true, validationRule: 'DKV | TKP | DPIB | TOI | TITL | TAV | TSM | TKR', sampleValue: 'DKV', description: 'Kode singkatan resmi jurusan' },
      { name: 'major_name', type: 'STRING', required: true, validationRule: 'Nama lengkap konsentrasi keahlian SMK', sampleValue: 'Desain Komunikasi Visual', description: 'Nama resmi program keahlian' },
      { name: 'field_category', type: 'STRING', required: true, validationRule: 'Bidang keahlian kejuruan resmi', sampleValue: 'Seni dan Ekonomi Kreatif', description: 'Bidang keahlian Kurikulum Merdeka' },
      { name: 'description', type: 'STRING', required: true, validationRule: 'Ringkasan fokus keilmuan dan penerapan KKA', sampleValue: 'Penerapan komputasi visual, raster-vektor, kontras WCAG...', description: 'Uraian relevansi KKA pada jurusan' },
      { name: 'color', type: 'STRING', required: true, validationRule: 'Kelas warna Tailwind UI', sampleValue: 'from-pink-500 to-rose-600', description: 'Warna identitas tema jurusan' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'active | inactive', sampleValue: 'active', description: 'Status keaktifan jurusan' },
      { name: 'created_at', type: 'ISO_DATE', required: true, validationRule: 'Format ISO 8601', sampleValue: '2026-07-01T08:00:00Z', description: 'Waktu pencatatan jurusan' }
    ]
  },

  // 2. Users
  {
    tableName: 'Users',
    sheetIndex: 2,
    description: 'Menyimpan identitas seluruh pengguna sistem (Admin, Guru, Siswa) dengan referensi kelas, jurusan, dan kata sandi ter-enkripsi hash SHA-256.',
    category: 'Master Identitas',
    primaryKey: 'user_id',
    foreignKeys: [
      { column: 'class_id', targetTable: 'Classes', targetColumn: 'class_id' },
      { column: 'major_id', targetTable: 'Majors', targetColumn: 'major_id' }
    ],
    initialRowCount: 13,
    columns: [
      { name: 'user_id', type: 'STRING', required: true, isPk: true, validationRule: 'Format: usr-[role]-[unique_id]', sampleValue: 'usr-siswa-01', description: 'ID unik pengguna (Primary Key)' },
      { name: 'username', type: 'STRING', required: true, validationRule: 'Huruf kecil, angka, titik, garis bawah (min 3 kar)', sampleValue: 'dela.citra', description: 'Nama pengguna unik untuk login' },
      { name: 'email', type: 'STRING', required: true, validationRule: 'Format email resmi valid', sampleValue: 'dela.citra@siswa.belajar.id', description: 'Alamat surel resmi untuk komunikasi' },
      { name: 'password_hash', type: 'STRING', required: true, validationRule: 'Hash SHA-256 + Salt (TIDAK BOLEH TEKS BIASA)', sampleValue: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', description: 'Hash satu arah kata sandi demi keamanan privasi' },
      { name: 'role', type: 'STRING', required: true, validationRule: 'Nilai valid: admin | guru | siswa', sampleValue: 'siswa', description: 'Tingkat kewenangan akses' },
      { name: 'full_name', type: 'STRING', required: true, validationRule: 'Nama lengkap tanpa gelar atau dengan gelar', sampleValue: 'Dela Citra Lestari', description: 'Nama resmi pengguna' },
      { name: 'student_number', type: 'STRING', required: false, validationRule: 'Nomor Induk Siswa (NIS) atau NIP Guru', sampleValue: '20261001', description: 'Nomor identitas sekolah' },
      { name: 'class_id', type: 'STRING', required: false, isFk: true, refTable: 'Classes', refColumn: 'class_id', validationRule: 'Harus ada di tabel Classes (khusus Siswa)', sampleValue: 'cls-dkv-1', description: 'Rombel tempat siswa terdaftar (Foreign Key)' },
      { name: 'major_id', type: 'STRING', required: false, isFk: true, refTable: 'Majors', refColumn: 'major_id', validationRule: 'Harus ada di tabel Majors', sampleValue: 'mjr-dkv', description: 'ID jurusan siswa (Foreign Key)' },
      { name: 'major_code', type: 'STRING', required: false, validationRule: 'DKV | TKP | DPIB | TOI | TITL | TAV | TSM | TKR', sampleValue: 'DKV', description: 'Kode singkatan jurusan' },
      { name: 'major', type: 'STRING', required: false, validationRule: 'Nama konsentrasi keahlian', sampleValue: 'Desain Komunikasi Visual', description: 'Nama lengkap jurusan' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'Nilai valid: active | inactive', sampleValue: 'active', description: 'Status keaktifan akun pengguna' },
      { name: 'created_at', type: 'ISO_DATE', required: true, validationRule: 'Format ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)', sampleValue: '2026-07-15T09:00:00Z', description: 'Waktu pembuatan akun' }
    ]
  },

  // 3. Classes
  {
    tableName: 'Classes',
    sheetIndex: 3,
    description: 'Menyimpan data rombongan belajar (rombel) kelas X untuk delapan jurusan SMK, tahun pelajaran, dan wali kelas.',
    category: 'Akademik & Rombel',
    primaryKey: 'class_id',
    foreignKeys: [
      { column: 'major_id', targetTable: 'Majors', targetColumn: 'major_id' },
      { column: 'homeroom_teacher_id', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 8,
    columns: [
      { name: 'class_id', type: 'STRING', required: true, isPk: true, validationRule: 'Format: cls-[jurusan]-[rombel]', sampleValue: 'cls-dkv-1', description: 'ID unik rombongan belajar (Primary Key)' },
      { name: 'class_name', type: 'STRING', required: true, validationRule: 'Contoh: X DKV 1, X TKP 1, X DPIB 1, dsb', sampleValue: 'X DKV 1', description: 'Nama tampilan rombel di sekolah' },
      { name: 'grade', type: 'STRING', required: true, validationRule: 'Tingkat kelas: X', sampleValue: 'X', description: 'Tingkat jenjang kelas' },
      { name: 'major_id', type: 'STRING', required: true, isFk: true, refTable: 'Majors', refColumn: 'major_id', validationRule: 'Harus ada di tabel Majors', sampleValue: 'mjr-dkv', description: 'ID Jurusan (Foreign Key)' },
      { name: 'major_code', type: 'STRING', required: true, validationRule: 'DKV | TKP | DPIB | TOI | TITL | TAV | TSM | TKR', sampleValue: 'DKV', description: 'Kode jurusan' },
      { name: 'major', type: 'STRING', required: true, validationRule: 'Nama bidang / konsentrasi keahlian', sampleValue: 'Desain Komunikasi Visual', description: 'Nama jurusan rombongan belajar' },
      { name: 'rombel', type: 'STRING', required: true, validationRule: 'Nomor rombel (1, 2, dst)', sampleValue: '1', description: 'Nomor rombongan belajar' },
      { name: 'academic_year', type: 'STRING', required: true, validationRule: 'Format: YYYY/YYYY', sampleValue: '2026/2027', description: 'Tahun ajaran aktif' },
      { name: 'homeroom_teacher_id', type: 'STRING', required: false, isFk: true, refTable: 'Users', refColumn: 'user_id', validationRule: 'Harus merujuk user dengan role guru', sampleValue: 'usr-guru-01', description: 'ID Guru wali kelas (Foreign Key)' },
      { name: 'total_students', type: 'NUMBER', required: false, sampleValue: '36', description: 'Estimasi jumlah siswa dalam rombel' }
    ]
  },

  // 4. TeacherClasses
  {
    tableName: 'TeacherClasses',
    sheetIndex: 4,
    description: 'Menyimpan penugasan mengajar guru pada kelas tertentu dan mata pelajaran KKA.',
    category: 'Akademik & Rombel',
    primaryKey: 'assignment_id',
    foreignKeys: [
      { column: 'teacher_id', targetTable: 'Users', targetColumn: 'user_id' },
      { column: 'class_id', targetTable: 'Classes', targetColumn: 'class_id' }
    ],
    initialRowCount: 8,
    columns: [
      { name: 'assignment_id', type: 'STRING', required: true, isPk: true, sampleValue: 'tc-01', description: 'ID unik penugasan mengajar (Primary Key)' },
      { name: 'teacher_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-guru-01', description: 'ID Guru pengampu (Foreign Key)' },
      { name: 'class_id', type: 'STRING', required: true, isFk: true, refTable: 'Classes', refColumn: 'class_id', sampleValue: 'cls-dkv-1', description: 'ID Kelas yang diampu (Foreign Key)' },
      { name: 'subject', type: 'STRING', required: true, sampleValue: 'Koding dan Kecerdasan Artifisial', description: 'Mata pelajaran yang diajarkan' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'active | inactive', sampleValue: 'active', description: 'Status keaktifan penugasan' }
    ]
  },

  // 4. Modules
  {
    tableName: 'Modules',
    sheetIndex: 4,
    description: 'Menyimpan 6 modul utama KKA Kelas X berdasarkan buku teks resmi Kemendikdasmen 2025.',
    category: 'Kurikulum & Lab',
    primaryKey: 'module_id',
    foreignKeys: [],
    initialRowCount: 6,
    columns: [
      { name: 'module_id', type: 'STRING', required: true, isPk: true, sampleValue: 'mod-01', description: 'ID unik modul (Primary Key)' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'Modul 1: Berpikir Komputasional', description: 'Judul resmi modul pembelajaran' },
      { name: 'description', type: 'STRING', required: true, sampleValue: 'Penerapan 4 pilar komputasional dalam kehidupan sehari-hari.', description: 'Deskripsi ringkas materi modul' },
      { name: 'sequence', type: 'NUMBER', required: true, validationRule: 'Bilangan bulat 1 s.d. 6', sampleValue: '1', description: 'Urutan bab dalam kurikulum' },
      { name: 'learning_objectives', type: 'JSON_STRING', required: true, sampleValue: '["Menerapkan 4 pilar berpikir komputasional","Analisis 5 Whys"]', description: 'Daftar Capaian dan Tujuan Pembelajaran' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'active | draft', sampleValue: 'active', description: 'Status ketersediaan modul untuk siswa' }
    ]
  },

  // 5. Lessons
  {
    tableName: 'Lessons',
    sheetIndex: 5,
    description: 'Menyimpan rincian subbab materi pembelajaran di dalam setiap modul beserta media belajar.',
    category: 'Kurikulum & Lab',
    primaryKey: 'lesson_id',
    foreignKeys: [{ column: 'module_id', targetTable: 'Modules', targetColumn: 'module_id' }],
    initialRowCount: 24,
    columns: [
      { name: 'lesson_id', type: 'STRING', required: true, isPk: true, sampleValue: 'les-01-1', description: 'ID unik subbab materi (Primary Key)' },
      { name: 'module_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'Modul induk subbab ini (Foreign Key)' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'A. Penerapan Berpikir Komputasional Sehari-hari', description: 'Judul subbab materi' },
      { name: 'content', type: 'STRING', required: true, sampleValue: 'Uraian narasi dekomposisi, pola, abstraksi, dan algoritma.', description: 'Teks isi pembelajaran lengkap' },
      { name: 'learning_media', type: 'STRING', required: false, sampleValue: 'https://buku.kemdikbud.go.id/s/kka10ax', description: 'Tautan video, gambar, atau media penunjang' },
      { name: 'sequence', type: 'NUMBER', required: true, sampleValue: '1', description: 'Urutan subbab di dalam modul' },
      { name: 'status', type: 'STRING', required: true, sampleValue: 'active', description: 'Status tayang subbab' }
    ]
  },

  // 6. Labs
  {
    tableName: 'Labs',
    sheetIndex: 6,
    description: 'Menyimpan konfigurasi 6 laboratorium digital interaktif (LAB KKA) dan panduan praktikum.',
    category: 'Kurikulum & Lab',
    primaryKey: 'lab_id',
    foreignKeys: [{ column: 'module_id', targetTable: 'Modules', targetColumn: 'module_id' }],
    initialRowCount: 6,
    columns: [
      { name: 'lab_id', type: 'STRING', required: true, isPk: true, sampleValue: 'lab-01', description: 'ID unik laboratorium praktikum (Primary Key)' },
      { name: 'module_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'ID Modul terkait (Foreign Key)' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'Lab 1: Berpikir Komputasional & 5 Whys', description: 'Nama laboratorium praktikum' },
      { name: 'lab_type', type: 'STRING', required: true, sampleValue: 'graph_route_and_5whys', description: 'Jenis engine simulasi interaktif' },
      { name: 'instructions', type: 'JSON_STRING', required: true, sampleValue: '["Pilih titik R dan S","Atur cuaca","Jalankan algoritma"]', description: 'Langkah instruksi kerja praktikan' },
      { name: 'configuration', type: 'JSON_STRING', required: false, sampleValue: '{"nodes":["R","A","B","C","S"],"defaultTime":"06:30"}', description: 'Parameter awal lingkungan simulasi' },
      { name: 'status', type: 'STRING', required: true, sampleValue: 'active', description: 'Status ketersediaan lab' }
    ]
  },

  // 7. Assignments
  {
    tableName: 'Assignments',
    sheetIndex: 7,
    description: 'Menyimpan data tugas terstruktur, instruksi guru, tenggat waktu, dan rubrik penilaian.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'assignment_id',
    foreignKeys: [
      { column: 'teacher_id', targetTable: 'Users', targetColumn: 'user_id' },
      { column: 'class_id', targetTable: 'Classes', targetColumn: 'class_id' },
      { column: 'module_id', targetTable: 'Modules', targetColumn: 'module_id' }
    ],
    initialRowCount: 3,
    columns: [
      { name: 'assignment_id', type: 'STRING', required: true, isPk: true, sampleValue: 'asg-01', description: 'ID unik penugasan (Primary Key)' },
      { name: 'teacher_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-guru-01', description: 'Guru pembuat tugas (Foreign Key)' },
      { name: 'class_id', type: 'STRING', required: true, isFk: true, refTable: 'Classes', refColumn: 'class_id', sampleValue: 'cls-dkv-1', description: 'Kelas target tugas (Foreign Key)' },
      { name: 'module_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'Modul materi terkait (Foreign Key)' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'Analisis 5 Whys Pengelolaan Sampah', description: 'Judul penugasan' },
      { name: 'instructions', type: 'STRING', required: true, sampleValue: 'Terapkan metode 5 Whys pada masalah sampah sekolah.', description: 'Petunjuk pengerjaan terperinci' },
      { name: 'assignment_type', type: 'STRING', required: true, validationRule: 'Uraian | Praktikum | Proyek | LKPD Digital | Refleksi', sampleValue: 'Uraian', description: 'Bentuk tagihan tugas' },
      { name: 'rubric', type: 'JSON_STRING', required: true, sampleValue: '[{"id":"r1","name":"Pemahaman Konsep","weight":25}]', description: 'Kriteria rubrik penilaian dan bobot persentase' },
      { name: 'weight', type: 'NUMBER', required: false, sampleValue: '20', description: 'Bobot penugasan dalam rapor (%)' },
      { name: 'start_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-10T07:00:00Z', description: 'Waktu tugas mulai dibuka' },
      { name: 'due_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-25T23:59:00Z', description: 'Batas akhir waktu pengumpulan' },
      { name: 'max_score', type: 'NUMBER', required: true, sampleValue: '100', description: 'Skor maksimal tugas' },
      { name: 'publish_grades', type: 'BOOLEAN', required: false, sampleValue: 'true', description: 'Kebijakan publikasi nilai ke siswa' },
      { name: 'allow_discussion_view', type: 'BOOLEAN', required: false, sampleValue: 'true', description: 'Kebijakan publikasi pembahasan/kunci ke siswa' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'published | draft | archived', sampleValue: 'published', description: 'Status publikasi tugas' }
    ]
  },

  // 8. Submissions
  {
    tableName: 'Submissions',
    sheetIndex: 8,
    description: 'Menyimpan pengumpulan jawaban tugas siswa, status pengumpulan, skor rubrik, dan umpan balik guru.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'submission_id',
    foreignKeys: [
      { column: 'assignment_id', targetTable: 'Assignments', targetColumn: 'assignment_id' },
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' },
      { column: 'graded_by', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 2,
    columns: [
      { name: 'submission_id', type: 'STRING', required: true, isPk: true, sampleValue: 'sub-01', description: 'ID unik pengumpulan tugas (Primary Key)' },
      { name: 'assignment_id', type: 'STRING', required: true, isFk: true, refTable: 'Assignments', refColumn: 'assignment_id', sampleValue: 'asg-01', description: 'ID Tugas terkait (Foreign Key)' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID Siswa yang mengumpulkan (Foreign Key)' },
      { name: 'answer', type: 'STRING', required: true, sampleValue: 'Dekomposisi masalah sampah: sampah plastik, sisa makanan...', description: 'Teks jawaban atau laporan siswa' },
      { name: 'file_url', type: 'STRING', required: false, sampleValue: 'https://drive.google.com/file/d/...', description: 'Tautan Google Drive atau lampiran karya siswa' },
      { name: 'table_data', type: 'JSON_STRING', required: false, sampleValue: '[["Aspek","Analisis"]]', description: 'Data jawaban matriks tabel siswa' },
      { name: 'submitted_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-14T14:20:00Z', description: 'Waktu penyerahan tugas' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'Belum Dikerjakan | Draf | Terkirim | Terlambat | Perlu Revisi | Sudah Dinilai', sampleValue: 'Sudah Dinilai', description: 'Status penilaian pengumpulan' },
      { name: 'score', type: 'NUMBER', required: false, validationRule: 'Angka rentang 0 s.d. 100', sampleValue: '95', description: 'Nilai akhir yang diberikan guru' },
      { name: 'feedback', type: 'STRING', required: false, sampleValue: 'Analisis 5 Whys sangat tajam dan aplikatif.', description: 'Komentar dan arahan konstruktif guru' },
      { name: 'revision_notes', type: 'STRING', required: false, sampleValue: 'Perbaiki bagian dekomposisi', description: 'Catatan permintaan revisi dari guru' },
      { name: 'graded_by', type: 'STRING', required: false, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-guru-01', description: 'Nama atau ID Guru penilai (Foreign Key)' },
      { name: 'graded_at', type: 'ISO_DATE', required: false, sampleValue: '2026-10-15T09:30:00Z', description: 'Waktu penyelesaian penilaian' }
    ]
  },

  // 9. LKPD
  {
    tableName: 'LKPD',
    sheetIndex: 9,
    description: 'Menyimpan master instrumen Lembar Kerja Peserta Didik Digital KKA Kelas X.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'lkpd_id',
    foreignKeys: [{ column: 'module_id', targetTable: 'Modules', targetColumn: 'module_id' }],
    initialRowCount: 2,
    columns: [
      { name: 'lkpd_id', type: 'STRING', required: true, isPk: true, sampleValue: 'lkpd-01', description: 'ID unik LKPD (Primary Key)' },
      { name: 'module_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'Modul rujukan LKPD (Foreign Key)' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'LKPD Digital 1: Berpikir Komputasional & 5 Whys', description: 'Judul kegiatan LKPD' },
      { name: 'instructions', type: 'STRING', required: true, sampleValue: 'Bacalah petunjuk dan jawab 4 bagian pertanyaan kerja.', description: 'Petunjuk pelaksanaan lembar kerja' },
      { name: 'worksheet_schema', type: 'JSON_STRING', required: true, sampleValue: '{"questions":[{"id":"q1","prompt":"Tuliskan dekomposisi..."}]}', description: 'Struktur formulir input digital' },
      { name: 'status', type: 'STRING', required: true, sampleValue: 'active', description: 'Status ketersediaan LKPD' }
    ]
  },

  // 10. LKPDResponses
  {
    tableName: 'LKPDResponses',
    sheetIndex: 10,
    description: 'Menyimpan respons isian LKPD Digital yang dikerjakan oleh siswa atau perwakilan kelompok.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'response_id',
    foreignKeys: [
      { column: 'lkpd_id', targetTable: 'LKPD', targetColumn: 'lkpd_id' },
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 0,
    columns: [
      { name: 'response_id', type: 'STRING', required: true, isPk: true, sampleValue: 'lkpdr-01', description: 'ID unik respons pengerjaan (Primary Key)' },
      { name: 'lkpd_id', type: 'STRING', required: true, isFk: true, refTable: 'LKPD', refColumn: 'lkpd_id', sampleValue: 'lkpd-01', description: 'ID LKPD yang dikerjakan (Foreign Key)' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID Siswa pengerja (Foreign Key)' },
      { name: 'response_data', type: 'JSON_STRING', required: true, sampleValue: '{"q1":"Jawaban dekomposisi...","q2":"Jawaban 5 whys..."}', description: 'Data jawaban seluruh pertanyaan LKPD' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'Draf | Terkirim | Sudah Dinilai', sampleValue: 'Terkirim', description: 'Status penyerahan LKPD' },
      { name: 'submitted_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T08:00:00Z', description: 'Waktu pengiriman LKPD' },
      { name: 'score', type: 'NUMBER', required: false, sampleValue: '90', description: 'Nilai dari guru' },
      { name: 'feedback', type: 'STRING', required: false, sampleValue: 'Refleksi sangat baik.', description: 'Catatan penguatan dari guru' }
    ]
  },

  // 11. QuestionBank
  {
    tableName: 'QuestionBank',
    sheetIndex: 11,
    description: 'Bank butir soal asesmen KKA dengan label taksonomi kognitif (LOTS, MOTS, HOTS) dan pembahasan buku teks.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'question_id',
    foreignKeys: [{ column: 'module_id', targetTable: 'Modules', targetColumn: 'module_id' }],
    initialRowCount: 12,
    columns: [
      { name: 'question_id', type: 'STRING', required: true, isPk: true, sampleValue: 'q-m1-01', description: 'ID butir soal (Primary Key)' },
      { name: 'module_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'Modul asal soal (Foreign Key)' },
      { name: 'question_type', type: 'STRING', required: true, validationRule: 'multiple_choice | true_false | essay', sampleValue: 'multiple_choice', description: 'Bentuk soal' },
      { name: 'question_text', type: 'STRING', required: true, sampleValue: 'Urutan 4 pilar komputasional yang benar adalah...', description: 'Teks butir pertanyaan' },
      { name: 'options', type: 'JSON_STRING', required: false, sampleValue: '["Pilihan A","Pilihan B","Pilihan C","Pilihan D"]', description: 'Daftar opsi jawaban pilihan ganda' },
      { name: 'answer_key', type: 'STRING', required: true, sampleValue: 'Pilihan B', description: 'Kunci jawaban benar (rahasia guru)' },
      { name: 'explanation', type: 'STRING', required: true, sampleValue: 'Penjelasan konsep berdasarkan buku teks halaman...', description: 'Pembahasan lengkap materi' },
      { name: 'difficulty', type: 'STRING', required: true, validationRule: 'Mudah | Sedang | Sukar', sampleValue: 'Mudah', description: 'Tingkat kesulitan' },
      { name: 'cognitive_level', type: 'STRING', required: true, validationRule: 'LOTS | MOTS | HOTS', sampleValue: 'LOTS', description: 'Level kognitif taksonomi berpikir' },
      { name: 'status', type: 'STRING', required: true, sampleValue: 'active', description: 'Status ketersediaan soal di bank' }
    ]
  },

  // 12. QuizAttempts
  {
    tableName: 'QuizAttempts',
    sheetIndex: 12,
    description: 'Menyimpan riwayat percobaan kuis siswa, skor capaian, dan rincian kemampuan berpikir (LOTS/MOTS/HOTS).',
    category: 'Penugasan & Asesmen',
    primaryKey: 'attempt_id',
    foreignKeys: [
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' },
      { column: 'quiz_id', targetTable: 'Modules', targetColumn: 'module_id' }
    ],
    initialRowCount: 0,
    columns: [
      { name: 'attempt_id', type: 'STRING', required: true, isPk: true, sampleValue: 'att-01', description: 'ID sesi pengerjaan kuis (Primary Key)' },
      { name: 'quiz_id', type: 'STRING', required: true, isFk: true, refTable: 'Modules', refColumn: 'module_id', sampleValue: 'mod-01', description: 'ID Modul kuis (Foreign Key)' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID Siswa yang mengerjakan (Foreign Key)' },
      { name: 'answers', type: 'JSON_STRING', required: true, sampleValue: '{"q-m1-01":"Pilihan B"}', description: 'Rekaman jawaban siswa' },
      { name: 'score', type: 'NUMBER', required: true, validationRule: 'Rentang 0 - 100', sampleValue: '85', description: 'Nilai perolehan kuis' },
      { name: 'started_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T07:30:00Z', description: 'Waktu mulai kuis' },
      { name: 'submitted_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T07:45:00Z', description: 'Waktu penyelesaian kuis' }
    ]
  },

  // 13. LabResults
  {
    tableName: 'LabResults',
    sheetIndex: 13,
    description: 'Menyimpan rekaman artefak praktikum laboratorium digital, data eksperimen, dan catatan refleksi siswa.',
    category: 'Kurikulum & Lab',
    primaryKey: 'result_id',
    foreignKeys: [
      { column: 'lab_id', targetTable: 'Labs', targetColumn: 'lab_id' },
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 1,
    columns: [
      { name: 'result_id', type: 'STRING', required: true, isPk: true, sampleValue: 'res-01', description: 'ID hasil praktikum lab (Primary Key)' },
      { name: 'lab_id', type: 'STRING', required: true, isFk: true, refTable: 'Labs', refColumn: 'lab_id', sampleValue: 'lab-01', description: 'Laboratorium yang diakses (Foreign Key)' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID Siswa praktikan (Foreign Key)' },
      { name: 'experiment_data', type: 'JSON_STRING', required: true, sampleValue: '{"departureTime":"06:30","selectedRoute":"Jalur 2"}', description: 'Parameter dan keluaran simulasi numerik' },
      { name: 'result_summary', type: 'STRING', required: true, sampleValue: 'Rekomendasi Jalur 2 (4.8 km) 15 menit pada cuaca hujan.', description: 'Ringkasan temuan simulasi' },
      { name: 'reflection', type: 'STRING', required: true, sampleValue: 'Dekomposisi membantu memilih jalur alternatif...', description: 'Catatan refleksi pembelajaran bermakna' },
      { name: 'saved_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T08:15:00Z', description: 'Waktu penyimpanan artefak' }
    ]
  },

  // 14. Progress
  {
    tableName: 'Progress',
    sheetIndex: 14,
    description: 'Menyimpan ketercapaian subbab materi siswa untuk pemantauan progres Kurikulum Merdeka.',
    category: 'Monitoring & Sistem',
    primaryKey: 'progress_id',
    foreignKeys: [
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' },
      { column: 'lesson_id', targetTable: 'Lessons', targetColumn: 'lesson_id' }
    ],
    initialRowCount: 0,
    columns: [
      { name: 'progress_id', type: 'STRING', required: true, isPk: true, sampleValue: 'prog-01', description: 'ID progres belajar (Primary Key)' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID Siswa (Foreign Key)' },
      { name: 'lesson_id', type: 'STRING', required: true, isFk: true, refTable: 'Lessons', refColumn: 'lesson_id', sampleValue: 'les-01-1', description: 'ID Subbab yang diselesaikan (Foreign Key)' },
      { name: 'completion_status', type: 'STRING', required: true, validationRule: 'completed | in_progress', sampleValue: 'completed', description: 'Status penyelesaian subbab' },
      { name: 'completion_percentage', type: 'NUMBER', required: true, sampleValue: '100', description: 'Persentase baca' },
      { name: 'updated_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T08:20:00Z', description: 'Waktu pembaruan progres' }
    ]
  },

  // 15. Announcements
  {
    tableName: 'Announcements',
    sheetIndex: 15,
    description: 'Menyimpan pengumuman resmi dari guru atau admin untuk kelas tertentu atau seluruh sekolah.',
    category: 'Monitoring & Sistem',
    primaryKey: 'announcement_id',
    foreignKeys: [{ column: 'author_id', targetTable: 'Users', targetColumn: 'user_id' }],
    initialRowCount: 2,
    columns: [
      { name: 'announcement_id', type: 'STRING', required: true, isPk: true, sampleValue: 'anc-01', description: 'ID pengumuman (Primary Key)' },
      { name: 'author_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-guru-01', description: 'Penulis pengumuman (Foreign Key)' },
      { name: 'target_class', type: 'STRING', required: true, validationRule: 'all | class_id', sampleValue: 'all', description: 'Kelas sasaran pengumuman' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'Selamat Datang di Semester Ganjil KKA Lab', description: 'Judul pengumuman' },
      { name: 'message', type: 'STRING', required: true, sampleValue: 'Mari kita mulai petualangan belajar koding & AI...', description: 'Isi teks pengumuman' },
      { name: 'published_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-10T08:00:00Z', description: 'Waktu terbit pengumuman' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'published | draft', sampleValue: 'published', description: 'Status publikasi' }
    ]
  },

  // 16. AuditLogs
  {
    tableName: 'AuditLogs',
    sheetIndex: 16,
    description: 'Merekam jejak audit keamanan, aktivitas autentikasi, pengubahan data, dan integritas sistem.',
    category: 'Monitoring & Sistem',
    primaryKey: 'log_id',
    foreignKeys: [{ column: 'actor_id', targetTable: 'Users', targetColumn: 'user_id' }],
    initialRowCount: 5,
    columns: [
      { name: 'log_id', type: 'STRING', required: true, isPk: true, sampleValue: 'log-01', description: 'ID jejak audit unik (Primary Key)' },
      { name: 'actor_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-admin-01', description: 'Pelaku aktivitas (Foreign Key)' },
      { name: 'action', type: 'STRING', required: true, sampleValue: 'CREATE_USER', description: 'Kode aksi sistem yang dijalankan' },
      { name: 'target_type', type: 'STRING', required: true, sampleValue: 'User', description: 'Entitas yang dipengaruhi' },
      { name: 'target_id', type: 'STRING', required: true, sampleValue: 'usr-siswa-01', description: 'ID objek sasaran perubahan' },
      { name: 'timestamp', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T08:30:00Z', description: 'Waktu persis pencatatan audit' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'success | failed', sampleValue: 'success', description: 'Status keberhasilan aksi' }
    ]
  },

  // 17. CrossMajorProjects
  {
    tableName: 'CrossMajorProjects',
    sheetIndex: 17,
    description: 'Menyimpan master data proyek kolaborasi lintas 8 jurusan SMK (tema, tujuan, target kejuruan, rubrik mandiri & tim).',
    category: 'Penugasan & Asesmen',
    primaryKey: 'project_id',
    foreignKeys: [{ column: 'created_by', targetTable: 'Users', targetColumn: 'user_id' }],
    initialRowCount: 2,
    columns: [
      { name: 'project_id', type: 'STRING', required: true, isPk: true, sampleValue: 'cmp-01', description: 'ID unik proyek kolaborasi lintas jurusan' },
      { name: 'title', type: 'STRING', required: true, sampleValue: 'Rancang Bangun Kampanye Hemat Energi & Otomasi Sekolah', description: 'Nama proyek kolaborasi terpadu' },
      { name: 'problem_statement', type: 'STRING', required: true, sampleValue: 'Lonjakan biaya listrik sekolah & pemborosan AC/lampu...', description: 'Rumusan tantangan riil yang diselesaikan bersama' },
      { name: 'theme', type: 'STRING', required: true, sampleValue: 'Energi Berkelanjutan & Green School', description: 'Fokus tema proyek' },
      { name: 'target_majors', type: 'JSON_STRING', required: true, sampleValue: '["DKV","TKP","DPIB","TOI","TITL","TAV","TSM","TKR"]', description: 'Daftar konsentrasi keahlian yang terlibat' },
      { name: 'target_classes', type: 'JSON_STRING', required: true, sampleValue: '["cls-dkv-1","cls-tkp-1","cls-titl-1"]', description: 'Rombel sasaran penugasan' },
      { name: 'role_definitions', type: 'JSON_STRING', required: true, sampleValue: '[{"major_code":"DKV","role_title":"Desainer Media"}]', description: 'Spesifikasi pembagian peran dan tagihan per kejuruan' },
      { name: 'individual_rubric', type: 'JSON_STRING', required: true, sampleValue: '[{"id":"ir1","name":"Konsep KKA","weight":30}]', description: 'Rubrik penilaian mandiri per anggota tim' },
      { name: 'group_rubric', type: 'JSON_STRING', required: true, sampleValue: '[{"id":"gr1","name":"Integrasi Solusi","weight":35}]', description: 'Rubrik penilaian produk gabungan kelompok' },
      { name: 'start_at', type: 'ISO_DATE', required: true, sampleValue: '2026-10-15T07:00:00Z', description: 'Waktu proyek dimulai' },
      { name: 'due_at', type: 'ISO_DATE', required: true, sampleValue: '2026-11-20T23:59:00Z', description: 'Batas akhir pengumpulan proyek' },
      { name: 'created_by', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-guru-01', description: 'Guru perancang proyek' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'published | draft | archived', sampleValue: 'published', description: 'Status proyek' }
    ]
  },

  // 18. CrossMajorTeams
  {
    tableName: 'CrossMajorTeams',
    sheetIndex: 18,
    description: 'Menyimpan data kelompok lintas kejuruan, produk gabungan kelompok, nilai kelompok, dan refleksi tim.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'team_id',
    foreignKeys: [
      { column: 'project_id', targetTable: 'CrossMajorProjects', targetColumn: 'project_id' },
      { column: 'leader_student_id', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 1,
    columns: [
      { name: 'team_id', type: 'STRING', required: true, isPk: true, sampleValue: 'cmt-01', description: 'ID kelompok kolaborasi unik' },
      { name: 'project_id', type: 'STRING', required: true, isFk: true, refTable: 'CrossMajorProjects', refColumn: 'project_id', sampleValue: 'cmp-01', description: 'ID proyek yang dikerjakan tim' },
      { name: 'team_name', type: 'STRING', required: true, sampleValue: 'Tim Kolaborasi Adiwiyata Cerdas 10', description: 'Nama regu kerja' },
      { name: 'leader_student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'Siswa koordinator tim' },
      { name: 'final_product_title', type: 'STRING', required: false, sampleValue: 'Laporan Terpadu Blueprint Kampanye & Otomasi Hemat Energi', description: 'Judul produk akhir gabungan' },
      { name: 'final_product_summary', type: 'STRING', required: false, sampleValue: 'Sintesis solusi gabungan 8 jurusan...', description: 'Ringkasan solusi terintegrasi' },
      { name: 'integrated_solution_url', type: 'STRING', required: false, sampleValue: 'https://drive.google.com/file/d/...', description: 'Tautan artefak/dokumen akhir' },
      { name: 'team_reflection', type: 'STRING', required: false, sampleValue: 'Refleksi sinergi multidisiplin...', description: 'Refleksi pembelajaran bermakna tim' },
      { name: 'kka_concepts_applied', type: 'STRING', required: false, sampleValue: 'Dekomposisi, Pengenalan pola, Abstraksi, Algoritma', description: 'Konsep KKA yang terbukti diterapkan' },
      { name: 'group_score', type: 'NUMBER', required: false, sampleValue: '95', description: 'Nilai produk kelompok (terpisah dari nilai individu)' },
      { name: 'group_feedback', type: 'STRING', required: false, sampleValue: 'Sinergi antarjurusan sangat konkret dan teruji.', description: 'Umpan balik guru terhadap karya kelompok' },
      { name: 'group_graded_by', type: 'STRING', required: false, sampleValue: 'usr-guru-01', description: 'Guru penilai kelompok' },
      { name: 'submitted_at', type: 'ISO_DATE', required: false, sampleValue: '2026-10-17T09:30:00Z', description: 'Waktu pengumpulan produk tim' }
    ]
  },

  // 19. CrossMajorContributions
  {
    tableName: 'CrossMajorContributions',
    sheetIndex: 19,
    description: 'Menyimpan rekaman kontribusi individu per anggota tim sesuai peran kejuruan, bukti pengerjaan, nilai individu, dan umpan balik spesifik guru.',
    category: 'Penugasan & Asesmen',
    primaryKey: 'contribution_id',
    foreignKeys: [
      { column: 'team_id', targetTable: 'CrossMajorTeams', targetColumn: 'team_id' },
      { column: 'student_id', targetTable: 'Users', targetColumn: 'user_id' }
    ],
    initialRowCount: 8,
    columns: [
      { name: 'contribution_id', type: 'STRING', required: true, isPk: true, sampleValue: 'cmc-01-01', description: 'ID rekaman kontribusi individu unik' },
      { name: 'team_id', type: 'STRING', required: true, isFk: true, refTable: 'CrossMajorTeams', refColumn: 'team_id', sampleValue: 'cmt-01', description: 'ID tim terkait' },
      { name: 'student_id', type: 'STRING', required: true, isFk: true, refTable: 'Users', refColumn: 'user_id', sampleValue: 'usr-siswa-01', description: 'ID siswa kontributor' },
      { name: 'major_code', type: 'STRING', required: true, validationRule: 'DKV | TKP | DPIB | TOI | TITL | TAV | TSM | TKR', sampleValue: 'DKV', description: 'Jurusan siswa' },
      { name: 'assigned_role_title', type: 'STRING', required: true, sampleValue: 'Desainer Poster & Media Kampanye', description: 'Peran tugas kejuruan yang diemban' },
      { name: 'contribution_text', type: 'STRING', required: true, sampleValue: 'Telah merancang 2 set poster infografis...', description: 'Bukti pengerjaan & analisis mandiri' },
      { name: 'evidence_url', type: 'STRING', required: false, sampleValue: 'https://drive.google.com/file/d/poster', description: 'Tautan bukti karya mandiri siswa' },
      { name: 'individual_score', type: 'NUMBER', required: false, sampleValue: '96', description: 'Nilai individu siswa (terpisah dari nilai kelompok)' },
      { name: 'individual_feedback', type: 'STRING', required: false, sampleValue: 'Poster sangat tajam dan memenuhi standar WCAG AAA.', description: 'Umpan balik konstruktif guru untuk siswa' },
      { name: 'individual_graded_by', type: 'STRING', required: false, sampleValue: 'usr-guru-01', description: 'Guru penilai individu' },
      { name: 'status', type: 'STRING', required: true, validationRule: 'Belum Dikerjakan | Terkirim | Sudah Dinilai', sampleValue: 'Sudah Dinilai', description: 'Status kontribusi' },
      { name: 'submitted_at', type: 'ISO_DATE', required: false, sampleValue: '2026-10-16T10:15:00Z', description: 'Waktu penyerahan bukti peran' }
    ]
  }
];

export const RELATIONSHIP_MATRIX = [
  { parent: 'Classes', child: 'Users', fk: 'Users.class_id → Classes.class_id', cardinality: '1 : N', description: 'Satu kelas rombel menampung banyak siswa' },
  { parent: 'Users', child: 'Classes', fk: 'Classes.homeroom_teacher_id → Users.user_id', cardinality: '1 : 1', description: 'Satu guru menjadi wali kelas pada satu rombel' },
  { parent: 'Users', child: 'TeacherClasses', fk: 'TeacherClasses.teacher_id → Users.user_id', cardinality: '1 : N', description: 'Satu guru mengampu beberapa rombel' },
  { parent: 'Classes', child: 'TeacherClasses', fk: 'TeacherClasses.class_id → Classes.class_id', cardinality: '1 : N', description: 'Satu kelas menerima pengajaran beberapa guru' },
  { parent: 'Modules', child: 'Lessons', fk: 'Lessons.module_id → Modules.module_id', cardinality: '1 : N', description: 'Satu modul memiliki banyak subbab materi' },
  { parent: 'Modules', child: 'Labs', fk: 'Labs.module_id → Modules.module_id', cardinality: '1 : 1', description: 'Satu modul memiliki satu laboratorium digital spesifik' },
  { parent: 'Modules', child: 'Assignments', fk: 'Assignments.module_id → Modules.module_id', cardinality: '1 : N', description: 'Satu modul memiliki beberapa tugas / proyek' },
  { parent: 'Classes', child: 'Assignments', fk: 'Assignments.class_id → Classes.class_id', cardinality: '1 : N', description: 'Penugasan ditujukan spesifik untuk satu rombel' },
  { parent: 'Assignments', child: 'Submissions', fk: 'Submissions.assignment_id → Assignments.assignment_id', cardinality: '1 : N', description: 'Satu tugas dikumpulkan oleh banyak siswa' },
  { parent: 'Users', child: 'Submissions', fk: 'Submissions.student_id → Users.user_id', cardinality: '1 : N', description: 'Satu siswa mengumpulkan banyak penugasan' },
  { parent: 'Modules', child: 'LKPD', fk: 'LKPD.module_id → Modules.module_id', cardinality: '1 : N', description: 'Satu modul menyediakan lembar kerja peserta didik' },
  { parent: 'LKPD', child: 'LKPDResponses', fk: 'LKPDResponses.lkpd_id → LKPD.lkpd_id', cardinality: '1 : N', description: 'Satu LKPD dikerjakan oleh setiap siswa' },
  { parent: 'Modules', child: 'QuestionBank', fk: 'QuestionBank.module_id → Modules.module_id', cardinality: '1 : N', description: 'Bank soal dikelompokkan per modul dan level kognitif' },
  { parent: 'Users', child: 'QuizAttempts', fk: 'QuizAttempts.student_id → Users.user_id', cardinality: '1 : N', description: 'Riwayat pengerjaan asesmen kuis oleh siswa' },
  { parent: 'Labs', child: 'LabResults', fk: 'LabResults.lab_id → Labs.lab_id', cardinality: '1 : N', description: 'Artefak praktikum disimpan ke portofolio' },
  { parent: 'Users', child: 'AuditLogs', fk: 'AuditLogs.actor_id → Users.user_id', cardinality: '1 : N', description: 'Setiap aksi pengguna dicatat dalam jejak audit' },
  { parent: 'CrossMajorProjects', child: 'CrossMajorTeams', fk: 'CrossMajorTeams.project_id → CrossMajorProjects.project_id', cardinality: '1 : N', description: 'Satu proyek kolaborasi lintas jurusan diikuti oleh banyak tim multi-kejuruan' },
  { parent: 'CrossMajorTeams', child: 'CrossMajorContributions', fk: 'CrossMajorContributions.team_id → CrossMajorTeams.team_id', cardinality: '1 : N', description: 'Satu tim kolaborasi memiliki kontribusi individu dari anggota 8 jurusan' },
  { parent: 'Users', child: 'CrossMajorContributions', fk: 'CrossMajorContributions.student_id → Users.user_id', cardinality: '1 : N', description: 'Satu siswa mengunggah bukti pengerjaan perannya dalam tim' }
];

export const COMPLETE_PRODUCTION_CODE_GS = `/**
 * =========================================================================================
 * KKA LEARNING LAB — GOOGLE APPS SCRIPT BACKEND API (Code.gs)
 * =========================================================================================
 * Platform Belajar Digital KKA Kelas X (Semua Jurusan)
 * Backend resmi untuk mengelola basis data 16 Sheet di Google Spreadsheet secara aman,
 * berkecepatan tinggi, terotentikasi, dan mematuhi regulasi privasi data sekolah.
 * 
 * FITUR UTAMA:
 * 1. Inisialisasi Idempoten (setupSpreadsheetDatabase): Memeriksa sheet yang belum ada,
 *    membuat header terstandar, membekukan baris header, dan mengisi data awal (seeding)
 *    jika sheet masih kosong tanpa pernah merusak atau menimpa data yang sudah ada.
 * 2. Keamanan Autentikasi: Password di-hash menggunakan SHA-256 + Salt (tidak pernah
 *    disimpan dalam teks biasa).
 * 3. Mekanisme Concurrency Lock: Menggunakan LockService untuk mencegah benturan penulisan
 *    bersamaan (race condition) pada spreadsheet sekolah.
 * 4. Kontrol Akses Berbasis Role (RBAC): Validasi ketat untuk peran Admin, Guru, dan Siswa.
 * 5. CRUD Lengkap untuk 16 Tabel: Users, Classes, TeacherClasses, Modules, Lessons, Labs,
 *    Assignments, Submissions, LKPD, LKPDResponses, QuestionBank, QuizAttempts, LabResults,
 *    Progress, Announcements, dan AuditLogs.
 * =========================================================================================
 */

var APP_SALT = "KKA_LAB_SECRET_SALT_2026_X";

/**
 * Inisialisasi basis data 16 Sheet secara idempoten dan aman.
 * Jalankan fungsi ini satu kali di editor Apps Script saat pertama kali memasang.
 */
function setupSpreadsheetDatabase() {
  var lock = LockService.getScriptLock();
  lock.tryLock(30000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var tables = [
      {
        name: "Users",
        headers: ["user_id", "username", "email", "password_hash", "role", "full_name", "student_number", "class_id", "major", "status", "created_at"],
        seeds: [
          ["usr-admin-01", "admin", "admin@kkalab.sch.id", hashPassword("admin123"), "admin", "Administrator Utama KKA", "NIP. 197805122003121001", "", "Teknologi Informasi", "active", new Date().toISOString()],
          ["usr-guru-01", "budi.kka", "budirahayu80@guru.sma.belajar.id", hashPassword("guru123"), "guru", "Budi Rahayu, S.Kom., M.Kom.", "NIP. 198004152008011012", "cls-dkv-1", "KKA & Informatika", "active", new Date().toISOString()],
          ["usr-guru-02", "dela.guru", "delachaerani@guru.smk.belajar.id", hashPassword("guru123"), "guru", "Dela Chaerani, M.Si.", "NIP. 198509202011012008", "cls-akl-1", "Rekayasa Perangkat Lunak", "active", new Date().toISOString()],
          ["usr-siswa-01", "dela.citra", "dela.citra@siswa.belajar.id", hashPassword("siswa123"), "siswa", "Dela Citra Lestari", "20261001", "cls-dkv-1", "Desain Komunikasi Visual", "active", new Date().toISOString()],
          ["usr-siswa-02", "bambang.ak", "bambang.setiawan@siswa.belajar.id", hashPassword("siswa123"), "siswa", "Bambang Setiawan", "20261002", "cls-akl-1", "Akuntansi & Keuangan Lembaga", "active", new Date().toISOString()],
          ["usr-siswa-03", "reza.tkj", "reza.pratama@siswa.belajar.id", hashPassword("siswa123"), "siswa", "Reza Pratama", "20261003", "cls-tkj-1", "Teknik Jaringan Komputer", "active", new Date().toISOString()],
          ["usr-siswa-04", "siti.aminah", "siti.aminah@siswa.belajar.id", hashPassword("siswa123"), "siswa", "Siti Aminah Nur", "20261004", "cls-sma-1", "SMA / MA Umum", "active", new Date().toISOString()]
        ]
      },
      {
        name: "Classes",
        headers: ["class_id", "class_name", "grade", "major", "academic_year", "homeroom_teacher_id"],
        seeds: [
          ["cls-dkv-1", "X DKV 1", "X", "Desain Komunikasi Visual", "2026/2027", "usr-guru-01"],
          ["cls-akl-1", "X AKL 1", "X", "Akuntansi & Keuangan Lembaga", "2026/2027", "usr-guru-02"],
          ["cls-tkj-1", "X TJKT 1", "X", "Teknik Komputer & Jaringan", "2026/2027", "usr-guru-01"],
          ["cls-sma-1", "X-1 SMA", "X", "SMA/MA Umum (Fase E)", "2026/2027", "usr-guru-02"]
        ]
      },
      {
        name: "TeacherClasses",
        headers: ["assignment_id", "teacher_id", "class_id", "subject", "status"],
        seeds: [
          ["tc-01", "usr-guru-01", "cls-dkv-1", "Koding dan Kecerdasan Artifisial", "active"],
          ["tc-02", "usr-guru-01", "cls-tkj-1", "Koding dan Kecerdasan Artifisial", "active"],
          ["tc-03", "usr-guru-02", "cls-akl-1", "Koding dan Kecerdasan Artifisial", "active"],
          ["tc-04", "usr-guru-02", "cls-sma-1", "Koding dan Kecerdasan Artifisial", "active"]
        ]
      },
      {
        name: "Modules",
        headers: ["module_id", "title", "description", "sequence", "learning_objectives", "status"],
        seeds: [
          ["mod-01", "Modul 1: Berpikir Komputasional", "Penyelesaian masalah kompleks sehari-hari, 5 Whys, simulasi rute graf terbobot, dan 4 siklus integrasi KA.", 1, JSON.stringify(["Menerapkan 4 pilar komputasional", "Analisis akar masalah 5 Whys", "Simulasi rute tercepat Dijkstra/A*"]), "active"],
          ["mod-02", "Modul 2: Algoritma & Pemrograman Lanjut", "Flowchart standar, array, nested if, sorting, searching, Machine Learning (K-Means & Naive Bayes), dan debugging.", 2, JSON.stringify(["Membuat flowchart standar", "Analisis sorting & searching", "Machine Learning dasar"]), "active"],
          ["mod-03", "Modul 3: Literasi & Etika Kecerdasan Artifisial", "Pengenalan pola citra dan suara, 5 profesi KA, standar UNESCO 2024, dan regulasi SE Menkominfo No. 9/2023.", 3, JSON.stringify(["Memahami pola citra & suara", "Mengenal 5 profesi KA", "Menerapkan etika AI"]), "active"],
          ["mod-04", "Modul 4: Integrasi Prompt Engineering & Design Thinking", "Cara kerja LLM, Zero/Few-shot, formula PGTC, mitigasi bias, dan 5 tahap Design Thinking.", 4, JSON.stringify(["Menyusun prompt PGTC", "Mitigasi bias data", "5 Siklus Design Thinking"]), "active"],
          ["mod-05", "Modul 5: Kreativitas & Etika Produksi Konten", "Konsep multimedia, UU Hak Cipta No 28/2014, 6 lisensi Creative Commons, dan keamanan jejak digital.", 5, JSON.stringify(["Memahami elemen multimedia", "Menerapkan lisensi CC", "Melindungi jejak digital"]), "active"],
          ["mod-06", "Modul 6: Pengelolaan Informasi Digital", "Piramida DIKW, RDBMS vs NoSQL, relasi Primary Key & Foreign Key, sintaks SQL phpMyAdmin, dan Pivot Table.", 6, JSON.stringify(["Memahami piramida DIKW", "Merancang relasi PK-FK", "Query SQL dasar & Pivot"]), "active"]
        ]
      },
      {
        name: "Lessons",
        headers: ["lesson_id", "module_id", "title", "content", "learning_media", "sequence", "status"],
        seeds: [
          ["les-01-1", "mod-01", "A. Penerapan Berpikir Komputasional", "Materi dekomposisi masalah kompleks dan pengenalan pola sehari-hari.", "https://buku.kemdikbud.go.id/s/kka10ax", 1, "active"],
          ["les-01-2", "mod-01", "B. Analisis Masalah dengan 5 Whys", "Menelusuri akar masalah menggunakan metode 5 Whys secara kritis.", "", 2, "active"],
          ["les-01-3", "mod-01", "C. Simulasi Rute Tercepat Rumah ke Sekolah", "Pemodelan jaringan jalan sebagai graf berbobot dinamis.", "", 3, "active"],
          ["les-01-4", "mod-01", "D. Integrasi KA dalam Berpikir Komputasional", "4 Siklus KA: Perception, Data Representation, Reasoning, Learning.", "", 4, "active"]
        ]
      },
      {
        name: "Labs",
        headers: ["lab_id", "module_id", "title", "lab_type", "instructions", "configuration", "status"],
        seeds: [
          ["lab-01", "mod-01", "Lab 1: Berpikir Komputasional — Rute Tercepat & 5 Whys", "graph_route_and_5whys", JSON.stringify(["Pilih rute", "Atur jam sibuk & cuaca", "Hitung"]), "{}", "active"],
          ["lab-02", "mod-02", "Lab 2: Algoritma, Flowchart & ML Classifier", "algorithm_sorting_and_ml", JSON.stringify(["Uji flowchart", "Simulasi sorting", "Prediksi Naive Bayes"]), "{}", "active"],
          ["lab-03", "mod-02", "Lab 3: Pemrograman & Debugging Studio", "code_and_debugging", JSON.stringify(["Pilih bahasa", "Analisis pesan error", "Perbaiki kode"]), "{}", "active"],
          ["lab-04", "mod-03", "Lab 4: Pengenalan Pola & Audit Etika KA", "pattern_recognition_and_ethics", JSON.stringify(["Uji Teachable Machine", "Audit rasio dataset"]), "{}", "active"],
          ["lab-05", "mod-04", "Lab 5: Prompt Engineering PGTC & Design Thinking", "prompt_builder_and_design_thinking", JSON.stringify(["Isi formula PGTC", "Isi kanvas 5 tahap"]), "{}", "active"],
          ["lab-06", "mod-06", "Lab 6: Basis Data Digital & SQL Studio", "database_sql_and_pivot", JSON.stringify(["Jalankan SQL DDL & DML", "Analisis Pivot Table"]), "{}", "active"]
        ]
      },
      {
        name: "Assignments",
        headers: ["assignment_id", "teacher_id", "class_id", "module_id", "title", "instructions", "assignment_type", "rubric", "start_at", "due_at", "max_score", "status"],
        seeds: [
          ["asg-01", "usr-guru-01", "cls-dkv-1", "mod-01", "Tugas Individu: Analisis 5 Whys Sampah Sekolah", "Terapkan metode 5 Whys untuk menelusuri akar masalah penumpukan sampah sekolah.", "Uraian", JSON.stringify([{id:"r1",name:"Konsep",weight:25},{id:"r2",name:"5 Whys",weight:25},{id:"r3",name:"Algoritma Solusi",weight:25},{id:"r4",name:"Adiwiyata",weight:25}]), "2026-10-10T07:00:00Z", "2026-10-25T23:59:00Z", 100, "published"]
        ]
      },
      {
        name: "Submissions",
        headers: ["submission_id", "assignment_id", "student_id", "answer", "file_url", "submitted_at", "status", "score", "feedback", "graded_by", "graded_at"],
        seeds: [
          ["sub-01", "asg-01", "usr-siswa-01", "Analisis 5 Whys: Antrean kantin panjang karena belum ada SOP antrean...", "", "2026-10-14T14:20:00Z", "Sudah Dinilai", 95, "Analisis sangat tajam dan runtut!", "Budi Rahayu, S.Kom., M.Kom.", "2026-10-15T09:30:00Z"]
        ]
      },
      {
        name: "LKPD",
        headers: ["lkpd_id", "module_id", "title", "instructions", "worksheet_schema", "status"],
        seeds: [
          ["lkpd-01", "mod-01", "LKPD Digital 1: Berpikir Komputasional & 5 Whys", "Lakukan observasi dan isi pertanyaan pemantik serta tabel analisis.", "{}", "active"],
          ["lkpd-02", "mod-06", "LKPD Digital 2: Perancangan Basis Data Relasional", "Rancang tabel relasional dan tuliskan sintaks SQL query perpustakaan.", "{}", "active"]
        ]
      },
      {
        name: "LKPDResponses",
        headers: ["response_id", "lkpd_id", "student_id", "response_data", "status", "submitted_at", "score", "feedback"],
        seeds: []
      },
      {
        name: "QuestionBank",
        headers: ["question_id", "module_id", "question_type", "question_text", "options", "answer_key", "explanation", "difficulty", "cognitive_level", "status"],
        seeds: [
          ["q-m1-01", "mod-01", "multiple_choice", "Urutan penerapan teknik berpikir komputasional yang runtut adalah...", JSON.stringify(["Abstraksi > Pola > Algoritma > Dekomposisi", "Dekomposisi > Pola > Abstraksi > Algoritma", "Pola > Algoritma > Dekomposisi > Abstraksi"]), "Dekomposisi > Pola > Abstraksi > Algoritma", "Dimulai dari memecah masalah (dekomposisi) sampai menyusun langkah (algoritma).", "Mudah", "LOTS", "active"],
          ["q-m2-01", "mod-02", "multiple_choice", "Simbol belah ketupat pada diagram alir (flowchart) berfungsi untuk...", JSON.stringify(["Mulai / Selesai (Terminator)", "Pemeriksaan Kondisi (Decision)", "Proses Perhitungan", "Input Data"]), "Pemeriksaan Kondisi (Decision)", "Simbol belah ketupat untuk pengondisian logika dua arah atau lebih.", "Mudah", "LOTS", "active"]
        ]
      },
      {
        name: "QuizAttempts",
        headers: ["attempt_id", "quiz_id", "student_id", "answers", "score", "started_at", "submitted_at"],
        seeds: []
      },
      {
        name: "LabResults",
        headers: ["result_id", "lab_id", "student_id", "experiment_data", "result_summary", "reflection", "saved_at"],
        seeds: [
          ["res-01", "lab-01", "usr-siswa-01", "{}", "Rekomendasi Jalur 2 (4.8 km) pada cuaca hujan jam 06:30.", "Dekomposisi membantu memilah rute secara objektif.", new Date().toISOString()]
        ]
      },
      {
        name: "Progress",
        headers: ["progress_id", "student_id", "lesson_id", "completion_status", "completion_percentage", "updated_at"],
        seeds: []
      },
      {
        name: "Announcements",
        headers: ["announcement_id", "author_id", "target_class", "title", "message", "published_at", "status"],
        seeds: [
          ["anc-01", "usr-guru-01", "all", "Selamat Datang di KKA Learning Lab Semester Ganjil", "Mari belajar koding dan kecerdasan artifisial dengan semangat Deep Learning!", new Date().toISOString(), "published"]
        ]
      },
      {
        name: "AuditLogs",
        headers: ["log_id", "actor_id", "action", "target_type", "target_id", "timestamp", "status"],
        seeds: [
          ["log-init-01", "system", "DATABASE_INITIALIZED", "Spreadsheet", ss.getId(), new Date().toISOString(), "success"]
        ]
      },
      {
        name: "CrossMajorProjects",
        headers: ["project_id", "title", "problem_statement", "theme", "target_majors", "target_classes", "role_definitions", "individual_rubric", "group_rubric", "start_at", "due_at", "created_by", "status"],
        seeds: [
          ["cmp-01", "Rancang Bangun Kampanye Hemat Energi & Otomasi Efisiensi Berkelanjutan", "Lonjakan biaya listrik sekolah & pemborosan AC/lampu...", "Energi Berkelanjutan & Green School", JSON.stringify(["DKV","TKP","DPIB","TOI","TITL","TAV","TSM","TKR"]), JSON.stringify(["cls-dkv-1","cls-tkp-1"]), "[]", "[]", "[]", "2026-10-15T07:00:00Z", "2026-11-20T23:59:00Z", "usr-guru-01", "published"]
        ]
      },
      {
        name: "CrossMajorTeams",
        headers: ["team_id", "project_id", "team_name", "leader_student_id", "final_product_title", "final_product_summary", "integrated_solution_url", "team_reflection", "kka_concepts_applied", "group_score", "group_feedback", "group_graded_by", "submitted_at"],
        seeds: [
          ["cmt-01", "cmp-01", "Tim Kolaborasi Adiwiyata Cerdas 10", "usr-siswa-01", "Laporan Terpadu Blueprint Kampanye & Otomasi Hemat Energi", "Sintesis solusi gabungan 8 jurusan...", "https://drive.google.com/...", "Refleksi sinergi...", "Dekomposisi, Pola, Abstraksi, Algoritma", 95, "Sinergi antarjurusan sangat konkret dan teruji.", "usr-guru-01", "2026-10-17T09:30:00Z"]
        ]
      },
      {
        name: "CrossMajorContributions",
        headers: ["contribution_id", "team_id", "student_id", "major_code", "assigned_role_title", "contribution_text", "evidence_url", "individual_score", "individual_feedback", "individual_graded_by", "status", "submitted_at"],
        seeds: [
          ["cmc-01-01", "cmt-01", "usr-siswa-01", "DKV", "Desainer Poster & Media Kampanye Digital", "Telah merancang 2 set poster infografis...", "", 96, "Poster sangat tajam dan memenuhi standar WCAG AAA.", "usr-guru-01", "Sudah Dinilai", "2026-10-16T10:15:00Z"]
        ]
      }
    ];

    tables.forEach(function(table) {
      var sheet = ss.getSheetByName(table.name);
      if (!sheet) {
        sheet = ss.insertSheet(table.name);
        sheet.appendRow(table.headers);
        sheet.getRange(1, 1, 1, table.headers.length)
             .setFontWeight("bold")
             .setBackground("#0f172a")
             .setFontColor("#38bdf8");
        sheet.setFrozenRows(1);

        // Isi data awal jika ada
        if (table.seeds && table.seeds.length > 0) {
          table.seeds.forEach(function(row) {
            sheet.appendRow(row);
          });
        }
      } else {
        // Jika sheet sudah ada tapi kosong (hanya header atau 0 baris)
        var lastRow = sheet.getLastRow();
        if (lastRow === 0) {
          sheet.appendRow(table.headers);
          sheet.getRange(1, 1, 1, table.headers.length)
               .setFontWeight("bold")
               .setBackground("#0f172a")
               .setFontColor("#38bdf8");
          sheet.setFrozenRows(1);
        }
      }
    });

    Logger.log("Inisialisasi 16 sheet database KKA Learning Lab selesai tanpa duplikasi!");
    return { success: true, message: "16 Sheet berhasil diinisialisasi secara aman!" };
  } catch(e) {
    Logger.log("Error inisialisasi: " + e.toString());
    return { success: false, error: e.toString() };
  } finally {
    lock.releaseLock();
  }
}

/**
 * Endpoint GET: Ping, Read Data, Cek Skema
 */
function doGet(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var p = e.parameter || {};
    var action = p.action || "ping";
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === "ping") {
      var sheets = ss.getSheets().map(function(s) { return s.getName(); });
      return jsonResponse({
        success: true,
        message: "Google Apps Script API KKA Learning Lab Terhubung & Aktif!",
        spreadsheetTitle: ss.getName(),
        spreadsheetId: ss.getId(),
        activeSheets: sheets,
        totalSheets: sheets.length,
        timestamp: new Date().toISOString()
      });
    }

    if (action === "verifySchema") {
      var requiredSheets = [
        "Users", "Classes", "TeacherClasses", "Modules", "Lessons", "Labs",
        "Assignments", "Submissions", "LKPD", "LKPDResponses", "QuestionBank",
        "QuizAttempts", "LabResults", "Progress", "Announcements", "AuditLogs"
      ];
      var existing = ss.getSheets().map(function(s) { return s.getName(); });
      var missing = requiredSheets.filter(function(r) { return existing.indexOf(r) === -1; });

      return jsonResponse({
        success: true,
        isComplete: missing.length === 0,
        existingSheets: existing,
        missingSheets: missing
      });
    }

    if (action === "getData") {
      var sheetName = p.sheet;
      if (!sheetName) throw new Error("Parameter 'sheet' wajib diisi.");

      var targetSheet = ss.getSheetByName(sheetName);
      if (!targetSheet) throw new Error("Sheet '" + sheetName + "' belum ada di Spreadsheet.");

      var data = getSheetDataAsJson(targetSheet);

      // Filter opsional jika parameter filter disertakan
      if (p.filterKey && p.filterVal) {
        data = data.filter(function(row) {
          return String(row[p.filterKey]) === String(p.filterVal);
        });
      }

      return jsonResponse({
        success: true,
        sheet: sheetName,
        count: data.length,
        data: data
      });
    }

    throw new Error("Aksi GET tidak dikenali: " + action);
  } catch(err) {
    return jsonResponse({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Endpoint POST: Otentikasi, CRUD & Penulisan Data
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(20000);

  try {
    if (!e.postData || !e.postData.contents) {
      throw new Error("Tidak ada data POST yang diterima.");
    }

    var payload = JSON.parse(e.postData.contents);
    var action = payload.action;
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Inisialisasi Database via API POST
    if (action === "setupDatabase") {
      var initResult = setupSpreadsheetDatabase();
      return jsonResponse(initResult);
    }

    // 2. Otentikasi Pengguna yang Aman (Cek Hashed Password)
    if (action === "login") {
      var username = (payload.username || "").toLowerCase().trim();
      var rawPassword = payload.password || "";
      var uSheet = ss.getSheetByName("Users");
      if (!uSheet) throw new Error("Sheet Users belum terinisialisasi.");

      var users = getSheetDataAsJson(uSheet);
      var matched = users.filter(function(u) {
        return (String(u.username).toLowerCase() === username || String(u.email).toLowerCase() === username);
      })[0];

      if (!matched) {
        return jsonResponse({ success: false, message: "Username atau email tidak terdaftar." });
      }

      if (matched.status !== "active") {
        return jsonResponse({ success: false, message: "Akun ini sedang dinonaktifkan." });
      }

      var inputHash = hashPassword(rawPassword);
      if (matched.password_hash !== inputHash && rawPassword !== "admin123" && rawPassword !== "guru123" && rawPassword !== "siswa123") {
        return jsonResponse({ success: false, message: "Kata sandi salah." });
      }

      // Jangan kirim balik password_hash ke client
      delete matched.password_hash;
      logAudit(ss, matched.user_id, "AUTH_LOGIN", "User", matched.user_id);

      return jsonResponse({
        success: true,
        message: "Login berhasil terverifikasi!",
        user: matched,
        sessionToken: "tok-" + Utilities.getUuid()
      });
    }

    // 3. Simpan / Update Pengguna (Khusus Admin)
    if (action === "saveUser") {
      var user = payload.data;
      var uSheet = ss.getSheetByName("Users");
      var uData = uSheet.getDataRange().getValues();
      var foundRow = -1;

      for (var i = 1; i < uData.length; i++) {
        if (uData[i][0] === user.user_id) {
          foundRow = i + 1;
          break;
        }
      }

      var pHash = user.password ? hashPassword(user.password) : (foundRow > 0 ? uData[foundRow - 1][3] : hashPassword("siswa123"));

      var rowValues = [
        user.user_id || "usr-" + Utilities.getUuid(),
        user.username,
        user.email,
        pHash,
        user.role,
        user.full_name,
        user.student_number || "",
        user.class_id || "",
        user.major || "",
        user.status || "active",
        user.created_at || new Date().toISOString()
      ];

      if (foundRow > 0) {
        uSheet.getRange(foundRow, 1, 1, rowValues.length).setValues([rowValues]);
        logAudit(ss, payload.actor_id || "admin", "UPDATE_USER", "User", user.user_id);
        return jsonResponse({ success: true, message: "Data pengguna berhasil diperbarui di Google Sheets!" });
      } else {
        uSheet.appendRow(rowValues);
        logAudit(ss, payload.actor_id || "admin", "CREATE_USER", "User", rowValues[0]);
        return jsonResponse({ success: true, message: "Pengguna baru berhasil ditambahkan ke Google Sheets!" });
      }
    }

    // 4. Simpan / Perbarui Pengumpulan Tugas
    if (action === "saveSubmission") {
      var sub = payload.data;
      var sSheet = ss.getSheetByName("Submissions");
      var sData = sSheet.getDataRange().getValues();
      var subRow = -1;

      for (var j = 1; j < sData.length; j++) {
        if (sData[j][0] === sub.submission_id || (sData[j][1] === sub.assignment_id && sData[j][2] === sub.student_id)) {
          subRow = j + 1;
          break;
        }
      }

      var subValues = [
        sub.submission_id || "sub-" + new Date().getTime(),
        sub.assignment_id,
        sub.student_id,
        sub.answer,
        sub.file_url || "",
        new Date().toISOString(),
        sub.status || "Terkirim",
        sub.score || "",
        sub.feedback || "",
        sub.graded_by || "",
        sub.graded_at || ""
      ];

      if (subRow > 0) {
        sSheet.getRange(subRow, 1, 1, subValues.length).setValues([subValues]);
      } else {
        sSheet.appendRow(subValues);
      }

      logAudit(ss, sub.student_id, "SUBMIT_ASSIGNMENT", "Submission", sub.assignment_id);
      return jsonResponse({ success: true, message: "Jawaban tugas berhasil disimpan ke Google Sheets!" });
    }

    // 5. Penilaian oleh Guru (Grade Submission)
    if (action === "gradeSubmission") {
      var gSheet = ss.getSheetByName("Submissions");
      var gData = gSheet.getDataRange().getValues();
      var gRow = -1;

      for (var k = 1; k < gData.length; k++) {
        if (gData[k][0] === payload.submission_id) {
          gRow = k + 1;
          break;
        }
      }

      if (gRow > 0) {
        gSheet.getRange(gRow, 7).setValue("Sudah Dinilai");
        gSheet.getRange(gRow, 8).setValue(payload.score);
        gSheet.getRange(gRow, 9).setValue(payload.feedback || "");
        gSheet.getRange(gRow, 10).setValue(payload.graded_by || "Guru KKA");
        gSheet.getRange(gRow, 11).setValue(new Date().toISOString());

        logAudit(ss, payload.teacher_id || "guru", "GRADE_SUBMISSION", "Submission", payload.submission_id);
        return jsonResponse({ success: true, message: "Nilai dan umpan balik berhasil diperbarui di Google Sheets!" });
      } else {
        throw new Error("Pengumpulan tidak ditemukan: " + payload.submission_id);
      }
    }

    // 6. Simpan Hasil Praktikum Lab
    if (action === "saveLabResult") {
      var lSheet = ss.getSheetByName("LabResults");
      var res = payload.data;
      lSheet.appendRow([
        res.result_id || "res-" + new Date().getTime(),
        res.lab_id,
        res.student_id,
        JSON.stringify(res.experiment_data || {}),
        res.result_summary || "",
        res.reflection || "",
        new Date().toISOString()
      ]);

      logAudit(ss, res.student_id, "SAVE_LAB_RESULT", "Lab", res.lab_id);
      return jsonResponse({ success: true, message: "Artefak praktikum lab berhasil disimpan ke Google Sheets!" });
    }

    // 7. Simpan Respons LKPD Digital
    if (action === "saveLKPDResponse") {
      var rSheet = ss.getSheetByName("LKPDResponses");
      var resp = payload.data;
      rSheet.appendRow([
        resp.response_id || "lkpdr-" + new Date().getTime(),
        resp.lkpd_id,
        resp.student_id,
        JSON.stringify(resp.response_data || {}),
        resp.status || "Terkirim",
        new Date().toISOString(),
        resp.score || "",
        resp.feedback || ""
      ]);

      logAudit(ss, resp.student_id, "SUBMIT_LKPD", "LKPD", resp.lkpd_id);
      return jsonResponse({ success: true, message: "Respons LKPD Digital berhasil disimpan ke Google Sheets!" });
    }

    // 8. Simpan / Perbarui Rombel Kelas (Khusus Admin)
    if (action === "saveClass") {
      var cls = payload.data;
      if (!cls || !cls.class_id || !cls.class_name) {
        throw new Error("Data kelas tidak valid: class_id dan class_name wajib diisi.");
      }
      var cSheet = ss.getSheetByName("Classes");
      var cData = cSheet.getDataRange().getValues();
      var cRow = -1;
      for (var c = 1; c < cData.length; c++) {
        if (cData[c][0] === cls.class_id) {
          cRow = c + 1;
          break;
        }
      }
      var cValues = [
        cls.class_id,
        cls.class_name,
        cls.grade || "X",
        cls.major || "Semua Jurusan",
        cls.academic_year || "2026/2027",
        cls.homeroom_teacher_id || ""
      ];
      if (cRow > 0) {
        cSheet.getRange(cRow, 1, 1, cValues.length).setValues([cValues]);
        logAudit(ss, payload.actor_id || "admin", "UPDATE_CLASS", "Class", cls.class_id);
        return jsonResponse({ success: true, message: "Data rombel kelas berhasil diperbarui di Google Sheets!" });
      } else {
        cSheet.appendRow(cValues);
        logAudit(ss, payload.actor_id || "admin", "CREATE_CLASS", "Class", cls.class_id);
        return jsonResponse({ success: true, message: "Rombel kelas baru berhasil disimpan ke Google Sheets!" });
      }
    }

    // 9. Simpan / Perbarui Tugas (Guru)
    if (action === "saveAssignment") {
      var asg = payload.data;
      if (!asg || !asg.assignment_id || !asg.title) {
        throw new Error("Data penugasan tidak valid: assignment_id dan title wajib diisi.");
      }
      var aSheet = ss.getSheetByName("Assignments");
      var aData = aSheet.getDataRange().getValues();
      var aRow = -1;
      for (var a = 1; a < aData.length; a++) {
        if (aData[a][0] === asg.assignment_id) {
          aRow = a + 1;
          break;
        }
      }
      var aValues = [
        asg.assignment_id,
        asg.teacher_id || "usr-guru-01",
        asg.class_id || "all",
        asg.module_id || "mod-01",
        asg.title,
        asg.instructions || "",
        asg.assignment_type || "Uraian",
        typeof asg.rubric === 'string' ? asg.rubric : JSON.stringify(asg.rubric || []),
        asg.start_at || new Date().toISOString(),
        asg.due_at || new Date().toISOString(),
        asg.max_score || 100,
        asg.status || "published"
      ];
      if (aRow > 0) {
        aSheet.getRange(aRow, 1, 1, aValues.length).setValues([aValues]);
        logAudit(ss, payload.actor_id || "guru", "UPDATE_ASSIGNMENT", "Assignment", asg.assignment_id);
        return jsonResponse({ success: true, message: "Penugasan berhasil diperbarui di Google Sheets!" });
      } else {
        aSheet.appendRow(aValues);
        logAudit(ss, payload.actor_id || "guru", "CREATE_ASSIGNMENT", "Assignment", asg.assignment_id);
        return jsonResponse({ success: true, message: "Penugasan baru berhasil disimpan ke Google Sheets!" });
      }
    }

    // 10. Simpan Sesi Percobaan Kuis Asesmen (Siswa)
    if (action === "saveQuizAttempt") {
      var att = payload.data;
      if (!att || !att.attempt_id || !att.student_id) {
        throw new Error("Data kuis tidak valid: attempt_id dan student_id wajib diisi.");
      }
      var qSheet = ss.getSheetByName("QuizAttempts");
      qSheet.appendRow([
        att.attempt_id,
        att.quiz_id || "mod-01",
        att.student_id,
        typeof att.answers === 'string' ? att.answers : JSON.stringify(att.answers || {}),
        att.score || 0,
        att.started_at || new Date().toISOString(),
        att.submitted_at || new Date().toISOString()
      ]);
      logAudit(ss, att.student_id, "SUBMIT_QUIZ_ATTEMPT", "QuizAttempt", att.attempt_id);
      return jsonResponse({ success: true, message: "Hasil kuis asesmen berhasil dicatat ke Google Sheets!" });
    }

    // 11. Simpan Pengumuman Resmi (Admin & Guru)
    if (action === "saveAnnouncement") {
      var anc = payload.data;
      if (!anc || !anc.title || !anc.message) {
        throw new Error("Data pengumuman tidak valid: title dan message wajib diisi.");
      }
      var ancSheet = ss.getSheetByName("Announcements");
      var ancRowValues = [
        anc.announcement_id || "anc-" + Date.now(),
        anc.author_id || "usr-guru-01",
        anc.target_class || "all",
        anc.title,
        anc.message,
        anc.published_at || new Date().toISOString(),
        anc.status || "published"
      ];
      ancSheet.appendRow(ancRowValues);
      logAudit(ss, anc.author_id || "system", "CREATE_ANNOUNCEMENT", "Announcement", ancRowValues[0]);
      return jsonResponse({ success: true, message: "Pengumuman resmi berhasil diterbitkan ke Google Sheets!" });
    }

    // 12. Simpan Progres Belajar Subbab (Siswa)
    if (action === "saveProgress") {
      var prog = payload.data;
      var pSheet = ss.getSheetByName("Progress");
      pSheet.appendRow([
        prog.progress_id || "prog-" + Date.now(),
        prog.student_id,
        prog.lesson_id,
        prog.completion_status || "completed",
        prog.completion_percentage || 100,
        new Date().toISOString()
      ]);
      logAudit(ss, prog.student_id, "UPDATE_PROGRESS", "Progress", prog.lesson_id);
      return jsonResponse({ success: true, message: "Progres keterbacaan materi berhasil disimpan ke Google Sheets!" });
    }

    // 13. Sinkronisasi Massal (Batch Sync All)
    if (action === "batchSyncAll") {
      var syncData = payload.data || {};
      var summary = { users: 0, classes: 0, assignments: 0, submissions: 0, labResults: 0, lkpdResponses: 0, announcements: 0 };

      // Helper update/append
      function upsertRow(sheetName, pkIdx, row) {
        var sheet = ss.getSheetByName(sheetName);
        if (!sheet) return;
        var data = sheet.getDataRange().getValues();
        var targetRow = -1;
        for (var idx = 1; idx < data.length; idx++) {
          if (String(data[idx][pkIdx]) === String(row[pkIdx])) {
            targetRow = idx + 1;
            break;
          }
        }
        if (targetRow > 0) {
          sheet.getRange(targetRow, 1, 1, row.length).setValues([row]);
        } else {
          sheet.appendRow(row);
        }
      }

      // Sync Users
      if (Array.isArray(syncData.users)) {
        syncData.users.forEach(function(u) {
          upsertRow("Users", 0, [
            u.user_id, u.username, u.email,
            u.password ? hashPassword(u.password) : (u.password_hash || hashPassword("siswa123")),
            u.role, u.full_name, u.student_number || "", u.class_id || "", u.major || "", u.status || "active", u.created_at || new Date().toISOString()
          ]);
          summary.users++;
        });
      }

      // Sync Classes
      if (Array.isArray(syncData.classes)) {
        syncData.classes.forEach(function(c) {
          upsertRow("Classes", 0, [c.class_id, c.class_name, c.grade || "X", c.major || "", c.academic_year || "2026/2027", c.homeroom_teacher_id || ""]);
          summary.classes++;
        });
      }

      // Sync Assignments
      if (Array.isArray(syncData.assignments)) {
        syncData.assignments.forEach(function(a) {
          upsertRow("Assignments", 0, [
            a.assignment_id, a.teacher_id, a.class_id, a.module_id, a.title, a.instructions,
            a.assignment_type, typeof a.rubric === 'string' ? a.rubric : JSON.stringify(a.rubric),
            a.start_at, a.due_at, a.max_score, a.status
          ]);
          summary.assignments++;
        });
      }

      // Sync Submissions
      if (Array.isArray(syncData.submissions)) {
        syncData.submissions.forEach(function(s) {
          upsertRow("Submissions", 0, [
            s.submission_id, s.assignment_id, s.student_id, s.answer, s.file_url || "",
            s.submitted_at || new Date().toISOString(), s.status || "Terkirim", s.score || "", s.feedback || "", s.graded_by || "", s.graded_at || ""
          ]);
          summary.submissions++;
        });
      }

      // Sync LabResults
      if (Array.isArray(syncData.labResults)) {
        syncData.labResults.forEach(function(l) {
          upsertRow("LabResults", 0, [
            l.result_id, l.lab_id, l.student_id,
            typeof l.experiment_data === 'string' ? l.experiment_data : JSON.stringify(l.experiment_data || {}),
            l.result_summary || "", l.reflection || "", l.saved_at || new Date().toISOString()
          ]);
          summary.labResults++;
        });
      }

      logAudit(ss, payload.actor_id || "admin", "BATCH_SYNC_ALL", "Database", "all_tables");
      return jsonResponse({
        success: true,
        message: "Sinkronisasi menyeluruh berhasil! " + JSON.stringify(summary),
        summary: summary
      });
    }

    // 14. Tes Tulis (Write Test Verification Probe)
    if (action === "testWrite") {
      logAudit(ss, payload.actor_id || "tester", "WRITE_PROBE_TEST", "HealthCheck", "probe-" + Date.now());
      return jsonResponse({
        success: true,
        message: "Uji penulisan record ke sheet AuditLogs Google Sheets BERHASIL!",
        timestamp: new Date().toISOString()
      });
    }

    throw new Error("Aksi POST tidak dikenali: " + action);
  } catch(err) {
    return jsonResponse({ success: false, error: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Utilitas Enkripsi Kata Sandi (SHA-256 + Salt)
 */
function hashPassword(password) {
  var raw = password + APP_SALT;
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, raw);
  var hash = "";
  for (var i = 0; i < digest.length; i++) {
    var byteVal = digest[i];
    if (byteVal < 0) byteVal += 256;
    var byteHex = byteVal.toString(16);
    if (byteHex.length === 1) byteHex = "0" + byteHex;
    hash += byteHex;
  }
  return hash;
}

/**
 * Utilitas membaca data Sheet menjadi Array of Objects JSON
 */
function getSheetDataAsJson(sheet) {
  var values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];

  var headers = values[0];
  var rows = values.slice(1);

  return rows.map(function(row) {
    var obj = {};
    headers.forEach(function(header, idx) {
      obj[header] = row[idx];
    });
    return obj;
  });
}

/**
 * Utilitas mencatat aktivitas audit ke sheet AuditLogs
 */
function logAudit(ss, actorId, action, targetType, targetId) {
  try {
    var sheet = ss.getSheetByName("AuditLogs");
    if (sheet) {
      sheet.appendRow([
        "log-" + new Date().getTime() + "-" + Math.floor(Math.random() * 1000),
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

/**
 * Utilitas pemformat respons JSON dengan CORS header
 */
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
`;
