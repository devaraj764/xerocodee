require('dotenv').config();
const passport = require('passport');
const User = require('./models/User');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;

// google oauth credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// github oauth credentials
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

const URL = process.env.PRODUCTION_URL;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${URL}/api/auth/google/callback`,
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, cb) => {
    const defaultUser = {
        ssoid: profile.id.toString(),
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        provider: 'google'
    }

    var user = await User.findOne({ ssoid: profile.id.toString(), provider: 'google' }).catch(err => {
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

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: `${URL}/api/auth/github/callback`,
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        const defaultUser = {
            ssoid: profile.id.toString(),
            firstName: profile.firstName || profile.username,
            lastName: profile.familyName || '',
            email: profile._json.email,
            provider: 'github'
        }

        var user = await User.findOne({ ssoid: profile.id.toString(), provider: 'github' }).catch(err => {
            console.log(err.message)
        })
        if (!user) {
            user = await User.create(defaultUser).catch(err => {
                console.log('Error creating user: ', err.message)
                cb(err, null)
            })
        }
        if (user) cb(null, user);
    }
));



passport.serializeUser((user, cb) => {
    console.log('Serializing user..')
    cb(null, user._id)
});

passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({ _id: id })
        .catch(err => {
            console.log('Error deserialzing:', err.message)
            cb(err, null)
        });
    console.log('Deserializing user..')
    if (user) cb(null, user)
})