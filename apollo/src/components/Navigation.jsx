export default function Navigation() {
  return (
    <nav className="bg-dark-bg border-b border-dark-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-text-primary hover:text-accent-blue transition-colors">
              Apollo Health
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/how-it-works" className="text-text-secondary hover:text-accent-blue transition-colors">How It Works</a>
              <a href="/employers" className="text-text-secondary hover:text-accent-blue transition-colors">For Employers & Brokers</a>
              <a href="/member-experience" className="text-text-secondary hover:text-accent-blue transition-colors">Member Experience</a>
              <a href="/faq" className="text-text-secondary hover:text-accent-blue transition-colors">FAQ</a>
            </div>
          </div>
          <a href="/contact" className="bg-accent-blue hover:bg-accent-teal text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
