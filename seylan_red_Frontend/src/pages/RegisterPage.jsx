// src/pages/RegisterPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="mx-auto w-24" />
          <h1 className="text-xl font-bold mt-2 text-red-700">Seylan RED Registration</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Designation</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your designation"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Branch</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your branch"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Staff Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your staff number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Profile Image</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;