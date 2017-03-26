const express = require('express');
const passport = require('passport');
const userRoutes = express.Router();

const userController = require('./../../controllers/user.controller');


userRoutes.post('/register', userController.registerUser);

userRoutes.post('/authenticate', userController.authenticateUser);

userRoutes.get('/profile', passport.authenticate('jwt', { session: false }), userController.getUserProfile);

userRoutes.get('/validate', userController.validate);


module.exports = userRoutes;


