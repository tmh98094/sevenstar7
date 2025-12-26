import React from 'react';
import { useParams } from 'react-router-dom';
import { GAME_CATEGORIES, FEATURED_GAMES, EXTERNAL_LINK } from '../constants';
import GameShowcaseCard from '../components/GameShowcaseCard';
import { CheckCircle, Play } from 'lucide-react';
import { useTranslation } from '../src/hooks/useTranslation';
import SEO from '../components/SEO';

const CategoryPage: React.FC = () => {
    const { t } = useTranslation();
    const { categoryId } = useParams();

    // Clean up the ID to match keys (remove first slash if needed, handled by router usually)
    const categoryKey = Object.keys(GAME_CATEGORIES).find(key => key === categoryId) || 'slots';
    const rawData = GAME_CATEGORIES[categoryKey];

    // Get translated data
    const data = {
        title: t(`categories.${categoryKey}.title`) || rawData.title,
        description: t(`categories.${categoryKey}.description`) || rawData.description,
        longDescription: t(`categories.${categoryKey}.longDescription`) || rawData.longDescription,
        features: (t(`categories.${categoryKey}.features`) as unknown as string[]) || rawData.features,
        coverImage: rawData.coverImage,
        providers: rawData.providers
    };

    // Mock relevant games
    const relevantGames = FEATURED_GAMES.map((g, i) => ({
        ...g,
        id: `${categoryKey}-${i}`,
        title: `${data.title} Game ${i + 1}`,
        imageUrl: `https://picsum.photos/seed/${categoryKey}${i}/400/300`,
        description: `Experience the thrill of ${data.title} with high payouts.`
    }));

    return (
        <div className="bg-brand-black min-h-screen pt-20">
            <SEO
                title={`${data.title} Games Malaysia | Best ${data.title} Online - SevenStar7`}
                description={`Play the best ${data.title} games in Malaysia. ${data.description} High RTP, instant withdrawals. Official SevenStar7.`}
                keywords={`${data.title} Malaysia, ${data.title} Online, Best ${data.title}, SevenStar7 ${data.title}`}
                canonicalUrl={`/${categoryId}`}
            />

            {/* Category Hero */}
            <div className="relative h-[60vh] flex items-center">
                <img
                    src={data.coverImage}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/0 via-brand-black/50 to-brand-black"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-brand-gold font-bold tracking-widest uppercase mb-2 block">SevenStar7 Games</span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">{data.title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed">
                        {data.description}
                    </p>
                    <a
                        href={EXTERNAL_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="gold-btn-gradient px-8 py-3 rounded-lg text-brand-black font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                        <Play size={20} fill="#000" /> {t('ui.playNow')}
                    </a>
                </div>
            </div>

            {/* Info Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">{t('categoryPage.about')} {data.title}</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            {data.longDescription}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4">{t('categoryPage.whyPlay').replace('%{category}', data.title)}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Array.isArray(data.features) && data.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-brand-dark p-4 rounded-lg border border-white/5">
                                    <CheckCircle className="text-brand-gold flex-shrink-0" size={20} />
                                    <span className="text-gray-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Providers Sidebar */}
                    <div className="bg-brand-dark p-8 rounded-2xl border border-white/5 h-fit">
                        <h3 className="text-xl font-bold text-white mb-6">{t('categoryPage.availableProviders')}</h3>
                        <div className="flex flex-wrap gap-3">
                            {data.providers.map(provider => (
                                <span key={provider} className="bg-brand-black px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10">
                                    {provider}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-500 mb-4">{t('categoryPage.readyToStart')}</p>
                            <a
                                href={EXTERNAL_LINK}
                                className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors"
                            >
                                {t('ui.playNow')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Games in Category */}
            <section className="py-20 bg-brand-dark border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8">{t('categoryPage.popularTitles').replace('%{category}', data.title)}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relevantGames.map(game => (
                            <GameShowcaseCard key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CategoryPage;