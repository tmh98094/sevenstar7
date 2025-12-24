import React from 'react';
import { Crown, Star, Gem, Award } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';

const VIP: React.FC = () => {
  const tiers = [
    { name: "Silver", icon: Star, color: "text-gray-400", deposit: "MYR 50,000" },
    { name: "Gold", icon: Award, color: "text-brand-gold", deposit: "MYR 150,000" },
    { name: "Platinum", icon: Gem, color: "text-blue-400", deposit: "MYR 500,000" },
    { name: "Diamond", icon: Crown, color: "text-purple-400", deposit: "Invite Only" },
  ];

  return (
    <div className="bg-brand-black min-h-screen pt-20">
      {/* VIP Header */}
      <div className="bg-gradient-to-b from-brand-gold/10 to-brand-black py-20 text-center">
        <Crown className="w-20 h-20 text-brand-gold mx-auto mb-6 animate-pulse" />
        <h1 className="text-5xl font-display font-black text-white mb-4">SevenStar7 VIP Club</h1>
        <p className="text-xl text-gray-300">Elite privileges for elite players.</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {tiers.map((t, i) => (
            <div key={i} className="bg-brand-dark p-8 rounded-xl border border-white/5 text-center hover:border-brand-gold/50 transition-colors">
              <t.icon className={`w-12 h-12 mx-auto mb-4 ${t.color}`} />
              <h3 className={`text-2xl font-bold mb-2 ${t.color}`}>{t.name}</h3>
              <p className="text-sm text-gray-500 mb-6">Requirement: {t.deposit}</p>
              <ul className="text-left space-y-3 text-sm text-gray-400">
                <li>• Priority Withdrawal</li>
                <li>• Dedicated Account Manager</li>
                <li>• Higher Betting Limits</li>
                {i > 1 && <li>• Birthday Gifts</li>}
                {i > 2 && <li>• Luxury Holiday Trips</li>}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
           <h2 className="text-3xl font-bold text-white mb-6">Join the Elite</h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-8">
             Your gameplay is automatically tracked. Once you meet the turnover requirements, our VIP team will contact you personally.
           </p>
           <a 
             href={EXTERNAL_LINK} 
             className="gold-btn-gradient px-12 py-4 rounded-full font-bold text-brand-black text-lg inline-block"
           >
             START PLAYING
           </a>
        </div>
      </div>
    </div>
  );
};

export default VIP;
