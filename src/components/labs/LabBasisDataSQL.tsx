import React, { useState } from 'react';
import { Play, RotateCcw, Save, Database, Table, ArrowRight, CheckCircle, Terminal, HelpCircle, Key, Layers } from 'lucide-react';
import { saveLabResult } from '../../services/apiService';
import { User } from '../../types';

interface LabProps {
  currentUser: User;
  onSaveSuccess?: () => void;
}

interface BookRecord {
  id_buku: number;
  judul: string;
  penulis: string;
  penerbit: string;
  tahun: number;
}

const INITIAL_BOOKS: BookRecord[] = [
  { id_buku: 1, judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', penerbit: 'Bentang Pustaka', tahun: 2005 },
  { id_buku: 2, judul: 'Negeri 5 Menara', penulis: 'Ahmad Fuadi', penerbit: 'Gramedia', tahun: 2009 },
  { id_buku: 3, judul: 'Bumi', penulis: 'Tere Liye', penerbit: 'Gramedia', tahun: 2014 },
  { id_buku: 4, judul: 'Perahu Kertas', penulis: 'Dewi Lestari', penerbit: 'Bentang Pustaka', tahun: 2009 },
  { id_buku: 5, judul: 'Sembilu', penulis: 'Tasaro GK', penerbit: 'Mizan', tahun: 2020 }
];

export const LabBasisDataSQL: React.FC<LabProps> = ({ currentUser, onSaveSuccess }) => {
  const [activeTab, setActiveTab] = useState<'sql_phpmyadmin' | 'erd_relasi' | 'pivot_table'>('sql_phpmyadmin');

  // SQL State
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT * FROM db_perpustakaan.buku ORDER BY tahun DESC;');
  const [books, setBooks] = useState<BookRecord[]>([...INITIAL_BOOKS]);
  const [sqlFeedback, setSqlFeedback] = useState<{ message: string; success: boolean; rowsAffected?: number } | null>({
    message: 'MySQL returned 5 rows. (Query took 0.0004 seconds.)',
    success: true,
    rowsAffected: 5
  });

  const runSql = () => {
    const q = sqlQuery.trim();
    const upper = q.toUpperCase();

    if (upper.startsWith('SELECT')) {
      if (upper.includes("WHERE PENULIS = 'TASARO GK'")) {
        const filtered = INITIAL_BOOKS.filter(b => b.penulis.toLowerCase().includes('tasaro'));
        setBooks(filtered);
        setSqlFeedback({ message: `MySQL returned ${filtered.length} row(s). Filter WHERE penulis = 'Tasaro GK' sukses dieksekusi.`, success: true, rowsAffected: filtered.length });
      } else if (upper.includes('ORDER BY TAHUN DESC')) {
        const sorted = [...INITIAL_BOOKS].sort((a, b) => b.tahun - a.tahun);
        setBooks(sorted);
        setSqlFeedback({ message: `MySQL returned ${sorted.length} rows terurut berdasarkan tahun rilis terbaru (DESC).`, success: true, rowsAffected: sorted.length });
      } else if (upper.includes('ORDER BY TAHUN ASC')) {
        const sorted = [...INITIAL_BOOKS].sort((a, b) => a.tahun - b.tahun);
        setBooks(sorted);
        setSqlFeedback({ message: `MySQL returned ${sorted.length} rows terurut dari tahun terlama (ASC).`, success: true, rowsAffected: sorted.length });
      } else {
        setBooks([...INITIAL_BOOKS]);
        setSqlFeedback({ message: `MySQL returned ${INITIAL_BOOKS.length} rows. (Query SELECT * FROM db_perpustakaan.buku selesai.)`, success: true, rowsAffected: INITIAL_BOOKS.length });
      }
    } else if (upper.startsWith('INSERT INTO')) {
      const newBook: BookRecord = {
        id_buku: books.length + 1,
        judul: 'Koding & AI Kelas X',
        penulis: 'Dela Chaerani',
        penerbit: 'Pusat Perbukuan Kemendikdasmen',
        tahun: 2025
      };
      setBooks(prev => [...prev, newBook]);
      setSqlFeedback({ message: '1 row inserted. ID Buku baru: ' + (books.length + 1), success: true, rowsAffected: 1 });
    } else if (upper.startsWith('UPDATE')) {
      setBooks(prev => prev.map(b => b.id_buku === 3 ? { ...b, judul: 'Bumi Manusia (Edisi Revisi)' } : b));
      setSqlFeedback({ message: '1 row affected. Judul buku ID 3 berhasil diperbarui.', success: true, rowsAffected: 1 });
    } else if (upper.startsWith('CREATE TABLE')) {
      setSqlFeedback({ message: 'Table db_perpustakaan.buku berhasil dibuat dengan Primary Key id_buku AUTO_INCREMENT!', success: true });
    } else {
      setSqlFeedback({ message: 'Query SQL berhasil dieksekusi di server lokal MySQL.', success: true });
    }
  };

  // Pivot Table State (Buku Hal. 276 & 288)
  const [pivotMetric, setPivotMetric] = useState<'average' | 'min' | 'max' | 'count'>('average');

  // Reflection
  const [reflection, setReflection] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleSaveResult = () => {
    if (!reflection.trim()) {
      alert('Tuliskan refleksi hasil praktikum basis data sebelum menyimpan.');
      return;
    }
    saveLabResult({
      result_id: 'res-sql-' + Date.now(),
      lab_id: 'lab-06',
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      experiment_data: {
        lastQuery: sqlQuery,
        booksCount: books.length,
        pivotMetric
      },
      result_summary: `Praktikum SQL & Basis Data: Query [${sqlQuery}]. Pemahaman Relasi PK-FK & Analisis Pivot Table (${pivotMetric}).`,
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
            <div className="text-xs text-teal-400 font-semibold tracking-wide uppercase">Laboratorium Basis Data Digital &amp; SQL</div>
            <h2 className="text-2xl font-bold mt-1">phpMyAdmin SQL Studio, Relasi PK-FK &amp; Pivot Table</h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Praktik interaktif DDL/DML SQL, visualisasi tabel referensi versus transaksi terhubung Primary Key &amp; Foreign Key, serta pengolahan ringkasan lembar sebar.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'sql_phpmyadmin', label: '1. phpMyAdmin SQL' },
              { id: 'erd_relasi', label: '2. Relasi PK & FK' },
              { id: 'pivot_table', label: '3. Pivot Table' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB 1: PHPMYADMIN SQL STUDIO */}
      {activeTab === 'sql_phpmyadmin' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-bold text-slate-900">phpMyAdmin Emulator: db_perpustakaan</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">Server: 127.0.0.1:3306</span>
            </div>

            {/* SQL Query Presets */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Pilih Contoh Sintaks Buku Teks (Bab 6 Hal. 268-271):</label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'SELECT * (Urut Tahun Terbaru)', q: 'SELECT * FROM db_perpustakaan.buku ORDER BY tahun DESC;' },
                  { label: 'WHERE Penulis Tasaro GK', q: "SELECT * FROM db_perpustakaan.buku WHERE penulis = 'Tasaro GK';" },
                  { label: 'INSERT Record Baru', q: "INSERT INTO db_perpustakaan.buku (judul, penulis, penerbit, tahun) VALUES ('Koding & AI Kelas X', 'Dela Chaerani', 'Pusat Perbukuan Kemendikdasmen', 2025);" },
                  { label: 'UPDATE Judul Buku ID 3', q: "UPDATE db_perpustakaan.buku SET judul = 'Bumi Manusia (Edisi Revisi)' WHERE id_buku = 3;" },
                  { label: 'CREATE TABLE buku', q: `CREATE TABLE db_perpustakaan.buku (
  id_buku INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(100),
  penulis VARCHAR(50),
  penerbit VARCHAR(50),
  tahun YEAR
);` }
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSqlQuery(preset.q)}
                    className="py-1 px-2.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium border border-slate-200"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SQL Input Area */}
            <div>
              <textarea
                value={sqlQuery}
                onChange={(e) => setSqlQuery(e.target.value)}
                rows={4}
                className="w-full p-3 font-mono text-xs bg-slate-950 text-emerald-400 rounded-lg border border-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 leading-relaxed"
                spellCheck={false}
              />
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">Tanda titik koma (;) wajib di akhir perintah SQL.</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setBooks([...INITIAL_BOOKS]);
                      setSqlQuery('SELECT * FROM db_perpustakaan.buku ORDER BY tahun DESC;');
                      setSqlFeedback({ message: 'Tabel buku di-reset ke data default.', success: true, rowsAffected: 5 });
                    }}
                    className="py-1.5 px-3 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </button>
                  <button
                    onClick={runSql}
                    className="py-1.5 px-4 bg-teal-600 text-white rounded-lg text-xs font-bold hover:bg-teal-700 flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" /> Jalankan Query (Go)
                  </button>
                </div>
              </div>
            </div>

            {/* Server Feedback Box */}
            {sqlFeedback && (
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs text-emerald-900 font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{sqlFeedback.message}</span>
              </div>
            )}

            {/* Result Table */}
            <div>
              <div className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-teal-600" /> Hasil Data Tabel: db_perpustakaan.buku
              </div>
              <div className="border border-slate-200 rounded-lg overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono">
                      <th className="p-2 border-r border-slate-200">id_buku (PK)</th>
                      <th className="p-2 border-r border-slate-200">judul</th>
                      <th className="p-2 border-r border-slate-200">penulis</th>
                      <th className="p-2 border-r border-slate-200">penerbit</th>
                      <th className="p-2">tahun</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {books.map(b => (
                      <tr key={b.id_buku} className="hover:bg-slate-50">
                        <td className="p-2 border-r border-slate-100 font-bold text-teal-700">{b.id_buku}</td>
                        <td className="p-2 border-r border-slate-100 text-slate-900">{b.judul}</td>
                        <td className="p-2 border-r border-slate-100 text-slate-600">{b.penulis}</td>
                        <td className="p-2 border-r border-slate-100 text-slate-500">{b.penerbit}</td>
                        <td className="p-2 text-slate-500">{b.tahun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Rambu-rambu Penamaan &amp; Struktur SQL (Buku Hal. 264)</h4>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Deskriptif:</strong> Nama tabel mencerminkan isi data (misal: <code className="text-teal-700">buku</code> atau <code className="text-teal-700">peserta_didik</code>).</li>
                <li><strong>Tanpa Spasi:</strong> Gunakan garis bawah (_) sebagai pemisah kata pengganti spasi.</li>
                <li><strong>Hindari Kata Kunci SQL:</strong> Jangan gunakan kata <code className="text-teal-700">SELECT</code>, <code className="text-teal-700">TABLE</code>, atau <code className="text-teal-700">USER</code> sebagai nama kolom tanpa pembatas.</li>
                <li><strong>Primary Key Unik:</strong> Wajib ada untuk membedakan tiap baris record (misal: NIS atau NIK kependudukan).</li>
              </ul>
            </div>

            {/* Reflection and save */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <label className="text-xs font-bold text-slate-800 block">Refleksi Praktikum SQL:</label>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Bagaimana perintah SQL mempermudah pencarian jutaan buku di perpustakaan dalam sekejap mata?"
                rows={3}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <div className="flex items-center justify-between">
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

      {/* TAB 2: ERD & RELASI PK-FK */}
      {activeTab === 'erd_relasi' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h4 className="font-bold text-slate-900 text-sm">Visualisasi Hubungan Antartabel: Primary Key (PK) &amp; Foreign Key (FK)</h4>
            <p className="text-xs text-slate-500">Diagram Relasi Tabel Referensi (Induk) dan Tabel Transaksi (Buku Teks Gambar 6.2 Hal. 261)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Tabel Referensi: Peserta Didik */}
            <div className="md:col-span-4 bg-slate-950 text-white rounded-xl p-4 border border-slate-800 shadow-sm">
              <div className="bg-blue-600 text-white font-bold text-xs p-2 rounded-t-lg -mt-4 -mx-4 mb-3 flex items-center justify-between">
                <span>Tabel Referensi: Peserta Didik</span>
                <span className="text-[10px] bg-blue-700 px-1.5 py-0.5 rounded">Tabel Induk</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2 p-1.5 bg-blue-950/60 rounded border border-blue-500/40 text-blue-300">
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  <strong>PK: NIS (222080884)</strong>
                </div>
                <div className="p-1 text-slate-300 pl-6">Nama: Filindo</div>
                <div className="p-1 text-slate-300 pl-6">Jenis_Kelamin: Laki-Laki</div>
                <div className="p-1 text-slate-300 pl-6">Kelas: X DKV 1</div>
              </div>
            </div>

            {/* Connector */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-2">
              <div className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200 flex items-center gap-1.5">
                <span>Relasi 1 ke Banyak (1:N)</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 max-w-xs leading-relaxed">
                Satu peserta didik dapat meminjam <strong>banyak buku</strong>. Foreign Key (NIS) bertindak sebagai jembatan tanpa perlu menduplikasi nama dan kelas siswa berulang kali.
              </p>
            </div>

            {/* Tabel Transaksi: Peminjaman */}
            <div className="md:col-span-4 bg-slate-950 text-white rounded-xl p-4 border border-slate-800 shadow-sm">
              <div className="bg-teal-600 text-white font-bold text-xs p-2 rounded-t-lg -mt-4 -mx-4 mb-3 flex items-center justify-between">
                <span>Tabel Transaksi: Peminjaman</span>
                <span className="text-[10px] bg-teal-700 px-1.5 py-0.5 rounded">Aktivitas</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="p-1 text-slate-400 pl-6">id_pinjam (PK)</div>
                <div className="flex items-center gap-2 p-1.5 bg-teal-950/60 rounded border border-teal-500/40 text-teal-300">
                  <Key className="w-3.5 h-3.5 text-cyan-400" />
                  <strong>FK1: NIS (222080884)</strong>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-teal-950/60 rounded border border-teal-500/40 text-teal-300">
                  <Key className="w-3.5 h-3.5 text-cyan-400" />
                  <strong>FK2: id_buku (1)</strong>
                </div>
                <div className="p-1 text-slate-300 pl-6">Tanggal_Pinjam: 07-04-2026</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PIVOT TABLE */}
      {activeTab === 'pivot_table' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Simulasi Analisis Pivot Table Lembar Sebar (Spreadsheet)</h4>
              <p className="text-xs text-slate-500">Meringkas ribuan baris data nilai menjadi wawasan komparasi dua dimensi (Buku Hal. 276)</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 font-medium">Fungsi Agregasi:</span>
              <select
                value={pivotMetric}
                onChange={(e) => setPivotMetric(e.target.value as any)}
                className="p-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 font-bold text-slate-800"
              >
                <option value="average">Rata-Rata (AVERAGE)</option>
                <option value="min">Nilai Minimum (MIN)</option>
                <option value="max">Nilai Maksimum (MAX)</option>
                <option value="count">Jumlah Siswa (COUNT)</option>
              </select>
            </div>
          </div>

          {/* Pivot Cross-Tabulation */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-3 border-r border-slate-800">Kelas / Rombel</th>
                  <th className="p-3 border-r border-slate-800 text-center">Laki-Laki (L)</th>
                  <th className="p-3 border-r border-slate-800 text-center">Perempuan (P)</th>
                  <th className="p-3 text-center bg-teal-900/60">Grand Total ({pivotMetric.toUpperCase()})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                <tr>
                  <td className="p-3 font-bold text-slate-900 bg-slate-50 border-r">X DKV 1</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '82.4' : pivotMetric === 'min' ? '70' : pivotMetric === 'max' ? '95' : '18'}</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '86.1' : pivotMetric === 'min' ? '75' : pivotMetric === 'max' ? '98' : '18'}</td>
                  <td className="p-3 text-center font-bold text-teal-800 bg-teal-50/40">{pivotMetric === 'average' ? '84.2' : pivotMetric === 'min' ? '70' : pivotMetric === 'max' ? '98' : '36'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900 bg-slate-50 border-r">X AKL 1</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '79.8' : pivotMetric === 'min' ? '68' : pivotMetric === 'max' ? '92' : '15'}</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '85.4' : pivotMetric === 'min' ? '72' : pivotMetric === 'max' ? '96' : '20'}</td>
                  <td className="p-3 text-center font-bold text-teal-800 bg-teal-50/40">{pivotMetric === 'average' ? '82.6' : pivotMetric === 'min' ? '68' : pivotMetric === 'max' ? '96' : '35'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900 bg-slate-50 border-r">X TJKT 1</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '85.2' : pivotMetric === 'min' ? '74' : pivotMetric === 'max' ? '96' : '28'}</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '88.0' : pivotMetric === 'min' ? '80' : pivotMetric === 'max' ? '98' : '8'}</td>
                  <td className="p-3 text-center font-bold text-teal-800 bg-teal-50/40">{pivotMetric === 'average' ? '86.6' : pivotMetric === 'min' ? '74' : pivotMetric === 'max' ? '98' : '36'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900 bg-slate-50 border-r">X-1 SMA / MA</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '81.5' : pivotMetric === 'min' ? '65' : pivotMetric === 'max' ? '94' : '16'}</td>
                  <td className="p-3 text-center border-r">{pivotMetric === 'average' ? '84.8' : pivotMetric === 'min' ? '70' : pivotMetric === 'max' ? '97' : '18'}</td>
                  <td className="p-3 text-center font-bold text-teal-800 bg-teal-50/40">{pivotMetric === 'average' ? '83.1' : pivotMetric === 'min' ? '65' : pivotMetric === 'max' ? '97' : '34'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
