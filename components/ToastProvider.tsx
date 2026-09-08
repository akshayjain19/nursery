'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

interface ToastContextValue {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(null), 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[100] w-[min(92vw,28rem)] -translate-x-1/2 border border-lime/20 bg-forest-panel px-5 py-4 text-sm text-white shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
        >
          <p className="font-semibold text-lime">WhatsApp</p>
          <p className="mt-1 text-white/70">{message}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
