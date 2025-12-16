export default function Hero({ headline, subheadline, cta }) {
  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-text-primary mb-8 leading-tight">
          {headline}
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
          {subheadline}
        </p>
        {cta && (
          <button className="bg-accent-blue hover:bg-accent-teal text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg">
            {cta}
          </button>
        )}
      </div>
    </section>
  );
}
