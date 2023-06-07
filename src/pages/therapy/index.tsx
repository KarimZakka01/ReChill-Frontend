import React, { useEffect, useState } from "react";
import "./therapy.styles.css";

export function Therapy() {
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
  const generateSpacerStyles = (count: number) => {
    const spacing = count * 8; // Adjust the spacing as needed
    return { marginBottom: `${spacing}px` };
  };
  return (
    <div>
      <div>
        {therapists.map((therapist) => (
          <div
            key={therapist._id}
            className="therapist-card"
            onClick={() => handleCardClick(therapist.email)}
          >
            <img
              className="image-container"
              src={therapist.url}
              alt="Therapist"
            />
            <div className="therapist-card-content">
              <h2>
                {therapist.firstName} {therapist.lastName}
              </h2>

              <p style={generateSpacerStyles(1)}>
                Date of Birth: {generateSpaces(80)} {therapist.dob}
              </p>
              <p style={generateSpacerStyles(1)}>
                Gender:{generateSpaces(91)} {therapist.gender}
              </p>
              <p style={generateSpacerStyles(1)}>
                Phone Number: {generateSpaces(77)}
                {therapist.phoneNumber}
              </p>
              <p style={generateSpacerStyles(1)}>
                Location: {generateSpaces(88)} {therapist.location}
              </p>
              <p style={generateSpacerStyles(1)}>
                Email:{generateSpaces(95)} {therapist.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
