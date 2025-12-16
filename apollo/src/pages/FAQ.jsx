import SectionHeader from '../components/SectionHeader';
import Accordion from '../components/Accordion';

export default function FAQ() {
  const items = [
    { title: 'What is a level-funded health plan?', content: 'Level-funded plans combine the cost predictability of fully insured plans with the cost-control and refund potential of self-funded arrangements.' },
    { title: 'Who is Apollo Health best suited for?', content: 'Small to mid-sized employers seeking high-quality benefits without traditional insurance markup or renewal volatility.' },
    { title: 'What happens if claims come in under budget?', content: 'Employers may receive a surplus refund as part of Apollo\'s cost-sharing model.' },
    { title: 'Is Apollo Health ACA-compliant?', content: 'Yes. Apollo plans meet ACA guidelines and can be tailored to employer compliance requirements.' },
    { title: 'Can employees keep their current doctors?', content: 'Most likely. Apollo offers access to multiple high-performance PPO networks.' },
  ];

  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Frequently Asked Questions" />
        <Accordion items={items} />
      </div>
    </section>
  );
}
