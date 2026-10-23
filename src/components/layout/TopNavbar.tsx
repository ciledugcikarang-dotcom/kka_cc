import React, { useState, useEffect } from 'react';
import {
  User as UserIcon,
  LogOut,
  Compass,
  BookOpen,
  UserCheck,
  Shield,
  Award,
  Menu,
  X,
  FileText,
  FlaskConical,
  Database,
  Users,
  Eye,
  CheckCircle2,
  ChevronRight,
  Wrench
} from 'lucide-react';
import { User as UserType } from '../../types';

interface TopNavbarProps {
  currentUser: UserType;
  currentView: string;
  onNavigate: (view: string) => void;
  onLogout: () => void;
  gasConnected?: boolean;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentUser,
  currentView,
  onNavigate,
  onLogout,
  gasConnected
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  // Role Navigation Items
  const getNavItems = () => {
    if (currentUser.role === 'siswa') {
      return [
        {
          id: 'dashboard',
          label: 'Peta Belajar',
          icon: BookOpen,
          description: 'Modul materi & target capaian'
        },
        {
          id: 'lab_kka',
          label: 'LAB KKA Interaktif',
          icon: FlaskConical,
          description: 'Simulasi coding & AI'
        },
        {
          id: 'proyek_kejuruan',
          label: 'Proyek Kejuruan',
          icon: Wrench,
          description: '8 Jurusan SMK & Simulasi'
        },
        {
          id: 'proyek_kolaborasi',
          label: 'Kolaborasi Lintas Jurusan',
          icon: Users,
          description: 'Proyek Tim 8 Jurusan'
        },
        {
          id: 'tugas_siswa',
          label: 'Tugas & LKPD',
          icon: FileText,
          description: 'Penugasan rombel & batas waktu'
        },
        {
          id: 'portofolio_siswa',
          label: 'Portofolio',
          icon: Award,
          description: 'Riwayat nilai & umpan balik'
        }
      ];
    }

    if (currentUser.role === 'guru') {
      return [
        {
          id: 'dashboard',
          label: 'Pusat Penilaian',
          icon: UserCheck,
          description: 'Pemeriksaan jawaban siswa'
        },
        {
          id: 'proyek_kejuruan',
          label: 'Proyek Kejuruan',
          icon: Wrench,
          description: '16 Proyek & Penugasan Rombel'
        },
        {
          id: 'proyek_kolaborasi',
          label: 'Kolaborasi Lintas Jurusan',
          icon: Users,
          description: 'Kelola Proyek & Tim Multi-Kejuruan'
        },
        {
          id: 'lab_kka',
          label: 'LAB KKA',
          icon: FlaskConical,
          description: 'Simulasi praktikum kelas'
        },
        {
          id: 'supervisi_akademik',
          label: 'Supervisi DL',
          icon: Eye,
          description: 'Mindful, Meaningful, Joyful'
        },
        {
          id: 'database_integration',
          label: 'Database GAS',
          icon: Database,
          description: 'Sinkronisasi nilai & audit'
        }
      ];
    }

    // Admin role
    return [
      {
        id: 'dashboard',
        label: 'Ringkasan Sistem',
        icon: Shield,
        description: 'Statistik & kontrol aplikasi'
      },
      {
        id: 'proyek_kejuruan',
        label: 'Proyek Kejuruan',
        icon: Wrench,
        description: 'Katalog 16 Proyek SMK'
      },
      {
        id: 'proyek_kolaborasi',
        label: 'Kolaborasi Lintas Jurusan',
        icon: Users,
        description: 'Proyek Tim Multi-Jurusan'
      },
      {
        id: 'admin_users',
        label: 'Kelola Pengguna',
        icon: Users,
        description: 'Akun siswa & guru'
      },
      {
        id: 'database_integration',
        label: 'Database Google Sheets',
        icon: Database,
        description: 'Struktur sheet & koneksi API'
      },
      {
        id: 'supervisi_akademik',
        label: 'Supervisi Akademik',
        icon: Eye,
        description: 'Pemantauan mutu KKA'
      },
      {
        id: 'lab_kka',
        label: 'LAB KKA',
        icon: FlaskConical,
        description: 'Simulasi interaktif'
      }
    ];
  };

  const navItems = getNavItems();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('dashboard')}
              className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 hover:text-cyan-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-sm shadow-xs border border-slate-800">
                K
              </div>
              <div className="text-left">
                <span className="block leading-tight font-extrabold">KKA Learning Lab</span>
                <span className="block text-[10px] text-slate-400 font-medium">SMK Kelas X · Kemendikdasmen</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links (Unboxed, clean typography) */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                currentView === item.id ||
                (item.id === 'dashboard' && (currentView === 'dashboard' || currentView === 'penilaian_guru'));

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 py-1.5 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md ${
                    isActive
                      ? 'text-cyan-700 font-bold border-b-2 border-cyan-600'
                      : 'hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600' : 'text-slate-400'}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile & Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop User Info */}
            <div className="hidden sm:flex flex-col text-right pr-1">
              <span className="text-xs font-bold text-slate-900 leading-tight truncate max-w-[150px]">
                {currentUser.full_name}
              </span>
              <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1">
                <span className="capitalize font-medium text-slate-700">{currentUser.role}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate max-w-[110px]">{currentUser.major || currentUser.class_id || 'Umum'}</span>
              </div>
            </div>

            {/* Logout button */}
            <button
              type="button"
              onClick={onLogout}
              className="py-1.5 px-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              title="Keluar dari akun"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span className="hidden sm:inline">Keluar</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label={mobileMenuOpen ? 'Tutup Menu Navigasi' : 'Buka Menu Navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-800" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-slate-800" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Sidebar Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sidebar */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl border-l border-slate-200 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
          >
            {/* Drawer Header */}
            <div>
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-xs">
                    K
                  </div>
                  <span className="font-bold text-sm text-slate-900">Menu Pembelajaran</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Profile Card in Drawer */}
              <div className="p-4 bg-slate-50 border-b border-slate-100 space-y-1">
                <div className="text-xs font-bold text-slate-900">{currentUser.full_name}</div>
                <div className="text-[11px] text-slate-500">
                  {currentUser.role.toUpperCase()} · {currentUser.student_number ? `NIS: ${currentUser.student_number}` : currentUser.email}
                </div>
                {currentUser.class_id && (
                  <div className="text-[10px] text-cyan-700 font-semibold font-mono">
                    Rombel: {currentUser.class_id}
                  </div>
                )}
              </div>

              {/* Nav Items List */}
              <nav className="p-3 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    currentView === item.id ||
                    (item.id === 'dashboard' && (currentView === 'dashboard' || currentView === 'penilaian_guru'));

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full p-3 rounded-xl text-left flex items-start gap-3 transition-colors ${
                        isActive
                          ? 'bg-cyan-50/80 text-cyan-900 border border-cyan-200 font-bold'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold leading-tight">{item.label}</div>
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">{item.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-100 space-y-3 bg-slate-50">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${gasConnected ? 'bg-emerald-500' : 'bg-amber-500'}`}
                  aria-hidden="true"
                />
                <span>{gasConnected ? 'Google Sheets Terhubung' : 'Penyimpanan Demo Lokal'}</span>
              </div>

              <button
                type="button"
                onClick={onLogout}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar Akun</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
