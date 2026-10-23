import React, { useState } from 'react';
import {
  CheckCircle,
  Clock,
  FileText,
  Download,
  Award,
  Search,
  Filter,
  MessageSquare,
  Plus,
  Save,
  Copy,
  Trash2,
  Edit3,
  RefreshCw,
  Eye,
  ShieldCheck,
  Brain,
  Layers,
  HelpCircle,
  Paperclip,
  Check,
  X,
  Lock,
  Unlock,
  AlertCircle,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import {
  Assignment,
  Submission,
  User,
  ClassItem,
  LKPDItem,
  LKPDResponse,
  QuestionItem,
  RubricCriterion
} from '../../types';
import {
  getAssignments,
  getSubmissions,
  getClasses,
  getClassesForTeacher,
  getLKPDs,
  getLKPDResponses,
  gradeSubmission,
  requestRevision,
  saveAssignment,
  duplicateAssignment,
  deleteAssignment,
  saveLKPD,
  duplicateLKPD,
  deleteLKPD,
  gradeLKPDResponse,
  requestLKPDRevision,
  getQuestionBank,
  saveQuestionItem,
  exportToCsv
} from '../../services/apiService';
import { calculateQuestionDistribution } from '../../data/questionBankData';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { EmptyState } from '../common/EmptyState';
import { NotificationBanner } from '../common/NotificationBanner';

interface GradingCenterProps {
  currentUser: User;
  onNavigateToCrossMajor?: () => void;
}

export const TeacherGradingCenter: React.FC<GradingCenterProps> = ({
  currentUser,
  onNavigateToCrossMajor
}) => {
  const [activeTab, setActiveTab] = useState<'penilaian' | 'kelola_tugas_lkpd' | 'bank_soal'>('penilaian');

  // Master Datasets
  const [assignments, setAssignments] = useState<Assignment[]>(getAssignments());
  const [submissions, setSubmissions] = useState<Submission[]>(getSubmissions());
  const [lkpds, setLkpds] = useState<LKPDItem[]>(getLKPDs());
  const [lkpdResponses, setLkpdResponses] = useState<LKPDResponse[]>(getLKPDResponses());
  const [classes] = useState<ClassItem[]>(getClasses());
  const teacherClasses = currentUser.role === 'guru' ? getClassesForTeacher(currentUser.user_id) : classes;
  const authorizedClassIds = new Set(teacherClasses.map(c => c.class_id));
  const [questions, setQuestions] = useState<QuestionItem[]>(getQuestionBank());

  // Notifications & Confirmations
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [confirmDeleteTarget, setConfirmDeleteTarget] = useState<{
    id: string;
    title: string;
    type: 'assignment' | 'lkpd';
  } | null>(null);
  const [revisionError, setRevisionError] = useState<string | null>(null);

  // Filter Submissions
  const [submissionType, setSubmissionType] = useState<'assignments' | 'lkpds'>('assignments');
  const [selectedClassId, setSelectedClassId] = useState<string>('all');
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>('all');
  const [searchStudent, setSearchStudent] = useState<string>('');

  // Active Grading Item
  const [activeSubmission, setActiveSubmission] = useState<Submission | null>(null);
  const [activeLKPDResponse, setActiveLKPDResponse] = useState<LKPDResponse | null>(null);

  // Grading Form State
  const [rubricScores, setRubricScores] = useState<Record<string, number>>({});
  const [feedback, setFeedback] = useState('');
  const [totalScore, setTotalScore] = useState<number>(85);
  const [revisionNotesInput, setRevisionNotesInput] = useState('');
  const [isRevisionMode, setIsRevisionMode] = useState(false);

  // Assignment Modal State (Create & Edit)
  const [showAsgModal, setShowAsgModal] = useState(false);
  const [editingAsgId, setEditingAsgId] = useState<string | null>(null);
  const [asgTitle, setAsgTitle] = useState('');
  const [asgInstructions, setAsgInstructions] = useState('');
  const [asgClassId, setAsgClassId] = useState('cls-dkv-1');
  const [asgModuleId, setAsgModuleId] = useState('mod-01');
  const [asgType, setAsgType] = useState<Assignment['assignment_type']>('Uraian');
  const [asgStartAt, setAsgStartAt] = useState(new Date().toISOString().slice(0, 16));
  const [asgDueAt, setAsgDueAt] = useState('2026-11-20T23:59');
  const [asgWeight, setAsgWeight] = useState<number>(20);
  const [asgPublishGrades, setAsgPublishGrades] = useState(true);
  const [asgAllowDiscussion, setAsgAllowDiscussion] = useState(true);
  const [asgRubric, setAsgRubric] = useState<RubricCriterion[]>([
    { id: 'r1', name: 'Pemahaman Konsep', weight: 25, description: 'Penguasaan materi dasar buku teks' },
    { id: 'r2', name: 'Ketepatan Langkah & Logika', weight: 25, description: 'Keruntutan alur penyelesaian masalah' },
    { id: 'r3', name: 'Kreativitas & Daya Analisis', weight: 25, description: 'Orisinalitas ide dan relevansi kejuruan' },
    { id: 'r4', name: 'Etika & Kerapian Dokumen', weight: 25, description: 'Kejujuran akademis dan kerapian tata bahasa' }
  ]);

  // Duplication Modal State
  const [duplicationTarget, setDuplicationTarget] = useState<{
    type: 'assignment' | 'lkpd';
    id: string;
    title: string;
  } | null>(null);
  const [duplicateClassId, setDuplicateClassId] = useState('cls-tjkt-1');

  // Question Bank Distribution Calculator State
  const [simulatedQuestionCount, setSimulatedQuestionCount] = useState<number>(10);
  const distributionInfo = calculateQuestionDistribution(simulatedQuestionCount);

  // Filter Submissions (Otorisasi: Guru hanya mengakses rombel yang ditugaskan)
  const filteredSubmissions = submissions.filter(s => {
    if (currentUser.role === 'guru' && !authorizedClassIds.has(s.class_id)) return false;
    if (selectedClassId !== 'all' && s.class_id !== selectedClassId) return false;
    if (selectedAssignmentId !== 'all' && s.assignment_id !== selectedAssignmentId) return false;
    if (searchStudent.trim()) {
      const q = searchStudent.toLowerCase();
      return (
        s.student_name.toLowerCase().includes(q) ||
        (s.student_nis && s.student_nis.includes(q))
      );
    }
    return true;
  });

  const filteredLKPDResponses = lkpdResponses.filter(r => {
    if (currentUser.role === 'guru' && r.class_id && !authorizedClassIds.has(r.class_id)) return false;
    if (selectedClassId !== 'all' && r.class_id !== selectedClassId) return false;
    if (searchStudent.trim()) {
      const q = searchStudent.toLowerCase();
      return r.student_name.toLowerCase().includes(q);
    }
    return true;
  });

  // Open Grading Drawer for Assignment
  const handleOpenGrading = (sub: Submission) => {
    setActiveSubmission(sub);
    setActiveLKPDResponse(null);
    setFeedback(sub.feedback || '');
    setTotalScore(sub.score !== undefined ? sub.score : 85);
    setRevisionNotesInput(sub.revision_notes || '');
    setIsRevisionMode(false);

    const asg = assignments.find(a => a.assignment_id === sub.assignment_id);
    if (asg && asg.rubric) {
      const initialRubrics: Record<string, number> = {};
      asg.rubric.forEach(r => {
        initialRubrics[r.id] = sub.rubric_scores?.[r.id] !== undefined
          ? sub.rubric_scores[r.id]
          : Math.round(r.weight * 0.85);
      });
      setRubricScores(initialRubrics);
    }
  };

  // Open Grading Drawer for LKPD
  const handleOpenLKPDGrading = (resp: LKPDResponse) => {
    setActiveLKPDResponse(resp);
    setActiveSubmission(null);
    setFeedback(resp.feedback || '');
    setTotalScore(resp.score !== undefined ? resp.score : 85);
    setRevisionNotesInput(resp.revision_notes || '');
    setIsRevisionMode(false);
  };

  // Save Final Grade for Assignment
  const handleSaveGrade = () => {
    if (!activeSubmission) return;
    gradeSubmission(
      activeSubmission.submission_id,
      totalScore,
      feedback,
      rubricScores,
      currentUser
    );
    setSubmissions(getSubmissions());
    setActiveSubmission(null);
    setNotification({
      type: 'success',
      message: 'Nilai dan umpan balik tugas siswa berhasil disimpan dan dipublikasikan ke rapor belajar!'
    });
  };

  // Request Revision for Assignment
  const handleSendRevisionRequest = () => {
    if (!activeSubmission) return;
    if (!revisionNotesInput.trim()) {
      setRevisionError('Tuliskan catatan perbaikan (revisi) yang jelas untuk membimbing perbaikan siswa.');
      return;
    }
    requestRevision(activeSubmission.submission_id, revisionNotesInput, currentUser);
    setSubmissions(getSubmissions());
    setActiveSubmission(null);
    setRevisionError(null);
    setNotification({
      type: 'warning',
      message: `Tugas siswa "${activeSubmission.student_name}" telah dikembalikan dengan status "Perlu Revisi".`
    });
  };

  // Save Grade for LKPD
  const handleSaveLKPDGrade = () => {
    if (!activeLKPDResponse) return;
    gradeLKPDResponse(activeLKPDResponse.response_id, totalScore, feedback, currentUser);
    setLkpdResponses(getLKPDResponses());
    setActiveLKPDResponse(null);
    setNotification({
      type: 'success',
      message: `Nilai LKPD untuk "${activeLKPDResponse.student_name}" berhasil disimpan!`
    });
  };

  // Request Revision for LKPD
  const handleSendLKPDRevision = () => {
    if (!activeLKPDResponse) return;
    if (!revisionNotesInput.trim()) {
      setRevisionError('Tuliskan catatan perbaikan (revisi) yang perlu dilakukan siswa pada LKPD ini.');
      return;
    }
    requestLKPDRevision(activeLKPDResponse.response_id, revisionNotesInput, currentUser);
    setLkpdResponses(getLKPDResponses());
    setActiveLKPDResponse(null);
    setRevisionError(null);
    setNotification({
      type: 'warning',
      message: `LKPD siswa "${activeLKPDResponse.student_name}" telah dikembalikan untuk revisi.`
    });
  };

  // Open Create/Edit Assignment Modal
  const handleOpenCreateModal = () => {
    setEditingAsgId(null);
    setAsgTitle('');
    setAsgInstructions('');
    setAsgClassId('cls-dkv-1');
    setAsgModuleId('mod-01');
    setAsgType('Uraian');
    setAsgStartAt(new Date().toISOString().slice(0, 16));
    setAsgDueAt('2026-11-20T23:59');
    setAsgWeight(20);
    setAsgPublishGrades(true);
    setAsgAllowDiscussion(true);
    setAsgRubric([
      { id: 'r1', name: 'Pemahaman Konsep', weight: 25, description: 'Penguasaan materi dasar' },
      { id: 'r2', name: 'Ketepatan Langkah & Logika', weight: 25, description: 'Keruntutan alur penyelesaian' },
      { id: 'r3', name: 'Kreativitas & Daya Analisis', weight: 25, description: 'Orisinalitas ide kejuruan' },
      { id: 'r4', name: 'Etika & Kerapian Dokumen', weight: 25, description: 'Kerapian dan kejujuran sumber' }
    ]);
    setShowAsgModal(true);
  };

  const handleOpenEditModal = (asg: Assignment) => {
    setEditingAsgId(asg.assignment_id);
    setAsgTitle(asg.title);
    setAsgInstructions(asg.instructions);
    setAsgClassId(asg.class_id);
    setAsgModuleId(asg.module_id);
    setAsgType(asg.assignment_type);
    setAsgStartAt(new Date(asg.start_at).toISOString().slice(0, 16));
    setAsgDueAt(new Date(asg.due_at).toISOString().slice(0, 16));
    setAsgWeight(asg.weight || 20);
    setAsgPublishGrades(asg.publish_grades !== false);
    setAsgAllowDiscussion(asg.allow_discussion_view !== false);
    setAsgRubric(asg.rubric || []);
    setShowAsgModal(true);
  };

  const handleSaveAssignmentForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!asgTitle.trim()) return;

    const payload: Assignment = {
      assignment_id: editingAsgId || 'asg-' + Date.now(),
      teacher_id: currentUser.user_id,
      class_id: asgClassId,
      module_id: asgModuleId,
      title: asgTitle,
      instructions: asgInstructions,
      assignment_type: asgType,
      is_group: false,
      start_at: new Date(asgStartAt).toISOString(),
      due_at: new Date(asgDueAt).toISOString(),
      weight: Number(asgWeight),
      max_score: 100,
      status: 'published',
      publish_grades: asgPublishGrades,
      allow_discussion_view: asgAllowDiscussion,
      rubric: asgRubric
    };

    saveAssignment(payload, currentUser);
    setAssignments(getAssignments());
    setShowAsgModal(false);
    setNotification({
      type: 'success',
      message: editingAsgId ? 'Pengaturan tugas pembelajaran berhasil diperbarui!' : 'Tugas baru berhasil diterbitkan untuk rombel!'
    });
  };

  const handleDeleteAssignmentItem = (assignmentId: string) => {
    const asg = assignments.find(a => a.assignment_id === assignmentId);
    setConfirmDeleteTarget({
      id: assignmentId,
      title: asg?.title || 'Penugasan Pembelajaran',
      type: 'assignment'
    });
  };

  // Duplication Handler
  const handleExecuteDuplicate = () => {
    if (!duplicationTarget) return;

    if (duplicationTarget.type === 'assignment') {
      const cloned = duplicateAssignment(duplicationTarget.id, duplicateClassId, currentUser);
      if (cloned) {
        setAssignments(getAssignments());
        setNotification({
          type: 'success',
          message: `Tugas "${duplicationTarget.title}" berhasil diduplikasi untuk rombel ${duplicateClassId.toUpperCase()}!`
        });
      }
    } else {
      const cloned = duplicateLKPD(duplicationTarget.id, duplicateClassId, currentUser);
      if (cloned) {
        setLkpds(getLKPDs());
        setNotification({
          type: 'success',
          message: `LKPD "${duplicationTarget.title}" berhasil diduplikasi untuk rombel ${duplicateClassId.toUpperCase()}!`
        });
      }
    }
    setDuplicationTarget(null);
  };

  // Rubric manipulation in Modal
  const handleAddRubricCriterion = () => {
    const newId = 'r' + (asgRubric.length + 1);
    setAsgRubric(prev => [
      ...prev,
      { id: newId, name: 'Kriteria Tambahan', weight: 10, description: 'Deskripsi indikator capaian' }
    ]);
  };

  const handleUpdateRubricCriterion = (
    idx: number,
    field: keyof RubricCriterion,
    val: string | number
  ) => {
    setAsgRubric(prev => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const handleRemoveRubricCriterion = (idx: number) => {
    if (asgRubric.length <= 1) return;
    setAsgRubric(prev => prev.filter((_, i) => i !== idx));
  };

  // Export Full Recapitulation CSV
  const handleExportCsv = () => {
    const rows = [
      [
        'ID Pengumpulan',
        'Tipe',
        'ID Asesmen',
        'Nama Siswa',
        'NIS',
        'Kelas',
        'Status',
        'Nilai Akhir',
        'Waktu Pengumpulan',
        'Penilai',
        'Umpan Balik Guru',
        'Riwayat Revisi'
      ]
    ];

    if (submissionType === 'assignments') {
      filteredSubmissions.forEach(s => {
        rows.push([
          s.submission_id,
          'Tugas Mandiri/Proyek',
          s.assignment_id,
          s.student_name,
          s.student_nis || '',
          s.class_id,
          s.status,
          s.score !== undefined ? s.score.toString() : 'Belum Dinilai',
          s.submitted_at,
          s.graded_by || '',
          s.feedback || '',
          s.revision_notes || ''
        ]);
      });
    } else {
      filteredLKPDResponses.forEach(r => {
        rows.push([
          r.response_id,
          'LKPD Digital',
          r.lkpd_id,
          r.student_name,
          '-',
          r.class_id,
          r.status,
          r.score !== undefined ? r.score.toString() : 'Belum Dinilai',
          r.submitted_at,
          'Guru Mata Pelajaran',
          r.feedback || '',
          r.revision_notes || ''
        ]);
      });
    }

    exportToCsv(`Rekap_Nilai_KKA_${new Date().toISOString().split('T')[0]}.csv`, rows);
  };

  return (
    <div className="space-y-6">
      {/* Notification Banner */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Top Header */}
      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
              Pusat Pengelolaan Asesmen Guru · KKA Kelas X SMK
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
              Pusat Penilaian, Rubrik &amp; Bank Soal
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Kelola penugasan, tetapkan bobot &amp; rubrik, lakukan koreksi hasil kerja siswa, minta revisi, dan atur
              kebijakan publikasi pembahasan secara terintegrasi dengan Google Sheets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('penilaian')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'penilaian'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              1. Penilaian Siswa ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('kelola_tugas_lkpd')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'kelola_tugas_lkpd'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              2. Kelola Tugas &amp; LKPD ({assignments.length})
            </button>
            <button
              onClick={() => setActiveTab('bank_soal')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bank_soal'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              3. Bank Soal (60 Soal)
            </button>
          </div>
        </div>
      </div>

      {/* Proyek Kolaborasi Lintas Jurusan Quick Banner */}
      {onNavigateToCrossMajor && (
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-cyan-950 p-4 sm:p-5 rounded-2xl border border-indigo-700/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-bold uppercase tracking-wider">
                  Penilaian Terpisah
                </span>
                <span className="text-xs font-bold text-white">Pusat Penilaian Kolaborasi Lintas Jurusan</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Nilai kontribusi mandiri anggota tim (sesuai peran kejuruan DKV, TKP, DPIB, TOI, TITL, TAV, TSM, TKR) dan produk terintegrasi kelompok secara terpisah dengan rubrik terstandar.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onNavigateToCrossMajor}
            className="w-full sm:w-auto px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Buka Penilaian Kolaborasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 1: PENILAIAN & PEMERIKSAAN PENGUMPULAN SISWA */}
      {/* ==================================================================== */}
      {activeTab === 'penilaian' && (
        <div className="space-y-4">
          {/* Controls & Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs">
              {/* Type Switcher */}
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setSubmissionType('assignments')}
                  className={`py-1 px-3 rounded-md font-bold transition-colors ${
                    submissionType === 'assignments'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tugas &amp; Proyek ({submissions.length})
                </button>
                <button
                  onClick={() => setSubmissionType('lkpds')}
                  className={`py-1 px-3 rounded-md font-bold transition-colors ${
                    submissionType === 'lkpds'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  LKPD Digital ({lkpdResponses.length})
                </button>
              </div>

              {/* Class Filter */}
              <select
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="p-1.5 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 font-semibold"
              >
                <option value="all">Semua Rombel Diampu ({teacherClasses.length})</option>
                {teacherClasses.map(c => (
                  <option key={c.class_id} value={c.class_id}>
                    {c.class_name} ({c.major})
                  </option>
                ))}
              </select>

              {/* Assignment Filter */}
              {submissionType === 'assignments' && (
                <select
                  value={selectedAssignmentId}
                  onChange={(e) => setSelectedAssignmentId(e.target.value)}
                  className="p-1.5 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 font-medium max-w-xs truncate"
                >
                  <option value="all">Semua Judul Tugas</option>
                  {assignments.map(a => (
                    <option key={a.assignment_id} value={a.assignment_id}>
                      {a.title}
                    </option>
                  ))}
                </select>
              )}

              {/* Search by Name */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchStudent}
                  onChange={(e) => setSearchStudent(e.target.value)}
                  placeholder="Cari siswa atau NIS..."
                  className="pl-8 pr-3 py-1.5 border border-slate-300 rounded-lg font-medium text-xs w-44"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCsv}
                className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" /> Ekspor Rekap (CSV)
              </button>
            </div>
          </div>

          {/* Table Content */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono">
                    <th className="p-3 border-r border-slate-800">Nama Siswa</th>
                    <th className="p-3 border-r border-slate-800">NIS &amp; Rombel</th>
                    <th className="p-3 border-r border-slate-800">
                      {submissionType === 'assignments' ? 'Judul Penugasan' : 'Judul LKPD'}
                    </th>
                    <th className="p-3 border-r border-slate-800">Waktu Pengumpulan</th>
                    <th className="p-3 border-r border-slate-800 text-center">Status</th>
                    <th className="p-3 border-r border-slate-800 text-center">Nilai</th>
                    <th className="p-3 text-center">Aksi Penilaian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {submissionType === 'assignments' ? (
                    filteredSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-6">
                          <EmptyState
                            icon={FileText}
                            title="Belum Ada Pengumpulan Tugas"
                            description="Tidak ditemukan pengumpulan tugas siswa untuk filter rombel atau judul tugas ini. Anda dapat memilih 'Semua Rombel' atau menghapus kata kunci pencarian."
                            actionLabel="Tampilkan Semua Rombel"
                            onAction={() => {
                              setSelectedClassId('all');
                              setSelectedAssignmentId('all');
                              setSearchStudent('');
                            }}
                          />
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions.map(sub => {
                        const asg = assignments.find(a => a.assignment_id === sub.assignment_id);
                        const isGraded = sub.status === 'Sudah Dinilai';
                        const isRevision = sub.status === 'Perlu Revisi';

                        return (
                          <tr key={sub.submission_id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="p-3 font-bold text-slate-900">{sub.student_name}</td>
                            <td className="p-3 font-mono text-slate-600">
                              {sub.student_nis || '-'} · {sub.class_id}
                            </td>
                            <td className="p-3 text-slate-800 max-w-xs truncate">
                              {asg?.title || sub.assignment_id}
                            </td>
                            <td className="p-3 font-mono text-slate-500 text-[11px]">
                              {new Date(sub.submitted_at).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </td>
                            <td className="p-3 text-center">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold inline-flex items-center gap-1 ${
                                  isGraded
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : isRevision
                                    ? 'bg-amber-100 text-amber-900 font-extrabold'
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {isRevision && <RefreshCw className="w-3 h-3 text-amber-700" />}
                                {sub.status}
                              </span>
                            </td>
                            <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">
                              {sub.score !== undefined ? sub.score : '-'}
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => handleOpenGrading(sub)}
                                className="py-1 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                              >
                                {isGraded ? 'Edit Nilai' : 'Periksa & Nilai'}
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )
                  ) : filteredLKPDResponses.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-6">
                        <EmptyState
                          icon={FileText}
                          title="Belum Ada Respons LKPD Digital"
                          description="Siswa belum menyerahkan jawaban untuk LKPD pada rombel yang dipilih. Jawaban yang diserahkan akan otomatis masuk ke tabel ini."
                          actionLabel="Tampilkan Semua Rombel"
                          onAction={() => {
                            setSelectedClassId('all');
                            setSearchStudent('');
                          }}
                        />
                      </td>
                    </tr>
                  ) : (
                    filteredLKPDResponses.map(resp => {
                      const lkpd = lkpds.find(l => l.lkpd_id === resp.lkpd_id);
                      const isGraded = resp.status === 'Sudah Dinilai';
                      const isRevision = resp.status === 'Perlu Revisi';

                      return (
                        <tr key={resp.response_id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3 font-bold text-slate-900">{resp.student_name}</td>
                          <td className="p-3 font-mono text-slate-600">{resp.class_id}</td>
                          <td className="p-3 text-slate-800 max-w-xs truncate">
                            {lkpd?.title || resp.lkpd_id}
                          </td>
                          <td className="p-3 font-mono text-slate-500 text-[11px]">
                            {new Date(resp.submitted_at).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                          <td className="p-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold inline-flex items-center gap-1 ${
                                isGraded
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : isRevision
                                  ? 'bg-amber-100 text-amber-900 font-extrabold'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {isRevision && <RefreshCw className="w-3 h-3 text-amber-700" />}
                              {resp.status}
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">
                            {resp.score !== undefined ? resp.score : '-'}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => handleOpenLKPDGrading(resp)}
                              className="py-1 px-3 bg-cyan-700 hover:bg-cyan-800 text-white rounded text-[11px] font-semibold transition-colors"
                            >
                              {isGraded ? 'Edit Nilai' : 'Periksa LKPD'}
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 2: KELOLA TUGAS & LKPD (CRUD & DUPLIKASI KE KELAS LAIN) */}
      {/* ==================================================================== */}
      {activeTab === 'kelola_tugas_lkpd' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Katalog Penugasan &amp; LKPD Digital</h3>
              <p className="text-xs text-slate-500">
                Atur bobot nilai, tenggat waktu, hak publikasi pembahasan, dan duplikasi tugas ke rombel lain.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenCreateModal}
                className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" /> Buat Tugas Baru
              </button>
            </div>
          </div>

          {assignments.length === 0 ? (
            <EmptyState
              icon={FileText}
              title="Belum Ada Penugasan Pembelajaran"
              description="Anda belum membuat penugasan untuk kelas Anda. Klik 'Buat Tugas Baru' untuk mulai menyusun tugas, bobot nilai, dan rubrik asesmen."
              actionLabel="Buat Tugas Pertama"
              onAction={handleOpenCreateModal}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assignments.map(asg => (
                <div
                  key={asg.assignment_id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-3 flex flex-col justify-between hover:border-cyan-400 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        Kelas: {asg.class_id}
                      </span>
                      <span className="text-[10px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                        Bobot {asg.weight || 20}%
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{asg.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{asg.instructions}</p>

                    <div className="pt-2 text-[11px] text-slate-600 space-y-1 border-t border-slate-100">
                      <div className="flex justify-between">
                        <span>Tenggat:</span>
                        <strong className="font-mono">
                          {new Date(asg.due_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Publikasi Nilai:</span>
                        <strong className={asg.publish_grades !== false ? 'text-emerald-700' : 'text-amber-700'}>
                          {asg.publish_grades !== false ? 'Diizinkan' : 'Ditangguhkan'}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Lihat Pembahasan:</span>
                        <strong className={asg.allow_discussion_view !== false ? 'text-emerald-700' : 'text-amber-700'}>
                          {asg.allow_discussion_view !== false ? 'Diizinkan' : 'Terkunci'}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenEditModal(asg)}
                      className="flex-1 py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button
                      onClick={() =>
                        setDuplicationTarget({
                          type: 'assignment',
                          id: asg.assignment_id,
                          title: asg.title
                        })
                      }
                      className="flex-1 py-1.5 px-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 rounded text-xs font-semibold flex items-center justify-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      <Copy className="w-3.5 h-3.5" /> Duplikasi
                    </button>
                    <button
                      onClick={() => handleDeleteAssignmentItem(asg.assignment_id)}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                      title="Hapus Tugas"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 3: BANK SOAL & STANDAR KOGNITIF (50% LOTS, 30% MOTS, 20% HOTS) */}
      {/* ==================================================================== */}
      {activeTab === 'bank_soal' && (
        <div className="space-y-6">
          {/* Transparent Distribution Calculator Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
                  Standar Mutu Soal Ujian (Kemendikdasmen 2025)
                </div>
                <h3 className="text-xl font-bold mt-1 text-white">
                  Kalkulator Distribusi Soal: 50% LOTS, 30% MOTS, 20% HOTS
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Menjamin proporsi kognitif yang seimbang. Untuk jumlah butir soal yang tidak habis dibagi sepuluh,
                  sistem menerapkan algoritma pembulatan kuota terbesar (Metode Hamilton) secara transparan.
                </p>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-xs space-y-2">
                <div className="font-semibold text-slate-300">Simulasikan Jumlah Soal Ujian:</div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={simulatedQuestionCount}
                    onChange={(e) => setSimulatedQuestionCount(Number(e.target.value))}
                    className="w-36 accent-cyan-400"
                  />
                  <span className="font-mono text-base font-bold text-cyan-300 w-12 text-center">
                    {simulatedQuestionCount}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Distribution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 bg-blue-950/80 border border-blue-700/60 rounded-xl space-y-1">
                <div className="flex justify-between items-center text-blue-300">
                  <span className="font-bold">LOTS (Target 50%)</span>
                  <span className="font-mono">{distributionInfo.lotsActualPercent}%</span>
                </div>
                <div className="text-xl font-extrabold font-mono text-white">
                  {distributionInfo.lotsCount} Butir Soal
                </div>
                <div className="text-[10px] text-blue-400">Pemahaman konsep &amp; fakta dasar</div>
              </div>

              <div className="p-3 bg-amber-950/80 border border-amber-700/60 rounded-xl space-y-1">
                <div className="flex justify-between items-center text-amber-300">
                  <span className="font-bold">MOTS (Target 30%)</span>
                  <span className="font-mono">{distributionInfo.motsActualPercent}%</span>
                </div>
                <div className="text-xl font-extrabold font-mono text-white">
                  {distributionInfo.motsCount} Butir Soal
                </div>
                <div className="text-[10px] text-amber-400">Penerapan logika prosedural</div>
              </div>

              <div className="p-3 bg-purple-950/80 border border-purple-700/60 rounded-xl space-y-1">
                <div className="flex justify-between items-center text-purple-300">
                  <span className="font-bold">HOTS (Target 20%)</span>
                  <span className="font-mono">{distributionInfo.hotsActualPercent}%</span>
                </div>
                <div className="text-xl font-extrabold font-mono text-white">
                  {distributionInfo.hotsCount} Butir Soal
                </div>
                <div className="text-[10px] text-purple-400">Analisis kritis &amp; studi kasus</div>
              </div>
            </div>

            <div className="bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60 text-[11px] text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{distributionInfo.transparencyNote}</span>
            </div>
          </div>

          {/* Master 60 Questions View (Teacher Authorized) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-600" />
                <span>Bank Soal Terproteksi (Akses Pihak Berwenang Guru &amp; Admin)</span>
              </h4>
              <span className="text-xs text-slate-500 font-mono">
                Total: 60 Soal (30 LOTS, 18 MOTS, 12 HOTS)
              </span>
            </div>

            <div className="space-y-3">
              {questions.map((q, idx) => (
                <div
                  key={q.question_id}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-500">#{idx + 1}</span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-mono text-[10px]">
                        {q.module_id.toUpperCase()}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                          q.cognitive_level === 'HOTS'
                            ? 'bg-purple-100 text-purple-800'
                            : q.cognitive_level === 'MOTS'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {q.cognitive_level} ({q.difficulty})
                      </span>
                    </div>

                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                      Tersimpan di Sheets
                    </span>
                  </div>

                  <p className="font-semibold text-slate-900 text-xs leading-relaxed">{q.question_text}</p>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    {q.options?.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className={`p-2 rounded-lg border ${
                          opt === q.answer_key
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold'
                            : 'border-slate-200 bg-slate-50/50 text-slate-700'
                        }`}
                      >
                        <span className="font-mono mr-1.5 font-bold">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* Secret Answer Key & Explanation */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 space-y-1">
                    <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Kunci Jawaban Resmi: &ldquo;{q.answer_key}&rdquo;</span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      <strong>Pembahasan Teori:</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* GRADING DRAWER / MODAL (ASSIGNMENT) */}
      {/* ==================================================================== */}
      {activeSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 md:p-8 space-y-5 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                  Pemeriksaan Jawaban Siswa
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{activeSubmission.student_name}</h3>
                <span className="text-xs text-slate-500">
                  NIS: {activeSubmission.student_nis} · Kelas: {activeSubmission.class_id}
                </span>
              </div>
              <button
                onClick={() => setActiveSubmission(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Answer Content */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Uraian / Teks Jawaban Siswa:</label>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto font-sans">
                {activeSubmission.answer || '(Siswa tidak menyertakan uraian teks)'}
              </div>
            </div>

            {/* Table data if present */}
            {activeSubmission.table_data && activeSubmission.table_data.length > 0 && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 block">Isi Tabel / Matriks Siswa:</label>
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-[11px] border-collapse bg-white">
                    <tbody>
                      {activeSubmission.table_data.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx === 0 ? 'bg-slate-100 font-bold' : ''}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2 border border-slate-200">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* File attachment if present */}
            {activeSubmission.file_attachment && (
              <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Paperclip className="w-4 h-4 text-cyan-700" />
                  <span className="font-semibold text-cyan-950">{activeSubmission.file_attachment.name}</span>
                </div>
                {activeSubmission.file_attachment.dataUrl && (
                  <a
                    href={activeSubmission.file_attachment.dataUrl}
                    download={activeSubmission.file_attachment.name}
                    className="py-1 px-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded text-[11px] font-bold"
                  >
                    Unduh Berkas
                  </a>
                )}
              </div>
            )}

            {/* Toggle Revision Mode */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <span className="font-bold text-slate-900 block">Opsi Permintaan Revisi:</span>
                <span className="text-[11px] text-slate-500">
                  Kembalikan tugas ke siswa jika memerlukan perbaikan sebelum nilai final dicatat.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsRevisionMode(!isRevisionMode)}
                className={`py-1.5 px-3 rounded-lg font-bold text-xs transition-colors ${
                  isRevisionMode ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {isRevisionMode ? 'Batal Minta Revisi' : 'Minta Revisi Tugas'}
              </button>
            </div>

            {isRevisionMode ? (
              /* Revision Notes Form */
              <div className="space-y-2 bg-amber-50 p-4 rounded-xl border border-amber-300">
                <label className="font-bold text-amber-950 block">Catatan Perbaikan / Arahan Revisi:</label>
                <textarea
                  value={revisionNotesInput}
                  onChange={(e) => setRevisionNotesInput(e.target.value)}
                  placeholder="Jelaskan secara spesifik apa yang harus diperbaiki siswa (misal: lengkapi analisis pilar abstraksi pada studi kasus)..."
                  rows={3}
                  className="w-full p-2.5 text-xs bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 font-sans"
                />
                <button
                  type="button"
                  onClick={handleSendRevisionRequest}
                  className="py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Kembalikan ke Siswa (Status: Perlu Revisi)
                </button>
              </div>
            ) : (
              /* Rubric Grading Controls */
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    Rubrik Penilaian Terstandarisasi (Buku Teks &amp; Kurikulum Merdeka)
                  </span>
                  <span className="font-mono text-sm font-bold text-cyan-800">
                    Total Nilai: {totalScore} / 100
                  </span>
                </div>

                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {assignments
                    .find(a => a.assignment_id === activeSubmission.assignment_id)
                    ?.rubric.map(r => (
                      <div key={r.id} className="space-y-1">
                        <div className="flex justify-between font-semibold text-slate-700">
                          <span>
                            {r.name} (Bobot {r.weight}%)
                          </span>
                          <span className="font-mono text-cyan-700 font-bold">{rubricScores[r.id] || 0}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={r.weight}
                          value={rubricScores[r.id] || 0}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            const updated = { ...rubricScores, [r.id]: val };
                            setRubricScores(updated);
                            const sum = Object.values(updated).reduce((a, b) => a + b, 0);
                            setTotalScore(sum);
                          }}
                          className="w-full accent-cyan-600"
                        />
                        <div className="text-[10px] text-slate-400">{r.description}</div>
                      </div>
                    ))}
                </div>

                {/* Constructive Feedback Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">
                    Umpan Balik Konstruktif untuk Siswa:
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tuliskan apresiasi, koreksi pemahaman konsep, atau arahan pengayaan..."
                    rows={3}
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Modal Actions */}
                <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveSubmission(null)}
                    className="py-2 px-4 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveGrade}
                    className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Save className="w-3.5 h-3.5" /> Simpan &amp; Publikasikan Nilai
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* GRADING DRAWER / MODAL (LKPD) */}
      {/* ==================================================================== */}
      {activeLKPDResponse && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 md:p-8 space-y-5 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                  Pemeriksaan LKPD Digital
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{activeLKPDResponse.student_name}</h3>
                <span className="text-xs text-slate-500">Kelas: {activeLKPDResponse.class_id}</span>
              </div>
              <button
                onClick={() => setActiveLKPDResponse(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Answer Responses */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-800 block">Jawaban Per Butir Soal LKPD:</label>
              {Object.entries(activeLKPDResponse.response_data || {}).map(([key, val], idx) => (
                <div key={key} className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-800">Bagian #{idx + 1} ({key}):</div>
                  <div className="text-slate-700 whitespace-pre-wrap">{val}</div>
                </div>
              ))}
            </div>

            {/* Total Score & Feedback */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-800">Nilai LKPD (0 - 100):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={totalScore}
                  onChange={(e) => setTotalScore(Number(e.target.value))}
                  className="w-24 p-1.5 border border-slate-300 rounded font-mono font-bold text-sm text-center"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800 block">Umpan Balik Guru:</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Catatan evaluasi guru terhadap LKPD..."
                  rows={3}
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveLKPDResponse(null)}
                  className="py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSaveLKPDGrade}
                  className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Simpan Nilai LKPD
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CREATE & EDIT ASSIGNMENT MODAL (WITH WEIGHT, DATES & RUBRICS) */}
      {/* ==================================================================== */}
      {showAsgModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveAssignmentForm}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 md:p-8 space-y-4 text-xs"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {editingAsgId ? 'Edit Pengaturan Penugasan' : 'Buat Penugasan Pembelajaran Baru'}
              </h3>
              <button
                type="button"
                onClick={() => setShowAsgModal(false)}
                className="text-slate-400 font-bold"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Judul Penugasan:</label>
              <input
                type="text"
                value={asgTitle}
                onChange={(e) => setAsgTitle(e.target.value)}
                placeholder="Contoh: Analisis Kebutuhan Sistem Kasir Kantin"
                required
                className="w-full p-2 border border-slate-300 rounded-lg font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Rombel:</label>
                <select
                  value={asgClassId}
                  onChange={(e) => setAsgClassId(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-semibold"
                >
                  {classes.map(c => (
                    <option key={c.class_id} value={c.class_id}>
                      {c.class_name} ({c.major})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Modul Terkait:</label>
                <select
                  value={asgModuleId}
                  onChange={(e) => setAsgModuleId(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-semibold"
                >
                  <option value="mod-01">Modul 1: Berpikir Komputasional</option>
                  <option value="mod-02">Modul 2: Algoritma & Flowchart</option>
                  <option value="mod-03">Modul 3: Dasar Pemrograman</option>
                  <option value="mod-04">Modul 4: Literasi & Etika AI</option>
                  <option value="mod-05">Modul 5: Prompt Engineering</option>
                  <option value="mod-06">Modul 6: Basis Data Digital</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Jenis Tugas:</label>
                <select
                  value={asgType}
                  onChange={(e) => setAsgType(e.target.value as any)}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50"
                >
                  <option value="Uraian">Uraian / Esai</option>
                  <option value="LKPD Digital">LKPD Digital</option>
                  <option value="Praktikum">Praktikum Lab</option>
                  <option value="Proyek">Proyek Kelompok</option>
                  <option value="Refleksi">Refleksi</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Bobot Rapor (%):</label>
                <input
                  type="number"
                  min="5"
                  max="50"
                  value={asgWeight}
                  onChange={(e) => setAsgWeight(Number(e.target.value))}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Tenggat Waktu:</label>
                <input
                  type="datetime-local"
                  value={asgDueAt}
                  onChange={(e) => setAsgDueAt(e.target.value)}
                  required
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono text-xs"
                />
              </div>
            </div>

            {/* Visibility & Security Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={asgPublishGrades}
                  onChange={(e) => setAsgPublishGrades(e.target.checked)}
                  className="rounded text-cyan-600 focus:ring-cyan-500"
                />
                <span className="font-semibold text-slate-800">Publikasikan Nilai ke Siswa</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={asgAllowDiscussion}
                  onChange={(e) => setAsgAllowDiscussion(e.target.checked)}
                  className="rounded text-cyan-600 focus:ring-cyan-500"
                />
                <span className="font-semibold text-slate-800">Izinkan Siswa Melihat Pembahasan</span>
              </label>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Petunjuk Pengerjaan:</label>
              <textarea
                value={asgInstructions}
                onChange={(e) => setAsgInstructions(e.target.value)}
                rows={3}
                placeholder="Tuliskan petunjuk pengerjaan yang jelas bagi siswa..."
                required
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>

            {/* Dynamic Rubric Builder */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-800">Kriteria Rubrik Penilaian:</label>
                <button
                  type="button"
                  onClick={handleAddRubricCriterion}
                  className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[10px] font-semibold flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3 h-3" /> Tambah Kriteria
                </button>
              </div>

              <div className="space-y-2">
                {asgRubric.map((r, rIdx) => (
                  <div key={r.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={r.name}
                        onChange={(e) => handleUpdateRubricCriterion(rIdx, 'name', e.target.value)}
                        placeholder="Nama kriteria..."
                        className="flex-1 p-1.5 border border-slate-300 rounded text-xs font-semibold"
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-slate-500 font-bold">Bobot:</span>
                        <input
                          type="number"
                          value={r.weight}
                          onChange={(e) =>
                            handleUpdateRubricCriterion(rIdx, 'weight', Number(e.target.value))
                          }
                          className="w-14 p-1.5 border border-slate-300 rounded text-xs font-mono font-bold text-center"
                        />
                        <span className="text-[10px] text-slate-500 font-bold">%</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveRubricCriterion(rIdx)}
                        className="p-1 text-slate-400 hover:text-rose-600"
                        title="Hapus kriteria"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={r.description}
                      onChange={(e) => handleUpdateRubricCriterion(rIdx, 'description', e.target.value)}
                      placeholder="Deskripsi indikator capaian..."
                      className="w-full p-1 border border-slate-200 rounded text-[11px] text-slate-600 bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAsgModal(false)}
                className="py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
              >
                {editingAsgId ? 'Simpan Perubahan' : 'Terbitkan Tugas'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ==================================================================== */}
      {/* DUPLICATION DIALOG MODAL */}
      {/* ==================================================================== */}
      {duplicationTarget && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Copy className="w-4 h-4 text-cyan-600" /> Duplikasi Penugasan ke Rombel Lain
              </h3>
              <button
                type="button"
                onClick={() => setDuplicationTarget(null)}
                className="text-slate-400 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 block">Sumber Tugas:</span>
              <strong className="text-slate-900 block text-xs">{duplicationTarget.title}</strong>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Pilih Target Rombel / Kelas Penerima:
              </label>
              <select
                value={duplicateClassId}
                onChange={(e) => setDuplicateClassId(e.target.value)}
                className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-semibold"
              >
                {classes.map(c => (
                  <option key={c.class_id} value={c.class_id}>
                    {c.class_name} ({c.major})
                  </option>
                ))}
              </select>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              Sistem akan membuat salinan identik dengan tanggal mulai hari ini dan tenggat waktu 7 hari ke depan,
              sehingga siswa di rombel target langsung menerima tugas ini di dashboard mereka.
            </p>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setDuplicationTarget(null)}
                className="py-1.5 px-3 border border-slate-300 rounded-lg text-slate-700 font-semibold"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleExecuteDuplicate}
                className="py-1.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
              >
                Duplikasi Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Deletion */}
      <ConfirmationModal
        isOpen={!!confirmDeleteTarget}
        title={confirmDeleteTarget?.type === 'assignment' ? 'Hapus Penugasan Pembelajaran' : 'Hapus LKPD Digital'}
        message={`Apakah Anda yakin ingin menghapus "${confirmDeleteTarget?.title}"? Penugasan ini akan dihapus dari sistem dan siswa tidak dapat mengaksesnya lagi.`}
        confirmLabel="Ya, Hapus Sekarang"
        cancelLabel="Batal"
        variant="danger"
        onConfirm={() => {
          if (confirmDeleteTarget) {
            if (confirmDeleteTarget.type === 'assignment') {
              deleteAssignment(confirmDeleteTarget.id, currentUser);
              setAssignments(getAssignments());
            } else {
              deleteLKPD(confirmDeleteTarget.id, currentUser);
              setLkpds(getLKPDs());
            }
            setNotification({
              type: 'success',
              message: `"${confirmDeleteTarget.title}" berhasil dihapus dari sistem.`
            });
            setConfirmDeleteTarget(null);
          }
        }}
        onCancel={() => setConfirmDeleteTarget(null)}
      />
    </div>
  );
};
