import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchDept, setSearchDept] = useState("");

  const fetchEmployees = async (dept = "") => {
    try {
      const token = localStorage.getItem("token");
      const url = dept ? `http://localhost:5000/api/employees/search?department=${dept}` : "http://localhost:5000/api/employees";
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEmployees(searchDept);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <div className="card" style={{ backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "20px" }}>Employee List</h2>
        
        <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input 
            type="text" 
            placeholder="Search by Department" 
            value={searchDept} 
            onChange={(e) => setSearchDept(e.target.value)} 
            style={{ padding: "10px", flex: 1, borderRadius: "5px", border: "1px solid #ccc", fontSize: "15px" }}
          />
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#16a34a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "15px" }}>Search</button>
          <button type="button" onClick={() => { setSearchDept(""); fetchEmployees(""); }} style={{ padding: "10px 20px", backgroundColor: "#6b7280", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "15px" }}>Clear</button>
        </form>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {employees.map(emp => (
            <li key={emp._id} style={{ padding: "15px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
              <div>
                <strong style={{ fontSize: "18px" }}>{emp.name}</strong> - {emp.department} <br/>
                <small style={{ color: "#6b7280" }}>Skills: {emp.skills.join(", ")} | Score: {emp.performanceScore} | Exp: {emp.experience} yrs</small>
              </div>
            </li>
          ))}
          {employees.length === 0 && <p style={{ color: "#6b7280" }}>No employees found.</p>}
        </ul>
      </div>
    </div>
  );
}

export default EmployeeList;