import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    relation: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

      <label>Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>How You Know Susan:</label>
      <select name="relation" value={formData.relation} onChange={handleChange} required>
        <option value="">Select an option</option>
        <option value="friend">Friend</option>
        <option value="family">Family</option>
        <option value="colleague">Colleague</option>
      </select>

      <label>Message:</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
