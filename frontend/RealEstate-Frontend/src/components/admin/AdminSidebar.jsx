import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const AdminSidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <div className={`bg-gray-900 text-white p-5 transition-all duration-300 
        ${isOpen ? "w-64" : "w-16"}`}>

        {/* TOGGLE */}
        <button
          className="mb-6 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className="space-y-4 font-medium">

          <li>
            <Link to="/admin/allusers" className="block hover:text-blue-400">
              {isOpen ? "All Users" : "👥"}
            </Link>
          </li>

          <li>
            <Link to="/admin/allusers" className="block hover:text-blue-400">
              {isOpen ? "Buyer" : "🧑"}
            </Link>
          </li>

          <li>
            <Link to="/admin/allusers" className="block hover:text-blue-400">
              {isOpen ? "Settings" : "⚙️"}
            </Link>
          </li>

          <li>
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              {isOpen ? "Logout" : "🚪"}
            </button>
          </li>

        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
};