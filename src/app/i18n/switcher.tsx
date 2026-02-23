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
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 0" />
    <path d="M4 6l6.5 0" />
    <path d="M3 12s2-4 5-4 5 4 5 4" />
    <path d="M13.5 8l.5 0" />
    <path d="M14 12l4.5 6" />
    <path d="M18.5 12L14 18" />
    <path d="M16 20l2-5h4" />
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
        background: 'linear-gradient(135deg, #0070f3, #00c6ff)',
        color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,112,243,0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,112,243,0.5)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,112,243,0.4)'; }}
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
