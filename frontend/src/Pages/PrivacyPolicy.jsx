import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Last updated: October 20, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">APNA PG</span>. We are
            committed to protecting your privacy and personal information. This
            Privacy Policy explains how we collect, use, disclose, and protect
            your data when you use our website and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Why we exist</h2>
          <p className="text-gray-700 leading-relaxed">
            PG Finder was created to help students who move to new cities for
            their studies and struggle to find safe, affordable accommodation.
            Our founder personally faced problems like unreliable listings and
            high brokerage fees — so we built this platform to offer a simpler,
            more trustworthy solution.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information we collect</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>Account information: name, email, phone number.</li>
            <li>Profile & listing details: photos, property address, amenities.</li>
            <li>Usage data: pages visited, search queries, device & browser data.</li>
            <li>Messages: communications between owners and tenants (stored for functionality).</li>
            <li>Payment details: when you use paid services (we do not store full card numbers on our servers).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How we use your information</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>To create and manage your account.</li>
            <li>To list, display, and promote PG listings to potential tenants.</li>
            <li>To enable secure communication between owners and tenants.</li>
            <li>To process payments and prevent fraud.</li>
            <li>To improve the service, analyze usage, and personalize content.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookies & similar technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar tracking technologies to remember your
            preferences, support login sessions, and collect analytics about how
            the site is used. You can control cookie settings through your
            browser, but disabling cookies may limit certain features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Third-party services</h2>
          <p className="text-gray-700 leading-relaxed">
            We may share information with trusted third-party service providers
            who assist in operating the website (e.g., hosting, analytics,
            payment processors). These providers process data only on our
            behalf and under our instructions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable technical and organizational measures to
            protect personal data. However, no system is completely secure —
            please take care when sharing sensitive information online.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain personal data for as long as necessary to provide
            services, comply with legal obligations, resolve disputes, and
            enforce agreements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your rights</h2>
          <p className="text-gray-700 leading-relaxed">
            Depending on your jurisdiction, you may have rights to access,
            correct, delete, or restrict processing of your personal data. To
            exercise these rights, contact us using the details below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Children</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not intended for children under 13. We do not
            knowingly collect personal information from children. If you
            believe we have collected such information, please contact us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Changes to this policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy from time to time. When we do, we will
            revise the "Last updated" date above. Significant changes will be
            communicated via the website or email where appropriate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Contact us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please
            contact us at:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Email: apnapg@gmail.com</li>
            <li>Or visit our <Link to="/Contact" className="underline">Contact page</Link>.</li>
          </ul>
        </section>

        <p className="text-sm text-gray-600">
          <em>Note: This Privacy Policy is provided for informational purposes
          and does not constitute legal advice. Consult a lawyer to ensure
          compliance with laws applicable to your business and users.</em>
        </p>
      </div>
    </div>
  );
}
