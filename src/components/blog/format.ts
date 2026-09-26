import type { Locale } from '@/types/i18n';

/** Localized long date, e.g. "27 September 2026" / "September 27, 2026". */
export function formatDate(locale: Locale, date: Date): string {
  const value = date instanceof Date ? date : new Date(date);
  return value.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Localized reading time, e.g. "5 menit baca" / "5 min read". */
export function readingTimeLabel(locale: Locale, minutes: number): string {
  return locale === 'id' ? `${minutes} menit baca` : `${minutes} min read`;
}

/** Stable ISO datetime string for <time datetime=…> markup. */
export function isoDate(date: Date): string {
  return new Date(date).toISOString();
}

/**
 * An article is published once its calendar DATE is reached in Asia/Jakarta (WIB).
 * Date-only frontmatter (e.g. 2026-09-27) parses to UTC midnight, so a naive
 * comparison would delay visibility until 07:00 WIB.
 */
export function isPublished(publishDate: Date, now: Date = new Date()): boolean {
  const dayIn = (d: Date) => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Jakarta', year: 'numeric', month: '2-digit', day: '2-digit',
    }).formatToParts(d);
    const get = (t: string) => parts.find((p) => p.type === t)!.value;
    return `${get('year')}-${get('month')}-${get('day')}`;
  };
  return dayIn(publishDate) <= dayIn(now);
}
