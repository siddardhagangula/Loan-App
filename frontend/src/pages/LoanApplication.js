
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook
// import "./LoanApplication.css";

// function LoanApplication() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     address: "",
//     monthlyIncome: "",
//     requestedLoanAmount: "",
//     tenureMonths: "",
//     cibilScore: "",
//     debtToIncomeRatio: "",
//     annualIncome: "",
//     employerName: "",
//     designation: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
//   const [showPopup, setShowPopup] = useState(false); // Control pop-up visibility
//   const navigate = useNavigate(); // Initialize useNavigate

  

//   // Check if the user is logged in by verifying token
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("You must be logged in to access the loan application.");
//       setIsAuthenticated(false); // User is not authenticated
//       navigate("/login"); // Redirect to login page if not authenticated
//     } else {
//       setIsAuthenticated(true); // User is authenticated
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleNext = () => setStep(step + 1);
//   const handlePrevious = () => setStep(step - 1);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("You must be logged in to submit the loan application.");
//       return;
//     }

//     try {
//       // Get the user ID from the localStorage (assuming it's stored after login)
//       const user = JSON.parse(localStorage.getItem("user"));

//       // Include the user ID in the request
//       const response = await fetch("http://localhost:5000/api/loan/apply", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Add user token from localStorage
//         },
//         body: JSON.stringify({
//           ...formData,
//           userId: user.id, // Add user ID from localStorage
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Loan application submitted successfully.");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           age: "",
//           address: "",
//           monthlyIncome: "",
//           requestedLoanAmount: "",
//           tenureMonths: "",
//           cibilScore: "",
//           debtToIncomeRatio: "",
//           annualIncome: "",
//           employerName: "",
//           designation: "",
//         });
//         setStep(1); // Reset to first step
//         setShowPopup(true); // Show success pop-up
//       } else {
//         setError(data.message || "Failed to submit the loan application.");
//       }
//     } catch (err) {
//       setError("Failed to connect to the server. Please try again later.");
//     }
//   };

//   const handlePopupClose = () => {
//     setShowPopup(false);
//     navigate("/dashboard"); // Redirect to dashboard
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="login-prompt">
//         <h2>Please log in to apply for a loan.</h2>
//         <p>You need to be logged in to access the loan application form.</p>
//         <button onClick={() => navigate("/login")}>Go to Login</button>
//       </div>
//     );
//   }

//   return (
//     <div className="loan-application-container">
//       <h2>Loan Application Form</h2>
//       {message && <p className="success-message">{message}</p>}
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         {step === 1 && (
//           <div className="personal-details">
//             <h3>Personal Details</h3>
//             <label>Name:</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//             <label>Email:</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//             <label>Phone:</label>
//             <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

//             <label>Age:</label>
//             <input type="number" name="age" value={formData.age} onChange={handleChange} required />

//             <label>Address:</label>
//             <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

//             <button type="button" onClick={handleNext}>Next</button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="financial-details">
//             <h3>Financial Details</h3>
//             <label>Monthly Income:</label>
//             <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />

//             <label>Requested Loan Amount:</label>
//             <input type="number" name="requestedLoanAmount" value={formData.requestedLoanAmount} onChange={handleChange} required />

//             <label>Tenure (Months):</label>
//             <input type="number" name="tenureMonths" value={formData.tenureMonths} onChange={handleChange} required />

//             <label>CIBIL Score:</label>
//             <input type="number" name="cibilScore" value={formData.cibilScore} onChange={handleChange} required />

//             <label>Debt-to-Income Ratio:</label>
//             <input type="number" name="debtToIncomeRatio" value={formData.debtToIncomeRatio} onChange={handleChange} required />

//             <label>Annual Income:</label>
//             <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />

//             <label>Employer Name:</label>
//             <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} required />

//             <label>Designation:</label>
//             <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />

//             <button type="button" onClick={handlePrevious}>Previous</button>
//             <button type="submit">Submit</button>
//           </div>
//         )}
//       </form>

//       {/* Success Popup */}
//       {showPopup && (
//         <div className="popup-container">
//           <div className="popup-card">
//             <p>Thank you for providing your details. Our team will review your eligibility and get back to you shortly.</p>
//             <button onClick={handlePopupClose}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoanApplication;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoanApplication.css";

function LoanApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    monthlyIncome: "",
    requestedLoanAmount: "",
    tenureMonths: "",
    cibilScore: "",
    debtToIncomeRatio: "",
    annualIncome: "",
    employerName: "",
    designation: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      setError("You must be logged in to access the loan application.");
      setIsAuthenticated(false);
      navigate("/login");
    } else if (user?.role !== "user") {
      setError("Only users with the 'user' role can access this page.");
      setIsAuthenticated(false);
      navigate("/dashboard");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      setError("You must be logged in to submit the loan application.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/loans/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Loan application submitted successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          address: "",
          monthlyIncome: "",
          requestedLoanAmount: "",
          tenureMonths: "",
          cibilScore: "",
          debtToIncomeRatio: "",
          annualIncome: "",
          employerName: "",
          designation: "",
        });
        setStep(1);
        setShowPopup(true);
      } else {
        setError(data.message || "Failed to submit the loan application.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/dashboard");
  };

  if (!isAuthenticated) {
    return (
      <div className="login-prompt">
        <h2>Please log in to apply for a loan.</h2>
        <p>You need to be logged in to access the loan application form.</p>
        <button onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="loan-application-container">
      <h2>Loan Application Form</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="personal-details">
            <h3>Personal Details</h3>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />

            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

            <button type="button" onClick={handleNext}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="financial-details">
            <h3>Financial Details</h3>
            <label>Monthly Income:</label>
            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />

            <label>Requested Loan Amount:</label>
            <input type="number" name="requestedLoanAmount" value={formData.requestedLoanAmount} onChange={handleChange} required />

            <label>Tenure (Months):</label>
            <input type="number" name="tenureMonths" value={formData.tenureMonths} onChange={handleChange} required />

            <label>CIBIL Score:</label>
            <input type="number" name="cibilScore" value={formData.cibilScore} onChange={handleChange} required />

            <label>Debt-to-Income Ratio:</label>
            <input type="number" name="debtToIncomeRatio" value={formData.debtToIncomeRatio} onChange={handleChange} required />

            <label>Annual Income:</label>
            <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleChange} required />

            <label>Employer Name:</label>
            <input type="text" name="employerName" value={formData.employerName} onChange={handleChange} required />

            <label>Designation:</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />

            <button type="button" onClick={handlePrevious}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-card">
            <p>Thank you for providing your details. Our team will review your eligibility and get back to you shortly.</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanApplication;

