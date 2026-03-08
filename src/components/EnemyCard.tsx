import Image from 'next/image';
import type { Enemy } from '@/lib/data';

interface EnemyCardProps {
  enemy: Enemy;
  customRarity?: string;
}

export function EnemyCard({ enemy, customRarity }: EnemyCardProps) {
  // Use a fallback image or generic if the path is somehow missing
  const imageSrc = enemy.path || '/placeholder.png'; // Make sure we handle missing images gracefully
  
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-black/20 border border-white/5 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Rarity Indicator */}
      <div className="absolute top-3 right-3 z-20">
        <span className="px-2 py-1 text-xs font-bold rounded-full bg-black/60 border border-white/10 backdrop-blur-md shadow-sm">
          {customRarity ? customRarity : (enemy.rarity === 'infinite' ? 'Boss' : `${(enemy.rarity * 100).toFixed(0)}%`)}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-48 w-full p-4 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
        <div className="relative w-full h-full">
           <Image 
            src={imageSrc} 
            alt={enemy.name} 
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_var(--primary-glow)] transition-all duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{enemy.name}</h3>
        <p className="text-xs text-foreground/50 uppercase tracking-wider mb-4">{enemy.category.replace('_', ' ')}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col items-center">
             <span className="text-xs text-red-400 mb-1">HP</span>
             <span className="font-mono font-bold">{enemy.health.toLocaleString()}</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col items-center">
             <span className="text-xs text-orange-400 mb-1">ATK</span>
             <span className="font-mono font-bold">{enemy.attack.toLocaleString()}</span>
          </div>
        </div>
        
        {enemy.ability !== 0 && (
          <div className="mt-3 p-2 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-xs text-primary/80 text-center">
              Special: <span className="font-semibold capitalize text-primary">{enemy.ability.type}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
