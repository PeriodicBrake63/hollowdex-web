import { getEnemies } from '@/lib/data';
import { EnemyCard } from '@/components/EnemyCard';
import Link from 'next/link';

export const metadata = {
  title: 'HollowDex Bestiary',
  description: 'View all known entities in the Hollow Knight universe.',
};

export default async function DexPage() {
  const allEnemies = await getEnemies();
  
  // Filter out the secret Knight enemy
  const enemies = allEnemies.filter(e => e.id !== 'knight');
  
  // Rarity calculation: (1/rarity) / (sum of all 1 / rarities)
  let sumInverseRarity = 0;
  for (const e of enemies) {
    if (typeof e.rarity === 'number') {
      sumInverseRarity += (1 / e.rarity);
    }
  }

  // Pre-calculate true probabilities to pass into the cards eventually if needed
  // For now we'll just display it in the card Component itself or wrap it
  const enemiesWithTrueRarity = enemies.map(e => {
    let trueRarityValue = "Boss";
    if (typeof e.rarity === 'number') {
      const prob = (1 / e.rarity) / sumInverseRarity;
      trueRarityValue = `${(prob * 100).toFixed(2)}%`;
    }
    return { ...e, trueRarityDisplay: trueRarityValue };
  });

  const totalEnemies = enemiesWithTrueRarity.length;
  const categories = Array.from(new Set(enemiesWithTrueRarity.map(e => e.category)));

  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden flex-grow">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-2">
              Bestiary
            </h1>
            <p className="text-foreground/60 text-lg max-w-xl">
              A comprehensive catalog of {totalEnemies} known entities across {categories.length} distinct regions.
            </p>
          </div>
          
          {/* Quick Stats Pill */}
          <div className="bg-black/20 border border-white/5 px-6 py-4 rounded-2xl flex gap-8">
            <div className="flex flex-col">
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Total</span>
              <span className="text-2xl font-mono font-bold text-white">{totalEnemies}</span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-xs text-foreground/50 uppercase tracking-widest">Regions</span>
              <span className="text-2xl font-mono font-bold text-white">{categories.length}</span>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {enemiesWithTrueRarity.map((enemy) => (
            <EnemyCard key={enemy.id} enemy={enemy} customRarity={enemy.trueRarityDisplay} />
          ))}
        </div>
        
        {enemies.length === 0 && (
          <div className="w-full py-32 text-center bg-black/20 rounded-3xl border border-white/5">
            <p className="text-xl text-foreground/50">No entities mapped.</p>
          </div>
        )}

      </div>
    </main>
  );
}
