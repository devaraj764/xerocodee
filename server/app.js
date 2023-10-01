require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const isVerified = require('./helpers/verify');
require('./passport');

const PORT = process.env.PORT || 5000;
const app = express();

// Serve static files from the 'client/build' folder
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH'],
}));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// adding routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
app.use('/api/auth', authRoutes);
app.use('/api/user', isVerified, userRoutes);

app.get('/api', (req, res) => {
    res.send('API is working!!!')
});

// For any other routes, serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to DB');
        console.log('Server is running on port', PORT);
    } catch (error) {
        console.log(error.message);
    }
});
