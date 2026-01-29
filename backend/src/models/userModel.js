const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
        trim: true // Names ke aage-piche ki faltu space hatane ke liye
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
        lowercase: ture
    },
    password: {
        type: String,
        minlength: [6, 'Password must be at least 6 characters'],
        required: [true, 'Password is required'],
        trim: true
    }
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;