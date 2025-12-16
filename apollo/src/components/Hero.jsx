export default function Hero({ headline, subheadline, cta = "Get Started" }) {
  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-6 leading-tight">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            {subheadline}
          </p>
        )}
        {cta && (
          <button className="bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
            {cta}
          </button>
        )}
      </div>
    </section>
  );
}
