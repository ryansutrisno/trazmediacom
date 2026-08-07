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
