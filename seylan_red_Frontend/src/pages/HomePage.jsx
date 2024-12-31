// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section id="home" className="text-center py-20 bg-red-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Seylan RED</h1>
        <p className="text-lg mb-6">Your Trusted Banking Partner for Every Step of Life</p>
        <button className="bg-white text-red-600 px-6 py-3 rounded shadow hover:bg-red-100">
          Explore Our Services
        </button>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Loans</h3>
            <p>Personalized loan options to suit your needs—be it for a home, car, or business.</p>
          </div>
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Credit Cards</h3>
            <p>Enjoy exclusive rewards, cashback, and flexible payments with our credit cards.</p>
          </div>
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Online Banking</h3>
            <p>Access your accounts anytime, anywhere with our secure online banking platform.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-200">
        <h2 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-lg p-6 w-64 text-center rounded-lg">
            <p className="italic">"Seylan RED helped me secure my dream home with an easy and fast loan process!"</p>
            <strong>- Ravi M.</strong>
          </div>
          <div className="bg-white shadow-lg p-6 w-64 text-center rounded-lg">
            <p className="italic">"The credit card rewards program is fantastic, and I get discounts on everything!"</p>
            <strong>- Nisha S.</strong>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-center text-lg">Need assistance? Call us at <strong>123-456-789</strong> or email <strong>support@seylan.lk</strong>.</p>
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700">Contact Support</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
