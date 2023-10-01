require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { AuthControllers } = require('../controllers');
const ensureAuthenticated = require('../helpers/verify');

const baseFroentEndAPi = process.env.FRONTEND_URI || '';

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureMessage: 'Cannot Authenticate to google ! please try again later..',
        failureRedirect: `${baseFroentEndAPi}/login`,
    }),
    AuthControllers.callBackFn);

router.get('/github',
    passport.authenticate('github', { scope: ['user:email', 'email'] }));

router.get('/github/callback',
    passport.authenticate('github', {
        failureMessage: 'Cannot Authenticate to github ! please try again later..',
        failureRedirect: `${baseFroentEndAPi}/login`,
    }),
    AuthControllers.callBackFn);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/protected-route', ensureAuthenticated, (req, res) => {
    res.send(req.user)
});

// Signup route
router.post('/signup', AuthControllers.signup);

// Login route
router.post('/login', AuthControllers.login);


module.exports = router;