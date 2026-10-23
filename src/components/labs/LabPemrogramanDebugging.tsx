import React, { useState } from 'react';
import { Play, RotateCcw, Save, Bug, CheckCircle, Terminal, HelpCircle, Code } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

interface Scenario {
  id: string;
  title: string;
  language: 'Python' | 'C' | 'Java';
  category: 'Syntax Error' | 'Logic Error' | 'Runtime Error' | 'Program Lengkap';
  buggyCode: string;
  fixedCode: string;
  expectedBehavior: string;
  errorMessage?: string;
  errorExplanation: string;
  fixTip: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'py-syntax',
    title: 'Typo Fungsi Print (Buku Hal. 89)',
    language: 'Python',
    category: 'Syntax Error',
    buggyCode: `# Kesalahan Sintaks pada Python
pint("Halo dunia!")
usia = 16
print("Usia peserta didik:", usia)`,
    fixedCode: `# Kode yang telah diperbaiki
print("Halo dunia!")
usia = 16
print("Usia peserta didik:", usia)`,
    expectedBehavior: 'Mencetak teks ucapan selamat datang dan usia siswa ke layar.',
    errorMessage: `NameError: name 'pint' is not defined. Did you mean: 'print'? on line 2`,
    errorExplanation: 'Python tidak mengenali fungsi "pint". Sesuai aturan sintaksis Python, perintah output yang benar adalah "print".',
    fixTip: 'Ganti kata "pint" di baris kedua menjadi "print".'
  },
  {
    id: 'c-syntax',
    title: 'Titik Koma Hilang di Bahasa C (Buku Hal. 93)',
    language: 'C',
    category: 'Syntax Error',
    buggyCode: `#include <stdio.h>

int main() {
    printf("Halo Dunia")
    return 0;
}`,
    fixedCode: `#include <stdio.h>

int main() {
    printf("Halo Dunia");
    return 0;
}`,
    expectedBehavior: 'Mengompilasi program C dan menampilkan teks ke terminal.',
    errorMessage: `main.c: In function 'main':
main.c:4:25: error: expected ';' before 'return'
    printf("Halo Dunia")
                        ^
                        ;`,
    errorExplanation: 'Dalam bahasa pemrograman C, setiap pernyataan (statement) wajib diakhiri dengan tanda titik koma (;).',
    fixTip: 'Tambahkan tanda titik koma (;) di ujung baris printf("Halo Dunia").'
  },
  {
    id: 'c-logic',
    title: 'Operator Penjumlahan Tertukar (Buku Hal. 90)',
    language: 'C',
    category: 'Logic Error',
    buggyCode: `#include <stdio.h>

int main() {
    int a = 15;
    int b = 5;
    int hasil;

    // Harusnya menjumlahkan dua bilangan
    hasil = a - b;

    printf("Hasil penjumlahan: %d\\n", hasil);
    return 0;
}`,
    fixedCode: `#include <stdio.h>

int main() {
    int a = 15;
    int b = 5;
    int hasil;

    // Diperbaiki: gunakan operator penjumlahan (+)
    hasil = a + b;

    printf("Hasil penjumlahan: %d\\n", hasil);
    return 0;
}`,
    expectedBehavior: 'Program harus menghasilkan nilai 20 (15 + 5).',
    errorMessage: `[Program Selesai tanpa error] Output: Hasil penjumlahan: 10`,
    errorExplanation: 'Program berjalan tanpa error teknis, namun hasilnya 10 bukan 20. Ini adalah kesalahan logika karena pemrogram menulis "-" padahal tujuannya penjumlahan.',
    fixTip: 'Ganti operator minus (-) menjadi tanda tambah (+) pada baris "hasil = a + b;".'
  },
  {
    id: 'py-runtime-zero',
    title: 'Pembagian dengan Nol / ZeroDivisionError (Buku Hal. 91)',
    language: 'Python',
    category: 'Runtime Error',
    buggyCode: `# Program pembagian rata-rata
total_skor = 100
jumlah_ujian = 0

# Runtime error: pembagian dengan angka 0
rata_rata = total_skor / jumlah_ujian
print("Rata-rata:", rata_rata)`,
    fixedCode: `# Program pembagian rata-rata
total_skor = 100
jumlah_ujian = 4

# Diperbaiki: pembagi tidak boleh 0
rata_rata = total_skor / jumlah_ujian
print("Rata-rata:", rata_rata)`,
    expectedBehavior: 'Menghitung nilai rata-rata ujian.',
    errorMessage: `ZeroDivisionError: division by zero on line 6`,
    errorExplanation: 'Dalam matematika dan komputasi, bilangan tidak dapat dibagi dengan angka nol (0). Komputer melempar Runtime Error ketika operasi ini dijalankan.',
    fixTip: 'Ubah variabel pembagi jumlah_ujian agar bernilai lebih dari 0 sebelum melakukan pembagian.'
  },
  {
    id: 'py-runtime-type',
    title: 'TypeError: Penjumlahan String dan Integer (Buku Hal. 91 & 104)',
    language: 'Python',
    category: 'Runtime Error',
    buggyCode: `# Masukan data usia peserta didik
usia_teks = "16"
tambahan_tahun = 5

# Runtime error: tidak bisa menjumlahkan string dengan integer secara langsung
usia_masa_depan = usia_teks + tambahan_tahun
print("Usia masa depan:", usia_masa_depan)`,
    fixedCode: `# Masukan data usia peserta didik
usia_teks = "16"
tambahan_tahun = 5

# Diperbaiki dengan konversi tipe data int()
usia_masa_depan = int(usia_teks) + tambahan_tahun
print("Usia masa depan:", usia_masa_depan)`,
    expectedBehavior: 'Menjumlahkan angka 16 + 5 menghasilkan 21 tahun.',
    errorMessage: `TypeError: can only concatenate str (not "int") to str on line 6`,
    errorExplanation: 'Variabel usia_teks bertipe String (diapit tanda kutip). Python menolak menjumlahkan String secara matematis dengan Integer tanpa konversi int().',
    fixTip: 'Gunakan fungsi int(usia_teks) untuk mengonversi teks angka menjadi bilangan bulat sebelum dijumlahkan.'
  },
  {
    id: 'py-chatbot',
    title: 'Chatbot Asisten Sekolah Berbasis Kata Kunci (Buku Hal. 101)',
    language: 'Python',
    category: 'Program Lengkap',
    buggyCode: `# Chatbot Sederhana Asisten Sekolah
def respon_bot(pesan):
    pesan = pesan.lower()
    if "jadwal" in pesan:
        return "Jadwal pelajaran hari ini: KKA, Matematika, dan Bahasa Inggris."
    elif "istirahat" in pesan:
        return "Waktu istirahat pertama pukul 09.45 - 10.15 WIB."
    elif "guru" in pesan:
        return "Guru pengampu KKA adalah Ibu Dela dan Bapak Budi."
    elif "halo" in pesan or "hai" in pesan:
        return "Halo! Ada yang bisa saya bantu terkait informasi sekolah?"
    else:
        return "Maaf, kata kunci tidak dikenali. Coba tanyakan jadwal, istirahat, atau guru."

print(respon_bot("halo"))`,
    fixedCode: `# Chatbot Sederhana Asisten Sekolah
def respon_bot(pesan):
    pesan = pesan.lower()
    if "jadwal" in pesan:
        return "Jadwal pelajaran hari ini: KKA, Matematika, dan Bahasa Inggris."
    elif "istirahat" in pesan:
        return "Waktu istirahat pertama pukul 09.45 - 10.15 WIB."
    elif "guru" in pesan:
        return "Guru pengampu KKA adalah Ibu Dela dan Bapak Budi."
    elif "halo" in pesan or "hai" in pesan:
        return "Halo! Ada yang bisa saya bantu terkait informasi sekolah?"
    else:
        return "Maaf, kata kunci tidak dikenali. Coba tanyakan jadwal, istirahat, atau guru."

print(respon_bot("halo"))`,
    expectedBehavior: 'Merespons sapaan dan pertanyaan seputar jadwal sekolah.',
    errorExplanation: 'Program lengkap menggunakan percabangan if-elif-else bertingkat untuk mencocokkan kata kunci masukan siswa.',
    fixTip: 'Cobalah mengganti kata "halo" dengan "jadwal", "istirahat", atau "guru"!'
  }
];

