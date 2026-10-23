/**
 * Base-path aware URL helpers.
 *
 * The site may be served from a sub-path (e.g. a GitHub Pages project site at
 * /outnabout/), so internal links and asset references must never be
 * hard-coded as "/something". Use `url()` instead.
 */

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Prefix an internal path with the configured base path. */
export function url(path = '/'): string {
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}

/** Strip the base path from a pathname so it can be compared to route paths. */
export function stripBase(pathname: string): string {
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const withSlash = stripped.startsWith('/') ? stripped : `/${stripped}`;
  return withSlash.length > 1 ? withSlash.replace(/\/+$/, '') : '/';
}

/** Whether `pathname` is the given route or a child of it. */
export function isActive(pathname: string, route: string): boolean {
  const current = stripBase(pathname);
  if (route === '/') return current === '/';
  return current === route || current.startsWith(`${route}/`);
}
