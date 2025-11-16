import axios from "axios";
import { useState } from "react";

export default function JobForm({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/jobs", form);
    onSubmit();
    onClose();
  };

  return (
    <div className="form-popup">
      <form className="form" onSubmit={submitForm}>
        <h2>Post a Job</h2>

        <input name="title" placeholder="Job Title" onChange={handleChange} required />
        <input name="company" placeholder="Company Name" onChange={handleChange} required />

        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>

        <input name="location" placeholder="Location" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose} className="cancel">Close</button>
      </form>
    </div>
  );
}
