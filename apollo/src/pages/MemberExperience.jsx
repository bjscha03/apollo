import SectionHeader from '../components/SectionHeader';

export default function MemberExperience() {
  const benefits = [
    { title: '$0 Copays for Primary and Urgent Care', description: 'Unlimited $0 visits for primary and urgent care through Healthcare2U.' },
    { title: '24/7 Telehealth Access', description: 'Board-certified doctors available day or night for virtual care, refills, and guidance.' },
    { title: 'Prescription Savings Made Simple', description: 'Transparent pharmacy pricing, formulary support, and real-time tools to find lower-cost alternatives.' },
    { title: 'Live Concierge Support', description: 'A human support team to help schedule care, understand benefits, and resolve billing questions.' },
  ];

  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Benefits for Employees" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-dark-card border border-dark-border rounded-lg hover:border-accent-gold transition-all duration-200">
              <h3 className="text-lg font-bold text-text-primary mb-4">{benefit.title}</h3>
              <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
