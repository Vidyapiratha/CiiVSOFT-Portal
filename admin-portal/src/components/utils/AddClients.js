import React, { useState } from "react";

function AddClients() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactTitle, setContactTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the data submission to the backend
    console.log("Submitting", {
      companyName,
      contactName,
      contactEmail,
      contactTitle,
    });
  };

  return (
    <div className="add-client-form">
      <h1>Add Clients - Step 1</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Client/Company Name"
          />
        </div>
        <div className="form-section">
          <label>Key Client Contacts</label>
          <input
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            value={contactTitle}
            onChange={(e) => setContactTitle(e.target.value)}
            placeholder="Job Title"
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default AddClients;
