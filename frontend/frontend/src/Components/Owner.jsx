import React from 'react';
import { Link } from "react-router-dom";

export default function Owner() {
  return (
    <div className="bg-blue-600 flex flex-col items-center justify-center text-center py-16 px-4 md:px-8 lg:px-16">
      <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-4X1 mb-4">
        Are You a PG Owner?
      </h1>
      <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6'>
        List your property for free and get genuine leads directly from tenants.
      </p>
      <Link to="/Ownerpage">
        <button
          type="button"
          className="bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:text-yellow-600 transition-colors cursor-pointer text-sm sm:text-base md:text-lg"
        >
          List your PG Now
        </button>
      </Link>
    </div>
  );
}
