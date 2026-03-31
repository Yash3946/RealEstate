import React, { useEffect, useState } from "react";
import axios from "axios";

const AllPropertiesAdmin = () => {

  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    try {
      const res = await axios.get("/prop/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProperties(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProperty = async (id) => {
    try {
      await axios.delete(`/prop/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getProperties();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">🏠 All Properties</h1>

      <div className="grid grid-cols-3 gap-5">

        {properties.map((p) => {

          // 🔥 IMAGE FIX
          const image =
            p.propertyImages?.[0] ||
            p.propertyPhoto ||
            "https://via.placeholder.com/300x200";

          return (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={image}
                alt="property"
                className="h-40 w-full object-cover"
              />

              {/* DETAILS */}
              <div className="p-3">

                <h3 className="font-bold text-lg">
                  {p.propertyTitle}
                </h3>

                <p className="text-gray-600 text-sm">
                  {p.propertyType} • {p.listingType}
                </p>

                <p className="text-gray-500 text-sm">
                  🛏 {p.bedrooms} | 🛁 {p.bathrooms} | 📐 {p.area} sqft
                </p>

                <p className="text-green-600 font-semibold mt-1">
                  ₹ {p.price}
                </p>

                {/* STATUS */}
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                  {p.status}
                </span>

                {/* DELETE */}
                <button
                  onClick={() => deleteProperty(p._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 mt-3 rounded w-full"
                >
                  Delete
                </button>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AllPropertiesAdmin;