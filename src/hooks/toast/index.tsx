import React from 'react';

import { Toast } from '../../components/layout/Toast';

export type ToastProps = {
  toast(payload: any): void;
};

type ToastProviderProps = {
  children?: any;
};

const ToastContext = React.createContext<ToastProps>({} as ToastProps);

export function ToastHook({
  children,
}: React.PropsWithChildren<ToastProviderProps>) {
  const showToast = () => console.log('oi');
  return (
    <React.Fragment>
      <ToastContext.Provider
        value={{
          toast: showToast,
        }}>
        {children}

        <Toast content="Some succedded toast" type="error" />
      </ToastContext.Provider>
    </React.Fragment>
  );
}
