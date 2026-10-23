export type UserRole = 'admin' | 'guru' | 'siswa';

export type VocationalMajorCode = 'DKV' | 'TKP' | 'DPIB' | 'TOI' | 'TITL' | 'TAV' | 'TSM' | 'TKR';

export type MaterialScope = 'all' | 'single' | 'multiple' | 'cross_major';

export type AssignmentScopeType = 'all_classes' | 'single_class' | 'multiple_classes' | 'cross_major';

export interface MajorItem {
  major_id: string; // e.g. 'mjr-dkv', 'mjr-tkp', etc.
  major_code: VocationalMajorCode;
  major_name: string;
  field_category: string; // e.g. 'Seni dan Ekonomi Kreatif', 'Teknologi dan Rekayasa', 'Energi dan Pertambangan'
  description: string;
  color: string;
  iconBg?: string;
  status: 'active' | 'inactive';
  created_at: string;
}

export interface User {
  user_id: string;
  username: string;
  email: string;
  password_hash?: string;
  password?: string;
  role: UserRole;
  full_name: string;
  student_number?: string; // NIS for siswa, NIP for guru
  class_id?: string; // Foreign Key to Classes
  major_id?: string; // Foreign Key to Majors
  major_code?: VocationalMajorCode | string;
  major?: string; // e.g. 'Desain Komunikasi Visual', 'Teknik Otomasi Industri'
  status: 'active' | 'inactive';
  created_at: string;
}

export interface ClassItem {
  class_id: string;
  class_name: string;
  grade: string; // 'X'
  major_id?: string; // Foreign Key to Majors (e.g. 'mjr-dkv')
  major_code?: VocationalMajorCode | string;
  major: string;
  rombel?: number | string; // 1, 2, etc.
  academic_year: string;
  homeroom_teacher_id?: string; // Foreign Key to Users (role: guru)
  total_students?: number;
}

export interface TeacherClass {
  assignment_id: string;
  teacher_id: string; // Foreign Key to Users (role: guru)
  class_id: string; // Foreign Key to Classes
  subject: string;
  status: 'active' | 'inactive';
}

export interface MajorApplication {
  majorId: string; // 'dkv' | 'tkp' | 'dpib' | 'toi' | 'titl' | 'tav' | 'tsm' | 'tkr' | 'umum'
  majorName: string;
  fieldCategory: string; // e.g. 'Teknologi dan Rekayasa', 'Seni dan Ekonomi Kreatif'
  caseTitle: string;
  scenario: string;
  implementation: string;
  impactNote: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  coreContent?: string; // Teks materi inti mendalam dengan bahasa sederhana
  dailyAnalogy?: string; // Analogi kehidupan sehari-hari yang mudah dipahami
  keyConcepts: string[];
  readingMinutes: number;
  activityCode?: string; // e.g. 'BK-K10-01'
  activityTitle?: string;
  activityType?: 'Mandiri' | 'Kelompok' | 'Berpasangan';
  activityPrompt?: string;
  individualActivity?: {
    title: string;
    prompt: string;
    steps?: string[];
    expectedOutput?: string;
  };
  groupActivity?: {
    title: string;
    prompt: string;
    roles?: string[];
    expectedOutput?: string;
  };
  majorApplications?: MajorApplication[];
  practicalTips?: string[];
  selfCheckQuestions?: {
    question: string;
    answerKey: string;
    explanation: string;
  }[];
  remedialGuide?: string;
  enrichmentGuide?: string;
  curriculumVerificationNote?: string;
}

export interface ModuleItem {
  module_id: string;
  sequence: number;
  title: string;
  description: string;
  learning_objectives: string[];
  measurableObjectives?: {
    audience: string;
    behavior: string;
    condition: string;
    degree: string;
    text: string;
  }[];
  scope?: MaterialScope; // 'all' | 'single' | 'multiple' | 'cross_major'
  target_majors?: string[]; // e.g. ['*'] or ['DKV'] or ['TSM', 'TKR']
  scope_description?: string;
  is_vocational?: boolean;
  status: 'active' | 'draft';
  iconName: string;
  color: string;
  chapters: Chapter[];
  vocabulary: { term: string; definition: string; contextExample?: string }[];
  remedialGuide?: string;
  enrichmentGuide?: string;
  reflectionPrompts?: string[];
  curriculumVerificationNote?: string;
}

export interface LabItem {
  lab_id: string;
  module_id: string;
  title: string;
  lab_type: string;
  description: string;
  instructions: string[];
  difficulty: 'Pemula' | 'Menengah' | 'Tantangan Lanjutan';
  targetMajors: string[];
  scope?: MaterialScope;
  reflectionQuestions: string[];
  status: 'active' | 'draft';
}

