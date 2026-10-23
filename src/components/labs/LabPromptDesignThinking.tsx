import React, { useState } from 'react';
import { Play, RotateCcw, Save, Sparkles, Copy, Check, ArrowRight, Lightbulb, Users, HeartHandshake } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

export const LabPromptDesignThinking: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  const [activeTab, setActiveTab] = useState<'pgtc_builder' | 'shot_comparison' | 'design_thinking_canvas'>('pgtc_builder');

  // PGTC Builder State (Buku Hal. 159-160)
  const [persona, setPersona] = useState('Guru Biologi SMA yang ramah dan inspiratif');
  const [goal, setGoal] = useState('Materi ringkas untuk pembelajaran daring yang interaktif');
  const [task, setTask] = useState('Buatkan penjelasan 3 tahap sistem pernapasan manusia disertai 2 pertanyaan pemantik');
  const [context, setContext] = useState('Ditujukan untuk peserta didik kelas X yang baru pertama kali mempelajari konsep respirasi sel');
  const [format, setFormat] = useState('Format: Poin-poin bernomor disertai kesimpulan ringkas');

  const [copied, setCopied] = useState(false);
  const compiledPrompt = `Kamu adalah ${persona}.
Tujuan: ${goal}.
Tugas: ${task}.
Konteks Pembaca: ${context}.
Format Jawaban: ${format}.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Zero-Shot vs Few-Shot State (Buku Hal. 149-155)
  const [shotTechnique, setShotTechnique] = useState<'zero' | 'one' | 'few'>('few');

  // Design Thinking 5 Stages Canvas (Buku Hal. 170-181)
  const [dtEmpathize, setDtEmpathize] = useState('Banyak siswa kelas X kesulitan memahami aljabar matematika dan koding karena materi terasa abstrak dan tidak terhubung dengan kehidupan nyata.');
  const [dtDefine, setDtDefine] = useState('Peserta didik kelas X membutuhkan representasi visual konkret yang mengaitkan persamaan logika dengan fenomena sehari-hari (seperti timbangan keseimbangan belanja).');
  const [dtIdeate, setDtIdeate] = useState('Membuat program simulasi interaktif "Timbangan Aljabar" (x + 3 = 7) dan video animasi pendek berdurasi 2 menit mengenai aljabar belanja.');
  const [dtPrototype, setDtPrototype] = useState('Prototipe program berbasis Python / Web sederhana dengan dua sisi timbangan: jika sisi kiri = sisi kanan maka "Timbangan Seimbang".');
  const [dtTest, setDtTest] = useState('Diujicobakan kepada 5 teman sekelas: 4 dari 5 siswa langsung memahami konsep mencari nilai x tanpa perlu menghafal rumus abstrak.');

  // Reflection
  const [reflection, setReflection] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveResult = () => {
    if (!reflection.trim()) {
      alert('Tuliskan refleksi sebelum menyimpan ke portofolio.');
      return;
    }
    saveLabResult({
      result_id: 'res-prompt-' + Date.now(),
      lab_id: 'lab-05',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        compiledPrompt,
        shotTechnique,
        designThinking: {
          empathize: dtEmpathize,
          define: dtDefine,
          ideate: dtIdeate,
          prototype: dtPrototype,
          test: dtTest
        }
      },
      result_summary: `Prompt PGTC disusun untuk persona [${persona}]. Solusi Design Thinking: Prototipe ${dtPrototype.substring(0, 60)}...`,
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
            <div className="text-xs text-emerald-400 font-semibold tracking-wide uppercase">Laboratorium Rekayasa Prompt &amp; Inovasi</div>
            <h2 className="text-2xl font-bold mt-1">Prompt Engineering PGTC &amp; Design Thinking Canvas</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Susun instruksi presisi untuk model bahasa besar (LLM) dengan formula PGTC dan rumuskan solusi teknologi yang berpusat pada manusia (Human-Centred Design).
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'pgtc_builder', label: '1. Builder Formula PGTC' },
              { id: 'shot_comparison', label: '2. Zero vs Few-Shot' },
              { id: 'design_thinking_canvas', label: '3. Kanvas Design Thinking' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB 1: PGTC BUILDER */}
      {activeTab === 'pgtc_builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-sm font-bold text-slate-900">Perancang Prompt Berbasis Kerangka Kerja PGTC</span>
                <span className="block text-xs text-slate-500">Persona, Goal, Task, Context (Buku Teks Hal. 159-160)</span>
              </div>
              <button
                onClick={() => {
                  setPersona('Guru Sejarah SMA abad 21');
                  setGoal('Menjelaskan dampak revolusi industri kepada siswa');
                  setTask('Jelaskan 3 dampak positif dan negatif Revolusi Industri dalam bentuk tabel');
                  setContext('Siswa kelas X SMK jurusan Bisnis & Manajemen');
                  setFormat('Tabel ringkas 2 kolom dengan bahasa lugas');
                }}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold underline"
              >
                Pakai Preset Sejarah
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  1. Persona (P) — Siapa peran yang dimainkan oleh model KA?
                </label>
                <input
                  type="text"
                  value={persona}
                  onChange={(e) => setPersona(e.target.value)}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  2. Goal (G) — Apa tujuan akhir dari instruksi ini?
                </label>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  3. Task (T) — Apa tugas spesifik yang wajib dikerjakan?
                </label>
                <textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  rows={2}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  4. Context (C) — Siapa audiens atau latar belakang situasinya?
                </label>
                <input
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  5. Format Luaran — Bagaimana struktur tampilan yang diinginkan?
                </label>
                <input
                  type="text"
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Compiled Prompt & Simulation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Prompt Terstruktur Siap Pakai
                </span>
                <button
                  onClick={handleCopyPrompt}
                  className="py-1 px-2.5 bg-slate-800 text-slate-300 hover:text-white rounded text-xs flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Tersalin!' : 'Salin Prompt'}
                </button>
              </div>

              <div className="font-mono text-xs whitespace-pre-wrap leading-relaxed bg-slate-900 p-3 rounded-lg text-emerald-300 border border-slate-800">
                {compiledPrompt}
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed">
                Prompt yang disusun secara terstruktur dengan formula PGTC mencegah jawaban acak atau halusinasi dari model kecerdasan artifisial.
              </div>
            </div>

            {/* Reflection card */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Refleksi Praktikum PGTC:</label>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Bagaimana penetapan Persona dan Context mengubah akurasi respons kecerdasan artifisial?"
                rows={2}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-emerald-600 font-semibold">{saveStatus}</span>
                <button
                  onClick={handleSaveResult}
                  className="py-1.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" /> Simpan Hasil ke Portofolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ZERO VS ONE VS FEW SHOT */}
      {activeTab === 'shot_comparison' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h4 className="font-bold text-slate-900 text-sm">Laboratorium Komparasi: Zero-Shot, One-Shot &amp; Few-Shot Prompting</h4>
            <p className="text-xs text-slate-500">Mempelajari pengaruh pemberian contoh acuan (shot) terhadap konsistensi model (Buku Hal. 149-155)</p>
          </div>

          <div className="flex gap-2">
            {[
              { id: 'zero', label: 'Zero-Shot (0 Contoh)' },
              { id: 'one', label: 'One-Shot (1 Contoh Acuan)' },
              { id: 'few', label: 'Few-Shot (2-3 Contoh Terpola)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setShotTechnique(tab.id as any)}
                className={`py-2 px-4 rounded-lg text-xs font-bold border transition-colors ${shotTechnique === tab.id ? 'border-emerald-600 bg-emerald-50 text-emerald-950' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-950 text-slate-200 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase">// Prompt Input yang Dikirim:</div>
              <div className="font-mono text-xs whitespace-pre-wrap leading-relaxed text-slate-300">
                {shotTechnique === 'zero' && `Ubah kalimat aktif berikut menjadi pasif:
Ayah mencuci mobil.`}

                {shotTechnique === 'one' && `Ubah kalimat aktif berikut menjadi pasif.
Contoh:
Aktif: Peserta didik membaca buku.
Pasif: Buku dibaca oleh peserta didik.

Sekarang coba:
Aktif: Ayah mencuci mobil.
Pasif:`}

                {shotTechnique === 'few' && `Ubah kalimat aktif berikut menjadi kalimat pasif.
Contoh 1:
Aktif: Peserta didik membaca buku.
Pasif: Buku dibaca oleh peserta didik.

Contoh 2:
Aktif: Ibu memasak sayur.
Pasif: Sayur dimasak oleh ibu.

Sekarang coba:
Aktif: Ayah mencuci mobil.
Pasif:`}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs">
              <div className="font-bold text-slate-900">Analisis Kualitas Luaran:</div>
              <p className="text-slate-600 leading-relaxed">
                {shotTechnique === 'zero' && 'Pada Zero-Shot, model mungkin menjawab "Mobil dicuci oleh ayah", namun bisa juga menambahkan penjelasan gramatika yang tidak diminta. Format output kurang terstandarisasi.'}
                {shotTechnique === 'one' && 'Pada One-Shot, model mulai menangkap pola bahwa ia cukup mengembalikan satu baris kalimat pasif saja tanpa bertele-tele.'}
                {shotTechnique === 'few' && 'Pada Few-Shot, model memiliki akurasi dan konsistensi pola format tertinggi (99% konsisten). Sangat ideal untuk otomatisasi ekstraksi data, ringkasan terstruktur, atau pemrosesan massal.'}
              </p>
              <div className="bg-emerald-100/70 p-3 rounded-lg text-emerald-900 font-mono text-xs">
                Luaran Terprediksi: <strong>Pasif: Mobil dicuci oleh ayah.</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DESIGN THINKING CANVAS */}
      {activeTab === 'design_thinking_canvas' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Kanvas 5 Siklus Design Thinking (Human-Centred Innovation)</h4>
              <p className="text-xs text-slate-500">Menerapkan empati, rumusan masalah, ideasi, pembuatan prototipe, dan pengujian solusi (Buku Hal. 169-181)</p>
            </div>
            <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
              5 Tahap Terpadu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Stage 1 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Tahap 1</div>
                <div className="font-bold text-slate-900 text-xs mt-0.5">Empathize</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Mendengar kebutuhan pengguna</div>
                <textarea
                  value={dtEmpathize}
                  onChange={(e) => setDtEmpathize(e.target.value)}
                  rows={6}
                  className="w-full mt-2 p-2 text-[11px] border border-slate-300 rounded bg-white"
                />
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Tahap 2</div>
                <div className="font-bold text-slate-900 text-xs mt-0.5">Define</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Pernyataan masalah utama</div>
                <textarea
                  value={dtDefine}
                  onChange={(e) => setDtDefine(e.target.value)}
                  rows={6}
                  className="w-full mt-2 p-2 text-[11px] border border-slate-300 rounded bg-white"
                />
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Tahap 3</div>
                <div className="font-bold text-slate-900 text-xs mt-0.5">Ideate</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Eksplorasi solusi kreatif</div>
                <textarea
                  value={dtIdeate}
                  onChange={(e) => setDtIdeate(e.target.value)}
                  rows={6}
                  className="w-full mt-2 p-2 text-[11px] border border-slate-300 rounded bg-white"
                />
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Tahap 4</div>
                <div className="font-bold text-slate-900 text-xs mt-0.5">Prototype</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Wujud konkret solusi</div>
                <textarea
                  value={dtPrototype}
                  onChange={(e) => setDtPrototype(e.target.value)}
                  rows={6}
                  className="w-full mt-2 p-2 text-[11px] border border-slate-300 rounded bg-white"
                />
              </div>
            </div>

            {/* Stage 5 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Tahap 5</div>
                <div className="font-bold text-slate-900 text-xs mt-0.5">Test</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Uji coba &amp; umpan balik</div>
                <textarea
                  value={dtTest}
                  onChange={(e) => setDtTest(e.target.value)}
                  rows={6}
                  className="w-full mt-2 p-2 text-[11px] border border-slate-300 rounded bg-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                saveLabResult({
                  result_id: 'res-dt-' + Date.now(),
                  lab_id: 'lab-05',
                  student_id: currentUser.user_id,
                  student_name: currentUser.full_name,
                  experiment_data: { dtEmpathize, dtDefine, dtIdeate, dtPrototype, dtTest },
                  result_summary: `Design Thinking: Solusi prototipe ${dtPrototype.substring(0, 50)}...`,
                  reflection: 'Design Thinking mengajarkan kami berempati sebelum membuat teknologi.',
                  saved_at: new Date().toISOString()
                });
                alert('Kanvas Design Thinking berhasil disimpan ke Portofolio!');
                if (onSaveSuccess) onSaveSuccess();
              }}
              className="py-2 px-5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" /> Simpan Seluruh Kanvas ke Portofolio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
