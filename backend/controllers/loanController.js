const LoanApplication = require('../models/LoanApplication');
const User = require('../models/User');



exports.applyForLoan = async (req, res) => {
  const {
    name,
    email,
    phone,
    age,
    address,
    monthlyIncome,
    requestedLoanAmount,
    tenureMonths,
    cibilScore,
    debtToIncomeRatio,
    annualIncome,
    employerName,
    designation,
  } = req.body;

  try {
    // Check if the user is logged in and retrieve their user ID (assumed to be provided by middleware)
    // const userId = req.user.id;
    const userId = req.body.userId;

    // Create a new loan application using the request body fields
    const loanApplication = new LoanApplication({
      user: userId, // Reference to the user who is applying for the loan
      name,
      email,
      phone,
      age,
      address,
      monthlyIncome,
      requestedLoanAmount,
      tenureMonths, 
      cibilScore,
      debtToIncomeRatio,
      annualIncome,
      employerName,
      designation,
      status: 'Under Review', // Default status
    });

    // Eligibility calculation (simplified for demonstration)
    let eligibility = 'Under Review';
    if (cibilScore >= 700 && monthlyIncome > requestedLoanAmount * 0.5) {
      eligibility = 'Approved';
    } else if (cibilScore < 650) {
      eligibility = 'Rejected';
    }

    // Set eligibility status in the loan application
    loanApplication.status = eligibility;

    // Save the loan application in the database
    await loanApplication.save();

    // Return success response
    res.status(201).json({ message: 'Loan application submitted successfully', loanApplication });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get All Loan Applications (Admin Only)
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await LoanApplication.find().populate('userId', 'name email');
//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


exports.getAllApplications = async (req, res) => {
  try {
    const { user } = req.query; // Extract user ID from query if available
    const { role, id } = req.user; // Get role from the token (via middleware)

    let loans;

    if (role === 'admin') {
      // If the user is admin, return all loans
      loans = await LoanApplication.find().populate('user', 'name email');
    } else if (role === 'user') {
      // If the user is a normal user, return only their loans
      loans = await LoanApplication.find({ user: id }).populate('user', 'name email');
    }

    res.status(200).json(loans);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch loan applications' });
  }
};
