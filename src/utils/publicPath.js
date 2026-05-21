/** App route prefix (e.g. `/public`) from webpack BASE_URL pathname. */
export function readPublicPathPrefix() {
  const raw = typeof process !== 'undefined' && process.env.BASE_URL
    ? String(process.env.BASE_URL).trim()
    : '';
  if (!raw) {
    return '';
  }
  try {
    return new URL(raw).pathname.replace(/\/$/, '') || '';
  } catch {
    return '';
  }
}

export const PUBLIC_PATH_PREFIX = readPublicPathPrefix();

/** Prefix for static assets and absolute in-app paths. */
export function withPublicPrefix(path) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${PUBLIC_PATH_PREFIX}${p}`;
}

/** React Router path under the public layout (e.g. `/public/about`). */
export function publicRoutePath(segment = '') {
  const base = PUBLIC_PATH_PREFIX || '/public';
  if (!segment) {
    return base;
  }
  const slug = segment.startsWith('/') ? segment.slice(1) : segment;
  return `${base}/${slug}`;
}
