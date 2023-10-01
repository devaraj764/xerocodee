const User = require("../models/User");

const getUserData = async (req, res, next) => {
    try {
        const user = await User.findById(req._id).select('email firstName lastName _id role hostingPlan');
        if (!user) return res.status(404).send({ message: 'user not found' });
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error..');
    }
}

const updateUser = async (req, res) => {
    try {
        const data = req.body;
        const updatedUser = await User.findByIdAndUpdate(req._id, data, { new: true });
        res.send({ message: 'Updated user', data: updatedUser })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error..');
    }
}

module.exports = { getUserData, updateUser };