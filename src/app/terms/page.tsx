import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen  text-gray-200 px-6 sm:px-12 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-green-400">
          Terms and Conditions
        </h1>

        <p>
          Welcome to our Chat Application. By using our services, you agree to
          comply with the following terms and conditions. Please read them
          carefully.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our chat application, you agree to be bound by
            these terms. If you do not agree to these terms, you may not use the
            application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account. You
            agree not to use the chat application for unlawful or harmful
            purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Prohibited Activities</h2>
          <p>The following activities are prohibited:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uploading or sharing harmful or illegal content.</li>
            <li>Impersonating another person or entity.</li>
            <li>Engaging in spam or phishing activities.</li>
            <li>Attempting to hack or disrupt the application.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Privacy</h2>
          <p>
            We respect your privacy. Please review our Privacy Policy to
            understand how we collect, use, and safeguard your information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the chat
            application at our discretion, without notice, for any violation of
            these terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages or losses arising from your
            use of the chat application. Use the application at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the
            application indicates your acceptance of any changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about these terms, please
            contact us at support@yourapp.com.
          </p>
        </section>

        <div className="mt-8">
          <p className="text-sm text-gray-400">Last updated: January 3, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
