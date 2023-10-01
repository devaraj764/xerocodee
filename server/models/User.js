const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ssoid: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    provider: {
        type: String,
        enum: ['google', 'github']
    },
    role: {
        type: {
            name: {
                type: String,
                required: false
            },
            designation: {
                type: String,       
                required: true
            }
        },
    },
    companyName: {
        type: String,
    },
    orgName: {
        type: String,
    },
    hostingPlan: {
        type: String,
        enum: ['self', 'xerocodee']
    }
}, {
    collection: 'users',
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
