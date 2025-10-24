import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; 2025 PG Finder. All rights reserved.</p>

        <div className="mt-4 flex justify-center space-x-6">
          <Link to ="/PrivacyPolicy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to ="/TermsAndServices" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/Aboutpage" className="hover:underline"> 
            About Us
          </Link>
        </div>
      </div>
    </div>
  )
}
