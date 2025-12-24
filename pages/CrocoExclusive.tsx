import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Trophy, Target, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { EXTERNAL_LINK, CROCO_GAMES } from '../constants';
import GameShowcaseCard from '../components/GameShowcaseCard';
import SEO from '../components/SEO';
import TrackedLink from '../components/TrackedLink';

const CrocoExclusive: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // Pagination: 6 games per page
    const gamesPerPage = 6;
    const totalPages = Math.ceil(CROCO_GAMES.length / gamesPerPage);
    const games = CROCO_GAMES.slice(
        currentPage * gamesPerPage,
        (currentPage + 1) * gamesPerPage
    );

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Croco Gaming Exclusive Access",
        "description": "Exclusive high-RTP slots and arcade games from Croco Gaming, available only on SevenStar7 Malaysia.",
        "brand": {
            "@type": "Brand",
            "name": "Croco Gaming"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://sevenstar7.com/croco-exclusive",
            "priceCurrency": "MYR",
            "price": "100.00",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "SevenStar7"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
        }
    };

    return (
        <div className="bg-brand-black min-h-screen pt-20">
            <SEO
                title="SevenStar7 x Croco Gaming | Exclusive Official Partner Malaysia"
                description="Play exclusive Croco Gaming slots in Malaysia. 98.5% RTP, daily tournaments, and instant withdrawal. official partner link."
                schema={structuredData}
            />

            {/* Exclusive Hero */}
            <div className="relative bg-[#052e16] overflow-hidden">
                {/* Abstract Background Patterns */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/30 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-500/30 px-6 py-2 rounded-full text-green-400 font-bold animate-pulse">
                            <Crown size={18} /> OFFICIAL EXCLUSIVE PARTNER
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full max-w-[600px] mb-12"
                    >
                        <div className="absolute inset-0 bg-green-500/20 blur-[120px] rounded-full"></div>
                        <img
                            src="/Croco SVG.svg"
                            className="w-full h-auto drop-shadow-[0_0_60px_rgba(34,197,94,0.5)] relative z-10"
                            alt="Croco Gaming"
                        />
                    </motion.div>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12 font-medium">
                        SevenStar7 is the **sole authorized distributor** of Croco Gaming in Malaysia.
                        Experience high-volatility slots and arcade games that you cannot find anywhere else.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <TrackedLink
                            href={EXTERNAL_LINK}
                            eventName="play_croco_hero"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-600 hover:bg-green-500 text-white text-lg font-black py-5 px-12 rounded-xl shadow-[0_0_50px_rgba(22,163,74,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-widest"
                        >
                            Start Winning Now <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-brand-dark p-8 rounded-2xl border border-green-900/50 shadow-xl">
                            <Sparkles className="text-green-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold text-white mb-4">Higher RTP</h3>
                            <p className="text-gray-400">Croco Gaming titles on SevenStar7 feature an exclusive Return-To-Player rate of 98.5%, significantly higher than the industry standard.</p>
                        </div>
                        <div className="bg-brand-dark p-8 rounded-2xl border border-green-900/50 shadow-xl">
                            <Trophy className="text-green-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold text-white mb-4">Daily Tournaments</h3>
                            <p className="text-gray-400">Participate in daily leaderboards automatically when you play any Croco game. Prize pools up to MYR 50,000 daily.</p>
                        </div>
                        <div className="bg-brand-dark p-8 rounded-2xl border border-green-900/50 shadow-xl">
                            <Target className="text-green-500 mb-6" size={40} />
                            <h3 className="text-2xl font-bold text-white mb-4">Arcade Mechanics</h3>
                            <p className="text-gray-400">Not just slots—skill-based arcade shooting and adventure games where your decisions impact your winnings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase */}
            <section className="py-20 bg-brand-dark/50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-white mb-2">Exclusive Titles</h2>
                            <p className="text-gray-500">Only available on SevenStar7</p>
                        </div>
                        <TrackedLink href={EXTERNAL_LINK} eventName="view_all_croco" target="_blank" className="text-green-500 font-bold flex items-center gap-2 hover:underline">
                            See All <ArrowRight size={20} />
                        </TrackedLink>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                        {games.map(game => (
                            <GameShowcaseCard key={game.id} game={game} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                                disabled={currentPage === 0}
                                className="px-6 py-2 rounded-lg bg-white/5 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                ← Prev
                            </button>
                            <span className="text-gray-400 text-sm font-bold">
                                Page {currentPage + 1} of {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                                disabled={currentPage === totalPages - 1}
                                className="px-6 py-2 rounded-lg bg-white/5 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                Next →
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Mini FAQ */}
            <section className="py-20 bg-brand-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-display font-black text-white mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is Croco Gaming fair?", a: "Yes. Croco Gaming is certified by BMM Testlabs. As an exclusive partner, we guarantee the integrity of every spin with visible RTP stats." },
                            { q: "Can I play on mobile?", a: "Optimized for iOS and Android. No download required. Experience 60fps gameplay directly in your browser." },
                            { q: "How to claim the Croco Bonus?", a: "Register an account, select 'Croco Welcome Deposit', and receive an instant 150% match tailored for Croco games." }
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-dark p-6 rounded-xl border border-white/5">
                                <h4 className="font-bold text-white flex items-center gap-3 mb-2">
                                    <HelpCircle size={18} className="text-green-500" /> {item.q}
                                </h4>
                                <p className="text-gray-400 text-sm ml-8">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CrocoExclusive;
