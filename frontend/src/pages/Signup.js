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
    <div className="signup-container">
      <h2>Signup</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Signup</button>

        <p>Already have an account <Link to="/login">Login Here</Link></p>
      </form>
    </div>
  );
}

export default Signup;
