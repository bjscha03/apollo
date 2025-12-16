export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-text-secondary text-sm mb-4 sm:mb-0">
            © 2025 Apollo Health. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-text-secondary hover:text-accent-blue transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.43-.665 1.199-1.61 2.919-1.61 2.134 0 3.734 1.39 3.734 4.377v5.596zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.954-1.715 1.188 0 1.915.76 1.915 1.715 0 .953-.727 1.715-1.954 1.715zm1.582 11.597H3.635V9.558h3.284v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
