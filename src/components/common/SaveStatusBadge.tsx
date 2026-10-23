import React from 'react';
import { CheckCircle2, RefreshCw, AlertCircle, CloudCheck, HardDrive } from 'lucide-react';

export interface SaveStatusBadgeProps {
  status: 'idle' | 'saving' | 'saved' | 'error';
  isGasConnected?: boolean;
  lastSavedAt?: Date | null;
  className?: string;
}

export const SaveStatusBadge: React.FC<SaveStatusBadgeProps> = ({
  status,
  isGasConnected = false,
  lastSavedAt,
  className = ''
}) => {
  if (status === 'saving') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg font-medium animate-pulse ${className}`}
      >
        <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-600" aria-hidden="true" />
        <span>Menyimpan ke {isGasConnected ? 'Google Sheets' : 'Database'}...</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 text-[11px] text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-lg font-medium ${className}`}
      >
        <AlertCircle className="w-3.5 h-3.5 text-rose-600" aria-hidden="true" />
        <span>Gagal menyimpan otomatis. Silakan coba lagi.</span>
      </div>
    );
  }

  if (status === 'saved') {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg font-medium transition-all ${className}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
        <span>
          Tersimpan {isGasConnected ? 'di Google Sheets' : 'Lokal'}{' '}
          {lastSavedAt ? `(${lastSavedAt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })})` : ''}
        </span>
      </div>
    );
  }

  // Idle state
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg font-medium ${className}`}
    >
      <HardDrive className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
      <span>{isGasConnected ? 'Siap Sinkron Google Sheets' : 'Penyimpanan Lokal Aktif'}</span>
    </div>
  );
};
