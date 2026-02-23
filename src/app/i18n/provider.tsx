'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface I18nContextValue {
  locale: string;
  translations: Record<string, string>;
  changeLocale: (locale: string) => void;
  availableLocales: string[];
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  translations: {},
  changeLocale: () => {},
  availableLocales: ['en'],
});

export const useI18n = () => useContext(I18nContext);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale?: string;
  availableLocales?: string[];
}

export function LanguageProvider({
  children,
  defaultLocale = 'en',
  availableLocales = ['en'],
}: LanguageProviderProps) {
  const [locale, setLocale] = useState(defaultLocale);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    if (locale === defaultLocale) {
      setTranslations({});
      return;
    }
    fetch(`/locales/${locale}.json`)
      .then((r) => r.ok ? r.json() : {})
      .then(setTranslations)
      .catch(() => setTranslations({}));
  }, [locale, defaultLocale]);

  return (
    <I18nContext.Provider value={{ locale, translations, changeLocale: setLocale, availableLocales }}>
      {children}
    </I18nContext.Provider>
  );
}
