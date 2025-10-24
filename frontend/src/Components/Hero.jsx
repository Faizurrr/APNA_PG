// Pages/Hero.jsx
import React, { useState } from "react";

// Set your live backend URL here
const API_URL = "https://apna-pg-in.onrender.com";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPg, setSelectedPg] = useState(null);

  const handleSearch = async () => {
    if (!search) {
      alert("Please enter a location");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/pgs?location=${encodeURIComponent(search)}&price=${encodeURIComponent(priceRange)}`
      );

      const data = await response.json();
      setResults(data);
      setSelectedPg(null);

      if (data.length === 0) {
        alert("Room not available at this location or in this price range");
        return;
      }

      // Auto-clear results after 30 seconds
      setTimeout(() => {
        setResults([]);
      }, 30000);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data from the server. Please try again later.");
    }
  };

  const handlePgClick = (pg) => {
    if (selectedPg && selectedPg.id === pg.id) {
      setSelectedPg(null);
    } else {
      setSelectedPg(pg);
    }
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="bg-blue-600 p-10 md:p-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Find Your Perfect Home Away From Home
        </h1>
        <p className="text-white opacity-90 mb-8 text-lg md:text-xl">
          Browse verified PGs and hostels directly from owners, with zero brokerage fees.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-full shadow-lg p-2 md:p-3 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="Search by city, locality, or landmark..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-gray-800 px-4 py-2 bg-transparent focus:outline-none placeholder-gray-500"
          />

          {/* Price Range Dropdown */}
          <div className="relative w-full md:w-1/4">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
            >
              <option value="">Price Range</option>
              <option value="5000-10000">₹5,000 - ₹10,000</option>
              <option value="10000-15000">₹10,000 - ₹15,000</option>
              <option value="15000-999999">₹15,000+</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Button */}
          <button
            onClick={handleSearch}
            className="w-full md:w-auto px-6 py-3 rounded-full cursor-pointer bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Find
          </button>
        </div>

        {/* Display Results */}
        <div className="mt-10 max-w-3xl mx-auto text-left text-white">
          {results.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">Available PGs:</h2>
              <ul className="space-y-3">
                {results.map((pg) => (
                  <li
                    key={pg.id}
                    onClick={() => handlePgClick(pg)}
                    className={`bg-white text-gray-800 p-4 cursor-pointer rounded-lg shadow transition ${
                      selectedPg && selectedPg.id === pg.id
                        ? "border-2 border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <h3 className="text-lg font-semibold">{pg.owner_name}</h3>
                    <p>{pg.address}</p>
                    <p className="text-sm text-gray-600">₹{pg.price} / month</p>

                    {/* Show details only for selected PG */}
                    {selectedPg && selectedPg.id === pg.id && (
                      <div className="mt-4 bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
                        <p>
                          <strong>Owner:</strong> {pg.owner_name || "Not listed"}
                        </p>
                        <p>
                          <strong>Contact:</strong> {pg.phone_number || "Not available"}
                        </p>
                        <p>
                          <strong>Email:</strong> {pg.email || "Not available"}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-3">
                          {/* Call Button */}
                          <a
                            href={`tel:${pg.phone_number}`}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            📞 Call Owner
                          </a>

                          {/* Email Button */}
                          <a
                            href={`mailto:${pg.email}?subject=Interested in your PG&body=Hi ${pg.owner_name},%0D%0A%0D%0AI am interested in your PG. Please let me know the details.`}
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
                          >
                            ✉️ Email Owner
                          </a>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mt-4 text-white opacity-80"></p>
          )}
        </div>
      </div>
    </section>
  );
}
