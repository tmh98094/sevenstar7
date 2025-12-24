import React, { useState, useEffect } from 'react';
import { Gamepad2, ArrowRight } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../src/hooks/useTranslation';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px (approx past Hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const isCroco = location.pathname.includes('croco');

  return (
    <a
      href={EXTERNAL_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[100] hidden md:flex items-center gap-4 bg-brand-black/90 backdrop-blur-md border border-brand-gold/50 text-white pl-2 pr-6 py-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:scale-105 transition-all duration-300 group animate-in slide-in-from-bottom-10 fade-in"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-20"></div>
        <div className="bg-brand-gold text-brand-black w-12 h-12 rounded-full flex items-center justify-center font-black shadow-lg">
          <Gamepad2 size={24} />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-black text-lg italic tracking-wider group-hover:text-brand-gold transition-colors flex items-center gap-2">
          {isCroco ? `${t('ui.play')} CROCO` : t('ui.playNow')} <ArrowRight size={16} />
        </span>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">
          {t('ui.officialPartnerLink')}
        </span>
      </div>
    </a>
  );
};

export default FloatingCTA;