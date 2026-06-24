import { getApiBaseUrl, getHttpClient } from './httpClient';

const PENDING_REQUESTS_URL = '/api/v1/pending-requests/';

const APPLICANT_TYPE_TO_API_VALUE = {
  NRA: 'nra',
  TrainingProvider: 'training_provider',
};

/**
 * Submit an NRA / Training Provider onboarding request to the
 * `pending_requests` Django app. Public endpoint — no auth required.
 *
 * @param {{
 *   applicantType: 'NRA'|'TrainingProvider',
 *   organisationName: string,
 *   country: string,
 *   website: string,
 *   contactName: string,
 *   contactEmail: string,
 *   description: string,
 * }} form
 */
export const submitPendingRequest = (form) => {
  const payload = {
    applicant_type: APPLICANT_TYPE_TO_API_VALUE[form.applicantType],
    organisation_name: form.organisationName.trim(),
    country: form.country.trim(),
    official_website_url: form.website.trim(),
    primary_contact_name: form.contactName.trim(),
    primary_contact_email: form.contactEmail.trim(),
    description: form.description.trim(),
  };

  return getHttpClient()
    .post(`${getApiBaseUrl()}${PENDING_REQUESTS_URL}`, payload)
    .then(({ data }) => data);
};
