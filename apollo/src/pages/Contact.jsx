import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', interest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: '' });
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <SectionHeader title="Contact Us" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-blue transition-colors duration-200" />
            <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-blue transition-colors duration-200" />
          </div>
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-blue transition-colors duration-200" />
          <input type="tel" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-blue transition-colors duration-200" />
          <input type="text" name="interest" placeholder="Apollo Interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-blue transition-colors duration-200" />
          <button type="submit" className="w-full bg-accent-blue hover:bg-accent-teal text-white font-semibold py-3 rounded-lg transition-all duration-200 text-lg">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
