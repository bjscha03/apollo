import { useState } from 'react';
import Accordion from '../components/Accordion';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'employers', name: 'For Employers' },
    { id: 'members', name: 'For Members' },
    { id: 'coverage', name: 'Coverage & Benefits' }
  ];

  const faqData = [
    { 
      category: 'general',
      title: 'What is Apollo Health?', 
      content: 'Apollo Health is a modern health plan that combines Direct Primary Care, transparent pharmacy benefits, and exclusive provider access under a captive insurance model. We deliver high-quality healthcare with $0 out-of-pocket costs for primary care while giving employers and members greater control and transparency.' 
    },
    { 
      category: 'general',
      title: 'What is a level-funded health plan?', 
      content: 'Level-funded plans combine the cost predictability of fully insured plans with the cost-control and refund potential of self-funded arrangements. You pay a fixed monthly amount, and if claims come in lower than expected, you may receive a surplus refund at year-end.' 
    },
    { 
      category: 'employers',
      title: 'Who is Apollo Health best suited for?', 
      content: 'Apollo Health is designed for small to mid-sized employers (10–199 employees) seeking high-quality benefits without traditional insurance markup or renewal volatility. We\'re perfect for forward-thinking companies that want to offer exceptional benefits while controlling costs.' 
    },
    { 
      category: 'employers',
      title: 'What happens if claims come in under budget?', 
      content: 'Employers may receive a surplus refund as part of Apollo\'s cost-sharing model. This is one of the key advantages of our level-funded approach — when your team stays healthy, you benefit financially through 100% surplus returned to you.' 
    },
    { 
      category: 'employers',
      title: 'How many employees do I need to qualify?', 
      content: 'Unlike traditional captive health plans designed for massive corporations, Apollo was built to serve small and midsize groups. Apollo is designed for groups of 10 to 199 employees.' 
    },
    { 
      category: 'employers',
      title: 'How does Apollo help with renewal volatility?', 
      content: 'Apollo\'s data-driven captive structure delivers consistent, transparent renewals instead of arbitrary rate hikes. Our risk-sharing model smooths out renewals, protecting you from the shock of sudden premium increases.' 
    },
    { 
      category: 'coverage',
      title: 'Is Apollo Health ACA-compliant?', 
      content: 'Yes. Apollo plans meet ACA guidelines and can be tailored to employer compliance requirements. We ensure full compliance while delivering superior benefits and cost savings.' 
    },
    { 
      category: 'members',
      title: 'Can employees keep their current doctors?', 
      content: 'Most likely. Apollo offers access to multiple high-performance PPO networks nationwide, giving members a wide choice of quality providers. In most cases, your current doctors will be in-network.' 
    },
    { 
      category: 'members',
      title: 'What are the copays for primary care?', 
      content: 'Apollo members enjoy primary care and urgent care visits at no cost. This includes unlimited visits with no out-of-pocket costs, making it easy and affordable to get the care you need.' 
    },
    { 
      category: 'members',
      title: 'Is telehealth included?', 
      content: 'Yes! Apollo members have 24/7 access to board-certified doctors through telehealth at no additional cost. Get virtual care, prescription refills, and medical guidance anytime, day or night.' 
    },
    { 
      category: 'coverage',
      title: 'How does prescription coverage work?', 
      content: 'Apollo offers transparent pharmacy pricing with full Rx rebate pass-through — clients keep 100% of pharmacy rebates. We provide formulary support and real-time tools to help you find lower-cost alternatives. Many generic medications are available at $0 cost.' 
    },
    { 
      category: 'coverage',
      title: 'What about specialist care and surgeries?', 
      content: 'Apollo provides access to specialists through our high-performance PPO networks. We also offer cash-based pricing for surgeries with upfront bundled pricing, so there are no surprise bills. You\'ll know the cost before any procedure.' 
    },
    { 
      category: 'members',
      title: 'How do I get support with claims or billing?', 
      content: 'Apollo provides live concierge support with real people — not bots. Our human support team is ready to help you schedule care, understand your benefits, resolve billing questions, and coordinate care. No automated phone trees or endless hold times.' 
    },
    { 
      category: 'employers',
      title: 'How is Apollo different from traditional insurance?', 
      content: 'Apollo eliminates the traditional insurance markup and hidden fees. We provide full transparency into costs and claims, align incentives between all parties, and return 100% of surplus to employers. Plus, our members get $0 copays for primary care and access to concierge support.' 
    }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-dark-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Frequently Asked <span className="text-accent-gold">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Find answers to common questions about Apollo Health plans, coverage, and benefits
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-dark-card border-y border-accent-gold/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-accent-gold text-dark-bg shadow-lg shadow-accent-gold/30'
                    : 'bg-dark-bg text-text-secondary border border-dark-border hover:border-accent-gold hover:text-accent-gold'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Accordion items={filteredFAQs} />
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-bg to-dark-card border border-accent-gold/20 rounded-2xl p-8 md:p-12">
            <svg className="w-16 h-16 text-accent-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Still Have <span className="text-accent-gold">Questions?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg hover:text-dark-bg font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Learn More About <span className="text-accent-gold">Apollo Health</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="/how-it-works"
              className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10 group"
            >
              <svg className="w-12 h-12 text-accent-gold mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                How It Works
              </h3>
              <p className="text-text-secondary">
                Discover how Apollo's innovative approach delivers better healthcare at lower costs
              </p>
            </a>

            <a 
              href="/employers"
              className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10 group"
            >
              <svg className="w-12 h-12 text-accent-gold mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                For Employers
              </h3>
              <p className="text-text-secondary">
                Learn why employers and brokers choose Apollo for their health benefits
              </p>
            </a>

            <a 
              href="/member-experience"
              className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:shadow-accent-gold/10 group"
            >
              <svg className="w-12 h-12 text-accent-gold mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                Member Experience
              </h3>
              <p className="text-text-secondary">
                See what it's like to be an Apollo Health member with $0 copays and concierge support
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
