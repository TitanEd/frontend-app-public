/* eslint-disable react/prop-types */
import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import { createPortal } from 'react-dom';

import './ToastProvider.scss';

const ToastCloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CLOSE_ANIMATION_MS = 260;
const AUTO_DISMISS_MS = 4000;

const ToastContext = createContext({
  showToast: () => {},
});

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const closeToast = useCallback((id) => {
    setToasts((prev) => prev.map((item) => (
      item.id === id ? { ...item, isClosing: true } : item
    )));
    window.setTimeout(() => {
      removeToast(id);
    }, CLOSE_ANIMATION_MS);
  }, [removeToast]);

  const showToast = useCallback(({ title, description }) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, {
      id,
      title,
      description,
      isClosing: false,
    }]);
    window.setTimeout(() => {
      closeToast(id);
    }, AUTO_DISMISS_MS);
  }, [closeToast]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  const toastViewport = (
    <ol className="app-toast-viewport" tabIndex={-1}>
      {toasts.map((toast) => (
        <li
          className={`app-toast ${toast.isClosing ? 'is-closing' : ''}`}
          key={toast.id}
          role="status"
        >
          <div>
            <p className="app-toast__title">{toast.title}</p>
            <p className="app-toast__description">{toast.description}</p>
          </div>
          <button
            type="button"
            className="app-toast__close"
            aria-label="Close"
            onClick={() => closeToast(toast.id)}
          >
            <ToastCloseIcon />
          </button>
        </li>
      ))}
    </ol>
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {typeof document !== 'undefined' ? createPortal(toastViewport, document.body) : null}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

export default ToastContext;
