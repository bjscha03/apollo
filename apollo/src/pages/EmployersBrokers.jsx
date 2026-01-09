import Accordion from '../components/Accordion';

export default function EmployersBrokers() {
  const items = [
    { 
      title: 'Only 10 Employees Required', 
      content: 'Unlike traditional captive health plans designed for massive corporations, Apollo was built to serve small and midsize groups.' 
    },
    { 
      title: 'Keep the Savings When Claims Are Low', 
      content: 'If your group experiences a healthy year, you keep the unused claims fund — gaining underwriting profit and reward.' 
    },
    { 
      title: 'Direct Primary Care Included', 
      content: 'Healthcare2U access with $0–$25 visits.' 
    },
    { 
      title: 'Concierge Support Built In', 
      content: 'Real people, not bots — for claims and care.' 
    },
    { 
      title: 'Full Rx Rebate Pass-Through', 
      content: 'Clients keep 100% of pharmacy rebates.' 
    },
    { 
      title: 'Say Goodbye to Renewal Shock', 
      content: 'Apollo\'s data-driven captive structure delivers consistent, transparent renewals instead of arbitrary rate hikes.' 
    },
    { 
      title: 'Cash-Based Pricing', 
      content: 'Upfront bundled surgical pricing with no surprises.' 
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Align Incentives',
      description: 'Our plans create true alignment between employers, brokers, and members for better outcomes.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Unlock Transparency',
      description: 'Full visibility into costs, claims, and performance — no hidden fees or surprises.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Scale Seamlessly',
      description: 'Built for groups of 10+, our platform grows with your business without complexity.'
    }
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
              A Better Health Plan Starts With <span className="text-accent-gold">Better Partnerships</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Apollo Health partners with forward-thinking brokers to deliver smarter, more cost-effective benefits. Our plans align incentives, unlock transparency, and scale seamlessly — so you can stand out and serve better.
            </p>
          </div>
        </div>
      </section>

      {/* Three Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-dark-bg border border-dark-border rounded-xl p-8 text-center hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10"
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Employers Love Apollo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Employers <span className="text-accent-gold">Love Apollo</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Discover the advantages that set Apollo apart
            </p>
          </div>
          
          <Accordion items={items} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-card to-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to Partner With <span className="text-accent-gold">Apollo?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10">
            Let's discuss how Apollo can help you deliver exceptional value to your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
            >
              Contact Us
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
