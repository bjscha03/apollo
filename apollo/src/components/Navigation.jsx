export default function Navigation() {
  return (
    <nav className="bg-dark-bg border-b border-dark-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="https://res.cloudinary.com/dtrxl120u/image/upload/v1765923359/Apollo_Logo_Full_Gold_on_Black_wqe6oq.webp" 
                alt="Apollo Health Logo" 
                className="h-24 w-auto"
              />
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/how-it-works" className="text-text-secondary hover:text-accent-gold transition-colors">How It Works</a>
              <a href="/employers" className="text-text-secondary hover:text-accent-gold transition-colors">For Employers & Brokers</a>
              <a href="/member-experience" className="text-text-secondary hover:text-accent-gold transition-colors">Member Experience</a>
              <a href="/faq" className="text-text-secondary hover:text-accent-gold transition-colors">FAQ</a>
            </div>
          </div>
          <a href="/contact" className="bg-accent-gold hover:bg-accent-gold-hover text-dark-bg font-semibold py-2 px-6 rounded-lg transition-all duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
