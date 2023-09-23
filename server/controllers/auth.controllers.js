const baseFroentEndAPi = process.env.FRONTEND_URI || '';

const googleCallback = async (req, res, next) => {
    try {
        console.log(req.user)
        res.redirect(`${baseFroentEndAPi}/login/success`)
    } catch (error) {
        console.log(error)
        next(error);
    }
}

module.exports = { googleCallback }