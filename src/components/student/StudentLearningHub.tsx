import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Compass,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
  Send,
  Sparkles,
  AlertCircle,
  Bookmark,
  Filter,
  Paperclip,
  Upload,
  Trash2,
  Save,
  Table as TableIcon,
  Plus,
  RefreshCw,
  Eye,
  Check,
  Inbox,
  Wrench,
  Users
} from 'lucide-react';
import {
  User,
  ModuleItem,
  Assignment,
  Submission,
  LKPDItem,
  LabResult,
  QuizAttempt,
  Announcement,
  FileAttachment
} from '../../types';
import {
  getModules,
  getAssignments,
  getAssignmentsForUser,
  getSubmissions,
  getLKPDs,
  getLabResults,
  getQuizAttempts,
  getAnnouncements,
  submitAssignment,
  getGasConfig
} from '../../services/apiService';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { EmptyState } from '../common/EmptyState';
import { SaveStatusBadge } from '../common/SaveStatusBadge';
import { NotificationBanner } from '../common/NotificationBanner';

interface StudentHubProps {
  currentUser: User;
  initialTab?: 'peta_belajar' | 'tugas_lkpd' | 'portofolio_prestasi';
  onSelectModule: (module: ModuleItem) => void;
  onSelectLab: (labId: string) => void;
  onSelectLKPD: (lkpd: LKPDItem) => void;
  onStartQuiz: (moduleId?: string) => void;
  onNavigateToProjects?: () => void;
  onNavigateToCrossMajor?: () => void;
}

