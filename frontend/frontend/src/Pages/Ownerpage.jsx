import React, { useState } from "react";

export default function OwnerPage() {
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    amenities: "",
    address: "",
    city: "",
    state: "",
    roomType: "",
    rent: "",
    deposit: "",
    availableFrom: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [message, setMessage] = useState("");

  // Handle input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      owner_name: formData.ownerName,
      phone_number: formData.phone,
      email_address: formData.email,
      amenities: formData.amenities,
      full_address: formData.address,
      city: formData.city,
      state: formData.state,
      room_type: formData.roomType,
      monthly_rent: formData.rent,
      security_deposit: formData.deposit,
      available_from: formData.availableFrom,
      image_urls: formData.images.map((file) => file.name),
    };

    try {
      const res = await fetch("http://127.0.0.1:5000/ownerdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ PG listed successfully!");
        setFormData({
          ownerName: "",
          phone: "",
          email: "",
          amenities: "",
          address: "",
          city: "",
          state: "",
          roomType: "",
          rent: "",
          deposit: "",
          availableFrom: "",
          images: [],
        });
        setImagePreviews([]);
      } else {
        setMessage("❌ Failed: " + data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6">PG Listing Form</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="amenities"
            placeholder="Amenities(like AC , Fan , Wifi , Food etc)"
            value={formData.amenities}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="roomType"
            placeholder="Room Type"
            value={formData.roomType}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="rent"
            placeholder="Monthly Rent"
            value={formData.rent}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="deposit"
            placeholder="Security Deposit"
            value={formData.deposit}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div>
        <label className="block font-medium mb-2">Upload Images:</label>
  <input
    type="file"
    multiple
    onChange={handleImageChange}
    className="border p-2 rounded w-full md:w-1/2"
  />
  <div className="flex flex-wrap gap-3 mt-3">
    {imagePreviews.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt="preview"
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-md border"
      />
    ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2  cursor-pointer rounded hover:bg-blue-700"
        >
          Submit
        </button>
         {message && <p className="mt-4 text-lg">{message}</p>}
      </form>

     
    </div>
  );
}
