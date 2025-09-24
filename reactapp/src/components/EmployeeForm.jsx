import React, { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data Submitted:", formData);
    alert("Employee Data Submitted! (Check console)");
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Designation:</label>
      <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />

      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />

      <label>Salary:</label>
      <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
