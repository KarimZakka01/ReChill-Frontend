import React, { useState, useEffect } from "react";
import "./admin.styles.css";
import { Button } from "@components/button";
import { BASE_URL } from "@services/apiService";

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
  const [originalTherapists, setOriginalTherapists] = useState<Therapist[]>([]);
  const [editingTherapist, setEditingTherapist] = useState<Therapist | null>(
    null
  );
  const [newTherapist, setNewTherapist] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    location: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/admin`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch therapists");
      }

      const data = await response.json();      
      setTherapists(data);
      setOriginalTherapists(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTherapist = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/admin`,
        {
          method: "POST",
          body: JSON.stringify(newTherapist),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add therapist");
      }

      const data = await response.json();
      console.log(data); //log the response
      fetchTherapists(); // Refresh the therapists list
      setNewTherapist({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        phoneNumber: "",
        location: "",
        email: "",
        password: "",
      }); // Reset the new therapist form
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTherapist = async (therapistId: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/admin`,
        {
          method: "DELETE",
          credentials: "include",
          body: JSON.stringify({ therapistId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete therapist");
      }

      const data = await response.json();
      console.log(data); //log the response
      fetchTherapists(); // Refresh the therapists list
    } catch (error) {
      console.error(error);
    }
  };
  function searchTable(searchTerm : string) {
    
    setTherapists(originalTherapists.filter( x => x.firstName.includes(searchTerm)));
    
  }
  const editTherapist = async () => {
    try {
      if (editingTherapist) {
        // Send the updated therapist data to the server and update state
        const response = await fetch(
          `${BASE_URL}/admin`,
          {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(editingTherapist),
          }
        );
          
        if (response.ok) {
          const updatedTherapists = therapists.map((therapist) =>
            therapist._id === editingTherapist._id ? editingTherapist : therapist
          );
          setTherapists(updatedTherapists);
          setOriginalTherapists(updatedTherapists);
          setEditingTherapist(null);
        } else {
          console.error("Error editing therapist:", response.status);
        }
      }
    } catch (error) {
      console.error("Error editing therapist:", error);
    }
  };
  const handleEditClick = (therapist: Therapist) => {
    setEditingTherapist(therapist);
  };

  const handleCancelEdit = () => {
    setEditingTherapist(null);
  };
  return (
    <div>
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => searchTable(e.currentTarget.value)}>
    </input>
      {/* Therapist Table */}
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
                <Button onClick={() => handleEditClick(therapist)}>Edit</Button>
                <Button onClick={() => deleteTherapist(therapist._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Therapist Form */}
      <h2 className="admin-header">Add Therapist</h2>
      <div>
        <label className="labels">First Name:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Fist Name"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, firstName: e.target.value })
          }
        />

        <label className="labels">Last Name:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Last Name"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, lastName: e.target.value })
          }
        />

        <label className="labels">Date of Birth:</label>
        <input
          className="admin-input"
          type="date"
          placeholder="Date of Birth"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, dob: e.target.value })
          }
        />

        <label className="labels">Gender:</label>
        <select
          className="admin-input"
          value={newTherapist.gender}
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, gender: e.target.value })
          }
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label className="labels">Phone Number:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Phone Number"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, phoneNumber: e.target.value })
          }
        />

        <label className="labels">Location:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Location"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, location: e.target.value })
          }
        />

        <label className="labels">Email:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Email"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, email: e.target.value })
          }
        />

        <label className="labels">Password:</label>
        <input
          className="admin-input"
          type="text"
          placeholder="Password"
          onChange={(e) =>
            setNewTherapist({ ...newTherapist, password: e.target.value })
          }
        />
      </div>

      <Button className="admin-add" onClick={addTherapist}>
        Add
      </Button>

      {/* Edit Therapist Form */}
      {editingTherapist && (
        <div>
          <h2 className="admin-header">Edit Therapist</h2>
          <div>
            <label className="labels">First Name:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.firstName}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  firstName: e.target.value,
                })
              }
            />
            <label className="labels">Last Name:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.lastName}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  lastName: e.target.value,
                })
              }
            />

            <label className="labels">Date of Birth:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.dob}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  dob: e.target.value,
                })
              }
            />

            <label className="labels">Gender:</label>
            <select
              className="admin-input"
              value={editingTherapist.gender}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  gender: e.target.value,
                })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label className="labels">Phone Number:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.phoneNumber}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  phoneNumber: e.target.value,
                })
              }
            />

            <label className="labels">Location:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.location}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  location: e.target.value,
                })
              }
            />

            <label className="labels">Email:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.email}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  email: e.target.value,
                })
              }
            />

            <label className="labels">Password:</label>
            <input
              className="admin-input"
              type="text"
              value={editingTherapist.password}
              onChange={(e) =>
                setEditingTherapist({
                  ...editingTherapist,
                  password: e.target.value,
                })
              }
            />
          </div>
          <Button className="admin-edit" onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button className="admin-edit" onClick={editTherapist}>
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
