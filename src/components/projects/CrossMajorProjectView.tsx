import React, { useState } from 'react';
import {
  Users,
  Layers,
  Sparkles,
  Zap,
  Award,
  CheckCircle,
  Clock,
  FileText,
  AlertTriangle,
  Search,
  Filter,
  Plus,
  Edit3,
  Trash2,
  Download,
  Upload,
  Check,
  ChevronRight,
  Shield,
  Eye,
  Send,
  HelpCircle,
  Lightbulb,
  Building,
  Wrench,
  Flame,
  Radio,
  Sliders,
  Compass,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import {
  User,
  CrossMajorProject,
  CrossMajorTeam,
  TeamMemberContribution,
  VocationalMajorCode,
  RubricCriterion
} from '../../types';
import {
  getCrossMajorProjects,
  getCrossMajorProjectById,
  saveCrossMajorProject,
  deleteCrossMajorProject,
  getCrossMajorTeams,
  getCrossMajorTeamById,
  getCrossMajorTeamForStudent,
  saveCrossMajorTeam,
  submitIndividualContribution,
  submitGroupFinalDeliverable,
  gradeIndividualContribution,
  gradeGroupDeliverable,
  getMajors,
  getClasses,
  getUsers,
  exportToCsv
} from '../../services/apiService';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { NotificationBanner } from '../common/NotificationBanner';

interface CrossMajorProjectViewProps {
  currentUser: User;
}

export const CrossMajorProjectView: React.FC<CrossMajorProjectViewProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState<'projects_list' | 'team_workspace' | 'teacher_center' | 'role_simulator'>('projects_list');
  
  // Datasets
  const [projects, setProjects] = useState<CrossMajorProject[]>(getCrossMajorProjects());
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.project_id || '');
  const [teams, setTeams] = useState<CrossMajorTeam[]>(getCrossMajorTeams(selectedProjectId));
  const [selectedTeamId, setSelectedTeamId] = useState<string>(teams[0]?.team_id || '');
  const majors = getMajors();
  const classes = getClasses();

  // Notification & Confirmation
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [deleteConfirmTarget, setDeleteConfirmTarget] = useState<string | null>(null);

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMajorFilter, setSelectedMajorFilter] = useState<string>('all');

  // Student Contribution State
  const [activeMemberModal, setActiveMemberModal] = useState<TeamMemberContribution | null>(null);
  const [contributionInput, setContributionInput] = useState('');

  // Group Deliverable Submission State
  const [showGroupSubmitModal, setShowGroupSubmitModal] = useState(false);
  const [groupFinalTitle, setGroupFinalTitle] = useState('');
  const [groupFinalSummary, setGroupFinalSummary] = useState('');
  const [groupSolutionUrl, setGroupSolutionUrl] = useState('');
  const [groupReflection, setGroupReflection] = useState('');
  const [groupKkaApplied, setGroupKkaApplied] = useState('');

  // Teacher Grading States
  const [activeGradingMember, setActiveGradingMember] = useState<TeamMemberContribution | null>(null);
  const [individualScoreInput, setIndividualScoreInput] = useState<number>(90);
  const [individualRubricScores, setIndividualRubricScores] = useState<Record<string, number>>({});
  const [individualFeedbackInput, setIndividualFeedbackInput] = useState('');

  const [activeGradingTeam, setActiveGradingTeam] = useState<CrossMajorTeam | null>(null);
  const [groupScoreInput, setGroupScoreInput] = useState<number>(92);
  const [groupRubricScores, setGroupRubricScores] = useState<Record<string, number>>({});
  const [groupFeedbackInput, setGroupFeedbackInput] = useState('');

  // Teacher Project Creator / Editor Modal
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<CrossMajorProject> | null>(null);

  // Interactive Simulator States (Free In-App Simulation)
  const [simPirMotion, setSimPirMotion] = useState<boolean>(true);
  const [simLdrLux, setSimLdrLux] = useState<number>(220); // under 300 lux is dark
  const [simKwhInput, setSimKwhInput] = useState<number>(185);
  const [simRateRupiah, setSimRateRupiah] = useState<number>(1444.70); // Tarif dasar listrik B2/TR sekolah

  const activeProject = projects.find(p => p.project_id === selectedProjectId) || projects[0];
  const activeTeam = teams.find(t => t.team_id === selectedTeamId) || teams[0];

  // Refresh lists
  const refreshData = () => {
    const p = getCrossMajorProjects();
    setProjects(p);
    const t = getCrossMajorTeams(selectedProjectId);
    setTeams(t);
  };

  // Student auto-detect team
  React.useEffect(() => {
    if (currentUser.role === 'siswa' && activeProject) {
      const myTeam = getCrossMajorTeamForStudent(activeProject.project_id, currentUser.user_id);
      if (myTeam) {
        setSelectedTeamId(myTeam.team_id);
      }
    }
  }, [currentUser, activeProject]);

  // Handle Save Individual Contribution
  const handleSaveIndividualContribution = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeMemberModal || !activeTeam) return;
    if (!contributionInput.trim()) {
      setNotification({ type: 'warning', message: 'Tuliskan deskripsi kontribusi atau bukti pengerjaan tugas peranmu.' });
      return;
    }

    const res = submitIndividualContribution(
      activeTeam.team_id,
      activeMemberModal.student_id,
      contributionInput.trim()
    );

    if (res.success) {
      refreshData();
      setActiveMemberModal(null);
      setContributionInput('');
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  // Handle Save Group Final Deliverable
  const handleSaveGroupDeliverable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeTeam) return;
    if (!groupFinalTitle || !groupFinalSummary || !groupReflection) {
      setNotification({ type: 'warning', message: 'Lengkapi judul, ringkasan produk, dan refleksi kolaboratif tim.' });
      return;
    }

    const res = submitGroupFinalDeliverable(
      activeTeam.team_id,
      {
        final_product_title: groupFinalTitle,
        final_product_summary: groupFinalSummary,
        integrated_solution_url: groupSolutionUrl,
        team_reflection: groupReflection,
        kka_concepts_applied: groupKkaApplied
      },
      currentUser
    );

    if (res.success) {
      refreshData();
      setShowGroupSubmitModal(false);
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  // Handle Save Individual Grade
  const handleSaveIndividualGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGradingMember || !activeTeam) return;

    const res = gradeIndividualContribution(
      activeTeam.team_id,
      activeGradingMember.student_id,
      individualScoreInput,
      individualRubricScores,
      individualFeedbackInput,
      currentUser
    );

    if (res.success) {
      refreshData();
      setActiveGradingMember(null);
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  // Handle Save Group Grade
  const handleSaveGroupGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGradingTeam) return;

    const res = gradeGroupDeliverable(
      activeGradingTeam.team_id,
      groupScoreInput,
      groupRubricScores,
      groupFeedbackInput,
      currentUser
    );

    if (res.success) {
      refreshData();
      setActiveGradingTeam(null);
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  // Export Collaboration Grades to CSV
  const handleExportCsv = () => {
    if (!activeTeam) return;
    const rows = activeTeam.members.map(m => ({
      'ID Tim': activeTeam.team_id,
      'Nama Tim': activeTeam.team_name,
      'Proyek': activeTeam.project_title || activeProject?.title,
      'Nama Siswa': m.student_name,
      'Kelas': m.class_id,
      'Jurusan': m.major_code,
      'Peran Tugas': m.assigned_role_title,
      'Status Kontribusi': m.contribution_status,
      'Nilai Individu': m.individual_score ?? 'Belum Dinilai',
      'Nilai Kelompok': activeTeam.group_score ?? 'Belum Dinilai',
      'Nilai Akhir (40% Ind + 60% Kel)': m.individual_score && activeTeam.group_score
        ? Math.round(m.individual_score * 0.4 + activeTeam.group_score * 0.6)
        : 'Menunggu Penilaian Lengkap',
      'Umpan Balik Individu': m.individual_feedback || '-',
      'Umpan Balik Kelompok': activeTeam.group_feedback || '-'
    }));

    exportToCsv(rows, `Nilai_Proyek_Lintas_Jurusan_${activeTeam.team_name.replace(/\s+/g, '_')}`);
    setNotification({ type: 'success', message: 'Data nilai kolaborasi lintas jurusan berhasil diekspor ke format CSV!' });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Notifications */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Main Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-cyan-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Kolaborasi 8 Jurusan SMK
            </span>
            <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
              Kurikulum Merdeka KKA Fase E / X
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
            Proyek Kolaborasi Lintas Jurusan KKA
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Menyelesaikan satu tantangan nyata sekolah melalui sinergi multi-kejuruan (DKV, TKP, DPIB, TOI, TITL, TAV, TSM, TKR) yang didukung oleh berpikir komputasional, algoritma otomasi, pengolahan data riil, dan etika kecerdasan artifisial.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <div className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/60 text-slate-300">
              Peran: <strong className="text-cyan-400">{currentUser.full_name} ({currentUser.role.toUpperCase()})</strong>
            </div>
            {currentUser.role === 'siswa' && (
              <div className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/60 text-slate-300">
                Jurusan Terdaftar: <strong className="text-pink-400">{currentUser.major || currentUser.major_code}</strong> ({currentUser.class_id})
              </div>
            )}
            <div className="px-3 py-1.5 bg-slate-800/80 rounded-lg border border-slate-700/60 text-slate-300">
              Proyek Aktif: <strong className="text-emerald-400">{projects.length} Proyek</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Tab Navigation */}
      <div className="flex border-b border-slate-200 bg-white px-4 rounded-xl shadow-sm text-xs sm:text-sm font-semibold overflow-x-auto gap-4">
        <button
          onClick={() => setActiveTab('projects_list')}
          className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'projects_list'
              ? 'border-cyan-600 text-cyan-700 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-4 h-4 text-cyan-600" />
          1. Penjelajah Proyek Lintas Jurusan
        </button>

        <button
          onClick={() => setActiveTab('team_workspace')}
          className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'team_workspace'
              ? 'border-cyan-600 text-cyan-700 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4 text-indigo-600" />
          2. Workspace Tim &amp; Kontribusi Peran
        </button>

        {(currentUser.role === 'guru' || currentUser.role === 'admin') && (
          <button
            onClick={() => setActiveTab('teacher_center')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'teacher_center'
                ? 'border-cyan-600 text-cyan-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4 text-amber-600" />
            3. Penilaian Guru (Terpisah Individu &amp; Tim)
          </button>
        )}

        <button
          onClick={() => setActiveTab('role_simulator')}
          className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'role_simulator'
              ? 'border-cyan-600 text-cyan-700 font-bold'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Zap className="w-4 h-4 text-emerald-600" />
          4. Simulator Latihan Dataset &amp; Peran
        </button>
      </div>

      {/* ===================================================================== */}
      {/* TAB 1: PENJELAJAH PROYEK LINTAS JURUSAN */}
      {/* ===================================================================== */}
      {activeTab === 'projects_list' && (
        <div className="space-y-6">
          {/* Action bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Cari tema, tujuan, atau topik proyek..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="text-xs px-3 py-2 border border-slate-300 rounded-lg w-full sm:w-80 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {(currentUser.role === 'guru' || currentUser.role === 'admin') && (
                <button
                  onClick={() => {
                    setEditingProject({
                      title: '',
                      theme: 'Efisiensi Berkelanjutan & K3',
                      problem_statement: '',
                      learning_objectives: ['Menerapkan 4 pilar komputasional', 'Kolaborasi lintas jurusan terstruktur'],
                      target_majors: ['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR'],
                      target_classes: classes.map(c => c.class_id),
                      start_at: new Date().toISOString().slice(0, 16),
                      due_at: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
                      team_size_max: 8,
                      status: 'published',
                      role_definitions: activeProject.role_definitions,
                      individual_rubric: activeProject.individual_rubric,
                      group_rubric: activeProject.group_rubric,
                      guidelines: 'Kerjakan sesuai peran kejuruan dan diskusikan integrasi akhir bersama tim.'
                    });
                    setShowProjectModal(true);
                  }}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <Plus className="w-4 h-4" /> Buat Proyek Kolaborasi Baru
                </button>
              )}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 gap-6">
            {projects
              .filter(p => !searchQuery.trim() || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.problem_statement.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(p => (
                <div
                  key={p.project_id}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden shadow-sm hover:shadow-md ${
                    selectedProjectId === p.project_id ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-200'
                  }`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md text-[11px] font-bold">
                            Tema: {p.theme}
                          </span>
                          <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-[11px] font-bold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Tenggat: {new Date(p.due_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-1">
                          {p.title}
                        </h2>
                        <div className="text-xs text-slate-500">
                          Pengampu: <strong>{p.teacher_name || 'Guru KKA'}</strong> · Maks Anggota: <strong>{p.team_size_max} Siswa / Tim</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedProjectId(p.project_id);
                            const t = getCrossMajorTeams(p.project_id);
                            setTeams(t);
                            setActiveTab('team_workspace');
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                        >
                          Masuk Workspace Tim <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                      <strong className="text-slate-900 block">Skenario Permasalahan Nyata:</strong>
                      <p className="leading-relaxed">{p.problem_statement}</p>
                    </div>

                    {/* 8 Majors Role Badges */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-bold text-slate-800 block">
                        Jurusan yang Terlibat ({p.target_majors.length} Disiplin SMK) &amp; Pembagian Tugas:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                        {p.role_definitions.map(role => {
                          const majorMeta = majors.find(m => m.major_code === role.major_code);
                          return (
                            <div
                              key={role.major_code}
                              className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-cyan-300 transition-colors space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-slate-900 text-cyan-300 font-mono">
                                  {role.major_code}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium truncate max-w-[120px]">
                                  {majorMeta?.major_name || role.major_code}
                                </span>
                              </div>
                              <div className="font-semibold text-xs text-slate-900 leading-snug">
                                {role.role_title}
                              </div>
                              <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                                {role.role_description}
                              </p>
                              <div className="text-[10px] text-indigo-700 font-mono bg-indigo-50/70 p-1 rounded">
                                KKA: {role.computational_concept}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Learning Objectives */}
                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-bold text-slate-800">Tujuan Pembelajaran:</span>
                        {p.learning_objectives.slice(0, 2).map((obj, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-100 rounded text-[11px] text-slate-700">
                            ✓ {obj}
                          </span>
                        ))}
                        {p.learning_objectives.length > 2 && (
                          <span className="text-[11px] text-cyan-600 font-bold">
                            +{p.learning_objectives.length - 2} tujuan lagi
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] text-slate-500">
                        Bobot Penilaian: <strong className="text-slate-800">40% Individu + 60% Kelompok</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: WORKSPACE TIM KOLABORASI (SISWA & GURU) */}
      {/* ===================================================================== */}
      {activeTab === 'team_workspace' && (
        <div className="space-y-6">
          {/* Team Switcher Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-700 whitespace-nowrap">
                Pilih Tim Kolaborasi:
              </label>
              <select
                value={selectedTeamId}
                onChange={e => setSelectedTeamId(e.target.value)}
                className="text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white font-medium focus:ring-1 focus:ring-cyan-500"
              >
                {teams.map(t => (
                  <option key={t.team_id} value={t.team_id}>
                    {t.team_name} ({t.members.length} Anggota)
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCsv}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Ekspor Nilai Tim (CSV)
              </button>

              <button
                onClick={() => {
                  if (activeTeam) {
                    setGroupFinalTitle(activeTeam.group_deliverable.final_product_title || '');
                    setGroupFinalSummary(activeTeam.group_deliverable.final_product_summary || '');
                    setGroupSolutionUrl(activeTeam.group_deliverable.integrated_solution_url || '');
                    setGroupReflection(activeTeam.group_deliverable.team_reflection || '');
                    setGroupKkaApplied(activeTeam.group_deliverable.kka_concepts_applied || '');
                    setShowGroupSubmitModal(true);
                  }
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> Kirim Produk Akhir &amp; Refleksi Tim
              </button>
            </div>
          </div>

          {activeTeam && (
            <div className="space-y-6">
              {/* Team Information Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600">
                      Ruang Kerja Kolaborasi Tim
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{activeTeam.team_name}</h3>
                    <div className="text-xs text-slate-500">
                      Ketua Tim: <strong className="text-slate-700">{activeTeam.leader_name || 'Siswa DKV'}</strong> · Proyek: {activeTeam.project_title || activeProject?.title}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Nilai Produk Kelompok:</span>
                      {activeTeam.group_score !== undefined ? (
                        <span className="text-xl font-extrabold text-emerald-600">{activeTeam.group_score} / 100</span>
                      ) : (
                        <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded">Menunggu Penilaian Guru</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Team Status Banner */}
                {activeTeam.group_deliverable.status === 'Sudah Dinilai' && (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-emerald-900">
                      <CheckCircle className="w-4 h-4 text-emerald-600" /> Produk Akhir dan Refleksi Tim Telah Dinilai Guru!
                    </div>
                    <p className="text-emerald-800 leading-relaxed">
                      <strong>Umpan Balik Guru ({activeTeam.group_graded_by || 'Guru Pembimbing'}):</strong> {activeTeam.group_feedback}
                    </p>
                  </div>
                )}

                {/* Grid of 8 Major Member Contributions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-cyan-600" />
                      Status Kontribusi 8 Anggota Kejuruan (Tugas Individu):
                    </span>
                    <span className="text-xs text-slate-500">
                      Klik "Isi Kontribusi" pada tugas jurusanmu untuk mengunggah bukti pengerjaan.
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {activeTeam.members.map(member => {
                      const isCurrentUser = currentUser.user_id === member.student_id;
                      const roleDef = activeProject?.role_definitions.find(r => r.major_code === member.major_code);
                      const isGraded = member.individual_score !== undefined;

                      return (
                        <div
                          key={member.student_id}
                          className={`p-4 rounded-xl border transition-all space-y-3 relative ${
                            isCurrentUser
                              ? 'bg-cyan-50/40 border-cyan-400 shadow-sm'
                              : 'bg-white border-slate-200'
                          }`}
                        >
                          {isCurrentUser && (
                            <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-cyan-600 text-white rounded-full text-[10px] font-bold shadow-xs">
                              Tugas Anda
                            </span>
                          )}

                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 font-mono text-[10px] font-bold rounded">
                                {member.major_code}
                              </span>
                              <div className="font-bold text-xs text-slate-900 pt-1">
                                {member.student_name}
                              </div>
                              <div className="text-[11px] text-slate-500 font-mono">{member.class_id}</div>
                            </div>

                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                member.contribution_status === 'Terkirim'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {member.contribution_status}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="text-xs font-semibold text-indigo-950">
                              {member.assigned_role_title}
                            </div>
                            <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
                              {member.contribution_text || 'Belum ada draf kontribusi yang diunggah.'}
                            </p>
                          </div>

                          {/* Individual Score Card (Secured: Only student themselves or teacher can view detailed score) */}
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                            <div>
                              <span className="text-[10px] text-slate-400 block font-semibold">Nilai Individu:</span>
                              {isGraded ? (
                                isCurrentUser || currentUser.role === 'guru' || currentUser.role === 'admin' ? (
                                  <span className="font-bold text-emerald-700 text-sm">
                                    {member.individual_score} / 100
                                  </span>
                                ) : (
                                  <span className="text-slate-400 text-[11px]">Terproteksi Privasi</span>
                                )
                              ) : (
                                <span className="text-slate-400 text-[11px]">Belum Dinilai</span>
                              )}
                            </div>

                            {/* Action Button: Edit contribution (for student) or Grade (for teacher) */}
                            {isCurrentUser && (
                              <button
                                onClick={() => {
                                  setActiveMemberModal(member);
                                  setContributionInput(member.contribution_text || '');
                                }}
                                className="px-2.5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold transition-colors"
                              >
                                {member.contribution_text ? 'Ubah Kontribusi' : 'Isi Kontribusi'}
                              </button>
                            )}

                            {(currentUser.role === 'guru' || currentUser.role === 'admin') && (
                              <button
                                onClick={() => {
                                  setActiveGradingMember(member);
                                  setIndividualScoreInput(member.individual_score || 90);
                                  setIndividualFeedbackInput(member.individual_feedback || '');
                                  setIndividualRubricScores(member.individual_rubric_scores || {});
                                }}
                                className="px-2.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors"
                              >
                                {isGraded ? 'Edit Nilai' : 'Beri Nilai'}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Team Deliverable & Shared Reflection Section */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-indigo-600" />
                      Sintesis Produk Akhir &amp; Refleksi Bersama Tim
                    </h4>
                    <span className="text-xs text-indigo-700 font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                      Status: {activeTeam.group_deliverable.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-800 block text-xs">
                        Judul &amp; Ringkasan Solusi Terpadu:
                      </span>
                      <div className="font-semibold text-cyan-900">
                        {activeTeam.group_deliverable.final_product_title || 'Belum diisi oleh tim.'}
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {activeTeam.group_deliverable.final_product_summary || 'Draf ringkasan solusi belum dikirimkan.'}
                      </p>
                      {activeTeam.group_deliverable.integrated_solution_url && (
                        <div className="pt-1">
                          <a
                            href={activeTeam.group_deliverable.integrated_solution_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 font-semibold hover:underline flex items-center gap-1"
                          >
                            Buka Tautan Portofolio Karya Tim ↗
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                      <span className="font-bold text-slate-800 block text-xs">
                        Refleksi Pembelajaran Kolaboratif Lintas Kejuruan:
                      </span>
                      <p className="text-slate-700 leading-relaxed italic">
                        "{activeTeam.group_deliverable.team_reflection || 'Refleksi tim belum dikirimkan.'}"
                      </p>
                      {activeTeam.group_deliverable.kka_concepts_applied && (
                        <div className="pt-1 text-[11px] text-slate-500 font-mono bg-slate-50 p-2 rounded">
                          Konsep KKA Terintegrasi: {activeTeam.group_deliverable.kka_concepts_applied}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 3: PUSAT KELOLA & PENILAIAN GURU (TERPISAH INDIVIDU & KELOMPOK) */}
      {/* ===================================================================== */}
      {activeTab === 'teacher_center' && (currentUser.role === 'guru' || currentUser.role === 'admin') && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Pusat Penilaian Guru Proyek Lintas Jurusan
                </h3>
                <p className="text-xs text-slate-500">
                  Sistem mengevaluasi kontribusi individu (40%) dan produk akhir kelompok (60%) secara terpisah demi keadilan akademis.
                </p>
              </div>

              <button
                onClick={handleExportCsv}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" /> Ekspor Seluruh Nilai ke CSV
              </button>
            </div>

            {/* Teams Management Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Nama Tim</th>
                    <th className="p-3">Ketua Tim</th>
                    <th className="p-3 text-center">Anggota Jurusan</th>
                    <th className="p-3 text-center">Kontribusi Terkumpul</th>
                    <th className="p-3 text-center">Status Produk Tim</th>
                    <th className="p-3 text-center">Nilai Kelompok</th>
                    <th className="p-3 text-center">Aksi Guru</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {teams.map(team => {
                    const submittedMembers = team.members.filter(m => m.contribution_status === 'Terkirim').length;
                    return (
                      <tr key={team.team_id} className="hover:bg-slate-50/80">
                        <td className="p-3 font-bold text-slate-900">{team.team_name}</td>
                        <td className="p-3 text-slate-600">{team.leader_name}</td>
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {team.members.map(m => (
                              <span
                                key={m.student_id}
                                className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-100 text-slate-700"
                              >
                                {m.major_code}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <span className="font-bold text-slate-800">
                            {submittedMembers} / {team.members.length} Siswa
                          </span>
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              team.group_deliverable.status === 'Sudah Dinilai'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {team.group_deliverable.status}
                          </span>
                        </td>
                        <td className="p-3 text-center font-bold text-slate-900">
                          {team.group_score !== undefined ? (
                            <span className="text-emerald-700 font-extrabold">{team.group_score}</span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedTeamId(team.team_id);
                                setActiveTab('team_workspace');
                              }}
                              className="px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded font-bold hover:bg-cyan-100 text-[11px]"
                            >
                              Buka Detail
                            </button>
                            <button
                              onClick={() => {
                                setActiveGradingTeam(team);
                                setGroupScoreInput(team.group_score || 92);
                                setGroupFeedbackInput(team.group_feedback || '');
                                setGroupRubricScores(team.group_rubric_scores || {});
                              }}
                              className="px-2.5 py-1 bg-amber-600 text-white rounded font-bold hover:bg-amber-700 text-[11px]"
                            >
                              Nilai Produk Tim
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 4: SIMULATOR LATIHAN DATASET & PERAN 8 JURUSAN (GRATIS IN-APP) */}
      {/* ===================================================================== */}
      {activeTab === 'role_simulator' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                Simulasi Kasus Nyata Sekolah &amp; Ekplorasi Data Aman
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Studio Eksplorasi Data &amp; Logika Otomasi (Tanpa Biaya Layanan Berbayar)
              </h3>
              <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                Gunakan modul simulasi di bawah ini untuk menguji coba logika diagram alir sensor TOI, kalkulasi penghematan kWh TITL, audit ventilasi TKP, dan kepatuhan WCAG DKV.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Simulator 1: TOI Otomasi Sensor Lampu Kelas */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-emerald-600 text-white font-mono text-xs font-bold rounded">
                      TOI
                    </span>
                    <span className="font-bold text-slate-900 text-xs">Simulasi Logika Sensor Lampu Cerdas</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Algoritma IF-ELSE</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-700 block mb-1 font-semibold">
                      Sensor Kehadiran Gerak (PIR):
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSimPirMotion(true)}
                        className={`flex-1 py-1.5 rounded-lg border font-bold text-xs transition-colors ${
                          simPirMotion ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        Ada Orang di Ruang (PIR = 1)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSimPirMotion(false)}
                        className={`flex-1 py-1.5 rounded-lg border font-bold text-xs transition-colors ${
                          !simPirMotion ? 'bg-rose-600 text-white border-rose-700' : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        Ruang Kosong (PIR = 0)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-700 block mb-1 font-semibold">
                      Intensitas Cahaya Alami (LDR Sensor): <strong className="text-cyan-700">{simLdrLux} Lux</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      step="10"
                      value={simLdrLux}
                      onChange={e => setSimLdrLux(Number(e.target.value))}
                      className="w-full accent-cyan-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Mendung / Gelap (50 Lux)</span>
                      <span>Ambang Batas (300 Lux)</span>
                      <span>Terang Alami (800 Lux)</span>
                    </div>
                  </div>

                  {/* Calculated Output */}
                  {(() => {
                    const isDark = simLdrLux < 300;
                    const relayOn = simPirMotion && isDark;
                    return (
                      <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${relayOn ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-slate-200/70 border-slate-300 text-slate-800'}`}>
                        <div className="flex items-center justify-between font-bold">
                          <span>Output Relay Lampu Sekolah:</span>
                          <span className={`px-2 py-0.5 rounded text-[11px] ${relayOn ? 'bg-amber-500 text-white' : 'bg-slate-600 text-white'}`}>
                            {relayOn ? 'LAMPU MENYALA (ON)' : 'LAMPU PADAM (OFF - HEMAT ENERGI)'}
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-slate-600">
                          {relayOn
                            ? 'Lampu menyala karena terdeteksi keberadaan siswa dan pencahayaan alami di bawah standar ruang belajar (300 Lux).'
                            : !simPirMotion
                            ? 'Lampu padam otomatis karena ruang kosong (PIR=0), menghemat konsumsi daya standby.'
                            : 'Lampu padam otomatis karena cahaya matahari dari jendela mencukupi (Lux >= 300).'}
                        </p>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Simulator 2: TITL Kalkulator Audit Biaya Listrik */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-yellow-600 text-white font-mono text-xs font-bold rounded">
                      TITL
                    </span>
                    <span className="font-bold text-slate-900 text-xs">Kalkulator Audit Biaya &amp; Efisiensi Listrik</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Pengolahan Data</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-slate-700 block mb-1 font-semibold">
                      Konsumsi Harian Terukur Gedung: <strong className="text-yellow-700">{simKwhInput} kWh/hari</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="400"
                      step="5"
                      value={simKwhInput}
                      onChange={e => setSimKwhInput(Number(e.target.value))}
                      className="w-full accent-yellow-600"
                    />
                  </div>

                  <div>
                    <label className="text-slate-700 block mb-1 font-semibold">
                      Tarif Listrik Sekolah (Rp / kWh):
                    </label>
                    <input
                      type="number"
                      value={simRateRupiah}
                      onChange={e => setSimRateRupiah(Number(e.target.value))}
                      className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                    />
                  </div>

                  {(() => {
                    const dailyCost = simKwhInput * simRateRupiah;
                    const monthlyCost = dailyCost * 30;
                    const savingKwh = simKwhInput * 0.22; // 22% saving with TOI automation
                    const savingMonthlyRupiah = savingKwh * simRateRupiah * 30;

                    return (
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                        <div className="flex justify-between items-center text-slate-700">
                          <span>Estimasi Rekening Bulanan:</span>
                          <strong className="text-slate-900 text-sm">
                            Rp {Math.round(monthlyCost).toLocaleString('id-ID')}
                          </strong>
                        </div>
                        <div className="flex justify-between items-center text-emerald-700 bg-emerald-50 p-2 rounded-lg font-semibold">
                          <span>Potensi Hemat (Otomasi 22%):</span>
                          <strong className="text-emerald-800 text-sm">
                            Rp {Math.round(savingMonthlyRupiah).toLocaleString('id-ID')} / bulan
                          </strong>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Dataset Preview */}
            {activeProject?.dataset_reference && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-600" />
                    Dataset Latihan: {activeProject.dataset_reference.dataset_name}
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {activeProject.dataset_reference.description}
                  </span>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-800 font-mono text-[11px]">
                      <tr>
                        {activeProject.dataset_reference.headers.map((h, i) => (
                          <th key={i} className="p-2.5 border-r border-slate-200 whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {activeProject.dataset_reference.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 font-mono text-[11px]">
                          {row.map((val, cellIdx) => (
                            <td key={cellIdx} className="p-2.5 border-r border-slate-100">
                              {String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 1: FORMULIR UNGGAH KONTRIBUSI INDIVIDU (SISWA) */}
      {/* ===================================================================== */}
      {activeMemberModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 font-mono text-[10px] font-bold rounded">
                  {activeMemberModal.major_code}
                </span>
                <h3 className="text-base font-bold text-slate-900 pt-1">
                  Kontribusi Tugas: {activeMemberModal.assigned_role_title}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeMemberModal.student_name} ({activeMemberModal.class_id})
                </p>
              </div>
              <button
                onClick={() => setActiveMemberModal(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveIndividualContribution} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Uraian Hasil Analisis, Temuan, atau Tautan Karya Bukti Pengerjaan:
                </label>
                <textarea
                  rows={6}
                  value={contributionInput}
                  onChange={e => setContributionInput(e.target.value)}
                  placeholder="Tuliskan hasil kerja komputasional, tabel data, atau ringkasan temuan tugas peranmu..."
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-1 focus:ring-cyan-500 font-sans"
                  required
                />
              </div>

              <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-xl text-cyan-900 text-[11px] leading-relaxed">
                <strong>Tips KKA:</strong> Jelaskan pilar berpikir komputasional yang kamu gunakan (misal: dekomposisi masalah, identifikasi pola data, diagram alir, atau pertimbangan etis).
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveMemberModal(null)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Kirim Kontribusi Individu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 2: FORMULIR PRODUK AKHIR & REFLEKSI TIM */}
      {/* ===================================================================== */}
      {showGroupSubmitModal && activeTeam && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                  Produk Gabungan Kolaboratif
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Kirimkan Sintesis Karya &amp; Refleksi Tim: {activeTeam.team_name}
                </h3>
              </div>
              <button
                onClick={() => setShowGroupSubmitModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveGroupDeliverable} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Judul Produk Terpadu Tim:
                </label>
                <input
                  type="text"
                  value={groupFinalTitle}
                  onChange={e => setGroupFinalTitle(e.target.value)}
                  placeholder="Contoh: Cetak Biru Kampanye Hemat Energi & Otomasi Lampu SMK 2026"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium"
                  required
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Ringkasan Sintesis Solusi (Integrasi dari 8 Jurusan):
                </label>
                <textarea
                  rows={4}
                  value={groupFinalSummary}
                  onChange={e => setGroupFinalSummary(e.target.value)}
                  placeholder="Jelaskan bagaimana temuan dari DKV, TKP, DPIB, TOI, TITL, TAV, TSM, dan TKR saling melengkapi..."
                  className="w-full p-3 border border-slate-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Tautan Portofolio / Berkas Karya Tim (Opsional):
                </label>
                <input
                  type="url"
                  value={groupSolutionUrl}
                  onChange={e => setGroupSolutionUrl(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Refleksi Bersama Tim (Penting untuk Penilaian):
                </label>
                <textarea
                  rows={3}
                  value={groupReflection}
                  onChange={e => setGroupReflection(e.target.value)}
                  placeholder="Apa pembelajaran berharga yang diperoleh tim saat bekerja sama melintasi disiplin jurusan yang berbeda?"
                  className="w-full p-3 border border-slate-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Konsep KKA yang Diterapkan Bersama:
                </label>
                <input
                  type="text"
                  value={groupKkaApplied}
                  onChange={e => setGroupKkaApplied(e.target.value)}
                  placeholder="Contoh: Dekomposisi sistem gedung, Algoritma kontrol, Pengolahan data sensor, Etika AI"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono text-[11px]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowGroupSubmitModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Kirim Produk Akhir Tim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 3: PENILAIAN INDIVIDU OLEH GURU */}
      {/* ===================================================================== */}
      {activeGradingMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="px-2 py-0.5 bg-slate-900 text-cyan-300 font-mono text-[10px] font-bold rounded">
                  {activeGradingMember.major_code}
                </span>
                <h3 className="text-base font-bold text-slate-900 pt-1">
                  Penilaian Kontribusi Individu Siswa
                </h3>
                <p className="text-xs text-slate-500">
                  {activeGradingMember.student_name} · Peran: {activeGradingMember.assigned_role_title}
                </p>
              </div>
              <button
                onClick={() => setActiveGradingMember(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block text-[11px]">Bukti Kontribusi yang Diunggah Siswa:</strong>
              <p className="leading-relaxed whitespace-pre-line">
                {activeGradingMember.contribution_text || 'Tidak ada teks kontribusi.'}
              </p>
            </div>

            <form onSubmit={handleSaveIndividualGrade} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Nilai Angka Kontribusi Individu (0 - 100):
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={individualScoreInput}
                  onChange={e => setIndividualScoreInput(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Umpan Balik Konstruktif Guru:
                </label>
                <textarea
                  rows={3}
                  value={individualFeedbackInput}
                  onChange={e => setIndividualFeedbackInput(e.target.value)}
                  placeholder="Tuliskan catatan apresiasi dan arahan pengembangan kompetensi KKA..."
                  className="w-full p-3 border border-slate-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveGradingMember(null)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Simpan Nilai Individu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 4: PENILAIAN PRODUK KELOMPOK OLEH GURU */}
      {/* ===================================================================== */}
      {activeGradingTeam && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                  Penilaian Produk Bersama
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Nilai Produk Akhir &amp; Refleksi: {activeGradingTeam.team_name}
                </h3>
              </div>
              <button
                onClick={() => setActiveGradingTeam(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block text-[11px]">Ringkasan Produk Tim:</strong>
              <div className="font-semibold text-cyan-900">
                {activeGradingTeam.group_deliverable.final_product_title}
              </div>
              <p className="leading-relaxed line-clamp-3">
                {activeGradingTeam.group_deliverable.final_product_summary}
              </p>
              <div className="text-[11px] text-slate-600 italic pt-1">
                Refleksi: "{activeGradingTeam.group_deliverable.team_reflection}"
              </div>
            </div>

            <form onSubmit={handleSaveGroupGrade} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Nilai Kelompok (0 - 100):
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={groupScoreInput}
                  onChange={e => setGroupScoreInput(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Umpan Balik Kelompok untuk Seluruh Anggota Tim:
                </label>
                <textarea
                  rows={3}
                  value={groupFeedbackInput}
                  onChange={e => setGroupFeedbackInput(e.target.value)}
                  placeholder="Tuliskan apresiasi atas kekompakan integrasi lintas jurusan..."
                  className="w-full p-3 border border-slate-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveGradingTeam(null)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Simpan Nilai Kelompok
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODAL 5: PEMBUATAN / EDIT PROYEK BARU OLEH GURU */}
      {/* ===================================================================== */}
      {showProjectModal && editingProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider">
                  Pengaturan Proyek Kolaboratif
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {editingProject.project_id ? 'Edit Proyek Kolaborasi' : 'Buat Proyek Kolaborasi Lintas Jurusan Baru'}
                </h3>
              </div>
              <button
                onClick={() => setShowProjectModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                if (!editingProject.title || !editingProject.problem_statement) return;

                const res = saveCrossMajorProject(editingProject as CrossMajorProject, currentUser);
                if (res.success) {
                  refreshData();
                  setShowProjectModal(false);
                  setNotification({ type: 'success', message: res.message });
                } else {
                  setNotification({ type: 'error', message: res.message });
                }
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Judul Proyek Kolaborasi:
                </label>
                <input
                  type="text"
                  value={editingProject.title || ''}
                  onChange={e => setEditingProject({ ...editingProject, title: e.target.value })}
                  placeholder="Contoh: Rancang Bangun Kampanye Hemat Energi & Otomasi Efisiensi Sekolah"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg font-medium text-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-800 font-semibold block mb-1">Tema Proyek:</label>
                  <input
                    type="text"
                    value={editingProject.theme || ''}
                    onChange={e => setEditingProject({ ...editingProject, theme: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-800 font-semibold block mb-1">Batas Waktu (Tenggat):</label>
                  <input
                    type="datetime-local"
                    value={editingProject.due_at ? editingProject.due_at.slice(0, 16) : ''}
                    onChange={e => setEditingProject({ ...editingProject, due_at: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-800 font-semibold block mb-1">
                  Uraian Masalah Kontekstual Sekolah (Problem Statement):
                </label>
                <textarea
                  rows={4}
                  value={editingProject.problem_statement || ''}
                  onChange={e => setEditingProject({ ...editingProject, problem_statement: e.target.value })}
                  placeholder="Jelaskan masalah kompleks di sekolah yang membutuhkan kolaborasi..."
                  className="w-full p-3 border border-slate-300 rounded-lg text-xs"
                  required
                />
              </div>

              {/* Major Selector Checkboxes */}
              <div>
                <label className="text-slate-800 font-semibold block mb-1.5">
                  Pilih Jurusan yang Terlibat dalam Proyek Ini:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR'] as VocationalMajorCode[]).map(mCode => {
                    const isSelected = editingProject.target_majors?.includes(mCode);
                    return (
                      <label
                        key={mCode}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs font-bold transition-colors ${
                          isSelected ? 'bg-cyan-50 border-cyan-400 text-cyan-950' : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={e => {
                            const prev = editingProject.target_majors || [];
                            const updated = e.target.checked
                              ? [...prev, mCode]
                              : prev.filter(c => c !== mCode);
                            setEditingProject({ ...editingProject, target_majors: updated });
                          }}
                          className="rounded text-cyan-600 focus:ring-cyan-500"
                        />
                        <span>{mCode}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowProjectModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
                >
                  Simpan Proyek Kolaborasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
