import React from 'react';

export default function TermsOfService() {
  return (
    <section className="min-h-screen bg-dark-bg py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Terms of <span className="text-accent-gold">Service</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Last Updated: January 9, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          {/* Agreement to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Agreement to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              By accessing or using Apollo Health Plans' services, website, or mobile applications, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Apollo Health Plans.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Eligibility</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>Reside in a state where Apollo Health Plans is licensed to operate</li>
              <li>Provide accurate and complete information during enrollment</li>
              <li>Comply with all applicable federal, state, and local laws</li>
            </ul>
          </div>

          {/* Services Description */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Services Description</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Apollo Health Plans provides health insurance coverage and related services, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Medical, dental, and vision insurance coverage</li>
              <li>Access to our network of healthcare providers</li>
              <li>Prescription drug coverage</li>
              <li>Preventive care services</li>
              <li>Member portal and mobile app access</li>
              <li>Customer support and care coordination</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Specific coverage details, limitations, and exclusions are outlined in your plan documents and Summary of Benefits and Coverage (SBC).
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">User Responsibilities</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              As a member, you agree to:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Provide accurate and truthful information during enrollment and throughout your membership</li>
              <li>Pay all premiums, deductibles, copayments, and coinsurance on time</li>
              <li>Use services only for lawful purposes and in accordance with plan guidelines</li>
              <li>Notify us promptly of any changes to your contact information or eligibility status</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not share your member ID or benefits with unauthorized individuals</li>
              <li>Report any suspected fraud or misuse of benefits</li>
            </ul>
          </div>

          {/* Enrollment and Coverage */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Enrollment and Coverage</h2>
            <p className="text-text-secondary leading-relaxed">
              Coverage begins on the effective date specified in your enrollment confirmation. You may enroll during open enrollment periods or qualify for special enrollment based on qualifying life events. We reserve the right to verify your eligibility and may request additional documentation. Coverage may be subject to waiting periods for certain services as outlined in your plan documents.
            </p>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Payment Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You are responsible for paying:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li><strong>Premiums:</strong> Monthly payments due by the first of each month</li>
              <li><strong>Deductibles:</strong> Annual amounts you must pay before coverage begins for certain services</li>
              <li><strong>Copayments:</strong> Fixed amounts due at the time of service</li>
              <li><strong>Coinsurance:</strong> Your percentage share of costs for covered services</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Failure to pay premiums may result in coverage termination. We accept various payment methods including credit cards, debit cards, and electronic bank transfers.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed">
              All content on our website and mobile applications, including text, graphics, logos, images, and software, is the property of Apollo Health Plans or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>
          </div>

          {/* Privacy and Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Privacy and Data Protection</h2>
            <p className="text-text-secondary leading-relaxed">
              Your privacy is important to us. Our collection, use, and disclosure of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with HIPAA and other applicable privacy laws to protect your health information.
            </p>
          </div>

          {/* Disclaimers */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Disclaimers and Limitations</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties regarding accuracy, reliability, or completeness of information</li>
              <li>Warranties that services will be uninterrupted or error-free</li>
              <li>Warranties regarding the quality of healthcare services provided by network providers</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              We are not responsible for the acts or omissions of healthcare providers, pharmacies, or other third parties in our network.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed">
              To the maximum extent permitted by law, Apollo Health Plans shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or related to your use of our services. Our total liability shall not exceed the amount of premiums you paid in the twelve months preceding the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Indemnification</h2>
            <p className="text-text-secondary leading-relaxed">
              You agree to indemnify, defend, and hold harmless Apollo Health Plans and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to your violation of these Terms, your use of our services, or your violation of any rights of another party.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Dispute Resolution and Arbitration</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Any dispute arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except as follows:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>You may assert claims in small claims court if they qualify</li>
              <li>Either party may seek injunctive relief in court for intellectual property violations</li>
              <li>Appeals and grievances related to coverage decisions follow the procedures in your plan documents</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              You waive your right to participate in class action lawsuits or class-wide arbitration.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Termination</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
              <li>Violation of these Terms</li>
              <li>Non-payment of premiums or other fees</li>
              <li>Fraudulent or abusive use of services</li>
              <li>Loss of eligibility for coverage</li>
              <li>At your request or upon termination of employment (for employer-sponsored plans)</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Upon termination, your right to use our services will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership, warranty disclaimers, and limitations of liability.
            </p>
          </div>

          {/* Changes to Terms */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of our services.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the federal or state courts located in Delaware.
            </p>
          </div>

          {/* Severability */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Severability</h2>
            <p className="text-text-secondary leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6 space-y-2">
              <p className="text-text-primary font-semibold">Apollo Health Plans</p>
              <p className="text-text-secondary">Legal Department</p>
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
