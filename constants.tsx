import {
  Home,
  Gamepad2,
  Tv,
  Fish,
  Trophy,
  Spade,
  Joystick,
  Gift,
  Crown,
  Headphones,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  BookOpen,
  Smartphone,
  Users
} from "lucide-react";
import { NavItem, Game, Testimonial, Achievement, GameCategory, BlogPost } from "./types";

export const EXTERNAL_LINK = "https://sevenstar7.com/index/?rid=SS7FT0004";

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'games', label: 'All Games', path: '/games' }, // Added Games Link
  { id: 'promo', label: 'Promotions', path: EXTERNAL_LINK, isExternal: true },
  { id: 'partner', label: 'Partner Program', path: '/partner' },
  { id: 'blog', label: 'Game Guides', path: '/blog' },
  { id: 'croco', label: 'Croco Hub', path: '/croco-exclusive' },
];

export const PARTNERS = [
  "Pragmatic Play", "Evolution", "Spadegaming", "Playtech", "CMD368", "AllBet", "918Kiss", "Mega888", "Microgaming", "Asia Gaming"
];

export const GAME_CATEGORIES: Record<string, GameCategory> = {
  exclusive: {
    id: 'exclusive',
    title: 'Croco Gaming',
    description: 'Exclusive partnership with 98.5% RTP.',
    longDescription: 'SevenStar7 is the authorized partner for Croco Gaming in Malaysia. Experience premium slots and arcade games directly on our platform.',
    coverImage: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2070&auto=format&fit=crop',
    providers: ['Croco Gaming'],
    features: ['High Win Rate', 'Malaysia Exclusive', 'Arcade Style']
  },
  slots: {
    id: 'slots',
    title: 'Hot Slots',
    description: '1,000+ Jackpot machines ready to hit.',
    longDescription: 'Access the world\'s most popular slot providers including Pragmatic Play, 918Kiss and more.',
    coverImage: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=1935&auto=format&fit=crop',
    providers: ['Pragmatic Play', '918Kiss', 'Mega888', 'Playtech'],
    features: ['Daily Jackpots', 'Free Spins', 'Demo Mode']
  },
  'live-casino': {
    id: 'live-casino',
    title: 'Live Tables',
    description: '4K Baccarat, Roulette & Blackjack.',
    longDescription: 'Connect with real dealers in Asia\'s most prestigious live casino halls. Seamless HD streaming.',
    coverImage: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop',
    providers: ['Evolution', 'AllBet', 'Sexy Baccarat', 'Asia Gaming'],
    features: ['Real Dealers', 'HD Streaming', 'No Latency']
  },
  sports: {
    id: 'sports',
    title: 'Sportsbook',
    description: 'Best odds for EPL & World Cup.',
    longDescription: 'Place your bets on major sporting events with Malaysia\'s most competitive odds.',
    coverImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop',
    providers: ['CMD368', 'SBOBET', 'M8Bet'],
    features: ['Live Betting', 'Instant Result', 'High Odds']
  }
};

// Real Game Data - Croco Gaming (30 games with actual names)
export const CROCO_GAMES: Game[] = [
  { id: 'croco-1', title: 'Arcane Portals', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Arcane Portals.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-2', title: 'Candy Fiesta 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Candy Fiesta 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-3', title: 'Clash & Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Clash & Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-4', title: 'Cursed Clown', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Cursed Clown.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-5', title: 'Cyberpunk', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Cyberpunk.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-6', title: 'Deadliest Sea', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Deadliest Sea.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-7', title: 'Dragon Quest', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Dragon Quest.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-8', title: 'Ghost Boonanza', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Ghost Boonanza.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-9', title: 'Gold of Olympus', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Gold of Olympus.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-10', title: 'Golden Year', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Golden Year.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-11', title: "Jack's Crypt", provider: 'Croco Gaming', category: 'Exclusive', imageUrl: "/images/croco gaming/Jack's Crypt.png", description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-12', title: 'John Wild', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/John Wild.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-13', title: 'Left 4 Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Left 4 Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-14', title: 'Lucky Ranch', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Lucky Ranch.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-15', title: 'Magical Mine', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Magical Mine.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-16', title: 'Ne Zha', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Ne Zha.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-17', title: 'Piece of Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Piece of Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-18', title: 'Reel Big Catch', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Reel Big Catch.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-19', title: 'Rhino Robbery', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Rhino Robbery.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-20', title: 'Run Away Zombies', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Run Away Zombies.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-21', title: 'Samurai Clash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Samurai Clash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-22', title: 'Sea of Olympus 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Sea of Olympus 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-23', title: 'Starshine Princess', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Starshine Princess.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-24', title: 'Sugar Fiesta 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Sugar Fiesta 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-25', title: 'Super Waldo', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Super Waldo.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-26', title: 'Symbiote', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Symbiote.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-27', title: 'The Cursed Doll', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/The Cursed Doll.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-28', title: 'Tim and Larry', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Tim and Larry.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-29', title: "Wizard's Academy", provider: 'Croco Gaming', category: 'Exclusive', imageUrl: "/images/croco gaming/Wizard's Academy.png", description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-30', title: 'Wukong', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Wukong.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: '98.5%', volatility: 'High' as 'High', maxWin: 'x50000' },
];

