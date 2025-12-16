import SectionHeader from '../components/SectionHeader';

export default function HowItWorks() {
  const steps = [
    { number: 1, title: 'Plan Design', description: 'Apollo collaborates with brokers and employers to design aligned, level-funded health plans.' },
    { number: 2, title: 'Risk Management', description: 'Claims oversight, underwriting discipline, and data transparency are applied throughout the year.' },
    { number: 3, title: 'Member Support', description: 'Direct care access, concierge services, and real-time support for employees.' },
    { number: 4, title: 'Renewal Transparency', description: 'Clear performance reporting and predictable renewals.' },
  ];

  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="How It Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-teal rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4 text-center">{step.title}</h3>
              <p className="text-text-secondary text-center leading-relaxed">{step.description}</p>
              {idx < steps.length - 1 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-dark-border"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
