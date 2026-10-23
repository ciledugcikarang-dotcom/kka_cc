import React, { useState } from 'react';
import { Play, RotateCcw, Save, CheckCircle, ArrowRight, BarChart2, GitBranch, Layers, Sparkles } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

export const LabAlgoritmaDanML: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  const [section, setSection] = useState<'flowchart' | 'sorting_searching' | 'ml_naive_bayes' | 'ml_kmeans_regression'>('flowchart');

  // --- FLOWCHART STATE (Nested If Buku hal. 41 & 55) ---
  const [examScore, setExamScore] = useState<number>(72);
  const [attendance, setAttendance] = useState<number>(92);

  // Outcome logic:
  // Nilai >= 75 AND Kehadiran >= 80% -> Lulus
  // Nilai 70-74 AND Kehadiran >= 90% -> Lulus (Dispensasi Rajin)
  // Else -> Tidak Lulus
  const evaluateGraduation = () => {
    if (examScore >= 75 && attendance >= 80) {
      return { status: 'Lulus', reason: 'Nilai akhir memenuhi syarat (>= 75) dan kehadiran cukup (>= 80%).', node: 'node-lulus' };
    } else if (examScore >= 70 && examScore < 75 && attendance >= 90) {
      return { status: 'Lulus (Dispensasi Rajin)', reason: 'Nilai antara 70-74 tetapi kehadiran sangat tinggi (>= 90%) sehingga diberikan kelulusan dispensasi rajin.', node: 'node-dispensasi' };
    } else {
      return { status: 'Tidak Lulus', reason: 'Nilai atau kehadiran tidak memenuhi kriteria minimum kelulusan.', node: 'node-tidak-lulus' };
    }
  };

  const flowResult = evaluateGraduation();

  // --- SORTING STATE (Selection Sort vs Insertion Sort hal. 56) ---
  const initialArray = [15, 25, 13, 5, 30, 40, 7];
  const [sortArray, setSortArray] = useState<number[]>([...initialArray]);
  const [sortStep, setSortStep] = useState<number>(0);
  const [sortComparisons, setSortComparisons] = useState<number>(0);
  const [sortSwaps, setSortSwaps] = useState<number>(0);
  const [sortMethod, setSortMethod] = useState<'selection' | 'insertion'>('selection');
  const [sortLog, setSortLog] = useState<string[]>(['Array awal: [15, 25, 13, 5, 30, 40, 7]']);

  const stepSelectionSort = () => {
    let arr = [...sortArray];
    let n = arr.length;
    let i = sortStep;

    if (i < n - 1) {
      let minIdx = i;
      let comparisonsInStep = 0;
      for (let j = i + 1; j < n; j++) {
        comparisonsInStep++;
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      let swapped = false;
      if (minIdx !== i) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        swapped = true;
      }

      setSortArray(arr);
      setSortStep(i + 1);
      setSortComparisons(prev => prev + comparisonsInStep);
      if (swapped) setSortSwaps(prev => prev + 1);
      setSortLog(prev => [
        ...prev,
        `Langkah ${i + 1}: Nilai terkecil dari indeks ${i} hingga akhir adalah ${arr[i]}${swapped ? ` (ditukar ke indeks ${i})` : ' (posisi sudah tepat)'}. Array: [${arr.join(', ')}]`
      ]);
    }
  };

  const resetSort = () => {
    setSortArray([...initialArray]);
    setSortStep(0);
    setSortComparisons(0);
    setSortSwaps(0);
    setSortLog(['Array awal di-reset: [15, 25, 13, 5, 30, 40, 7]']);
  };

  // --- SEARCHING STATE ---
  const [searchTarget, setSearchTarget] = useState<number>(30);
  const [searchFoundIndex, setSearchFoundIndex] = useState<number | null>(null);
  const [linearSteps, setLinearSteps] = useState<number>(0);
  const [binarySteps, setBinarySteps] = useState<number>(0);

  const runSearchTest = () => {
    const sorted = [5, 7, 13, 15, 25, 30, 40];
    // Linear
    let lSteps = 0;
    let found = -1;
    for (let i = 0; i < sorted.length; i++) {
      lSteps++;
      if (sorted[i] === searchTarget) {
        found = i;
        break;
      }
    }
    setLinearSteps(lSteps);

    // Binary
    let bSteps = 0;
    let low = 0;
    let high = sorted.length - 1;
    while (low <= high) {
      bSteps++;
      let mid = Math.floor((low + high) / 2);
      if (sorted[mid] === searchTarget) {
        break;
      } else if (searchTarget < sorted[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    setBinarySteps(bSteps);
    setSearchFoundIndex(found);
  };

  // --- NAIVE BAYES (Textbook hal. 69-71) ---
  const [fruitSize, setFruitSize] = useState<'Besar' | 'Kecil'>('Kecil');
  const [fruitTaste, setFruitTaste] = useState<'Manis' | 'Asam'>('Manis');

  // Prior probabilities: 3 Apel, 3 Jeruk, 3 Anggur = 1/3 (0.33) each
  // Apel: Besar=2/3 (0.67), Kecil=1/3 (0.33), Manis=2/3 (0.67), Asam=1/3 (0.33)
  // Jeruk: Besar=2/3 (0.67), Kecil=1/3 (0.33), Manis=0/3 (0.00), Asam=3/3 (1.00)
  // Anggur: Besar=1/3 (0.33), Kecil=2/3 (0.67), Manis=3/3 (1.00), Asam=0/3 (0.00)
  const calculateNaiveBayes = () => {
    const prior = 0.333;
    let pSizeApel = fruitSize === 'Besar' ? 0.67 : 0.33;
    let pTasteApel = fruitTaste === 'Manis' ? 0.67 : 0.33;
    let probApel = Number((prior * pSizeApel * pTasteApel).toFixed(3));

    let pSizeJeruk = fruitSize === 'Besar' ? 0.67 : 0.33;
    let pTasteJeruk = fruitTaste === 'Manis' ? 0.0 : 1.0;
    let probJeruk = Number((prior * pSizeJeruk * pTasteJeruk).toFixed(3));

    let pSizeAnggur = fruitSize === 'Besar' ? 0.33 : 0.67;
    let pTasteAnggur = fruitTaste === 'Manis' ? 1.0 : 0.0;
    let probAnggur = Number((prior * pSizeAnggur * pTasteAnggur).toFixed(3));

    let predictedFruit = 'Anggur';
    let maxP = probAnggur;
    if (probApel > maxP) {
      predictedFruit = 'Apel';
      maxP = probApel;
    }
    if (probJeruk > maxP) {
      predictedFruit = 'Jeruk';
      maxP = probJeruk;
    }

    return { probApel, probJeruk, probAnggur, predictedFruit, maxP };
  };

  const nbResult = calculateNaiveBayes();

  // --- REGRESI LINEAR (Textbook hal. 60-62: y = -59.6 + 0.7 * X) ---
  const [inputHeight, setInputHeight] = useState<number>(172);
  const predictedWeight = Number((-59.6 + 0.7 * inputHeight).toFixed(1));

  // Reflection and save
  const [reflection, setReflection] = useState('');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const handleSaveResult = () => {
    if (!reflection.trim()) {
      alert('Tuliskan refleksi hasil praktikum algoritma sebelum menyimpan.');
      return;
    }
    saveLabResult({
      result_id: 'res-algo-' + Date.now(),
      lab_id: 'lab-02',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        examScore,
        attendance,
        flowResult,
        sortArray,
        sortComparisons,
        fruitSize,
        fruitTaste,
        nbResult,
        inputHeight,
        predictedWeight
      },
      result_summary: `Hasil Klasifikasi Naive Bayes: ${nbResult.predictedFruit} (Prob: ${nbResult.maxP}) & Prediksi Berat Badan (Tinggi ${inputHeight} cm): ${predictedWeight} kg.`,
      reflection,
      saved_at: new Date().toISOString()
    });
    setSaveMessage('Praktikum berhasil disimpan ke Portofolio!');
    setTimeout(() => setSaveMessage(null), 3000);
    if (onSaveSuccess) onSaveSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">Laboratorium Algoritma & Pembelajaran Mesin</div>
            <h2 className="text-2xl font-bold mt-1">Flowchart, Sorting & Machine Learning Classifier</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Eksplorasi logika visual diagram alir, perbandingan algoritma pengurutan & pencarian data, serta penerapan model prediksi Naive Bayes dan Regresi Linear.
            </p>
          </div>
          {/* Sub-navigation tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'flowchart', label: '1. Flowchart Nested If' },
              { id: 'sorting_searching', label: '2. Sorting & Search' },
              { id: 'ml_naive_bayes', label: '3. Naive Bayes Buah' },
              { id: 'ml_kmeans_regression', label: '4. Regresi & K-Means' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSection(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${section === tab.id ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 1: FLOWCHART LOGIC */}
      {section === 'flowchart' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-sm font-bold text-slate-900">Visualisasi Eksekusi Flowchart Logika Kelulusan</span>
              <span className="text-xs text-slate-500">Buku Siswa Bab 2 Hal. 41 & 55</span>
            </div>

            {/* SVG Flowchart Diagram */}
            <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-center">
              <svg className="w-full max-w-md h-96" viewBox="0 0 360 420">
                {/* Start Node */}
                <rect x="130" y="10" width="100" height="32" rx="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="180" y="30" fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="bold">Start</text>
                <line x1="180" y1="42" x2="180" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

                {/* Input Node (Parallelogram) */}
                <polygon points="110,70 270,70 250,105 90,105" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="180" y="92" fill="#ffffff" fontSize="11" textAnchor="middle">Input Nilai & Hadir</text>
                <line x1="180" y1="105" x2="180" y2="135" stroke="#64748b" strokeWidth="2" />

                {/* Decision 1: Nilai >= 75 AND Hadir >= 80% */}
                <polygon
                  points="180,135 270,175 180,215 90,175"
                  fill={flowResult.node === 'node-lulus' ? '#065f46' : '#1e293b'}
                  stroke={flowResult.node === 'node-lulus' ? '#34d399' : '#38bdf8'}
                  strokeWidth="2"
                />
                <text x="180" y="170" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Nilai &gt;= 75 &amp;</text>
                <text x="180" y="184" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">Hadir &gt;= 80%?</text>

                {/* Yes -> Output Lulus */}
                <line x1="270" y1="175" x2="310" y2="175" stroke="#34d399" strokeWidth="2" />
                <text x="285" y="165" fill="#34d399" fontSize="10">Ya</text>
                <rect
                  x="260" y="210" width="90" height="36" rx="4"
                  fill={flowResult.node === 'node-lulus' ? '#059669' : '#1e293b'}
                  stroke="#10b981" strokeWidth="2"
                />
                <text x="305" y="232" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">LULUS</text>
                <line x1="305" y1="175" x2="305" y2="210" stroke="#34d399" strokeWidth="2" />

                {/* No -> Decision 2: Nilai 70-74 AND Hadir >= 90% */}
                <line x1="180" y1="215" x2="180" y2="245" stroke="#64748b" strokeWidth="2" />
                <text x="190" y="235" fill="#f87171" fontSize="10">Tidak</text>
                <polygon
                  points="180,245 270,285 180,325 90,285"
                  fill={flowResult.node === 'node-dispensasi' ? '#0e7490' : '#1e293b'}
                  stroke={flowResult.node === 'node-dispensasi' ? '#22d3ee' : '#38bdf8'}
                  strokeWidth="2"
                />
                <text x="180" y="280" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Nilai &gt;= 70 &amp;</text>
                <text x="180" y="294" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Hadir &gt;= 90%?</text>

                {/* Decision 2: Yes -> Dispensasi Rajin */}
                <line x1="270" y1="285" x2="310" y2="285" stroke="#22d3ee" strokeWidth="2" />
                <rect
                  x="260" y="320" width="90" height="36" rx="4"
                  fill={flowResult.node === 'node-dispensasi' ? '#0284c7' : '#1e293b'}
                  stroke="#38bdf8" strokeWidth="2"
                />
                <text x="305" y="342" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Lulus Rajin</text>
                <line x1="310" y1="285" x2="310" y2="320" stroke="#22d3ee" strokeWidth="2" />

                {/* Decision 2: No -> Tidak Lulus */}
                <line x1="90" y1="285" x2="40" y2="285" stroke="#ef4444" strokeWidth="2" />
                <rect
                  x="10" y="320" width="80" height="36" rx="4"
                  fill={flowResult.node === 'node-tidak-lulus' ? '#b91c1c' : '#1e293b'}
                  stroke="#f87171" strokeWidth="2"
                />
                <text x="50" y="342" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">Tidak Lulus</text>
                <line x1="40" y1="285" x2="40" y2="320" stroke="#ef4444" strokeWidth="2" />

                {/* End Node */}
                <rect x="130" y="375" width="100" height="32" rx="16" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
                <text x="180" y="395" fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="bold">End</text>
                <line x1="50" y1="356" x2="130" y2="390" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="305" y1="356" x2="230" y2="390" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="305" y1="246" x2="230" y2="390" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Uji Coba Parameter Siswa</h4>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Nilai Akhir Ujian:</span>
                  <span className="font-mono text-cyan-700 font-bold text-sm">{examScore}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="100"
                  value={examScore}
                  onChange={(e) => setExamScore(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>40 (Rendah)</span>
                  <span>KKTP: 75</span>
                  <span>100 (Sempurna)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Persentase Kehadiran:</span>
                  <span className="font-mono text-teal-700 font-bold text-sm">{attendance}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={attendance}
                  onChange={(e) => setAttendance(Number(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>50%</span>
                  <span>Min: 80%</span>
                  <span>Dispensasi: 90%</span>
                </div>
              </div>

              {/* Status Outcome Box */}
              <div className={`p-4 rounded-xl border text-xs ${flowResult.status.startsWith('Lulus') ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                <div className="font-bold text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Hasil Keputusan: {flowResult.status}
                </div>
                <p className="mt-1 leading-relaxed">{flowResult.reason}</p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <label className="text-xs font-bold text-slate-800 block mb-1">Catatan Refleksi:</label>
                <textarea
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  placeholder="Tuliskan analisis Anda mengapa nested if diperlukan pada kasus ini..."
                  rows={2}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={handleSaveResult}
                  className="w-full mt-2 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center justify-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" /> Simpan Hasil ke Portofolio
                </button>
                {saveMessage && <div className="text-xs text-emerald-600 font-semibold mt-1 text-center">{saveMessage}</div>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: SORTING & SEARCHING */}
      {section === 'sorting_searching' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-sm font-bold text-slate-900">Simulasi Selection Sort Step-by-Step</span>
                <span className="block text-xs text-slate-500">Array Data: [15, 25, 13, 5, 30, 40, 7] (Buku Hal. 56)</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={stepSelectionSort}
                  disabled={sortStep >= sortArray.length - 1}
                  className="py-1.5 px-3 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 disabled:opacity-50 flex items-center gap-1"
                >
                  <Play className="w-3.5 h-3.5" /> Langkah Berikutnya ({sortStep}/{sortArray.length - 1})
                </button>
                <button
                  onClick={resetSort}
                  className="py-1.5 px-3 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>
            </div>

            {/* Visual Bars for Array */}
            <div className="h-48 bg-slate-950 rounded-xl p-4 flex items-end justify-center gap-4 border border-slate-800">
              {sortArray.map((val, idx) => {
                const isCurrentSorted = idx < sortStep;
                const isCurrentEvaluating = idx === sortStep;
                const heightPercent = Math.round((val / 40) * 100);

                return (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-300 font-bold">{val}</span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-8 rounded-t-md transition-all duration-300 ${isCurrentSorted ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' : isCurrentEvaluating ? 'bg-cyan-400 animate-pulse' : 'bg-slate-700'}`}
                    />
                    <span className="text-[10px] text-slate-400 font-mono">[{idx}]</span>
                  </div>
                );
              })}
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500">Putaran Selesai</div>
                <div className="text-lg font-bold text-slate-800 font-mono">{sortStep} / {sortArray.length - 1}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500">Total Perbandingan</div>
                <div className="text-lg font-bold text-cyan-700 font-mono">{sortComparisons}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-xs text-slate-500">Jumlah Pertukaran (Swap)</div>
                <div className="text-lg font-bold text-teal-700 font-mono">{sortSwaps}</div>
              </div>
            </div>

            {/* Step Logs */}
            <div className="bg-slate-900 text-slate-300 p-3 rounded-lg text-xs font-mono max-h-36 overflow-y-auto space-y-1">
              {sortLog.map((log, i) => (
                <div key={i} className="text-slate-300 border-b border-slate-800/50 pb-0.5">{log}</div>
              ))}
            </div>
          </div>

          {/* Right: Searching Analysis */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">Komparasi: Linear Search vs Binary Search</h4>
            <p className="text-xs text-slate-500">
              Array Terurut: [5, 7, 13, 15, 25, 30, 40] (7 Elemen)
            </p>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Cari Angka:</label>
              <div className="flex gap-2">
                <select
                  value={searchTarget}
                  onChange={(e) => setSearchTarget(Number(e.target.value))}
                  className="flex-1 p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono"
                >
                  {[5, 7, 13, 15, 25, 30, 40].map(n => (
                    <option key={n} value={n}>Cari nilai: {n}</option>
                  ))}
                </select>
                <button
                  onClick={runSearchTest}
                  className="py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                >
                  Hitung Langkah
                </button>
              </div>
            </div>

            {linearSteps > 0 && (
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg text-xs space-y-1">
                  <div className="font-bold text-cyan-950">Sequential / Linear Search:</div>
                  <div className="text-cyan-800">
                    Memeriksa dari indeks 0, 1, 2... Membutuhkan <strong className="font-mono text-cyan-900">{linearSteps} kali perbandingan</strong>.
                  </div>
                  <div className="text-[11px] text-slate-500">Kompleksitas: O(N) — jika 100 data bisa sampai 100 kali.</div>
                </div>

                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-xs space-y-1">
                  <div className="font-bold text-teal-950">Binary Search:</div>
                  <div className="text-teal-800">
                    Membagi dua array secara berulang. Cukup <strong className="font-mono text-teal-900">{binarySteps} kali perbandingan</strong>!
                  </div>
                  <div className="text-[11px] text-slate-500">Kompleksitas: O(log N) — jika 100 data cukup maksimal 7 kali!</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 3: NAIVE BAYES CLASSIFIER (Textbook hal. 69-71) */}
      {section === 'ml_naive_bayes' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-sm font-bold text-slate-900">Klasifikasi Naive Bayes: Prediksi Jenis Buah</span>
                <span className="block text-xs text-slate-500">Dataset 9 Buah: Apel (3), Jeruk (3), Anggur (3) — Buku Hal. 69</span>
              </div>
              <span className="text-xs bg-cyan-50 text-cyan-800 px-2.5 py-1 rounded-md border border-cyan-200 font-medium">Probabilistik</span>
            </div>

            {/* Input Controls */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Ciri 1: Ukuran Buah</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Besar', 'Kecil'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setFruitSize(s)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${fruitSize === s ? 'border-cyan-600 bg-cyan-50 text-cyan-900 font-bold' : 'border-slate-300 bg-white text-slate-700'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Ciri 2: Rasa Buah</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Manis', 'Asam'] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setFruitTaste(t)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${fruitTaste === t ? 'border-cyan-600 bg-cyan-50 text-cyan-900 font-bold' : 'border-slate-300 bg-white text-slate-700'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Formula Step-by-Step Breakdown */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-800">Perhitungan Teorema Bayes: P(Buah|Ukuran, Rasa) = P(Buah) × P(Ukuran|Buah) × P(Rasa|Buah)</div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className={`p-3 rounded-lg border text-xs ${nbResult.predictedFruit === 'Apel' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                  <div className="font-bold text-slate-800">🍎 Apel</div>
                  <div className="text-[11px] text-slate-500 mt-1">P(Apel) = 0.33</div>
                  <div className="text-[11px] text-slate-500">P({fruitSize}|Apel) = {fruitSize === 'Besar' ? '0.67' : '0.33'}</div>
                  <div className="text-[11px] text-slate-500">P({fruitTaste}|Apel) = {fruitTaste === 'Manis' ? '0.67' : '0.33'}</div>
                  <div className="mt-2 font-mono font-bold text-cyan-700">Skor: {nbResult.probApel}</div>
                </div>

                <div className={`p-3 rounded-lg border text-xs ${nbResult.predictedFruit === 'Jeruk' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                  <div className="font-bold text-slate-800">🍊 Jeruk</div>
                  <div className="text-[11px] text-slate-500 mt-1">P(Jeruk) = 0.33</div>
                  <div className="text-[11px] text-slate-500">P({fruitSize}|Jeruk) = {fruitSize === 'Besar' ? '0.67' : '0.33'}</div>
                  <div className="text-[11px] text-slate-500">P({fruitTaste}|Jeruk) = {fruitTaste === 'Manis' ? '0.00' : '1.00'}</div>
                  <div className="mt-2 font-mono font-bold text-cyan-700">Skor: {nbResult.probJeruk}</div>
                </div>

                <div className={`p-3 rounded-lg border text-xs ${nbResult.predictedFruit === 'Anggur' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                  <div className="font-bold text-slate-800">🍇 Anggur</div>
                  <div className="text-[11px] text-slate-500 mt-1">P(Anggur) = 0.33</div>
                  <div className="text-[11px] text-slate-500">P({fruitSize}|Anggur) = {fruitSize === 'Besar' ? '0.33' : '0.67'}</div>
                  <div className="text-[11px] text-slate-500">P({fruitTaste}|Anggur) = {fruitTaste === 'Manis' ? '1.00' : '0.00'}</div>
                  <div className="mt-2 font-mono font-bold text-cyan-700">Skor: {nbResult.probAnggur}</div>
                </div>
              </div>
            </div>

            {/* Prediction Banner */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Hasil Prediksi Akhir Model KA:</div>
                <div className="text-lg font-bold text-cyan-400 mt-0.5">
                  Buah baru berukuran {fruitSize} dan rasa {fruitTaste} diklasifikasikan sebagai {nbResult.predictedFruit}!
                </div>
              </div>
              <div className="text-right font-mono text-xs text-slate-300">
                Probabilitas Tertinggi: <strong className="text-emerald-400 text-sm">{nbResult.maxP}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">Dataset Latih Buku Siswa</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="p-2">No</th>
                    <th className="p-2">Buah</th>
                    <th className="p-2">Ukuran</th>
                    <th className="p-2">Rasa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  <tr><td className="p-2">1</td><td>Apel</td><td>Besar</td><td>Manis</td></tr>
                  <tr><td className="p-2">2</td><td>Apel</td><td>Besar</td><td>Asam</td></tr>
                  <tr><td className="p-2">3</td><td>Apel</td><td>Kecil</td><td>Manis</td></tr>
                  <tr><td className="p-2">4</td><td>Jeruk</td><td>Besar</td><td>Asam</td></tr>
                  <tr><td className="p-2">5</td><td>Jeruk</td><td>Besar</td><td>Asam</td></tr>
                  <tr><td className="p-2">6</td><td>Jeruk</td><td>Kecil</td><td>Asam</td></tr>
                  <tr><td className="p-2">7</td><td>Anggur</td><td>Kecil</td><td>Manis</td></tr>
                  <tr><td className="p-2">8</td><td>Anggur</td><td>Kecil</td><td>Manis</td></tr>
                  <tr><td className="p-2">9</td><td>Anggur</td><td>Besar</td><td>Manis</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: REGRESI LINEAR & K-MEANS */}
      {section === 'ml_kmeans_regression' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-sm">Regresi Linear: Prediksi Berat Badan dari Tinggi</h4>
              <p className="text-xs text-slate-500">Rumus Buku Hal. 60-62: Y = a + bX (a = -59.6, b = 0.7)</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Input Tinggi Badan (X):</span>
                <span className="font-mono text-cyan-700 font-bold">{inputHeight} cm</span>
              </div>
              <input
                type="range"
                min="140"
                max="195"
                value={inputHeight}
                onChange={(e) => setInputHeight(Number(e.target.value))}
                className="w-full accent-cyan-600 cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-800">Langkah Perhitungan Regresi:</div>
              <div className="font-mono text-slate-600">Y = -59.6 + (0.7 × {inputHeight})</div>
              <div className="font-mono text-slate-600">Y = -59.6 + {Number((0.7 * inputHeight).toFixed(1))}</div>
              <div className="text-sm font-bold text-cyan-800 pt-1">
                Prediksi Berat Badan Ideal (Y): <span className="font-mono text-base">{predictedWeight} kg</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-sm">K-Means Clustering: Pengelompokan Hobi Teman</h4>
              <p className="text-xs text-slate-500">6 Teman (A..F) berdasarkan hobi Olahraga, Membaca, Musik (Buku Hal. 64-67)</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="font-bold text-emerald-900">Klaster 1 (C1): Musik &amp; Olahraga</div>
                <div className="text-emerald-800 mt-1">Anggota: Teman A, E, dan F</div>
                <div className="text-[11px] text-slate-500 mt-1">Sentroid C1: (0.67, 0, 0.67)</div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="font-bold text-blue-900">Klaster 2 (C2): Minat Membaca</div>
                <div className="text-blue-800 mt-1">Anggota: Teman B, C, dan D</div>
                <div className="text-[11px] text-slate-500 mt-1">Sentroid C2: (0.33, 1, 0.33)</div>
              </div>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
              Jarak dihitung menggunakan teorema Pythagoras 3 dimensi:<br />
              <code className="text-cyan-700 font-mono">d = √((x1 - x2)² + (y1 - y2)² + (z1 - z2)²)</code><br />
              Setiap titik data dimasukkan ke klaster dengan jarak terdekat terhadap sentroid.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
