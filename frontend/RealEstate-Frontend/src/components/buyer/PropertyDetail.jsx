import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function PropertyDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/prop/property/${id}`
      );
      setProperty(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!property) {
    return <h2 className="p-10 text-center">Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/buyer")}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        ⬅ Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        {/* 🔥 MAIN IMAGE (HD FIX) */}
        <img
          src={property.propertyImages?.[0] || "https://via.placeholder.com/800"}
          alt="property"
          className="w-full max-h-[500px] object-contain rounded-xl mb-6"
        />

        {/* 🔥 TITLE */}
        <h1 className="text-3xl font-bold mb-2">
          {property.propertyTitle}
        </h1>

        {/* 🔥 TYPE */}
        <p className="text-gray-500 mb-2">
          {property.propertyType} • {property.listingType}
        </p>

        {/* 🔥 PRICE */}
        <div className="text-2xl text-blue-600 font-bold mb-4">
          ₹ {property.price?.toLocaleString()}
        </div>

        {/* 🔥 BASIC DETAILS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-gray-700">

          {property.area && <div>📐 Area: {property.area} sqft</div>}
          {property.bedrooms !== undefined && <div>🛏 Bedrooms: {property.bedrooms}</div>}
          {property.bathrooms !== undefined && <div>🛁 Bathrooms: {property.bathrooms}</div>}
          {property.furnishing && <div>🪑 Furnishing: {property.furnishing}</div>}
          <div>🚗 Parking: {property.parking ? "Yes" : "No"}</div>

        </div>

        {/* 🔥 DESCRIPTION */}
        {property.propertyDescription && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">
              {property.propertyDescription}
            </p>
          </div>
        )}

        {/* 🔥 AMENITIES */}
        {property.amenities?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Amenities</h2>

            <div className="flex flex-wrap gap-2">
              {property.amenities.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 🔥 GALLERY */}
        {property.propertyImages?.length > 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.propertyImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="gallery"
                  className="h-32 w-full object-cover rounded-lg hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}