import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/Users';  

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // This hook will be used for redirecting the user

  const handleLogin = async () => {
    const userData = { UserName: userName, Password: password };  // Prepare the data to be sent to the backend
    try {
      const result = await loginUser(userData);  // Call the updated loginUser function
      if (result.message === "Login successful!") {  // Check if the login was successful
        localStorage.setItem("userId", result.user.id); // Store the user ID in localStorage
        navigate("/home");  // Redirect to the home page after successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700">
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
