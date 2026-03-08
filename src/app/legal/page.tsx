export const metadata = {
  title: 'HollowDex - Legal',
  description: 'Terms of Service and Privacy Policy for HollowDex',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden flex-grow">
      <div className="max-w-3xl mx-auto z-10 relative bg-black/20 border border-white/5 p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Legal & Privacy</h1>
        
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
            <p>
              By using the HollowDex Discord Bot and Web Platform, you agree to these terms. 
              The bot is provided "as is", without warranty of any kind. 
              We reserve the right to restrict access or ban users who abuse the bot's economy or API systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Policy</h2>
            <p>
              HollowDex only collects and stores data strictly relevant to the functionality of the bot. This includes:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-foreground/70">
              <li>Your Discord User ID</li>
              <li>Your in-game progression (Geo/Money, captured enemies)</li>
              <li>Global leaderboard statistics</li>
            </ul>
            <p className="mt-4">
              <strong>We do not share any of this data with third parties.</strong> 
              No personally identifiable information (other than your public Discord ID) is stored.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
