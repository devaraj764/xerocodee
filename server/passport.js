require('dotenv').config();
const passport = require('passport');
const User = require('./models/User');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, cb) => {
    const defaultUser = {
        uid: profile.id.toString(),
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        provider: 'google'
    }

    var user = await User.findOne({ uid: profile.id.toString(), provider: 'google' }).catch(err => {
        console.log(err.message)
    })
    if (!user) {
        user = await User.create(defaultUser).catch(err => {
            console.log('Error creating user: ', err.message)
            cb(err, null)
        })
    }
    if (user) cb(null, user)
}
));

passport.serializeUser((user, cb) => {
    console.log('Serializing user:', user)
    cb(null, user._id)
});

passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({ _id: id })
        .catch(err => {
            console.log('Error deserialzing:', err.message)
            cb(err, null)
        });
    console.log('Deserializing user', user)
    if (user) cb(null, user)
})