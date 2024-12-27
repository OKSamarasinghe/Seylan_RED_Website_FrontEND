// src/pages/ProfilePage.jsx
import React from "react";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Profile</h1>
        <p className="text-lg">View and manage your account details here.</p>
      </section>
    </div>
  );
};

export default ProfilePage;
