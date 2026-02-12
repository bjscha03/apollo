import SectionHeader from '../components/SectionHeader';

export default function HowItWorks() {
  const benefits = [
    {
      title: 'Fixed Monthly Costs',
      description: 'You pay a predictable monthly amount that includes claims funding, admin fees, and stop-loss insurance — no surprise spikes.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Refund Surplus',
      description: "If actual claims are less than what's funded, the employer keeps 100% of their claims fund, and a portion of their premium dollars.",
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Great Care Access',
      description: 'Employers get access to PPO network, 24/7 virtual care, and direct primary care at no cost to the member.',
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const features = [
    'Multiple deductible options and PPO networks',
    'Concierge-Level Navigation of Care',
    'Transparent pharmacy benefits',
    'Unlimited virtual care + chronic condition management',
    'Bundled Pricing for Surgical Procedures',
    'Legal and patient advocacy support (optional RBP)'
  ];

  const partners = [
    {
      name: 'Zenith',
      role: 'Medical Plan Underwriter',
      description: 'Industry-leading underwriting and risk management',
      icon: (
        <svg className="w-8 h-8 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: 'Transparent PBM',
      role: 'Transparent pharmacy benefits',
      description: 'Multiple transparent PBMs (EHN / Unity)',
      icon: (
        <svg className="w-8 h-8 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      name: 'EHN',
      role: 'Provider Network',
      description: 'Quality-focused provider access',
      icon: (
        <svg className="w-8 h-8 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            How is Apollo <span className="text-accent-gold">Different?</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Apollo combines level-funded health plans with captive insurance to give employers financial control, transparency, and better care for their teams.
          </p>
        </div>
      </section>

      {/* Three Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Level-Funded + Captive = <span className="text-accent-gold">Financial Control</span>
            </h2>
            <p className="text-xl text-text-secondary">
              All Apollo plans come with these core features built in:
            </p>
          </div>
          
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <svg 
                      className="w-6 h-6 text-accent-gold" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <p className="text-text-primary text-lg group-hover:text-accent-gold transition-colors duration-200">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Trusted <span className="text-accent-gold">Partners</span>
            </h2>
            <p className="text-xl text-text-secondary">
              We work with industry leaders to deliver exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-xl p-8 text-center hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-gold to-accent-gold-hover rounded-full flex items-center justify-center mx-auto mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">{partner.name}</h3>
                <p className="text-accent-gold font-semibold mb-4">{partner.role}</p>
                <p className="text-text-secondary">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Let Us Show You <span className="text-accent-gold">How It Works</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Ready to take control of your health plan costs? Our team is here to answer your questions and show you how Apollo can work for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg hover:text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
