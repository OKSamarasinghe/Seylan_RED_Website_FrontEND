import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import SeylanFooter from "../components/SeylanFooter"; // Import Footer


// Import banner images
import first from "../assets/first.png";
import second from "../assets/second.jpg";
import third from "../assets/third.png";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  // Banner logic
  const images = [first, second, third, fourth, fifth];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />


      {/* Banner Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={`Banner ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Hero Section */}
      <section id="home" className="text-center py-20 bg-red-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Seylan RED</h1>
        <p className="text-lg mb-6">Your Trusted Banking Partner for Every Step of Life</p>
        <button
          onClick={() => navigate('/services')}
          className="bg-white text-red-600 px-6 py-3 rounded shadow hover:bg-red-200"
        >
          Explore Our Services
        </button>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8 text-red-600">Our Services</h2>
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
      <section className="py-20 bg-red-600">
        <h2 className="text-center text-3xl font-bold mb-8 text-white">What Our Customers Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-lg p-6 w-64 text-center rounded-lg">
            <p className="italic">"Seylan RED helped me secure my dream home with an easy and fast loan process!"</p>
            <strong>- Ravi M.</strong>
          </div>
          <div className="bg-white shadow-lg p-6 w-64 text-center rounded-lg">
            <p className="italic">"The credit card rewards program is fantastic, and I get discounts on everything!"</p>
            <strong>- Nisha S.</strong>
          </div>
          <div className="bg-white shadow-lg p-6 w-64 text-center rounded-lg">
            <p className="italic">"The credit card rewards program is fantastic, and I get discounts on everything!"</p>
            <strong>- Nisha S.</strong>
          </div>
        </div>
      </section>

      {/* Additional Section: Financial Tips */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8 text-red-600">Financial Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Budgeting 101</h3>
            <p>Learn how to manage your income and expenses effectively for a secure future.</p>
          </div>
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Smart Savings</h3>
            <p>Discover ways to save money and grow your wealth with our savings plans.</p>
          </div>
          <div className="bg-gray-100 shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Investment Basics</h3>
            <p>Understand the essentials of investing and start building your portfolio today.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-600">
        <h2 className="text-center text-3xl font-bold mb-8 text-white">Contact Us</h2>
        <p className="text-center text-lg text-white">Need assistance? Call us at <strong>123-456-789</strong> or email <strong>support@seylan.lk</strong>.</p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/contact')}
            className="bg-red-500 text-white px-6 py-3 rounded shadow hover:bg-red-700"
          >
            Contact Support
          </button>
        </div>
      </section>

      <SeylanFooter />
    </div>
  );
};

export default HomePage;
