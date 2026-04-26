'use client';
import * as React from 'react';
import { translations, type Locale, type TranslationKey } from './translations';

interface LanguageContextValue {
    locale: Locale;
    t: TranslationKey;
    setLocale: (locale: Locale) => void;
    toggle: () => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio.locale';

function detectInitialLocale(): Locale {
    if (typeof window === 'undefined') return 'es';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
    const browser = window.navigator.language?.toLowerCase() ?? '';
    return browser.startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = React.useState<Locale>('es');

    React.useEffect(() => {
        setLocaleState(detectInitialLocale());
    }, []);

    const setLocale = React.useCallback((next: Locale) => {
        setLocaleState(next);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, next);
            document.documentElement.lang = next;
        }
    }, []);

    const toggle = React.useCallback(() => {
        setLocale(locale === 'es' ? 'en' : 'es');
    }, [locale, setLocale]);

    const value = React.useMemo(
        () => ({
            locale,
            t: translations[locale],
            setLocale,
            toggle,
        }),
        [locale, setLocale, toggle],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = React.useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
