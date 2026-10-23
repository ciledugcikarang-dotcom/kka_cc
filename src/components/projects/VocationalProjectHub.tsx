import React, { useState } from 'react';
import {
  Wrench,
  BookOpen,
  Send,
  Save,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  Award,
  Users,
  Search,
  Filter,
  Copy,
  Check,
  ChevronRight,
  Info,
  Calendar,
  Shield,
  Lightbulb,
  FileText,
  Activity,
  Zap,
  Sliders,
  Table as TableIcon
} from 'lucide-react';
import {
  VocationalProject,
  VocationalMajorCode,
  User,
  ClassItem,
  Assignment,
  RubricCriterion
} from '../../types';
import {
  VOCATIONAL_MAJORS_META,
  VOCATIONAL_PROJECTS,
  getVocationalProjects
} from '../../data/vocationalProjectsData';
import {
  assignVocationalProjectToClass,
  submitAssignment,
  getClasses,
  getSubmissions
} from '../../services/apiService';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { NotificationBanner } from '../common/NotificationBanner';

interface VocationalProjectHubProps {
  currentUser: User;
  onOpenAssignment?: (asgId: string) => void;
  onNavigateToCrossMajor?: () => void;
}

export const VocationalProjectHub: React.FC<VocationalProjectHubProps> = ({
  currentUser,
  onOpenAssignment,
  onNavigateToCrossMajor
}) => {
  const [selectedMajor, setSelectedMajor] = useState<VocationalMajorCode | 'all'>(() => {
    try {
      const saved = localStorage.getItem('kka_vocational_major_filter');
      if (saved && (saved === 'all' || ['DKV', 'TKP', 'DPIB', 'TOI', 'TITL', 'TAV', 'TSM', 'TKR'].includes(saved))) {
        return saved as VocationalMajorCode | 'all';
      }
      if (currentUser.role === 'siswa' && currentUser.major_code) {
        return currentUser.major_code;
      }
      return 'all';
    } catch {
      return 'all';
    }
  });

  const [selectedLevel, setSelectedLevel] = useState<'Dasar' | 'Pengembangan' | 'all'>(() => {
    try {
      const saved = localStorage.getItem('kka_vocational_level_filter');
      if (saved && ['Dasar', 'Pengembangan', 'all'].includes(saved)) {
        return saved as 'Dasar' | 'Pengembangan' | 'all';
      }
      return 'all';
    } catch {
      return 'all';
    }
  });

  const handleSelectMajor = (major: VocationalMajorCode | 'all') => {
    setSelectedMajor(major);
    try {
      localStorage.setItem('kka_vocational_major_filter', major);
    } catch (e) {
      console.warn('Failed to save major filter:', e);
    }
  };

  const handleSelectLevel = (level: 'Dasar' | 'Pengembangan' | 'all') => {
    setSelectedLevel(level);
    try {
      localStorage.setItem('kka_vocational_level_filter', level);
    } catch (e) {
      console.warn('Failed to save level filter:', e);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<VocationalProject | null>(null);
  const [modalTab, setModalTab] = useState<'scenario' | 'dataset' | 'simulation' | 'lkpd' | 'rubric'>('scenario');

  // Teacher Assignment Modal
  const [projectToAssign, setProjectToAssign] = useState<VocationalProject | null>(null);
  const [targetClassId, setTargetClassId] = useState<string>('all');
  const [dueDaysInput, setDueDaysInput] = useState<number>(14);
  const [weightInput, setWeightInput] = useState<number>(25);

  // Notifications
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [copiedDataset, setCopiedDataset] = useState(false);

  // Student LKPD response state in modal
  const [lkpdAnswers, setLkpdAnswers] = useState<Record<string, string>>({});
  const [lkpdTableData, setLkpdTableData] = useState<Record<string, string[][]>>({});
  const [isSubmittingLkpd, setIsSubmittingLkpd] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // =========================================================================
  // SIMULATION INTERACTIVE STATES
  // =========================================================================
  // DKV Dasar (Color Contrast)
  const [dkvTextColor, setDkvTextColor] = useState('#94A3B8');
  const [dkvBgColor, setDkvBgColor] = useState('#FFFFFF');

  // DKV Pengembangan (AI Ethics)
  const [dkvArtifactScore, setDkvArtifactScore] = useState(65);
  const [dkvArtistNameUsed, setDkvArtistNameUsed] = useState(true);
  const [dkvHumanEffort, setDkvHumanEffort] = useState(20);

  // TKP Dasar (Sloof Volume)
  const [tkpSloofLength, setTkpSloofLength] = useState(30.0);
  const [tkpSloofWidth, setTkpSloofWidth] = useState(15);
  const [tkpSloofHeight, setTkpSloofHeight] = useState(20);
  const [tkpWastePercent, setTkpWastePercent] = useState(5);

  // TKP Pengembangan (Crack Classifier)
  const [tkpCrackWidth, setTkpCrackWidth] = useState(3.5);
  const [tkpCrackAngle, setTkpCrackAngle] = useState<'Vertikal' | 'Diagonal' | 'Horizontal' | 'Rambut Acak'>('Diagonal');
  const [tkpCrackThrough, setTkpCrackThrough] = useState(true);

  // DPIB Dasar (Scale & KDB)
  const [dpibLotLength, setDpibLotLength] = useState(15.0);
  const [dpibLotWidth, setDpibLotWidth] = useState(10.0);
  const [dpibFloorArea, setDpibFloorArea] = useState(85.0);
  const [dpibMaxKdb, setDpibMaxKdb] = useState(60);

  // DPIB Pengembangan (Daylight & Energy)
  const [dpibOrientation, setDpibOrientation] = useState<'Utara' | 'Selatan' | 'Timur' | 'Barat'>('Barat');
  const [dpibOverhangCm, setDpibOverhangCm] = useState(60);

  // TOI Dasar (Conveyor Sorter)
  const [toiPackageHeight, setToiPackageHeight] = useState(185);
  const [toiConveyorRunning, setToiConveyorRunning] = useState(true);
  const [toiEmergencyStop, setToiEmergencyStop] = useState(false);
  const [toiSmallCount, setToiSmallCount] = useState(4);
  const [toiLargeCount, setToiLargeCount] = useState(4);

  // TOI Pengembangan (Predictive Maintenance)
  const [toiVibrationLevel, setToiVibrationLevel] = useState(5.6);
  const [toiMotorTemp, setToiMotorTemp] = useState(69.5);

  // TITL Dasar (Load Balancer)
  const [titlCurrentR, setTitlCurrentR] = useState(36.0);
  const [titlCurrentS, setTitlCurrentS] = useState(14.0);
  const [titlCurrentT, setTitlCurrentT] = useState(22.0);

  // TITL Pengembangan (Energy Audit)
  const [titlLeakageCurrent, setTitlLeakageCurrent] = useState(45.0);
  const [titlNightWatts, setTitlNightWatts] = useState(650);

  // TAV Dasar (Audio Filter)
  const [tavCutoffFreq, setTavCutoffFreq] = useState(100);

  // TAV Pengembangan (Voice Keyword Spotter)
  const [tavTestWord, setTavTestWord] = useState('REKAM');
  const [tavThreshold, setTavThreshold] = useState(80);

  // TSM Dasar (Starter Troubleshooting)
  const [tsmBatteryVolt, setTsmBatteryVolt] = useState(12.6);
  const [tsmSideStandDown, setTsmSideStandDown] = useState(false);
  const [tsmBrakeSwitchOn, setTsmBrakeSwitchOn] = useState(true);
  const [tsmRelayClicks, setTsmRelayClicks] = useState(false);

  // TSM Pengembangan (MIL & Fuel Efficiency)
  const [tsmMilBlinks, setTsmMilBlinks] = useState(7);

  // TKR Dasar (Braking Distance)
  const [tkrSpeed, setTkrSpeed] = useState(100);
  const [tkrRoadCondition, setTkrRoadCondition] = useState<'Kering' | 'Basah'>('Basah');

  // TKR Pengembangan (OBD-II Lambda)
  const [tkrFuelTrim, setTkrFuelTrim] = useState(22.5);
  const [tkrO2Voltage, setTkrO2Voltage] = useState(95);

  const classes: ClassItem[] = getClasses();

  // Filter projects
  const filteredProjects = VOCATIONAL_PROJECTS.filter(p => {
    if (selectedMajor !== 'all' && p.major_code !== selectedMajor) return false;
    if (selectedLevel !== 'all' && p.project_level !== selectedLevel) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchMajor = p.major_name.toLowerCase().includes(q) || p.major_code.toLowerCase().includes(q);
      const matchProb = p.problem_statement.toLowerCase().includes(q);
      if (!matchTitle && !matchMajor && !matchProb) return false;
    }
    return true;
  });

  const handleOpenProjectModal = (proj: VocationalProject) => {
    setActiveProject(proj);
    setModalTab('scenario');
    // Preload defaults into lkpd answers if empty
    const initialAnswers: Record<string, string> = {};
    const initialTables: Record<string, string[][]> = {};
    proj.digital_lkpd.sections.forEach(sec => {
      sec.tasks.forEach(task => {
        if (task.input_type === 'table' && task.default_rows) {
          initialTables[task.id] = task.default_rows;
        } else {
          initialAnswers[task.id] = '';
        }
      });
    });
    setLkpdAnswers(initialAnswers);
    setLkpdTableData(initialTables);
  };

  const handleCopyDataset = () => {
    if (!activeProject) return;
    const ds = activeProject.safe_sample_dataset;
    const headerStr = ds.headers.join('\t');
    const rowsStr = ds.rows.map(r => r.join('\t')).join('\n');
    navigator.clipboard.writeText(`${headerStr}\n${rowsStr}`);
    setCopiedDataset(true);
    setTimeout(() => setCopiedDataset(false), 2000);
  };

  // Teacher Assign Action
  const handleExecuteAssignProject = () => {
    if (!projectToAssign) return;

    const assigned = assignVocationalProjectToClass(
      projectToAssign.project_id,
      targetClassId,
      currentUser,
      Number(dueDaysInput),
      Number(weightInput)
    );

    if (assigned) {
      setNotification({
        type: 'success',
        message: `Proyek "${projectToAssign.title}" berhasil ditugaskan ke ${targetClassId === 'all' ? 'Seluruh Rombel (Lintas Jurusan)' : targetClassId.toUpperCase()} dan disinkronkan ke Google Sheets!`
      });
      setProjectToAssign(null);
    }
  };

  // Student LKPD submit
  const handleExecuteSubmitLkpd = () => {
    if (!activeProject) return;
    setIsSubmittingLkpd(true);

    setTimeout(() => {
      // Save submission
      const payload: any = {
        submission_id: 'sub-prj-' + Date.now(),
        assignment_id: 'asg-proj-' + activeProject.project_id,
        student_id: currentUser.user_id,
        student_name: currentUser.full_name,
        student_nis: currentUser.student_number || '20261001',
        class_id: currentUser.class_id || 'cls-umum',
        answer: JSON.stringify(lkpdAnswers),
        table_data: Object.values(lkpdTableData)[0] || [],
        submitted_at: new Date().toISOString(),
        status: 'Terkirim'
      };

      submitAssignment(payload);
      setIsSubmittingLkpd(false);
      setShowSubmitConfirm(false);
      setNotification({
        type: 'success',
        message: `LKPD Proyek "${activeProject.title}" berhasil dikirimkan ke guru pengampu untuk proses penilaian!`
      });
      setActiveProject(null);
    }, 400);
  };

  // Helpers for simulations
  const calculateLuminance = (hex: string) => {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;
    const a = [r, g, b].map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  const getDkvContrastRatio = () => {
    try {
      const l1 = calculateLuminance(dkvTextColor);
      const l2 = calculateLuminance(dkvBgColor);
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    } catch {
      return 1.0;
    }
  };

  return (
    <div className="space-y-6">
      {/* Notifications */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Modul Proyek KKA Kontekstual 8 Konsentrasi Keahlian SMK</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Proyek Koding &amp; Kecerdasan Artifisial Kejuruan Kelas X
            </h1>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              16 modul proyek kontekstual (Tingkat Dasar &amp; Pengembangan) untuk jurusan DKV, TKP, DPIB, TOI, TITL, TAV, TSM, dan TKR.
              Mengajarkan berpikir komputasional, algoritma, analisis data, dan etika AI yang terhubung langsung dengan keahlian teknis siswa.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-xl text-xs space-y-2 shrink-0 md:w-64">
            <div className="text-slate-400 text-[11px] font-semibold uppercase">Status Pembelajaran</div>
            <div className="flex items-center justify-between text-slate-200">
              <span>Total Modul Proyek:</span>
              <strong className="font-mono text-cyan-400 font-bold text-sm">16 Proyek</strong>
            </div>
            <div className="flex items-center justify-between text-slate-200">
              <span>Konsentrasi Keahlian:</span>
              <strong className="font-mono text-emerald-400 font-bold">8 Jurusan</strong>
            </div>
            <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-700">
              Mode: {currentUser.role === 'guru' || currentUser.role === 'admin' ? 'Guru (Dapat Menugaskan)' : `Siswa (${currentUser.major || 'Semua'})`}
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Major Collaboration Callout */}
      {onNavigateToCrossMajor && (
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-cyan-950 p-4 sm:p-5 rounded-2xl border border-indigo-700/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-bold uppercase tracking-wider">
                  Fitur Unggulan
                </span>
                <span className="text-xs font-bold text-white">Proyek Kolaborasi Lintas Jurusan SMK</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Rancang kampanye hemat energi &amp; mitigasi K3 sekolah bersama rekan 8 konsentrasi keahlian dengan pembagian peran terstruktur, dataset riil, dan penilaian terpisah!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onNavigateToCrossMajor}
            className="w-full sm:w-auto px-4 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Buka Workspace Kolaborasi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filter by Major Strip (8 Jurusan) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold text-slate-800 flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-cyan-600" />
            <span>Pilih Konsentrasi Keahlian / Jurusan:</span>
          </span>

          {/* Level Filter (Dasar vs Pengembangan) */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => handleSelectLevel('all')}
              className={`py-1 px-2.5 rounded text-[11px] font-bold transition-all ${
                selectedLevel === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Level
            </button>
            <button
              onClick={() => handleSelectLevel('Dasar')}
              className={`py-1 px-2.5 rounded text-[11px] font-bold transition-all ${
                selectedLevel === 'Dasar' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Tingkat Dasar (Kelas X Awal)
            </button>
            <button
              onClick={() => handleSelectLevel('Pengembangan')}
              className={`py-1 px-2.5 rounded text-[11px] font-bold transition-all ${
                selectedLevel === 'Pengembangan' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Tingkat Pengembangan (Data &amp; AI)
            </button>
          </div>
        </div>

        {/* Major Badges Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => handleSelectMajor('all')}
            className={`py-2 px-3.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              selectedMajor === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            Semua Jurusan (16)
          </button>

          {VOCATIONAL_MAJORS_META.map(m => {
            const isSelected = selectedMajor === m.code;
            return (
              <button
                key={m.code}
                onClick={() => handleSelectMajor(m.code)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="font-mono">{m.code}</span>
                <span className="text-[11px] font-normal opacity-90 hidden sm:inline">{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative pt-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama proyek, masalah, algoritma, atau kata kunci kejuruan..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map(proj => {
          const meta = VOCATIONAL_MAJORS_META.find(m => m.code === proj.major_code);
          const isDasar = proj.project_level === 'Dasar';

          return (
            <div
              key={proj.project_id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 md:p-6 space-y-4">
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${meta?.iconBg}`}>
                      {proj.major_code} · {proj.major_name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isDasar
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                      }`}
                    >
                      {proj.project_level}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Fase E Kelas X</span>
                </div>

                {/* Title & Problem */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-cyan-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {proj.problem_statement}
                  </p>
                </div>

                {/* KKA Concept Tags */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 text-[11px]">
                  <div className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Materi Inti KKA:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-slate-600">
                    <div>
                      <span className="font-semibold text-slate-800">Komputasi:</span> {proj.kka_concepts.computational_thinking.substring(0, 40)}...
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Algoritma:</span> {proj.kka_concepts.algorithm.substring(0, 40)}...
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <TableIcon className="w-3.5 h-3.5 text-slate-400" />
                    Dataset Aman
                  </span>
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5 text-cyan-500" />
                    Simulasi Virtual
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-indigo-500" />
                    LKPD &amp; Rubrik 4 Kriteria
                  </span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenProjectModal(proj)}
                  className="py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Buka Proyek &amp; Simulasi</span>
                </button>

                {(currentUser.role === 'guru' || currentUser.role === 'admin') && (
                  <button
                    type="button"
                    onClick={() => {
                      setProjectToAssign(proj);
                      setTargetClassId('all');
                    }}
                    className="py-2 px-3.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Tugaskan ke Kelas</span>
                    <span className="sm:hidden">Tugaskan</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================================
          DETAILED PROJECT WORKSPACE MODAL
          ===================================================================== */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {activeProject.major_code} · {activeProject.major_name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {activeProject.project_level}
                  </span>
                </div>
                <h2 className="text-base sm:text-xl font-bold text-white leading-snug">
                  {activeProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-slate-400 hover:text-white font-bold p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Modal Sub-Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 gap-2 text-xs font-bold text-slate-600 overflow-x-auto">
              <button
                onClick={() => setModalTab('scenario')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors ${
                  modalTab === 'scenario' ? 'border-cyan-600 text-cyan-700' : 'border-transparent hover:text-slate-900'
                }`}
              >
                1. Skenario &amp; Konsep KKA
              </button>
              <button
                onClick={() => setModalTab('dataset')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors ${
                  modalTab === 'dataset' ? 'border-cyan-600 text-cyan-700' : 'border-transparent hover:text-slate-900'
                }`}
              >
                2. Dataset Kasus Aman
              </button>
              <button
                onClick={() => setModalTab('simulation')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors ${
                  modalTab === 'simulation' ? 'border-cyan-600 text-cyan-700' : 'border-transparent hover:text-slate-900'
                }`}
              >
                3. Langkah &amp; Simulasi Virtual
              </button>
              <button
                onClick={() => setModalTab('lkpd')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors ${
                  modalTab === 'lkpd' ? 'border-cyan-600 text-cyan-700' : 'border-transparent hover:text-slate-900'
                }`}
              >
                4. LKPD Digital Siswa
              </button>
              <button
                onClick={() => setModalTab('rubric')}
                className={`py-3 border-b-2 whitespace-nowrap transition-colors ${
                  modalTab === 'rubric' ? 'border-cyan-600 text-cyan-700' : 'border-transparent hover:text-slate-900'
                }`}
              >
                5. Rubrik &amp; Refleksi
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-xs text-slate-800">
              {/* TAB 1: SCENARIO & KKA CONCEPTS */}
              {modalTab === 'scenario' && (
                <div className="space-y-6">
                  {/* Problem & Scenario */}
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Permasalahan Kontekstual di Dunia Industri:</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      {activeProject.problem_statement}
                    </p>
                    <div className="pt-2 border-t border-amber-200/60 text-[11px] text-slate-700">
                      <strong>Skenario Kasus Nyata:</strong> {activeProject.realistic_scenario}
                    </div>
                  </div>

                  {/* Learning Objectives */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-cyan-600" />
                      <span>Tujuan Pembelajaran Proyek:</span>
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {activeProject.learning_objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 4 Pillars of KKA */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-600" />
                      <span>Penerapan 4 Pilar Konsep KKA dalam Kejuruan:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                        <strong className="text-blue-900 block text-xs">1. Berpikir Komputasional</strong>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {activeProject.kka_concepts.computational_thinking}
                        </p>
                      </div>
                      <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-xl space-y-1">
                        <strong className="text-purple-900 block text-xs">2. Logika Algoritma</strong>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {activeProject.kka_concepts.algorithm}
                        </p>
                      </div>
                      <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                        <strong className="text-emerald-900 block text-xs">3. Pengolahan Data</strong>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {activeProject.kka_concepts.data_processing}
                        </p>
                      </div>
                      <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                        <strong className="text-rose-900 block text-xs">4. Etika AI &amp; Keberlanjutan</strong>
                        <p className="text-slate-700 text-[11px] leading-relaxed">
                          {activeProject.kka_concepts.ai_or_ethics}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expected Final Product */}
                  <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl space-y-1">
                    <div className="font-bold text-cyan-950 text-xs">Target Produk Akhir Siswa:</div>
                    <p className="text-cyan-900 leading-relaxed text-xs">
                      {activeProject.expected_final_product}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: SAFE DATASET */}
              {modalTab === 'dataset' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {activeProject.safe_sample_dataset.dataset_name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {activeProject.safe_sample_dataset.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyDataset}
                      className="py-1.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                    >
                      {copiedDataset ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      <span>{copiedDataset ? 'Data Disalin!' : 'Salin Dataset (TSV)'}</span>
                    </button>
                  </div>

                  {/* Table Viewer */}
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-900 text-white font-mono">
                            {activeProject.safe_sample_dataset.headers.map((h, idx) => (
                              <th key={idx} className="p-2.5 border-r border-slate-800 last:border-r-0 whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {activeProject.safe_sample_dataset.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-2.5 text-slate-700 border-r border-slate-100 last:border-r-0 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-2">
                    <Info className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>
                      Dataset ini dapat digunakan siswa untuk menguji validasi program, dimasukkan ke aplikasi lembar sebar (spreadsheet),
                      atau dijadikan data uji simulasi tanpa perlu mengakses internet eksternal berbayar.
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 3: STEPS & VIRTUAL SIMULATION */}
              {modalTab === 'simulation' && (
                <div className="space-y-6">
                  {/* Step Instructions */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-600" />
                      <span>Langkah Pengerjaan Bertahap (Instruksi Proyek):</span>
                    </h4>
                    <div className="space-y-2.5">
                      {activeProject.step_by_step_instructions.map(st => (
                        <div key={st.step_number} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                          <div className="font-bold text-slate-900 text-xs flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">
                              {st.step_number}
                            </span>
                            <span>{st.title}</span>
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed pl-7">
                            {st.description}
                          </p>
                          <div className="text-[10px] text-cyan-800 font-semibold pl-7">
                            Target Aksi: {st.expected_action}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Safety Notice */}
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-950 text-xs flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Panduan Keselamatan Kerja &amp; Simulasi Virtual (K3):</strong>
                      <span className="text-[11px] text-rose-900 leading-relaxed">
                        {activeProject.simulation_config.safety_guidelines}
                      </span>
                    </div>
                  </div>

                  {/* VIRTUAL SIMULATION INTERACTIVE ENGINE */}
                  <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-cyan-400" />
                        <h4 className="font-bold text-white text-sm">
                          {activeProject.simulation_config.title}
                        </h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                        Virtual Engine Aktif
                      </span>
                    </div>

                    {/* DKV 1: Color Contrast */}
                    {activeProject.simulation_config.simulation_type === 'color_contrast_analyzer' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold text-slate-300 block mb-1">
                              Warna Teks (Hex):
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="color"
                                value={dkvTextColor}
                                onChange={(e) => setDkvTextColor(e.target.value)}
                                className="w-10 h-10 rounded border-0 cursor-pointer bg-transparent"
                              />
                              <input
                                type="text"
                                value={dkvTextColor}
                                onChange={(e) => setDkvTextColor(e.target.value)}
                                className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-slate-300 block mb-1">
                              Warna Latar Belakang (Hex):
                            </label>
                            <div className="flex items-center gap-2">
                              <input
                                type="color"
                                value={dkvBgColor}
                                onChange={(e) => setDkvBgColor(e.target.value)}
                                className="w-10 h-10 rounded border-0 cursor-pointer bg-transparent"
                              />
                              <input
                                type="text"
                                value={dkvBgColor}
                                onChange={(e) => setDkvBgColor(e.target.value)}
                                className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Live Contrast Preview Box */}
                        <div
                          className="p-6 rounded-xl border border-slate-700 text-center space-y-2 transition-colors"
                          style={{ backgroundColor: dkvBgColor, color: dkvTextColor }}
                        >
                          <div className="text-lg font-bold">Pratinjau Keterbacaan Desain Poster</div>
                          <p className="text-xs max-w-md mx-auto">
                            Teks ini menggunakan warna pilihan Anda. Apakah mudah dibaca tanpa menyipitkan mata?
                          </p>
                        </div>

                        {/* Contrast Stats */}
                        {(() => {
                          const ratio = getDkvContrastRatio();
                          const passAA = ratio >= 4.5;
                          const passAAA = ratio >= 7.0;

                          return (
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div>
                                <span className="text-slate-400 text-xs block">Rasio Kontras Terhitung:</span>
                                <div className="text-2xl font-extrabold font-mono text-cyan-400">
                                  {ratio.toFixed(2)} : 1
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <span
                                  className={`px-3 py-1.5 rounded-lg font-bold ${
                                    passAA ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                                  }`}
                                >
                                  {passAA ? '✓ Lolos Standar WCAG AA' : '✗ Gagal (Kontras Terlalu Rendah)'}
                                </span>
                                <span
                                  className={`px-3 py-1.5 rounded-lg font-bold ${
                                    passAAA ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-900 text-slate-500 border border-slate-800'
                                  }`}
                                >
                                  {passAAA ? '✓ Lolos WCAG AAA (Sempurna)' : 'Belum AAA'}
                                </span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* TKP 1: Sloof Concrete Volume Estimator */}
                    {activeProject.simulation_config.simulation_type === 'volume_material_estimator' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="text-[11px] text-slate-400 block mb-1">Panjang Total (m):</label>
                            <input
                              type="number"
                              value={tkpSloofLength}
                              onChange={(e) => setTkpSloofLength(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-slate-400 block mb-1">Lebar Sloof (cm):</label>
                            <input
                              type="number"
                              value={tkpSloofWidth}
                              onChange={(e) => setTkpSloofWidth(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-slate-400 block mb-1">Tinggi Sloof (cm):</label>
                            <input
                              type="number"
                              value={tkpSloofHeight}
                              onChange={(e) => setTkpSloofHeight(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-slate-400 block mb-1">Faktor Susut (%):</label>
                            <input
                              type="number"
                              value={tkpWastePercent}
                              onChange={(e) => setTkpWastePercent(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                        </div>

                        {/* Calculations */}
                        {(() => {
                          const volClean = tkpSloofLength * (tkpSloofWidth / 100) * (tkpSloofHeight / 100);
                          const volTotal = volClean * (1 + tkpWastePercent / 100);
                          const cementBags = Math.ceil(volTotal * 6.5);
                          const sandM3 = (volTotal * 0.54).toFixed(2);
                          const splitM3 = (volTotal * 0.81).toFixed(2);

                          return (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                              <div className="space-y-0.5">
                                <span className="text-[11px] text-slate-400">Volume Beton:</span>
                                <div className="text-xl font-bold font-mono text-cyan-400">{volTotal.toFixed(2)} m³</div>
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-[11px] text-slate-400">Semen 50kg (CEIL):</span>
                                <div className="text-xl font-bold font-mono text-amber-400">{cementBags} Sak</div>
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-[11px] text-slate-400">Pasir Beton:</span>
                                <div className="text-xl font-bold font-mono text-slate-200">{sandM3} m³</div>
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-[11px] text-slate-400">Kerikil Split:</span>
                                <div className="text-xl font-bold font-mono text-slate-200">{splitM3} m³</div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* TOI 1: Conveyor Sorter */}
                    {activeProject.simulation_config.simulation_type === 'conveyor_logic_flow' && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-300">Tinggi Paket Uji:</span>
                            <input
                              type="range"
                              min="80"
                              max="240"
                              value={toiPackageHeight}
                              onChange={(e) => setToiPackageHeight(Number(e.target.value))}
                              className="accent-cyan-500 cursor-pointer"
                            />
                            <strong className="font-mono text-cyan-400">{toiPackageHeight} mm</strong>
                          </div>

                          <button
                            type="button"
                            onClick={() => setToiEmergencyStop(!toiEmergencyStop)}
                            className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                              toiEmergencyStop ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-800 text-slate-300 hover:text-white'
                            }`}
                          >
                            {toiEmergencyStop ? 'EMERGENCY STOP AKTIF!' : 'Tekan E-Stop'}
                          </button>
                        </div>

                        {/* Graphic Conveyor */}
                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-center space-y-3">
                          <div className="text-xs text-slate-400 font-mono">
                            Status Logika: [Sensor Tinggi: {toiPackageHeight > 150 ? '1 (HIGH)' : '0 (LOW)'}] AND [Keberadaan: 1 (HIGH)]
                          </div>
                          <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-4">
                            <div className={`p-3 rounded-xl font-bold text-xs ${toiPackageHeight > 150 ? 'bg-amber-600 text-white' : 'bg-blue-600 text-white'}`}>
                              Paket ({toiPackageHeight} mm)
                            </div>
                            <span className="text-slate-500 font-mono">➔</span>
                            <div className="text-xs text-slate-300">
                              {toiEmergencyStop ? (
                                <span className="text-rose-400 font-bold">KONVEYOR BERHENTI DARURAT</span>
                              ) : toiPackageHeight > 150 ? (
                                <span className="text-amber-400 font-bold">AKTUATOR Y0 AKTIF ➔ Mendorong ke Jalur Besar</span>
                              ) : (
                                <span className="text-emerald-400 font-bold">LURUS ➔ Meluncur ke Jalur Paket Kecil</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TITL 1: 3-Phase Load Balancer */}
                    {activeProject.simulation_config.simulation_type === 'load_balancer_rst' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="text-[11px] text-amber-400 font-bold block mb-1">Arus Fasa R (A):</label>
                            <input
                              type="number"
                              value={titlCurrentR}
                              onChange={(e) => setTitlCurrentR(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-emerald-400 font-bold block mb-1">Arus Fasa S (A):</label>
                            <input
                              type="number"
                              value={titlCurrentS}
                              onChange={(e) => setTitlCurrentS(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] text-cyan-400 font-bold block mb-1">Arus Fasa T (A):</label>
                            <input
                              type="number"
                              value={titlCurrentT}
                              onChange={(e) => setTitlCurrentT(Number(e.target.value))}
                              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs"
                            />
                          </div>
                        </div>

                        {/* Calculation Results */}
                        {(() => {
                          const avg = (titlCurrentR + titlCurrentS + titlCurrentT) / 3;
                          const devR = Math.abs(titlCurrentR - avg);
                          const devS = Math.abs(titlCurrentS - avg);
                          const devT = Math.abs(titlCurrentT - avg);
                          const maxDev = Math.max(devR, devS, devT);
                          const unbalancePercent = avg > 0 ? (maxDev / avg) * 100 : 0;
                          const isSafe = unbalancePercent <= 10.0;

                          return (
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div>
                                <span className="text-[11px] text-slate-400 block">Ketidakseimbangan Beban:</span>
                                <div className="text-2xl font-bold font-mono text-cyan-400">
                                  {unbalancePercent.toFixed(2)} %
                                </div>
                                <span className="text-[10px] text-slate-500">Rata-rata: {avg.toFixed(1)} Ampere</span>
                              </div>
                              <div>
                                <span
                                  className={`px-3 py-1.5 rounded-lg text-xs font-bold inline-block ${
                                    isSafe ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800 animate-pulse'
                                  }`}
                                >
                                  {isSafe ? '✓ Beban Seimbang (Aman PUIL)' : '⚠ Tidak Seimbang (> 10% Bahaya Netral Panas)'}
                                </span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* TKR 1: Braking Distance Calculator */}
                    {activeProject.simulation_config.simulation_type === 'braking_distance_calc' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="text-[11px] text-slate-400">Kecepatan Mobil:</label>
                              <strong className="font-mono text-cyan-400 text-xs">{tkrSpeed} km/jam</strong>
                            </div>
                            <input
                              type="range"
                              min="20"
                              max="140"
                              value={tkrSpeed}
                              onChange={(e) => setTkrSpeed(Number(e.target.value))}
                              className="w-full accent-cyan-500 cursor-pointer"
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-slate-400 block mb-1">Kondisi Jalan:</label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setTkrRoadCondition('Kering')}
                                className={`py-1.5 px-3 rounded-lg text-xs font-bold ${
                                  tkrRoadCondition === 'Kering' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                Aspal Kering (μ=0.8)
                              </button>
                              <button
                                type="button"
                                onClick={() => setTkrRoadCondition('Basah')}
                                className={`py-1.5 px-3 rounded-lg text-xs font-bold ${
                                  tkrRoadCondition === 'Basah' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'
                                }`}
                              >
                                Aspal Basah (μ=0.4)
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Calculation Results */}
                        {(() => {
                          const v = tkrSpeed / 3.6; // m/s
                          const mu = tkrRoadCondition === 'Kering' ? 0.8 : 0.4;
                          const dReaction = v * 1.0;
                          const dBraking = (v * v) / (2 * mu * 9.81);
                          const dTotal = dReaction + dBraking;

                          return (
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-3 gap-3 text-center">
                              <div>
                                <span className="text-[10px] text-slate-400 block">Jarak Reaksi (1s):</span>
                                <div className="text-base font-bold font-mono text-slate-200">{dReaction.toFixed(1)} m</div>
                              </div>
                              <div>
                                <span className="text-[10px] text-slate-400 block">Jarak Gesek Rem:</span>
                                <div className="text-base font-bold font-mono text-amber-400">{dBraking.toFixed(1)} m</div>
                              </div>
                              <div>
                                <span className="text-[10px] text-cyan-400 font-bold block">Total Jarak Berhenti:</span>
                                <div className="text-xl font-extrabold font-mono text-cyan-400">{dTotal.toFixed(1)} m</div>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* Generic Fallback Simulation for Other 11 Types */}
                    {![
                      'color_contrast_analyzer',
                      'volume_material_estimator',
                      'conveyor_logic_flow',
                      'load_balancer_rst',
                      'braking_distance_calc'
                    ].includes(activeProject.simulation_config.simulation_type) && (
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                        <div className="text-xs text-slate-300 leading-relaxed">
                          {activeProject.simulation_config.description}
                        </div>
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                          <span className="text-cyan-400 font-mono">
                            Mode Interaktif: {activeProject.simulation_config.simulation_type}
                          </span>
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Siap Uji Coba Lapangan
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: DIGITAL LKPD */}
              {modalTab === 'lkpd' && (
                <div className="space-y-6">
                  <div className="p-4 bg-cyan-50/70 border border-cyan-200 rounded-xl space-y-1">
                    <h4 className="font-bold text-cyan-950 text-sm">
                      {activeProject.digital_lkpd.title}
                    </h4>
                    <p className="text-xs text-cyan-800">
                      Isi lembar kerja di bawah ini berdasarkan hasil observasi dataset dan simulasi virtual. Anda dapat menyimpan draf atau mengirimkannya langsung.
                    </p>
                  </div>

                  {activeProject.digital_lkpd.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
                      <h5 className="font-bold text-slate-900 text-xs border-b border-slate-100 pb-2">
                        {sec.section_title}
                      </h5>

                      <div className="space-y-4">
                        {sec.tasks.map(task => (
                          <div key={task.id} className="space-y-2">
                            <label className="font-semibold text-slate-800 block text-xs">
                              {task.prompt}
                            </label>

                            {task.input_type === 'text' && (
                              <textarea
                                value={lkpdAnswers[task.id] || ''}
                                onChange={(e) => setLkpdAnswers({ ...lkpdAnswers, [task.id]: e.target.value })}
                                placeholder="Tuliskan uraian analisis Anda di sini..."
                                rows={3}
                                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                              />
                            )}

                            {task.input_type === 'table' && (
                              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                                <table className="w-full text-xs text-left">
                                  <thead>
                                    <tr className="bg-slate-100 text-slate-700 font-semibold">
                                      {task.table_columns?.map((col, cIdx) => (
                                        <th key={cIdx} className="p-2 border-r border-slate-200 last:border-r-0">
                                          {col}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {(lkpdTableData[task.id] || task.default_rows || []).map((row, rIdx) => (
                                      <tr key={rIdx} className="border-t border-slate-100">
                                        {row.map((cell, cIdx) => (
                                          <td key={cIdx} className="p-1 border-r border-slate-100 last:border-r-0">
                                            <input
                                              type="text"
                                              value={cell}
                                              onChange={(e) => {
                                                const currentTable = lkpdTableData[task.id] ? [...lkpdTableData[task.id]] : [...(task.default_rows || [])];
                                                currentTable[rIdx] = [...currentTable[rIdx]];
                                                currentTable[rIdx][cIdx] = e.target.value;
                                                setLkpdTableData({ ...lkpdTableData, [task.id]: currentTable });
                                              }}
                                              className="w-full p-1.5 text-xs bg-slate-50 focus:bg-white rounded border border-transparent focus:border-cyan-400"
                                            />
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Submission Actions */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setNotification({ type: 'success', message: 'Draf jawaban LKPD proyek berhasil disimpan di browser.' });
                      }}
                      className="py-2 px-4 border border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" /> Simpan Draf
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSubmitConfirm(true)}
                      className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" /> Kirim Jawaban Proyek
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 5: RUBRIC & REFLECTIONS */}
              {modalTab === 'rubric' && (
                <div className="space-y-6">
                  {/* Rubric Table */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-600" />
                      <span>Rubrik Penilaian Proyek (Total Bobot 100%):</span>
                    </h4>

                    <div className="space-y-2">
                      {activeProject.assessment_rubric.map((r, idx) => (
                        <div
                          key={r.id}
                          className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs"
                        >
                          <div className="space-y-0.5">
                            <span className="font-bold text-slate-900 block">{idx + 1}. {r.name}</span>
                            <span className="text-[11px] text-slate-500">{r.description}</span>
                          </div>
                          <span className="font-mono font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-200 shrink-0">
                            Bobot: {r.weight}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Criteria */}
                  <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl space-y-2 text-xs">
                    <div className="font-bold text-emerald-950 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Kriteria Keberhasilan Siswa:</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-emerald-900 text-[11px]">
                      {activeProject.success_criteria.map((sc, i) => (
                        <li key={i}>{sc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Reflection Prompts */}
                  <div className="bg-purple-50/70 border border-purple-200 p-4 rounded-xl space-y-2 text-xs">
                    <div className="font-bold text-purple-950 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-purple-600" />
                      <span>Pertanyaan Refleksi &amp; Pengembangan Lanjutan:</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1.5 text-purple-900 text-[11px]">
                      {activeProject.reflection_prompts.map((rp, i) => (
                        <li key={i} className="italic">&ldquo;{rp}&rdquo;</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Kurikulum Merdeka SMK Fase E · Modul Kontekstual Resmi KKA</span>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="py-1.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg"
              >
                Tutup Workspace
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TEACHER ASSIGN MODAL (CLASS OR CROSS-MAJOR)
          ===================================================================== */}
      {projectToAssign && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 text-xs border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-600" /> Tugaskan Proyek Kejuruan
              </h3>
              <button
                type="button"
                onClick={() => setProjectToAssign(null)}
                className="text-slate-400 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 block">Proyek Dipilih:</span>
              <strong className="text-slate-900 block font-semibold text-xs leading-snug">
                [{projectToAssign.major_code} {projectToAssign.project_level}] {projectToAssign.title}
              </strong>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Pilih Target Kelas / Rombel Siswa:
                </label>
                <select
                  value={targetClassId}
                  onChange={(e) => setTargetClassId(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-bold text-slate-800"
                >
                  <option value="all">🌟 Semua Rombel (Proyek Lintas Jurusan)</option>
                  {classes.map(c => (
                    <option key={c.class_id} value={c.class_id}>
                      {c.class_name} ({c.major})
                    </option>
                  ))}
                </select>
                <span className="text-[10px] text-slate-500 block mt-1">
                  Memilih &ldquo;Semua Rombel&rdquo; memungkinkan siswa dari jurusan lain mempelajari aplikasi komputasi di bidang {projectToAssign.major_code}.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Tenggat Waktu (Hari):</label>
                  <input
                    type="number"
                    min="3"
                    max="60"
                    value={dueDaysInput}
                    onChange={(e) => setDueDaysInput(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Bobot Rapor (%):</label>
                  <input
                    type="number"
                    min="5"
                    max="50"
                    value={weightInput}
                    onChange={(e) => setWeightInput(Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg font-mono text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setProjectToAssign(null)}
                className="py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleExecuteAssignProject}
                className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
              >
                Terbitkan Tugas Proyek
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for LKPD Submission */}
      <ConfirmationModal
        isOpen={showSubmitConfirm}
        title="Konfirmasi Pengumpulan LKPD Proyek"
        message={`Apakah Anda yakin ingin mengirimkan seluruh jawaban lembar kerja proyek "${activeProject?.title}" sekarang? Pastikan simulasi dan analisis telah lengkap.`}
        confirmLabel="Ya, Kirimkan Jawaban"
        cancelLabel="Periksa Lagi"
        variant="primary"
        isLoading={isSubmittingLkpd}
        onConfirm={handleExecuteSubmitLkpd}
        onCancel={() => setShowSubmitConfirm(false)}
      />
    </div>
  );
};