export interface RubricCriterion {
  id: string;
  name: string;
  weight: number; // percentage, e.g. 15%
  description: string;
}

export interface Assignment {
  assignment_id: string;
  teacher_id: string;
  class_id: string; // compatibility with single class (e.g. 'cls-dkv-1' or 'all')
  target_classes?: string[]; // Array of class_ids e.g. ['cls-dkv-1', 'cls-dpib-1']
  scope_type?: AssignmentScopeType; // 'all_classes' | 'single_class' | 'multiple_classes' | 'cross_major'
  target_majors?: string[]; // e.g. ['DKV', 'DPIB'] or ['*']
  project_id?: string; // Foreign Key to VocationalProject if project-based
  module_id: string;
  title: string;
  instructions: string;
  assignment_type: 'Pilihan Ganda' | 'Isian Singkat' | 'Uraian' | 'Praktikum' | 'Proyek' | 'LKPD Digital' | 'Refleksi';
  is_group: boolean;
  start_at: string;
  due_at: string;
  weight?: number; // Bobot penugasan dalam rapor (misal: 20%)
  max_score: number;
  status: 'published' | 'draft' | 'archived';
  publish_grades?: boolean; // Menentukan apakah nilai boleh dilihat siswa
  allow_discussion_view?: boolean; // Menentukan apakah pembahasan boleh dilihat siswa
  rubric: RubricCriterion[];
  allowed_input_types?: ('text' | 'choice' | 'table' | 'file')[];
  options?: string[];
}

export interface FileAttachment {
  name: string;
  size: number;
  type: string;
  dataUrl?: string;
  uploaded_at?: string;
}

export interface Submission {
  submission_id: string;
  assignment_id: string;
  project_id?: string; // Link to project
  student_id: string;
  student_name: string;
  student_nis?: string;
  class_id: string;
  major_id?: string; // Link to Major
  major_code?: string;
  answer: string;
  selected_option?: string;
  table_data?: string[][];
  file_url?: string;
  file_attachment?: FileAttachment;
  submitted_at: string;
  status: 'Belum Dikerjakan' | 'Draf' | 'Terkirim' | 'Terlambat' | 'Perlu Revisi' | 'Sudah Dinilai';
  score?: number;
  feedback?: string;
  rubric_scores?: Record<string, number>;
  graded_by?: string;
  graded_at?: string;
  revision_notes?: string;
  revision_history?: { timestamp: string; note: string; requested_by: string }[];
}

export interface LKPDQuestion {
  id: string;
  question: string;
  placeholder?: string;
  type: 'text' | 'choice' | 'table' | 'file' | 'conclusion';
  options?: string[];
  table_columns?: string[];
  table_initial_rows?: number;
}

export interface LKPDItem {
  lkpd_id: string;
  module_id: string;
  title: string;
  class_id?: string;
  target_classes?: string[];
  scope_type?: AssignmentScopeType;
  target_majors?: string[];
  project_id?: string;
  start_at?: string;
  due_at?: string;
  weight?: number;
  learning_objectives: string[];
  starter_problem: string;
  instructions: string;
  tools_needed: string[];
  questions: LKPDQuestion[];
  status: 'active' | 'draft';
  publish_grades?: boolean;
  allow_discussion_view?: boolean;
}

export interface LKPDResponse {
  response_id: string;
  lkpd_id: string;
  project_id?: string;
  student_id: string;
  student_name: string;
  class_id: string;
  major_id?: string;
  major_code?: string;
  response_data: Record<string, string>;
  table_data?: Record<string, string[][]>;
  file_attachments?: Record<string, FileAttachment>;
  submitted_at: string;
  status: 'Draf' | 'Terkirim' | 'Perlu Revisi' | 'Sudah Dinilai';
  score?: number;
  feedback?: string;
  revision_notes?: string;
  revision_history?: { timestamp: string; note: string; requested_by: string }[];
}

export interface QuestionItem {
  question_id: string;
  module_id: string;
  question_type: 'multiple_choice' | 'true_false' | 'essay';
  question_text: string;
  options?: string[];
  answer_key: string;
  explanation: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sukar';
  cognitive_level: 'LOTS' | 'MOTS' | 'HOTS';
  status: 'active' | 'draft';
}

export interface QuizAttempt {
  attempt_id: string;
  quiz_id: string;
  student_id: string;
  student_name: string;
  answers: Record<string, string>;
  score: number;
  max_score: number;
  started_at: string;
  submitted_at: string;
  cognitive_breakdown?: {
    lots: { correct: number; total: number };
    mots: { correct: number; total: number };
    hots: { correct: number; total: number };
  };
}

export interface LabResult {
  result_id: string;
  lab_id: string;
  student_id: string;
  student_name: string;
  class_id?: string;
  major_id?: string;
  major_code?: string;
  experiment_data: Record<string, any>;
  result_summary: string;
  reflection: string;
  saved_at: string;
}

