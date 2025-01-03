const mongoose = require('mongoose');

const adminDecisionSchema = new mongoose.Schema({
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LoanApplication',
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  creditworthinessScore: {
    type: Number,
    required: true,
  },
  financialStabilityScore: {
    type: Number,
    required: true,
  },
  overallScore: {
    type: Number,
    required: true,
  },
  decision: {
    type: String,
    enum: ['Approved', 'Rejected'],
    default: 'Rejected',
  },
  eligibleLoanAmount: {
    type: Number,
    default: null,
  },
  remarks: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AdminDecision', adminDecisionSchema);
