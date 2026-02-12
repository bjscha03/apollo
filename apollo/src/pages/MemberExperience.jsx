export default function MemberExperience() {
  const benefits = [
    { 
      title: '$0 Copays for Primary and Urgent Care', 
      description: 'Virtual and in-person visits at no cost to the member.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: '24/7 Telehealth Access', 
      description: 'Board-certified doctors available day or night for virtual care, refills, and guidance.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: 'Prescription Savings Made Simple', 
      description: 'Transparent pharmacy pricing, formulary support, and real-time tools to find lower-cost alternatives.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      title: 'Live Concierge Support', 
      description: 'A human support team to help schedule care, understand benefits, and resolve billing questions.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
  ];

  const memberJourney = [
    {
      step: '1',
      title: 'Enroll with Ease',
      description: 'Simple onboarding process with clear benefit explanations and immediate access to your member portal.',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      step: '2',
      title: 'Access Care Instantly',
      description: 'Book appointments, connect with telehealth providers, or visit urgent care — all with $0 copays.',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      step: '3',
      title: 'Save on Prescriptions',
      description: 'Use our transparent pricing tools to find the best prices on medications, with many generics at $0 cost.',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      step: '4',
      title: 'Get Support Anytime',
      description: 'Real people ready to help with claims, billing, or care coordination — no automated phone trees.',
      icon: (
        <svg className="w-10 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: '$0', label: 'Primary Care Copays' },
    { value: '24/7', label: 'Telehealth Access' },
    { value: '100%', label: 'Transparent Pricing' },
    { value: 'Real', label: 'Human Support' }
  ];

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Healthcare That Works <span className="text-accent-gold">For You</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
              Experience healthcare the way it should be — simple, transparent, and designed around your needs. No surprises, no runarounds, just quality care when you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg hover:text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-card border-y border-accent-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Your <span className="text-accent-gold">Benefits</span> at a Glance
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Apollo Health members enjoy comprehensive coverage with unmatched transparency and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-dark-card border border-dark-border rounded-xl hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10 group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Your <span className="text-accent-gold">Journey</span> With Apollo
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From enrollment to ongoing care, we make every step simple and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberJourney.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-accent-gold transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-dark-bg font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  
                  <div className="flex justify-center mb-6 mt-4">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-4 text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-accent-gold/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">
              More Ways Apollo <span className="text-accent-gold">Supports You</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">No Surprise Bills</h3>
                  <p className="text-text-secondary">Transparent pricing means you know costs upfront — no hidden fees or unexpected charges.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Wide Provider Network</h3>
                  <p className="text-text-secondary">Access to multiple high-performance PPO networks means you can likely keep your current doctors.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Preventive Care Focus</h3>
                  <p className="text-text-secondary">Comprehensive preventive services at no cost to keep you healthy and catch issues early.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Digital Tools</h3>
                  <p className="text-text-secondary">Easy-to-use member portal and mobile app for managing benefits, finding care, and tracking claims.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-card to-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to Experience <span className="text-accent-gold">Better Healthcare?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Talk to your employer about Apollo Health benefits, or contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg hover:text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
            >
              Contact Us
            </a>
            <a 
              href="/faq" 
              className="inline-block bg-transparent border-2 border-accent-gold hover:bg-accent-gold/10 text-accent-gold font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
