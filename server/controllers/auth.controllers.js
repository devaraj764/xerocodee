const baseFrontEndAPi = process.env.NODE_ENV !== 'production' ? process.env.FRONTEND_URI : '';
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secretKey = process.env.COOKIE_SECRET;
const bcrypt = require('bcrypt');

const callBackFn = async (req, res, next) => {
    try {
        const token = jwt.sign({ _id: req.user._id }, secretKey, { expiresIn: '30d' });
        res.redirect(`${baseFrontEndAPi}/login/success?token=${token}`)
    } catch (error) {
        console.log(error)
        next(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists with the given email
        const user = await User.findOne({ ssoid: email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token upon successful login
        const token = jwt.sign({ _id: user._id }, secretKey);

        res.send({ token })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: `Email already registered..! Please Login with ${existingUser.provider}` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, ssoid: email });
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { callBackFn, login, signup };