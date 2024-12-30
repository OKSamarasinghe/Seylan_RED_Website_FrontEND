// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const ProfilePage = () => {
  const userId = localStorage.getItem("userId");

  const [userDetails, setUserDetails] = useState({
    id: userId,
    userName: "",
    password: "",
    designation: "",
    branch: "",
    staffNumber: "",
    profileImage: ""
  });
  // const userId = 1; // Replace with the actual user ID (you can fetch this from localStorage or context)

  useEffect(() => {
    // Fetch user details from the backend
    console.log(userId);
    
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7230/api/UserDetails/${userId}`
        ); // Update the base URL and port as per your backend configuration
        console.log(response);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Your Profile</h1>
        <p className="text-lg mb-8">View and manage your account details here.</p>

        {userDetails ? (
          <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-red-600">Seylan RED User Details</h2>
              <p className="text-gray-700 font-bold mt-3">User Id: {userDetails.id}</p>
              <p className="text-gray-700 font-bold">Username: {userDetails.userName}</p>
              <p className="text-gray-700 font-bold">Designation: {userDetails.designation}</p>
              <p className="text-gray-700 font-bold">Branch: {userDetails.branch}</p>
              <p className="text-gray-700 font-bold">Staff Number: {userDetails.staffNumber}</p>
              <div className="justify-center items-center flex flex-col"> 
                <img src={userDetails.profileImage} style={{height: "200px", width: "150px"}}/>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
