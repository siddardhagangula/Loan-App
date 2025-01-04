import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"; // Ensure the path is correct for your CSS file

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email, 
          password,
          phone,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setRole("user");

        navigate("/login");

      } else {
        setError(data.message || "An error occurred during registration.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="signup-page">
  <div className="signup-container">
    <h2>Signup</h2>
    {message && <p className="success-message">{message}</p>}
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="signup-button">
        Signup
      </button>

      <p className="login-link">
        Already have an account? <Link to="/login">Login Here</Link>
      </p>
    </form>
  </div>
</div>

  );
}

export default Signup;
