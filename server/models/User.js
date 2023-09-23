const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
        type: String,
        enum: ['developer', 'organization', 'company'],
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
