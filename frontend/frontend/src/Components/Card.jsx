import React from 'react';

const Card = () => {
  const pgData = [ 
    { // 1
      location: "Near Qadri Masjid Batla House (New Delhi)",
      price: "₹13,500",
      ownername: "Faiz Khan",
      availabe_from: "02-11-2025",
      rating: 4.8,
      imageUrl: "/photos_of_room/room1.jpg",
      amenities: ["AC", "Wi-Fi", "Food"],
       phone: "+918052914779",
       email: "faizkhan3608@gmail.com",
    },
    {   //2
      location: "Near 40 Futta shaheen bagh (New Delhi)",
      ownername: "Faizan Ansari",
      price: "₹12,000",
      availabe_from: "30-10-2025",
      rating: 4.6,
      amenities: ["Wi-Fi", "Food"],
      imageUrl: "/photos_of_room/room2.jpg",
       email: "test123@gmail.com",
      phone: "+911234567890",
    },
    {     // 3
      location: "Nafis Road gali no-13  Batla House (New Delhi)",
      ownername: "Badrudujja",
      price: "₹10,500",
      rating: 4.9,
      availabe_from: "25-10-2025",
      amenities: ["AC", "Wi-Fi", "Food", "Laundry"],
      phone: "+911234567890",
      email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room3.jpg"
    },
    {  // 4
      location: " Road A-23 Patel Nagar (New Delhi)",
      ownername: "Pawan Mishra",
      price: "₹9,500",
      availabe_from: "30-10-2025",
      rating: 4.5,
      amenities: ["Wi-Fi", "BED"],
      phone: "+911234567890",
       email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room4.jpg"
    },
    {  // 5
      location: "Near Irani Tea Shop Okhla Head (New Delhi)",
      ownername: "Mohd Mustafa",
      price: "₹9,800",
      rating: 4.9,
      availabe_from: "30-10-2025",
      amenities: ["AC" , "BED"],
      phone: "+911234567890",
            email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room5.jpg"
    },
     {    //6
      location: "Lane No 9  Zakir nagar - 110025 (New Delhi)",
      ownername: "Ahmad Khan",
      price: "₹7,500",
      rating: 4.2,
      amenities: ["Wi-Fi", "AC"],
      availabe_from: "30-10-2025",
      phone: "+911234567890",
        email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room6.jpg"
    },
    {    // 7
      location: "Thokar no-8  Shaheen bagh (New Delhi)",
      ownername: "Abdurrahman",
      price: "₹10,500",
      availabe_from: "30-10-2025",
      rating: 5.0,
      amenities: [ "Wi-Fi", "Food", "Gym"],
      phone: "+911234567890",
       email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room7.jpg"
    },
    {   // 8    
      location: " Near City Mall Road No-23 (Kanpur)",
      ownername: "Rahul Sharma",
      price: "₹15,900",
      availabe_from: "30-10-2025",
      rating: 4.6,
      amenities: ["Wi-Fi", "Food" , "Gym"],
      phone: "+911234567890",
         email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room8.jpg"
    },
    {    // 9
      location: "Near Ambedkar Park, Amina baad (Lucknow)",
      ownername: "Hammad ali",
      price: "₹13,500",
      rating: 4.6,
      availabe_from: "30-10-2025",
      amenities: ["Wi-Fi", "Gym"],
      phone: "+911234567890",
      email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room9.jpg"
    },
    {   // 10   
      location: "Sector-23 Lane-9 Noida (Uttar Pradesh)",
      availabe_from: "30-10-2025",
      ownername: "Rachit Gupta",
      price: "₹25,200",
      rating: 4.8,
      amenities: ["AC", "Wi-Fi", "Food"],
      phone: "+911234567890",
      email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room10.jpg"
    },
    {      // 11
      location: "New Friends Clony NFC (New Delhi)",
      ownername: "Piyush Pandey",
      price: "₹17,500",
      availabe_from: "30-10-2025",
      rating: 4.9,
      amenities: ["AC", "Wi-Fi", "Food", "Laundry"],
      phone: "+911234567890",
      email: "test123@gmail.com",
      imageUrl: "/photos_of_room/room11.jpg"
    },
    {     
      location: "Thokar No-7 shaheen bagh (New Delhi)",
      ownername: "Hasan ali",
      price: "₹12,500",
      availabe_from: "30-10-2025",
      phone: "+911234567890",
          email: "test123@gmail.com",
      rating: 4.6,
      amenities: ["Wi-Fi", "Food"],
      imageUrl: "/photos_of_room/room12.jpg"
    },
    
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'AC': return <i className="fas fa-snowflake"></i>;
      case 'FAN': return <i className="fas fa-fan"></i>;
       case 'BED' : return <i className='fas fa-bed'></i>;
      case 'Wi-Fi': return <i className="fas fa-wifi"></i>;
      case 'Food': return <i className="fas fa-utensils"></i>;
      case 'Laundry': return <i className="fas fa-tshirt"></i>;
      case 'Gym': return <i className="fas fa-dumbbell"></i>;
      default: return null;
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    if (halfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    return stars;
  };

  const PGCard = ({ location, price, rating, amenities, imageUrl , ownername , availabe_from ,phone , email }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48">
      
      <img
  className="absolute inset-0 w-full h-full object-cover"
  src={imageUrl}
  alt="Room"
/>

      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h1 className="text-2xl font-semibold ml-1 text-gray-900 ">
          {`Owner Name: ${ownername}`}
        </h1>
        <div className="flex justify-between items-start mb-2">
          <p className="text-lg font-medium text-gray-700 ">
            {location}
          </p>
        </div>

        <p className="text-2xl font-bold text-gray-800 mb-2">
          {price}
          <span className="text-base font-normal text-gray-500">/ Month</span>
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-2">{renderStars(rating)}</span>
          <span>{rating.toFixed(1)} Rating</span>
        </div>

        <ul className="space-y-2 mb-4">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center text-gray-600 gap-2">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-medium text-gray-900 ">
          {`Available from: ${availabe_from}`}
        </h4>
        <div className="mt-auto">
     
        <div className="mt-auto flex gap-4">
  {/* Call Button */}
 <a
  href={`tel:${phone}`}
  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
>
  <span className="flex items-center justify-center">
    <i className="fas fa-phone-alt text-xs"></i> {/* smaller icon */}
  </span>
  <span>Call Owner</span>
</a>

  {/* Email Button */}
  <a
    href={`mailto:${email}?subject=Interested in your PG&body=Hi ${ownername},%0D%0A%0D%0AI am interested in your PG. Please let me know the details.`}
   className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition-colors"
  >
    <i className="fas fa-envelope text-xs"></i> {/* Email icon */}
    Email Owner
  </a>
</div>

        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 font-['Inter'] bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pgData.map((pg, index) => (
            <PGCard key={index} {...pg} />
          ))}
          <h1 className='font font-extrabold text-4xl mb-2'>Feature PGs</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
