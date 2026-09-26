import { getCollection } from 'astro:content';
import { isPublished } from '@components/blog/format';

export const prerender = false;

const siteUrl = (import.meta.env.PUBLIC_SITE_URL || 'https://trazmedia.com').replace(/\/$/, '');
const staticPaths = ['', 'about', 'services', 'portfolio', 'blog', 'contact'];

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

function alternateLinks(path: string): string {
  return ['id', 'en']
    .map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(`${siteUrl}/${locale}/${path}`)}" />`)
    .join('\n');
}

function urlEntry(path: string, lastmod: string): string {
  return [
    '  <url>',
    `    <loc>${escapeXml(`${siteUrl}/${path}`)}</loc>`,
    alternateLinks(path.replace(/^(id|en)\//, '')),
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    '  </url>',
  ].join('\n');
}

export async function GET() {
  const lastmod = new Date().toISOString();
  const entries = staticPaths.flatMap((path) => [
    urlEntry(`id/${path}`, lastmod),
    urlEntry(`en/${path}`, lastmod),
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
