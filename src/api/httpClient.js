import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

/**
 * Shared HTTP client for calling edx-platform APIs from the public MFE.
 * Works for anonymous visitors as well as logged-in users.
 */
export const getHttpClient = () => getAuthenticatedHttpClient();

/** LMS / platform API origin (trailing slash stripped). */
export const getApiBaseUrl = () => (getConfig().LMS_BASE_URL || '').replace(/\/$/, '');
