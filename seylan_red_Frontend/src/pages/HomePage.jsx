// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section id="home" className="text-center py-20 bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">Welcome to Seylan RED</h1>
        <p className="text-lg mb-6">Your Trusted Banking Partner</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded">
          Explore Our Services
        </button>
      </section>
      

      {/* Features Section */}
      <section id="services" className="py-20">
        <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Loans</h3>
            <p>Personalized loan options to suit your needs.</p>
          </div>
          <div className="bg-white shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Credit Cards</h3>
            <p>Enjoy exclusive benefits with our credit cards.</p>
          </div>
          <div className="bg-white shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Online Banking</h3>
            <p>Manage your accounts securely from anywhere.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-200">
        <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-center">Need assistance? Call us at <strong>123-456-789</strong> or email <strong>support@seylan.lk</strong>.</p>
      </section>
    
    </div>
  );
};

export default HomePage;
