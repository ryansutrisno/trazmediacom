import type { Locale, TranslationDict } from '@/types/i18n';
import { translations } from './translations';

export function getTranslations(locale: Locale): TranslationDict {
  return translations[locale] ?? translations.id;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'id' ? 'en' : 'id';
}

export function getAlternateLinks(pathname: string): Array<{ locale: Locale; href: string }> {
  // pathname like "/id/about" → strip locale prefix to get "/about"
  const path = pathname.replace(/^\/(id|en)/, '') || '/';
  return [
    { locale: 'id', href: `/id${path}` },
    { locale: 'en', href: `/en${path}` },
  ];
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return 'id';
}

export function isValidLocale(locale: string): locale is Locale {
  return locale === 'id' || locale === 'en';
}

/**
 * Parse an Accept-Language header into language tags ordered by preference
 * (highest q-value first). Malformed or q=0 entries are dropped.
 * e.g. "en-US,en;q=0.9,id;q=0.8" → ["en-us", "en", "id"]
 */
export function parseAcceptLanguage(header: string): string[] {
  if (!header) return [];
  return header
    .split(',')
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(';');
      const qParam = params.find((param) => param.trim().startsWith('q='));
      const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      return { tag: rawTag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((entry) => entry.tag.length > 0 && entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.tag);
}

/**
 * Resolve the visitor's preferred supported locale from an Accept-Language
 * header. Matches the primary subtag exactly ("id", "id-ID", "en-US"),
 * so it never falsely matches substrings such as "id" inside "mid".
 */
export function getPreferredLocale(header: string, fallback: Locale = 'id'): Locale {
  for (const tag of parseAcceptLanguage(header)) {
    const primary = tag.split('-')[0];
    if (isValidLocale(primary)) return primary;
  }
  return fallback;
}
