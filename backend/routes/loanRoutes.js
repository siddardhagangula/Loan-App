const express = require('express');
const { applyForLoan, getAllApplications } = require('../controllers/loanController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Public route: Apply for loan
// router.post('/apply', authMiddleware, applyForLoan);
router.post('/apply',applyForLoan);

// Admin route: Get all loan applications
router.get('/applications', authMiddleware, getAllApplications);

module.exports = router;
