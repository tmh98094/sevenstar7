import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguageContext } from '../contexts/LanguageContext';
import { LanguageToggleProps } from '../translations/types';

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '', 
  variant = 'header' 
}) => {
  const { language, toggleLanguage, isChanging } = useLanguageContext();

  const getLanguageDisplay = () => {
    return language === 'en' ? 'EN' : '中文';
  };

  const getNextLanguageDisplay = () => {
    return language === 'en' ? '中文' : 'EN';
  };

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleLanguage}
        disabled={isChanging}
        className={`flex items-center justify-between w-full py-3 border-b border-white/5 text-xl font-black uppercase tracking-tighter text-gray-300 hover:text-brand-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        aria-label={`Switch to ${getNextLanguageDisplay()}`}
      >
        <div className="flex items-center gap-3">
          <Globe size={20} className={isChanging ? 'animate-spin' : ''} />
          <span>Language / 语言</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-brand-gold">{isChanging ? '...' : getLanguageDisplay()}</span>
          <span className="text-gray-600">→</span>
          <span className="text-gray-500">{getNextLanguageDisplay()}</span>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isChanging}
      className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      aria-label={`Switch to ${getNextLanguageDisplay()}`}
    >
      <Globe size={16} className={`text-brand-gold ${isChanging ? 'animate-spin' : ''}`} />
      <span className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">
        {isChanging ? '...' : getLanguageDisplay()}
      </span>
      
      {/* Hover tooltip */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-brand-dark border border-white/10 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
        Switch to {getNextLanguageDisplay()}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-brand-dark"></div>
      </div>
    </button>
  );
};

export default LanguageToggle;