export const StudentLearningHub: React.FC<StudentHubProps> = ({
  currentUser,
  initialTab,
  onSelectModule,
  onSelectLab,
  onSelectLKPD,
  onStartQuiz,
  onNavigateToProjects,
  onNavigateToCrossMajor
}) => {
  const [modules] = useState<ModuleItem[]>(getModules());
  const [assignments, setAssignments] = useState<Assignment[]>(getAssignmentsForUser(currentUser));
  const [submissions, setSubmissions] = useState<Submission[]>(getSubmissions());
  const [lkpds] = useState<LKPDItem[]>(getLKPDs());
  const [labResults] = useState<LabResult[]>(
    getLabResults().filter(r => r.student_id === currentUser.user_id)
  );
  const [quizAttempts] = useState<QuizAttempt[]>(
    getQuizAttempts().filter(q => q.student_id === currentUser.user_id)
  );
  const [announcements] = useState<Announcement[]>(getAnnouncements());
  const gasConnected = getGasConfig().isConnected;

  const [activeTab, setActiveTab] = useState<'peta_belajar' | 'tugas_lkpd' | 'portofolio_prestasi'>(
    initialTab || 'peta_belajar'
  );

  // Sync activeTab when initialTab or currentUser changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
    setAssignments(getAssignmentsForUser(currentUser));
    setSubmissions(getSubmissions());
  }, [initialTab, currentUser]);

  // Filters for Assignments
  const [assignmentClassFilter, setAssignmentClassFilter] = useState<'mine' | 'all'>('mine');
  const [assignmentStatusFilter, setAssignmentStatusFilter] = useState<string>('all');
  const [assignmentSortOrder, setAssignmentSortOrder] = useState<'due_asc' | 'due_desc'>('due_asc');

  // Multi-Format Submission Modal
  const [selectedAsgForSubmit, setSelectedAsgForSubmit] = useState<Assignment | null>(null);
  const [submissionAnswer, setSubmissionAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [tableData, setTableData] = useState<string[][]>([
    ['Aspek / Parameter', 'Hasil Analisis', 'Kesimpulan Solutif'],
    ['Contoh Aspek 1', 'Uraian analisis...', 'Solusi terukur...']
  ]);
  const [attachedFile, setAttachedFile] = useState<FileAttachment | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draftSaveStatus, setDraftSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [draftSaveTime, setDraftSaveTime] = useState<Date | null>(null);
  const [submissionFormError, setSubmissionFormError] = useState<string | null>(null);

  // Confirmation Modal for Task Submission
  const [showConfirmSubmitModal, setShowConfirmSubmitModal] = useState(false);

  // General Notification Banner
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);

  // View Graded Detail Modal
  const [viewDetailSubmission, setViewDetailSubmission] = useState<{
    asg: Assignment;
    sub: Submission;
  } | null>(null);

  const studentSubmissions = submissions.filter(s => s.student_id === currentUser.user_id);

  // Filtered & Sorted Assignments
  const filteredAssignments = assignments
    .filter(asg => {
      // Filter by Class and Major
      if (assignmentClassFilter === 'mine' && currentUser.class_id) {
        const isAll = asg.class_id === 'all' || asg.class_id === 'cls-umum' || asg.scope_type === 'all_classes';
        const isDirect = asg.class_id === currentUser.class_id;
        const isTargetClass = asg.target_classes?.includes(currentUser.class_id);
        const isTargetMajor = currentUser.major_code ? asg.target_majors?.includes(currentUser.major_code) : false;

        if (!isAll && !isDirect && !isTargetClass && !isTargetMajor) {
          return false;
        }
      }

      // Filter by Status
      const sub = studentSubmissions.find(s => s.assignment_id === asg.assignment_id);
      const status = sub ? sub.status : 'Belum Dikerjakan';
      if (assignmentStatusFilter !== 'all' && status !== assignmentStatusFilter) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      const timeA = new Date(a.due_at).getTime();
      const timeB = new Date(b.due_at).getTime();
      return assignmentSortOrder === 'due_asc' ? timeA - timeB : timeB - timeA;
    });

  const handleOpenSubmit = (asg: Assignment) => {
    const existing = studentSubmissions.find(s => s.assignment_id === asg.assignment_id);
    setSelectedAsgForSubmit(asg);
    setSubmissionAnswer(existing ? existing.answer || '' : '');
    setSelectedOption(existing?.selected_option || '');
    setTableData(
      existing?.table_data && existing.table_data.length > 0
        ? existing.table_data
        : [
            ['Aspek / Parameter', 'Hasil Analisis', 'Kesimpulan Solutif'],
            ['Contoh Aspek 1', 'Uraian analisis...', 'Solusi terukur...']
          ]
    );
    setAttachedFile(existing?.file_attachment);
    setSubmissionFormError(null);
    setDraftSaveStatus('idle');
  };

  const handleSaveDraftSubmission = () => {
    if (!selectedAsgForSubmit) return;
    setDraftSaveStatus('saving');

    setTimeout(() => {
      const existing = studentSubmissions.find(
        s => s.assignment_id === selectedAsgForSubmit.assignment_id
      );

      const payload: Submission = {
        submission_id: existing?.submission_id || 'sub-' + Date.now(),
        assignment_id: selectedAsgForSubmit.assignment_id,
        student_id: currentUser.user_id,
        student_name: currentUser.full_name,
        student_nis: currentUser.student_number,
        class_id: currentUser.class_id || 'cls-umum',
        answer: submissionAnswer,
        selected_option: selectedOption,
        table_data: tableData,
        file_attachment: attachedFile,
        submitted_at: new Date().toISOString(),
        status: 'Draf'
      };

      submitAssignment(payload);
      setSubmissions(getSubmissions());
      setDraftSaveStatus('saved');
      setDraftSaveTime(new Date());
    }, 350);
  };

  // Pre-submit validation and trigger confirmation
  const handlePreSubmitCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAsgForSubmit) return;
    setSubmissionFormError(null);

    // Friendly validation check: student must provide at least one meaningful input
    const hasText = submissionAnswer.trim().length > 0;
    const hasOption = !!selectedOption;
    const hasTableData = tableData.length > 1 && tableData.some((row, idx) => idx > 0 && row.some(c => c.trim().length > 0));
    const hasFile = !!attachedFile;

    if (!hasText && !hasOption && !hasTableData && !hasFile) {
      setSubmissionFormError('Silakan lengkapi jawaban tugas Anda (isi uraian teks, pilih opsi, isi tabel, atau lampirkan berkas) sebelum mengirim.');
      return;
    }

    // Open confirmation modal
    setShowConfirmSubmitModal(true);
  };

  // Execute confirmed submission
  const handleExecuteConfirmedSubmit = () => {
    if (!selectedAsgForSubmit) return;

    const isPastDue = new Date() > new Date(selectedAsgForSubmit.due_at);
    const existing = studentSubmissions.find(
      s => s.assignment_id === selectedAsgForSubmit.assignment_id
    );
    const isRevision = existing?.status === 'Perlu Revisi';

    setIsSubmitting(true);

    setTimeout(() => {
      const payload: Submission = {
        submission_id: existing?.submission_id || 'sub-' + Date.now(),
        assignment_id: selectedAsgForSubmit.assignment_id,
        student_id: currentUser.user_id,
        student_name: currentUser.full_name,
        student_nis: currentUser.student_number,
        class_id: currentUser.class_id || 'cls-umum',
        answer: submissionAnswer,
        selected_option: selectedOption,
        table_data: tableData,
        file_attachment: attachedFile,
        submitted_at: new Date().toISOString(),
        status: isPastDue ? 'Terlambat' : 'Terkirim',
        revision_notes: undefined // Reset revision state upon resubmission
      };

      submitAssignment(payload);
      setIsSubmitting(false);
      setShowConfirmSubmitModal(false);
      setSelectedAsgForSubmit(null);
      setSubmissions(getSubmissions());

      setNotification({
        type: isRevision ? 'warning' : 'success',
        message: isRevision
          ? 'Revisi tugas Anda berhasil diserahkan kepada guru pengampu!'
          : isPastDue
          ? 'Tugas berhasil diserahkan (Status: Terlambat karena melewati tenggat).'
          : 'Tugas Anda berhasil diserahkan dan siap diperiksa oleh guru!'
      });
    }, 400);
  };

  // Table helpers for assignment modal
  const handleTableCellChange = (rIdx: number, cIdx: number, val: string) => {
    setTableData(prev => {
      const copy = prev.map(r => [...r]);
      if (!copy[rIdx]) copy[rIdx] = [];
      copy[rIdx][cIdx] = val;
      return copy;
    });
  };

  const handleAddTableRow = () => {
    setTableData(prev => [...prev, ['', '', '']]);
  };

  const handleRemoveTableRow = (rIdx: number) => {
    setTableData(prev => {
      if (prev.length <= 1) return prev;
      const copy = [...prev];
      copy.splice(rIdx, 1);
      return copy;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setSubmissionFormError('Ukuran berkas melebihi batas 5 MB. Silakan kompres dokumen atau gambar Anda.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAttachedFile({
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        dataUrl: event.target?.result as string,
        uploaded_at: new Date().toISOString()
      });
    };
    reader.readAsDataURL(file);
  };

  // Helper to get deadline urgency badge
  const getDeadlineBadge = (dueAtStr: string) => {
    const now = new Date().getTime();
    const due = new Date(dueAtStr).getTime();
    const diffHours = (due - now) / (1000 * 60 * 60);

    if (diffHours < 0) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
          Lewat Tenggat
        </span>
      );
    }
    if (diffHours <= 48) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 animate-pulse">
          Segera Berakhir ({Math.round(diffHours)}j lagi)
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
        Aktif
      </span>
    );
  };

  // Badges Calculation
  const badges = [
    { id: 'b1', name: 'Pionir Komputasional', desc: 'Menyelesaikan Lab 1 atau LKPD 1', earned: true },
    {
      id: 'b2',
      name: 'Logika Algoritma',
      desc: 'Mencapai skor kuis >= 80',
      earned: quizAttempts.some(q => q.score >= 80)
    },
    {
      id: 'b3',
      name: 'Etika Digital Champion',
      desc: 'Menyelesaikan eksplorasi etika KA & hak cipta',
      earned: labResults.length > 0
    },
    {
      id: 'b4',
      name: 'Data Master Class',
      desc: 'Mempraktikkan SQL di Lab 6',
      earned: labResults.some(r => r.lab_id === 'lab-06')
    }
  ];

  return (
    <div className="space-y-6">
      {/* Student Welcome Header */}
      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
              Dashboard Siswa · KKA Kelas X ({currentUser.major || 'Semua Jurusan'})
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Halo, {currentUser.full_name}!
            </h2>
            <p className="text-xs text-slate-300">
              NIS: <span className="font-mono text-cyan-300 font-semibold">{currentUser.student_number || '20261001'}</span> · Rombel:{' '}
              <span className="font-semibold">{currentUser.class_id || 'X DKV 1'}</span> · Kurikulum Merdeka Fase E
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('peta_belajar')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'peta_belajar'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              1. Peta Perjalanan Belajar
            </button>
            <button
              onClick={() => setActiveTab('tugas_lkpd')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'tugas_lkpd'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              2. Tugas &amp; LKPD ({assignments.length})
            </button>
            <button
              onClick={() => setActiveTab('portofolio_prestasi')}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'portofolio_prestasi'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              3. Portofolio &amp; Lencana ({labResults.length})
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Notification Banner */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Announcements Broadcast */}
      {announcements.length > 0 && (
        <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl text-xs text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <div className="font-bold">{announcements[0].title}</div>
            <p className="text-slate-700 leading-relaxed">{announcements[0].message}</p>
            <span className="text-[10px] text-slate-400 block pt-0.5">
              Oleh: {announcements[0].author_name} ·{' '}
              {new Date(announcements[0].published_at).toLocaleDateString('id-ID')}
            </span>
          </div>
        </div>
      )}

      {/* TAB 1: PETA BELAJAR (6 MODUL RESMI) */}
      {activeTab === 'peta_belajar' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">6 Modul Utama Koding dan Kecerdasan Artifisial</h3>
            <span className="text-xs text-slate-500">Berdasarkan Buku Resmi Kemendikdasmen 2025</span>
          </div>

          {/* Contextual Vocational Projects Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 rounded-2xl border border-indigo-800/60 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
                  BARU · 8 JURUSAN SMK
                </span>
                <span className="text-xs text-indigo-300 font-semibold">
                  Modul Proyek Kontekstual Berbasis Masalah
                </span>
              </div>
              <h4 className="text-sm md:text-base font-bold text-white">
                Terapkan Berpikir Komputasional, Algoritma &amp; AI pada Jurusan Anda
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Tersedia 16 proyek nyata untuk DKV, TKP, DPIB, TOI, TITL, TAV, TSM, dan TKR lengkap dengan dataset aman, simulasi virtual interaktif, dan LKPD digital.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {onNavigateToProjects && (
                <button
                  type="button"
                  onClick={onNavigateToProjects}
                  className="py-2 px-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  <span>16 Proyek Kejuruan</span>
                </button>
              )}
              {onNavigateToCrossMajor && (
                <button
                  type="button"
                  onClick={onNavigateToCrossMajor}
                  className="py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Users className="w-3.5 h-3.5 text-slate-950" />
                  <span>Kolaborasi Lintas Jurusan</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <div
                key={m.module_id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                      BAB 0{m.sequence}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {m.chapters.length} Subbab
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors leading-snug">
                    {m.title}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {m.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    <div className="font-semibold text-slate-700">Fokus Pembelajaran:</div>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-500 line-clamp-2">
                      {m.learning_objectives.slice(0, 2).map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectModule(m)}
                    className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Pelajari Materi
                  </button>
                  <button
                    onClick={() => onStartQuiz(m.module_id)}
                    className="py-2 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                    title="Uji Kompetensi Soal (50% LOTS, 30% MOTS, 20% HOTS)"
                  >
                    Kuis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TUGAS & LKPD */}
      {activeTab === 'tugas_lkpd' && (
        <div className="space-y-6">
          {/* LKPD Section */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-600" /> Lembar Kerja Peserta Didik (LKPD) Digital
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lkpds.map(lkpd => {
                const subLkpd = getSubmissions().find(
                  s => s.assignment_id === lkpd.lkpd_id && s.student_id === currentUser.user_id
                );

                return (
                  <div
                    key={lkpd.lkpd_id}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:border-cyan-400 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                        LKPD Digital
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {lkpd.questions.length} Langkah Kerja
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">{lkpd.title}</h5>
                    <p className="text-xs text-slate-500 line-clamp-2">{lkpd.starter_problem}</p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-medium">
                        Bobot: <strong>{lkpd.weight || 20}%</strong>
                      </span>
                      <button
                        onClick={() => onSelectLKPD(lkpd)}
                        className="py-1.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" /> Buka LKPD
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Assignments Section with Class & Due-Date Filters */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" /> Penugasan &amp; Proyek Mandiri
              </h4>

              {/* Filter controls */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
                  <Filter className="w-3.5 h-3.5 text-slate-500 ml-1" />
                  <select
                    value={assignmentClassFilter}
                    onChange={(e) => setAssignmentClassFilter(e.target.value as any)}
                    className="bg-transparent border-0 text-xs font-semibold text-slate-700 focus:ring-0 p-1"
                  >
                    <option value="mine">Kelas Saya ({currentUser.class_id || 'Umum'})</option>
                    <option value="all">Semua Rombel</option>
                  </select>
                </div>

                <select
                  value={assignmentStatusFilter}
                  onChange={(e) => setAssignmentStatusFilter(e.target.value)}
                  className="bg-white border border-slate-300 rounded-lg text-xs p-1.5 font-medium text-slate-700"
                >
                  <option value="all">Semua Status</option>
                  <option value="Belum Dikerjakan">Belum Dikerjakan</option>
                  <option value="Draf">Draf</option>
                  <option value="Terkirim">Terkirim</option>
                  <option value="Perlu Revisi">Perlu Revisi</option>
                  <option value="Sudah Dinilai">Sudah Dinilai</option>
                </select>

                <select
                  value={assignmentSortOrder}
                  onChange={(e) => setAssignmentSortOrder(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-lg text-xs p-1.5 font-medium text-slate-700"
                >
                  <option value="due_asc">Tenggat Terdekat</option>
                  <option value="due_desc">Tenggat Terlama</option>
                </select>
              </div>
            </div>

            {/* Assignments Table */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-mono">
                      <th className="p-3 border-r border-slate-800">Judul Tugas &amp; Kelas</th>
                      <th className="p-3 border-r border-slate-800">Jenis</th>
                      <th className="p-3 border-r border-slate-800">Tenggat Waktu</th>
                      <th className="p-3 border-r border-slate-800 text-center">Status</th>
                      <th className="p-3 border-r border-slate-800 text-center">Nilai</th>
                      <th className="p-3 text-center">Aksi Pengerjaan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAssignments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-6">
                          <EmptyState
                            icon={Inbox}
                            title="Tidak Ada Tugas yang Sesuai"
                            description="Belum ada penugasan untuk filter kelas atau status yang dipilih. Anda dapat mengganti pilihan filter di atas."
                            actionLabel="Tampilkan Semua Tugas Rombel"
                            onAction={() => {
                              setAssignmentClassFilter('all');
                              setAssignmentStatusFilter('all');
                            }}
                          />
                        </td>
                      </tr>
                    ) : (
                      filteredAssignments.map(asg => {
                        const sub = studentSubmissions.find(s => s.assignment_id === asg.assignment_id);
                        const isGraded = sub?.status === 'Sudah Dinilai';
                        const isRevision = sub?.status === 'Perlu Revisi';
                        const isSubmitted = sub?.status === 'Terkirim';
                        const isDraft = sub?.status === 'Draf';
                        const canViewScore = isGraded && asg.publish_grades !== false;

                        return (
                          <tr key={asg.assignment_id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3">
                              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                <span>{asg.title}</span>
                                {asg.class_id && asg.class_id !== 'all' && (
                                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                                    {asg.class_id}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {asg.instructions}
                              </div>
                            </td>
                            <td className="p-3 text-slate-600 font-mono">
                              <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px]">
                                {asg.assignment_type}
                              </span>
                            </td>
                            <td className="p-3 font-mono text-slate-600 text-[11px]">
                              <div className="flex flex-col gap-1">
                                <span>
                                  {new Date(asg.due_at).toLocaleDateString('id-ID', {
                                    day: 'numeric',
                                    month: 'short',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </span>
                                <div>{getDeadlineBadge(asg.due_at)}</div>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
                                  isGraded
                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                    : isRevision
                                    ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                                    : isSubmitted
                                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                    : isDraft
                                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                                    : 'bg-slate-100 text-slate-600 border border-slate-200'
                                }`}
                              >
                                {isRevision && <RefreshCw className="w-3 h-3 text-amber-700" />}
                                {sub ? sub.status : 'Belum Dikerjakan'}
                              </span>
                            </td>
                            <td className="p-3 text-center font-mono font-bold text-slate-900 text-sm">
                              {canViewScore && sub?.score !== undefined ? (
                                <span className="text-emerald-700">{sub.score} / 100</span>
                              ) : isGraded && asg.publish_grades === false ? (
                                <span className="text-[10px] text-slate-400 font-sans" title="Menunggu publikasi guru">
                                  Tersimpan
                                </span>
                              ) : (
                                '-'
                              )}
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <button
                                  onClick={() => handleOpenSubmit(asg)}
                                  className={`py-1.5 px-3 rounded-lg text-[11px] font-bold transition-all shadow-sm ${
                                    isRevision
                                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                                      : sub
                                      ? 'bg-slate-900 hover:bg-slate-800 text-white'
                                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                                  }`}
                                >
                                  {isRevision ? 'Revisi Tugas' : sub ? 'Lihat / Edit' : 'Kerjakan'}
                                </button>

                                {isGraded && canViewScore && (
                                  <button
                                    onClick={() => setViewDetailSubmission({ asg, sub })}
                                    className="p-1.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                                    title="Lihat Rincian Nilai & Umpan Balik"
                                  >
                                    <Eye className="w-3.5 h-3.5 text-cyan-600" />
                                  </button>
                                )}
                              </div>
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
        </div>
      )}

      {/* TAB 3: PORTOFOLIO & LENCANA PRESTASI */}
      {activeTab === 'portofolio_prestasi' && (
        <div className="space-y-6">
          {/* Badges strip */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" /> Lencana Capaian Belajar KKA
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map(b => (
                <div
                  key={b.id}
                  className={`p-4 rounded-xl border text-xs text-center space-y-1 ${
                    b.earned
                      ? 'bg-amber-50/50 border-amber-300 text-amber-950'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                  }`}
                >
                  <div className="text-2xl mb-1">{b.earned ? '🎖️' : '🔒'}</div>
                  <div className="font-bold text-slate-900">{b.name}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stored Lab Results */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-cyan-600" /> Arsip Hasil Praktikum Laboratorium Digital
            </h4>

            {labResults.length === 0 ? (
              <p className="text-xs text-slate-500">
                Belum ada hasil praktikum yang disimpan. Jalankan salah satu simulasi di menu LAB KKA dan klik
                &ldquo;Simpan Hasil Praktikum&rdquo; untuk menambahkannya ke portofolio.
              </p>
            ) : (
              <div className="space-y-3">
                {labResults.map(res => (
                  <div key={res.result_id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold font-mono text-cyan-800">{res.lab_id.toUpperCase()}</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {new Date(res.saved_at).toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div className="font-semibold text-slate-900">{res.result_summary}</div>
                    <div className="text-slate-600 italic bg-white p-2.5 rounded-lg border border-slate-200">
                      &ldquo;Refleksi: {res.reflection}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Multi-Format Submission Modal (Text, Choice, Table, File Upload, Save Draft, Submit) */}
      {selectedAsgForSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handlePreSubmitCheck}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 md:p-8 space-y-5 text-xs"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                  Lembar Pengerjaan &amp; Pengumpulan Tugas
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{selectedAsgForSubmit.title}</h3>
                <span className="text-[11px] text-slate-500">
                  Jenis: {selectedAsgForSubmit.assignment_type} · Tenggat:{' '}
                  {new Date(selectedAsgForSubmit.due_at).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAsgForSubmit(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            {/* Revision Alert Notice if needed */}
            {(() => {
              const sub = studentSubmissions.find(
                s => s.assignment_id === selectedAsgForSubmit.assignment_id
              );
              if (sub?.status === 'Perlu Revisi') {
                return (
                  <div className="bg-amber-50 border border-amber-300 p-3.5 rounded-xl text-amber-950 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900">
                      <RefreshCw className="w-4 h-4 text-amber-700" />
                      <span>Catatan Revisi dari Guru:</span>
                    </div>
                    <p className="leading-relaxed">{sub.revision_notes || 'Silakan lengkapi analisis tugas ini.'}</p>
                  </div>
                );
              }
              return null;
            })()}

            {/* Instructions */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-700 space-y-1">
              <strong className="text-slate-900 block text-xs">Petunjuk Pengerjaan:</strong>
              <p className="leading-relaxed">{selectedAsgForSubmit.instructions}</p>
            </div>

            {/* Input 1: Uraian / Teks Jawaban */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-800 block">
                1. Jawaban / Uraian Analisis Konsep:
              </label>
              <textarea
                value={submissionAnswer}
                onChange={(e) => setSubmissionAnswer(e.target.value)}
                placeholder="Tuliskan jawaban tugas Anda secara terstruktur, runtut, dan orisinal..."
                rows={4}
                required
                className="w-full p-3 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-sans leading-relaxed"
              />
            </div>

            {/* Input 2: Pilihan Ganda / Opsi (jika ada options) */}
            {selectedAsgForSubmit.options && selectedAsgForSubmit.options.length > 0 && (
              <div className="space-y-2">
                <label className="font-bold text-slate-800 block">2. Pilihan Jawaban:</label>
                <div className="space-y-1.5">
                  {selectedAsgForSubmit.options.map((opt, oIdx) => (
                    <label
                      key={oIdx}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                        selectedOption === opt
                          ? 'bg-cyan-50 border-cyan-500 font-semibold text-cyan-950'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="asgOption"
                        value={opt}
                        checked={selectedOption === opt}
                        onChange={() => setSelectedOption(opt)}
                        className="text-cyan-600 focus:ring-cyan-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Input 3: Tabel Data Interaktif */}
            <div className="space-y-2 bg-slate-50/60 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-800 flex items-center gap-1.5">
                  <TableIcon className="w-3.5 h-3.5 text-cyan-600" />
                  <span>3. Tabel Data / Matriks Pemecahan Masalah (Opsional):</span>
                </label>
                <button
                  type="button"
                  onClick={handleAddTableRow}
                  className="py-1 px-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 rounded text-[10px] font-semibold flex items-center gap-1 transition-colors"
                >
                  <Plus className="w-3 h-3" /> Tambah Baris
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-slate-200 bg-white">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-2 border border-slate-200 text-left font-semibold">Kolom A</th>
                      <th className="p-2 border border-slate-200 text-left font-semibold">Kolom B</th>
                      <th className="p-2 border border-slate-200 text-left font-semibold">Kolom C</th>
                      <th className="p-2 border border-slate-200 text-center w-12">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cellVal, cIdx) => (
                          <td key={cIdx} className="p-1 border border-slate-200">
                            <input
                              type="text"
                              value={cellVal}
                              onChange={(e) => handleTableCellChange(rIdx, cIdx, e.target.value)}
                              placeholder="Isi data..."
                              className="w-full p-1.5 text-xs bg-slate-50/50 focus:bg-white border-0 rounded focus:ring-1 focus:ring-cyan-500"
                            />
                          </td>
                        ))}
                        <td className="p-1 border border-slate-200 text-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveTableRow(rIdx)}
                            className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                            title="Hapus baris"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Input 4: Berkas Lampiran */}
            <div className="space-y-2">
              <label className="font-bold text-slate-800 block">
                4. Lampiran Berkas / Screenshot Tugas (Opsional):
              </label>

              {!attachedFile ? (
                <label className="inline-flex items-center gap-1.5 py-2 px-3.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer transition-colors shadow-sm">
                  <Upload className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Pilih Berkas Lampiran (Maks 5 MB)</span>
                  <input type="file" className="hidden" onChange={handleFileUpload} />
                </label>
              ) : (
                <div className="flex items-center justify-between p-3 bg-cyan-50 border border-cyan-200 rounded-lg text-xs text-cyan-950">
                  <div className="flex items-center gap-2 truncate">
                    <Paperclip className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span className="font-semibold truncate">{attachedFile.name}</span>
                    <span className="text-[10px] text-cyan-700 font-mono">
                      ({(attachedFile.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAttachedFile(undefined)}
                    className="p-1 text-rose-600 hover:bg-rose-100 rounded transition-colors"
                    title="Hapus berkas"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Inline Friendly Form Error */}
            {submissionFormError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed font-medium">{submissionFormError}</span>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <SaveStatusBadge
                status={draftSaveStatus}
                isGasConnected={gasConnected}
                lastSavedAt={draftSaveTime}
              />

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSaveDraftSubmission}
                  className="flex-1 sm:flex-none py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <Save className="w-3.5 h-3.5" /> Simpan Draf
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <Send className="w-3.5 h-3.5" /> Kirim Tugas Sekarang
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Confirmation Modal Before Submission */}
      {selectedAsgForSubmit && (
        <ConfirmationModal
          isOpen={showConfirmSubmitModal}
          title="Konfirmasi Pengumpulan Tugas"
          message={`Apakah Anda yakin ingin menyerahkan tugas "${selectedAsgForSubmit.title}" sekarang? Pastikan seluruh isian analisis dan lampiran sudah lengkap sebelum dinilai oleh guru.`}
          confirmLabel="Ya, Serahkan Tugas"
          cancelLabel="Periksa Lagi"
          variant="primary"
          isLoading={isSubmitting}
          onConfirm={handleExecuteConfirmedSubmit}
          onCancel={() => setShowConfirmSubmitModal(false)}
        />
      )}

      {/* View Graded Detail Modal */}
      {viewDetailSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl p-6 md:p-8 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase">Hasil Penilaian Tugas</span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{viewDetailSubmission.asg.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setViewDetailSubmission(null)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-center p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="text-xs text-emerald-800 font-medium">Nilai Akhir Rapor</div>
              <div className="text-3xl font-extrabold font-mono text-emerald-800 mt-1">
                {viewDetailSubmission.sub.score} / 100
              </div>
              <div className="text-[11px] text-emerald-700 mt-0.5">
                Dinilai oleh: {viewDetailSubmission.sub.graded_by || 'Guru Pengampu'}
              </div>
            </div>

            {/* Rubric Breakdown */}
            {viewDetailSubmission.sub.rubric_scores && (
              <div className="space-y-2">
                <span className="font-bold text-slate-800 block">Rincian Capaian Rubrik:</span>
                <div className="space-y-1.5">
                  {viewDetailSubmission.asg.rubric?.map(r => (
                    <div
                      key={r.id}
                      className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <span className="text-slate-700 font-medium">{r.name}</span>
                      <span className="font-mono font-bold text-cyan-800">
                        {viewDetailSubmission.sub.rubric_scores?.[r.id] || 0} / {r.weight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Teacher Feedback */}
            {viewDetailSubmission.sub.feedback && (
              <div className="space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-800 block">Umpan Balik Konstruktif Guru:</strong>
                <p className="text-slate-700 leading-relaxed italic">
                  &ldquo;{viewDetailSubmission.sub.feedback}&rdquo;
                </p>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setViewDetailSubmission(null)}
                className="py-2 px-5 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
