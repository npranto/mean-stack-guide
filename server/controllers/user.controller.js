const jwt = require('jsonwebtoken');

const User = require('./../models/user.schema');
const databaseConfig = require('./../../config/database.config');

module.exports = {

    registerUser(req, res, next){
        let newUser = new User ({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        User.addUser(newUser, (err, userAdded)=>{
            if (err){
                res.status(500).json({
                    success: false,
                    message: 'Oops! Unable to register you',
                    result: err
                });
            }else{
                res.status(200).json({
                    success: true,
                    message: 'Success, you have been registered',
                    result: userAdded
                });
            }
        });
    },

    authenticateUser(req, res, next){
        const email = req.body.email;
        const password = req.body.password;
        User.getUserByEmail(email, (err, userFound)=>{
            if (err){
                res.status(500).json({
                    success: false,
                    message: 'Oops, error! Please come back some other time'
                })
            }else if(!userFound){
                res.status(300).json({
                    success: false,
                    message: 'Oops! Email not found'
                });
            }else{
                User.comparePassword(password, userFound.password, (err, passwordsMatch)=>{
                    if (err){
                        res.status(500).json({
                            success: false,
                            message: 'Oops, error! Please come back some other time'
                        });
                    }else if (!passwordsMatch){
                        res.status(300).json({
                            success: false,
                            message: 'Oops! your email and password don\'t match!'
                        });
                    }else {
                        const token = jwt.sign(userFound, databaseConfig.secret, {
                            expiresIn: 86400    // 1 day in seconds
                        });
                        res.status(200).json({
                            success: true,
                            message: 'Success, you have been authenticated',
                            token: 'JWT__' + token,
                            currentUser: {
                                _id: userFound._id,
                                name: userFound.name,
                                username: userFound.username,
                                email: userFound.email
                            }
                        });
                    }
                })


            }
        })
    },

    getUserProfile(req, res, next){
        res.json({
            currentUser: req.currentUser
        });
    },

    validate(req, res, next){
        res.send('USER: VALIDATE ROUTE');
    }

}