import React from "react";

export default function HowItWorks() {
  return (
    <div className="bg-white mt-4 mx-auto p-6 sm:p-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-12">
        How It Works
      </h1>

      {/* Steps in Responsive Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <i className="fa-solid fa-magnifying-glass text-gray-600 text-5xl mb-4"></i>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">1. Search</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter your desired locality and use filters to find PGs that match
            your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <i className="fa-solid fa-address-book text-gray-600 text-5xl mb-4"></i>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">2. Contact</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Reach out directly to the PG owners and get the details you need.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <i className="fa-solid fa-house text-gray-600 text-5xl mb-4"></i>
          <h2 className="font-bold text-xl sm:text-2xl mb-2">3. Move In</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Finalize your booking and enjoy your perfect stay.
          </p>
        </div>
      </div>
    </div>
  );
}
