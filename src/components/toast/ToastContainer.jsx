/* eslint-disable react/prop-types */
import { useIntl } from '@edx/frontend-platform/i18n';

import ToastItem from './ToastItem';
import messages from './messages';
import './Toast.scss';

const ToastContainer = ({ toasts, onDismiss }) => {
  const { formatMessage } = useIntl();

  if (!toasts.length) {
    return null;
  }

  return (
    <div
      className="searn-toast-container"
      role="region"
      aria-label={formatMessage(messages.dismissLabel)}
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
