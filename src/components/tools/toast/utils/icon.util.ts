import { ToastProps } from '../types/toast.type';
import { styles } from '../styles';
export const getIconName = (type: ToastProps['type']) => {
  switch (type) {
    case 'info':
      return 'info';
    case 'error':
      return 'x-circle';
    case 'success':
      return 'check-circle';
    case 'warn':
      return 'alert-triangle';
    default:
      return 'info';
  }
};

export const getIconStyle = (type: ToastProps['type']) => {
  switch (type) {
    case 'info':
      return styles.info;
    case 'error':
      return styles.error;
    case 'success':
      return styles.success;
    case 'warn':
      return styles.warning;
    default:
      return styles.info;
  }
};
