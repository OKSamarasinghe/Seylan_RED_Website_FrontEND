// src/pages/LoanApplicationPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { saveAs } from "file-saver";
import { fillTemplate } from "../utils/wordUtils";
import SeylanFooter from "../components/SeylanFooter"; // Import Footer


const LoanApplicationPage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    mphone_number: "",
    email: "",
    nic: "",
    dob: "",
    gender: "",
    marital_status: "",
    designation: "",
    loan_amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDownload = async () => {
    try {
      const blob = await fillTemplate(formData);
      saveAs(blob, "Loan_Application.docx");
    } catch (error) {
      console.error("Error generating Word document:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20">
        <h1 className="text-center text-4xl font-bold mb-4">Loan Application</h1>
        <form className="max-w-xl mx-auto bg-white p-6 rounded shadow">
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor={key}>
                {key.replace("_", " ").toUpperCase()}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleDownload}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Download Filled Form
          </button>
        </form>
      </section>
      <SeylanFooter />
    </div>
  );
};

export default LoanApplicationPage;
