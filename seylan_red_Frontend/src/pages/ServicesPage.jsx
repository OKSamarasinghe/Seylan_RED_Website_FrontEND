// src/pages/ServicesPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20">
        <h1 className="text-center text-4xl font-bold mb-4">Our Services</h1>
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
    </div>
  );
};

export default ServicesPage;
