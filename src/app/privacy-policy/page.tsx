import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-[#5e61fd] mt-10 leading-tight">
        Privacy Policy of Stratix Labs
      </h1>

      <div className="min-h-screen bg-background text-foreground mt-10 px-6 md:px-12">
        <div className="bg-card backdrop-blur-xl bg-opacity-30 rounded-lg shadow-lg p-8 border border-border font-sans">

          <p className="text-lg md:text-xl text-center mb-8 text-muted-foreground leading-relaxed">
            At Stratix Labs, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect your privacy.
          </p>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">1. Information We Collect</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We collect information that you provide to us when you use our services, register an account, or make purchases. This may include:
            </p>
            <ul className="list-disc pl-8 text-base md:text-lg text-muted-foreground space-y-3">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, billing address, payment information.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our website, including pages viewed, time spent on the site, and actions taken.
              </li>
            </ul>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">2. How We Use Your Information</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-8 text-base md:text-lg text-muted-foreground space-y-3">
              <li>To process transactions and provide services.</li>
              <li>To improve our website and offer a personalized user experience.</li>
              <li>To send updates, promotions, or other marketing materials.</li>
              <li>To respond to your inquiries or provide customer support.</li>
            </ul>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">3. Data Security</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We take appropriate security measures to protect your personal data from unauthorized access, alteration, or destruction. These include encryption, secure servers, and regular audits.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">4. Cookies and Tracking Technologies</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us remember your preferences and improve site functionality.
            </p>
            <ul className="list-disc pl-8 text-base md:text-lg text-muted-foreground space-y-3">
              <li><strong>Necessary Cookies:</strong> Required for website functionality.</li>
              <li><strong>Performance Cookies:</strong> Used to analyze how visitors use the site.</li>
              <li><strong>Advertising Cookies:</strong> Help us deliver targeted ads.</li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              You can control cookie preferences in your browser settings.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">5. Sharing Your Information</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We do not sell, rent, or trade your personal information. However, we may share it with trusted partners who assist in our operations or service delivery, subject to confidentiality agreements.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">6. Your Rights</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              You have the right to:
            </p>
            <ul className="list-disc pl-8 text-base md:text-lg text-muted-foreground space-y-3">
              <li>Access the information we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:contact@stratixlabs.com" className="text-yellow-600  hover:text-accent-foreground">
                contact@stratixlabs.com
              </a>.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">7. Changes to This Privacy Policy</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the top will be updated.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">8. Contact Us</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              If you have any questions about this Privacy Policy or your data, please contact us at:
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              <strong>Stratix Labs</strong>
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Email: <a href="mailto:contact@stratixlabs.com" className="text-yellow-600 hover:text-accent-foreground">contact@stratixlabs.com</a>
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Phone: <strong>+123 456 7890</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;