// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import SeylanFooter from "../components/SeylanFooter";
import aboutUsBanner from "../assets/about_us_banner.jpg"; // Import the banner image

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <section className="relative w-full h-64 md:h-80">
        <img
          src={aboutUsBanner}
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* About Us Content */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-red-700 mb-6">About Seylan RED</h1>
        <p className="text-lg max-w-4xl mx-auto mb-8">
          Seylan RED is a leading financial institution committed to offering
          innovative banking solutions. We provide personalized services tailored
          to meet the unique needs of our customers. Our goal is to make banking
          seamless, secure, and accessible for everyone.
        </p>

        <h2 className="text-2xl font-semibold text-red-700 mb-4">A Modern Bank with a Strong Prowess</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Seylan Bank PLC is a Public Limited Liability company incorporated in
          Sri Lanka in 1987. The bank focuses on conventional commercial banking
          and operates from its Head Office in Colombo through its islandwide
          network of branches.
        </p>
        <p className="max-w-3xl mx-auto mb-8">
          Throughout our history, we have placed customer aspirations at the heart
          of everything we do. Our long-term success is built on a firm foundation
          of excellence in corporate governance, a well-developed culture of
          prudent risk management, accountability, and integrity. As a bank that
          prides itself on producing many “industry firsts,” our product portfolio
          is designed to deliver real value to our customers.
        </p>
        <p className="max-w-3xl mx-auto mb-8">
          With an open and ambitious mindset, we enable businesses to thrive and
          economies to prosper, helping every individual reach their goals in life.
        </p>

        <h2 className="text-2xl font-semibold text-red-700 mb-4">Our Motto</h2>
        <p className="max-w-2xl mx-auto mb-8">
          "The Bank with a heart,” the Bank that is Just, Fair, and Consistent.
        </p>

        <h2 className="text-2xl font-semibold text-red-700 mb-4">Our Vision</h2>
        <p className="max-w-2xl mx-auto mb-8">
          To be Sri Lanka's leading financial services provider - as recognized by
          all our stakeholders.
        </p>

        <h2 className="text-2xl font-semibold text-red-700 mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto mb-8">
          We provide our Customers with financial services that meet their needs in
          terms of value, pricing, delivery, and service. We will do so through a
          team of Seylan Bankers who are recognized and rewarded for results
          orientation.
        </p>
        <p className="max-w-3xl mx-auto mb-8">
          We will ensure that our efforts translate to meeting the expectations of
          our shareholders, whilst always acting as responsible corporate citizens.
        </p>
      </section>

      <SeylanFooter />
    </div>
  );
};

export default AboutPage;
