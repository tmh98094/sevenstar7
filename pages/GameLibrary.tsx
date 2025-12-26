import React, { useState, useEffect } from 'react';
import { Gamepad2, Search, Filter, Flame, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_GAMES, GAME_CATEGORIES, CROCO_GAMES, SLOT_GAMES, SLOT_PROVIDERS, LIVE_GAMES, SPORTS_GAMES } from '../constants';
import GameShowcaseCard from '../components/GameShowcaseCard';
import { useTranslation } from '../src/hooks/useTranslation';
import SEO from '../components/SEO';

const GameLibrary: React.FC = () => {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<'games' | 'providers'>('games');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(window.innerWidth < 768 ? 6 : 10);

    // Update gamesPerPage on resize
    useEffect(() => {
        const handleResize = () => {
            setGamesPerPage(window.innerWidth < 768 ? 6 : 10);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Switch between individual games and provider logos
    const allGames = viewMode === 'games'
        ? [
            ...CROCO_GAMES,
            ...SLOT_GAMES,
            ...LIVE_GAMES,
            ...SPORTS_GAMES
        ]
        : [
            ...SLOT_PROVIDERS,
            ...LIVE_GAMES,
            ...SPORTS_GAMES
        ];

    const filteredGames = (() => {
        if (activeCategory === 'new' && viewMode === 'games') {
            // Randomly select 18 games
            return [...allGames]
                .sort(() => 0.5 - Math.random())
                .slice(0, 18);
        }

        let games = allGames.filter(game => {
            let matchesCategory = true;
            if (activeCategory === 'popular') {
                // Prioritize Pragmatic Play, JILI, and FC games
                const priorityProviders = ['Pragmatic Play', 'JILI', 'FC'];
                matchesCategory = priorityProviders.includes(game.provider) || Math.random() > 0.7;
            } else if (activeCategory !== 'all' && activeCategory !== 'new') {
                const searchCategory = activeCategory.toLowerCase().replace('-', ' ');
                matchesCategory = game.category.toLowerCase().includes(searchCategory) ||
                    game.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
                    (activeCategory === 'exclusive' && game.category === 'Exclusive');
            }

            const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || game.provider.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Sort popular games to show priority providers first
        if (activeCategory === 'popular') {
            const priorityProviders = ['Pragmatic Play', 'JILI', 'FC'];
            games = games.sort((a, b) => {
                const aIsPriority = priorityProviders.includes(a.provider);
                const bIsPriority = priorityProviders.includes(b.provider);
                if (aIsPriority && !bIsPriority) return -1;
                if (!aIsPriority && bIsPriority) return 1;
                return 0;
            });
        }

        return games;
    })();

    // Pagination Logic
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Reset page on filter change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchTerm]);

    const categories = [
        { id: 'all', label: t('gameLibrary.allGames'), icon: null },
        { id: 'popular', label: t('gameLibrary.popular'), icon: Flame },
        { id: 'new', label: t('gameLibrary.new'), icon: Sparkles },
        ...Object.values(GAME_CATEGORIES).map(c => ({ id: c.id, label: c.title, icon: null }))
    ];

    return (
        <div className="bg-brand-black min-h-screen pt-24 pb-20">
            <SEO
                title="All Casino Games Malaysia | 500+ Slots, Live Casino & Sports - SevenStar7"
                description="Browse 500+ casino games including exclusive Croco slots, live baccarat, roulette, and sports betting. Play now on Malaysia's trusted platform."
                keywords="Casino Games Malaysia, Online Slots, Live Casino, Sports Betting, SevenStar7 Games"
                canonicalUrl="/games"
            />
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">{t('ui.completeCatalog')}</span>
                    <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">{t('ui.gameLibrary')}</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('ui.exploreCollection')}
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-brand-dark p-4 rounded-2xl border border-white/5">

                    {/* Categories */}
                    <div className="flex overflow-x-auto gap-2 w-full md:w-auto pb-2 md:pb-0 no-scrollbar items-center">
                        {categories.map(cat => {
                            const Icon = cat.icon;
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase whitespace-nowrap transition-all border flex items-center gap-2 ${isActive
                                        ? 'bg-brand-gold text-brand-black border-brand-gold'
                                        : 'bg-black/20 text-gray-400 border-white/5 hover:bg-white/5'
                                        }`}
                                >
                                    {Icon && <Icon size={14} className={isActive ? 'text-black' : (cat.id === 'popular' ? 'text-orange-500' : 'text-blue-400')} />}
                                    {cat.label}
                                </button>
                            )
                        })}
                    </div>

                    {/* View Toggle - ONLY SHOW FOR SLOTS */}
                    {activeCategory === 'slots' && (
                        <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                            <button
                                onClick={() => setViewMode('games')}
                                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${viewMode === 'games'
                                    ? 'bg-brand-gold text-brand-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {t('gameLibrary.viewGames')}
                            </button>
                            <button
                                onClick={() => setViewMode('providers')}
                                className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${viewMode === 'providers'
                                    ? 'bg-brand-gold text-brand-black shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {t('gameLibrary.viewProviders')}
                            </button>
                        </div>
                    )}

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder={t('gameLibrary.searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-gold/50"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mb-12">
                    {currentGames.length > 0 ? (
                        currentGames.map(game => (
                            <GameShowcaseCard key={game.id} game={game} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            <Gamepad2 size={48} className="mx-auto mb-4 opacity-20" />
                            <p>{t('gameLibrary.noResults')}</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-3 rounded-lg bg-brand-dark border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-brand-gold transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`w-10 h-10 rounded-lg text-sm font-bold border transition-colors ${currentPage === i + 1
                                    ? 'bg-brand-gold text-brand-black border-brand-gold'
                                    : 'bg-brand-dark text-gray-400 border-white/10 hover:border-brand-gold/50'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-3 rounded-lg bg-brand-dark border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-brand-gold transition-colors"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameLibrary;