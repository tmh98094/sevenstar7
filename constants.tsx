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
    description: 'Exclusive partnership with High RTP.',
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
  { id: 'croco-1', title: 'Arcane Portals', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Arcane Portals.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-2', title: 'Candy Fiesta 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Candy Fiesta 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-3', title: 'Clash & Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Clash & Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-4', title: 'Cursed Clown', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Cursed Clown.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-5', title: 'Cyberpunk', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Cyberpunk.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-6', title: 'Deadliest Sea', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Deadliest Sea.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-7', title: 'Dragon Quest', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Dragon Quest.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-8', title: 'Ghost Boonanza', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Ghost Boonanza.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-9', title: 'Gold of Olympus', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Gold of Olympus.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-10', title: 'Golden Year', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Golden Year.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-11', title: "Jack's Crypt", provider: 'Croco Gaming', category: 'Exclusive', imageUrl: "/images/croco gaming/Jack's Crypt.png", description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-12', title: 'John Wild', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/John Wild.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-13', title: 'Left 4 Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Left 4 Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-14', title: 'Lucky Ranch', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Lucky Ranch.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-15', title: 'Magical Mine', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Magical Mine.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-16', title: 'Ne Zha', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Ne Zha.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-17', title: 'Piece of Cash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Piece of Cash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-18', title: 'Reel Big Catch', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Reel Big Catch.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-19', title: 'Rhino Robbery', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Rhino Robbery.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-20', title: 'Run Away Zombies', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Run Away Zombies.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-21', title: 'Samurai Clash', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Samurai Clash.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-22', title: 'Sea of Olympus 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Sea of Olympus 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-23', title: 'Starshine Princess', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Starshine Princess.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-24', title: 'Sugar Fiesta 1000', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Sugar Fiesta 1000.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-25', title: 'Super Waldo', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Super Waldo.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-26', title: 'Symbiote', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Symbiote.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-27', title: 'The Cursed Doll', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/The Cursed Doll.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-28', title: 'Tim and Larry', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Tim and Larry.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-29', title: "Wizard's Academy", provider: 'Croco Gaming', category: 'Exclusive', imageUrl: "/images/croco gaming/Wizard's Academy.png", description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
  { id: 'croco-30', title: 'Wukong', provider: 'Croco Gaming', category: 'Exclusive', imageUrl: '/images/croco gaming/Wukong.png', description: 'Exclusive Croco Gaming title with enhanced RTP.', rtp: 'High', volatility: 'High' as 'High', maxWin: 'x50000' },
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
  { id: 'live-1', title: 'AG', provider: 'Asia Gaming', category: 'Live Casino', imageUrl: '/images/live/AG.png', rtp: 'High', volatility: 'Low' as 'Low', maxWin: 'x100' },
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
      <h3 class="text-xl font-black text-white mb-4 uppercase">3. Choose High Volatility Wisely</h3>
      <p class="mb-6 text-gray-400">High volatility slots offer bigger wins but less frequently. Medium volatility games provide the best balance for consistent play sessions.</p>
    `,
    author: 'Admin',
    date: 'Dec 12, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
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
      <h3 class="text-xl font-black text-white mb-4 uppercase">No Exchange Rate Fees</h3>
      <p class="mb-6 text-gray-400">Play with stable currency value and avoid fluctuation risks common with traditional banking methods.</p>
    `,
    author: 'Tech Team',
    date: 'Dec 08, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'News',
    readTime: '3 min',
    tags: ['Crypto', 'USDT', 'Privacy']
  },
  {
    id: 'live-casino-baccarat-guide',
    title: 'Master Baccarat: Advanced Strategies for Live Casino Success',
    excerpt: 'Discover professional baccarat betting patterns and banker vs player odds analysis for Malaysian live casino players.',
    content: `
      <p class="mb-4 text-gray-400">Baccarat remains the king of live casino games in Malaysia. Understanding the math behind banker and player bets is crucial for long-term success.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Why Banker Bet Has Better Odds</h3>
      <p class="mb-6 text-gray-400">The banker bet has a house edge of only 1.06%, compared to 1.24% for player bets. Despite the 5% commission, banker bets are statistically superior.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Pattern Recognition Myths</h3>
      <p class="mb-6 text-gray-400">While tracking patterns is popular among Malaysian players, each hand is independent. Focus on bankroll management over pattern chasing.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Optimal Betting Units</h3>
      <p class="mb-6 text-gray-400">Professional players recommend 1-2% of total bankroll per hand. This ensures you can withstand variance and maximize playing time.</p>
    `,
    author: 'Live Casino Expert',
    date: 'Dec 20, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '6 min',
    tags: ['Baccarat', 'Live Casino', 'Strategy']
  },
  {
    id: 'responsible-gaming-malaysia-2025',
    title: 'Responsible Gaming: Setting Limits and Playing Smart in 2025',
    excerpt: 'Essential tips for Malaysian players on setting deposit limits, recognizing problem gambling signs, and maintaining healthy gaming habits.',
    content: `
      <p class="mb-4 text-gray-400">Responsible gaming is about enjoying casino entertainment while maintaining control. SevenStar7 promotes safe gambling practices for all Malaysian players.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Set Clear Deposit Limits</h3>
      <p class="mb-6 text-gray-400">Decide your monthly gaming budget before you start. Never chase losses or exceed your predetermined limit, regardless of outcomes.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Time Management Strategies</h3>
      <p class="mb-6 text-gray-400">Set session time limits of 1-2 hours and take regular breaks. Extended gaming sessions can lead to poor decision-making.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Warning Signs to Watch</h3>
      <p class="mb-6 text-gray-400">If gaming interferes with work, relationships, or financial stability, seek help immediately. Contact BeGambleAware Malaysia for support.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Use Platform Tools</h3>
      <p class="mb-6 text-gray-400">Utilize deposit limits, session reminders, and self-exclusion features available on SevenStar7 to maintain control.</p>
    `,
    author: 'Responsible Gaming Team',
    date: 'Dec 18, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '5 min',
    tags: ['Responsible Gaming', 'Safety', 'Limits']
  },
  {
    id: 'pragmatic-play-best-slots-2025',
    title: 'Top 10 Pragmatic Play Slots with Highest RTP in Malaysia 2025',
    excerpt: 'Comprehensive review of Pragmatic Play\'s best-performing slot games available to Malaysian players, ranked by RTP and win potential.',
    content: `
      <p class="mb-4 text-gray-400">Pragmatic Play dominates the Malaysian online slots market. We've analyzed their entire portfolio to bring you the top 10 games with proven RTP and exciting features.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">1. Gates of Olympus (96.5% RTP)</h3>
      <p class="mb-6 text-gray-400">The tumbling reels and multiplier feature make this a Malaysian favorite. Maximum win potential of 5,000x your stake.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">2. Sweet Bonanza (96.48% RTP)</h3>
      <p class="mb-6 text-gray-400">Free spins with progressive multipliers can reach up to 21,100x. Perfect for players who enjoy high volatility action.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">3. Wolf Gold (96.01% RTP)</h3>
      <p class="mb-6 text-gray-400">Three progressive jackpots and accessible gameplay make this ideal for both beginners and veterans.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Why These Games Stand Out</h3>
      <p class="mb-6 text-gray-400">All featured games are independently audited, mobile-optimized, and offer balanced volatility for Malaysian gaming preferences.</p>
    `,
    author: 'Game Review Team',
    date: 'Dec 15, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Reviews',
    readTime: '8 min',
    tags: ['Pragmatic Play', 'Slots', 'RTP', 'Reviews']
  },
  {
    id: 'duitnow-instant-deposit-guide',
    title: 'DuitNow Quick Deposit Guide: Fund Your Account in 30 Seconds',
    excerpt: 'Step-by-step tutorial for Malaysian players to make instant deposits using DuitNow QR and Online Banking.',
    content: `
      <p class="mb-4 text-gray-400">DuitNow is the fastest payment method for Malaysian online casino players. No third-party processors, no delays, direct bank transfer.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">DuitNow QR Method</h3>
     <p class="mb-6 text-gray-400">1. Click Deposit in your SevenStar7 account<br>2. Select DuitNow QR<br>3. Scan QR code with your banking app<br>4. Funds credited instantly</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Supported Banks</h3>
      <p class="mb-6 text-gray-400">All major Malaysian banks support DuitNow: Maybank, CIMB, Public Bank, RHB, Hong Leong, and more. Available 24/7.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Security Features</h3>
      <p class="mb-6 text-gray-400">DuitNow transfers are protected by bank-level encryption. Your financial data never passes through casino servers.</p>
    `,
    author: 'Payment Solutions Team',
    date: 'Dec 14, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '4 min',
    tags: ['DuitNow', 'Payments', 'Banking']
  },
  {
    id: 'evolution-gaming-live-review',
    title: 'Evolution Gaming Live Casino: Complete Platform Review 2025',
    excerpt: 'In-depth analysis of Evolution Gaming\'s live dealer offerings, game variety, and why they lead the Malaysian market.',
    content: `
      <p class="mb-4 text-gray-400">Evolution Gaming sets the global standard for live casino experiences. Their Malaysian-friendly tables and professional dealers make them the top choice for SevenStar7 players.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Game Selection Excellence</h3>
      <p class="mb-6 text-gray-400">Over 500 live tables including Baccarat, Blackjack, Roulette, and game shows like Crazy Time and Monopoly Live.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">4K Streaming Quality</h3>
      <p class="mb-6 text-gray-400">Multiple camera angles, slow-motion replays, and crystal-clear audio create an immersive experience on any device.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Asian Dealer Preference</h3>
      <p class="mb-6 text-gray-400">Malaysian players appreciate Evolution's Asian dealers who understand local gaming preferences and communication styles.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Mobile Optimization</h3>
      <p class="mb-6 text-gray-400">Seamless mobile play without app downloads. HD streaming works flawlessly on iOS and Android devices.</p>
    `,
    author: 'Live Casino Expert',
    date: 'Dec 13, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Reviews',
    readTime: '7 min',
    tags: ['Evolution Gaming', 'Live Casino', 'Review']
  },
  {
    id: 'blackjack-basic-strategy-malaysia',
    title: 'Blackjack Basic Strategy: Cut House Edge to 0.5%',
    excerpt: 'Master the mathematical perfect play for every blackjack hand and dramatically improve your winning odds.',
    content: `
      <p class="mb-4 text-gray-400">Blackjack offers the lowest house edge in any casino when played with basic strategy. Learn the decision matrix that professional players use.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Hard Hands Strategy</h3>
      <p class="mb-6 text-gray-400">Always hit on 8 or less. Stand on 17 or higher. For 12-16, your decision depends on dealer's up card - this is where most players make mistakes.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Soft Hands Advantage</h3>
      <p class="mb-6 text-gray-400">Hands with an Ace give you flexibility. Always hit soft 17 or less. This is one of the most commonly misplayed hands.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Pair Splitting Rules</h3>
      <p class="mb-6 text-gray-400">Always split Aces and 8s. Never split 5s or 10s. For other pairs, check the dealer's up card using the strategy chart.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Insurance: Never Take It</h3>
      <p class="mb-6 text-gray-400">Insurance has a 7.4% house edge. Even with a strong hand, the math never favors taking insurance.</p>
    `,
    author: 'Strategy Team',
    date: 'Dec 11, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '6 min',
    tags: ['Blackjack', 'Strategy', 'Casino Games']
  },
  {
    id: 'mega888-vs-918kiss-comparison',
    title: 'Mega888 vs 918Kiss: Which Slot Platform Is Better for Malaysians?',
    excerpt: 'Detailed comparison of Malaysia\'s two most popular slot platforms covering games, RTP, bonuses, and mobile experience.',
    content: `
      <p class="mb-4 text-gray-400">Both Mega888 and 918Kiss dominate the Malaysian online slots market. We compare them across all critical factors to help you choose.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Game Variety</h3>
      <p class="mb-6 text-gray-400">Mega888 offers 150+ games with focus on Asian themes. 918Kiss features 200+ titles with more international variety. Both add new games monthly.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Return to Player Rates</h3>
      <p class="mb-6 text-gray-400">Mega888 averages 96.2% RTP across their portfolio. 918Kiss sits at 95.8%. The 0.4% difference is significant for high-volume players.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Mobile Performance</h3>
      <p class="mb-6 text-gray-400">918Kiss requires app download but offers smoother gameplay. Mega888 supports browser play for easier access.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Progressive Jackpots</h3>
      <p class="mb-6 text-gray-400">918Kiss has larger progressive jackpots averaging MYR 500,000+. Mega888 focuses on frequent smaller wins.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Our Recommendation</h3>
      <p class="mb-6 text-gray-400">For RTP-focused players: Mega888. For jackpot hunters: 918Kiss. Both are available on SevenStar7.</p>
    `,
    author: 'Platform Review Team',
    date: 'Dec 10, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Reviews',
    readTime: '5 min',
    tags: ['Mega888', '918Kiss', 'Comparison', 'Slots']
  },
  {
    id: 'sports-betting-malaysia-guide',
    title: 'Sports Betting in Malaysia: Complete Beginner\'s Guide 2025',
    excerpt: 'Everything Malaysian bettors need to know about online sports betting - from odds types to live betting strategies.',
    content: `
      <p class="mb-4 text-gray-400">Sports betting combines entertainment with strategy. Understanding odds, markets, and timing can give you an edge over casual bettors.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Understanding Betting Odds</h3>
      <p class="mb-6 text-gray-400">Malaysian odds show how much you win per MYR 1 bet. Example: 0.90 odds means you win MYR 0.90 for every MYR 1 wagered.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Popular Betting Markets</h3>
      <p class="mb-6 text-gray-400">1X2 (match result), Over/Under goals, Asian Handicap, and Correct Score are the most popular among Malaysian bettors.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Live Betting Advantages</h3>
      <p class="mb-6 text-gray-400">In-play betting allows you to react to game flow. Wait for favorable odds shifts rather than betting pre-match blindly.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Bankroll Management for Sports</h3>
      <p class="mb-6 text-gray-400">Never bet more than 2-5% of total bankroll on a single event. Track all bets to analyze your profitable patterns.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Best Sports to Bet On</h3>
      <p class="mb-6 text-gray-400">EPL, La Liga, and UEFA Champions League offer the most liquid markets with competitive odds.</p>
    `,
    author: 'Sportsbook Team',
    date: 'Dec 09, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '7 min',
    tags: ['Sports Betting', 'Sportsbook', 'Betting Guide']
  },
  {
    id: 'fishing-game-strategy-guide',
    title: 'Fishing Game Winning Tactics: Maximize Your Bullet Efficiency',
    excerpt: 'Advanced strategies for fishing arcade games including bullet selection, boss timing, and coin management for Malaysian players.',
    content: `
      <p class="mb-4 text-gray-400">Fishing games blend skill with luck. Smart bullet management and target selection separate profitable players from those burning through credits.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Bullet Power Selection</h3>
      <p class="mb-6 text-gray-400">Start with low-value bullets (1-5 coins) to test the table payout cycle. Increase to 10-20 coins only when hitting consistently.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Target Priority System</h3>
      <p class="mb-6 text-gray-400">Focus on medium-value fish (10-50x) with high hit rates. Avoid chasing rare fish unless using bonus weapons.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Boss Battle Timing</h3>
      <p class="mb-6 text-gray-400">Save bullets for boss appearances. Use maximum power when boss health is below 30% for highest capture probability.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Table Cycling Strategy</h3>
      <p class="mb-6 text-gray-400">If you miss 10+ shots in a row, switch tables. Each table has independent payout cycles.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Weapon Power-Ups</h3>
      <p class="mb-6 text-gray-400">Use laser and drill weapons during high-value fish swarms for maximum return on investment.</p>
    `,
    author: 'Arcade Games Specialist',
    date: 'Dec 07, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '5 min',
    tags: ['Fishing Games', 'Arcade', 'Strategy']
  },
  {
    id: 'vip-program-benefits-explained',
    title: 'SevenStar7 VIP Program: Exclusive Benefits and Tier Requirements',
    excerpt: 'Complete breakdown of SevenStar7\'s VIP loyalty program including cashback rates, birthday bonuses, and tier upgrade requirements.',
    content: `
      <p class="mb-4 text-gray-400">SevenStar7's VIP program rewards loyal players with escalating benefits. Understanding tier requirements helps you maximize your rewards.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Silver Tier (MYR 50,000 Turnover)</h3>
      <p class="mb-6 text-gray-400">5% weekly cashback, priority withdrawal (24 hours), dedicated account manager, and exclusive slot tournaments.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Gold Tier (MYR 150,000 Turnover)</h3>
      <p class="mb-6 text-gray-400">8% weekly cashback, 12-hour withdrawal priority, birthday bonus up to MYR 888, and invitations to VIP events.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Platinum Tier (MYR 500,000 Turnover)</h3>
      <p class="mb-6 text-gray-400">12% weekly cashback, 6-hour withdrawals, birthday bonus up to MYR 1,888, luxury gifts, and personalized promotions.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Diamond Tier (Invitation Only)</h3>
      <p class="mb-6 text-gray-400">15% cashback, instant withdrawals, annual holiday trips, dedicated VIP host, and exclusive game access.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Automatic Tier Tracking</h3>
      <p class="mb-6 text-gray-400">Your gameplay is automatically monitored. Upgrade notifications sent when you qualify for higher tiers.</p>
    `,
    author: 'VIP Services Team',
    date: 'Dec 06, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'News',
    readTime: '4 min',
    tags: ['VIP', 'Loyalty Program', 'Benefits']
  },
  {
    id: 'mobile-casino-optimization-tips',
    title: 'Mobile Casino Gaming: Optimize Your Phone for Best Performance',
    excerpt: 'Technical tips for Malaysian mobile players to enhance gaming experience, reduce data usage, and extend battery life.',
    content: `
      <p class="mb-4 text-gray-400">Over 80% of Malaysian players use mobile devices for online casino gaming. Optimize your phone settings for smoother gameplay and longer sessions.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Internet Connection Best Practices</h3>
      <p class="mb-6 text-gray-400">Use WiFi for live casino games. 4G/5G works for slots but may consume 100-200MB per hour of play.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Clear Browser Cache Weekly</h3>
      <p class="mb-6 text-gray-400">Accumulated cache slows loading times. Clear your browser cache every Sunday for optimal performance.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Battery Saving Mode</h3>
      <p class="mb-6 text-gray-400">Lower screen brightness to 60-70%. Disable background app refresh. Close unused apps before gaming sessions.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Recommended Browsers</h3>
      <p class="mb-6 text-gray-400">Chrome and Safari offer best compatibility. Update to latest version for security and performance improvements.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Screen Rotation Lock</h3>
      <p class="mb-6 text-gray-400">Enable rotation lock in landscape mode for slots and live games to prevent accidental orientation changes.</p>
    `,
    author: 'Mobile Gaming Team',
    date: 'Dec 05, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '4 min',
    tags: ['Mobile Gaming', 'Optimization', 'Tips']
  },
  {
    id: 'roulette-betting-systems-analysis',
    title: 'Roulette Betting Systems: What Works and What Doesn\'t',
    excerpt: 'Mathematical analysis of popular roulette strategies including Martingale, Fibonacci, and D\'Alembert systems.',
    content: `
      <p class="mb-4 text-gray-400">Roulette betting systems promise consistent wins, but do they actually work? We analyze the math behind popular strategies.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">The Martingale System</h3>
      <p class="mb-6 text-gray-400">Double your bet after each loss. Sounds logical but requires massive bankroll. An 8-loss streak needs 256x your base bet.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Fibonacci Strategy</h3>
      <p class="mb-6 text-gray-400">Increases bets following the Fibonacci sequence. Less aggressive than Martingale but still hits table limits during bad runs.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">D'Alembert System</h3>
      <p class="mb-6 text-gray-400">Increases bet by 1 unit after loss, decreases by 1 after win. More conservative but doesn't overcome house edge.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">The Truth About Systems</h3>
      <p class="mb-6 text-gray-400">No betting system can overcome the mathematical house edge of 2.7% (European) or 5.26% (American roulette).</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Smart Roulette Play</h3>
      <p class="mb-6 text-gray-400">Play European roulette (single zero). Set strict session limits. Treat roulette as entertainment, not income.</p>
    `,
    author: 'Mathematics Team',
    date: 'Dec 04, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '6 min',
    tags: ['Roulette', 'Betting Systems', 'Strategy']
  },
  {
    id: 'pagcor-licensing-explained',
    title: 'PAGCOR License: What It Means for Malaysian Players',
    excerpt: 'Understanding PAGCOR regulation, player protection mechanisms, and why licensing matters for online casino safety.',
    content: `
      <p class="mb-4 text-gray-400">PAGCOR (Philippine Amusement and Gaming Corporation) is one of Asia's most respected gaming regulators. Understanding their oversight protects your interests.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Regulatory Standards</h3>
      <p class="mb-6 text-gray-400">PAGCOR requires operators to maintain segregated player funds, undergo quarterly audits, and implement responsible gaming tools.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Game Fairness Verification</h3>
      <p class="mb-6 text-gray-400">All games must be tested by independent labs (BMM, iTech Labs, GLI) to verify RTP accuracy and random number generation.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Dispute Resolution</h3>
      <p class="mb-6 text-gray-400">Licensed operators must provide clear complaint procedures. PAGCOR mediates unresolved disputes between players and casinos.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Financial Security</h3>
      <p class="mb-6 text-gray-400">Player balances are held in trust accounts separate from operational funds. If operator fails, player funds are protected.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Verification Process</h3>
      <p class="mb-6 text-gray-400">Check casino footer for PAGCOR license number. Verify on official PAGCOR website to confirm authentic licensing.</p>
    `,
    author: 'Compliance Team',
    date: 'Dec 03, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'News',
    readTime: '5 min',
    tags: ['PAGCOR', 'Licensing', 'Safety', 'Regulation']
  },
  {
    id: 'slot-volatility-guide',
    title: 'Slot Volatility Explained: Choose Games Matching Your Bankroll',
    excerpt: 'Comprehensive guide to understanding slot volatility levels and selecting games that fit your playing style and budget.',
    content: `
      <p class="mb-4 text-gray-400">Slot volatility determines win frequency and payout size. Matching volatility to your bankroll prevents premature burnout.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Low Volatility Slots</h3>
      <p class="mb-6 text-gray-400">Frequent small wins (every 3-5 spins). Perfect for players with MYR 100-300 bankrolls who want extended playtime. Examples: Starburst, Blood Suckers.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Medium Volatility Balance</h3>
      <p class="mb-6 text-gray-400">Balanced win frequency and size. Suitable for MYR 300-800 bankrolls. Examples: Book of Dead, Gonzo's Quest.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">High Volatility Thrills</h3>
      <p class="mb-6 text-gray-400">Rare but massive wins. Requires MYR 1,000+ bankroll and patience for dry spells. Examples: Dead or Alive 2, Razor Shark.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Identifying Volatility</h3>
      <p class="mb-6 text-gray-400">Check game info for volatility rating. High max win (5000x+) usually indicates high volatility.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Bankroll Formula</h3>
      <p class="mb-6 text-gray-400">Multiply minimum bet by 100 for low volatility, 200 for medium, 400 for high. This ensures 200-400 spins minimum.</p>
    `,
    author: 'Slots Expert',
    date: 'Dec 02, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '5 min',
    tags: ['Slots', 'Volatility', 'Bankroll Management']
  },
  {
    id: 'bonus-wagering-requirements-explained',
    title: 'Casino Bonus Wagering Requirements: Read the Fine Print',
    excerpt: 'Detailed breakdown of wagering requirements, game contributions, and how to maximize bonus value for Malaysian players.',
    content: `
      <p class="mb-4 text-gray-400">Casino bonuses look attractive, but wagering requirements determine their real value. Understanding terms prevents disappointment.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">What Are Wagering Requirements?</h3>
      <p class="mb-6 text-gray-400">Wagering requirement is how many times you must bet the bonus amount before withdrawing. Example: MYR 100 bonus with 30x wagering = MYR 3,000 total bets needed.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Game Contribution Rates</h3>
      <p class="mb-6 text-gray-400">Slots: 100% contribution. Table games: 10-20%. Live casino: 10%. Bet MYR 100 on blackjack only counts as MYR 10 toward wagering.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Time Restrictions</h3>
      <p class="mb-6 text-gray-400">Most bonuses expire in 7-30 days. Unused bonus and winnings forfeit after expiry. Plan your play schedule accordingly.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Maximum Bet Limits</h3>
      <p class="mb-6 text-gray-400">Usually MYR 5-10 per spin while clearing bonus. Exceeding max bet voids bonus and winnings.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Calculating True Bonus Value</h3>
      <p class="mb-6 text-gray-400">Divide bonus amount by wagering requirement. A MYR 100 bonus with 30x wagering has expected value of ~MYR 3-5 on 96% RTP slots.</p>
    `,
    author: 'Promotions Team',
    date: 'Dec 01, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '6 min',
    tags: ['Bonuses', 'Wagering', 'Promotions']
  },
  {
    id: 'withdrawal-processing-timeframes',
    title: 'Fast Withdrawals Guide: Get Your Winnings in 3 Minutes',
    excerpt: 'Complete guide to SevenStar7 withdrawal methods, processing times, verification requirements, and tips for fastest payouts.',
    content: `
      <p class="mb-4 text-gray-400">SevenStar7 offers industry-leading withdrawal speeds. Understanding the process ensures you receive winnings quickly without delays.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Instant Withdrawal Methods</h3>
      <p class="mb-6 text-gray-400">DuitNow and USDT (TRC20): Average processing time 3-15 minutes. Available 24/7 including weekends and public holidays.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Verification Requirements</h3>
      <p class="mb-6 text-gray-400">First withdrawal requires MyKad verification. Upload clear ID photo and selfie. Approval within 2 hours during business hours.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Minimum and Maximum Limits</h3>
      <p class="mb-6 text-gray-400">Minimum: MYR 50. Maximum: MYR 50,000 per transaction for regular members. VIP members enjoy unlimited withdrawals.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Speed Up Your Withdrawal</h3>
      <p class="mb-6 text-gray-400">1. Complete verification early<br>2. Use same withdrawal method as deposit<br>3. Clear bonus wagering first<br>4. Withdraw during business hours (9 AM - 11 PM MYT)</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Security Checks</h3>
      <p class="mb-6 text-gray-400">Large withdrawals (MYR 20,000+) may require additional verification for security. This protects your account from unauthorized access.</p>
    `,
    author: 'Payment Team',
    date: 'Nov 30, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '4 min',
    tags: ['Withdrawals', 'Payments', 'Banking']
  },
  {
    id: 'game-provider-licenses-verification',
    title: 'Verify Game Provider Licenses: Ensure Fair Play',
    excerpt: 'How to check game provider authentication, verify RNG certification, and ensure you\'re playing licensed, audited games.',
    content: `
      <p class="mb-4 text-gray-400">Not all casino games are created equal. Verifying provider licenses ensures you're playing certified, fair games.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Trusted Game Providers</h3>
      <p class="mb-6 text-gray-400">Pragmatic Play, Evolution Gaming, Microgaming, NetEnt, and Playtech hold multiple international licenses and undergo monthly audits.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">RNG Certification Check</h3>
      <p class="mb-6 text-gray-400">Legitimate games display certification seals in game info. Click the "i" icon to verify BMM, iTech Labs, or GLI certification.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Published RTP Verification</h3>
      <p class="mb-6 text-gray-400">Licensed providers publish actual RTP in game rules. If RTP information is missing or vague, avoid the game.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Red Flags to Avoid</h3>
      <p class="mb-6 text-gray-400">Unknown providers, missing license information, no RNG certification, or suspiciously high advertised RTP (99%+) indicate potential fraud.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">SevenStar7 Quality Assurance</h3>
      <p class="mb-6 text-gray-400">We only partner with certified providers. Every game on our platform is independently audited and verified.</p>
    `,
    author: 'Compliance Team',
    date: 'Nov 29, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '4 min',
    tags: ['Game Providers', 'Licensing', 'Verification', 'Safety']
  },
  {
    id: 'seasonal-promotions-calendar-2025',
    title: '2025 Seasonal Promotions Calendar: Plan Your Play',
    excerpt: 'Upcoming special bonuses, tournaments, and promotional events for Malaysian players throughout 2025.',
    content: `
      <p class="mb-4 text-gray-400">SevenStar7 runs major promotions during Malaysian festivals and holidays. Planning around these events maximizes your bonus value.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Chinese New Year (Jan 29-31)</h3>
      <p class="mb-6 text-gray-400">200% bonus up to MYR 2,888, daily ang pow drops in Croco games, and Lion Dance slot tournament with MYR 50,000 prize pool.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Hari Raya Aidilfitri (Mar 30-Apr 1)</h3>
      <p class="mb-6 text-gray-400">150% reload bonus, special duit raya giveaways, and extended cashback during festive period.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Malaysia Day (Sept 16)</h3>
      <p class="mb-6 text-gray-400">Patriotic slots tournament, 100% deposit match for all Malaysian players, and mystery bonuses throughout the day.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Year-End Mega Tournament (Dec 20-31)</h3>
      <p class="mb-6 text-gray-400">MYR 100,000 prize pool, daily leaderboard races, and grand prize drawing on New Year's Eve.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Monthly Cashback Bonanza</h3>
      <p class="mb-6 text-gray-400">First week of every month: 20% cashback on previous month's net losses. VIP members receive up to 30%.</p>
    `,
    author: 'Marketing Team',
    date: 'Nov 28, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'News',
    readTime: '5 min',
    tags: ['Promotions', 'Bonuses', 'Calendar', 'Events']
  },
  {
    id: 'account-security-best-practices',
    title: 'Casino Account Security: Protect Your Winnings from Hackers',
    excerpt: 'Essential security measures every Malaysian online casino player should implement to safeguard their account and funds.',
    content: `
      <p class="mb-4 text-gray-400">Account security is your responsibility. Implementing these practices protects your balance and personal information from unauthorized access.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Strong Password Requirements</h3>
      <p class="mb-6 text-gray-400">Use 12+ characters mixing uppercase, lowercase, numbers, and symbols. Never reuse your casino password on other sites. Change password every 90 days.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Enable Two-Factor Authentication</h3>
      <p class="mb-6 text-gray-400">SMS or email verification codes add extra security layer. Even if password is compromised, hackers can't access your account without 2FA code.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Recognize Phishing Attempts</h3>
      <p class="mb-6 text-gray-400">Never click links in emails claiming to be from SevenStar7. We never ask for passwords via email. Always type our URL directly in browser.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Public WiFi Dangers</h3>
      <p class="mb-6 text-gray-400">Avoid logging in on public WiFi. Hackers can intercept data. Use mobile data or trusted home WiFi only.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Regular Account Monitoring</h3>
      <p class="mb-6 text-gray-400">Check transaction history weekly. Report suspicious activity immediately to support@sevenstar7.com.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Logout After Sessions</h3>
      <p class="mb-6 text-gray-400">Always click logout button, especially on shared devices. Browser "remember me" is convenient but reduces security.</p>
    `,
    author: 'Security Team',
    date: 'Nov 27, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '6 min',
    tags: ['Security', 'Account Safety', 'Privacy']
  },
  {
    id: 'referral-program-earnings-guide',
    title: 'Earn MYR 10,000+ Monthly: SevenStar7 Referral Program Guide',
    excerpt: 'Comprehensive tutorial on SevenStar7\'s referral program - commission structure, payment terms, and tips to build passive income.',
    content: `
      <p class="mb-4 text-gray-400">SevenStar7's referral program lets you earn unlimited commissions by referring players. Top affiliates make MYR 10,000-50,000 monthly.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Commission Structure</h3>
      <p class="mb-6 text-gray-400">Earn up to 50% of house edge on all referred players' bets. More active players = higher commission tiers: Bronze 30%, Silver 40%, Gold 50%.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">How to Start</h3>
      <p class="mb-6 text-gray-400">Visit Partner Program page, create account, receive unique referral link. Share link on social media, forums, or personal website.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Negative Carryover</h3>
      <p class="mb-6 text-gray-400">If referred players win big one month, negative balance carries to next month. Long-term profitable due to house edge.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Payment Schedule</h3>
      <p class="mb-6 text-gray-400">Commissions calculated monthly. Payment on 5th of following month. Minimum withdrawal: MYR 100. Via bank transfer or USDT.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Building Your Network</h3>
      <p class="mb-6 text-gray-400">Focus on quality over quantity. 10 active players who deposit MYR 500+ monthly earn more than 100 inactive referrals.</p>
      <h3 class="text-xl font-black text-white mb-4 uppercase">Real-Time Tracking</h3>
      <p class="mb-6 text-gray-400">Dashboard shows referred players, their activity, your commissions, and tier progress. Updated every 24 hours.</p>
    `,
    author: 'Affiliate Team',
    date: 'Nov 26, 2024',
    imageUrl: 'https://i.ibb.co/GQZ0DnqG/Whats-App-Image-2025-12-16-at-06-34-31.jpg',
    category: 'Guides',
    readTime: '7 min',
    tags: ['Referral Program', 'Affiliate', 'Passive Income']
  }
];
