import React, { useState, useEffect } from 'react';
import {
  Timer,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  HelpCircle,
  ArrowLeft,
  ShieldAlert,
  Info,
  Layers,
  Brain
} from 'lucide-react';
import { QuestionItem, User } from '../../types';
import {
  getSanitizedQuestionsForUser,
  evaluateAndSaveQuizAttempt,
  getAssignments
} from '../../services/apiService';
import { calculateQuestionDistribution } from '../../data/questionBankData';

interface QuizProps {
  currentUser: User;
  selectedModuleId?: string;
  onBack: () => void;
  onFinished?: () => void;
}

export const QuizAssessmentView: React.FC<QuizProps> = ({
  currentUser,
  selectedModuleId,
  onBack,
  onFinished
}) => {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins (900 seconds)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [cognitiveBreakdown, setCognitiveBreakdown] = useState<{
    lots: { correct: number; total: number };
    mots: { correct: number; total: number };
    hots: { correct: number; total: number };
  }>({
    lots: { correct: 0, total: 0 },
    mots: { correct: 0, total: 0 },
    hots: { correct: 0, total: 0 }
  });
  const [reviewItems, setReviewItems] = useState<
    Array<{
      question_id: string;
      question_text: string;
      student_answer: string;
      is_correct: boolean;
      answer_key?: string;
      explanation?: string;
      cognitive_level: 'LOTS' | 'MOTS' | 'HOTS';
    }>
  >([]);

  // Check if discussion view is allowed for this module's assignment
  const assignments = getAssignments();
  const relatedAsg = assignments.find(a => a.module_id === selectedModuleId);
  const allowDiscussionView = relatedAsg?.allow_discussion_view !== false; // default true

  useEffect(() => {
    // Ambil 10 soal yang telah disanitasi secara aman (kunci jawaban & penjelasan disembunyikan dari siswa)
    const sanitized = getSanitizedQuestionsForUser(currentUser, selectedModuleId, 10);
    setQuestions(sanitized);
  }, [selectedModuleId, currentUser]);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (questionId: string, option: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleAutoSubmit = () => {
    finishQuiz();
  };

  const finishQuiz = () => {
    const timeSpentSec = Math.max(1, 900 - timeLeft);

    // Evaluasi Asesmen Otoritatif di Sisi Engine/API
    // Mencegah manipulasi jawaban atau pemalsuan nilai di frontend
    const evalResult = evaluateAndSaveQuizAttempt(
      currentUser,
      selectedModuleId || 'quiz-all',
      answers,
      timeSpentSec,
      allowDiscussionView
    );

    setScore(evalResult.calculatedScore);
    setCognitiveBreakdown(evalResult.cognitiveBreakdown);
    setReviewItems(evalResult.reviewItems);
    setIsSubmitted(true);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl border border-slate-200 text-center space-y-3">
        <p className="text-slate-600 text-sm">Tidak ada soal yang tersedia untuk modul ini.</p>
        <button onClick={onBack} className="py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-semibold">
          Kembali
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const distributionInfo = calculateQuestionDistribution(questions.length);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Modul Pembelajaran
        </button>

        {!isSubmitted && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg text-[11px] font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
              <span>Integritas Digital Terlindungi</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold">
              <Timer className="w-4 h-4 text-cyan-400" />
              <span>Sisa Waktu: {formatTimer(timeLeft)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Transparent Question Distribution Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-4 rounded-xl border border-slate-800 text-xs shadow-sm space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-bold text-cyan-300">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span>Standar Distribusi Kognitif Soal (Kemendikdasmen 2025):</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded border border-blue-700/50">
              50% LOTS ({distributionInfo.lotsCount} Soal)
            </span>
            <span className="bg-amber-900/60 text-amber-200 px-2 py-0.5 rounded border border-amber-700/50">
              30% MOTS ({distributionInfo.motsCount} Soal)
            </span>
            <span className="bg-purple-900/60 text-purple-200 px-2 py-0.5 rounded border border-purple-700/50">
              20% HOTS ({distributionInfo.hotsCount} Soal)
            </span>
          </div>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          {distributionInfo.transparencyNote}
        </p>
      </div>

      {!isSubmitted ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          {/* Progress Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wide">
                Butir Soal {currentIdx + 1} dari {questions.length}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                    currentQ.cognitive_level === 'HOTS'
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : currentQ.cognitive_level === 'MOTS'
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  Ranah: {currentQ.cognitive_level} ({currentQ.difficulty})
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {currentQ.cognitive_level === 'HOTS'
                    ? 'Studi Kasus & Analisis Tingkat Tinggi'
                    : currentQ.cognitive_level === 'MOTS'
                    ? 'Penerapan & Logika Menengah'
                    : 'Pemahaman Konsep Dasar'}
                </span>
              </div>
            </div>

            {/* Quick navigator numbers */}
            <div className="flex flex-wrap items-center gap-1.5">
              {questions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-all ${
                    currentIdx === idx
                      ? 'bg-slate-900 text-white ring-2 ring-cyan-500'
                      : answers[q.question_id]
                      ? 'bg-cyan-100 text-cyan-900 border border-cyan-300 font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  title={`Soal ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="text-sm font-semibold text-slate-900 leading-relaxed bg-slate-50/60 p-4 rounded-xl border border-slate-200">
            {currentQ.question_text}
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options?.map((opt, i) => {
              const isSelected = answers[currentQ.question_id] === opt;
              const optionLetter = String.fromCharCode(65 + i);

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.question_id, opt)}
                  className={`w-full p-3.5 rounded-xl border text-left text-xs flex items-start gap-3 transition-all ${
                    isSelected
                      ? 'border-cyan-600 bg-cyan-50/80 text-cyan-950 font-medium shadow-sm ring-1 ring-cyan-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold shrink-0 text-xs transition-colors ${
                      isSelected ? 'bg-cyan-600 text-white shadow-sm' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {optionLetter}
                  </span>
                  <span className="mt-0.5 leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="py-2 px-4 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors"
            >
              Sebelumnya
            </button>

            <div className="text-xs text-slate-500 font-mono">
              Terjawab: {Object.keys(answers).length} / {questions.length}
            </div>

            {currentIdx < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx(prev => prev + 1)}
                className="py-2 px-5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                type="button"
                onClick={finishQuiz}
                className="py-2 px-6 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 shadow-sm transition-colors"
              >
                Kirim &amp; Selesaikan Kuis
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Result Review View */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2 border-b border-slate-100 pb-6">
            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Hasil Asesmen Digital KKA</h3>
            <div className="text-4xl font-extrabold font-mono text-cyan-700 mt-2">{score} / 100</div>
            <p className="text-xs text-slate-600 max-w-xl mx-auto">
              {score >= 75
                ? 'Selamat! Anda telah melampaui Kriteria Ketuntasan Tujuan Pembelajaran (KKTP) Fase E.'
                : 'Terus tingkatkan pemahaman! Cermati capaian per ranah kognitif dan pelajari kembali materi yang belum tuntas.'}
            </p>

            {/* Cognitive Level Breakdown Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-xl mx-auto text-xs">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="font-bold text-blue-900">LOTS (50%)</div>
                <div className="text-base font-extrabold font-mono text-blue-800 mt-0.5">
                  {cognitiveBreakdown.lots.correct} / {cognitiveBreakdown.lots.total}
                </div>
                <div className="text-[10px] text-blue-600">Pemahaman Konsep</div>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                <div className="font-bold text-amber-900">MOTS (30%)</div>
                <div className="text-base font-extrabold font-mono text-amber-800 mt-0.5">
                  {cognitiveBreakdown.mots.correct} / {cognitiveBreakdown.mots.total}
                </div>
                <div className="text-[10px] text-amber-600">Penerapan Prosedural</div>
              </div>
              <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
                <div className="font-bold text-purple-900">HOTS (20%)</div>
                <div className="text-base font-extrabold font-mono text-purple-800 mt-0.5">
                  {cognitiveBreakdown.hots.correct} / {cognitiveBreakdown.hots.total}
                </div>
                <div className="text-[10px] text-purple-600">Analisis &amp; Studi Kasus</div>
              </div>
            </div>
          </div>

          {/* Question by question review */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm">
                Rincian Analisis Jawaban &amp; Pembahasan:
              </h4>
              {!allowDiscussionView && (
                <span className="text-[11px] bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded font-semibold">
                  Kunci Ditangguhkan oleh Guru
                </span>
              )}
            </div>

            {!allowDiscussionView ? (
              <div className="p-6 bg-amber-50/80 border border-amber-200 rounded-xl text-center space-y-2 text-xs text-amber-950">
                <ShieldAlert className="w-8 h-8 text-amber-600 mx-auto" />
                <div className="font-bold">Pembahasan &amp; Kunci Jawaban Belum Dipublikasikan</div>
                <p className="max-w-md mx-auto text-slate-600">
                  Guru mata pelajaran menyetel kebijakan proteksi asesmen: Pembahasan dan kunci jawaban baru dapat diakses setelah seluruh rombel menyelesaikan ujian formatif ini.
                </p>
              </div>
            ) : (
              reviewItems.map((item, idx) => {
                const isCorrect = item.is_correct;

                return (
                  <div
                    key={item.question_id}
                    className={`p-4 rounded-xl border text-xs space-y-2.5 ${
                      isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-slate-900 leading-relaxed">
                        {idx + 1}. {item.question_text}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            item.cognitive_level === 'HOTS'
                              ? 'bg-purple-100 text-purple-800'
                              : item.cognitive_level === 'MOTS'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {item.cognitive_level}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? 'Benar' : 'Salah'}
                        </span>
                      </div>
                    </div>

                    <div className="text-slate-700 bg-white/70 p-2.5 rounded-lg border border-slate-200 space-y-1">
                      <div>
                        Jawaban Anda:{' '}
                        <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {item.student_answer || '(Tidak Dijawab)'}
                        </strong>
                      </div>
                      {!isCorrect && item.answer_key && (
                        <div>
                          Kunci Jawaban Resmi: <strong className="text-emerald-700">{item.answer_key}</strong>
                        </div>
                      )}
                    </div>

                    {item.explanation && (
                      <div className="bg-white/90 p-3 rounded-lg border border-slate-200/80 text-slate-700 space-y-1">
                        <div className="font-bold text-slate-800 flex items-center gap-1 text-[11px]">
                          <HelpCircle className="w-3.5 h-3.5 text-cyan-600" /> Penjelasan Buku Teks &amp; Teori:
                        </div>
                        <p className="leading-relaxed text-[11px]">{item.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onBack}
              className="py-2 px-5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Selesai &amp; Kembali ke Modul
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