export interface ProgressItem {
  progress_id: string;
  student_id: string;
  module_id: string;
  chapter_id: string;
  completed: boolean;
  completion_percentage: number;
  updated_at: string;
}

export interface Announcement {
  announcement_id: string;
  author_id: string;
  author_name: string;
  target_class: string; // 'all' or class_id
  title: string;
  message: string;
  published_at: string;
  status: 'published' | 'draft';
}

export interface AuditLog {
  log_id: string;
  actor_id: string;
  actor_name: string;
  action: string;
  target_type: string;
  target_id: string;
  timestamp: string;
  status: 'success' | 'failed';
}

export interface SupervisionItem {
  no: number;
  aspect: string;
  indicator: string;
  score: 1 | 2 | 3 | 4;
}

export interface AcademicSupervisionRecord {
  supervision_id: string;
  teacher_id: string;
  teacher_name: string;
  subject: string;
  class_fase: string;
  date: string;
  supervisor: string;
  c1_planning: SupervisionItem[];
  c2_execution: SupervisionItem[];
  c3_deep_learning_5c: SupervisionItem[];
  c4_assessment_reflection: SupervisionItem[];
  supervisor_notes: {
    planning: string;
    execution: string;
    deep_learning: string;
    assessment: string;
  };
  followup_recommendations: {
    for_teacher: string;
    for_student: string;
    for_school: string;
  };
  school_programs: string[]; // ['Adiwiyata', 'Gapura Pancawaluya', 'Gerakan Indonesia ASRI', 'Literasi dan Numerasi', 'SimPel']
  status: 'draft' | 'final';
}

export interface GasConfig {
  webAppUrl: string;
  spreadsheetId: string;
  isConnected: boolean;
  lastSyncAt: string | null;
  mode: 'local' | 'connected';
}

export interface ColumnDefinition {
  name: string;
  type: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'ISO_DATE' | 'JSON_STRING';
  required: boolean;
  isPk?: boolean;
  isFk?: boolean;
  refTable?: string;
  refColumn?: string;
  validationRule?: string;
  sampleValue: string;
  description: string;
}

export interface TableSchemaDefinition {
  tableName: string;
  sheetIndex: number;
  description: string;
  category: 'Master Identitas' | 'Akademik & Rombel' | 'Kurikulum & Lab' | 'Penugasan & Asesmen' | 'Monitoring & Sistem';
  primaryKey: string;
  foreignKeys: { column: string; targetTable: string; targetColumn: string }[];
  columns: ColumnDefinition[];
  initialRowCount: number;
}

export interface DatabaseTestResult {
  pingOk: boolean;
  latencyMs?: number;
  spreadsheetTitle?: string;
  spreadsheetId?: string;
  sheetsFound: string[];
  missingSheets: string[];
  writeTestOk: boolean;
  readTestOk: boolean;
  testedAt: string;
  rawDetails?: string;
}

// ============================================================================
// CONTEXTUAL VOCATIONAL KKA PROJECTS (8 MAJORS X 2 LEVELS = 16 PROJECTS)
// ============================================================================

