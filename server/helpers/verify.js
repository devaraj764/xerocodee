require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.COOKIE_SECRET;

async function isVerified(req, res, next) {
    try {
        const Authorization = req.headers['authorization'];
        const token = Authorization.split(' ')[1];
        if (token) {
            const user = jwt.verify(token, secret);
            if (user) {
                console.log('Authenticated')
                req._id = user._id;
                return next();
            }
        }
        res.status(401).send('Unauthorized');
    } catch (err) {
        console.log('Unauthorized')
        console.log(err)
        res.status(401).send(err.message || 'Unauthorized');
    }
}

module.exports = isVerified;