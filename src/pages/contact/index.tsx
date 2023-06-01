import * as React from "react";
import "./contact.styles.css";
import { useState } from "react";
import { contactus } from "@services/apiService";
import { Button } from "@components/button";

export function Contact() {
  // Stating the variables to hold the values of email, subject, and message
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Event handler for email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update the email state with the new input value
  };

  // Event handler for subject input change
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value); // Update the subject state with the new input value
  };

  // Event handler for message input change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value); // Update the message state with the new input value
  };

  // Event handler for form submission
  const handleSubmit = async () => {
    // Create the request body object using the email, subject, and message values
    const requestBody = {
      email: email,
      subject: subject,
      message: message,
    };

    const response = await contactus(requestBody);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-header">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="contact-label">Email:</label>
          <input
            className="contact-input"
            type="email"
            value={email}
            onChange={handleEmailChange} // (function) is an event handler that updates the email state when the email input field value changes.
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="contact-label">Subject:</label>
          <input
            className="contact-input"
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter the subject"
            required
          />
        </div>
        <div className="form-group">
          <label className="contact-label">Message:</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="submit-button-container">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
