import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/Users';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const userData = { UserName: userName, Password: password };
    try {
      const result = await loginUser(userData);
      if (result.message === "Login successful!") {
        localStorage.setItem("userId", result.user.id);

        // Show success toast
        toast.success("Successfully Logged In!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });

        // Redirect after a short delay
        setTimeout(() => navigate("/home"), 3000);
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials, please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
      <ToastContainer />
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="text-center mb-4">
          <img src="/logo.png" alt="Logo" className="mx-auto w-24" />
          <h1 className="text-xl font-bold mt-2 text-red-700">Seylan RED Login</h1>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-red-700" htmlFor="username">
              User Name
            </label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-red-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-red-700">
          If you don't have an account please{' '}
          <button
            className="text-red-500 underline"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
