export const metadata = {
  title: 'FAQ',
  description:
    'Frequently Asked Questions about HollowDex - the ultimate Hollow Knight Discord bot. Learn how to add the bot, catch enemies, trade cards, and more.',
  keywords: [
    'HollowDex FAQ',
    'Hollow Knight bot help',
    'Discord bot questions',
    'HollowDex how to use',
    'Hollow Knight trading cards guide',
  ],
};

const faqData = [
  {
    question: 'What is HollowDex?',
    answer:
      'HollowDex is a free Discord bot that lets you collect, trade, and battle with trading cards featuring enemies from Hollow Knight. Catch creatures from across Hallownest and build your ultimate collection.',
  },
  {
    question: 'How do I add HollowDex to my Discord server?',
    answer:
      "Click the 'Add to Discord' button on our homepage. You'll need Discord server management permissions to authorize the bot. Once added, it will be ready to use!",
  },
  {
    question: 'Is HollowDex free to use?',
    answer:
      'Yes! HollowDex is completely free to use on any Discord server. There are no premium features or paywalls.',
  },
  {
    question: 'How do I catch enemies?',
    answer:
      'Use the /catch command when an enemy appears in your server. Each enemy has different rarity levels, so keep trying to complete your collection!',
  },
  {
    question: 'Can I trade cards with other players?',
    answer:
      "Absolutely! Use the /trade command to exchange duplicate cards with other players. Trading is a great way to complete your HollowDex collection.",
  },
  {
    question: 'How do battles work?',
    answer:
      'Challenge other players using the /battle command. Your cards stats determine the outcome. Win battles to climb the leaderboard and earn rewards!',
  },
  {
    question: 'How many enemies can I collect?',
    answer:
      'HollowDex features enemies from every area of Hallownest, including bosses, mini-bosses, and regular enemies. New enemies are added with each game update.',
  },
  {
    question: 'What are card rarities?',
    answer:
      'Cards come in multiple rarity tiers: Common, Uncommon, Rare, Epic, and Legendary. Legendary cards are the rarest and most powerful!',
  },
  {
    question: 'How do I view my collection?',
    answer:
      'Use the /dex command to view your complete collection. The /stats command shows your player statistics and progress.',
  },
  {
    question: 'Where can I report bugs or suggest features?',
    answer:
      "Visit our contact page or join our Discord server. We welcome feedback and are always looking to improve HollowDex based on community suggestions.",
  },
  {
    question: 'Does HollowDex work with Discord mobile?',
    answer:
      'Yes! HollowDex works on both desktop and mobile Discord versions. All commands function the same way regardless of platform.',
  },
  {
    question: 'How often are new enemies added?',
    answer:
      "We update HollowDex regularly with new enemies from Hollow Knight. Follow our Discord server or check the homepage for announcements about new additions.",
  },
];

export default function FaQPage() {
  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden flex-grow">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-foreground/60 mb-12 max-w-xl mx-auto">
          Everything you need to know about HollowDex, the ultimate Hollow Knight
          Discord bot.
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-lg hover:bg-card/50 transition-colors list-none">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
