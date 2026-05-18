import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111827",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        Employee AI System
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link style={linkStyle} to="/">
          Dashboard
        </Link>

        <Link style={linkStyle} to="/add-employee">
          Add Employee
        </Link>

        <Link style={linkStyle} to="/employees">
          Employees
        </Link>

        <Link style={linkStyle} to="/recommendations">
          AI Recommendation
        </Link>

        <Link style={linkStyle} to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default Navbar;