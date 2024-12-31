// src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          If you need any assistance or have any queries, feel free to reach out to us through the channels below.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <strong className="text-xl">Phone:</strong>
            <p>123-456-789</p>
          </div>
          <div className="mb-6">
            <strong className="text-xl">Email:</strong>
            <p>support@seylan.lk</p>
          </div>
          <div className="mb-6">
            <strong className="text-xl">Address:</strong>
            <p>Seylan RED Bank, Colombo, Sri Lanka</p>
          </div>
          <button className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700">
            Send a Message
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
