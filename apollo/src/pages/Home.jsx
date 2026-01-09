export default function Home() {
  const keyFeatures = [
    {
      title: '$0 Copays',
      description: 'Primary Care, Generic Medications, Labwork, Etc.',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Multiple High Performance Networks',
      description: 'Access to quality providers nationwide',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Level-Pay with 100% Surplus',
      description: 'Returned to Client',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Risk-Sharing Model',
      description: 'Smooth Out Renewals',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: 'Lower Costs',
      icon: (
        <svg className="w-16 h-16 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Better Outcomes',
      icon: (
        <svg className="w-16 h-16 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Greater Control',
      icon: (
        <svg className="w-16 h-16 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dtrxl120u/image/upload/v1767994808/download_lkpjae.webp)',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-dark-bg/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Smarter <span className="text-accent-gold">Health Plans</span>
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary mb-8 font-light">
              The Transparent Health Plan with <span className="text-accent-gold font-semibold">$0 Out-of-Pocket Costs</span>
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105 mb-12"
            >
              Explore Plans
            </a>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              A Modern Health Solution combining <span className="text-text-primary font-semibold">Direct Primary Care</span>, <span className="text-text-primary font-semibold">Transparent Pharmacy Benefits</span> & <span className="text-text-primary font-semibold">Exclusive Access to Providers</span> all under a <span className="text-text-primary font-semibold">Captive Insurance Model</span> to bring control back to the member, while lowering costs!
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-xl p-6 hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="text-center group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-3xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-card to-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to Transform Your <span className="text-accent-gold">Health Benefits?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Discover how Apollo's innovative approach can reduce costs while improving care for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="/how-it-works" 
              className="inline-block bg-transparent border-2 border-accent-gold hover:bg-accent-gold/10 text-accent-gold font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
