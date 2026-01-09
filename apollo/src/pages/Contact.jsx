import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiryType: '',
    employeeCount: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      inquiryType: '',
      employeeCount: '',
      message: '',
    });
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Get in <span className="text-accent-gold">Touch</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to transform your healthcare experience? We're here to answer your questions and help you get started with Apollo Health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Card */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold/50 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent-gold/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-text-secondary text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold/50 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent-gold/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-lg mb-2">Support Hours</h3>
                  <p className="text-text-secondary text-sm mb-2">Monday - Friday</p>
                  <p className="text-text-secondary text-sm">8:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent-gold/50 transition-all duration-300">
              <h3 className="text-text-primary font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/faq" className="flex items-center text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  View FAQ
                </a>
                <a href="/how-it-works" className="flex items-center text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  How It Works
                </a>
                <a href="/member-experience" className="flex items-center text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm group">
                  <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Member Experience
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-text-primary mb-2">Send Us a Message</h2>
              <p className="text-text-secondary mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-text-primary text-sm font-medium mb-2">
                      First Name <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-text-primary text-sm font-medium mb-2">
                      Last Name <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">
                      Email Address <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-text-primary text-sm font-medium mb-2">
                      Phone Number <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company and Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-text-primary text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-text-primary text-sm font-medium mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                    >
                      <option value="">Select your role</option>
                      <option value="hr">HR Manager</option>
                      <option value="benefits">Benefits Administrator</option>
                      <option value="broker">Insurance Broker</option>
                      <option value="executive">Executive/Owner</option>
                      <option value="employee">Employee/Member</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Inquiry Type and Employee Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-text-primary text-sm font-medium mb-2">
                      Inquiry Type <span className="text-accent-gold">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="employer">Employer/Broker Inquiry</option>
                      <option value="member">Member Support</option>
                      <option value="general">General Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="employeeCount" className="block text-text-primary text-sm font-medium mb-2">
                      Number of Employees
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">
                    Message <span className="text-accent-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-200 resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-accent-gold/90 text-dark-bg font-semibold py-4 rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-accent-gold/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>

                <p className="text-text-secondary text-sm text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
