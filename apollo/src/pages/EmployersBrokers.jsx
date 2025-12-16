import Hero from '../components/Hero';
import Accordion from '../components/Accordion';

export default function EmployersBrokers() {
  const items = [
    { title: 'Only 10 Employees Required', content: 'Unlike traditional captive health plans designed for massive corporations, Apollo was built to serve small and midsize groups.' },
    { title: 'Keep the Savings When Claims Are Low', content: 'If your group experiences a healthy year, you keep the unused claims fund — gaining underwriting profit and reward.' },
    { title: 'Direct Primary Care Included', content: 'Healthcare2U access with $0–$25 visits.' },
    { title: 'Concierge Support Built In', content: 'Real people, not bots — for claims and care.' },
    { title: 'Full Rx Rebate Pass-Through', content: 'Clients keep 100% of pharmacy rebates.' },
    { title: 'Say Goodbye to Renewal Shock', content: 'Apollo\'s data-driven captive structure delivers consistent, transparent renewals instead of arbitrary rate hikes.' },
    { title: 'Cash-Based Pricing', content: 'Upfront bundled surgical pricing with no surprises.' },
  ];

  return (
    <>
      <Hero headline="Why Employers Love Working With Apollo Health" subheadline="" />
      <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Accordion items={items} />
        </div>
      </section>
    </>
  );
}
