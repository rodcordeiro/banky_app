import React from 'react';

import { Toast } from '../../components/layout/toast';

export type ToastContextProps = {
  showToast: (payload: any) => void;
};

type ToastProviderProps = {
  children?: any;
};

const ToastContext = React.createContext<ToastContextProps>(
  {} as ToastContextProps,
);

export function ToastHook({
  children,
}: React.PropsWithChildren<ToastProviderProps>) {
  const showToast = React.useCallback(() => console.log('oi'), []);

  return (
    <React.Fragment>
      <ToastContext.Provider
        value={{
          showToast,
        }}>
        {children}
      </ToastContext.Provider>
    </React.Fragment>
  );
}

export function useToast() {
  return React.useContext<ToastContextProps>(ToastContext);
}
