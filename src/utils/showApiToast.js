/**
 * Show a toast from an API response body (success or error).
 * Use with `const { showToast } = useToast()` from a form or mutation handler.
 *
 * @param {Function} showToast - from useToast()
 * @param {Object} options
 * @param {boolean} options.success - true for success, false for error
 * @param {Object} [options.data] - parsed JSON from the API
 * @param {Object} [options.fallback] - { successTitle, successDescription, errorTitle, errorDescription }
 */
export const showToastFromApi = (showToast, {
  success,
  data = {},
  fallback = {},
}) => {
  const title = data.title
    ?? data.message
    ?? (success ? fallback.successTitle : fallback.errorTitle);
  const description = data.description
    ?? data.detail
    ?? (success ? fallback.successDescription : fallback.errorDescription);

  if (!title && !description) {
    return;
  }

  showToast({ title, description });
};

export const showSuccessToast = (showToast, { title, description }) => {
  showToast({ title, description });
};

export const showErrorToast = (showToast, { title, description }) => {
  showToast({ title, description });
};
