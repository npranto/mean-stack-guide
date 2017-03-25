const mongoose = require('mongoose');

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        maxlength: 255,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        maxlength: 255,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        match: emailRegex,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50,
    }
})

module.exports = mongoose.model('User', UserSchema);

const getUserById = (id, callback)=>{
    User.findById(id, callback);
}

const getUserByUsername = (username, callback)=>{
    let query = {
        username: username
    };
    User.findOne(query, callback);
}

module.exports = getUserById;
module.exports = getUserByUsername;