export interface ProjectSafeDataset {
  dataset_name: string;
  description: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface ProjectStepInstruction {
  step_number: number;
  title: string;
  description: string;
  expected_action: string;
}

export interface ProjectAnalysisQuestion {
  id: string;
  question: string;
  kka_focus: string; // e.g. 'Algoritma', 'Pengolahan Data', 'Dekomposisi', 'Etika AI'
  sample_answer_guide: string;
}

export interface ProjectDigitalLKPD {
  lkpd_id: string;
  title: string;
  sections: {
    section_title: string;
    description?: string;
    tasks: {
      id: string;
      prompt: string;
      input_type: 'text' | 'choice' | 'table';
      options?: string[];
      table_columns?: string[];
      default_rows?: string[][];
    }[];
  }[];
}

export interface ProjectSimulationConfig {
  simulation_type: string;
  title: string;
  description: string;
  safety_guidelines: string;
  default_inputs: Record<string, any>;
}

export interface VocationalProject {
  project_id: string;
  major_code: VocationalMajorCode;
  major_name: string;
  field_category: string;
  project_level: 'Dasar' | 'Pengembangan';
  title: string;
  problem_statement: string;
  learning_objectives: string[];
  kka_concepts: {
    computational_thinking: string;
    algorithm: string;
    data_processing: string;
    ai_or_ethics: string;
  };
  realistic_scenario: string;
  safe_sample_dataset: ProjectSafeDataset;
  step_by_step_instructions: ProjectStepInstruction[];
  simulation_config: ProjectSimulationConfig;
  analysis_questions: ProjectAnalysisQuestion[];
  expected_final_product: string;
  digital_lkpd: ProjectDigitalLKPD;
  assessment_rubric: RubricCriterion[];
  success_criteria: string[];
  reflection_prompts: string[];
}

export interface DataConsistencyViolation {
  table: string;
  field: string;
  record_id: string;
  issue: string;
  severity: 'error' | 'warning';
}

export interface DataConsistencyReport {
  timestamp: string;
  is_valid: boolean;
  total_records: number;
  tables_checked: number;
  violations: DataConsistencyViolation[];
  summary: {
    errors: number;
    warnings: number;
    orphaned_foreign_keys: number;
    mismatched_student_majors: number;
    unassigned_teacher_classes: number;
    invalid_target_classes: number;
  };
}

export interface AccessSecurityScenarioTest {
  id: string;
  scenario: string;
  steps: string;
  expected_result: string;
  actual_result: string;
  status: 'PASS' | 'FAIL';
  followup: string;
}

// ============================================================================
// PROYEK KOLABORASI LINTAS JURUSAN (CROSS-MAJOR COLLABORATIVE PROJECTS)
// ============================================================================

export interface CrossMajorRoleDefinition {
  major_code: VocationalMajorCode;
  major_name: string;
  role_title: string;
  role_description: string;
  deliverables: string[];
  computational_concept: string; // e.g. Algoritma, Pengolahan Data, Sensor Otomasi, Etika AI
  suggested_tools: string[];
  sample_guidance: string;
}

export interface CrossMajorProject {
  project_id: string;
  title: string;
  problem_statement: string;
  theme: string; // e.g. 'Kampanye Hemat Energi Sekolah & Efisiensi Berkelanjutan'
  learning_objectives: string[];
  target_majors: VocationalMajorCode[]; // e.g. ['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR']
  target_classes: string[]; // e.g. ['cls-dkv-1', 'cls-titl-1', ...]
  created_by: string; // teacher_id
  teacher_name?: string;
  created_at: string;
  start_at: string;
  due_at: string;
  status: 'draft' | 'published' | 'completed' | 'archived';
  team_size_max: number;
  role_definitions: CrossMajorRoleDefinition[];
  individual_rubric: RubricCriterion[]; // Rubrik penilaian kontribusi individu
  group_rubric: RubricCriterion[]; // Rubrik penilaian produk tim & refleksi
  dataset_reference?: ProjectSafeDataset;
  guidelines: string;
  is_template?: boolean;
}

export interface TeamMemberContribution {
  student_id: string;
  student_name: string;
  class_id: string;
  major_code: VocationalMajorCode;
  assigned_role_title: string;
  contribution_status: 'Belum Dikerjakan' | 'Draf' | 'Terkirim';
  contribution_text?: string;
  contribution_files?: FileAttachment[];
  contribution_data?: Record<string, any>;
  submitted_at?: string;
  // Individual grading (terpisah dari nilai kelompok)
  individual_score?: number;
  individual_rubric_scores?: Record<string, number>;
  individual_feedback?: string;
  individual_graded_at?: string;
  individual_graded_by?: string;
}

export interface GroupFinalDeliverable {
  final_product_title: string;
  final_product_summary: string;
  integrated_solution_url?: string;
  presentation_or_document?: FileAttachment;
  team_reflection: string;
  kka_concepts_applied: string;
  submitted_at?: string;
  status: 'Draf' | 'Terkirim' | 'Perlu Revisi' | 'Sudah Dinilai';
}

export interface CrossMajorTeam {
  team_id: string;
  project_id: string;
  project_title?: string;
  team_name: string;
  leader_student_id: string;
  leader_name?: string;
  members: TeamMemberContribution[];
  group_deliverable: GroupFinalDeliverable;
  // Group grading (terpisah dari nilai individu)
  group_score?: number;
  group_rubric_scores?: Record<string, number>;
  group_feedback?: string;
  group_graded_at?: string;
  group_graded_by?: string;
  created_at: string;
  updated_at: string;
}

export interface MultiMajorTestScenarioResult {
  id: string; // e.g. 'MM-01' s.d. 'MM-10'
  scenario_name: string;
  major_scope: string; // e.g. '8 Jurusan SMK'
  steps: string;
  expected_result: string;
  actual_result: string;
  status: 'BERHASIL' | 'GAGAL' | 'SIMULASI';
  verification_mode: 'TERUJI_NYATA' | 'SIMULASI_INTERAKTIF' | 'PERLU_KONFIGURASI_GAS';
  tested_majors: VocationalMajorCode[];
  technical_note: string;
}

export interface MultiMajorTestSummary {
  timestamp: string;
  total_scenarios: number;
  passed_real: number;
  interactive_simulated: number;
  requires_config: number;
  failed: number;
  majors_verified: VocationalMajorCode[];
}