// Real Game Data - Slot Games (35 actual games)
export const SLOT_GAMES: Game[] = [
  { id: 'slot-1', title: '12 Skulls Of The Dead', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/12 Skulls Of The Dead.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-2', title: '3 Coin Treasures', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/3 Coin Treasures.png', rtp: '96.2%', volatility: 'Medium' as 'Medium', maxWin: 'x5000' },
  { id: 'slot-3', title: '88 Fortunes', provider: 'SG Digital', category: 'Slots', imageUrl: '/images/slot/games/88 Fortunes.png', rtp: '96.8%', volatility: 'High' as 'High', maxWin: 'x8000' },
  { id: 'slot-4', title: 'Asgardian Fire', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Asgardian Fire.jpg', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'slot-5', title: 'Aztec Bonus Hunt', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Aztec Bonus Hunt.jpg', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6000' },
  { id: 'slot-6', title: 'Blossom Of Fortune', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Blossom Of Fortune.png', rtp: '96.7%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'slot-7', title: 'Bonus Mania', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Bonus Mania.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7000' },
  { id: 'slot-8', title: 'Cai Shen Dao', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Cai Shen Dao.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x9000' },
  { id: 'slot-9', title: 'Capt Dead', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Capt Dead.png', rtp: '96.1%', volatility: 'Medium' as 'Medium', maxWin: 'x5500' },
  { id: 'slot-10', title: 'Cyberpunk', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Cyberpunk.png', rtp: '96.9%', volatility: 'High' as 'High', maxWin: 'x15000' },
  { id: 'slot-11', title: 'Dancing Dragon', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Dancing Dragon.png', rtp: '97.1%', volatility: 'Very High' as 'Very High', maxWin: 'x20000' },
  { id: 'slot-12', title: "Dragon Chi's Quest", provider: 'Pragmatic Play', category: 'Slots', imageUrl: "/images/slot/games/Dragon Chi's Quest.jpg", rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-13', title: 'Dragon God Mahjong', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Dragon God Mahjong.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7500' },
  { id: 'slot-14', title: 'Fighters Inc', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Fighters Inc.png', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6500' },
  { id: 'slot-15', title: 'Fortune Gems', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Fortune Gems.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x11000' },
  { id: 'slot-16', title: 'Gates of Olympus', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Gates of Olympus.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x5000' },
  { id: 'slot-17', title: 'Gates of Wealth', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Gates of Wealth.png', rtp: '96.8%', volatility: 'High' as 'High', maxWin: 'x13000' },
  { id: 'slot-18', title: 'Gold of Olympus', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Gold of Olympus.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-19', title: 'Happy Buddha', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Happy Buddha.png', rtp: '96.7%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'slot-20', title: 'Heavenly Elephant Fortune', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Heavenly Elephant Fortune.jpg', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x21100' },
  { id: 'slot-21', title: 'Hi-Lo Premium', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Hi-Lo Premium.jpg', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7000' },
  { id: 'slot-22', title: 'Hot Chili', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Hot Chili.jpg', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6000' },
  { id: 'slot-23', title: 'Jackpot Joker', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Jackpot Joker.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x9500' },
  { id: 'slot-24', title: 'John Wild', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/John Wild.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10500' },
  { id: 'slot-25', title: 'Labubu', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Labubu.jpg', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-26', title: 'Luck88', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Luck88.png', rtp: '96.8%', volatility: 'High' as 'High', maxWin: 'x15000' },
  { id: 'slot-27', title: 'Lucky Fortunes', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Lucky Fortunes.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'slot-28', title: 'Masquerade', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Masquerade.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x8000' },
  { id: 'slot-29', title: 'Nezha Croco', provider: 'Croco Gaming', category: 'Slots', imageUrl: '/images/slot/games/Nezha Croco.png', rtp: '98.5%', volatility: 'Very High' as 'Very High', maxWin: 'x50000' },
  { id: 'slot-30', title: 'Splash of Riches', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Splash of Riches.jpg', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-31', title: 'Starlight Princess', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Starlight Princess.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x21100' },
  { id: 'slot-32', title: 'Sugar Crush', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Sugar Crush.jpg', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x21100' },
  { id: 'slot-33', title: 'Tim & Larry', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Tim & Larry.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x15000' },
  { id: 'slot-34', title: 'Treasure Bowl', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Treasure Bowl.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'slot-35', title: 'Wukong', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/games/Wukong.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x20000' },
];

// Slot Providers (24 provider logos for category view) - Prioritized: Pragmatic, JILI, FC
export const SLOT_PROVIDERS: Game[] = [
  // Priority providers first
  { id: 'provider-20', title: 'Pragmatic', provider: 'Pragmatic Play', category: 'Slots', imageUrl: '/images/slot/category/Pragmatic.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x21100' },
  { id: 'provider-11', title: 'JILI', provider: 'JILI', category: 'Slots', imageUrl: '/images/slot/category/JILI.png', rtp: '97.1%', volatility: 'Very High' as 'Very High', maxWin: 'x20000' },
  { id: 'provider-8', title: 'FC', provider: 'FC', category: 'Slots', imageUrl: '/images/slot/category/FC.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x9000' },
  { id: 'provider-4', title: 'Croco Gaming', provider: 'Croco Gaming', category: 'Slots', imageUrl: '/images/slot/category/Croco Gaming.png', rtp: '98.5%', volatility: 'Very High' as 'Very High', maxWin: 'x50000' },
  // Other providers
  { id: 'provider-1', title: '918Kiss', provider: '918Kiss', category: 'Slots', imageUrl: '/images/slot/category/918kiss.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'provider-17', title: 'Mega888', provider: 'Mega888', category: 'Slots', imageUrl: '/images/slot/category/Mega888.png', rtp: '96.8%', volatility: 'High' as 'High', maxWin: 'x13000' },
  { id: 'provider-10', title: 'JDB', provider: 'JDB', category: 'Slots', imageUrl: '/images/slot/category/JDB.png', rtp: '96.9%', volatility: 'High' as 'High', maxWin: 'x15000' },
  { id: 'provider-3', title: 'CQ9', provider: 'CQ9', category: 'Slots', imageUrl: '/images/slot/category/CQ9.png', rtp: '96.8%', volatility: 'High' as 'High', maxWin: 'x8000' },
  { id: 'provider-2', title: 'AMB', provider: 'AMB', category: 'Slots', imageUrl: '/images/slot/category/AMB.png', rtp: '96.2%', volatility: 'Medium' as 'Medium', maxWin: 'x5000' },
  { id: 'provider-5', title: 'Duofu', provider: 'Duofu', category: 'Slots', imageUrl: '/images/slot/category/Duofu.png', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6000' },
  { id: 'provider-6', title: 'Epicwin', provider: 'Epicwin', category: 'Slots', imageUrl: '/images/slot/category/Epicwin.png', rtp: '96.7%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'provider-7', title: 'Evo', provider: 'Evo', category: 'Slots', imageUrl: '/images/slot/category/Evo.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7000' },
  { id: 'provider-9', title: 'GW99', provider: 'GW99', category: 'Slots', imageUrl: '/images/slot/category/GW99.png', rtp: '96.1%', volatility: 'Medium' as 'Medium', maxWin: 'x5500' },
  { id: 'provider-12', title: 'Joker', provider: 'Joker', category: 'Slots', imageUrl: '/images/slot/category/Joker.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'provider-13', title: 'Ka Gaming', provider: 'Ka Gaming', category: 'Slots', imageUrl: '/images/slot/category/Ka Gaming.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7500' },
  { id: 'provider-14', title: 'LFC', provider: 'LFC', category: 'Slots', imageUrl: '/images/slot/category/LFC.png', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6500' },
  { id: 'provider-15', title: 'Lionking', provider: 'Lionking', category: 'Slots', imageUrl: '/images/slot/category/Lionking.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x11000' },
  { id: 'provider-16', title: 'Lucky365', provider: 'Lucky365', category: 'Slots', imageUrl: '/images/slot/category/Lucky365.png', rtp: '96.2%', volatility: 'Medium' as 'Medium', maxWin: 'x5800' },
  { id: 'provider-18', title: 'Microgaming', provider: 'Microgaming', category: 'Slots', imageUrl: '/images/slot/category/Microgaming.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10000' },
  { id: 'provider-19', title: 'Nextspin', provider: 'Nextspin', category: 'Slots', imageUrl: '/images/slot/category/Nextspin.png', rtp: '96.7%', volatility: 'High' as 'High', maxWin: 'x12000' },
  { id: 'provider-21', title: 'Spride', provider: 'Spride', category: 'Slots', imageUrl: '/images/slot/category/Spride.png', rtp: '96.4%', volatility: 'Medium' as 'Medium', maxWin: 'x7000' },
  { id: 'provider-22', title: 'UUSlot', provider: 'UUSlot', category: 'Slots', imageUrl: '/images/slot/category/UUSlot.png', rtp: '96.3%', volatility: 'Medium' as 'Medium', maxWin: 'x6000' },
  { id: 'provider-23', title: 'VPlus', provider: 'VPlus', category: 'Slots', imageUrl: '/images/slot/category/VPlus.png', rtp: '96.6%', volatility: 'High' as 'High', maxWin: 'x9500' },
  { id: 'provider-24', title: 'VPower', provider: 'VPower', category: 'Slots', imageUrl: '/images/slot/category/VPower.png', rtp: '96.5%', volatility: 'High' as 'High', maxWin: 'x10500' },
];


// Real Game Data - Live Tables (8 providers with names)
export const LIVE_GAMES: Game[] = [
  { id: 'live-1', title: 'AG', provider: 'Asia Gaming', category: 'Live Casino', imageUrl: '/images/live/AG.png', rtp: '98.5%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-2', title: 'BG', provider: 'BG Gaming', category: 'Live Casino', imageUrl: '/images/live/BG.png', rtp: '98.3%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-3', title: 'Evolution', provider: 'Evolution', category: 'Live Casino', imageUrl: '/images/live/Evolution.png', rtp: '98.94%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-4', title: 'King855', provider: 'King855', category: 'Live Casino', imageUrl: '/images/live/King855.png', rtp: '98.2%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-5', title: 'Playtech', provider: 'Playtech', category: 'Live Casino', imageUrl: '/images/live/Playtech.png', rtp: '98.6%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-6', title: 'Pragmatic', provider: 'Pragmatic Play', category: 'Live Casino', imageUrl: '/images/live/Pragmatic.png', rtp: '98.4%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-7', title: 'SA Gaming', provider: 'SA Gaming', category: 'Live Casino', imageUrl: '/images/live/SA Gaming.png', rtp: '98.7%', volatility: 'Low' as 'Low', maxWin: 'x100' },
  { id: 'live-8', title: 'Sexy Baccarat', provider: 'Sexy Gaming', category: 'Live Casino', imageUrl: '/images/live/Sexy Baccarat.png', rtp: '98.8%', volatility: 'Low' as 'Low', maxWin: 'x100' },
];

// Real Game Data - Sports (2 images with names)
export const SPORTS_GAMES: Game[] = [
  { id: 'sports-1', title: 'SBOBET', provider: 'SBOBET', category: 'Sports', imageUrl: '/images/sports/IBC.png', rtp: '95.0%', volatility: 'Medium' as 'Medium', maxWin: 'Unlimited' },
  { id: 'sports-2', title: 'CMD368', provider: 'CMD368', category: 'Sports', imageUrl: '/images/sports/CMD.png', rtp: '94.5%', volatility: 'Medium' as 'Medium', maxWin: 'Unlimited' },
];

// Combined FEATURED_GAMES for backward compatibility
export const FEATURED_GAMES: Game[] = [
  ...CROCO_GAMES.slice(0, 2),
  ...SLOT_GAMES.slice(0, 3),
  ...LIVE_GAMES.slice(0, 2),
  ...SPORTS_GAMES.slice(0, 1)
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "陈伟明",
    avatar: "https://i.pravatar.cc/150?img=11",
    winAmount: "MYR 12,450",
    game: "Gates of Olympus",
    message: "说实话，我对3分钟提款的说法持怀疑态度，但这是真的。昨晚我中了x500倍数，资金在我关闭应用程序之前就到了我的Maybank账户。马来西亚最好的服务。"
  },
  {
    id: 2,
    name: "Ahmad Razak",
    avatar: "https://i.pravatar.cc/150?img=12",
    winAmount: "MYR 8,200",
    game: "Lightning Baccarat",
    message: "Saya dah main banyak tempat, tapi SevenStar7 je yang live tables tak lag. VIP host layan macam VIP betul. Baru dapat birthday bonus terus masuk. Memang recommend!"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    avatar: "https://i.pravatar.cc/150?img=13",
    winAmount: "MYR 45,000",
    game: "Croco Gold",
    message: "The exclusive Croco games are way looser than the standard slots. I switched over from 918Kiss and haven't looked back. The interface is smooth on my iPhone, and customer service replies in seconds."
  },
  {
    id: 4,
    name: "林美玲",
    avatar: "https://i.pravatar.cc/150?img=5",
    winAmount: "MYR 2,450",
    game: "Live Baccarat",
    message: "即时提款和优秀的真人荷官。SevenStar是顶级的！推荐给所有朋友了。"
  },
  {
    id: 5,
    name: "Nurul Aisyah",
    avatar: "https://i.pravatar.cc/150?img=9",
    winAmount: "MYR 8,900",
    game: "Gates of Olympus",
    message: "Dapat multiplier besar! Design gold dia pun cantik sangat. Withdraw pun laju, dalam 3 minit dah sampai."
  },
  {
    id: 6,
    name: "Muthu Selvam",
    avatar: "https://i.pravatar.cc/150?img=14",
    winAmount: "MYR 3,200",
    game: "Fishing God",
    message: "Best fishing games in Malaysia. No lag, smooth gameplay. Customer service is excellent too!"
  },
  {
    id: 7,
    name: "黄凯文",
    avatar: "https://i.pravatar.cc/150?img=33",
    winAmount: "MYR 12,050",
    game: "Mahjong Ways 2",
    message: "我最喜欢的老虎机游戏在这里支付巨额奖金。真正的7星级服务。每天都在玩！"
  },
  {
    id: 8,
    name: "Hafiz Rahman",
    avatar: "https://i.pravatar.cc/150?img=53",
    winAmount: "MYR 5,600",
    game: "Sportsbook",
    message: "Best odds for EPL matches! Cashing out is super fast. Dah tukar dari platform lain, memang puas hati."
  },
  {
    id: 9,
    name: "Priya Devi",
    avatar: "https://i.pravatar.cc/150?img=47",
    winAmount: "MYR 41,000",
    game: "Mega888",
    message: "Jackpot winner! I thought it was fake but they paid me in 10 minutes. Absolutely trustworthy platform!"
  },
];


export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, title: "Licensed", description: "Fully licensed by PAGCOR. We operate under strict international gaming regulations to ensure a safe environment.", icon: ShieldCheck },
  { id: 2, title: "Speed", description: "Our automated systems ensure 3-minute deposits and instant withdrawal processing 24/7.", icon: Zap },
  { id: 3, title: "Mobile", description: "Optimized for iOS and Android. No download required, play directly from your browser.", icon: Smartphone },
  { id: 4, title: "Verified", description: "A Trusted Hub for over 50,000 active players in Malaysia with verified payout records.", icon: Globe },
];

export const FAQS = [
  { q: "How to deposit?", a: "Login to your account, and you can use FPX, DuitNow, and USDT for instant funding." },
  { q: "Are the games fair?", a: "Yes, all games on our platform are audited by BMM and iTech Labs for complete transparency." },
  { q: "What is the minimum withdrawal?", a: "The minimum withdrawal amount is MYR 50, with no maximum limit for VIP members." },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-to-win-slots-2025',
    title: '2025 Slots Winning Strategy for Malaysian Players',
    excerpt: 'Learn the unwritten rules of RTP and volatility to boost your winning chances on Pragmatic Play titles.',
    content: `
      <p class="mb-4 text-gray-400">Winning at slots isn't just about luck. It's about timing and understanding machine cycles. In Malaysia, players often find success by following a strictly regulated bankroll strategy.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">1. Watch the RTP</h3>
      <p class="mb-6 text-gray-400">Always choose games with RTP above 96%. Our Croco Gaming partnership offers up to 98.5% which is the highest in the market currently.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">2. Bankroll Control</h3>
      <p class="mb-6 text-gray-400">Never bet more than 1% of your total balance on a single spin. Consistency wins over aggression.</p>
    `,
    author: 'Admin',
    date: 'Dec 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop',
    category: 'Guides',
    readTime: '4 min',
    tags: ['Slots', 'RTP', 'Winning']
  },
  {
    id: 'crypto-gambling-malaysia',
    title: 'Why USDT is the Best Way to Play in Malaysia',
    excerpt: 'Privacy, speed, and zero bank restrictions. See why Malaysian high-rollers are switching to USDT.',
    content: `
      <p class="mb-4 text-gray-400">Malaysian banks can sometimes be restrictive. Crypto offers a seamless way to play without borders.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Instant & Private</h3>
      <p class="mb-6 text-gray-400">USDT (TRC20) transfers happen in seconds. No need to wait for bank maintenance windows or processing delays.</p>
    `,
    author: 'Tech Team',
    date: 'Dec 08, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop',
    category: 'News',
    readTime: '3 min',
    tags: ['Crypto', 'USDT', 'Privacy']
  }
];