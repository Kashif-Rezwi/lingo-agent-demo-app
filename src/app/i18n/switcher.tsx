'use client';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useI18n } from './provider';

const LOCALE_FLAGS: Record<string, string> = {
  en: '🇺🇸', fr: '🇫🇷', ar: '🇸🇦', ja: '🇯🇵',
  de: '🇩🇪', es: '🇪🇸', it: '🇮🇹', pt: '🇧🇷', zh: '🇨🇳', ko: '🇰🇷',
};

const LOCALE_NAMES: Record<string, string> = {
  en: 'English', fr: 'Français', ar: 'العربية', ja: '日本語',
  de: 'Deutsch', es: 'Español', it: 'Italiano', pt: 'Português', zh: '中文', ko: '한국어',
};

const TranslateIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="m12.87 15.07-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7 1.62-4.33L19.12 17h-3.24z"/>
  </svg>
);

export function LanguageSwitcher() {
  const { locale, changeLocale, availableLocales } = useI18n();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  if (!mounted || availableLocales.length <= 1) return null;

  return createPortal(
    <div ref={ref} style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute', bottom: '56px', right: 0,
          background: 'rgba(255,255,255,0.98)', border: '1px solid #e2e8f0',
          borderRadius: '12px', padding: '6px', boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          backdropFilter: 'blur(16px)', minWidth: '160px',
          animation: 'lingoSlideUp 0.2s ease-out',
        }}>
          {availableLocales.map((loc) => (
            <button key={loc} onClick={() => { changeLocale(loc); setOpen(false); }} style={{
              display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
              padding: '8px 12px', borderRadius: '8px', border: 'none',
              background: loc === locale ? '#0070f3' : 'transparent',
              color: loc === locale ? '#fff' : '#374151',
              cursor: 'pointer', fontSize: '14px', fontWeight: loc === locale ? 600 : 400,
              transition: 'background 0.15s, color 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={(e) => { if (loc !== locale) e.currentTarget.style.background = '#f1f5f9'; }}
              onMouseLeave={(e) => { if (loc !== locale) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '18px' }}>{LOCALE_FLAGS[loc] ?? '🌐'}</span>
              <span>{LOCALE_NAMES[loc] ?? loc.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
      {/* FAB Button */}
      <button onClick={() => setOpen(!open)} aria-label="Change language" style={{
        width: '48px', height: '48px', borderRadius: '50%', border: 'none',
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 20px rgba(79,70,229,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(79,70,229,0.5)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.4)'; }}
      >
        <TranslateIcon />
      </button>
      <style>{`
        @keyframes lingoSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>,
    document.body,
  );
}
