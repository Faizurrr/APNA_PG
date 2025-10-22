import React from "react";

export default function TermsAndServices() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-10">
        Terms & Services
      </h1>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed">
        <p>
          Welcome to <span className="font-semibold text-indigo-600">APNA PG</span>. 
          By accessing or using our platform, you agree to comply with and be bound by 
          the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          1. Acceptance of Terms
        </h2>
        <p>
          By using our website and services, you acknowledge that you have read, understood, 
          and agree to be bound by these Terms of Service. If you do not agree, please do not 
          use our platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          2. User Responsibilities
        </h2>
        <p>
          Users are responsible for maintaining the accuracy of the information they provide. 
          You must not post misleading, false, or offensive content. APNA PG reserves the 
          right to remove any listings or suspend accounts that violate our terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          3. Property Listings
        </h2>
        <p>
          PG owners are solely responsible for the authenticity of their listings. 
          Tenants should verify details before making any payments or commitments. 
          APNA PG acts as a platform to connect owners and tenants, not as a broker.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          4. Payments & Fees
        </h2>
        <p>
          Currently, listing your PG is free. In the future, PG Finder may introduce 
          premium features or listing fees, which will be communicated to users in advance.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          5. Limitation of Liability
        </h2>
        <p>
          APNA PG is not responsible for any disputes, damages, or losses that may occur 
          between PG owners and tenants. Users are encouraged to perform due diligence before 
          entering into any agreements.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          6. Privacy Policy
        </h2>
        <p>
          Your privacy is important to us. We collect and use user data only as described in 
          our Privacy Policy. By using our platform, you consent to our data practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">
          7. Updates to Terms
        </h2>
        <p>
          We may update these Terms & Services from time to time. Any changes will be posted 
          here, and continued use of the platform will indicate your acceptance of those changes.
        </p>

        <p className="mt-8 text-gray-600">
          If you have any questions or concerns regarding these terms, please contact us at{" "}
          <a
            href="mailto:support@pgfinder.com"
            className="text-indigo-600 underline hover:text-indigo-500"
          >
            support@apnapg.com
          </a>.
        </p>

        <p className="text-sm text-gray-500 text-center mt-8">
          © {new Date().getFullYear()} APNA PG. All rights reserved.
        </p>
      </div>
    </div>
  );
}
