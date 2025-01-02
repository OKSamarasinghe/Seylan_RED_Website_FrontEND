// src/pages/ServicesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SeylanFooter from "../components/SeylanFooter"; // Import Footer


const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20">
        <h1 className="text-center text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>
            <p>Access affordable loans for personal needs, with flexible repayment options.</p>
            <button
              onClick={() => navigate('/apply-loan')}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Apply Now
            </button>
          </div>
          <div className="bg-white shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Credit Cards</h3>
            <p>Our credit cards come with great rewards and exclusive offers.</p>
            <button 
              onClick={() => navigate('/apply-credit-card')}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Apply Now
            </button>
          </div>
          <div className="bg-white shadow-lg p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Make Transaction</h3>
            <p>Helping businesses grow with tailored banking solutions, including loans and credit facilities.</p>
            <button 
            onClick={()=> navigate('/make-transaction')}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <SeylanFooter />
    </div>
  );
};

export default ServicesPage;
