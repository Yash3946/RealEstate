import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BuyerHome() {

  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = async () => {
    try {
      const res = await axios.get("http://localhost:3000/prop/all?size=8");
      setProperties(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const scrollRight = () => {
    document.getElementById("slider").scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };

  const scrollLeft = () => {
    document.getElementById("slider").scrollBy({
      left: -300,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl w-[500px] flex">
            <input
              placeholder="Enter area, city, or address"
              className="flex-1 outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* PROPERTIES */}
      <div className="p-10">

        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Properties</h2>

          {/* 🔥 SEE ALL BUTTON */}
          <button
            onClick={() => navigate("/properties")}
            className="text-blue-600 font-semibold"
          >
            See All →
          </button>
        </div>

        <div className="relative">

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 z-10 bg-white p-2 shadow rounded-full"
          >
            ⬅️
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 z-10 bg-white p-2 shadow rounded-full"
          >
            ➡️
          </button>

          <div id="slider" className="flex gap-6 overflow-x-auto">

            {properties.map((prop) => (
              <div key={prop._id} className="min-w-[300px] bg-white rounded-xl shadow">

                <img
                  src={prop.propertyImages?.[0]}
                  className="w-full h-48 object-cover rounded-t-xl"
                />

                <div className="p-4">
                  <h3 className="font-semibold">{prop.propertyTitle}</h3>

                  <p className="text-gray-500 text-sm">{prop.propertyType}</p>

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

      </div>

    </div>
  );
}