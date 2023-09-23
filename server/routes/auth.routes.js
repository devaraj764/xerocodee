require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { AuthControllers } = require('../controllers');

const baseFroentEndAPi = process.env.FRONTEND_URI || '';

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureMessage: 'Cannot Authenticate to google ! please try again later..',
        failureRedirect: `${baseFroentEndAPi}/login`,
    }),
    AuthControllers.googleCallback);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;