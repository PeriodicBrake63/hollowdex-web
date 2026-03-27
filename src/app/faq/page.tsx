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
    question: 'Is HollowDex legal?',
    answer:
      'Yes! HollowDex is a fan-made Discord bot and is not affiliated with, supported, or endorsed by Team Cherry. All Hollow Knight assets and trademarks belong to Team Cherry.',
  },
  {
    question: 'How do I add HollowDex to my Discord server?',
    answer:
      "Click the 'Add to Discord' button on our homepage. You'll need Discord server management permissions to authorize the bot. Once added, set a spawn channel using /server spawnch.",
  },
  {
    question: 'Is HollowDex free to use?',
    answer:
      'Yes! HollowDex is completely free to use on any Discord server.',
  },
  {
    question: 'How do I catch enemies?',
    answer:
      'When a wild enemy appears in your spawn channel, click the "Catch!" button. Your catch chance depends on your total attack power compared to the enemy\'s health. Each player gets 3 attempts before the enemy flees!',
  },
  {
    question: 'How do I trade cards with other players?',
    answer:
      'Use /trade begin @user to start a trade, then /trade add to add cards you want to exchange. Trades are completed when both parties agree.',
  },
  {
    question: 'How do battles work?',
    answer:
      'Challenge other players using /battle @user. Your cards\' attack and health stats are compared against your opponent\'s. Win battles to climb the leaderboard!',
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
