// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">About Seylan RED</h1>
        <p className="text-lg">
          Seylan RED is committed to providing excellent banking services to our
          customers. Our goal is to make banking seamless and accessible.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
