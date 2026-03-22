import React from "react";

export default function BuyerHome() {
  return (
    <div className="min-h-screen">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4 bg-white shadow">

        <div className="flex gap-6 font-medium">
          <span className="cursor-pointer hover:text-blue-600">Buy</span>
          <span className="cursor-pointer hover:text-blue-600">Rent</span>
          <span className="cursor-pointer hover:text-blue-600">Sell</span>
          <span className="cursor-pointer hover:text-blue-600">Agent</span>
        </div>

        <div className="text-2xl font-bold text-blue-600">
          RealEstate
        </div>

        <div className="flex gap-6">
          <span className="cursor-pointer">Login</span>
        </div>

      </div>

      {/* HERO SECTION */}
      <div className="relative h-[80vh]">

        {/* BACKGROUND IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="home"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">

          <h1 className="text-5xl font-bold mb-6 text-center">
            Find Your Dream Home 🏡
          </h1>

          {/* SEARCH BAR */}
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex items-center px-4 py-3">

            <input
              type="text"
              placeholder="Enter area, city, or address"
              className="w-full outline-none text-black text-lg"
            />

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Search
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}