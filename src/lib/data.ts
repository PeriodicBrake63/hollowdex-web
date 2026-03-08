export interface EnemyAbility {
  type: string;
  summons?: string;
  count?: number;
}

export interface Enemy {
  id: string; // The key from the JSON, e.g., 'crawlid'
  name: string;
  category: string;
  path: string;
  health: number;
  attack: number;
  ability: EnemyAbility | 0;
  rarity: number | "infinite";
}

export async function getEnemies(): Promise<Enemy[]> {
  // In a real scenario, this would be a fetch() call to the SQL-backed API.
  // For now, we simulate async fetching the local mock data.
  
  // Since we're in Next.js Server Components, we can read the file or import it directly.
  // We'll use a dynamic import of the JSON to ensure it's loaded server-side.
  const rawData = await import('@/data/Enemylist.json');
  
  // The JSON structure is an object keyed by enemy ID. We'll map it to an array for easier rendering.
  const enemies: Enemy[] = Object.entries(rawData.default || rawData).map(([id, data]: [string, any]) => {
    return {
      id,
      name: data.name,
      category: data.category,
      path: `/${data.path}`, // Prepend slash so Next.js treats it as a root public asset
      health: data.health,
      attack: data.attack,
      ability: data.ability,
      rarity: data.rarity
    };
  });
  
  // Optional: Simulate network delay for realism during dev
  // await new Promise(resolve => setTimeout(resolve, 500));
  
  return enemies;
}

export async function getEnemyById(id: string): Promise<Enemy | null> {
  const enemies = await getEnemies();
  return enemies.find(e => e.id === id) || null;
}
