import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Header.css";

function Header() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>Online Loan App</h1>
      <nav>
        <Link to="/">Home</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            {user?.role === "user" && <Link to="/apply">Apply</Link>}
            <Link to="/dashboard">Dashboard</Link>
            <span className="user">Welcome, {user?.name}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
