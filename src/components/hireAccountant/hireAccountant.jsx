import React, { useState } from "react";
import "./hireAccountant.css";

function HireAccountant() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    contactInfo: "",
    aadharNo: "",
    qualifications: "",
    medicalLicense: "",
    medicalExperience: "",
    yearsOfExperience: "",
    image: null, // Add image state
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // Handle image file
      const imageFile = e.target.files[0];
      setFormData({ ...formData, image: URL.createObjectURL(imageFile) });
    } else {
      // Handle other form fields
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission actions here, e.g., sending data to backend
    console.log("Form submitted with data:", formData);
    // Reset form data after submission
    setFormData({
      fullName: "",
      dateOfBirth: "",
      gender: "",
      contactInfo: "",
      aadharNo: "",
      qualifications: "",
      medicalLicense: "",
      medicalExperience: "",
      yearsOfExperience: "",
      image: null,
    });
  };

  return (
    <div className="hireDoctorContainer">
      <form onSubmit={handleSubmit}>
        <div className="accountantPhotoContainer">
          {/* Display selected image */}
          {formData.image && <img src={formData.image} alt="Doctor" />}
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*" // accept only image files
          />
        </div>

        <div className="accountantRegistrationContainer">
          {/* Rest of the form fields */}
          <input
            className="inputContainer"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="date"
            name="dateOfBirth"
            placeholder="Date of birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="contactInfo"
            placeholder="Contact Info"
            value={formData.contactInfo}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="aadharNo"
            placeholder="Aadhar No."
            value={formData.aadharNo}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="qualifications"
            placeholder="Qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="medicalExperience"
            placeholder="Medical experience"
            value={formData.medicalExperience}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="yearsOfExperience"
            placeholder="Years of experience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
          />
          <input
            className="inputContainer"
            type="text"
            name="PC Number"
            placeholder="PC Number"
            value={formData.yearsOfExperience}
            onChange={handleChange}
          />
        </div>

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HireAccountant;
