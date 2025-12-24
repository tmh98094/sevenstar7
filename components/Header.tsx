import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, LogIn, Gamepad2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, EXTERNAL_LINK } from '../constants';
import LanguageToggle from '../src/components/LanguageToggle';
import { useTranslation } from '../src/hooks/useTranslation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLabel = (itemId: string) => {
    switch (itemId) {
      case 'home': return t('nav.home');
      case 'games': return t('nav.games');
      case 'promo': return t('nav.promotions');
      case 'partner': return t('nav.partner');
      case 'blog': return t('nav.blog');
      case 'croco': return t('nav.croco');
      default: return itemId;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#f3f4f6] text-brand-black shadow-lg py-2' 
            : 'bg-transparent text-gray-200 py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95">
             {/* Using the image but ensuring it pops against the background */}
            <img 
              src="https://i.ibb.co/twDPv7RT/Gemini-Generated-Image-dt08xtdt08xtdt08-Photo-Grid.png" 
              alt="SevenStar7 Full Logo" 
              className={`h-12 md:h-14 w-auto object-contain ${isScrolled ? 'brightness-0 contrast-200' : 'drop-shadow-[0_0_15px_rgba(250,187,46,0.3)]'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.id} 
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group/link ${
                    isScrolled ? 'text-gray-600 hover:text-brand-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {getNavLabel(item.id)}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 w-0 group-hover/link:w-full"></span>
                </a>
              ) : (
                <Link 
                  key={item.id} 
                  to={item.path}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group/link ${
                    location.pathname === item.path 
                      ? 'text-brand-gold' 
                      : isScrolled ? 'text-gray-600 hover:text-brand-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {getNavLabel(item.id)}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                </Link>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle - Desktop */}
            <div className="hidden lg:block">
              <LanguageToggle variant="header" />
            </div>
            
            <a 
              href={EXTERNAL_LINK} 
              target="_blank" 
              rel="noreferrer"
              className={`px-4 md:px-6 py-2.5 rounded-xl font-black text-xs md:text-xs shadow-xl flex items-center gap-2 active:scale-95 transition-all uppercase tracking-widest ${
                  isScrolled 
                  ? 'bg-brand-black text-white hover:bg-gray-800' 
                  : 'gold-btn-gradient text-brand-black border border-brand-gold/20'
              }`}
            >
              <span className="hidden sm:inline">{t('ui.playNow')}</span>
              <span className="sm:hidden">{t('ui.playNow')}</span>
              <Gamepad2 size={14} strokeWidth={3} />
            </a>
            
            <button 
              className={`lg:hidden p-2 rounded-xl border ${isScrolled ? 'text-brand-black border-gray-300' : 'text-white bg-white/5 border-white/10'}`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile-First Full-Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[110] transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden`}>
        <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-[85%] bg-brand-dark shadow-2xl p-8 flex flex-col border-l border-white/10">
          <div className="flex justify-between items-center mb-10">
            <img 
              src="https://i.ibb.co/twDPv7RT/Gemini-Generated-Image-dt08xtdt08xtdt08-Photo-Grid.png" 
              alt="SevenStar7" 
              className="h-12 w-auto object-contain"
            />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 bg-white/5 rounded-full border border-white/10">
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4">
            {/* Language Toggle - Mobile */}
            <LanguageToggle variant="mobile" />
            
            {NAV_ITEMS.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.id} 
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-tighter py-3 border-b border-white/5 flex items-center justify-between text-gray-300"
                >
                  {getNavLabel(item.id)}
                  <ExternalLink size={16} className="opacity-10" />
                </a>
              ) : (
                <Link 
                  key={item.id} 
                  to={item.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-black uppercase tracking-tighter py-3 border-b border-white/5 flex items-center justify-between ${
                    location.pathname === item.path ? 'text-brand-gold' : 'text-gray-300'
                  }`}
                >
                  {getNavLabel(item.id)}
                  <ExternalLink size={16} className="opacity-10" />
                </Link>
              )
            ))}
          </nav>

          <div className="mt-auto space-y-6">
            <div className="p-5 rounded-2xl bg-brand-gold/5 border border-brand-gold/10">
               <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-center">{t('ui.readyToWin')}</p>
               <a 
                href={EXTERNAL_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-4 rounded-xl gold-btn-gradient text-center text-brand-black font-black text-lg shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all"
               >
                {t('ui.playNow')} <Gamepad2 size={20} />
               </a>
            </div>
            
            <div className="flex justify-center gap-4 text-gray-600 text-[10px] font-black tracking-widest">
              <span>{t('ui.support24_7')}</span>
              <span>•</span>
              <span>{t('ui.malaysia')}</span>
              <span>•</span>
              <span>{t('ui.ageRestriction')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;