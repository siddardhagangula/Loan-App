import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-container">
        <h1>Welcome to Online Loan Application</h1>
        <p>Apply for a loan easily and quickly.</p>
        <button className="apply-button">Get Started</button>
        <p className="info-text">
          Our platform helps you find the best loan options tailored to your needs. 
          Safe, secure, and hassle-free.
        </p>
      </div>
    </div>
  );
}

export default Home;
