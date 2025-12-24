import React from 'react';
import { Users, TrendingUp, ShieldCheck, DollarSign, PieChart, CheckCircle2 } from 'lucide-react';
import { EXTERNAL_LINK } from '../constants';
import { useTranslation } from '../src/hooks/useTranslation';

const CommissionCalculator: React.FC = () => {
    const { t } = useTranslation();
    const [turnover, setTurnover] = React.useState(100000);
    const [netWin, setNetWin] = React.useState(15000);

    const calculateCommission = (to: number, win: number) => {
        let rate = 0;
        if (to >= 800001 && win >= 80001) rate = 0.25;
        else if (to >= 500001 && win >= 50001) rate = 0.18;
        else if (to >= 300001 && win >= 10001) rate = 0.12;
        else rate = 0.05;

        return { rate, commission: win * rate };
    };

    const { rate, commission } = calculateCommission(turnover, netWin);

    return (
        <div className="bg-brand-black/50 p-6 md:p-8 rounded-2xl border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{t('partnerProgram.totalTurnover')}</label>
                    <input
                        type="range"
                        min="0"
                        max="1000000"
                        step="10000"
                        value={turnover}
                        onChange={(e) => setTurnover(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="mt-2 text-white font-black text-xl">{turnover.toLocaleString()}</div>
                </div>
                <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">{t('partnerProgram.totalNetLoss')}</label>
                    <input
                        type="range"
                        min="0"
                        max="150000"
                        step="1000"
                        value={netWin}
                        onChange={(e) => setNetWin(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    <div className="mt-2 text-white font-black text-xl">{netWin.toLocaleString()}</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 p-6 rounded-xl border border-white/5">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="text-gray-400 text-xs uppercase mb-1">{t('partnerProgram.yourTierRate')}</div>
                    <div className="text-2xl font-black text-white">{(rate * 100).toFixed(0)}%</div>
                </div>
                <div className="text-center md:text-right">
                    <div className="text-brand-gold text-xs uppercase mb-1 font-bold">{t('partnerProgram.estimatedIncome')}</div>
                    <div className="text-4xl font-black text-brand-gold">MYR {commission.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
            </div>
        </div>
    );
};

import SEO from '../components/SEO';
import TrackedLink from '../components/TrackedLink';

const PartnerProgram: React.FC = () => {
    const { t } = useTranslation();
    const affiliateSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SevenStar7 Affiliate Program",
        "description": "Join the highest paying casino affiliate program in Malaysia. Up to 25% lifetime commission.",
        "url": "https://sevenstar7.com/partner",
        "potentialAction": {
            "@type": "JoinAction",
            "target": "https://sevenstar7.com/partnerr/register"
        }
    };

    return (
        <div className="bg-brand-black min-h-screen pt-20">
            <SEO
                title="Best Casino Affiliate Program Malaysia | Earn 25% Commission - SevenStar7"
                description="Become a SevneStar7 partner and earn up to 40% monthly commission. automated settlements, real-time dashboard, and lifetime referral income."
                schema={affiliateSchema}
            />

            {/* Hero */}
            <div className="bg-gradient-to-b from-brand-gold/10 to-brand-black py-20 text-center px-4">
                <Users className="w-20 h-20 text-brand-gold mx-auto mb-6 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-4">{t('partnerProgram.heroTitle')}</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    {t('partnerProgram.heroSubtitle')}
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">

                {/* Benefits Grid */}
                <section>
                    <h2 className="text-3xl font-display font-black text-white mb-8 text-center">{t('partnerProgram.partnerBenefits')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: t('partnerProgram.benefit1Title'), desc: t('partnerProgram.benefit1Desc'), icon: PieChart },
                            { title: t('partnerProgram.benefit2Title'), desc: t('partnerProgram.benefit2Desc'), icon: ShieldCheck },
                            { title: t('partnerProgram.benefit3Title'), desc: t('partnerProgram.benefit3Desc'), icon: TrendingUp },
                            { title: t('partnerProgram.benefit4Title'), desc: t('partnerProgram.benefit4Desc'), icon: DollarSign }
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-dark p-6 rounded-xl border border-white/5 hover:border-brand-gold/50 transition-all">
                                <item.icon className="w-10 h-10 text-brand-gold mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Commission Calculator */}
                <section className="bg-brand-dark p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                    <h2 className="text-3xl font-display font-black text-white mb-2 text-center">{t('partnerProgram.calculateEarnings')}</h2>
                    <p className="text-gray-400 text-center mb-10 text-sm">{t('partnerProgram.calculateSubtitle')}</p>

                    <CommissionCalculator />

                    <div className="mt-8 text-xs text-gray-500 space-y-2 text-center max-w-2xl mx-auto">
                        <p>{t('partnerProgram.calculatorNote1')}</p>
                        <p>{t('partnerProgram.calculatorNote2')}</p>
                    </div>
                </section>

                {/* Calculation Details */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-dark p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-gold pl-3">{t('partnerProgram.commissionFormula')}</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><strong className="text-white">Bonuses:</strong> Promotional credits, rewards, rebates, cashback claimed by players.</li>
                            <li><strong className="text-white">Transfer Fee:</strong> 1.5% fee on total deposits; 0.5% fee on total withdrawals.</li>
                            <li><strong className="text-white">Platform Fee:</strong> 20% fee on total member profits.</li>
                        </ul>
                    </div>

                    <div className="bg-brand-dark p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">{t('partnerProgram.subPartnerPlan')}</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            A long-term income system designed for "partners referring partners".
                        </p>
                        <p className="text-sm text-gray-400">
                            {t('partnerProgram.subPartnerDesc')}
                        </p>
                    </div>
                </section>

                {/* Why Choose */}
                <section>
                    <h2 className="text-3xl font-display font-black text-white mb-10 text-center">{t('partnerProgram.whySevenstar')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { head: "Zero Barrier", sub: "Earn profit with no conditions" },
                            { head: "Dashboard", sub: "Real-time bets, results & commissions" },
                            { head: "No Cost", sub: "Start earning without setup fees" },
                            { head: "Stable Income", sub: "Monthly auto-settlement, clear data" },
                            { head: "Referral Bonus", sub: "Lifetime 10% from sub-partners" },
                            { head: "Support", sub: "Help with withdrawals & reports" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white">{item.head}</h4>
                                    <p className="text-sm text-gray-500">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Terms */}
                <section className="bg-gray-900/50 p-8 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-300 mb-4 uppercase tracking-widest">{t('partnerProgram.paymentTerms')}</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                        <li>Commissions are settled monthly and released on the 5th–7th.</li>
                        <li>Funds are automatically credited to the partner account.</li>
                        <li>Withdrawal requests must be submitted via the partner portal.</li>
                        <li>Approved withdrawals are transferred to the registered bank account on the same day. (Bank account name must match the registered partner account.)</li>
                        <li>Minimum withdrawal: MYR 100 (local bank or cryptocurrency).</li>
                        <li>SevenStar reserves the right to modify, suspend, or terminate commission rates and calculation methods at any time.</li>
                    </ul>
                </section>

                <div className="text-center pb-12">
                    <TrackedLink
                        href={EXTERNAL_LINK}
                        eventName="partner_join_click"
                        target="_blank"
                        rel="noreferrer"
                        className="gold-btn-gradient px-12 py-4 rounded-full font-bold text-brand-black text-lg inline-block shadow-xl hover:scale-105 transition-transform"
                    >
                        {t('ui.joinNow')}
                    </TrackedLink>
                </div>

            </div>
        </div>
    );
};
export default PartnerProgram;