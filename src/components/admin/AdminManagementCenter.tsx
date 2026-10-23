import React, { useState } from 'react';
import { Users, BookOpen, Database, Shield, CheckCircle, AlertTriangle, Copy, Check, Upload, Download, RefreshCw, Plus, Edit2, UserCheck, UserX } from 'lucide-react';
import { User, ClassItem, AuditLog, GasConfig } from '../../types';
import {
  getUsers, saveUser, toggleUserStatus,
  getClasses, saveClass,
  getAuditLogs,
  getGasConfig, saveGasConfig, testGasConnection,
  exportToCsv, getAssignments
} from '../../services/apiService';
import { COMPLETE_PRODUCTION_CODE_GS } from '../../data/databaseSchema';
import { NotificationBanner } from '../common/NotificationBanner';

interface AdminProps {
  currentUser: User;
}

export const AdminManagementCenter: React.FC<AdminProps> = ({ currentUser }) => {
  const [tab, setTab] = useState<'users' | 'classes' | 'gas_database' | 'audit_logs' | 'backup'>('users');
  const [notification, setNotification] = useState<{
    type: 'success' | 'warning' | 'error' | 'info';
    message: string;
  } | null>(null);

  // Users State
  const [userList, setUserList] = useState<User[]>(getUsers());
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState<Partial<User>>({
    username: '',
    email: '',
    role: 'siswa',
    full_name: '',
    student_number: '',
    class_id: 'cls-dkv-1',
    major: 'Desain Komunikasi Visual',
    status: 'active'
  });

  // Classes State
  const [classList, setClassList] = useState<ClassItem[]>(getClasses());
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [newClass, setNewClass] = useState<Partial<ClassItem>>({
    class_name: '',
    grade: 'X',
    major: 'Desain Komunikasi Visual',
    academic_year: '2026/2027'
  });

  // GAS Config State
  const [gasConfig, setGasConfig] = useState<GasConfig>(getGasConfig());
  const [testResult, setTestResult] = useState<{ message: string; success: boolean } | null>(null);
  const [isTesting, setIsTesting] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  // Audit Logs
  const [auditLogs] = useState<AuditLog[]>(getAuditLogs());

  // Handle Add User
  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.username || !newUser.full_name) return;

    const userToSave: User = {
      user_id: 'usr-' + Date.now(),
      username: newUser.username.toLowerCase().trim(),
      email: newUser.email || `${newUser.username}@kkalab.sch.id`,
      role: newUser.role || 'siswa',
      full_name: newUser.full_name,
      student_number: newUser.student_number || '',
      class_id: newUser.class_id,
      major: newUser.major,
      status: 'active',
      created_at: new Date().toISOString()
    };

    const res = saveUser(userToSave, currentUser);
    if (res.success) {
      setUserList(getUsers());
      setShowAddUserModal(false);
      setNewUser({
        username: '',
        email: '',
        role: 'siswa',
        full_name: '',
        student_number: '',
        class_id: 'cls-dkv-1',
        major: 'Desain Komunikasi Visual',
        status: 'active'
      });
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  const handleToggleUser = (uId: string) => {
    toggleUserStatus(uId, currentUser);
    setUserList(getUsers());
  };

  // Handle Add Class
  const handleSaveClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClass.class_name) return;

    const classToSave: ClassItem = {
      class_id: 'cls-' + Date.now(),
      class_name: newClass.class_name,
      grade: 'X',
      major: newClass.major || 'Semua Jurusan',
      academic_year: newClass.academic_year || '2026/2027',
      total_students: 36
    };

    saveClass(classToSave, currentUser);
    setClassList(getClasses());
    setShowAddClassModal(false);
    setNewClass({ class_name: '', grade: 'X', major: 'Desain Komunikasi Visual', academic_year: '2026/2027' });
    setNotification({ type: 'success', message: 'Kelas rombel baru berhasil ditambahkan!' });
  };

  // Test GAS Connection
  const handleTestGas = async () => {
    setIsTesting(true);
    setTestResult(null);
    const res = await testGasConnection(gasConfig.webAppUrl);
    setIsTesting(false);
    setTestResult(res);

    if (res.success) {
      const updated: GasConfig = {
        ...gasConfig,
        isConnected: true,
        lastSyncAt: new Date().toISOString(),
        mode: 'connected'
      };
      setGasConfig(updated);
      saveGasConfig(updated);
      setNotification({ type: 'success', message: res.message });
    } else {
      setNotification({ type: 'error', message: res.message });
    }
  };

  const handleSaveGasUrlOnly = () => {
    saveGasConfig(gasConfig);
    setNotification({ type: 'success', message: 'Konfigurasi Google Sheets berhasil disimpan!' });
  };

  const handleCopyCodeGs = () => {
    navigator.clipboard.writeText(COMPLETE_PRODUCTION_CODE_GS);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  // Export User CSV
  const handleExportUsers = () => {
    const rows = [
      ['ID Pengguna', 'Username', 'Nama Lengkap', 'Role', 'Email', 'NIS/NIP', 'Kelas', 'Jurusan', 'Status', 'Tanggal Dibuat']
    ];
    userList.forEach(u => {
      rows.push([
        u.user_id,
        u.username,
        u.full_name,
        u.role,
        u.email,
        u.student_number || '',
        u.class_id || '',
        u.major || '',
        u.status,
        u.created_at
      ]);
    });
    exportToCsv(`Data_Pengguna_KKA_${new Date().toISOString().split('T')[0]}.csv`, rows);
  };

  return (
    <div className="space-y-6">
      {/* Notification Banner */}
      {notification && (
        <NotificationBanner
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">Konsol Administrator Sistem</div>
          <h2 className="text-2xl font-bold mt-1">Manajemen Pengguna, Kelas &amp; Koneksi Google Sheets</h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Kelola hak akses role Admin, Guru, dan Siswa, manajemen rombel lintas jurusan, serta integrasi backend Google Apps Script.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 ${gasConfig.isConnected ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}`}>
            <Database className="w-3.5 h-3.5" />
            {gasConfig.isConnected ? 'Google Sheets Terhubung' : 'MODE DEMO LOKAL'}
          </span>
        </div>
      </div>

      {/* Admin KPI Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-semibold">Total Pengguna Aktif</div>
          <div className="text-2xl font-bold text-slate-900 font-mono mt-1">{userList.filter(u => u.status === 'active').length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">{userList.filter(u => u.role === 'siswa').length} Siswa · {userList.filter(u => u.role === 'guru').length} Guru</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-semibold">Kelas &amp; Rombel X</div>
          <div className="text-2xl font-bold text-cyan-700 font-mono mt-1">{classList.length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Semua Jurusan SMA/SMK</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-semibold">Penugasan &amp; LKPD</div>
          <div className="text-2xl font-bold text-teal-700 font-mono mt-1">{getAssignments().length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Berjalan aktif semester ini</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs text-slate-500 font-semibold">Audit Logs Keamanan</div>
          <div className="text-2xl font-bold text-slate-800 font-mono mt-1">{auditLogs.length}</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Aktivitas sistem terekam</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4 text-xs font-bold text-slate-500 overflow-x-auto">
        <button
          onClick={() => setTab('users')}
          className={`pb-3 transition-colors border-b-2 whitespace-nowrap ${tab === 'users' ? 'border-cyan-600 text-cyan-700 font-bold' : 'border-transparent hover:text-slate-900'}`}
        >
          Pengguna &amp; Akun ({userList.length})
        </button>
        <button
          onClick={() => setTab('classes')}
          className={`pb-3 transition-colors border-b-2 whitespace-nowrap ${tab === 'classes' ? 'border-cyan-600 text-cyan-700 font-bold' : 'border-transparent hover:text-slate-900'}`}
        >
          Kelas &amp; Jurusan ({classList.length})
        </button>
        <button
          onClick={() => setTab('gas_database')}
          className={`pb-3 transition-colors border-b-2 whitespace-nowrap ${tab === 'gas_database' ? 'border-cyan-600 text-cyan-700 font-bold' : 'border-transparent hover:text-slate-900'}`}
        >
          Konfigurasi Google Sheets &amp; Backend GAS
        </button>
        <button
          onClick={() => setTab('audit_logs')}
          className={`pb-3 transition-colors border-b-2 whitespace-nowrap ${tab === 'audit_logs' ? 'border-cyan-600 text-cyan-700 font-bold' : 'border-transparent hover:text-slate-900'}`}
        >
          Audit Log Sistem ({auditLogs.length})
        </button>
      </div>

      {/* TAB 1: USERS */}
      {tab === 'users' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Daftar Akun Pengguna Terdaftar</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportUsers}
                className="py-1.5 px-3 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Ekspor CSV
              </button>
              <button
                onClick={() => setShowAddUserModal(true)}
                className="py-1.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" /> Tambah Pengguna
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono">
                    <th className="p-3 border-r border-slate-800">Nama Lengkap</th>
                    <th className="p-3 border-r border-slate-800">Username / Email</th>
                    <th className="p-3 border-r border-slate-800 text-center">Role</th>
                    <th className="p-3 border-r border-slate-800">NIS / NIP</th>
                    <th className="p-3 border-r border-slate-800">Kelas / Jurusan</th>
                    <th className="p-3 border-r border-slate-800 text-center">Status</th>
                    <th className="p-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {userList.map(u => (
                    <tr key={u.user_id} className="hover:bg-slate-50/70">
                      <td className="p-3 font-bold text-slate-900">{u.full_name}</td>
                      <td className="p-3 font-mono text-slate-600">{u.username} <span className="text-slate-400 block text-[10px]">{u.email}</span></td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${u.role === 'admin' ? 'bg-rose-100 text-rose-800' : u.role === 'guru' ? 'bg-indigo-100 text-indigo-800' : 'bg-cyan-100 text-cyan-800'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-slate-600">{u.student_number || '-'}</td>
                      <td className="p-3 text-slate-700">{u.class_id || '-'} <span className="text-slate-400 block text-[10px]">{u.major}</span></td>
                      <td className="p-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${u.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                          {u.status === 'active' ? 'Aktif' : 'Nonaktif'}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        {u.user_id !== currentUser.user_id && (
                          <button
                            onClick={() => handleToggleUser(u.user_id)}
                            className="py-1 px-2.5 border border-slate-300 rounded text-[11px] font-semibold text-slate-700 hover:bg-slate-100"
                          >
                            {u.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CLASSES */}
      {tab === 'classes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600">Daftar Rombel dan Konsentrasi Keahlian Kelas X</span>
            <button
              onClick={() => setShowAddClassModal(true)}
              className="py-1.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" /> Tambah Rombel Baru
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {classList.map(c => (
              <div key={c.class_id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">{c.class_name}</span>
                  <span className="text-xs text-slate-400 font-mono">{c.academic_year}</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">{c.major}</div>
                <div className="text-xs text-slate-500 pt-1 border-t border-slate-100 flex justify-between">
                  <span>Kapasitas:</span>
                  <span className="font-mono font-bold text-slate-700">{c.total_students || 36} Murid</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: GAS DATABASE */}
      {tab === 'gas_database' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Konfigurasi Google Apps Script (Backend) &amp; Google Sheets</h3>
                <p className="text-xs text-slate-500">
                  Hubungkan spreadsheet Anda sebagai pangkalan data utama 16 Sheet KKA Learning Lab.
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-bold font-mono ${gasConfig.isConnected ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                {gasConfig.isConnected ? 'TERHUBUNG KE SPREADSHEET' : 'MODE DEMO LOKAL AKTIF'}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Google Apps Script Web App URL (Deployment /exec):
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={gasConfig.webAppUrl}
                    onChange={(e) => setGasConfig({ ...gasConfig, webAppUrl: e.target.value })}
                    placeholder="https://script.google.com/macros/s/AKfycb.../exec"
                    className="flex-1 p-2 text-xs border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    onClick={handleTestGas}
                    disabled={isTesting}
                    className="py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
                    {isTesting ? 'Menguji...' : 'Uji Koneksi'}
                  </button>
                  <button
                    onClick={handleSaveGasUrlOnly}
                    className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Simpan URL
                  </button>
                </div>
              </div>

              {testResult && (
                <div className={`p-3 rounded-lg text-xs flex items-center gap-2 ${testResult.success ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-rose-50 border border-rose-200 text-rose-900'}`}>
                  {testResult.success ? <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />}
                  <span>{testResult.message}</span>
                </div>
              )}
            </div>
          </div>

          {/* Copy Script Code Section */}
          <div className="bg-slate-950 text-slate-200 p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs text-cyan-400 font-bold uppercase font-mono">// Kode Google Apps Script Siap Deploy (Code.gs)</span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Salin kode ini dan tempel di editor Google Apps Script spreadsheet Anda.
                </p>
              </div>
              <button
                onClick={handleCopyCodeGs}
                className="py-1.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedScript ? 'Kode Tersalin!' : 'Salin Seluruh Code.gs'}
              </button>
            </div>

            <pre className="text-xs font-mono bg-slate-900 p-4 rounded-lg overflow-x-auto max-h-72 text-cyan-300 leading-relaxed border border-slate-800">
              {COMPLETE_PRODUCTION_CODE_GS}
            </pre>
          </div>
        </div>
      )}

      {/* TAB 4: AUDIT LOGS */}
      {tab === 'audit_logs' && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Rekaman Audit Aktivitas Sistem (Keamanan &amp; Integritas)</span>
            <span className="text-xs text-slate-500 font-mono">100 Log Terbaru</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono">
                  <th className="p-3 border-r border-slate-800">Waktu (ISO)</th>
                  <th className="p-3 border-r border-slate-800">Pelaku (Actor)</th>
                  <th className="p-3 border-r border-slate-800">Aksi</th>
                  <th className="p-3 border-r border-slate-800">Tipe Objek</th>
                  <th className="p-3 border-r border-slate-800">Target ID</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {auditLogs.map(log => (
                  <tr key={log.log_id} className="hover:bg-slate-50">
                    <td className="p-3 text-slate-500 text-[11px]">{new Date(log.timestamp).toLocaleString('id-ID')}</td>
                    <td className="p-3 font-bold text-slate-800">{log.actor_name}</td>
                    <td className="p-3 text-cyan-700 font-semibold">{log.action}</td>
                    <td className="p-3 text-slate-600">{log.target_type}</td>
                    <td className="p-3 text-slate-400">{log.target_id}</td>
                    <td className="p-3 text-center text-emerald-600 font-bold">{log.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleSaveUser} className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 md:p-8 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Tambah Akun Pengguna Baru</h3>
              <button type="button" onClick={() => setShowAddUserModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Nama Lengkap:</label>
              <input
                type="text"
                value={newUser.full_name}
                onChange={(e) => setNewUser({ ...newUser, full_name: e.target.value })}
                required
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Username Login:</label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  required
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Role Akses:</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as any })}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 font-bold"
                >
                  <option value="siswa">Siswa</option>
                  <option value="guru">Guru</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">NIS / NIP:</label>
                <input
                  type="text"
                  value={newUser.student_number}
                  onChange={(e) => setNewUser({ ...newUser, student_number: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Kelas Rombel:</label>
                <select
                  value={newUser.class_id}
                  onChange={(e) => setNewUser({ ...newUser, class_id: e.target.value })}
                  className="w-full p-2 border border-slate-300 rounded-lg bg-slate-50"
                >
                  {classList.map(c => (
                    <option key={c.class_id} value={c.class_id}>{c.class_name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Konsentrasi Keahlian / Jurusan:</label>
              <input
                type="text"
                value={newUser.major}
                onChange={(e) => setNewUser({ ...newUser, major: e.target.value })}
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAddUserModal(false)}
                className="py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
              >
                Simpan Akun
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Class Modal */}
      {showAddClassModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleSaveClass} className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 md:p-8 space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Tambah Kelas / Rombel Baru</h3>
              <button type="button" onClick={() => setShowAddClassModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Nama Kelas (Contoh: X DKV 2, X Pemasaran 1):</label>
              <input
                type="text"
                value={newClass.class_name}
                onChange={(e) => setNewClass({ ...newClass, class_name: e.target.value })}
                required
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Bidang Keahlian / Jurusan:</label>
              <input
                type="text"
                value={newClass.major}
                onChange={(e) => setNewClass({ ...newClass, major: e.target.value })}
                required
                className="w-full p-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Tahun Ajaran:</label>
              <input
                type="text"
                value={newClass.academic_year}
                onChange={(e) => setNewClass({ ...newClass, academic_year: e.target.value })}
                required
                className="w-full p-2 border border-slate-300 rounded-lg font-mono"
              />
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAddClassModal(false)}
                className="py-2 px-4 border border-slate-300 rounded-lg text-slate-700 font-semibold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="py-2 px-5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold shadow-sm"
              >
                Simpan Rombel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
