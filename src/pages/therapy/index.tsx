import React, { useEffect, useState } from "react";
import "./therapy.styles.css";

export function TherapySessionPage() {
  interface Therapist {
    _id: string;
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    phoneNumber: string;
    location: string;
    url: string;
    email: string;
    password: string;
  }

  const [therapists, setTherapists] = useState<Therapist[]>([]);

  useEffect(() => {
    // Fetch the therapists data from the server
    fetchTherapists();
  }, []);

  async function fetchTherapists() {
    try {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/gettherapists"
      ); // Replace with your API endpoint for fetching therapists
      const data = await response.json();
      setTherapists(data);
    } catch (error) {
      console.error("Error fetching therapists:", error);
    }
  }

  function handleCardClick(email: string) {
    window.location.href = `mailto:${email}`;
  }
  function generateSpaces(count: number) {
    return Array(count + 1).join("\u00A0");
  }

  return (
    
    <div>
      <div>
        {therapists.map((therapist) => (
          <div
            key={therapist._id}
            className="therapist-card"
            onClick={() => handleCardClick(therapist.email)}
          >
            <img className="image-container" src={therapist.url} alt="Therapist" />
            <h2>
              {therapist.firstName} {therapist.lastName}
            </h2>
            
            <p>Date of Birth: {generateSpaces(100)}{therapist.dob}</p>
            <p>Gender: {generateSpaces(110)}{therapist.gender}</p>
            <p>Phone Number: {generateSpaces(96)}{therapist.phoneNumber}</p>
            <p>Location: {generateSpaces(108)}{therapist.location}</p>
            <p>Email: {generateSpaces(114)}{therapist.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
