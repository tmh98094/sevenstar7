export type Language = 'en' | 'zh';

export interface NavTranslations {
  home: string;
  games: string;
  promotions: string;
  partner: string;
  blog: string;
  croco: string;
}

export interface GameTranslations {
  [gameId: string]: {
    title: string;
    description?: string;
  };
}

export interface CategoryTranslations {
  [categoryId: string]: {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
  };
}

export interface TestimonialTranslations {
  [testimonialId: string]: {
    message: string;
    game: string;
  };
}

export interface BlogTranslations {
  [blogId: string]: {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    tags: string[];
  };
}

export interface UITranslations {
  // Common UI elements
  playNow: string;
  readMore: string;
  viewAll: string;
  loading: string;
  error: string;
  
  // Navigation
  menu: string;
  close: string;
  
  // Game Library
  allGames: string;
  games: string;
  providers: string;
  search: string;
  searchPlaceholder: string;
  popular: string;
  new: string;
  exclusive: string;
  
  // Filters
  category: string;
  status: string;
  clearFilters: string;
  
  // Game details
  rtp: string;
  volatility: string;
  maxWin: string;
  
  // Volatility levels
  low: string;
  medium: string;
  high: string;
  veryHigh: string;
  
  // Pagination
  previous: string;
  next: string;
  page: string;
  of: string;
  
  // Common actions
  play: string;
  demo: string;
  info: string;
  
  // Ready to win section
  readyToWin: string;
  
  // Support info
  support24_7: string;
  malaysia: string;
  ageRestriction: string;
}

export interface AchievementTranslations {
  [achievementId: string]: {
    title: string;
    description: string;
  };
}

export interface FAQTranslations {
  [faqId: string]: {
    question: string;
    answer: string;
  };
}

export interface FooterTranslations {
  mission: string;
  navigation: string;
  playerSupport: string;
  authority: string;
  
  // Navigation links
  home: string;
  exclusiveCrocoHub: string;
  liveCasino: string;
  slots: string;
  partnerProgram: string;
  
  // Player support links
  accountSecurity: string;
  winningStrategies: string;
  bonusTerms: string;
  cryptoGuide: string;
  responsibleGaming: string;
  
  // Authority section
  pagcorLicensed: string;
  officialPartner: string;
  encryptedRegulated: string;
  
  // Security badges
  secure: string;
  private: string;
  licensed: string;
  
  // Legal notice
  legalNotice: string;
  copyright: string;
}

export interface Translations {
  nav: NavTranslations;
  games: GameTranslations;
  categories: CategoryTranslations;
  testimonials: TestimonialTranslations;
  blog: BlogTranslations;
  ui: UITranslations;
  achievements: AchievementTranslations;
  faq: FAQTranslations;
  footer: FooterTranslations;
}

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isChanging?: boolean;
}

export interface LanguageProviderProps {
  children: React.ReactNode;
}

export interface UseTranslationReturn {
  t: (key: string) => string;
  language: Language;
}

export interface LanguageToggleProps {
  className?: string;
  variant?: 'header' | 'mobile';
}