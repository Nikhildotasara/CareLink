import React from "react";
import "./doctorStats.css";

import doctorImage from "../../assests/doctor.jpeg";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    image: "doctor1.jpg",
    patientsVisited: 1000,
    roomNumber: "101",
    specialization: "Cardiologist",
    experience: "10 years",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    image: "doctor2.jpg",
    patientsVisited: 800,
    roomNumber: "202",
    specialization: "Pediatrician",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    image: "doctor2.jpg",
    patientsVisited: 800,
    roomNumber: "202",
    specialization: "Pediatrician",
    experience: "8 years",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    image: "doctor2.jpg",
    patientsVisited: 800,
    roomNumber: "202",
    specialization: "Pediatrician",
    experience: "8 years",
  },
  // Add more doctor data as needed
];

const DoctorStats = () => {
  return (
    <div className="doctorTilesContainer">
      {doctorsData.map((doctor) => (
        <div key={doctor.id} className="doctorTile">
          <div className="doctorDetails">
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Room Number: {doctor.roomNumber}</p>
            <p>Patients Visited: {doctor.patientsVisited}</p>
          </div>
          <div className="doctorImageContainer">
            <img src={doctorImage} alt={doctor.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorStats;
