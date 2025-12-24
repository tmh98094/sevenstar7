import { Translations, Language } from './types';
import { enTranslations } from './en';
import { zhTranslations } from './zh';

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  zh: zhTranslations,
};

export * from './types';
export { enTranslations } from './en';
export { zhTranslations } from './zh';