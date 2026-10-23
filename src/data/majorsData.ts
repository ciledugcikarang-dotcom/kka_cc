import { MajorItem, ClassItem, TeacherClass } from '../types';

export const OFFICIAL_MAJORS: MajorItem[] = [
  {
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    major_name: 'Desain Komunikasi Visual',
    field_category: 'Seni dan Ekonomi Kreatif',
    description: 'Penerapan komputasi visual, raster-vektor, kontras aksesibilitas WCAG, dan pemanfaatan AI generatif grafis beretika.',
    color: 'from-pink-500 to-rose-600',
    iconBg: 'bg-pink-50 text-pink-700 border-pink-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-tkp',
    major_code: 'TKP',
    major_name: 'Teknik Konstruksi & Perumahan',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Algoritma estimasi material pondasi, perhitungan volume beton sloof, dan klasifikasi visual retak dinding struktural.',
    color: 'from-amber-600 to-orange-700',
    iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-dpib',
    major_code: 'DPIB',
    major_name: 'Desain Pemodelan & Informasi Bangunan',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Abstraksi skala CAD, verifikasi aturan Koefisien Dasar Bangunan (KDB), dan komputasi optimasi pencahayaan alami.',
    color: 'from-blue-600 to-indigo-700',
    iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-toi',
    major_code: 'TOI',
    major_name: 'Teknik Otomasi Industri',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Logika diagram alir PLC konveyor pemilah barang dan deteksi anomali sensor getaran/suhu (Predictive Maintenance).',
    color: 'from-emerald-600 to-teal-700',
    iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-titl',
    major_code: 'TITL',
    major_name: 'Teknik Instalasi Tenaga Listrik',
    field_category: 'Energi dan Pertambangan',
    description: 'Kalkulator penyeimbang beban 3 fasa (R-S-T), audit data konsumsi energi cerdas, dan deteksi kebocoran arus listrik.',
    color: 'from-amber-500 to-yellow-600',
    iconBg: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-tav',
    major_code: 'TAV',
    major_name: 'Teknik Audio Video',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Sampling sinyal gelombang suara, algoritma digital filter frekuensi (LPF/HPF), dan spektrogram keyword spotter.',
    color: 'from-purple-600 to-violet-700',
    iconBg: 'bg-purple-50 text-purple-700 border-purple-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-tsm',
    major_code: 'TSM',
    major_name: 'Teknik Sepeda Motor',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Pohon keputusan diagnosis sistem starter kelistrikan dan pengolahan data telemetri sensor injeksi FI motor.',
    color: 'from-red-600 to-rose-700',
    iconBg: 'bg-red-50 text-red-700 border-red-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  },
  {
    major_id: 'mjr-tkr',
    major_code: 'TKR',
    major_name: 'Teknik Kendaraan Ringan',
    field_category: 'Teknologi dan Rekayasa',
    description: 'Pemodelan jarak pengereman aman (Stopping Distance) dan diagnosis parameter live sensor OBD-II virtual.',
    color: 'from-cyan-600 to-blue-700',
    iconBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    status: 'active',
    created_at: '2026-07-01T08:00:00Z'
  }
];

export const INITIAL_EIGHT_CLASSES: ClassItem[] = [
  {
    class_id: 'cls-dkv-1',
    class_name: 'X DKV 1',
    grade: 'X',
    major_id: 'mjr-dkv',
    major_code: 'DKV',
    major: 'Desain Komunikasi Visual',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-01',
    total_students: 36
  },
  {
    class_id: 'cls-tkp-1',
    class_name: 'X TKP 1',
    grade: 'X',
    major_id: 'mjr-tkp',
    major_code: 'TKP',
    major: 'Teknik Konstruksi & Perumahan',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-02',
    total_students: 34
  },
  {
    class_id: 'cls-dpib-1',
    class_name: 'X DPIB 1',
    grade: 'X',
    major_id: 'mjr-dpib',
    major_code: 'DPIB',
    major: 'Desain Pemodelan & Informasi Bangunan',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-01',
    total_students: 35
  },
  {
    class_id: 'cls-toi-1',
    class_name: 'X TOI 1',
    grade: 'X',
    major_id: 'mjr-toi',
    major_code: 'TOI',
    major: 'Teknik Otomasi Industri',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-02',
    total_students: 36
  },
  {
    class_id: 'cls-titl-1',
    class_name: 'X TITL 1',
    grade: 'X',
    major_id: 'mjr-titl',
    major_code: 'TITL',
    major: 'Teknik Instalasi Tenaga Listrik',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-01',
    total_students: 35
  },
  {
    class_id: 'cls-tav-1',
    class_name: 'X TAV 1',
    grade: 'X',
    major_id: 'mjr-tav',
    major_code: 'TAV',
    major: 'Teknik Audio Video',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-02',
    total_students: 34
  },
  {
    class_id: 'cls-tsm-1',
    class_name: 'X TSM 1',
    grade: 'X',
    major_id: 'mjr-tsm',
    major_code: 'TSM',
    major: 'Teknik Sepeda Motor',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-01',
    total_students: 36
  },
  {
    class_id: 'cls-tkr-1',
    class_name: 'X TKR 1',
    grade: 'X',
    major_id: 'mjr-tkr',
    major_code: 'TKR',
    major: 'Teknik Kendaraan Ringan',
    rombel: 1,
    academic_year: '2026/2027',
    homeroom_teacher_id: 'usr-guru-02',
    total_students: 36
  }
];

export const INITIAL_TEACHER_CLASSES: TeacherClass[] = [
  {
    assignment_id: 'tc-01',
    teacher_id: 'usr-guru-01',
    class_id: 'cls-dkv-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-02',
    teacher_id: 'usr-guru-01',
    class_id: 'cls-dpib-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-03',
    teacher_id: 'usr-guru-01',
    class_id: 'cls-titl-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-04',
    teacher_id: 'usr-guru-01',
    class_id: 'cls-tsm-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-05',
    teacher_id: 'usr-guru-02',
    class_id: 'cls-tkp-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-06',
    teacher_id: 'usr-guru-02',
    class_id: 'cls-toi-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-07',
    teacher_id: 'usr-guru-02',
    class_id: 'cls-tav-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  },
  {
    assignment_id: 'tc-08',
    teacher_id: 'usr-guru-02',
    class_id: 'cls-tkr-1',
    subject: 'Koding dan Kecerdasan Artifisial',
    status: 'active'
  }
];
