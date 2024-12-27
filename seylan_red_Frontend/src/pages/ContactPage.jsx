// src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          Need assistance? Call us at <strong>123-456-789</strong> or email{" "}
          <strong>support@seylan.lk</strong>.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
