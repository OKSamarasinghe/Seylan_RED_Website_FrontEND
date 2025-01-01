import React from "react";

const SeylanFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Seylan Bank PLC</h3>
          <p>
            Seylan Towers, No 90, Galle Road,
            <br />
            Colombo 03. Sri Lanka.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>
            24 Hour Contact center (24x7 days):
            <br />
            <strong>+94 11 2 008 888</strong>
          </p>
          <p>
            Get answers about products & services, report lost cards, reset Internet & mobile banking passwords, and more.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Get Latest Promotions</h3>
          <p className="mb-4">
            Please enter your email address to signup for our Latest Promotions.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 rounded-l bg-white text-gray-800 border border-gray-300"
            />
            <button className="px-4 py-2 bg-red-600 text-white rounded-r hover:bg-red-700">
              Submit
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        &copy; 2024 Seylan Bank PLC. All Rights Reserved.
      </p>
    </footer>
  );
};

export default SeylanFooter;
