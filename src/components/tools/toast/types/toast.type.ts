export type ToastProps = {
  id: string;
  content: string;
  type?: 'info' | 'warn' | 'error' | 'success';
  onCancel?: (id: ToastProps) => void;
};
