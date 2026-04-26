'use client';
import { useLanguage } from './LanguageContext';
import { getContent } from './content';

/**
 * Hook to access localized portfolio content (about, skills, projects, experience)
 * based on the active locale. Reactive to language toggles.
 */
export function useContent() {
    const { locale } = useLanguage();
    return getContent(locale);
}
