export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark-card to-dark-bg border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo and Tagline Section */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6">
              <img 
                src="https://res.cloudinary.com/dtrxl120u/image/upload/v1767995109/upscaled-2x-traced-Screenshot_2026-01-09_at_4.44.19_PM_zo8cw8.png" 
                alt="Apollo Health Logo" 
                className="h-20 w-auto"
              />
              <p className="text-text-secondary text-sm leading-relaxed text-center md:text-left max-w-xs">
                Transforming healthcare with transparent, cost-effective solutions that put members first.
              </p>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/showcase/apollo-health-plan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-text-secondary hover:text-accent-gold transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.43-.665 1.199-1.61 2.919-1.61 2.134 0 3.734 1.39 3.734 4.377v5.596zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.954-1.715 1.188 0 1.915.76 1.915 1.715 0 .953-.727 1.715-1.954 1.715zm1.582 11.597H3.635V9.558h3.284v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h3 className="text-text-primary font-semibold text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
              </h3>
              <nav className="flex flex-col space-y-3">
                <a href="/" className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm hover:translate-x-1 inline-block">
                  Home
                </a>
                <a href="/how-it-works" className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm hover:translate-x-1 inline-block">
                  How It Works
                </a>
                <a href="/member-experience" className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm hover:translate-x-1 inline-block">
                  Member Experience
                </a>
                <a href="/faq" className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm hover:translate-x-1 inline-block">
                  FAQ
                </a>
              </nav>
            </div>

            {/* For Employers */}
            <div className="md:col-span-3">
              <h3 className="text-text-primary font-semibold text-lg mb-6 relative inline-block">
                For Employers
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
              </h3>
              <nav className="flex flex-col space-y-3">
                <a href="/employers" className="text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm hover:translate-x-1 inline-block">
                  Employers & Brokers
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <h3 className="text-text-primary font-semibold text-lg mb-6 relative inline-block">
                Get in Touch
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent-gold"></span>
              </h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-text-secondary hover:text-accent-gold transition-colors duration-200 text-sm group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Apollo Health Plans. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-text-secondary hover:text-accent-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-text-secondary hover:text-accent-gold transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
