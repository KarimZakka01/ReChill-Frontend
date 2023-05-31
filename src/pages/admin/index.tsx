import React, { useState, useEffect } from "react";

export function AdminPage() {
    interface Therapist {
        _id: string;
        firstName: string;
        lastName: string;
        dob: string;
        gender: string;
        phoneNumber: string;
        location: string;
        email: string;
        password: string;
      }
      
      const [therapists, setTherapists] = useState<Therapist[]>([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    location: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(therapists);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/admin");
      const data = await response.json();
      setTherapists(data);
    } catch (error) {
      console.error("Error fetching therapists:", error);
    }
  };

  const addTherapist = async () => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/admin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      fetchTherapists();
    } catch (error) {
      console.error("Error adding therapist:", error);
    }
  };

  const deleteTherapist = async (therapistId: string) => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/admin", {
        method: "DELETE",
        body: JSON.stringify({ therapistId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      fetchTherapists();
    } catch (error) {
      console.error("Error deleting therapist:", error);
    }
  };

  const editTherapist = async (therapistId: string) => {
    try {
      const response = await fetch("http://localhost:8888/.netlify/functions/admin", {
        method: "PUT",
        body: JSON.stringify({ therapistId, ...formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      fetchTherapists();
    } catch (error) {
      console.error("Error editing therapist:", error);
    }
  };

  
  return (
    <div>
  
  <form
    onSubmit={(e) => {
      e.preventDefault();
      addTherapist();
    }}
  >
    
      First Name:
      <input
        type="text"
        name="firstName"
        onChange={handleInputChange}
      />
    
    <br />
    
      Last Name:
      <input type="text" name="lastName" onChange={handleInputChange} />
    
    <br />
    
      Date of Birth:
      <input type="date" name="dob" onChange={handleInputChange} />
    
    <br />
    
      Gender:
      <input type="text" name="gender" onChange={handleInputChange} />
    
    <br />
    
      Phone Number:
      <input
        type="text"
        name="phoneNumber"
        onChange={handleInputChange}
      />
    
    <br />
    
      Location:
      <input type="text" name="location" onChange={handleInputChange} />
    
    <br />
   
      Email:
      <input type="email" name="email" onChange={handleInputChange} />
    
    <br />
    
      Password:
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
      />
   
    <br />
    <button type="submit">Add Therapist</button>
  </form>

  <h2>Therapists</h2>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Gender</th>
        <th>Phone Number</th>
        <th>Location</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {therapists.map((therapist) => (
        <tr key={therapist._id}>
          <td>{therapist.firstName}</td>
          <td>{therapist.lastName}</td>
          <td>{therapist.dob}</td>
          <td>{therapist.gender}</td>
          <td>{therapist.phoneNumber}</td>
          <td>{therapist.location}</td>
          <td>{therapist.email}</td>
          <td>{therapist.password}</td>
          <td>
            <button onClick={() => deleteTherapist(therapist._id)}>
              Delete
            </button>
            <button onClick={() => editTherapist(therapist._id)}>
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
