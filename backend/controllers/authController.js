const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register a new user
// Pre-approved admin emails (for illustration purposes)
const ADMIN_EMAILS = ['admin@example.com'];

exports.register = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Determine role
    let userRole = 'user'; // Default to 'user'

    if (role === 'admin') {
      if (ADMIN_EMAILS.includes(email)) {
        userRole = 'admin';
      } else {
        return res.status(403).json({ message: 'You are not authorized to register as an admin' });
      }
    }

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role: userRole,
    });

    // Save user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully', role: userRole });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // Include role in the response
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};