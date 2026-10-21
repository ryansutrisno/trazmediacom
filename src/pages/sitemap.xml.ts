import { getCollection } from 'astro:content';
import { isPublished } from '@components/blog/format';
import { canonicalPath, SITE_URL } from '@/lib/seo';

// Generated once at build time so crawlers get instant XML from the CDN
// instead of waiting on a serverless invocation.
export const prerender = true;

const siteUrl = SITE_URL.origin;
const staticPaths = ['', 'about', 'services', 'portfolio', 'blog', 'contact'];
// Frozen per deployment: a `lastmod` that changes on every request teaches
// Google to ignore the field entirely.
const buildTime = new Date().toISOString();

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return entities[character];
  });
}

function loc(path: string): string {
  return `${siteUrl}${canonicalPath(path)}`;
}

function alternateLinks(path: string): string {
  const clean = path.replace(/^(id|en)\//, '');
  const links = ['id', 'en'].map(
    (locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(loc(`/${locale}/${clean}`))}" />`,
  );
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}/`)}" />`);
  return links.join('\n');
}

function urlEntry(path: string, lastmod: string): string {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc(`/${path}`))}</loc>`,
    alternateLinks(path),
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    '  </url>',
  ].join('\n');
}

export async function GET() {
  const entries = staticPaths.flatMap((path) => [
    urlEntry(`id/${path}`, buildTime),
    urlEntry(`en/${path}`, buildTime),
  ]);

  const [idPosts, enPosts] = await Promise.all([getCollection('blogId'), getCollection('blogEn')]);
  const now = new Date();
  for (const [locale, posts] of [
    ['id', idPosts],
    ['en', enPosts],
  ] as const) {
    for (const post of posts) {
      if (post.data.draft || !isPublished(post.data.publishDate, now)) continue;
      const postLastmod = (post.data.updatedDate ?? post.data.publishDate).toISOString();
      entries.push(urlEntry(`${locale}/blog/${post.id}`, postLastmod));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries.join('\n'),
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
