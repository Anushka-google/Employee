import { useState } from "react";
import axios from "axios";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const payload = {
        ...formData,
        skills: formData.skills.split(",").map(skill => skill.trim()),
        performanceScore: Number(formData.performanceScore),
        experience: Number(formData.experience),
      };
      await axios.post("http://localhost:5000/api/employees", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Employee Added Successfully!");
      setFormData({ name: "", email: "", department: "", skills: "", performanceScore: "", experience: "" });
    } catch (error) {
      setMessage("Error adding employee: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <div className="card" style={{ backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "20px" }}>Add Employee</h2>
        {message && <p style={{ color: message.includes("Error") ? "red" : "green", marginBottom: "15px" }}>{message}</p>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" name="name" placeholder="Employee Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="performanceScore" placeholder="Performance Score (0-100)" value={formData.performanceScore} onChange={handleChange} required style={inputStyle} />
          <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Add Employee</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "15px" };
const buttonStyle = { padding: "12px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px" };

export default EmployeeForm;