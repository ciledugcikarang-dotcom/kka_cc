import React, { useState } from 'react';
import { Compass, Filter, ArrowRight, Play, Award, HelpCircle } from 'lucide-react';
import { User, LabItem } from '../../types';
import { getLabs } from '../../services/apiService';
import { LabBerpikirKomputasional } from './LabBerpikirKomputasional';
import { LabAlgoritmaDanML } from './LabAlgoritmaDanML';
import { LabPemrogramanDebugging } from './LabPemrogramanDebugging';
import { LabPengenalanPolaEtika } from './LabPengenalanPolaEtika';
import { LabPromptDesignThinking } from './LabPromptDesignThinking';
import { LabBasisDataSQL } from './LabBasisDataSQL';

interface LabHubProps {
  currentUser: User;
  initialLabId?: string;
}

export const DigitalLabHub: React.FC<LabHubProps> = ({ currentUser, initialLabId }) => {
  const [labs] = useState<LabItem[]>(getLabs());
  const [activeLabId, setActiveLabId] = useState<string | null>(initialLabId || null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterMajor, setFilterMajor] = useState<string>('all');

  const filteredLabs = labs.filter(lab => {
    if (filterDifficulty !== 'all' && lab.difficulty !== filterDifficulty) return false;
    if (filterMajor !== 'all' && !lab.targetMajors.includes('Semua Jurusan') && !lab.targetMajors.some(m => m.toLowerCase().includes(filterMajor.toLowerCase()))) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {!activeLabId ? (
        <>
          {/* Main Lab Header */}
          <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-cyan-400 font-semibold tracking-wide uppercase">
                  Laboratorium Digital Interaktif
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold mt-1 text-white">
                  LAB KKA — Ruang Simulasi &amp; Praktikum Kelas X
                </h1>
                <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                  Ruang praktikum digital mandiri dan terbimbing untuk seluruh kompetensi keahlian (DKV, Akuntansi, Bisnis Daring, Teknik Jaringan, Perhotelan, Kuliner, dan SMA/MA Umum).
                </p>
              </div>
              <span className="text-xs bg-slate-800 text-cyan-300 border border-slate-700 px-3.5 py-2 rounded-xl font-mono font-bold whitespace-nowrap self-start md:self-auto">
                6 Laboratorium Aktif
              </span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-cyan-600" /> Filter Praktikum:
              </span>

              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="p-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 text-slate-800 font-medium"
              >
                <option value="all">Semua Tingkat Kesulitan</option>
                <option value="Pemula">Tingkat: Pemula</option>
                <option value="Menengah">Tingkat: Menengah</option>
                <option value="Tantangan Lanjutan">Tingkat: Tantangan Lanjutan</option>
              </select>

              <select
                value={filterMajor}
                onChange={(e) => setFilterMajor(e.target.value)}
                className="p-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 text-slate-800 font-medium"
              >
                <option value="all">Konteks Semua Jurusan</option>
                <option value="dkv">DKV / Desain</option>
                <option value="akuntansi">Akuntansi &amp; Keuangan</option>
                <option value="teknik">Teknik Komputer / TI</option>
                <option value="pemasaran">Bisnis &amp; Pemasaran</option>
                <option value="sma">SMA / MA Umum</option>
              </select>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              Tersedia <strong>{filteredLabs.length}</strong> laboratorium
            </div>
          </div>

          {/* Lab Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLabs.map((lab, idx) => (
              <div
                key={lab.lab_id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-cyan-500 hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                      LAB 0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${lab.difficulty === 'Pemula' ? 'bg-emerald-50 text-emerald-800' : lab.difficulty === 'Menengah' ? 'bg-amber-50 text-amber-800' : 'bg-purple-50 text-purple-800'}`}>
                      {lab.difficulty}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors leading-snug">
                    {lab.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {lab.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Relevan Untuk:</div>
                    <div className="flex flex-wrap gap-1">
                      {lab.targetMajors.map((m, i) => (
                        <span key={i} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveLabId(lab.lab_id)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 text-cyan-400" /> Masuk ke Laboratorium
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Render Selected Lab Component */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveLabId(null)}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
            >
              ← Kembali ke Katalog LAB KKA
            </button>
            <span className="text-xs text-slate-400 font-mono">
              Praktikan: {currentUser.full_name} ({currentUser.major || 'Kelas X'})
            </span>
          </div>

          {activeLabId === 'lab-01' && <LabBerpikirKomputasional currentUser={currentUser} />}
          {activeLabId === 'lab-02' && <LabAlgoritmaDanML currentUser={currentUser} />}
          {activeLabId === 'lab-03' && <LabPemrogramanDebugging currentUser={currentUser} />}
          {activeLabId === 'lab-04' && <LabPengenalanPolaEtika currentUser={currentUser} />}
          {activeLabId === 'lab-05' && <LabPromptDesignThinking currentUser={currentUser} />}
          {activeLabId === 'lab-06' && <LabBasisDataSQL currentUser={currentUser} />}
        </div>
      )}
    </div>
  );
};
