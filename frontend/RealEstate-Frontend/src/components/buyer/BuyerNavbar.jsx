import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const UserNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">

        <div className="flex justify-between items-center">

          {/* LEFT MENU */}
          <div className="hidden md:flex gap-6 font-medium text-gray-700">
            <span className="cursor-pointer hover:text-blue-600">Buy</span>
            <span className="cursor-pointer hover:text-blue-600">Rent</span>
            <span className="cursor-pointer hover:text-blue-600">Sell</span>
            <span className="cursor-pointer hover:text-blue-600">Agent</span>
          </div>

          {/* LOGO CENTER */}
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
            RealEstate
          </h1>

          {/* RIGHT MENU */}
          <div className="hidden md:flex gap-6 items-center font-medium">

            <Link to="/user/settings" className="hover:text-blue-600">
              Settings
            </Link>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Logout
            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 font-medium text-gray-700">

            <span>Buy</span>
            <span>Rent</span>
            <span>Sell</span>
            <span>Agent</span>

            <Link to="/user/settings">Settings</Link>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit"
            >
              Logout
            </button>

          </div>
        )}

      </nav>

      {/* PAGE CONTENT */}
      <div className="bg-gray-100 min-h-[calc(100vh-72px)]">
        <Outlet />
      </div>
    </>
  );
};