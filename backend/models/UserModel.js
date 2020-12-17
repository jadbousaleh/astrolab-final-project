const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: false
        },
        dateCreated: {
            type: Date,
            default: Date.now
        }
    }
);

// User Model
const UserModel = mongoose.model('users', UserSchema);

// Export
module.exports = UserModel;