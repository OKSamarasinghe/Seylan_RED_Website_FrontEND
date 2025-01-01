// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import SeylanFooter from "../components/SeylanFooter"; // Import Footer


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">About Seylan RED</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Seylan RED is a leading financial institution committed to offering innovative banking solutions.
          We provide personalized services tailored to meet the unique needs of our customers.
          Our goal is to make banking seamless, secure, and accessible for everyone.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Our mission is to empower customers to achieve their financial goals with ease by providing secure
          and convenient banking services. We are dedicated to transforming banking experiences through innovation and trust.
        </p>
      </section>
      <SeylanFooter />
    </div>
  );
};

export default AboutPage;
