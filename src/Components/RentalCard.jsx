import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RentalCard = ({ id, title, image, location, price }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <FaLocationDot className="mr-2 text-cyan-600" /> {location}
        </div>
        <p className="text-cyan-700 font-bold text-lg mb-3">₦{price}/year</p>

        <button
          onClick={() => navigate(`/property/${id}`)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RentalCard;
