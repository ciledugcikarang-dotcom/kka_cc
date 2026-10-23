import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface NotificationBannerProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  message: string;
  onClose?: () => void;
  className?: string;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  type = 'success',
  message,
  onClose,
  className = ''
}) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-900',
          icon: <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
        };
      case 'error':
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-900',
          icon: <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" aria-hidden="true" />
        };
      case 'info':
        return {
          bg: 'bg-cyan-50 border-cyan-200 text-cyan-900',
          icon: <Info className="w-4 h-4 text-cyan-600 shrink-0" aria-hidden="true" />
        };
      default:
        return {
          bg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
        };
    }
  };

  const style = getStyles();

  return (
    <div
      role="status"
      aria-live="polite"
      className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs shadow-xs animate-in fade-in slide-in-from-top-1 duration-200 ${style.bg} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        {style.icon}
        <span className="font-medium leading-relaxed">{message}</span>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md hover:bg-black/5 text-slate-500 hover:text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
          aria-label="Tutup pemberitahuan"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
