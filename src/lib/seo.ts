/**
 * Host-independent absolute URL helpers.
 *
 * `Astro.url.origin` cannot be trusted for server-rendered routes on Vercel:
 * when the forwarded host header is absent it falls back to `http://localhost`
 * (see astro/dist/core/app/node.js). That value leaked into every
 * canonical/hreflang/og:url tag on the blog routes, so each post declared
 * itself a duplicate of an unreachable `https://localhost/...` page and Google
 * refused to index it.
 *
 * Always build absolute URLs from the configured site instead of the request.
 */
const FALLBACK_SITE = 'https://trazmedia.com';

export const SITE_URL = new URL(import.meta.env.PUBLIC_SITE_URL || FALLBACK_SITE);

/**
 * Canonical form of a pathname: directory style with a trailing slash
 * (`/id/blog/slug/`), while file-like paths (`/sitemap.xml`, `/logo.svg`)
 * and the root stay untouched.
 */
export function canonicalPath(pathname: string): string {
  const path = (pathname || '/').split(/[?#]/)[0] || '/';
  if (path === '/' || path.endsWith('/')) return path;
  const lastSegment = path.slice(path.lastIndexOf('/') + 1);
  if (lastSegment.includes('.')) return path;
  return `${path}/`;
}

/** Absolute, canonical URL for a pathname, e.g. `/id/blog/foo` → `https://trazmedia.com/id/blog/foo/`. */
export function absoluteUrl(pathname = '/'): string {
  return new URL(canonicalPath(pathname), SITE_URL).href;
}
