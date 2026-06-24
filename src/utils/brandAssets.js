import { getConfig } from '@edx/frontend-platform';

import searnLogo from '../images/searn-logo-C2I_G7k-.png';
import searnLogoWhite from '../images/searn-logo-white-DePvLxSn.png';

/** Bundled header logo used when LOGO_URL is missing or fails to load. */
export const HEADER_LOGO_FALLBACK = searnLogo;

/** Bundled footer logo used when LOGO_WHITE_URL is missing or fails to load. */
export const FOOTER_LOGO_FALLBACK = searnLogoWhite;

/** @deprecated Use HEADER_LOGO_FALLBACK */
export const HEADER_LOGO_SRC = HEADER_LOGO_FALLBACK;

/** @deprecated Use FOOTER_LOGO_FALLBACK */
export const FOOTER_LOGO_SRC = FOOTER_LOGO_FALLBACK;

const normalizeConfigUrl = (url) => {
  if (typeof url !== 'string') {
    return '';
  }
  return url.trim();
};

/** Primary header logo from MFE config LOGO_URL. */
export const resolveHeaderLogoSrc = () => {
  const { LOGO_URL: logoUrl } = getConfig();
  const configured = normalizeConfigUrl(logoUrl);
  return configured || HEADER_LOGO_FALLBACK;
};

/** Primary footer logo from MFE config LOGO_WHITE_URL. */
export const resolveFooterLogoSrc = () => {
  const { LOGO_WHITE_URL: logoUrl } = getConfig();
  const configured = normalizeConfigUrl(logoUrl);
  return configured || FOOTER_LOGO_FALLBACK;
};
