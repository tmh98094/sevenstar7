import React from 'react';
import { Game } from '../types';
import { EXTERNAL_LINK } from '../constants';
import { Play, Info } from 'lucide-react';
import TrackedLink from './TrackedLink';
import { useTranslation } from '../src/hooks/useTranslation';

interface GameShowcaseCardProps {
  game: Game;
  onInfoClick?: () => void;
}

const GameShowcaseCard: React.FC<GameShowcaseCardProps> = ({ game, onInfoClick }) => {
  const { t } = useTranslation();

  const getGameTitle = () => {
    const translatedGame = t(`games.${game.id}.title`);
    return translatedGame !== `games.${game.id}.title` ? translatedGame : game.title;
  };

  const getGameProvider = () => {
    // For providers, we can translate common ones
    const providerTranslations: Record<string, string> = {
      'Croco Gaming': t('games.provider-4.title'),
      'Pragmatic Play': t('games.provider-20.title'),
      '918Kiss': t('games.provider-1.title'),
      'Mega888': t('games.provider-17.title'),
      'Evolution': t('games.live-3.title'),
      'Asia Gaming': t('games.live-1.title'),
      'SBOBET': t('games.sports-1.title'),
      'CMD368': t('games.sports-2.title'),
    };
    
    return providerTranslations[game.provider] || game.provider;
  };

  return (
    <div
      className="group bg-brand-dark rounded-xl overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_0_25px_rgba(250,187,46,0.15)] relative"
      aria-label={`View details for ${game.title}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={game.imageUrl}
          alt={getGameTitle()}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
          loading="lazy"
        />

        {/* Type Badge */}
        <div className="absolute top-2 right-2 z-20">
          <span className={`text-[9px] font-black px-2 py-1 rounded shadow-md uppercase tracking-wide ${game.category === 'Exclusive'
            ? 'bg-green-600 text-white shadow-green-900/40'
            : 'bg-brand-black/80 text-gray-300 backdrop-blur-sm'
            }`}>
            {game.provider}
          </span>
        </div>

        {/* Hover Overlay - Simplified */}
        <div className="absolute inset-0 bg-brand-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <TrackedLink
            href={EXTERNAL_LINK}
            eventName="play_card_click"
            eventParams={{ game_id: game.id }}
            target="_blank"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-black py-2 px-8 md:py-3 md:px-10 rounded-lg md:rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-gold/30 text-sm md:text-base uppercase tracking-wider"
          >
            <Play size={16} fill="currentColor" className="md:w-5 md:h-5" /> {t('ui.play').toUpperCase()}
          </TrackedLink>
        </div>
      </div>

      {/* Permanent Footer (Visible always) */}
      <div className="p-3 bg-brand-black border-t border-white/5 flex items-center justify-between group-hover:bg-brand-dark transition-colors">
        <span className="text-xs font-bold text-white truncate max-w-[70%]">{getGameTitle()}</span>
        <div className={`w-2 h-2 rounded-full ${game.category === 'Exclusive' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-gray-600'}`}></div>
      </div>
    </div>
  );
};

export default GameShowcaseCard;
