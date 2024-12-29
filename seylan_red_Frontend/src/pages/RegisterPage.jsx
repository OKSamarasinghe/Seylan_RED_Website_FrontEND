import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Designation: "",
    Branch: "",
    StaffNumber: "",
    ProfileImage: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload and convert to Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type (optional)
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ProfileImage: "Please select a valid image file (jpeg, png, gif).",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ProfileImage: "",
        }));
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, ProfileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.UserName.trim()) newErrors.UserName = "Username is required.";
    if (!formData.Password.trim() || formData.Password.length < 6)
      newErrors.Password = "Password must be at least 6 characters.";
    if (!formData.Designation.trim()) newErrors.Designation = "Designation is required.";
    if (!formData.Branch.trim()) newErrors.Branch = "Branch is required.";
    if (!formData.StaffNumber.trim()) newErrors.StaffNumber = "Staff number is required.";
    if (!formData.ProfileImage) newErrors.ProfileImage = "Profile image is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7230/api/UserDetails/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage("User registered successfully!");
      setErrorMessage("");
      setFormData({
        UserName: "",
        Password: "",
        Designation: "",
        Branch: "",
        StaffNumber: "",
        ProfileImage: "",
      });
      setImagePreview(null);
    } catch (error) {
      if (error.response && error.response.data) {
        // Assuming the backend sends a string message on error
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Failed to register user. Please try again.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-700 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <img src="/logo.png" alt="Logo" className="mx-auto w-24" />

        <h2 className="text-2xl font-bold text-center text-red-600 mb-6 mt-3"> Seylan RED Registration</h2>
        {successMessage && (
          <div className="p-4 mb-4 text-green-800 bg-green-200 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 mb-4 text-red-800 bg-red-200 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="UserName" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="UserName"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.UserName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your username"
            />
            {errors.UserName && <p className="text-red-500 text-sm">{errors.UserName}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="Password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.Password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
          </div>

          {/* Designation */}
          <div>
            <label htmlFor="Designation" className="block text-gray-700">Designation</label>
            <input
              type="text"
              id="Designation"
              name="Designation"
              value={formData.Designation}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.Designation ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your designation"
            />
            {errors.Designation && <p className="text-red-500 text-sm">{errors.Designation}</p>}
          </div>

          {/* Branch */}
          <div>
            <label htmlFor="Branch" className="block text-gray-700">Branch</label>
            <input
              type="text"
              id="Branch"
              name="Branch"
              value={formData.Branch}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.Branch ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your branch"
            />
            {errors.Branch && <p className="text-red-500 text-sm">{errors.Branch}</p>}
          </div>

          {/* Staff Number */}
          <div>
            <label htmlFor="StaffNumber" className="block text-gray-700">Staff Number</label>
            <input
              type="text"
              id="StaffNumber"
              name="StaffNumber"
              value={formData.StaffNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.StaffNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your staff number"
            />
            {errors.StaffNumber && <p className="text-red-500 text-sm">{errors.StaffNumber}</p>}
          </div>

          {/* Profile Image */}
          <div>
            <label htmlFor="ProfileImage" className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              id="ProfileImage"
              name="ProfileImage"
              accept="image/*"
              onChange={handleImageUpload}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.ProfileImage ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.ProfileImage && <p className="text-red-500 text-sm">{errors.ProfileImage}</p>}
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="flex flex-col items-center mt-4">
              <p className="text-gray-700 mb-2">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="max-w-xs max-h-48 rounded-md shadow-md"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
