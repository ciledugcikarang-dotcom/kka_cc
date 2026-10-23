import React, { useState } from 'react';
import { ClipboardCheck, Printer, Save, Award, CheckCircle, HelpCircle, School, FileCheck } from 'lucide-react';
import { AcademicSupervisionRecord, User } from '../../types';
import { getSupervisionRecords, saveSupervisionRecord } from '../../services/apiService';

interface SupervisionProps {
  currentUser: User;
}

export const AcademicSupervisionView: React.FC<SupervisionProps> = ({ currentUser }) => {
  const existingRecords = getSupervisionRecords();
  const [record, setRecord] = useState<AcademicSupervisionRecord>(
    existingRecords[0] || {
      supervision_id: 'spv-' + Date.now(),
      teacher_id: currentUser.user_id,
      teacher_name: currentUser.full_name,
      subject: 'Koding dan Kecerdasan Artifisial (KKA)',
      class_fase: 'Kelas X / Fase E (Semua Jurusan)',
      date: new Date().toISOString().split('T')[0],
      supervisor: 'SAIDUN, S.Pd., M.M.',
      c1_planning: [
        { no: 1, aspect: 'Tujuan Pembelajaran', indicator: 'Tujuan jelas, sesuai CP Kurikulum Merdeka, menekankan 5C', score: 4 },
        { no: 2, aspect: 'Materi', indicator: 'Materi sesuai konteks nyata dan mendorong keterkaitan lintas disiplin (STEAM)', score: 4 },
        { no: 3, aspect: 'Strategi Deep Learning', indicator: 'Rencana menggunakan pertanyaan mendalam, PjBL/PBL, diskusi', score: 4 },
        { no: 4, aspect: 'Diferensiasi', indicator: 'Rencana memfasilitasi perbedaan kemampuan, minat, dan gaya belajar murid', score: 4 }
      ],
      c2_execution: [
        { no: 1, aspect: 'Kegiatan Pendahuluan', indicator: 'Membuka dengan motivasi, menghubungkan pengalaman murid, memunculkan pertanyaan pemantik', score: 4 },
        { no: 2, aspect: 'Interaksi Guru-Murid', indicator: 'Guru memfasilitasi, bukan mendominasi, memberi ruang eksplorasi ide murid', score: 4 },
        { no: 3, aspect: 'Aktivitas Murid', indicator: 'Murid aktif bertanya, berdiskusi, berpikir kritis, dan menyelesaikan masalah nyata', score: 4 },
        { no: 4, aspect: 'Kolaborasi', indicator: 'Ada kerja kelompok, Peer Learning, atau kolaborasi lintas tema', score: 4 },
        { no: 5, aspect: 'Pemanfaatan Teknologi & Sumber Belajar', indicator: 'Guru menggunakan platform digital KKA Learning Lab yang mendukung Deep Learning', score: 4 }
      ],
      c3_deep_learning_5c: [
        { no: 1, aspect: 'Critical Thinking', indicator: 'Guru menstimulasi murid dengan pertanyaan tingkat tinggi (HOTS)', score: 4 },
        { no: 2, aspect: 'Creativity', indicator: 'Murid menghasilkan produk/ide baru dari pembelajaran', score: 4 },
        { no: 3, aspect: 'Collaboration', indicator: 'Terjadi interaksi positif antar murid dalam menyelesaikan tugas/proyek', score: 4 },
        { no: 4, aspect: 'Communication', indicator: 'Murid mampu menyampaikan gagasan secara lisan/tulisan dengan baik', score: 4 },
        { no: 5, aspect: 'Connection to Real Life', indicator: 'Pembelajaran terhubung dengan isu nyata, lingkungan, atau kehidupan sehari-hari murid', score: 4 }
      ],
      c4_assessment_reflection: [
        { no: 1, aspect: 'Asesmen Formatif', indicator: 'Digunakan untuk memantau proses, guru memberi umpan balik konstruktif', score: 4 },
        { no: 2, aspect: 'Asesmen Sumatif', indicator: 'Penilaian berbasis proyek, portofolio, presentasi, atau produk nyata', score: 4 },
        { no: 3, aspect: 'Refleksi Guru', indicator: 'Guru melakukan refleksi terhadap proses dan hasil pembelajaran', score: 4 },
        { no: 4, aspect: 'Refleksi Murid', indicator: 'Murid diberi kesempatan untuk merefleksi apa yang sudah dipelajari dan tantangan yang dihadapi', score: 4 }
      ],
      supervisor_notes: {
        planning: 'Perencanaan modul ajar sangat terstruktur dan kontekstual.',
        execution: 'Suasana kelas hidup dengan simulasi lab interaktif.',
        deep_learning: '5C terimplementasi nyata dalam penyelesaian kasus sampah dan rute jalan.',
        assessment: 'Rubrik penilaian 8 kriteria sangat transparan.'
      },
      followup_recommendations: {
        for_teacher: 'Pertahankan metode scaffolding pada praktikum koding.',
        for_student: 'Terus aktif bereksplorasi di laboratorium digital.',
        for_school: 'Fasilitasi kelengkapan komputer dan jaringan di laboratorium.'
      },
      school_programs: ['Adiwiyata', 'Gapura Pancawaluya', 'Gerakan Indonesia ASRI', 'Literasi dan Numerasi', 'SimPel'],
      status: 'final'
    }
  );

  const [savedNote, setSavedNote] = useState<string | null>(null);

  const calculateTotal = (items: { score: number }[]) => {
    return items.reduce((acc, curr) => acc + curr.score, 0);
  };

  const c1Total = calculateTotal(record.c1_planning);
  const c2Total = calculateTotal(record.c2_execution);
  const c3Total = calculateTotal(record.c3_deep_learning_5c);
  const c4Total = calculateTotal(record.c4_assessment_reflection);
  const grandTotal = c1Total + c2Total + c3Total + c4Total;
  const maxScore = (4 + 5 + 5 + 4) * 4; // 18 items * 4 = 72
  const finalPercentage = Math.round((grandTotal / maxScore) * 100);

  const handleScoreChange = (category: 'c1_planning' | 'c2_execution' | 'c3_deep_learning_5c' | 'c4_assessment_reflection', index: number, score: 1 | 2 | 3 | 4) => {
    const list = [...record[category]];
    list[index].score = score;
    setRecord({ ...record, [category]: list });
  };

  const handleSave = () => {
    saveSupervisionRecord(record, currentUser);
    setSavedNote('Instrumen supervisi akademik berhasil disimpan!');
    setTimeout(() => setSavedNote(null), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Bar */}
      <div className="no-print bg-slate-900 text-white p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">Administrasi Supervisi Akademik</div>
          <h2 className="text-2xl font-bold mt-1">Instrumen Supervisi Kurikulum Merdeka (Deep Learning)</h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Sesuai format resmi instrumen supervisi akademik berbasis Pembelajaran Bermakna, Berkesadaran, Menggembirakan (5C) &amp; integrasi program sekolah.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
          >
            <Printer className="w-4 h-4 text-cyan-400" /> Cetak / Unduh Dokumen
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" /> Simpan Instrumen
          </button>
        </div>
      </div>

      {savedNote && (
        <div className="no-print bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-lg text-xs font-semibold">
          {savedNote}
        </div>
      )}

      {/* Official Form Sheet (Print Friendly) */}
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs text-slate-800">
        {/* Formal School Header */}
        <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Pemerintah Daerah Provinsi Jawa Barat · Dinas Pendidikan
          </div>
          <div className="text-lg font-bold text-slate-900 uppercase">
            Cabang Dinas Pendidikan Wilayah X · SMK NEGERI 3 KUNINGAN
          </div>
          <div className="text-[11px] text-slate-600">
            Jalan Raya Cirendang - Cigugur Kabupaten Kuningan · Telp: (0232) 876833 · Website: smkn3kuningan.sch.id
          </div>
          <div className="pt-2">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 inline-block border-b border-slate-800 pb-0.5">
              Instrumen Supervisi Akademik Kurikulum Merdeka dengan Pendekatan Deep Learning
            </h3>
          </div>
        </div>

        {/* Section A: Identitas */}
        <div className="space-y-2">
          <div className="font-bold text-slate-900 text-sm">A. IDENTITAS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-32 font-semibold text-slate-600">Nama Guru:</span>
              <input
                type="text"
                value={record.teacher_name}
                onChange={(e) => setRecord({ ...record, teacher_name: e.target.value })}
                className="flex-1 p-1 bg-white border border-slate-300 rounded font-medium"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 font-semibold text-slate-600">Mata Pelajaran:</span>
              <input
                type="text"
                value={record.subject}
                onChange={(e) => setRecord({ ...record, subject: e.target.value })}
                className="flex-1 p-1 bg-white border border-slate-300 rounded font-medium"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 font-semibold text-slate-600">Kelas / Fase:</span>
              <input
                type="text"
                value={record.class_fase}
                onChange={(e) => setRecord({ ...record, class_fase: e.target.value })}
                className="flex-1 p-1 bg-white border border-slate-300 rounded font-medium"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 font-semibold text-slate-600">Hari / Tanggal:</span>
              <input
                type="date"
                value={record.date}
                onChange={(e) => setRecord({ ...record, date: e.target.value })}
                className="flex-1 p-1 bg-white border border-slate-300 rounded font-medium"
              />
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <span className="w-32 font-semibold text-slate-600">Supervisor:</span>
              <input
                type="text"
                value={record.supervisor}
                onChange={(e) => setRecord({ ...record, supervisor: e.target.value })}
                className="flex-1 p-1 bg-white border border-slate-300 rounded font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section B: Fokus Supervisi */}
        <div className="space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="font-bold text-slate-900 text-xs">B. FOKUS SUPERVISI</div>
          <ol className="list-decimal pl-5 text-slate-600 space-y-0.5 leading-relaxed">
            <li>Perencanaan Pembelajaran (RPP / Modul Ajar Kurikulum Merdeka)</li>
            <li>Pelaksanaan Pembelajaran di Kelas (Proses Belajar-Mengajar)</li>
            <li>Penerapan Deep Learning (Pembelajaran Bermakna, Berkesadaran, Menggembirakan)</li>
            <li>Asesmen dan Refleksi (Penilaian dan Tindak Lanjut)</li>
          </ol>
        </div>

        {/* C.1 Perencanaan Pembelajaran */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
            <span>C.1 PERENCANAAN PEMBELAJARAN</span>
            <span className="text-cyan-700 font-mono">Skor C1: {c1Total} / 16</span>
          </div>
          <table className="w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 w-10 text-center">No</th>
                <th className="border border-slate-300 p-2 w-48 text-left">Aspek</th>
                <th className="border border-slate-300 p-2 text-left">Indikator</th>
                <th className="border border-slate-300 p-2 w-28 text-center">Skor (1 - 4)</th>
              </tr>
            </thead>
            <tbody>
              {record.c1_planning.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-mono">{item.no}</td>
                  <td className="border border-slate-300 p-2 font-semibold text-slate-900">{item.aspect}</td>
                  <td className="border border-slate-300 p-2 text-slate-600">{item.indicator}</td>
                  <td className="border border-slate-300 p-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleScoreChange('c1_planning', idx, num as any)}
                          className={`w-6 h-6 rounded text-xs font-mono font-bold transition-colors ${item.score === num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* C.2 Pelaksanaan Pembelajaran */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
            <span>C.2 PELAKSANAAN PEMBELAJARAN</span>
            <span className="text-cyan-700 font-mono">Skor C2: {c2Total} / 20</span>
          </div>
          <table className="w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 w-10 text-center">No</th>
                <th className="border border-slate-300 p-2 w-48 text-left">Aspek</th>
                <th className="border border-slate-300 p-2 text-left">Indikator</th>
                <th className="border border-slate-300 p-2 w-28 text-center">Skor (1 - 4)</th>
              </tr>
            </thead>
            <tbody>
              {record.c2_execution.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-mono">{item.no}</td>
                  <td className="border border-slate-300 p-2 font-semibold text-slate-900">{item.aspect}</td>
                  <td className="border border-slate-300 p-2 text-slate-600">{item.indicator}</td>
                  <td className="border border-slate-300 p-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleScoreChange('c2_execution', idx, num as any)}
                          className={`w-6 h-6 rounded text-xs font-mono font-bold transition-colors ${item.score === num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* C.3 Penerapan Deep Learning 5C */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
            <span>C.3 PENERAPAN DEEP LEARNING (5C)</span>
            <span className="text-cyan-700 font-mono">Skor C3: {c3Total} / 20</span>
          </div>
          <table className="w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 w-10 text-center">No</th>
                <th className="border border-slate-300 p-2 w-48 text-left">Aspek</th>
                <th className="border border-slate-300 p-2 text-left">Indikator</th>
                <th className="border border-slate-300 p-2 w-28 text-center">Skor (1 - 4)</th>
              </tr>
            </thead>
            <tbody>
              {record.c3_deep_learning_5c.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-mono">{item.no}</td>
                  <td className="border border-slate-300 p-2 font-semibold text-slate-900 italic">{item.aspect}</td>
                  <td className="border border-slate-300 p-2 text-slate-600">{item.indicator}</td>
                  <td className="border border-slate-300 p-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleScoreChange('c3_deep_learning_5c', idx, num as any)}
                          className={`w-6 h-6 rounded text-xs font-mono font-bold transition-colors ${item.score === num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* C.4 Asesmen dan Refleksi */}
        <div className="space-y-2">
          <div className="flex items-center justify-between font-bold text-slate-900 text-xs">
            <span>C.4 ASESMEN DAN REFLEKSI</span>
            <span className="text-cyan-700 font-mono">Skor C4: {c4Total} / 16</span>
          </div>
          <table className="w-full border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-300 p-2 w-10 text-center">No</th>
                <th className="border border-slate-300 p-2 w-48 text-left">Aspek</th>
                <th className="border border-slate-300 p-2 text-left">Indikator</th>
                <th className="border border-slate-300 p-2 w-28 text-center">Skor (1 - 4)</th>
              </tr>
            </thead>
            <tbody>
              {record.c4_assessment_reflection.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="border border-slate-300 p-2 text-center font-mono">{item.no}</td>
                  <td className="border border-slate-300 p-2 font-semibold text-slate-900">{item.aspect}</td>
                  <td className="border border-slate-300 p-2 text-slate-600">{item.indicator}</td>
                  <td className="border border-slate-300 p-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => handleScoreChange('c4_assessment_reflection', idx, num as any)}
                          className={`w-6 h-6 rounded text-xs font-mono font-bold transition-colors ${item.score === num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Score Summary Card */}
        <div className="bg-slate-900 text-white p-5 rounded-xl flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400">Total Akumulasi Skor Supervisi:</div>
            <div className="text-2xl font-bold font-mono text-cyan-400 mt-0.5">
              {grandTotal} / {maxScore} ({finalPercentage}%)
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-md font-bold">
              Predikat: {finalPercentage >= 90 ? 'Amat Baik (A)' : finalPercentage >= 80 ? 'Baik (B)' : 'Cukup (C)'}
            </span>
          </div>
        </div>

        {/* Section Catatan Supervisor & Rekomendasi */}
        <div className="space-y-4 pt-2">
          <div className="font-bold text-slate-900 text-sm">CATATAN &amp; REKOMENDASI TINDAK LANJUT SUPERVISOR</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="font-bold text-slate-800 block text-xs">Catatan Pembelajaran:</label>
              <textarea
                value={record.supervisor_notes.planning}
                onChange={(e) => setRecord({
                  ...record,
                  supervisor_notes: { ...record.supervisor_notes, planning: e.target.value }
                })}
                rows={3}
                className="w-full p-2 text-xs border border-slate-300 rounded bg-white"
              />
            </div>
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="font-bold text-slate-800 block text-xs">Rekomendasi Bagi Guru &amp; Sekolah:</label>
              <textarea
                value={record.followup_recommendations.for_teacher}
                onChange={(e) => setRecord({
                  ...record,
                  followup_recommendations: { ...record.followup_recommendations, for_teacher: e.target.value }
                })}
                rows={3}
                className="w-full p-2 text-xs border border-slate-300 rounded bg-white"
              />
            </div>
          </div>

          {/* School Programs Integration */}
          <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl space-y-1.5">
            <div className="font-bold text-teal-950 flex items-center gap-1.5 text-xs">
              <School className="w-4 h-4 text-teal-700" /> Integrasi Program Sekolah SMKN 3 Kuningan:
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Adiwiyata (Lingkungan)', 'Gapura Pancawaluya', 'Gerakan Indonesia ASRI', 'Literasi & Numerasi', 'S3 (Senyum Sapa Salam)', 'Simpanan Pelajar (SimPel)'].map((p, i) => (
                <span key={i} className="bg-white px-2.5 py-1 rounded-md text-[11px] font-semibold text-teal-900 border border-teal-300">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="pt-8 border-t border-slate-300 grid grid-cols-2 text-center text-xs">
          <div className="space-y-16">
            <div>Guru yang Disupervisi,</div>
            <div>
              <div className="font-bold underline uppercase">{record.teacher_name}</div>
              <div className="text-slate-500 font-mono">NIP. 198004152008011012</div>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              Kuningan, {record.date}<br />
              Supervisor Akademik,
            </div>
            <div>
              <div className="font-bold underline uppercase">SAIDUN, S.Pd., M.M.</div>
              <div className="text-slate-500 font-mono">NIP. 197009201994021002</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
