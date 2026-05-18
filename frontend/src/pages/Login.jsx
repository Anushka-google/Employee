import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      setMessage("Login Successful");

      console.log(response.data);
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
          Employee Login
        </h1>

        <p style={subtitleStyle}>
          AI Employee Performance Analytics
          System
        </p>

        <form onSubmit={handleSubmit}>
          <div style={inputGroup}>
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroup}>
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <button
            type="submit"
            style={buttonStyle}
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>

        {message && (
          <p style={messageStyle}>
            {message}
          </p>
        )}

        <div style={footerStyle}>
          <p>
            Don't have an account?
          </p>

          <Link
            to="/signup"
            style={linkStyle}
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(to right, #1e3c72, #2a5298)",
};

const cardStyle = {
  width: "400px",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "15px",
  boxShadow:
    "0 5px 20px rgba(0,0,0,0.2)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "10px",
  color: "#111827",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#6b7280",
  marginBottom: "30px",
};

const inputGroup = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  marginTop: "8px",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const messageStyle = {
  marginTop: "20px",
  textAlign: "center",
  color: "#dc2626",
};

const footerStyle = {
  marginTop: "25px",
  textAlign: "center",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Login;