export const LabPemrogramanDebugging: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('py-syntax');
  const currentScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  const [code, setCode] = useState<string>(currentScenario.buggyCode);
  const [outputConsole, setOutputConsole] = useState<string>('');
  const [consoleStatus, setConsoleStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isFixed, setIsFixed] = useState(false);
  const [reflection, setReflection] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    const scen = SCENARIOS.find(s => s.id === id) || SCENARIOS[0];
    setCode(scen.buggyCode);
    setOutputConsole('');
    setConsoleStatus('idle');
    setIsFixed(false);
  };

  const handleRunCode = () => {
    // Check if code matches fixed version
    const cleanCurrent = code.replace(/\s+/g, ' ').trim();
    const cleanFixed = currentScenario.fixedCode.replace(/\s+/g, ' ').trim();

    // Check specific bug markers
    let hasBug = false;
    let simulatedOutput = '';

    if (currentScenario.id === 'py-syntax') {
      if (code.includes('pint(')) {
        hasBug = true;
        simulatedOutput = currentScenario.errorMessage || 'SyntaxError';
      } else {
        simulatedOutput = `Halo dunia!\nUsia peserta didik: 16\n[Program Berhasil Dieksekusi - Kode Valid!]`;
      }
    } else if (currentScenario.id === 'c-syntax') {
      if (code.includes('printf("Halo Dunia")\n') || code.includes('printf("Halo Dunia")\r\n')) {
        hasBug = true;
        simulatedOutput = currentScenario.errorMessage || 'Compilation Error';
      } else {
        simulatedOutput = `Halo Dunia\n[Program C Selesai: Exit Code 0]`;
      }
    } else if (currentScenario.id === 'c-logic') {
      if (code.includes('hasil = a - b;')) {
        hasBug = true;
        simulatedOutput = `[Peringatan: Tidak ada error kompilasi, namun hasil keliru!]\nOutput: Hasil penjumlahan: 10\n(Hasil yang diharapkan: 20)`;
      } else {
        simulatedOutput = `Hasil penjumlahan: 20\n[Program C Selesai: Logika Perhitungan Benar!]`;
      }
    } else if (currentScenario.id === 'py-runtime-zero') {
      if (code.includes('jumlah_ujian = 0')) {
        hasBug = true;
        simulatedOutput = currentScenario.errorMessage || 'ZeroDivisionError';
      } else {
        simulatedOutput = `Rata-rata: 25.0\n[Program Berhasil Dieksekusi]`;
      }
    } else if (currentScenario.id === 'py-runtime-type') {
      if (code.includes('usia_teks + tambahan_tahun') && !code.includes('int(usia_teks)')) {
        hasBug = true;
        simulatedOutput = currentScenario.errorMessage || 'TypeError';
      } else {
        simulatedOutput = `Usia masa depan: 21\n[Program Berhasil Dieksekusi]`;
      }
    } else {
      // Chatbot
      simulatedOutput = `Halo! Ada yang bisa saya bantu terkait informasi sekolah?\n[Simulasi Visual Chatbot Berjalan Normal]`;
    }

    setOutputConsole(simulatedOutput);
    setConsoleStatus(hasBug ? 'error' : 'success');
    setIsFixed(!hasBug);
  };

  const handleApplyFix = () => {
    setCode(currentScenario.fixedCode);
    setOutputConsole('Kode telah otomatis diperbaiki. Silakan klik "Jalankan Kode" untuk memverifikasi!');
    setConsoleStatus('idle');
  };

  const handleSaveResult = () => {
    if (!reflection.trim()) {
      alert('Tuliskan refleksi hasil debugging sebelum menyimpan.');
      return;
    }
    saveLabResult({
      result_id: 'res-dbg-' + Date.now(),
      lab_id: 'lab-03',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        scenarioId: currentScenario.id,
        language: currentScenario.language,
        category: currentScenario.category,
        isFixed,
        codeSnippet: code
      },
      result_summary: `Debugging Selesai: Skenario ${currentScenario.title} (${currentScenario.category} dalam ${currentScenario.language}) berhasil diperbaiki dan diverifikasi.`,
      reflection,
      saved_at: new Date().toISOString()
    });
    setSaveStatus('Berhasil disimpan ke Portofolio!');
    setTimeout(() => setSaveStatus(null), 3000);
    if (onSaveSuccess) onSaveSuccess();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">Laboratorium Pemrograman & Debugging</div>
            <h2 className="text-2xl font-bold mt-1">Studio Analisis Kesalahan (Syntax, Logic & Runtime)</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Praktik langsung mendeteksi dan memperbaiki galat kode program dalam bahasa Python, C, dan Java berdasarkan buku teks resmi Kemendikdasmen 2025 Bab 2 Hal. 89-94.
            </p>
          </div>
          <span className="text-xs bg-slate-800 text-cyan-300 border border-slate-700 px-3 py-1.5 rounded-lg font-mono">
            Simulasi Visual Terbuka
          </span>
        </div>
      </div>

      {/* Scenario Selector Strip */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <label className="text-xs font-bold text-slate-700 block mb-2">Pilih Skenario Kasus Debugging:</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectScenario(s.id)}
              className={`p-2.5 rounded-lg text-left border transition-all text-xs ${selectedScenarioId === s.id ? 'border-cyan-600 bg-cyan-50/70 font-bold text-cyan-950 shadow-sm' : 'border-slate-200 hover:bg-slate-50 text-slate-700'}`}
            >
              <div className="flex items-center justify-between text-[10px] text-slate-500 mb-0.5">
                <span>{s.language}</span>
                <span className={`px-1 rounded text-[9px] ${s.category === 'Syntax Error' ? 'bg-rose-100 text-rose-800' : s.category === 'Logic Error' ? 'bg-amber-100 text-amber-800' : s.category === 'Runtime Error' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'}`}>
                  {s.category.split(' ')[0]}
                </span>
              </div>
              <div className="line-clamp-2 leading-tight">{s.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Editor & Console Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Code Editor */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="bg-slate-900 text-slate-300 px-4 py-2.5 flex items-center justify-between text-xs border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="font-mono font-semibold text-white">editor_{currentScenario.language.toLowerCase()}.code</span>
              <span className="text-[11px] text-slate-400">({currentScenario.category})</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleApplyFix}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium underline"
              >
                Lihat Solusi Perbaikan
              </button>
              <button
                onClick={() => setCode(currentScenario.buggyCode)}
                className="text-[11px] text-slate-400 hover:text-slate-200"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={12}
              className="w-full font-mono text-xs p-3 bg-slate-950 text-emerald-400 rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 leading-relaxed resize-none"
              spellCheck={false}
            />

            <div className="flex items-center justify-between pt-3">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
                <span>Tips: {currentScenario.fixTip}</span>
              </div>
              <button
                onClick={handleRunCode}
                className="py-2 px-5 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 transition-colors flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5" /> Jalankan &amp; Debug Kode
              </button>
            </div>
          </div>
        </div>

        {/* Right: Terminal Console & Diagnostic */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 shadow-sm flex flex-col h-72 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Terminal className="w-4 h-4 text-cyan-400" /> Konsol Eksekusi &amp; Error
              </div>
              {consoleStatus === 'success' && (
                <span className="text-emerald-400 text-xs flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Valid &amp; Berhasil
                </span>
              )}
              {consoleStatus === 'error' && (
                <span className="text-rose-400 text-xs flex items-center gap-1 font-semibold">
                  <Bug className="w-3.5 h-3.5" /> Error Terdeteksi
                </span>
              )}
            </div>

            <div className="flex-1 font-mono text-xs overflow-y-auto whitespace-pre-wrap leading-relaxed text-slate-300">
              {outputConsole || '// Klik tombol "Jalankan & Debug Kode" di sebelah kiri untuk melihat hasil kompilasi...'}
            </div>
          </div>

          {/* Explanation Card */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-xs space-y-2">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Bug className="w-4 h-4 text-amber-600" /> Penjelasan Diagnostik Buku:
            </div>
            <p className="text-slate-600 leading-relaxed">
              {currentScenario.errorExplanation}
            </p>
          </div>

          {/* Reflection */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <label className="text-xs font-bold text-slate-800 block">
              Refleksi Praktikum Debugging:
            </label>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Jelaskan apa yang kamu pelajari dari penanganan kesalahan kode ini..."
              rows={2}
              className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-emerald-600 font-medium">{saveStatus}</span>
              <button
                onClick={handleSaveResult}
                className="py-1.5 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" /> Simpan ke Portofolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
