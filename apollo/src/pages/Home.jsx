import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import CardGrid from '../components/CardGrid';

export default function Home() {
  const services = [
    {
      title: 'Underwriting',
      description: 'Expert risk assessment and policy development',
      bullets: ['Risk assessment', 'Policy development', 'Data-driven decisions'],
      cta: 'Learn more',
    },
    {
      title: 'Claims Management',
      description: 'Efficient claims processing and resolution',
      bullets: ['Quick processing', 'Dedicated support', 'Transparent updates'],
      cta: 'Learn more',
    },
    {
      title: 'Apollo Platform',
      description: 'Apollo is a technology platform used to support underwriting, claims, and reporting workflows for select programs.',
      bullets: ['Integrated workflows', 'Real-time reporting', 'Scalable solution'],
      cta: 'Explore Apollo Platform',
      highlighted: true,
    },
  ];

  return (
    <>
      <Hero
        headline="A Better Health Plan Starts With Better Partnerships"
        subheadline="Apollo Health partners with forward-thinking brokers to deliver smarter, more cost-effective benefits. Our plans align incentives, unlock transparency, and scale seamlessly — so you can stand out and serve better."
        cta="Start a Conversation"
      />
      <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Core Services" subtitle="Comprehensive risk management solutions designed for enterprise-scale operations" />
          <CardGrid cards={services} />
        </div>
      </section>
    </>
  );
}
