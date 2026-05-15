/* eslint-disable react/prop-types */
import {
  faCheckCircle, faExclamationCircle, faInfoCircle, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

const VARIANT_ICONS = {
  success: faCheckCircle,
  error: faExclamationCircle,
  info: faInfoCircle,
};

const ToastItem = ({ toast, onDismiss }) => {
  const { formatMessage } = useIntl();
  const icon = VARIANT_ICONS[toast.variant] || VARIANT_ICONS.info;

  return (
    <div
      className={`searn-toast searn-toast--${toast.variant}${toast.exiting ? ' searn-toast--exiting' : ''}`}
      role="status"
    >
      <FontAwesomeIcon icon={icon} className="searn-toast__icon" aria-hidden="true" />
      <div className="searn-toast__content">
        {toast.title ? <p className="searn-toast__title">{toast.title}</p> : null}
        {toast.description ? <p className="searn-toast__description">{toast.description}</p> : null}
      </div>
      <button
        type="button"
        className="searn-toast__close"
        onClick={onDismiss}
        aria-label={formatMessage(messages.dismissLabel)}
      >
        <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
      </button>
    </div>
  );
};

export default ToastItem;
