// src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import SeylanFooter from "../components/SeylanFooter";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <section className="py-16 text-center bg-white shadow">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are here to help. Reach out to us through any of the channels below.
        </p>
      </section>

      <section className="py-10 px-6 bg-gray-100 flex-grow">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-left">
              <div>
                <strong className="text-xl">Phone:</strong>
                <p className="text-gray-600">123-456-789</p>
              </div>
              <div>
                <strong className="text-xl">Email:</strong>
                <p className="text-gray-600">support@seylan.lk</p>
              </div>
              <div>
                <strong className="text-xl">Address:</strong>
                <p className="text-gray-600">Seylan RED Bank, Colombo, Sri Lanka</p>
              </div>
              <div>
                <strong className="text-xl">Social Media:</strong>
                <p className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
                </p>
              </div>
            </div>
            <button className="mt-6 w-full bg-red-600 text-white py-3 rounded shadow hover:bg-red-700">
              Send a Message
            </button>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31622.85814039201!2d79.843201!3d6.9270785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963c6c593b9%3A0x4f5df1f5f5f6c8a9!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1699112248605!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Business Hours</h2>
          <p className="text-lg text-gray-600 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p className="text-lg text-gray-600">Saturday - Sunday: Closed</p>
        </div>
      </section>

      <SeylanFooter />
    </div>
  );
};

export default ContactPage;
