export const metadata = {
  title: 'HollowDex - Commands',
  description: 'View all commands available for the HollowDex Discord Bot',
};

export default function CommandsPage() {
  const commands = [
    { name: "/enemy inspect", description: "Inspect an enemy by its ID to view detailed stats and info", args: "query (enemy ID)" },
    { name: "/player init", description: "Initializes your Discord account as a new HollowDex collector", args: "None" },
    { name: "/player config", description: "Opens the player configuration panel to manage your profile", args: "None" },
    { name: "/player info", description: "Get specific information and progress about a targeted user", args: "usr (target user)" },
    { name: "/trade begin", description: "Starts a new trading session with another user out in Hallownest", args: "usr (user to trade with)" },
    { name: "/trade add", description: "Adds an enemy from your collection to the ongoing trade", args: "enemy (enemy ID)" },
  ];

  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden flex-grow">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">Commands</h1>
        <p className="text-foreground/60 text-lg mb-12">
          Master the HollowDex bot with these verified commands.
        </p>

        <div className="grid gap-6">
          {commands.map((cmd) => (
            <div key={cmd.name} className="bg-black/20 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                <code className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                  {cmd.name}
                </code>
                {cmd.args !== "None" && (
                  <span className="text-sm font-mono text-foreground/40 bg-white/5 px-2 py-1 rounded">
                    args: {cmd.args}
                  </span>
                )}
              </div>
              <p className="text-foreground/80 mt-2">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
