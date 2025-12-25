import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { Language, LanguageContextType, LanguageProviderProps } from '../translations/types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'sevenstar7_language';
const DEFAULT_LANGUAGE: Language = 'en';

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isChanging, setIsChanging] = useState(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize language from storage on mount
  useEffect(() => {
    const initializeLanguage = () => {
      try {
        // Try localStorage first
        const storedLanguage = localStorage.getItem(STORAGE_KEY) as Language;
        if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'zh')) {
          setLanguageState(storedLanguage);
          return;
        }
      } catch (error) {
        console.warn('localStorage not available, trying sessionStorage:', error);

        try {
          // Fallback to sessionStorage
          const sessionLanguage = sessionStorage.getItem(STORAGE_KEY) as Language;
          if (sessionLanguage && (sessionLanguage === 'en' || sessionLanguage === 'zh')) {
            setLanguageState(sessionLanguage);
            return;
          }
        } catch (sessionError) {
          console.warn('sessionStorage not available, using default language:', sessionError);
        }
      }

      // Default to English if no valid stored language found
      setLanguageState(DEFAULT_LANGUAGE);
    };

    initializeLanguage();
  }, []);

  // Persist language changes to storage
  const persistLanguage = (lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      console.warn('localStorage not available, trying sessionStorage:', error);

      try {
        sessionStorage.setItem(STORAGE_KEY, lang);
      } catch (sessionError) {
        console.warn('sessionStorage not available, language preference will not persist:', sessionError);
      }
    }
  };

  // Debounced language change function
  const debouncedSetLanguage = useCallback((lang: Language) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    setIsChanging(true);

    debounceTimeoutRef.current = setTimeout(() => {
      if (lang !== 'en' && lang !== 'zh') {
        console.warn('Invalid language code:', lang, 'Defaulting to English');
        lang = DEFAULT_LANGUAGE;
      }

      setLanguageState(lang);
      persistLanguage(lang);
      setIsChanging(false);
    }, 150); // 150ms debounce
  }, []);

  const setLanguage = (lang: Language) => {
    debouncedSetLanguage(lang);
  };

  const toggleLanguage = useCallback(() => {
    const newLanguage: Language = language === 'en' ? 'zh' : 'en';
    debouncedSetLanguage(newLanguage);
  }, [language, debouncedSetLanguage]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const contextValue: LanguageContextType = {
    language,
    toggleLanguage,
    setLanguage,
    isChanging,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};