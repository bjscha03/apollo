import SectionHeader from '../components/SectionHeader';

export default function HowItWorks() {
  const benefits = [
    {
      title: 'Fixed Monthly Costs',
      description: 'You pay a predictable monthly amount that includes claims funding, admin fees, and stop-loss insurance — no surprise spikes.',
      icon: '💰'
    },
    {
      title: 'Refund Surplus',
      description: "If actual claims are less than what's funded, the employer keeps 100% of their claims fund, and a portion of their premium dollars.",
      icon: '💵'
    },
    {
      title: 'Great Care Access',
      description: 'Employees get access to PPO networks, 24/7 virtual care, and $0–$25 visits with Healthcare2U direct primary care.',
      icon: '🏥'
    }
  ];

  const features = [
    'Multiple deductible options and PPO networks',
    'Concierge-Level Navigation of Care',
    'Transparent pharmacy benefits with TrueScripts',
    'Unlimited virtual care + chronic condition management',
    'Bundled Pricing for Surgical Procedures',
    'Legal and patient advocacy support (optional RBP)'
  ];

  const partners = [
    {
      name: 'Skyward',
      role: 'Medical Plan Underwriter',
      description: 'Industry-leading underwriting and risk management'
    },
    {
      name: 'TrueScripts',
      role: 'Transparent PBM',
      description: 'Real-time tools and transparent pharmacy benefits'
    },
    {
      name: 'EHN',
      role: 'Provider Network',
      description: 'Quality-focused provider access'
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
                <div className="text-5xl mb-6">{benefit.icon}</div>
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
                  <span className="text-2xl font-bold text-dark-bg">{partner.name.charAt(0)}</span>
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
            className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
