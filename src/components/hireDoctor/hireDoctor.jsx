// import React, { useState } from "react";

// import "./hireDoctor.css";

// function hireDoctor() {
//   return (
//     <div className="hireDoctorContainer">
//       <div className="doctorPhotoContainer">
//         <input type="file" />
//       </div>

//       <div className="doctorRegistrationContainer">
//         <input className="inputContainer" type="text" placeholder="Full Name" />
//         <input
//           className="inputContainer"
//           type="date"
//           placeholder="Date of birth"
//         />
//         <input className="inputContainer" type="text" placeholder="Gender" />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Contact Info"
//         />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Aadhar No."
//         />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Qualifications"
//         />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Medical License"
//         />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Medical experience"
//         />
//         <input
//           className="inputContainer"
//           type="text"
//           placeholder="Years of experice"
//         />
//       </div>
//     </div>
//   );
// }

// export default hireDoctor;

import React, { useState } from "react";
import "./hireDoctor.css";

function HireDoctor() {
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
        <div className="doctorPhotoContainer">
          {/* Display selected image */}
          {formData.image && <img src={formData.image} alt="Doctor" />}
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*" // accept only image files
          />
        </div>

        <div className="doctorRegistrationContainer">
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
            name="medicalLicense"
            placeholder="Medical License"
            value={formData.medicalLicense}
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
            name="roomNumber"
            placeholder="Room Number"
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
        </div>

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HireDoctor;
