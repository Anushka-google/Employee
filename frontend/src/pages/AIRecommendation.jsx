import { useEffect, useState } from "react";
import axios from "axios";

function AIRecommendation() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmpId, setSelectedEmpId] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("https://employee-stp5.onrender.com/api/employees", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleGenerate = async () => {
    if (!selectedEmpId) return;
    const emp = employees.find(e => e._id === selectedEmpId);
    if (!emp) return;

    setLoading(true);
    setRecommendation("");
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post("https://employee-stp5.onrender.com/api/ai/recommend", {
        name: emp.name,
        skills: emp.skills,
        performanceScore: emp.performanceScore,
        experience: emp.experience
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error("Error generating recommendation", error);
      setRecommendation("Failed to generate recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <div className="card" style={{ backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "20px" }}>AI Recommendation</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <select 
            value={selectedEmpId} 
            onChange={(e) => setSelectedEmpId(e.target.value)}
            style={{ padding: "10px", flex: 1, borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" }}
          >
            <option value="">Select an Employee...</option>
            {employees.map(emp => (
              <option key={emp._id} value={emp._id}>{emp.name} - {emp.department}</option>
            ))}
          </select>
          <button 
            onClick={handleGenerate} 
            disabled={!selectedEmpId || loading}
            style={{ padding: "10px 20px", backgroundColor: "#9333ea", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px", opacity: (!selectedEmpId || loading) ? 0.7 : 1 }}
          >
            {loading ? "Generating..." : "Get Recommendation"}
          </button>
        </div>

        {recommendation && (
          <div style={{ padding: "20px", backgroundColor: "#f3f4f6", borderRadius: "8px", borderLeft: "4px solid #9333ea" }}>
            <h3 style={{ marginTop: 0, color: "#111827" }}>AI Insight</h3>
            <p style={{ whiteSpace: "pre-wrap", margin: 0, color: "#4b5563", lineHeight: "1.6" }}>
              {recommendation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIRecommendation;