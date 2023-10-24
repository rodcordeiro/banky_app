export type ToastProps = {
  visible: boolean;
  content: string;
  type: 'success' | 'error' | 'warning' | 'info';
};
export enum ToastIcon {
  success = 'check-circle',
  error = 'meh',
  warning = 'alert-triangle',
  info = 'info',
}
export enum ToastColor {
  success = '#3b3',
  error = '#a12',
  warning = '#d60',
  info = '#39c',
}
