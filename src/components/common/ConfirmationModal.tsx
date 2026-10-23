import React, { useEffect, useRef } from 'react';
import { AlertTriangle, AlertCircle, Info, Trash2, CheckCircle2 } from 'lucide-react';

export interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'primary' | 'info';
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmLabel = 'Ya, Lanjutkan',
  cancelLabel = 'Batal',
  variant = 'primary',
  isLoading = false,
  onConfirm,
  onCancel
}) => {
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape & focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) {
        onCancel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Auto-focus the confirm button for quick keyboard navigation
    const timer = setTimeout(() => confirmBtnRef.current?.focus(), 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, isLoading, onCancel]);

  if (!isOpen) return null;

  const getVariantStyles = () => {
    switch (variant) {
      case 'danger':
        return {
          icon: <Trash2 className="w-6 h-6 text-rose-600" aria-hidden="true" />,
          iconBg: 'bg-rose-100',
          confirmBtn:
            'bg-rose-600 hover:bg-rose-700 text-white focus-visible:ring-rose-500',
          titleColor: 'text-rose-950'
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="w-6 h-6 text-amber-600" aria-hidden="true" />,
          iconBg: 'bg-amber-100',
          confirmBtn:
            'bg-amber-600 hover:bg-amber-700 text-white focus-visible:ring-amber-500',
          titleColor: 'text-amber-950'
        };
      case 'info':
        return {
          icon: <Info className="w-6 h-6 text-cyan-600" aria-hidden="true" />,
          iconBg: 'bg-cyan-100',
          confirmBtn:
            'bg-cyan-600 hover:bg-cyan-700 text-white focus-visible:ring-cyan-500',
          titleColor: 'text-slate-900'
        };
      default:
        return {
          icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />,
          iconBg: 'bg-emerald-100',
          confirmBtn:
            'bg-slate-900 hover:bg-slate-800 text-white focus-visible:ring-slate-900',
          titleColor: 'text-slate-900'
        };
    }
  };

  const style = getVariantStyles();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-description"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-150"
      >
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3.5">
            <div className={`p-2.5 rounded-xl ${style.iconBg} shrink-0`}>
              {style.icon}
            </div>
            <div className="space-y-1">
              <h3 id="confirm-modal-title" className={`text-base font-bold ${style.titleColor}`}>
                {title}
              </h3>
              <p id="confirm-modal-description" className="text-xs text-slate-600 leading-relaxed">
                {message}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <button
            type="button"
            disabled={isLoading}
            onClick={onCancel}
            className="py-2 px-4 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200 bg-white border border-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmBtnRef}
            type="button"
            disabled={isLoading}
            onClick={onConfirm}
            className={`py-2 px-5 rounded-lg text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 flex items-center gap-1.5 ${style.confirmBtn}`}
          >
            {isLoading && (
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            )}
            <span>{confirmLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
