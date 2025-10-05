import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import listings from "../Data/Listings";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const property = listings.find((item) => item.id === parseInt(id));

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-cyan-600 hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.title}</h1>

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded-xl shadow-md mb-6"
      />

      <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>

      <p className="text-2xl font-semibold text-cyan-700 mb-8">
        ₦{property.price}/year
      </p>

      <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl hover:bg-cyan-700 transition"
      onClick={() => navigate("/StudentLogin")}>

        Book Now
      </button>
    </div>
  );
};

export default PropertyDetails;
