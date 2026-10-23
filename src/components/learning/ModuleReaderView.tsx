import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  FileText,
  HelpCircle,
  Sparkles,
  Compass,
  Lightbulb,
  Briefcase,
  Users,
  User as UserIcon,
  ChevronDown,
  ChevronUp,
  Search,
  Award,
  Layers,
  GraduationCap,
  MessageSquareQuote,
  Target,
  Code
} from 'lucide-react';
import { ModuleItem, Chapter, User, MajorApplication } from '../../types';
import { getAssignments } from '../../services/apiService';

interface ModuleReaderProps {
  module: ModuleItem;
  currentUser: User;
  onBack: () => void;
  onOpenLab: (labId: string) => void;
  onOpenQuiz: (moduleId: string) => void;
  onOpenLKPD?: () => void;
}

export const ModuleReaderView: React.FC<ModuleReaderProps> = ({
  module,
  currentUser,
  onBack,
  onOpenLab,
  onOpenQuiz,
  onOpenLKPD
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(module.chapters[0]?.id || '');
  const currentChapter = module.chapters.find(c => c.id === selectedChapterId) || module.chapters[0];

  // Active sub-tab in the left sidebar or top: 'materi' | 'tujuan_abcd' | 'kosakata' | 'remedial_pengayaan' | 'tugas_modul'
  const [activeSideSection, setActiveSideSection] = useState<'subbab' | 'tujuan' | 'glosarium' | 'remedial'>('subbab');

  // Filter for Major Applications in current chapter
  const [selectedMajorFilter, setSelectedMajorFilter] = useState<string>('all');

  // Vocabulary search filter
  const [vocabSearch, setVocabSearch] = useState('');

  // Self check questions revealed state
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});

  // Map module to corresponding lab
  const labMap: Record<string, string> = {
    'mod-01': 'lab-01',
    'mod-02': 'lab-02',
    'mod-03': 'lab-04',
    'mod-04': 'lab-05',
    'mod-05': 'lab-04',
    'mod-06': 'lab-06'
  };

  const correspondingLabId = labMap[module.module_id] || 'lab-01';

  // Module assignments
  const allAssignments = getAssignments().filter(a => a.module_id === module.module_id);

  const toggleAnswerReveal = (index: number) => {
    setRevealedAnswers(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Filtered vocabulary
  const filteredVocab = module.vocabulary.filter(v =>
    v.term.toLowerCase().includes(vocabSearch.toLowerCase()) ||
    v.definition.toLowerCase().includes(vocabSearch.toLowerCase())
  );

  // Filtered major applications
  const majorApps = currentChapter?.majorApplications || [];
  const displayMajorApps = selectedMajorFilter === 'all'
    ? majorApps
    : majorApps.filter(app => app.majorId === selectedMajorFilter);

  // Helper to render markdown-like content cleanly
  const renderFormattedContent = (content?: string) => {
    if (!content) return null;

    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${idx}`} className="my-4 p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
              <pre>{codeBuffer.join('\n')}</pre>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={`sp-${idx}`} className="h-2" />);
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${idx}`} className="text-base font-bold text-slate-900 mt-6 mb-2 border-b border-slate-100 pb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-cyan-600 rounded-full" />
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={`h4-${idx}`} className="text-sm font-bold text-slate-800 mt-4 mb-1.5 flex items-center gap-1.5">
            <span className="text-cyan-600 font-mono">▸</span>
            {line.replace('#### ', '')}
          </h4>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${idx}`} className="text-xs text-slate-700 leading-relaxed ml-4 list-disc marker:text-cyan-600">
            {renderInlineMarkdown(line.replace('- ', ''))}
          </li>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={`bq-${idx}`} className="p-3 my-2 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-lg text-xs text-amber-950 font-medium">
            {renderInlineMarkdown(line.replace('> ', ''))}
          </blockquote>
        );
      } else {
        elements.push(
          <p key={`p-${idx}`} className="text-xs text-slate-700 leading-relaxed my-1.5">
            {renderInlineMarkdown(line)}
          </p>
        );
      }
    });

    return elements;
  };

  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Basic regex parser for **bold** and *italic* and `code`
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-800">{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 bg-slate-100 text-cyan-800 rounded font-mono text-[11px] border border-slate-200">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" /> Kembali ke Peta Belajar
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onOpenLab(correspondingLabId)}
            className="py-1.5 px-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Compass className="w-3.5 h-3.5" /> Praktikum Lab
          </button>
          {onOpenLKPD && (
            <button
              onClick={onOpenLKPD}
              className="py-1.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" /> LKPD Digital
            </button>
          )}
          <button
            onClick={() => onOpenQuiz(module.module_id)}
            className="py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Kuis Formatif
          </button>
        </div>
      </div>

      {/* Module Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex flex-wrap items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <span className="bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
            BAB 0{module.sequence} · KKA KELAS X
          </span>
          <span aria-hidden="true">·</span>
          <span>Kurikulum Merdeka 2025</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-400">Semua Jurusan SMK / SMA</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mt-3 text-white leading-tight">
          {module.title}
        </h1>

        <p className="text-sm text-slate-300 mt-2 max-w-4xl leading-relaxed">
          {module.description}
        </p>

        {module.curriculumVerificationNote && (
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{module.curriculumVerificationNote}</span>
          </div>
        )}
      </div>

      {/* Main Grid: Sidebar Controls + Deep Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Navigation & Extra Modules) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Section Switcher Tabs */}
          <div className="bg-white p-1 rounded-xl border border-slate-200 grid grid-cols-4 gap-1 text-center text-xs font-semibold shadow-sm">
            <button
              onClick={() => setActiveSideSection('subbab')}
              className={`py-1.5 rounded-lg transition-all ${activeSideSection === 'subbab' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
              title="Daftar Subbab"
            >
              Subbab
            </button>
            <button
              onClick={() => setActiveSideSection('tujuan')}
              className={`py-1.5 rounded-lg transition-all ${activeSideSection === 'tujuan' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
              title="Tujuan ABCD"
            >
              Tujuan
            </button>
            <button
              onClick={() => setActiveSideSection('glosarium')}
              className={`py-1.5 rounded-lg transition-all ${activeSideSection === 'glosarium' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
              title="Kosakata & Glosarium"
            >
              Glosarium
            </button>
            <button
              onClick={() => setActiveSideSection('remedial')}
              className={`py-1.5 rounded-lg transition-all ${activeSideSection === 'remedial' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
              title="Remedial & Refleksi"
            >
              Refleksi
            </button>
          </div>

          {/* SIDEBAR VIEW 1: SUBBAB LIST */}
          {activeSideSection === 'subbab' && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wide">
                <span>Daftar Subbab Pembelajaran</span>
                <span className="text-[11px] font-mono text-slate-400">{module.chapters.length} Subbab</span>
              </div>

              <div className="space-y-2">
                {module.chapters.map((chap, idx) => (
                  <button
                    key={chap.id}
                    onClick={() => setSelectedChapterId(chap.id)}
                    className={`w-full text-left p-3 rounded-xl text-xs transition-all ${
                      selectedChapterId === chap.id
                        ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-500 text-cyan-950 font-bold shadow-sm'
                        : 'border border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                      <span className="font-semibold text-cyan-700">Subbab {idx + 1}</span>
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                        {chap.readingMinutes} menit
                      </span>
                    </div>
                    <div className="leading-snug text-slate-900">{chap.title}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SIDEBAR VIEW 2: TUJUAN PEMBELAJARAN TERUKUR (ABCD) */}
          {activeSideSection === 'tujuan' && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <Target className="w-4 h-4 text-cyan-600" />
                <span>Tujuan Pembelajaran Terukur (Formula ABCD):</span>
              </div>

              {module.measurableObjectives && module.measurableObjectives.length > 0 ? (
                <div className="space-y-3">
                  {module.measurableObjectives.map((obj, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                      <div className="font-bold text-cyan-900 text-[11px] flex items-center gap-1">
                        <span className="w-4 h-4 rounded-full bg-cyan-200 text-cyan-800 flex items-center justify-center text-[10px]">
                          {i + 1}
                        </span>
                        <span>{obj.text}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[10px] pt-1 border-t border-slate-200/60 text-slate-600">
                        <div><strong className="text-slate-800">A (Audience):</strong> {obj.audience}</div>
                        <div><strong className="text-slate-800">B (Behavior):</strong> {obj.behavior}</div>
                        <div><strong className="text-slate-800">C (Condition):</strong> {obj.condition}</div>
                        <div><strong className="text-slate-800">D (Degree):</strong> {obj.degree}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-1 text-slate-600">
                  {module.learning_objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-600 font-bold">•</span>
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SIDEBAR VIEW 3: GLOSARIUM & KOSAKATA PENTING */}
          {activeSideSection === 'glosarium' && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-600" /> Kosakata Penting
                </div>
                <span className="text-[10px] text-slate-400 font-mono">({filteredVocab.length})</span>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Cari istilah teknologi..."
                  value={vocabSearch}
                  onChange={e => setVocabSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {filteredVocab.map((v, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg space-y-1">
                    <strong className="text-slate-900 block font-mono text-[11px] text-cyan-900">{v.term}</strong>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{v.definition}</p>
                    {v.contextExample && (
                      <div className="text-[10px] text-emerald-700 bg-emerald-50/70 p-1.5 rounded border border-emerald-200/60 leading-snug">
                        <strong>Contoh Nyata:</strong> {v.contextExample}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SIDEBAR VIEW 4: REMEDIAL, PENGAYAAN & REFLEKSI */}
          {activeSideSection === 'remedial' && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4 text-xs">
              <div className="space-y-1.5 border-b border-slate-100 pb-3">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-600" /> Panduan Remedial:
                </span>
                <p className="text-slate-700 leading-relaxed text-[11px]">
                  {module.remedialGuide || 'Bagi peserta didik yang belum mencapai KKTP, berikan lembar kerja terpandu dan pendampingan sebaya (Peer Tutoring).'}
                </p>
              </div>

              <div className="space-y-1.5 border-b border-slate-100 pb-3">
                <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-600" /> Panduan Pengayaan:
                </span>
                <p className="text-slate-700 leading-relaxed text-[11px]">
                  {module.enrichmentGuide || 'Tantang peserta didik yang sudah tuntas untuk merancang studi kasus kompleks atau proyek portofolio industri.'}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-4 h-4 text-cyan-600" /> Pertanyaan Refleksi Diri:
                </span>
                <div className="space-y-2">
                  {module.reflectionPrompts?.map((prompt, i) => (
                    <div key={i} className="p-2 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-700 italic">
                      "{prompt}"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Module Assignments Box */}
          {allAssignments.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 p-4 rounded-xl text-xs space-y-2">
              <div className="font-bold text-indigo-950 flex items-center justify-between">
                <span>Tugas Modul Aktif:</span>
                <span className="text-[10px] bg-indigo-200/80 text-indigo-900 px-2 py-0.5 rounded font-bold">
                  {allAssignments.length} Tugas
                </span>
              </div>
              <div className="space-y-2">
                {allAssignments.map(asg => (
                  <div key={asg.assignment_id} className="p-2.5 bg-white rounded-lg border border-indigo-100 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className={`px-1.5 py-0.2 rounded font-bold ${asg.is_group ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                        {asg.is_group ? 'Kelompok' : 'Mandiri'}
                      </span>
                      <span className="text-slate-400">Max: {asg.max_score} poin</span>
                    </div>
                    <div className="font-semibold text-slate-900 text-[11px] leading-tight">{asg.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Deep Chapter Reading View */}
        <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Chapter Header */}
          <div className="border-b border-slate-200 pb-4 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-cyan-700 uppercase tracking-wide">
              <span>Materi Pembelajaran Mendalam</span>
              <span className="text-slate-400 font-mono font-normal">Estimasi baca: {currentChapter.readingMinutes} menit</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
              {currentChapter.title}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mt-1">
              {currentChapter.description}
            </p>
          </div>

          {/* 1. Daily Analogy Callout (Analogi Kehidupan Sehari-hari) */}
          {currentChapter.dailyAnalogy && (
            <div className="p-5 bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50 border-2 border-amber-300/80 rounded-2xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Analogi Kehidupan Sehari-hari (Bermain &amp; Belajar):</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed italic">
                "{currentChapter.dailyAnalogy}"
              </p>
            </div>
          )}

          {/* 2. Key Concepts Chips */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold text-slate-800">Konsep Inti yang Dikuasai:</div>
            <div className="flex flex-wrap gap-1.5">
              {currentChapter.keyConcepts.map((kc, i) => (
                <span
                  key={i}
                  className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 border border-slate-300 shadow-2xs"
                >
                  {kc}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Core Content (Markdown Formatted Lecture) */}
          <div className="prose-slate text-xs space-y-2 border-y border-slate-100 py-4">
            {renderFormattedContent(currentChapter.coreContent || currentChapter.description)}
          </div>

          {/* 4. Practical Industry Tips */}
          {currentChapter.practicalTips && currentChapter.practicalTips.length > 0 && (
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-2">
              <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Tips Praktis Industri &amp; Pembelajaran:
              </div>
              <ul className="space-y-1 text-xs text-emerald-900 pl-4 list-disc marker:text-emerald-500">
                {currentChapter.practicalTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Contoh Penerapan dalam Berbagai Jurusan SMK */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-600" />
                <span>Penerapan Konsep dalam Berbagai Jurusan SMK:</span>
              </div>

              {/* Major Filter Tabs */}
              <div className="flex flex-wrap gap-1 text-[11px]">
                <button
                  onClick={() => setSelectedMajorFilter('all')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'all' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Semua Jurusan
                </button>
                <button
                  onClick={() => setSelectedMajorFilter('rpl')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'rpl' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  PPLG/RPL
                </button>
                <button
                  onClick={() => setSelectedMajorFilter('tkj')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'tkj' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  TJKT/TKJ
                </button>
                <button
                  onClick={() => setSelectedMajorFilter('dkv')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'dkv' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  DKV
                </button>
                <button
                  onClick={() => setSelectedMajorFilter('akl')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'akl' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  AKL
                </button>
                <button
                  onClick={() => setSelectedMajorFilter('to')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${selectedMajorFilter === 'to' ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Otomotif
                </button>
              </div>
            </div>

            {/* Major Application Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {displayMajorApps.length > 0 ? (
                displayMajorApps.map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[10px] text-cyan-800 bg-cyan-100/80 px-2 py-0.5 rounded">
                        {app.majorName}
                      </span>
                      <span className="text-[10px] text-slate-400">{app.fieldCategory}</span>
                    </div>

                    <h5 className="font-bold text-slate-900 leading-snug">{app.caseTitle}</h5>

                    <div className="space-y-1 text-slate-600 text-[11px]">
                      <div><strong>Skenario Masalah:</strong> {app.scenario}</div>
                      <div className="text-slate-800"><strong>Implementasi KKA:</strong> {app.implementation}</div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 text-[10px] text-cyan-900 bg-cyan-50/50 p-1.5 rounded">
                      <strong>Dampak / Nilai Tambah:</strong> {app.impactNote}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
                  Pilih tombol "Semua Jurusan" untuk melihat seluruh contoh aplikasi kejuruan di subbab ini.
                </div>
              )}
            </div>
          </div>

          {/* 6. Aktivitas Pembelajaran Mandiri & Kelompok */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-cyan-600" /> Aktivitas Pembelajaran Mendalam (Deep Learning):
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Individual Activity */}
              {currentChapter.individualActivity && (
                <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-900 flex items-center gap-1">
                      <UserIcon className="w-3.5 h-3.5 text-blue-600" /> Aktivitas Mandiri
                    </span>
                    <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-semibold">Individu</span>
                  </div>
                  <div className="font-bold text-slate-900">{currentChapter.individualActivity.title}</div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">{currentChapter.individualActivity.prompt}</p>

                  {currentChapter.individualActivity.steps && (
                    <div className="space-y-1 pt-1 text-[11px] text-slate-700">
                      <strong>Langkah Kerja:</strong>
                      <ol className="list-decimal pl-4 space-y-0.5">
                        {currentChapter.individualActivity.steps.map((st, i) => (
                          <li key={i}>{st}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {currentChapter.individualActivity.expectedOutput && (
                    <div className="p-2 bg-white rounded border border-blue-100 text-[10px] text-blue-900">
                      <strong>Target Hasil:</strong> {currentChapter.individualActivity.expectedOutput}
                    </div>
                  )}
                </div>
              )}

              {/* Group Activity */}
              {currentChapter.groupActivity && (
                <div className="p-4 bg-purple-50/70 border border-purple-200 rounded-xl text-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-900 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-purple-600" /> Aktivitas Kelompok (PjBL)
                    </span>
                    <span className="text-[10px] bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded font-semibold">3-4 Siswa</span>
                  </div>
                  <div className="font-bold text-slate-900">{currentChapter.groupActivity.title}</div>
                  <p className="text-slate-700 leading-relaxed text-[11px]">{currentChapter.groupActivity.prompt}</p>

                  {currentChapter.groupActivity.roles && (
                    <div className="space-y-1 pt-1 text-[11px] text-slate-700">
                      <strong>Pembagian Peran:</strong>
                      <ul className="list-disc pl-4 space-y-0.5">
                        {currentChapter.groupActivity.roles.map((rl, i) => (
                          <li key={i}>{rl}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentChapter.groupActivity.expectedOutput && (
                    <div className="p-2 bg-white rounded border border-purple-100 text-[10px] text-purple-900">
                      <strong>Target Hasil:</strong> {currentChapter.groupActivity.expectedOutput}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 7. Self Check Questions (Latihan Mandiri & Kunci Jawaban) */}
          {currentChapter.selfCheckQuestions && currentChapter.selfCheckQuestions.length > 0 && (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                <span>Uji Pemahaman Cepat &amp; Kunci Jawaban Pembahasan:</span>
              </div>

              <div className="space-y-2.5">
                {currentChapter.selfCheckQuestions.map((q, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                    <div className="font-semibold text-slate-800 leading-relaxed">
                      {idx + 1}. {q.question}
                    </div>

                    <button
                      onClick={() => toggleAnswerReveal(idx)}
                      className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors"
                    >
                      {revealedAnswers[idx] ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" /> Sembunyikan Pembahasan
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" /> Lihat Kunci Jawaban &amp; Pembahasan
                        </>
                      )}
                    </button>

                    {revealedAnswers[idx] && (
                      <div className="pt-2 border-t border-slate-100 space-y-1 bg-emerald-50/60 p-2.5 rounded-lg text-emerald-950">
                        <div><strong>Kunci Jawaban:</strong> {q.answerKey}</div>
                        <div className="text-[11px] text-emerald-800"><strong>Pembahasan:</strong> {q.explanation}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Diselaraskan dengan Capaian Pembelajaran Fase E KKA Kurikulum Merdeka.
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenLab(correspondingLabId)}
                className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Compass className="w-4 h-4" /> Buka Lab
              </button>
              <button
                onClick={() => onOpenQuiz(module.module_id)}
                className="py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center gap-1.5 shadow-sm"
              >
                <span>Uji Kompetensi Soal</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
