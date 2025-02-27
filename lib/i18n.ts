import { useTranslation } from 'next-i18next';

/**
 * Custom hook for translations that provides type safety and namespacing
 * @param namespace The translation namespace to use (defaults to 'common')
 * @returns The translation function and i18n instance
 */
export function useI18n(namespace = 'common') {
  const { t, i18n } = useTranslation(namespace);
  return { t, i18n };
}

/**
 * Get a translation key with proper typing
 * @param key The translation key
 * @param options Optional parameters for the translation
 * @returns The translated string
 */
export function getTranslation(key: string, options?: Record<string, any>) {
  // This is a placeholder function that will be replaced by the actual translation function
  // when used with the useI18n hook
  return key;
}