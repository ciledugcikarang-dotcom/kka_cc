import React, { useState } from 'react';
import { Play, RotateCcw, Save, ShieldAlert, CheckCircle, AlertTriangle, Eye, Volume2, Users, Sliders } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

export const LabPengenalanPolaEtika: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  const [activeTab, setActiveTab] = useState<'fitur_pola' | 'penjaga_kebersihan' | 'audit_bias_dataset'>('penjaga_kebersihan');

  // --- TAB 1: Fitur Pola Citra vs Suara ---
  const [sampleType, setSampleType] = useState<'harimau' | 'lagu'>('harimau');

  // --- TAB 2: Teachable Machine Penjaga Kebersihan (Buku Hal. 141) ---
  const [wasteItem, setWasteItem] = useState<{ name: string; type: 'Organik' | 'Anorganik' | 'B3'; icon: string; shape: string; color: string }>({
    name: 'Botol Plastik Bekas Minuman',
    type: 'Anorganik',
    icon: '🧴',
    shape: 'Silinder / Tabung',
    color: 'Biru Transparan'
  });

  const wasteSamples = [
    { name: 'Botol Plastik Bekas Minuman', type: 'Anorganik' as const, icon: '🧴', shape: 'Silinder / Tabung', color: 'Biru Transparan' },
    { name: 'Daun Kering Gugur Taman', type: 'Organik' as const, icon: '🍂', shape: 'Lonjong bergerigi', color: 'Cokelat Keemasan' },
    { name: 'Sisa Kulit Apel & Makanan', type: 'Organik' as const, icon: '🍎', shape: 'Bulat tak beraturan', color: 'Merah & Kuning' },
    { name: 'Kardus Pembungkus Paket', type: 'Anorganik' as const, icon: '📦', shape: 'Persegi / Kotak', color: 'Cokelat' },
    { name: 'Baterai Bekas Jam Dinding', type: 'B3' as const, icon: '🔋', shape: 'Silinder kecil berlogam', color: 'Perak / Hitam' }
  ];

  // --- TAB 3: Audit Bias Dataset Deteksi Wajah (Buku Hal. 165-167) ---
  // Demonstrasi bias representasi: jika data latih mayoritas satu kelompok, akurasi kelompok lain anjlok
  const [unmaskedRatio, setUnmaskedRatio] = useState<number>(85); // 85% data latih tanpa kacamata
  const maskedRatio = 100 - unmaskedRatio; // 15% berkacamata

  // Hitung akurasi model berdasarkan keterwakilan dataset
  const accNormal = Math.min(98, Math.round(75 + (unmaskedRatio * 0.23)));
  const accGlasses = Math.min(96, Math.max(45, Math.round(40 + (maskedRatio * 0.56))));

  // Reflection
  const [reflection, setReflection] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveResult = () => {
    if (!reflection.trim()) {
      alert('Tuliskan refleksi etika KA sebelum menyimpan.');
      return;
    }
    saveLabResult({
      result_id: 'res-pola-' + Date.now(),
      lab_id: 'lab-04',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        wasteItem,
        datasetRatios: { unmaskedRatio, maskedRatio },
        accuracies: { accNormal, accGlasses }
      },
      result_summary: `Audit Bias: Rasio data latih ${unmaskedRatio}% vs ${maskedRatio}% menghasilkan kesenjangan akurasi (${accNormal}% vs ${accGlasses}%). Penjaga Kebersihan: Klasifikasi ${wasteItem.name} (${wasteItem.type}).`,
      reflection,
      saved_at: new Date().toISOString()
    });
    setSaveStatus('Berhasil disimpan ke Portofolio!');
    setTimeout(() => setSaveStatus(null), 3000);
    if (onSaveSuccess) onSaveSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-amber-400 font-semibold tracking-wide uppercase">Laboratorium Pola &amp; Etika KA</div>
            <h2 className="text-2xl font-bold mt-1">Pengenalan Pola &amp; Audit Bias Algoritmik</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Eksperimen pemilahan sampah cerdas (Google Teachable Machine simulation) dan evaluasi bias dataset absensi sekolah berdasarkan prinsip etika SE Menkominfo No. 9 Tahun 2023.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'penjaga_kebersihan', label: '1. Teachable Machine Sampah' },
              { id: 'audit_bias_dataset', label: '2. Audit Bias Absensi' },
              { id: 'fitur_pola', label: '3. Fitur Citra vs Suara' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB 1: TEACHABLE MACHINE SAMPAH */}
      {activeTab === 'penjaga_kebersihan' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-sm font-bold text-slate-900">Simulasi Model KA Penjaga Kebersihan (Adiwiyata)</span>
                <span className="block text-xs text-slate-500">Mendeteksi jenis sampah berdasarkan ekstraksi fitur bentuk dan warna (Buku Hal. 141)</span>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-medium">Vision Classifier</span>
            </div>

            {/* Simulated Camera Feed Viewport */}
            <div className="relative bg-slate-950 rounded-xl p-6 border border-slate-800 h-64 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="text-6xl mb-3 animate-bounce">{wasteItem.icon}</div>
              <div className="text-white font-bold text-base">{wasteItem.name}</div>
              <div className="text-xs text-slate-400 mt-1">
                Fitur Terdeteksi: Bentuk [{wasteItem.shape}] · Warna [{wasteItem.color}]
              </div>

              {/* Bounding Box Overlay */}
              <div className="absolute inset-8 border-2 border-dashed border-cyan-400/60 rounded-lg pointer-events-none flex items-start justify-start p-2">
                <span className="bg-cyan-500 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  Objek: {wasteItem.type} (Akurasi 96%)
                </span>
              </div>
            </div>

            {/* Sample Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">Uji Coba Objek Sampah di Hadapan Kamera Sensor:</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {wasteSamples.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setWasteItem(item)}
                    className={`p-2 rounded-lg border text-left text-xs transition-colors flex items-center gap-2 ${wasteItem.name === item.name ? 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold' : 'border-slate-200 hover:bg-slate-50 text-slate-700'}`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="truncate">{item.name.split(' ')[0]} {item.name.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">Hasil Klasifikasi &amp; Rekomendasi Tempat Sampah</h4>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Organik (Sisa Makanan, Daun)</span>
                  <span className="font-mono">{wasteItem.type === 'Organik' ? '96%' : '4%'}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: wasteItem.type === 'Organik' ? '96%' : '4%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Anorganik (Plastik, Kertas, Kardus)</span>
                  <span className="font-mono">{wasteItem.type === 'Anorganik' ? '94%' : '5%'}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: wasteItem.type === 'Anorganik' ? '94%' : '5%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Limbah B3 (Baterai, Zat Kimia)</span>
                  <span className="font-mono">{wasteItem.type === 'B3' ? '98%' : '2%'}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: wasteItem.type === 'B3' ? '98%' : '2%' }}
                  />
                </div>
              </div>
            </div>

            {/* Bin recommendation */}
            <div className={`p-4 rounded-xl border text-xs ${wasteItem.type === 'Organik' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : wasteItem.type === 'Anorganik' ? 'bg-cyan-50 border-cyan-200 text-cyan-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
              <div className="font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Masukkan ke: Tong Sampah {wasteItem.type === 'Organik' ? 'Hijau (Organik/Kompos)' : wasteItem.type === 'Anorganik' ? 'Kuning (Daur Ulang)' : 'Merah (B3 Khusus)'}
              </div>
              <p className="mt-1 leading-relaxed">
                {wasteItem.type === 'Organik'
                  ? 'Sampah ini akan diolah menjadi pupuk kompos untuk tanaman lingkungan sekolah (Mendukung Program Adiwiyata).'
                  : wasteItem.type === 'Anorganik'
                  ? 'Sampah ini akan disalurkan ke Bank Sampah sekolah untuk dipadatkan dan didaur ulang.'
                  : 'PERINGATAN: Baterai mengandung zat logam berat berbahaya yang tidak boleh dicampur dengan sampah biasa!'}
              </p>
            </div>

            {/* Reflection */}
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Refleksi Penerapan KA:</label>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Mengapa otomatisasi pemilahan sampah dengan KA dapat membantu program Adiwiyata sekolah?"
                rows={2}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold">{saveStatus}</span>
                <button
                  onClick={handleSaveResult}
                  className="py-1.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" /> Simpan Hasil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AUDIT BIAS DATASET */}
      {activeTab === 'audit_bias_dataset' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="font-bold text-slate-900 text-sm">Simulasi Audit Bias: Sistem Absensi Pengenalan Wajah</h4>
              <p className="text-xs text-slate-500">Kaji bagaimana ketidakseimbangan data latih menyebabkan diskriminasi akurasi (Buku Hal. 165-167)</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Komposisi Data Latih Tanpa Kacamata:</span>
                  <span className="font-mono text-cyan-700 font-bold">{unmaskedRatio}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={unmaskedRatio}
                  onChange={(e) => setUnmaskedRatio(Number(e.target.value))}
                  className="w-full accent-cyan-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>50% (Seimbang / Ideal)</span>
                  <span>70% (Mulai Bias)</span>
                  <span>95% (Sangat Bias / Berbahaya)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Siswa Tanpa Kacamata (Data Mayoritas)</div>
                  <div className="text-2xl font-bold font-mono text-slate-800 mt-1">{accNormal}%</div>
                  <div className="text-[11px] text-emerald-600 font-medium mt-1">Akurasi Sangat Tinggi</div>
                </div>

                <div className={`p-4 rounded-xl border ${accGlasses < 70 ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-xs text-slate-500">Siswa Berkacamata (Data Minoritas: {maskedRatio}%)</div>
                  <div className={`text-2xl font-bold font-mono mt-1 ${accGlasses < 70 ? 'text-rose-700' : 'text-slate-800'}`}>
                    {accGlasses}%
                  </div>
                  <div className={`text-[11px] font-medium mt-1 ${accGlasses < 70 ? 'text-rose-600 font-bold' : 'text-emerald-600'}`}>
                    {accGlasses < 70 ? 'Peringatan: Risiko Salah Absen!' : 'Akurasi Memadai'}
                  </div>
                </div>
              </div>

              {unmaskedRatio > 70 && (
                <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-xs text-rose-900 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Temuan Audit Bias Algoritmik:</div>
                    <p className="mt-0.5 leading-relaxed">
                      Siswa yang memakai kacamata memiliki tingkat kegagalan verifikasi hingga {100 - accGlasses}%. Hal ini mencerminkan <strong>Bias Representasi</strong> dalam dataset latih yang tidak mencerminkan keragaman nyata di sekolah.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">6 Pedoman Etika KA Indonesia (SE Kominfo No. 9/2023)</h4>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-800">1. Inklusivitas &amp; Aksesibilitas:</strong>
                <p className="text-slate-600 mt-0.5">Teknologi harus dapat digunakan oleh semua siswa tanpa membeda-bedakan latar belakang fisik atau ekonomi.</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-800">2. Keamanan &amp; Privasi Data:</strong>
                <p className="text-slate-600 mt-0.5">Foto wajah siswa wajib dienkripsi dan tidak boleh disebarluaskan ke pihak ketiga tanpa izin wali murid.</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-800">3. Kemanusiaan &amp; Akuntabilitas:</strong>
                <p className="text-slate-600 mt-0.5">Keputusan kehadiran akhir tetap di tangan guru/wali kelas (human agency), bukan sistem otomatis semata.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FITUR CITRA VS SUARA */}
      {activeTab === 'fitur_pola' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h4 className="font-bold text-slate-900 text-sm">Tabel Komparasi Fitur: Pengenalan Pola Citra vs Pola Suara</h4>
            <p className="text-xs text-slate-500">Materi resmi Buku Teks KKA Bab 3 Hal. 110-113</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200 space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Eye className="w-4 h-4 text-blue-600" /> Pola Citra (Visual Pattern Recognition)
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                <li><strong>Bentuk (Shape):</strong> Geometri segitiga, kontur wajah, batas tepi objek.</li>
                <li><strong>Warna (Color):</strong> Spektrum RGB, saturasi warna oranye-hitam pada loreng harimau.</li>
                <li><strong>Tekstur (Texture):</strong> Pola permukaan halus, kasar, atau serat kain.</li>
                <li><strong>Kontur (Edge):</strong> Garis batas terluar pembeda subjek dari latar belakang.</li>
              </ul>
              <div className="text-[11px] text-blue-800 bg-blue-100/60 p-2 rounded">
                Penerapan nyata: Face ID absensi sekolah, OCR tulisan tangan, deteksi rambu jalan otonom.
              </div>
            </div>

            <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-200 space-y-3">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Volume2 className="w-4 h-4 text-teal-600" /> Pola Suara (Audio Pattern Recognition)
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                <li><strong>Frekuensi:</strong> Gelombang suara tinggi (pitch tinggi) atau rendah (bass).</li>
                <li><strong>Tempo:</strong> Kecepatan ketukan dan irama ucapan per menit.</li>
                <li><strong>Pitch:</strong> Nada tinggi rendahnya suara pembicara.</li>
                <li><strong>Timbre:</strong> Warna khas suara penyanyi (mengapa kamu tahu lagu hanya dari 3 detik intro).</li>
              </ul>
              <div className="text-[11px] text-teal-800 bg-teal-100/60 p-2 rounded">
                Penerapan nyata: Asisten suara (Google Assistant, Siri), transkripsi audio ASR otomatis.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
