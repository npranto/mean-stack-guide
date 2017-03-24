const express = require('express');
const userRoutes = express.Router();

const userController = require('./../../controllers/user.controller');


userRoutes.get('/register', userController.registerUser);

userRoutes.get('/authenticate', userController.authenticateUser);

userRoutes.get('/profile', userController.getUserProfile);

userRoutes.get('/validate', userController.validate);


module.exports = userRoutes;


