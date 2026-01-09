export default function PrivacyPolicy() {
  return (
    <section className="bg-dark-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Privacy <span className="text-accent-gold">Policy</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Last Updated: January 9, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-8 md:p-12 space-y-8">
          
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
            <p className="text-text-secondary leading-relaxed">
              Apollo Health Plans ("Apollo," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-accent-gold mb-3 mt-6">Personal Information</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Register for an account or enroll in our health plans</li>
              <li>Fill out contact forms or request information</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Participate in surveys or promotions</li>
              <li>Contact our customer support</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              This information may include: name, email address, phone number, mailing address, date of birth, Social Security number, health information, employment information, and payment information.
            </p>

            <h3 className="text-xl font-semibold text-accent-gold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Provide, operate, and maintain our health plan services</li>
              <li>Process enrollments, claims, and payments</li>
              <li>Communicate with you about your health plan and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Detect, prevent, and address fraud or security issues</li>
              <li>Analyze usage patterns and trends</li>
            </ul>
          </div>

          {/* HIPAA Compliance */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">HIPAA Compliance</h2>
            <p className="text-text-secondary leading-relaxed">
              Apollo Health Plans complies with the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations. We maintain appropriate administrative, technical, and physical safeguards to protect your protected health information (PHI). We will not use or disclose your PHI except as permitted or required by law. For more information about how we protect your health information, please request a copy of our Notice of Privacy Practices.
            </p>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Information Sharing and Disclosure</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li><strong className="text-text-primary">Healthcare Providers:</strong> To coordinate your care and process claims</li>
              <li><strong className="text-text-primary">Business Associates:</strong> Third-party service providers who assist us in operating our business (subject to confidentiality agreements)</li>
              <li><strong className="text-text-primary">Employers and Plan Sponsors:</strong> Summary health information and enrollment data as permitted by law</li>
              <li><strong className="text-text-primary">Legal Authorities:</strong> When required by law, court order, or to protect our rights</li>
              <li><strong className="text-text-primary">Insurance Partners:</strong> To provide comprehensive coverage and services</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Data Security</h2>
            <p className="text-text-secondary leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, firewalls, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Your Privacy Rights</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li><strong className="text-text-primary">Access:</strong> Request access to your personal information</li>
              <li><strong className="text-text-primary">Correction:</strong> Request correction of inaccurate information</li>
              <li><strong className="text-text-primary">Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
              <li><strong className="text-text-primary">Opt-Out:</strong> Opt-out of marketing communications</li>
              <li><strong className="text-text-primary">Data Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong className="text-text-primary">Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We use the following types of cookies:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 mt-4">
              <li><strong className="text-text-primary">Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong className="text-text-primary">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong className="text-text-primary">Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Websites</h2>
            <p className="text-text-secondary leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6 space-y-2">
              <p className="text-text-primary font-semibold">Apollo Health Plans</p>
              <p className="text-text-secondary">Privacy Officer</p>
              <a href="/contact" className="inline-block text-accent-gold hover:text-accent-gold-hover transition-colors mt-4">
                Contact Form →
              </a>
            </div>
          </div>

        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-dark-bg hover:text-dark-bg font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-gold/30"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
