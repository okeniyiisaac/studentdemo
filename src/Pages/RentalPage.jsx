import React from "react";
import RentalCard from "../Components/RentalCard";

const RentalPage = () => {
  const listings = [
    {
      id: 1,
      title: "2-Bedroom Apartment, Near Campus",
      image: "https://images.unsplash.com/photo-1665249934445-1de680641f50?q=80&w=1170&auto=format&fit=crop",
      location: "Yaba, Lagos",
      price: "250,000",
      description:
        "A modern 2-bedroom apartment just a short walk from campus. Fully tiled, secure environment, and close to transport.",
    },
    {
      id: 2,
      title: "Studio Room Apartment, City Center",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
      location: "Ikeja, Lagos",
      price: "150,000",
      description:
        "Compact and affordable studio in the city center. Perfect for students or working-class individuals.",
    },
    {
      id: 3,
      title: "3-Bedroom House, Quiet Neighborhood",
      image: "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1074&auto=format&fit=crop",
      location: "Lekki, Lagos",
      price: "400,000",
      description:
        "Spacious and peaceful home with 3 bedrooms, a large kitchen, and a fenced compound. Ideal for families.",
    },
    {
      id: 4,
      title: "1-Bedroom Apartment, Furnished",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
      location: "Surulere, Lagos",
      price: "200,000",
      description:
        "Fully furnished one-bedroom apartment with Wi-Fi, air conditioning, and 24-hour power.",
    },
    {
      id: 5,
      title: "4-Bedroom House, Spacious Yard",
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1170&auto=format&fit=crop",
      location: "Ajah, Lagos",
      price: "500,000",
      description:
        "Beautiful 4-bedroom house with a large yard and modern kitchen. Great for large families.",
    },
    {
      id: 6,
      title: "Self Contained Apartment, Cozy and Affordable",
      image: "https://images.unsplash.com/photo-1587913560680-7f8187bf9634?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Ajah, Lagos",
      price: "500,000",
      description:
        "Beautiful self-contained apartment with modern amenities. Perfect for singles or couples.",
    }
  ];

  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listings.map((item) => (
        <RentalCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default RentalPage;
