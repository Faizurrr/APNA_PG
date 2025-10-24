import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
        About Us
      </h1>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 text-gray-700 text-base sm:text-lg md:text-xl">
          <p className="mb-4">
            Welcome to <span className="font-semibold text-indigo-600">APNA PG</span>, your trusted platform to list and find the perfect Paying Guest accommodations. 
          </p>
          <p className="mb-4">
         We aim to help students who move to new cities for their studies
          but struggle to find suitable accommodation. Many face
           challenges such as high brokerage fees or unreliable 
           listings — something our website's founder personally 
           experienced. That's why APNA PG was created — to provide a simple, 
           trustworthy, and affordable solution for students seeking comfortable PG rooms without the hassle.
          </p>
          <p>
            Our mission is to simplify the PG search experience while helping owners reach the right tenants. Join us and be part of a hassle-free renting experience.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="PG Finder team or accommodation view"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call-to-action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Ready to List Your PG?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of PG owners and tenants today!
        </p>
        <Link
          to="/Ownerpage"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-500 transition-colors"
        >
          List Your PG Now
        </Link>
      </div>
    </div>
  )
}
