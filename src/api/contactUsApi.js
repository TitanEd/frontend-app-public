import { getApiBaseUrl, getHttpClient } from './httpClient';

const CONTACT_US_URL = '/api/v1/contact-us/';

/**
 * Submit a Contact Us message to the `contact_us` Django app.
 * Public endpoint — no auth required.
 *
 * @param {{ name: string, email: string, subject: string, message: string }} form
 */
export const submitContactUs = (form) => {
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
  };

  return getHttpClient()
    .post(`${getApiBaseUrl()}${CONTACT_US_URL}`, payload)
    .then(({ data }) => data);
};
