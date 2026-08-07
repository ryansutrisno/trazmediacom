import { useEffect, useState } from 'react';
import type { Locale, TranslationDict } from '@/types/i18n';
import { getAlternateLocale } from '@i18n/index';

interface Props {
  locale: Locale;
  t: TranslationDict;
}

export default function MobileMenu({ locale, t }: Props) {
  const [open, setOpen] = useState(false);
  const altLocale = getAlternateLocale(locale);

  // Listen for open trigger from Navbar hamburger
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('traz:menu-open', handler);
    return () => window.removeEventListener('traz:menu-open', handler);
  }, []);

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
    document.body.style.overflow = '';
  }, [open]);

  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/$/, '').replace(/^\/(id|en)/, '') || '/'
      : '/';

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath === href || currentPath.startsWith(href + '/');

  const altPath =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/$/, '').replace(/^\/(id|en)/, '') || ''
      : '';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <img src="/logo.svg" alt={t.site.name} className="h-7 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface-alt hover:text-text"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${locale}${item.href === '/' ? '/' : item.href}`}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary-light text-primary'
                      : 'text-text hover:bg-surface-alt'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-5 py-4">
          <a
            href={`/${altLocale}${altPath === '' ? '/' : altPath}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-text transition-colors hover:border-primary hover:text-primary"
          >
            <span className="opacity-60">{locale}</span>
            <span aria-hidden="true" className="text-border">↔</span>
            <span>{altLocale}</span>
          </a>
        </div>
      </aside>
    </>
  );
}