// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className="bg-red-600 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/logo3.png" alt="Seylan Logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Seylan RED</span>
      </div>
      <ul className="flex space-x-4">
      <li>
          <button onClick={() => navigate("/home")} className="hover:underline">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/about")} className="hover:underline">
            About
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/services")} className="hover:underline">
            Services
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")} className="hover:underline">
            Contact
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/profile")} className="hover:underline">
            Profile
          </button>
        </li>
        <li>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
