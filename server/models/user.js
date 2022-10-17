const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    first_name: {
        type: String ,
        required: true
    },
    last_name: {
        type: String ,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    isAdmin: {
        type: Boolean,
        default: false 
    }
} , {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel