import React from 'react';

import { Toast, ToastProps as ToastDetails } from '@/components/tools/toast';

interface ToastProps {
  toasts: ToastDetails[];
  showToast(props: Omit<ToastDetails, 'id'>): string;
  cancelToast(id: string): void;
}

const ToastContext = React.createContext<ToastProps>({} as ToastProps);

export function ToastHook({ children }: React.PropsWithChildren) {
  const [toasts, setToasts] = React.useState<ToastDetails[]>([]);

  const showToast = (props: Omit<ToastDetails, 'id'>) => {
    const id = new Date().getTime.toString();
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
    setToasts((prev) => [...prev, { ...props, id }]);
    return id;
  };

  const cancelToast = (id: string) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  return (
    <>
      <ToastContext.Provider
        value={{
          toasts,
          showToast,
          cancelToast,
        }}>
        {toasts.map((toast, idx) => (
          <Toast
            key={`toast_idx_${idx}`}
            {...toast}
            onCancel={() => {
              if (toast.onCancel) {
                toast.onCancel(toast), cancelToast(toast.id);
              }
            }}
          />
        ))}
        {children}
      </ToastContext.Provider>
    </>
  );
}

export function useToast() {
  return React.useContext(ToastContext);
}
