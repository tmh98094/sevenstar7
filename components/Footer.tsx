import React from 'react';
import { Facebook, Twitter, Instagram, ShieldCheck, ExternalLink, ShieldAlert } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';
import AutoScroll from './AutoScroll';
import { useTranslation } from '../src/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const navigationItems = [
    t('footer.home'),
    t('footer.exclusiveCrocoHub'),
    t('footer.liveCasino'),
    t('footer.slots'),
    t('footer.partnerProgram')
  ];

  const supportItems = [
    t('footer.accountSecurity'),
    t('footer.winningStrategies'),
    t('footer.bonusTerms'),
    t('footer.cryptoGuide'),
    t('footer.responsibleGaming')
  ];

  return (
    <footer className="bg-brand-dark pt-16 pb-32 lg:pb-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <img
              src="https://i.ibb.co/LzrMf595/Gemini-Generated-Image-dt08xtdt08xtdt08-Photo-Grid.png"
              alt="SevenStar7"
              className="h-20 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              {t('footer.mission')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="https://sevenstar7.com/index/?rid=SS7FT0004" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-black transition-all shadow-xl">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Core Hubs */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 border-l-2 border-brand-gold pl-4">{t('footer.navigation')}</h3>
            <ul className="space-y-5 text-sm text-gray-400 font-bold">
              {navigationItems.map((item) => (
                <li key={item}>
                  <a href={EXTERNAL_LINK} className="hover:text-brand-gold transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Partner Links */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 border-l-2 border-brand-gold pl-4">{t('footer.playerSupport')}</h3>
            <ul className="space-y-5 text-sm text-gray-400 font-bold">
              {supportItems.map((item) => (
                <li key={item}>
                  <a href={EXTERNAL_LINK} className="hover:text-brand-gold transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Seals */}
          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8 border-l-2 border-brand-gold pl-4">{t('footer.authority')}</h3>
            <div className="bg-white/10 p-8 rounded-[2.5rem] border border-white/10 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="flex items-center gap-4 text-white text-sm font-black tracking-tight relative z-10">
                <ShieldCheck className="text-brand-gold" size={32} />
                <div className="flex flex-col">
                  <span className="text-base">{t('footer.pagcorLicensed')}</span>
                  <span className="text-[9px] text-gray-300 uppercase tracking-widest">{t('footer.officialPartner')}</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed uppercase tracking-widest font-bold opacity-90">
                {t('footer.encryptedRegulated')}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {['DUITNOW', 'USDT'].map(p => (
                  <span key={p} className="text-[10px] font-black text-white border border-white/20 px-3 py-2 rounded-xl uppercase bg-black/20 text-center hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-colors">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Certifications Strip */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            {t('footer.secure')} • {t('footer.private')} • {t('footer.licensed')}
          </p>
          <div className="w-full overflow-hidden">
            <AutoScroll>
              {/* Images displayed in full color (no filters) */}
              <img src="https://sevenstar7.com/images/footer/bmm.svg" className="h-6 md:h-10 mx-4" alt="BMM" />
              <img src="https://sevenstar7.com/images/footer/itech_labs1.png" className="h-6 md:h-10 mx-4" alt="iTech Labs" />
              <img src="https://sevenstar7.com/images/footer/gli.svg" className="h-6 md:h-10 mx-4" alt="GLI" />
              <img src="https://sevenstar7.com/images/footer/tst.svg" className="h-6 md:h-10 mx-4" alt="TST" />
              <img src="https://sevenstar7.com/images/footer/godaddy.svg" className="h-6 md:h-10 mx-4" alt="GoDaddy" />
            </AutoScroll>
          </div>

          <div className="mt-16 bg-red-600 p-6 rounded-[2rem] shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-2">
              <ShieldAlert size={14} /> {t('footer.legalNotice')}
            </p>
            <p className="mt-4 text-red-100 text-[10px] font-bold uppercase tracking-[0.2em]">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;