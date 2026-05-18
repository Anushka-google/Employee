import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: 120,
      color: "#2563eb",
    },
    {
      title: "Top Performers",
      value: 18,
      color: "#16a34a",
    },
    {
      title: "Training Required",
      value: 24,
      color: "#dc2626",
    },
    {
      title: "AI Recommendations",
      value: 42,
      color: "#9333ea",
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#111827",
            marginBottom: "10px",
          }}
        >
          Employee Performance Dashboard
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          AI-Based Employee Analytics &
          Recommendation System
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "30px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
              borderLeft: `6px solid ${item.color}`,
            }}
          >
            <h3
              style={{
                color: "#6b7280",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <h1
              style={{
                fontSize: "42px",
                color: item.color,
                margin: 0,
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {/* Employee Management */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>
            Employee Management
          </h2>

          <p style={textStyle}>
            Add, update, manage and monitor
            employee performance records.
          </p>

          <Link to="/employees">
            <button style={buttonStyle}>
              View Employees
            </button>
          </Link>
        </div>

        {/* AI Recommendation */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>
            AI Recommendations
          </h2>

          <p style={textStyle}>
            Generate AI-powered promotion,
            training and ranking suggestions.
          </p>

          <Link to="/recommendations">
            <button style={buttonStyle}>
              View AI Insights
            </button>
          </Link>
        </div>

        {/* Add Employee */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>
            Add Employee
          </h2>

          <p style={textStyle}>
            Register new employees with skills,
            department and performance data.
          </p>

          <Link to="/add-employee">
            <button style={buttonStyle}>
              Add Employee
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "30px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const headingStyle = {
  color: "#111827",
  marginBottom: "15px",
};

const textStyle = {
  color: "#6b7280",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "15px",
};

export default Dashboard;