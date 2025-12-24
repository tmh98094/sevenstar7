import React from 'react';
import { Gift, Calendar, Check } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';
import { useTranslation } from '../src/hooks/useTranslation';

const Promotions: React.FC = () => {
  const { t } = useTranslation();
  const promos = [
    {
      title: t('promotions.titles.welcome'),
      desc: t('promotions.descriptions.welcome'),
      code: "WELCOME888",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: t('promotions.titles.reload'),
      desc: t('promotions.descriptions.reload'),
      code: "RELOAD10",
      color: "from-red-600 to-orange-600"
    },
    {
      title: t('promotions.titles.rescue'),
      desc: t('promotions.descriptions.rescue'),
      code: "RESCUE",
      color: "from-green-600 to-teal-600"
    },
    {
      title: t('promotions.titles.birthday'),
      desc: t('promotions.descriptions.birthday'),
      code: "BDAYVIP",
      color: "from-brand-gold to-yellow-600"
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-display font-black text-white mb-4 text-center">{t('promotions.heroTitle')}</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          {t('promotions.heroSubtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((p, i) => (
            <div key={i} className="bg-brand-dark rounded-2xl overflow-hidden border border-white/5 flex flex-col">
              <div className={`h-32 bg-gradient-to-r ${p.color} p-8 flex items-center`}>
                <Gift className="text-white w-12 h-12 opacity-80" />
                <h3 className="text-2xl font-bold text-white ml-6">{p.title}</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-300 text-lg mb-6 flex-1">{p.desc}</p>
                <div className="bg-black/30 p-4 rounded-lg flex justify-between items-center mb-6 border border-dashed border-gray-600">
                  <span className="text-gray-500 text-sm font-mono">{t('promotions.promoCode')}</span>
                  <span className="text-brand-gold font-bold font-mono text-xl tracking-wider">{p.code}</span>
                </div>
                <a
                  href={EXTERNAL_LINK}
                  className="w-full block text-center bg-white text-brand-black font-bold py-3 rounded hover:bg-gray-200 transition-colors"
                >
                  {t('promotions.claimNow')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-dark p-8 rounded-2xl border border-white/5">
          <h3 className="text-2xl font-bold text-white mb-6">{t('promotions.termsTitle')}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex gap-3 text-gray-400">
              <Check className="text-green-500 shrink-0" /> {t('promotions.term1')}
            </li>
            <li className="flex gap-3 text-gray-400">
              <Check className="text-green-500 shrink-0" /> {t('promotions.term2')}
            </li>
            <li className="flex gap-3 text-gray-400">
              <Check className="text-green-500 shrink-0" /> {t('promotions.term3')}
            </li>
            <li className="flex gap-3 text-gray-400">
              <Check className="text-green-500 shrink-0" /> {t('promotions.term4')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
