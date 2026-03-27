import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllProperties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/prop/all");
      setProperties(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">All Properties</h1>

      <div className="grid grid-cols-4 gap-6">

        {properties.map((prop) => (
          <div key={prop._id} className="bg-white rounded-xl shadow">

            <img
              src={prop.propertyImages?.[0]}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3>{prop.propertyTitle}</h3>

              <p className="text-gray-500">{prop.propertyType}</p>

              <div className="text-blue-600 font-bold">
                ₹ {prop.price.toLocaleString()}
              </div>

              <div className="text-sm text-gray-500">
                {prop.area} sqft • {prop.bedrooms} BHK
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}