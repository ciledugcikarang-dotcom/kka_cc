/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LoginPage } from './components/auth/LoginPage';
import { TopNavbar } from './components/layout/TopNavbar';
import { StudentLearningHub } from './components/student/StudentLearningHub';
import { ModuleReaderView } from './components/learning/ModuleReaderView';
import { DigitalLabHub } from './components/labs/DigitalLabHub';
import { LKPDDigitalView } from './components/learning/LKPDDigitalView';
import { QuizAssessmentView } from './components/learning/QuizAssessmentView';
import { TeacherGradingCenter } from './components/teacher/TeacherGradingCenter';
import { AcademicSupervisionView } from './components/supervision/AcademicSupervisionView';
import { AdminManagementCenter } from './components/admin/AdminManagementCenter';
import { DatabaseIntegrationView } from './components/database/DatabaseIntegrationView';
import { VocationalProjectHub } from './components/projects/VocationalProjectHub';
import { CrossMajorProjectView } from './components/projects/CrossMajorProjectView';
import { User, ModuleItem, LKPDItem, GasConfig } from './types';
import { initDatabase, getGasConfig, getModules, getLKPDs } from './services/apiService';
import { Database, AlertCircle, Sparkles, BookOpen, Clock, Award, Users, ShieldAlert } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('kka_current_user_v1');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [activeModule, setActiveModule] = useState<ModuleItem | null>(null);
  const [activeLKPD, setActiveLKPD] = useState<LKPDItem | null>(null);
  const [activeQuizModuleId, setActiveQuizModuleId] = useState<string | undefined>(undefined);
  const [gasConfig, setGasConfig] = useState<GasConfig>(getGasConfig());

  // Initialize DB on boot
  useEffect(() => {
    initDatabase();
    setGasConfig(getGasConfig());
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('kka_current_user_v1', JSON.stringify(user));
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('kka_current_user_v1');
    setCurrentView('dashboard');
    setActiveModule(null);
    setActiveLKPD(null);
  };

  const handleOpenModule = (module: ModuleItem) => {
    setActiveModule(module);
    setCurrentView('module_detail');
  };

  const handleOpenLab = (labId?: string) => {
    setCurrentView('lab_kka');
  };

  const handleOpenLKPD = (lkpd: LKPDItem) => {
    setActiveLKPD(lkpd);
    setCurrentView('lkpd_detail');
  };

  const handleStartQuiz = (moduleId?: string) => {
    setActiveQuizModuleId(moduleId);
    setCurrentView('quiz_view');
  };

  // Check authorization for current view and role
  const isViewAuthorized = (() => {
    if (!currentUser) return false;
    // Shared views accessible across roles
    if (['module_detail', 'lab_kka', 'lkpd_detail', 'quiz_view', 'proyek_kejuruan', 'proyek_kolaborasi'].includes(currentView)) {
      return true;
    }
    // Dashboard is rendered role-specifically
    if (currentView === 'dashboard') return true;

    if (currentUser.role === 'siswa') {
      return ['tugas_siswa', 'portofolio_siswa'].includes(currentView);
    }
    if (currentUser.role === 'guru') {
      return ['penilaian_guru', 'supervisi_akademik', 'database_integration'].includes(currentView);
    }
    if (currentUser.role === 'admin') {
      return ['admin_users', 'admin_gas', 'supervisi_akademik', 'database_integration'].includes(currentView);
    }
    return false;
  })();

  // If user is not authenticated, render LoginPage strictly
  if (!currentUser) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-800">
      {/* Top Navbar adhering to Top Bar Contract */}
      <TopNavbar
        currentUser={currentUser}
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          if (view === 'dashboard') {
            setActiveModule(null);
            setActiveLKPD(null);
          }
        }}
        onLogout={handleLogout}
        gasConnected={gasConfig.isConnected}
      />

      {/* Database Mode Status Strip */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Database Backend:</span>
            {gasConfig.isConnected ? (
              <span className="text-emerald-400 font-mono flex items-center gap-1">
                ● Google Sheets Terhubung ({gasConfig.webAppUrl.substring(0, 36)}...)
              </span>
            ) : (
              <span className="text-amber-400 font-mono flex items-center gap-1">
                ● MODE DEMO LOKAL (Data tersimpan di browser) — Siap sinkron Google Apps Script
              </span>
            )}
          </div>
          <div className="text-slate-400 text-[10px]">
            Kurikulum Merdeka Kelas X · Sesuai SK BSKAP No. 046/H/KR/2025
          </div>
        </div>
      </div>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* VIEW: STUDENT HUB */}
        {currentUser.role === 'siswa' && currentView === 'dashboard' && (
          <StudentLearningHub
            currentUser={currentUser}
            initialTab="peta_belajar"
            onSelectModule={handleOpenModule}
            onSelectLab={handleOpenLab}
            onSelectLKPD={handleOpenLKPD}
            onStartQuiz={handleStartQuiz}
            onNavigateToProjects={() => setCurrentView('proyek_kejuruan')}
            onNavigateToCrossMajor={() => setCurrentView('proyek_kolaborasi')}
          />
        )}

        {currentUser.role === 'siswa' && currentView === 'tugas_siswa' && (
          <StudentLearningHub
            currentUser={currentUser}
            initialTab="tugas_lkpd"
            onSelectModule={handleOpenModule}
            onSelectLab={handleOpenLab}
            onSelectLKPD={handleOpenLKPD}
            onStartQuiz={handleStartQuiz}
            onNavigateToProjects={() => setCurrentView('proyek_kejuruan')}
            onNavigateToCrossMajor={() => setCurrentView('proyek_kolaborasi')}
          />
        )}

        {currentUser.role === 'siswa' && currentView === 'portofolio_siswa' && (
          <StudentLearningHub
            currentUser={currentUser}
            initialTab="portofolio_prestasi"
            onSelectModule={handleOpenModule}
            onSelectLab={handleOpenLab}
            onSelectLKPD={handleOpenLKPD}
            onStartQuiz={handleStartQuiz}
            onNavigateToProjects={() => setCurrentView('proyek_kejuruan')}
            onNavigateToCrossMajor={() => setCurrentView('proyek_kolaborasi')}
          />
        )}

        {/* VIEW: MODULE READER */}
        {currentView === 'module_detail' && activeModule && (
          <ModuleReaderView
            module={activeModule}
            currentUser={currentUser}
            onBack={() => setCurrentView('dashboard')}
            onOpenLab={handleOpenLab}
            onOpenQuiz={handleStartQuiz}
            onOpenLKPD={() => {
              const allLkpds = getLKPDs();
              const matched = allLkpds.find(l => l.module_id === activeModule.module_id) || allLkpds[0];
              handleOpenLKPD(matched);
            }}
          />
        )}

        {/* VIEW: LAB KKA HUB */}
        {currentView === 'lab_kka' && (
          <DigitalLabHub currentUser={currentUser} />
        )}

        {/* VIEW: LKPD DETAIL */}
        {currentView === 'lkpd_detail' && activeLKPD && (
          <LKPDDigitalView
            lkpd={activeLKPD}
            currentUser={currentUser}
            onBack={() => setCurrentView('dashboard')}
            onSubmitted={() => setCurrentView('dashboard')}
          />
        )}

        {/* VIEW: QUIZ ASSESSMENT */}
        {currentView === 'quiz_view' && (
          <QuizAssessmentView
            currentUser={currentUser}
            selectedModuleId={activeQuizModuleId}
            onBack={() => setCurrentView('dashboard')}
          />
        )}

        {/* VIEW: VOCATIONAL PROJECTS HUB (ALL ROLES) */}
        {currentView === 'proyek_kejuruan' && (
          <VocationalProjectHub
            currentUser={currentUser}
            onNavigateToCrossMajor={() => setCurrentView('proyek_kolaborasi')}
          />
        )}

        {/* VIEW: CROSS-MAJOR COLLABORATION PROJECT HUB (ALL ROLES) */}
        {currentView === 'proyek_kolaborasi' && (
          <CrossMajorProjectView currentUser={currentUser} />
        )}

        {/* VIEW: TEACHER DASHBOARD & GRADING (TEACHER ONLY) */}
        {currentUser.role === 'guru' && (currentView === 'dashboard' || currentView === 'penilaian_guru') && (
          <TeacherGradingCenter
            currentUser={currentUser}
            onNavigateToCrossMajor={() => setCurrentView('proyek_kolaborasi')}
          />
        )}

        {/* VIEW: ACADEMIC SUPERVISION (TEACHER & ADMIN ONLY) */}
        {currentView === 'supervisi_akademik' && (currentUser.role === 'guru' || currentUser.role === 'admin') && (
          <AcademicSupervisionView currentUser={currentUser} />
        )}

        {/* VIEW: DATABASE & GOOGLE SHEETS INTEGRATION CENTER (TEACHER & ADMIN ONLY) */}
        {(currentView === 'database_integration' || (currentUser.role === 'admin' && currentView === 'admin_gas')) &&
          (currentUser.role === 'guru' || currentUser.role === 'admin') && (
          <DatabaseIntegrationView currentUser={currentUser} />
        )}

        {/* VIEW: ADMIN CONSOLE (ADMIN ONLY) */}
        {currentUser.role === 'admin' && (currentView === 'dashboard' || currentView === 'admin_users') && (
          <AdminManagementCenter currentUser={currentUser} />
        )}

        {/* VIEW: UNAUTHORIZED / NOT FOUND FALLBACK */}
        {!isViewAuthorized && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center max-w-md mx-auto my-12 space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 mx-auto flex items-center justify-center">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Akses Halaman Dibatasi</h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Akun Anda dengan peran <strong className="text-slate-800 uppercase font-mono">{currentUser.role}</strong> tidak memiliki izin untuk membuka tampilan ini.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setActiveModule(null);
                setActiveLKPD(null);
              }}
              className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
            >
              Kembali ke Dashboard Utama
            </button>
          </div>
        )}
      </main>

      {/* Global Clean Footer */}
      <footer className="no-print bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">KKA Learning Lab</span>
            <span aria-hidden="true">·</span>
            <span>Platform Pembelajaran Koding &amp; Kecerdasan Artifisial Kelas X</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Sumber: Buku Teks Kemendikdasmen 2025</span>
            <span aria-hidden="true">·</span>
            <span>Pendekatan Deep Learning &amp; Kurikulum Merdeka</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
