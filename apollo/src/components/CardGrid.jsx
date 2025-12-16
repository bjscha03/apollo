export default function CardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`p-8 rounded-lg border transition-all duration-200 hover:border-accent-gold ${
            card.highlighted
              ? 'bg-dark-card border-accent-gold'
              : 'bg-dark-bg border-dark-border'
          }`}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            {card.title}
          </h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {card.description}
          </p>
          {card.bullets && (
            <ul className="space-y-3 mb-6">
              {card.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-text-secondary">
                  <span className="text-accent-gold mr-3 font-bold">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {card.cta && (
            <button className="text-accent-gold hover:text-accent-gold-hover font-semibold transition-colors duration-200">
              {card.cta} →
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
