import React, { useState } from 'react';
import {
  FileText,
  Save,
  CheckCircle,
  Send,
  ArrowLeft,
  AlertCircle,
  Upload,
  Paperclip,
  Trash2,
  Table as TableIcon,
  Plus,
  RefreshCw,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { LKPDItem, LKPDResponse, User, FileAttachment } from '../../types';
import { saveLKPDResponse, getLKPDResponses } from '../../services/apiService';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { NotificationBanner } from '../common/NotificationBanner';

interface LKPDViewProps {
  lkpd: LKPDItem;
  currentUser: User;
  onBack: () => void;
  onSubmitted?: () => void;
}

export const LKPDDigitalView: React.FC<LKPDViewProps> = ({
  lkpd,
  currentUser,
  onBack,
  onSubmitted
}) => {
  const existingResponses = getLKPDResponses();
  const existing = existingResponses.find(
    r => r.lkpd_id === lkpd.lkpd_id && r.student_id === currentUser.user_id
  );

  const [formData, setFormData] = useState<Record<string, string>>(
    existing ? existing.response_data || {} : {}
  );

  // Table responses for table-type questions
  const [tableData, setTableData] = useState<Record<string, string[][]>>(
    existing?.table_data || {}
  );

  // File attachments for questions
  const [attachments, setAttachments] = useState<Record<string, FileAttachment>>(
    existing?.file_attachments || {}
  );

  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);

  const handleFieldChange = (qId: string, value: string) => {
    setFormData(prev => ({ ...prev, [qId]: value }));
  };

  // Table manipulation helper
  const handleTableCellChange = (qId: string, rowIdx: number, colIdx: number, val: string) => {
    setTableData(prev => {
      const currentRows = prev[qId] ? [...prev[qId].map(r => [...r])] : [
        ['', '', ''],
        ['', '', '']
      ];
      if (!currentRows[rowIdx]) currentRows[rowIdx] = [];
      currentRows[rowIdx][colIdx] = val;
      return { ...prev, [qId]: currentRows };
    });
  };

  const handleAddTableRow = (qId: string, numCols: number = 3) => {
    setTableData(prev => {
      const currentRows = prev[qId] ? [...prev[qId].map(r => [...r])] : [];
      const newRow = new Array(numCols).fill('');
      return { ...prev, [qId]: [...currentRows, newRow] };
    });
  };

  const handleRemoveTableRow = (qId: string, rowIdx: number) => {
    setTableData(prev => {
      const currentRows = prev[qId] ? [...prev[qId].map(r => [...r])] : [];
      if (currentRows.length <= 1) return prev;
      currentRows.splice(rowIdx, 1);
      return { ...prev, [qId]: currentRows };
    });
  };

  // File upload simulation (using client file reader)
  const handleFileUpload = (qId: string, file: File) => {
    setFileError(null);
    if (file.size > 5 * 1024 * 1024) {
      setFileError('Ukuran berkas melebihi 5 MB. Silakan kompres atau pilih berkas lain.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const attachment: FileAttachment = {
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        dataUrl: e.target?.result as string,
        uploaded_at: new Date().toISOString()
      };
      setAttachments(prev => ({ ...prev, [qId]: attachment }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = (qId: string) => {
    setAttachments(prev => {
      const updated = { ...prev };
      delete updated[qId];
      return updated;
    });
  };

  const handleSaveDraft = () => {
    const payload: LKPDResponse = {
      response_id: existing?.response_id || 'lkpdr-' + Date.now(),
      lkpd_id: lkpd.lkpd_id,
      student_id: currentUser.user_id,
      student_name: currentUser.full_name,
      class_id: currentUser.class_id || 'cls-umum',
      response_data: formData,
      table_data: tableData,
      file_attachments: attachments,
      submitted_at: new Date().toISOString(),
      status: 'Draf'
    };

    saveLKPDResponse(payload);
    setSaveStatus('Draf pengerjaan berhasil disimpan di browser!');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFileError(null);
    setShowConfirmModal(true);
  };

  const handleExecuteConfirmedSubmit = () => {
    setIsSubmitting(true);
    const isRevision = existing?.status === 'Perlu Revisi';

    setTimeout(() => {
      const payload: LKPDResponse = {
        response_id: existing?.response_id || 'lkpdr-' + Date.now(),
        lkpd_id: lkpd.lkpd_id,
        student_id: currentUser.user_id,
        student_name: currentUser.full_name,
        class_id: currentUser.class_id || 'cls-umum',
        response_data: formData,
        table_data: tableData,
        file_attachments: attachments,
        submitted_at: new Date().toISOString(),
        status: 'Terkirim',
        revision_notes: undefined // Reset revision state upon resubmission
      };

      saveLKPDResponse(payload);
      setIsSubmitting(false);
      setShowConfirmModal(false);
      setNotification({
        type: 'success',
        message: isRevision
          ? 'Perbaikan LKPD Digital berhasil dikirim ulang ke guru pengampu!'
          : 'LKPD Digital berhasil diserahkan ke guru untuk dinilai.'
      });
      if (onSubmitted) {
        setTimeout(onSubmitted, 1200);
      }
    }, 350);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Notifications */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {fileError && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{fileError}</span>
          </div>
          <button
            type="button"
            onClick={() => setFileError(null)}
            className="text-rose-600 font-bold hover:text-rose-800 text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar LKPD
        </button>

        {existing && (
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5 ${
                existing.status === 'Sudah Dinilai'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : existing.status === 'Perlu Revisi'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300 animate-pulse'
                  : existing.status === 'Terkirim'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {existing.status === 'Perlu Revisi' && <RefreshCw className="w-3.5 h-3.5 text-amber-700" />}
              {existing.status === 'Sudah Dinilai' && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
              Status: {existing.status} {existing.score !== undefined ? `· Nilai: ${existing.score}` : ''}
            </span>
          </div>
        )}
      </div>

      {/* Revision Request Banner if requested by teacher */}
      {existing?.status === 'Perlu Revisi' && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-2 border-amber-400 p-5 rounded-2xl text-xs space-y-2 text-amber-950 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <RefreshCw className="w-4 h-4 text-amber-700" />
            <span>Permintaan Perbaikan (Revisi) dari Guru Pengampu</span>
          </div>
          <p className="text-amber-900 leading-relaxed font-medium">
            Catatan Guru: &ldquo;{existing.revision_notes || 'Mohon lengkapi analisis pada bagian tabel dan kesimpulan.'}&rdquo;
          </p>
          <div className="text-[11px] text-amber-800 pt-1">
            Silakan perbaiki jawaban pada form di bawah ini, lalu klik tombol <strong>&ldquo;Kirim Ulang Hasil Revisi&rdquo;</strong>.
          </div>
        </div>
      )}

      {/* Main LKPD Document Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Document Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 md:p-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" /> Lembar Kerja Peserta Didik (LKPD) Digital KKA Kelas X
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-2 text-white">{lkpd.title}</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-4 border-t border-slate-800/80 text-slate-300">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Nama Peserta Didik:</span>
              <strong className="text-white">{currentUser.full_name}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">NIS / Kelas:</span>
              <strong className="text-white">
                {currentUser.student_number || '20261001'} ({currentUser.class_id || 'Kelas X'})
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Jurusan Keahlian:</span>
              <strong className="text-white">{currentUser.major || 'Semua Jurusan'}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Tahun Ajaran:</span>
              <strong className="text-white">2026/2027 Fase E</strong>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 space-y-6 text-xs text-slate-700">
          {/* Tujuan & Alat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600" /> Tujuan Pembelajaran:
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                {lkpd.learning_objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-teal-600" /> Alat &amp; Sumber Belajar:
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                {lkpd.tools_needed.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Masalah Pemantik */}
          <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl">
            <h4 className="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Masalah atau Pertanyaan Pemantik (Real-Life Case):
            </h4>
            <p className="text-amber-900 leading-relaxed">{lkpd.starter_problem}</p>
          </div>

          {/* Petunjuk & Langkah Kerja */}
          <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-xl space-y-1.5">
            <h4 className="font-bold text-blue-950 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" /> Petunjuk Pelaksanaan &amp; Langkah Kerja:
            </h4>
            <p className="text-blue-900 leading-relaxed">{lkpd.instructions}</p>
          </div>

          {/* Rubrik Penilaian LKPD Ringkas */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600" /> Rubrik Penilaian Asesmen LKPD:
              </h4>
              <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-semibold">
                Skor Maksimal: 100
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="p-2 bg-white rounded border border-slate-200">
                <div className="font-bold text-slate-800">1. Ketepatan Konsep</div>
                <div className="text-slate-500 text-[10px]">Bobot 30% (Analisis teori tepat sasaran)</div>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200">
                <div className="font-bold text-slate-800">2. Keruntutan Alur</div>
                <div className="text-slate-500 text-[10px]">Bobot 30% (Langkah logis & sistematis)</div>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200">
                <div className="font-bold text-slate-800">3. Solusi &amp; Inovasi</div>
                <div className="text-slate-500 text-[10px]">Bobot 25% (Aplikatif di kejuruan)</div>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200">
                <div className="font-bold text-slate-800">4. Refleksi Kritis</div>
                <div className="text-slate-500 text-[10px]">Bobot 15% (Kesimpulan mendalam)</div>
              </div>
            </div>
          </div>

          {/* Pertanyaan Pengerjaan LKPD (Multi-Format: Text, Choice, Table, File Upload) */}
          <div className="space-y-6 pt-2">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
              Langkah Kerja &amp; Lembar Jawaban Peserta Didik
            </h3>

            {lkpd.questions.map((q, idx) => {
              const currentTableRows = tableData[q.id] || [
                ['Komponen / Aspek', 'Kondisi Saat Ini', 'Solusi Rekomendasi'],
                ['1. Kasir / Petugas', 'Antrean lambat karena uang kembalian', 'Sediakan kasir khusus e-wallet QRIS'],
                ['2. Alur Pembayaran', 'Semua siswa datang serempak jam 10.00', 'Bagi jam istirahat bergilir antar jurusan']
              ];
              const fileAttached = attachments[q.id];

              return (
                <div key={q.id} className="space-y-3 bg-slate-50/70 p-4 md:p-5 rounded-xl border border-slate-200">
                  <div className="flex items-start justify-between gap-2">
                    <label className="font-bold text-slate-900 block text-xs leading-relaxed">
                      {idx + 1}. {q.question}
                    </label>
                    <span className="text-[10px] bg-slate-200/80 text-slate-700 px-2 py-0.5 rounded font-mono shrink-0">
                      Tipe: {q.type === 'table' ? 'Tabel Analisis' : q.type === 'choice' ? 'Pilihan' : q.type === 'file' ? 'Unggah Berkas' : 'Uraian'}
                    </span>
                  </div>

                  {/* 1. Tipe Text / Conclusion */}
                  {(q.type === 'text' || q.type === 'conclusion' || !q.type) && (
                    <textarea
                      value={formData[q.id] || ''}
                      onChange={(e) => handleFieldChange(q.id, e.target.value)}
                      placeholder={q.placeholder || 'Tuliskan jawaban sistematis Anda di sini...'}
                      rows={4}
                      className="w-full p-3 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 leading-relaxed font-sans"
                      required
                    />
                  )}

                  {/* 2. Tipe Choice */}
                  {q.type === 'choice' && (
                    <div className="space-y-2">
                      {(q.options || ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D']).map((opt, oIdx) => (
                        <label
                          key={oIdx}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                            formData[q.id] === opt
                              ? 'bg-cyan-50 border-cyan-500 font-semibold text-cyan-950'
                              : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`choice-${q.id}`}
                            value={opt}
                            checked={formData[q.id] === opt}
                            onChange={() => handleFieldChange(q.id, opt)}
                            className="text-cyan-600 focus:ring-cyan-500"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* 3. Tipe Table (Interactive Spreadsheet/Matrix) */}
                  {q.type === 'table' && (
                    <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-[11px] text-slate-600">
                        <span className="font-semibold flex items-center gap-1">
                          <TableIcon className="w-3.5 h-3.5 text-cyan-600" /> Matriks Analisis Data
                        </span>
                        <button
                          type="button"
                          onClick={() => handleAddTableRow(q.id, 3)}
                          className="py-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[10px] font-semibold flex items-center gap-1 transition-colors"
                        >
                          <Plus className="w-3 h-3" /> Tambah Baris
                        </button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border border-slate-200">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700">
                              <th className="p-2 border border-slate-200 text-left font-semibold">Kolom 1</th>
                              <th className="p-2 border border-slate-200 text-left font-semibold">Kolom 2</th>
                              <th className="p-2 border border-slate-200 text-left font-semibold">Kolom 3</th>
                              <th className="p-2 border border-slate-200 text-center w-12">Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentTableRows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cellVal, cIdx) => (
                                  <td key={cIdx} className="p-1 border border-slate-200">
                                    <input
                                      type="text"
                                      value={cellVal}
                                      onChange={(e) => handleTableCellChange(q.id, rIdx, cIdx, e.target.value)}
                                      placeholder="Isi sel..."
                                      className="w-full p-1.5 text-xs bg-slate-50/50 focus:bg-white border-0 rounded focus:ring-1 focus:ring-cyan-500"
                                    />
                                  </td>
                                ))}
                                <td className="p-1 border border-slate-200 text-center">
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveTableRow(q.id, rIdx)}
                                    className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                                    title="Hapus baris"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 4. Berkas / File Attachment Support */}
                  <div className="pt-1">
                    {!fileAttached ? (
                      <label className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-[11px] font-semibold text-slate-700 cursor-pointer transition-colors shadow-sm">
                        <Upload className="w-3.5 h-3.5 text-cyan-600" />
                        <span>Lampirkan Berkas / Screenshot (Opsional)</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) handleFileUpload(q.id, f);
                          }}
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-2.5 bg-cyan-50 border border-cyan-200 rounded-lg text-xs text-cyan-950">
                        <div className="flex items-center gap-2 truncate">
                          <Paperclip className="w-4 h-4 text-cyan-700 shrink-0" />
                          <span className="font-semibold truncate">{fileAttached.name}</span>
                          <span className="text-[10px] text-cyan-700 font-mono">
                            ({(fileAttached.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveFile(q.id)}
                          className="p-1 text-rose-600 hover:bg-rose-100 rounded transition-colors"
                          title="Hapus lampiran"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback from teacher if graded */}
          {existing?.status === 'Sudah Dinilai' && existing?.feedback && (
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
              <div className="font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Umpan Balik &amp; Evaluasi Guru:
              </div>
              <p className="text-emerald-900 leading-relaxed">{existing.feedback}</p>
              <div className="text-[11px] font-bold text-emerald-800 pt-1 font-mono">
                Nilai Akhir: {existing.score} / 100
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <div className="text-xs text-emerald-600 font-medium">
              {saveStatus}
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="flex-1 sm:flex-none py-2 px-4 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" /> Simpan Draf
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-none py-2 px-5 bg-cyan-600 text-white rounded-lg text-xs font-bold hover:bg-cyan-700 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                {existing?.status === 'Perlu Revisi' ? 'Kirim Ulang Hasil Revisi' : 'Kirim Jawaban LKPD'}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Confirmation Modal Before Submission */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        title={existing?.status === 'Perlu Revisi' ? 'Kirimkan Perbaikan LKPD?' : 'Konfirmasi Pengiriman LKPD Digital'}
        message={
          existing?.status === 'Perlu Revisi'
            ? 'Kirimkan perbaikan tugas LKPD ini ke guru mata pelajaran untuk proses penilaian ulang?'
            : `Apakah Anda yakin ingin menyerahkan LKPD "${lkpd.title}" sekarang? Pastikan seluruh isian langkah kerja telah Anda periksa dengan seksama.`
        }
        confirmLabel="Ya, Kirimkan Sekarang"
        cancelLabel="Periksa Lagi"
        variant="primary"
        isLoading={isSubmitting}
        onConfirm={handleExecuteConfirmedSubmit}
        onCancel={() => setShowConfirmModal(false)}
      />
    </div>
  );
};
