import React, { useState } from 'react';
import { Crown, Gamepad2, Tv, Trophy, Fish, Joystick, Spade, ArrowRight, ShieldAlert, Zap, ExternalLink, ShieldCheck, Star, BadgeCheck, CheckCircle2, Award, HelpCircle, Gift, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_GAMES, ACHIEVEMENTS, EXTERNAL_LINK, GAME_CATEGORIES, BLOG_POSTS, PARTNERS, TESTIMONIALS, FAQS, CROCO_GAMES, SLOT_GAMES, SLOT_PROVIDERS, LIVE_GAMES, SPORTS_GAMES } from '../constants';
import GameShowcaseCard from '../components/GameShowcaseCard';
import AutoScroll from '../components/AutoScroll';
import TrackedLink from '../components/TrackedLink';
import SEO from '../components/SEO';
import { useTranslation } from '../src/hooks/useTranslation';

const getCategoryIcon = (id: string) => {
  switch (id) {
    case 'exclusive': return Crown;
    case 'slots': return Gamepad2;
    case 'live-casino': return Tv;
    case 'sports': return Trophy;
    case 'fish': return Fish;
    case 'esport': return Joystick;
    case 'poker': return Spade;
    default: return Star;
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

import GameDetailModal from '../components/GameDetailModal';
import { Game } from '../types';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('exclusive');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [testimonialStartIndex, setTestimonialStartIndex] = useState<number>(0);
  const { t } = useTranslation();

  // Helper functions for translations
  const getCategoryTitle = (categoryId: string) => {
    return t(`categories.${categoryId}.title`);
  };

  const getTestimonialMessage = (testimonialId: string) => {
    return t(`testimonials.${testimonialId}.message`);
  };

  const getTestimonialGame = (testimonialId: string) => {
    return t(`testimonials.${testimonialId}.game`);
  };

  const getAchievementTitle = (achievementId: string) => {
    return t(`achievements.${achievementId}.title`);
  };

  const getAchievementDescription = (achievementId: string) => {
    return t(`achievements.${achievementId}.description`);
  };

  const getFAQQuestion = (faqId: string) => {
    return t(`faq.${faqId}.question`);
  };

  const getFAQAnswer = (faqId: string) => {
    return t(`faq.${faqId}.answer`);
  };

  // Get all games for active category
  const allCategoryGames = (() => {
    switch (activeCategory) {
      case 'exclusive':
        return CROCO_GAMES; // 30 total
      case 'slots':
        return SLOT_PROVIDERS; // 24 provider logos (3:4 aspect ratio)
      case 'live-casino':
        return LIVE_GAMES; // 8 total
      case 'sports':
        return SPORTS_GAMES; // 2 total
      default:
        return FEATURED_GAMES;
    }
  })();

  // Paginate: 6 games per page
  const gamesPerPage = 6;
  const totalPages = Math.ceil(allCategoryGames.length / gamesPerPage);
  const activeGames = allCategoryGames.slice(
    currentPage * gamesPerPage,
    (currentPage + 1) * gamesPerPage
  );

  // Reset to page 0 when category changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  return (
    <div className="bg-brand-black min-h-screen">
      <SEO />
      <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop"
            alt="Casino Background"
            className="w-full h-full object-cover opacity-10 lg:opacity-20 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/90 to-brand-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full lg:w-3/5 space-y-6 text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold font-black text-[10px] uppercase tracking-widest mx-auto lg:mx-0 backdrop-blur-sm">
                <ShieldCheck size={14} className="animate-pulse" />
                <span>Official Licensed Casino Malaysia</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
                UNMATCHED <br />
                <motion.span
                  className="gold-text-gradient inline-block relative"
                  animate={{
                    filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                    textShadow: ["0 0 0px #fabb2e", "0 0 20px #fabb2e", "0 0 0px #fabb2e"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  7-STAR
                </motion.span> <br />
                EXPERIENCE
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {t('footer.mission')}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md mx-auto lg:mx-0">
                <a href={EXTERNAL_LINK} target="_blank" rel="noreferrer" className="flex-1 gold-btn-gradient px-8 py-5 rounded-2xl text-brand-black font-black text-lg shadow-2xl shadow-brand-gold/20 active:scale-95 transition-all text-center flex items-center justify-center gap-3 hover:shadow-brand-gold/40">
                  {t('ui.playNow')} <ArrowRight size={20} />
                </a>
                <Link to="/partner" className="flex-1 px-8 py-5 rounded-2xl border border-white/10 text-white font-bold text-lg bg-white/5 active:scale-95 transition-all text-center hover:bg-white/10 backdrop-blur-md">
                  {t('nav.partner').toUpperCase()}
                </Link>
              </motion.div>

              {/* Trust Strip */}
              <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start items-center opacity-80">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <span className="text-[10px] uppercase font-bold text-gray-400">PAGCOR Licensed</span>
                </div>
                <div className="w-px h-3 bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <BadgeCheck size={14} className="text-blue-400" />
                  <span className="text-[10px] uppercase font-bold text-gray-400">BMM Audited</span>
                </div>
                <div className="w-px h-3 bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-brand-gold" />
                  <span className="text-[10px] uppercase font-bold text-gray-400">3-Min Withdrawals</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop Side Graphic with Phone Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex lg:w-2/5 justify-center relative"
            >
              <div className="relative group perspective-1000">
                <div className="absolute inset-0 bg-brand-gold/10 blur-[80px] rounded-full animate-pulse"></div>

                {/* Phone Frame */}
                <div className="relative z-10 w-[300px] rounded-[3rem] border-[12px] border-gray-900 bg-gray-900 shadow-2xl transform rotate-y-12 rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out hover:scale-[1.02]">
                  {/* Inner Screen Container */}
                  <div className="relative rounded-[2.2rem] overflow-hidden border-[2px] border-gray-800 bg-black">
                    <img
                      src="https://i.ibb.co/B50QJcB1/Screenshot-2025-12-16-063806.png"
                      alt="Official Site Preview"
                      className="w-full h-auto object-cover block"
                    />
                  </div>

                  {/* Hardware Buttons */}
                  <div className="absolute top-24 -left-[16px] h-10 w-[4px] bg-gray-800 rounded-l-lg shadow-sm"></div>
                  <div className="absolute top-40 -left-[16px] h-16 w-[4px] bg-gray-800 rounded-l-lg shadow-sm"></div>
                  <div className="absolute top-36 -right-[16px] h-20 w-[4px] bg-gray-800 rounded-r-lg shadow-sm"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Reel - Auto Scroll */}
      <section className="bg-brand-dark border-y border-white/5 py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Official Partners</div>
          <AutoScroll>
            {PARTNERS.map((p, i) => (
              <span key={i} className="text-base md:text-xl font-display font-bold text-white whitespace-nowrap mx-4 opacity-40 hover:opacity-100 transition-opacity cursor-default">{p}</span>
            ))}
          </AutoScroll>
        </div>
      </section>

      {/* Expanded USP Section (Why Choose SevenStar7) */}
      <section className="py-8 md:py-20 bg-brand-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-4">Why Choose SevenStar7</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">The gold standard in online gaming integrity and speed.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
            {ACHIEVEMENTS.map((item, index) => {
              // Asymmetrical Layout: 
              // First item: span 4 cols
              // Second item: span 2 cols
              // Third item: span 2 cols
              // Fourth item: span 4 cols
              const spanClass = (index === 0 || index === 3) ? "md:col-span-4" : "md:col-span-2";
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${spanClass} bg-brand-dark p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 hover:border-brand-gold/20 transition-all group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 hover:bg-white/[0.02]`}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(250,187,46,0.1)]">
                    <item.icon size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-wide mb-2 md:mb-3">{getAchievementTitle(item.id.toString())}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{getAchievementDescription(item.id.toString())}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exclusive Partnership Showcase: SEVENSTAR7 x CROCO */}
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#052e16] rounded-[2.5rem] border border-green-500/20 p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-green-900/20"
          >
            {/* Branded Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/10 via-transparent to-black/40"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-500/20 rounded-full blur-[100px] animate-pulse"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="bg-green-500 text-brand-black text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg shadow-green-500/20 animate-pulse">Official Partner</span>
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={12} /> Verified</span>
                </motion.div>

                <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-6 uppercase italic leading-[0.85] tracking-tighter">
                  Exclusive <br /><span className="text-green-500">Croco Hub</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-lg mb-8 leading-relaxed font-medium max-w-lg">
                  SevenStar7 is the **exclusive authorized operator** for Croco Gaming. Experience the next generation of mobile slots with 98.5% RTP and instant jackpot payouts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <TrackedLink href="/croco-exclusive" eventName="launch_croco_hub" className="inline-flex items-center gap-3 bg-white text-green-900 font-black uppercase tracking-widest text-xs py-4 px-10 rounded-xl shadow-xl hover:bg-green-50 transition-all transform hover:-translate-y-1 active:scale-95">
                    Launch Croco Hub <ArrowRight size={18} />
                  </TrackedLink>
                </div>
              </div>

              <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="relative w-full max-w-[450px]"
                >
                  <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full"></div>
                  <img
                    src="/Croco SVG.svg"
                    className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,197,94,0.4)] relative z-10"
                    alt="Croco Gaming Logo"
                  />

                  {/* Floating elements for depth */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-brand-gold text-black font-black text-[10px] px-3 py-1 rounded-full shadow-lg z-20 uppercase tracking-tighter"
                  >
                    98.5% RTP
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Game Library */}
      <section className="py-20 bg-brand-dark relative" id="library">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <div className="w-2 h-12 bg-brand-gold rounded-full shadow-[0_0_20px_#fabb2e]"></div>
              THE LOBBY
            </h2>
          </motion.div>

          {/* Sticky Filter Bar */}
          <div className="sticky top-20 z-40 bg-brand-dark/95 backdrop-blur-xl border-y border-white/5 py-3 md:py-4 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-2xl md:border mb-6 shadow-2xl">
            <div className="flex overflow-x-auto gap-2 md:gap-3 no-scrollbar items-center pb-1">
              {Object.values(GAME_CATEGORIES).map((cat) => {
                const Icon = getCategoryIcon(cat.id);
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative flex-shrink-0 flex items-center justify-center md:justify-start gap-2 px-3 py-2 md:px-5 md:py-3 rounded-xl transition-all group overflow-hidden ${isActive
                      ? 'text-brand-black bg-brand-gold shadow-[0_0_15px_rgba(250,187,46,0.3)] scale-105'
                      : 'text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <Icon size={16} className={`shrink-0 ${isActive ? 'text-brand-black' : 'text-gray-500 group-hover:text-white'}`} />
                    <span className="text-[10px] md:text-xs font-black whitespace-nowrap">{getCategoryTitle(cat.id).toUpperCase()}</span>
                  </button>
                )
              })}
            </div>

            <motion.div
              layout
              className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4"
            >
              <AnimatePresence mode='popLayout'>
                {activeGames.map((game) => (
                  <motion.div
                    key={game.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GameShowcaseCard
                      game={game}
                      onInfoClick={() => setSelectedGame(game)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                  disabled={currentPage === 0}
                  className="px-6 py-2 rounded-lg bg-white/5 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  ← {t('ui.previous')}
                </button>
                <span className="text-gray-400 text-sm font-bold">
                  {t('ui.page')} {currentPage + 1} {t('ui.of')} {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="px-6 py-2 rounded-lg bg-white/5 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  {t('ui.next')} →
                </button>
              </div>
            )}

            <div className="mt-16 text-center">
              <Link to="/games" className="inline-flex bg-brand-black text-gray-400 border-2 border-white/10 font-black py-5 px-16 rounded-2xl transition-all active:scale-95 text-xs uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold shadow-xl">
                {t('ui.viewAll')} {t('ui.games').toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REORDERED: Awards (Excellence) Section - Updated Images */}
      < section className="py-10 md:py-20 bg-brand-black border-t border-white/5" >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-2">Recognized for Excellence</h2>
          <p className="text-gray-500 text-sm mb-12">Award-winning service backed by international independent certifications.</p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <img
                src="https://sevenstar7.com/images/footer/Awards1.png"
                alt="SiGMA Asia Awards 2025"
                className="h-32 md:h-40 object-contain"
              />
              <h3 className="text-white font-bold text-sm mt-4">SiGMA Asia Awards 2025</h3>
              <span className="text-[10px] text-brand-gold font-black uppercase mt-1">Best Casino Feature</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <img
                src="https://sevenstar7.com/images/footer/Awards2.png"
                alt="Asia Honest Award 2025"
                className="h-32 md:h-40 object-contain"
              />
              <h3 className="text-white font-bold text-sm mt-4">Asia Honest Award 2025</h3>
              <span className="text-[10px] text-brand-gold font-black uppercase mt-1">Integrity & Trust</span>
            </motion.div>
          </div>
        </div>
      </section >

      {/* REORDERED: Licenses (Certified By) - Auto Scroll on Mobile - Full Color Icons */}
      < section className="py-16 bg-white/5 border-b border-white/5 overflow-hidden" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-white font-display font-black text-xl md:text-3xl uppercase tracking-tight mb-2">Licensed, Audited & Certified By</h3>
          </div>

          <AutoScroll>
            {/* Images displayed in full color (no filters) */}
            <img src="https://sevenstar7.com/images/footer/bmm.svg" className="h-8 md:h-12 w-auto object-contain mx-4 opacity-75 hover:opacity-100 transition-opacity" alt="BMM" />
            <img src="https://sevenstar7.com/images/footer/itech_labs1.png" className="h-8 md:h-12 w-auto object-contain mx-4 opacity-75 hover:opacity-100 transition-opacity" alt="iTech Labs" />
            <img src="https://sevenstar7.com/images/footer/gli.svg" className="h-8 md:h-12 w-auto object-contain mx-4 opacity-75 hover:opacity-100 transition-opacity" alt="GLI" />
            <img src="https://sevenstar7.com/images/footer/tst.svg" className="h-8 md:h-12 w-auto object-contain mx-4 opacity-75 hover:opacity-100 transition-opacity" alt="TST" />
            <img src="https://sevenstar7.com/images/footer/godaddy.svg" className="h-8 md:h-12 w-auto object-contain mx-4 opacity-75 hover:opacity-100 transition-opacity" alt="GoDaddy" />
          </AutoScroll>
        </div>
      </section >

      {/* REORDERED: Play Responsibly - Below Licenses - Red Background */}
      < section className="py-12 bg-brand-black" >
        <div className="container mx-auto px-4">
          <div className="bg-red-600 p-3 md:p-8 rounded-xl text-center shadow-[0_0_30px_rgba(220,38,38,0.3)] flex flex-col items-center justify-center border border-red-500/50">
            <div className="flex items-center gap-2 mb-1">
              <ShieldAlert size={20} className="text-white hidden md:block" />
              <p className="text-white font-black text-xs md:text-lg uppercase tracking-widest flex items-center justify-center gap-2">
                18+ ONLY • PLAY RESPONSIBLY
              </p>
              <ShieldAlert size={20} className="text-white hidden md:block" />
            </div>
            <p className="text-red-100 text-[10px] md:text-xs font-bold uppercase tracking-wide opacity-90 max-w-lg">
              Gambling can be addictive. Please play within your limits.
            </p>
          </div>
        </div>
      </section >

      {/* Testimonials */}
      < section className="py-20 bg-brand-dark border-t border-white/5 overflow-hidden" >
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Player Wins</h2>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => {
                  const testimonialsPerPage = 3;
                  const currentTestimonialPage = Math.floor(testimonialStartIndex / testimonialsPerPage);
                  if (currentTestimonialPage > 0) {
                    setTestimonialStartIndex((currentTestimonialPage - 1) * testimonialsPerPage);
                  }
                }}
                disabled={testimonialStartIndex === 0}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="rotate-180" size={20} />
              </button>
              <button
                onClick={() => {
                  const testimonialsPerPage = 3;
                  if (testimonialStartIndex + testimonialsPerPage < TESTIMONIALS.length) {
                    setTestimonialStartIndex(testimonialStartIndex + testimonialsPerPage);
                  }
                }}
                disabled={testimonialStartIndex + 3 >= TESTIMONIALS.length}
                className="w-10 h-10 rounded-full bg-brand-gold text-brand-black flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.slice(testimonialStartIndex, testimonialStartIndex + 3).map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-black p-8 rounded-[2rem] border border-white/5 relative flex flex-col h-full hover:border-brand-gold/30 transition-colors shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-gold" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-gold text-xs font-black">Verified Winner</span>
                      <BadgeCheck size={12} className="text-blue-400" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic flex-1">"{getTestimonialMessage(t.id.toString())}"</p>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <div className="text-[10px] text-gray-600 font-bold uppercase">Game: {getTestimonialGame(t.id.toString())}</div>
                  <div className="text-brand-gold font-black text-sm">{t.winAmount}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* FAQs */}
      < section className="py-20 bg-brand-black" >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-black text-white uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-brand-dark rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white">{getFAQQuestion((idx + 1).toString())}</span>
                  <HelpCircle size={20} className={`text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180 text-brand-gold' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {getFAQAnswer((idx + 1).toString())}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Yellow CTA Banner */}
      < section className="bg-brand-gold py-16 md:py-24 relative overflow-hidden" >
        <div className="absolute inset-0 bg-brand-gold">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-black mb-4">Ready to Start Winning?</h2>
          <p className="text-brand-black/80 font-medium text-lg mb-8 max-w-2xl mx-auto">
            Join the thousands of Malaysians winning big on SevenStar7 every day. Safe, Secure, and Spectacular.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={EXTERNAL_LINK}
            target="_blank"
            className="bg-brand-black text-white px-12 py-4 rounded-full font-black text-lg shadow-xl inline-block"
          >
            {t('ui.playNow')}
          </motion.a>
        </div>
      </section >

      {/* Guides & Strategy (Existing) */}
      < section className="py-16 bg-brand-black border-t border-white/5" >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-black text-white uppercase tracking-tighter">Latest News</h2>
            <Link to="/blog" className="text-brand-gold text-xs font-black hover:underline uppercase tracking-widest">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(0, 2).map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} className="flex flex-col md:flex-row gap-6 bg-brand-dark p-6 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all group">
                <div className="w-full md:w-40 aspect-video md:aspect-square overflow-hidden rounded-xl flex-shrink-0">
                  <img src={post.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-brand-gold text-[10px] font-black uppercase mb-2">{post.category}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors leading-tight mb-2">{post.title}</h3>
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-bold uppercase">
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-black/95 backdrop-blur-3xl border-t border-white/10 px-4 py-3 pb-5 shadow-[0_-15px_40px_rgba(0,0,0,0.9)]">
        <div className="flex justify-center items-end relative">
          {/* Left Side Buttons */}
          <div className="absolute left-0 flex gap-6">
            <Link to="/" className="flex flex-col items-center gap-1 text-brand-gold">
              <Star size={18} fill="#fabb2e" />
              <span className="text-[8px] font-black uppercase tracking-tighter">{t('nav.home')}</span>
            </Link>
            <a href={EXTERNAL_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 text-gray-500">
              <Gift size={18} />
              <span className="text-[8px] font-black uppercase tracking-tighter">Bonus</span>
            </a>
          </div>

          {/* Center Play Button */}
          <a href={EXTERNAL_LINK} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 -mt-8">
            <div className="bg-brand-gold text-brand-black p-3 rounded-full shadow-[0_0_25px_rgba(250,187,46,0.6)] border-[5px] border-brand-black active:scale-90 transition-all">
              <ExternalLink size={20} strokeWidth={3} />
            </div>
            <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">{t('ui.play').toUpperCase()}</span>
          </a>

          {/* Right Side Buttons */}
          <div className="absolute right-0 flex gap-6">
            <Link to="/partner" className="flex flex-col items-center gap-1 text-gray-500">
              <Users size={18} />
              <span className="text-[8px] font-black uppercase tracking-tighter">{t('nav.partner')}</span>
            </Link>
            <Link to="/blog" className="flex flex-col items-center gap-1 text-gray-500">
              <BookOpen size={18} />
              <span className="text-[8px] font-black uppercase tracking-tighter">{t('nav.blog')}</span>
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Home;