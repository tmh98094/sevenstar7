import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Info, Trophy, BarChart3, Zap } from 'lucide-react';
import { Game } from '../types';
import { EXTERNAL_LINK } from '../constants';
import TrackedLink from './TrackedLink';

interface GameDetailModalProps {
    game: Game | null;
    onClose: () => void;
}

const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
    if (!game) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    className="bg-brand-dark border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left: Image & CTA */} //
                        <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                            <img
                                src={game.imageUrl}
                                alt={game.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-brand-black/80"></div>
                        </div>

                        {/* Right: Info */}
                        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center bg-brand-black sm:bg-transparent">
                            <div className="mb-6">
                                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">{game.provider}</span>
                                <h2 className="text-3xl font-display font-black text-white leading-tight mb-2">{game.title}</h2>
                                <p className="text-gray-400 text-sm">{game.description || `Experience the thrill of ${game.title} by ${game.provider}. High quality graphics and immersive gameplay.`}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase mb-1">
                                        <BarChart3 size={14} /> RTP
                                    </div>
                                    <div className="text-brand-gold font-bold">{game.rtp || '97.5%'}</div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase mb-1">
                                        <Zap size={14} /> Volatility
                                    </div>
                                    <div className="text-white font-bold">{game.volatility || 'High'}</div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase mb-1">
                                        <Trophy size={14} /> Max Win
                                    </div>
                                    <div className="text-white font-bold">{game.maxWin || 'x5000'}</div>
                                </div>
                                {game.category === 'Exclusive' && (
                                    <div className="bg-brand-gold/10 p-3 rounded-lg border border-brand-gold/20">
                                        <div className="flex items-center gap-2 text-brand-gold text-xs uppercase mb-1">
                                            <Info size={14} /> Status
                                        </div>
                                        <div className="text-brand-gold font-bold">VIP Only</div>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4">
                                <TrackedLink
                                    href={EXTERNAL_LINK}
                                    eventName="play_modal_click"
                                    eventParams={{ game_id: game.id, game_title: game.title }}
                                    target="_blank"
                                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-green-900/20"
                                >
                                    <Play size={18} fill="currentColor" /> PLAY NOW
                                </TrackedLink>
                                {/* Demo Button (Optional, can be added later) */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default GameDetailModal;
