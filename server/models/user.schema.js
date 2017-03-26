const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        maxlength: 255,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        maxlength: 255,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        match: emailRegex,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
    }
})
const User = mongoose.model('User', userSchema);


User.getUserById = (id, callback)=>{
    User.findById(id, callback);
}

User.getUserByEmail = (email, callback)=>{
    let query = {
        email: email
    };
    User.findOne(query, callback);
}

User.addUser = (newUser, callback)=>{
    bcrypt.genSalt(10, (err, salt)=> {
        if (err){throw err;}
        else{
            bcrypt.hash(newUser.password, salt, (err, hash)=> {
                if (err){throw err}
                else{
                    newUser.password = hash;
                    console.log('New User: ', newUser)
                    newUser.save(callback);
                }

            });
        }
    });
}

User.comparePassword = (candidatePassword, hash, callback)=>{
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=>{
        if (err){
            throw err;
        }else if (!isMatch){
            callback(null, false);
        }else{
            callback(null, true);
        }
    })
}

module.exports = User;

