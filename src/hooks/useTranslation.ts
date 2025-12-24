import { useLanguageContext } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { UseTranslationReturn } from '../translations/types';

export const useTranslation = (): UseTranslationReturn => {
  const { language } = useLanguageContext();

  const t = (key: string): string => {
    try {
      // Split the key by dots to navigate nested objects
      const keys = key.split('.');
      let value: any = translations[language];

      // Navigate through the nested object structure
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Key not found in current language, try English fallback
          console.warn(`Translation key "${key}" not found for language "${language}", falling back to English`);
          
          let fallbackValue: any = translations.en;
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              // Key not found in English either, return the key itself
              console.error(`Translation key "${key}" not found in any language`);
              return key;
            }
          }
          return typeof fallbackValue === 'string' ? fallbackValue : key;
        }
      }

      // Return the found value if it's a string, otherwise return the key
      return typeof value === 'string' ? value : key;
    } catch (error) {
      console.error(`Error translating key "${key}":`, error);
      return key;
    }
  };

  return {
    t,
    language,
  };
};