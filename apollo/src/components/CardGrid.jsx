export default function CardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`p-8 rounded-lg border transition-all duration-200 hover:border-accent-teal ${
            card.highlighted
              ? 'bg-dark-card border-accent-blue'
              : 'bg-dark-card border-dark-border hover:bg-opacity-80'
          }`}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            {card.title}
          </h3>
          <p className="text-text-secondary mb-6">
            {card.description}
          </p>
          {card.bullets && (
            <ul className="space-y-3 mb-8">
              {card.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent-teal mr-3 font-bold">•</span>
                  <span className="text-text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {card.cta && (
            <button className="text-accent-blue hover:text-accent-teal font-semibold transition-colors duration-200">
              {card.cta}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
