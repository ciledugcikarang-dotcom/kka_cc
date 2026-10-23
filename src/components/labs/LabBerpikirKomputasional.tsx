import React, { useState } from 'react';
import { Play, RotateCcw, Save, CheckCircle, AlertTriangle, ArrowRight, Compass, HelpCircle } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

export const LabBerpikirKomputasional: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  // Parameters
  const [departureTime, setDepartureTime] = useState<'06:00' | '06:30' | '07:00'>('06:30');
  const [weather, setWeather] = useState<'Cerah' | 'Hujan Ringan' | 'Hujan Lebat/Genangan'>('Hujan Ringan');
  const [transportMode, setTransportMode] = useState<'Sepeda/Motor' | 'Jalan Kaki' | 'Angkot'>('Sepeda/Motor');
  const [activeTab, setActiveTab] = useState<'simulasi_rute' | 'analisis_5whys'>('simulasi_rute');

  // Simulation execution state
  const [isRunning, setIsRunning] = useState(false);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [reflectionText, setReflectionText] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // 5 Whys state
  const [fiveWhys, setFiveWhys] = useState({
    problem: 'Siswa sering terlambat masuk sekolah pada hari Senin pagi',
    why1: 'Pelayanan pembelian sarapan di kantin dan perjalanan jalan raya sangat padat.',
    why2: 'Banyak kendaraan menumpuk di persimpangan jalan utama dan antrean kantin memanjang.',
    why3: 'Tidak ada petugas pengatur lalu lintas di persimpangan dan loket kantin hanya buka satu.',
    why4: 'Belum ada pembagian tugas giliran piket petugas kantin dan rekayasa jalur cepat.',
    why5: 'Belum ada SOP manajemen alur layanan sekolah dan sosialisasi rute alternatif komputasional.'
  });

  // Calculate dynamic weights for routes
  // Rute 1: R -> A (Jalan Utama) -> S. Jarak 4 km. Rawat macet saat jam sibuk.
  // Rute 2: R -> B -> C -> S (Jalan Lingkungan). Jarak 5 km. Lebih sepi, banyak tikungan.
  // Rute 3: R -> D -> E -> F -> S (Jalan Alternatif Tepi Sungai). Jarak 6 km. Rawan genangan banjir saat hujan lebat.

  const calculateRouteMetrics = () => {
    let trafficMultiplier = departureTime === '06:30' ? 1.8 : departureTime === '07:00' ? 2.2 : 1.0;
    let weatherPenaltyR3 = weather === 'Hujan Lebat/Genangan' ? 15 : weather === 'Hujan Ringan' ? 4 : 0;
    let weatherPenaltyR1 = weather === 'Hujan Lebat/Genangan' ? 6 : 0;

    let speedFactor = transportMode === 'Sepeda/Motor' ? 1.0 : transportMode === 'Angkot' ? 1.2 : 2.5;

    // Base minutes
    const r1Time = Math.round((8 * trafficMultiplier + weatherPenaltyR1) * speedFactor);
    const r2Time = Math.round((11 * (departureTime === '06:30' ? 1.15 : 1.05) + (weather === 'Hujan Lebat/Genangan' ? 3 : 0)) * speedFactor);
    const r3Time = Math.round((10 * 1.1 + weatherPenaltyR3) * speedFactor);

    return {
      r1: { id: 'Jalur 1 (R-A-S)', distance: '4.2 km', intersections: 3, time: r1Time, safety: 'Sedang (Jalan Arteri Ramai)' },
      r2: { id: 'Jalur 2 (R-B-C-S)', distance: '4.8 km', intersections: 5, time: r2Time, safety: 'Tinggi (Jalan Lingkungan Aman)' },
      r3: { id: 'Jalur 3 (R-D-E-S)', distance: '5.5 km', intersections: 2, time: r3Time, safety: weather === 'Hujan Lebat/Genangan' ? 'Bahaya (Genangan Air)' : 'Baik' }
    };
  };

  const metrics = calculateRouteMetrics();

  const handleRunSimulation = () => {
    setIsRunning(true);
    setHasEvaluated(false);
    setTimeout(() => {
      // Pick fastest & safest
      let fastest = metrics.r1;
      if (metrics.r2.time < fastest.time || (weather === 'Hujan Lebat/Genangan' && fastest.time >= metrics.r2.time - 2)) {
        fastest = metrics.r2;
      }
      if (metrics.r3.time < fastest.time && weather !== 'Hujan Lebat/Genangan') {
        fastest = metrics.r3;
      }
      setSelectedRoute(fastest.id);
      setIsRunning(false);
      setHasEvaluated(true);
    }, 600);
  };

  const handleSavePortfolio = () => {
    if (!reflectionText.trim()) {
      alert('Silakan tuliskan refleksi praktikum sebelum menyimpan.');
      return;
    }

    saveLabResult({
      result_id: 'res-bk-' + Date.now(),
      lab_id: 'lab-01',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        departureTime,
        weather,
        transportMode,
        metrics,
        selectedRoute,
        fiveWhys
      },
      result_summary: `Rute Terpilih: ${selectedRoute || 'Jalur 2'} dengan estimasi ${metrics.r2.time} menit pada kondisi ${weather} jam ${departureTime}.`,
      reflection: reflectionText,
      saved_at: new Date().toISOString()
    });

    setSaveStatus('Berhasil disimpan ke Portofolio!');
    setTimeout(() => setSaveStatus(null), 3000);
    if (onSaveSuccess) onSaveSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Header Info Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">Laboratorium Berpikir Komputasional</div>
            <h2 className="text-2xl font-bold mt-1">Simulasi Rute Tercepat & Analisis 5 Whys</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Memodelkan jaringan transportasi sebagai graf berbobot dinamis (Dijkstra/A*) dan menyelesaikan masalah kompleks melalui 4 pilar: Dekomposisi, Pengenalan Pola, Abstraksi, dan Algoritma.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('simulasi_rute')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'simulasi_rute' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
            >
              1. Simulasi Graf Rute
            </button>
            <button
              onClick={() => setActiveTab('analisis_5whys')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === 'analisis_5whys' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
            >
              2. Analisis 5 Whys
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'simulasi_rute' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Zone: Interactive Stage (Graph Map) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <span className="text-sm font-bold text-slate-800">Peta Jaringan Graf Rute Menuju Sekolah</span>
                <span className="text-xs text-slate-500">Node: Persimpangan · Edge: Ruas Jalan</span>
              </div>

              {/* Visual Interactive SVG Graph */}
              <div className="relative bg-slate-950 rounded-xl p-4 border border-slate-800 h-80 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 320">
                  <defs>
                    <linearGradient id="roadGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>

                  {/* Edges / Road Lines */}
                  {/* Jalur 1: R(80,160) -> A(300,70) -> S(520,160) */}
                  <line
                    x1="80" y1="160" x2="300" y2="70"
                    stroke={selectedRoute === 'Jalur 1 (R-A-S)' ? '#38bdf8' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 1 (R-A-S)' ? '5' : '2'}
                    strokeDasharray={selectedRoute === 'Jalur 1 (R-A-S)' ? 'none' : '4,4'}
                  />
                  <line
                    x1="300" y1="70" x2="520" y2="160"
                    stroke={selectedRoute === 'Jalur 1 (R-A-S)' ? '#38bdf8' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 1 (R-A-S)' ? '5' : '2'}
                    strokeDasharray={selectedRoute === 'Jalur 1 (R-A-S)' ? 'none' : '4,4'}
                  />

                  {/* Jalur 2: R(80,160) -> B(220,160) -> C(380,160) -> S(520,160) */}
                  <line
                    x1="80" y1="160" x2="220" y2="160"
                    stroke={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '#2dd4bf' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '5' : '2'}
                  />
                  <line
                    x1="220" y1="160" x2="380" y2="160"
                    stroke={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '#2dd4bf' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '5' : '2'}
                  />
                  <line
                    x1="380" y1="160" x2="520" y2="160"
                    stroke={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '#2dd4bf' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 2 (R-B-C-S)' ? '5' : '2'}
                  />

                  {/* Jalur 3: R(80,160) -> D(200,250) -> E(400,250) -> S(520,160) */}
                  <line
                    x1="80" y1="160" x2="200" y2="250"
                    stroke={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '#fbbf24' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '5' : '2'}
                    strokeDasharray={selectedRoute === 'Jalur 3 (R-D-E-S)' ? 'none' : '4,4'}
                  />
                  <line
                    x1="200" y1="250" x2="400" y2="250"
                    stroke={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '#fbbf24' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '5' : '2'}
                    strokeDasharray={selectedRoute === 'Jalur 3 (R-D-E-S)' ? 'none' : '4,4'}
                  />
                  <line
                    x1="400" y1="250" x2="520" y2="160"
                    stroke={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '#fbbf24' : '#334155'}
                    strokeWidth={selectedRoute === 'Jalur 3 (R-D-E-S)' ? '5' : '2'}
                    strokeDasharray={selectedRoute === 'Jalur 3 (R-D-E-S)' ? 'none' : '4,4'}
                  />

                  {/* Weight Labels */}
                  <text x="180" y="105" fill="#94a3b8" fontSize="11" textAnchor="middle">Jalur 1: {metrics.r1.time} mnt</text>
                  <text x="300" y="150" fill="#94a3b8" fontSize="11" textAnchor="middle">Jalur 2: {metrics.r2.time} mnt</text>
                  <text x="300" y="275" fill="#94a3b8" fontSize="11" textAnchor="middle">Jalur 3: {metrics.r3.time} mnt</text>

                  {/* Nodes */}
                  {/* Rumah (R) */}
                  <circle cx="80" cy="160" r="18" fill="#2563eb" stroke="#ffffff" strokeWidth="3" />
                  <text x="80" y="165" fill="#ffffff" fontWeight="bold" fontSize="13" textAnchor="middle">R</text>
                  <text x="80" y="195" fill="#93c5fd" fontSize="11" textAnchor="middle">Rumah</text>

                  {/* Node A */}
                  <circle cx="300" cy="70" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  <text x="300" y="74" fill="#ffffff" fontSize="11" textAnchor="middle">A</text>
                  <text x="300" y="52" fill="#cbd5e1" fontSize="10" textAnchor="middle">Jl. Arteri</text>

                  {/* Node B & C */}
                  <circle cx="220" cy="160" r="12" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                  <text x="220" y="164" fill="#ffffff" fontSize="10" textAnchor="middle">B</text>
                  <circle cx="380" cy="160" r="12" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />
                  <text x="380" y="164" fill="#ffffff" fontSize="10" textAnchor="middle">C</text>

                  {/* Node D & E */}
                  <circle cx="200" cy="250" r="12" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                  <text x="200" y="254" fill="#ffffff" fontSize="10" textAnchor="middle">D</text>
                  <circle cx="400" cy="250" r="12" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                  <text x="400" y="254" fill="#ffffff" fontSize="10" textAnchor="middle">E</text>
                  <text x="300" y="295" fill="#cbd5e1" fontSize="10" textAnchor="middle">Tepi Sungai (Rawan Banjir)</text>

                  {/* Sekolah (S) */}
                  <circle cx="520" cy="160" r="18" fill="#059669" stroke="#ffffff" strokeWidth="3" />
                  <text x="520" y="165" fill="#ffffff" fontWeight="bold" fontSize="13" textAnchor="middle">S</text>
                  <text x="520" y="195" fill="#86efac" fontSize="11" textAnchor="middle">Sekolah</text>
                </svg>

                {hasEvaluated && (
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white px-3 py-1.5 rounded-lg border border-cyan-500/50 text-xs backdrop-blur-sm">
                    Rekomendasi Algoritma: <strong className="text-cyan-400">{selectedRoute}</strong> ({selectedRoute === 'Jalur 1 (R-A-S)' ? metrics.r1.time : selectedRoute === 'Jalur 2 (R-B-C-S)' ? metrics.r2.time : metrics.r3.time} menit)
                  </div>
                )}
              </div>
            </div>

            {/* Path Comparison Cards */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className={`p-3 rounded-lg border text-xs ${selectedRoute === 'Jalur 1 (R-A-S)' ? 'border-cyan-500 bg-cyan-50/50' : 'border-slate-200 bg-slate-50'}`}>
                <div className="font-semibold text-slate-800">Jalur 1 (Arteri Utama)</div>
                <div className="text-slate-500 mt-1">Jarak: {metrics.r1.distance}</div>
                <div className="font-mono text-cyan-700 font-bold mt-1 text-sm">{metrics.r1.time} mnt</div>
                <div className="text-[10px] text-slate-500 mt-1">{metrics.r1.safety}</div>
              </div>

              <div className={`p-3 rounded-lg border text-xs ${selectedRoute === 'Jalur 2 (R-B-C-S)' ? 'border-teal-500 bg-teal-50/50' : 'border-slate-200 bg-slate-50'}`}>
                <div className="font-semibold text-slate-800">Jalur 2 (Jalan Lingkungan)</div>
                <div className="text-slate-500 mt-1">Jarak: {metrics.r2.distance}</div>
                <div className="font-mono text-teal-700 font-bold mt-1 text-sm">{metrics.r2.time} mnt</div>
                <div className="text-[10px] text-slate-500 mt-1">{metrics.r2.safety}</div>
              </div>

              <div className={`p-3 rounded-lg border text-xs ${selectedRoute === 'Jalur 3 (R-D-E-S)' ? 'border-amber-500 bg-amber-50/50' : 'border-slate-200 bg-slate-50'}`}>
                <div className="font-semibold text-slate-800">Jalur 3 (Tepi Sungai)</div>
                <div className="text-slate-500 mt-1">Jarak: {metrics.r3.distance}</div>
                <div className="font-mono text-amber-700 font-bold mt-1 text-sm">{metrics.r3.time} mnt</div>
                <div className="text-[10px] text-slate-500 mt-1">{metrics.r3.safety}</div>
              </div>
            </div>
          </div>

          {/* Right Zone: Control Deck & Logic Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-600" /> Parameter Simulasi Nyata
              </h3>

              {/* Time Control */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Jam Keberangkatan</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['06:00', '06:30', '07:00'] as const).map(time => (
                    <button
                      key={time}
                      onClick={() => setDepartureTime(time)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${departureTime === time ? 'border-cyan-600 bg-cyan-50 text-cyan-900 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {time} {time === '06:30' ? '(Sibuk)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weather Control */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Kondisi Cuaca</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Cerah', 'Hujan Ringan', 'Hujan Lebat/Genangan'] as const).map(w => (
                    <button
                      key={w}
                      onClick={() => setWeather(w)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors text-center ${weather === w ? 'border-cyan-600 bg-cyan-50 text-cyan-900 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Transport Mode */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Moda Transportasi</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Sepeda/Motor', 'Jalan Kaki', 'Angkot'] as const).map(m => (
                    <button
                      key={m}
                      onClick={() => setTransportMode(m)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-colors ${transportMode === m ? 'border-cyan-600 bg-cyan-50 text-cyan-900 font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-cyan-400" />
                {isRunning ? 'Menghitung Graf Rute Tercepat...' : 'Jalankan Evaluasi Algoritma'}
              </button>
            </div>

            {/* Explanation card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-cyan-600" /> Mengapa Hasil Tersebut Muncul?
              </div>
              <p className="text-slate-600 leading-relaxed">
                {departureTime === '06:30' && weather === 'Hujan Lebat/Genangan'
                  ? 'Pada jam sibuk 06:30 disertai hujan lebat, Jalan Arteri (Jalur 1) mengalami kemacetan parah, sementara Jalur 3 terhambat genangan air. Oleh karena itu, Algoritma A* merekomendasikan Jalur 2 (Jalan Lingkungan) sebagai rute paling stabil dan aman.'
                  : departureTime === '06:00' && weather === 'Cerah'
                  ? 'Pada pagi hari lancar tanpa hujan, Jalur 1 (Jalan Arteri) menjadi pilihan tercepat karena memiliki jarak terpendek (4.2 km) dan hambatan lalu lintas masih minimum.'
                  : 'Sistem menyeimbangkan faktor jarak fisik dan bobot penalti (kemacetan jam sibuk serta faktor cuaca) menggunakan prinsip graf berbobot dinamis.'}
              </p>
            </div>

            {/* Reflection and save */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-800 block">
                Pertanyaan Refleksi Siswa:
              </label>
              <p className="text-xs text-slate-500">
                Bagaimana pilar Dekomposisi dan Abstraksi membantumu memutuskan rute yang logis dibanding sekadar tebak-tebakan?
              </p>
              <textarea
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="Tuliskan refleksi hasil praktikummu di sini..."
                rows={3}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-emerald-600 font-medium">{saveStatus}</span>
                <button
                  onClick={handleSavePortfolio}
                  className="py-1.5 px-4 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 transition-colors flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" /> Simpan Hasil Praktikum
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 5 Whys Analysis Workbench */
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-lg font-bold text-slate-900">Workbench Analisis Akar Masalah (Metode 5 Whys)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Metode bertanya "kenapa" sebanyak lima kali untuk menelusuri dari gejala permukaan hingga ke akar penyebab utama (buku teks Bab 1 hal. 8 & 20).
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Kasus / Gejala Masalah Utama:</label>
              <input
                type="text"
                value={fiveWhys.problem}
                onChange={(e) => setFiveWhys({ ...fiveWhys, problem: e.target.value })}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-slate-900"
              />
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {[
                { key: 'why1', label: '1. Kenapa? (Penyebab Langsung)', placeholder: 'Kenapa masalah tersebut terjadi?' },
                { key: 'why2', label: '2. Kenapa? (Penyebab Lanjutan)', placeholder: 'Kenapa penyebab pertama bisa timbul?' },
                { key: 'why3', label: '3. Kenapa? (Faktor Sistem/Proses)', placeholder: 'Kenapa proses tersebut tidak berjalan?' },
                { key: 'why4', label: '4. Kenapa? (Faktor Kebijakan/SOP)', placeholder: 'Kenapa belum ada SOP atau aturan penunjang?' },
                { key: 'why5', label: '5. Kenapa? (Akar Masalah Fundamental)', placeholder: 'Akar penyebab mendasar yang harus diselesaikan' }
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">{label}</label>
                  <input
                    type="text"
                    value={(fiveWhys as any)[key]}
                    onChange={(e) => setFiveWhys({ ...fiveWhys, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-800"
                  />
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              <div className="font-bold mb-1">Rekomendasi Solusi Berpikir Komputasional Berdasarkan Akar Masalah:</div>
              <p>
                Akar masalah menunjukkan perlunya penyusunan SOP digital, penjadwalan terkomputerisasi, dan pembagian alur tugas yang terukur agar masalah tidak berulang secara terus-menerus.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setFiveWhys({
                  problem: 'Siswa sering terlambat masuk sekolah pada hari Senin pagi',
                  why1: 'Pelayanan pembelian sarapan di kantin dan perjalanan jalan raya sangat padat.',
                  why2: 'Banyak kendaraan menumpuk di persimpangan jalan utama dan antrean kantin memanjang.',
                  why3: 'Tidak ada petugas pengatur lalu lintas di persimpangan dan loket kantin hanya buka satu.',
                  why4: 'Belum ada pembagian tugas giliran piket petugas kantin dan rekayasa jalur cepat.',
                  why5: 'Belum ada SOP manajemen alur layanan sekolah dan sosialisasi rute alternatif komputasional.'
                })}
                className="py-2 px-4 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Contoh
              </button>
              <button
                onClick={() => {
                  saveLabResult({
                    result_id: 'res-5whys-' + Date.now(),
                    lab_id: 'lab-01',
                    student_id: currentUser.user_id,
                    student_name: currentUser.full_name,
                    experiment_data: { fiveWhys },
                    result_summary: `Analisis 5 Whys untuk: ${fiveWhys.problem}`,
                    reflection: `Akar masalah: ${fiveWhys.why5}`,
                    saved_at: new Date().toISOString()
                  });
                  alert('Analisis 5 Whys berhasil disimpan ke Portofolio!');
                  if (onSaveSuccess) onSaveSuccess();
                }}
                className="py-2 px-5 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" /> Simpan Analisis 5 Whys
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
