import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
          alignItems: "center",
        }}
      >
        {token ? (
          <>
            <Link style={linkStyle} to="/dashboard">
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
            <button
              onClick={handleLogout}
              style={{
                ...linkStyle,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link style={linkStyle} to="/login">
              Login
            </Link>
            <Link style={linkStyle} to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
};

export default Navbar;