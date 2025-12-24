import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Gift, ExternalLink, Users, Globe } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';
import { useTranslation } from '../src/hooks/useTranslation';
import { useLanguageContext } from '../src/contexts/LanguageContext';

const MobileBottomNav: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { language, toggleLanguage } = useLanguageContext();

    const navItems = [
        {
            id: 'home',
            label: t('nav.home'),
            icon: Star,
            path: '/',
            isExternal: false,
        },
        {
            id: 'lang',
            label: language === 'zh' ? '中/EN' : 'EN/中',
            icon: Globe,
            path: '#',
            isExternal: false,
            isLanguage: true,
        },
        {
            id: 'play',
            label: t('ui.play'),
            icon: ExternalLink,
            path: EXTERNAL_LINK,
            isExternal: true,
            isCenter: true,
        },
        {
            id: 'bonus',
            label: t('ui.bonus') || 'Bonus',
            icon: Gift,
            path: EXTERNAL_LINK,
            isExternal: true,
        },
        {
            id: 'partner',
            label: t('nav.partner'),
            icon: Users,
            path: '/partner',
            isExternal: false,
        },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-black/90 backdrop-blur-xl border-t border-white/10 px-2 pt-2 pb-6 shadow-[0_-15px_40px_rgba(0,0,0,0.8)]">
            <div className="grid grid-cols-5 items-end justify-items-center max-w-md mx-auto relative">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    if (item.isCenter) {
                        return (
                            <a
                                key={item.id}
                                href={item.path}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center gap-1.5 -mt-10 mb-1 active:scale-90 transition-all group"
                            >
                                <div className="bg-brand-gold text-brand-black p-4 rounded-2xl shadow-[0_0_25px_rgba(250,187,46,0.6)] border-[5px] border-brand-black group-hover:shadow-[0_0_35px_rgba(250,187,46,0.8)] transition-shadow">
                                    <Icon size={24} strokeWidth={3} />
                                </div>
                                <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.15em]">
                                    {item.label}
                                </span>
                            </a>
                        );
                    }

                    if (item.isLanguage) {
                        return (
                            <button
                                key={item.id}
                                onClick={toggleLanguage}
                                className="flex flex-col items-center gap-1 py-1.5 w-full active:scale-95 transition-all text-brand-gold"
                            >
                                <Icon size={20} className="text-brand-gold" />
                                <span className="text-[8px] font-black text-brand-gold uppercase tracking-tighter">
                                    {item.label}
                                </span>
                            </button>
                        );
                    }

                    if (item.isExternal) {
                        return (
                            <a
                                key={item.id}
                                href={item.path}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col items-center gap-1 py-1.5 w-full active:scale-95 transition-all"
                            >
                                <Icon size={20} className="text-gray-400" />
                                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">
                                    {item.label}
                                </span>
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex flex-col items-center gap-1 py-1.5 w-full active:scale-95 transition-all ${isActive ? 'text-brand-gold' : 'text-gray-400'
                                }`}
                        >
                            <Icon size={20} fill={isActive ? "#fabb2e" : "none"} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-[8px] font-black uppercase tracking-tighter ${isActive ? 'text-brand-gold' : 'text-gray-500'
                                }`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileBottomNav;
