const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // Financial details
  monthlyIncome: {
    type: Number,
    required: true,
  },
  requestedLoanAmount: {
    type: Number,
    required: true,
  },
  tenureMonths: {
    type: Number,
    required: true,
  },
  cibilScore: {
    type: Number,
    required: true,
  },
  debtToIncomeRatio: {
    type: Number,
    required: true,
  },
  annualIncome: {
    type: Number,
    required: true,
  },
  employerName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Under Review', 'Approved', 'Rejected'],
    default: 'Under Review',
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);
