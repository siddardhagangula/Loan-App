import React from "react";
import "../styles/Home.css";
import img from '../Images/bg1.jpeg'
function Home() {
  return (
    <>
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
      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose LoanApp?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card water-drop-card text-center">
                <h4>Quick Approval</h4>
                <p>Get your loans approved within 24 hours.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card water-drop-card text-center">
                <h4>Secure Process</h4>
                <p>We prioritize the security of your information.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card water-drop-card text-center">
                <h4>Low Interest Rates</h4>
                <p>Enjoy competitive rates tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works py-5">
        <div className="container">
          <h2 className="text-center mb-5 text-primary"><b>How It Works</b></h2>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="step-card">
                <div className="step-icon">
                  <span>1</span>
                </div>
                <h4>Sign Up</h4>
                <p>Create an account by providing basic details like name, email, and phone number.</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="step-card">
                <div className="step-icon">
                  <span>2</span>
                </div>
                <h4>Apply for Loan</h4>
                <p>Fill out the loan application form with required personal and financial details.</p>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="step-card">
                <div className="step-icon">
                  <span>3</span>
                </div>
                <h4>Approval & Disbursement</h4>
                <p>Our team reviews your application, and approved loans are disbursed quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section py-5">
      <h2 className="mb-4 text-center">Get in Touch</h2>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 contact-img-con">
            <img
              src={img}
              alt="Contact Us"
              className="contact-img rounded shadow"
            />
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;


