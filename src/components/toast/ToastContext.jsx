/* eslint-disable react/prop-types */
import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

import ToastContainer from './ToastContainer';

const ToastContext = createContext(null);

let toastIdCounter = 0;

const nextToastId = () => {
  toastIdCounter += 1;
  return `toast-${toastIdCounter}`;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.map((toast) => (
      toast.id === id ? { ...toast, exiting: true } : toast
    )));

    window.setTimeout(() => {
      removeToast(id);
    }, 320);
  }, [removeToast]);

  const showToast = useCallback(({
    variant = 'success',
    title,
    description,
    duration = 5000,
  }) => {
    const id = nextToastId();
    setToasts((prev) => [...prev, {
      id,
      variant,
      title,
      description,
      exiting: false,
    }]);

    if (duration > 0) {
      window.setTimeout(() => dismiss(id), duration);
    }

    return id;
  }, [dismiss]);

  const value = useMemo(() => ({
    showToast,
    dismiss,
  }), [showToast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
