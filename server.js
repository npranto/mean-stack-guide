const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const masterRoutes = require('./server/master.routes');
const config = require('./config/database');

const app = express();  // initializes app with express
const PORT = 9999;      // sets port number, which will be the localhost that the app will be served on

// initializes cors module middleware;
// cors allows making http requests to the API from the front end with any domain;
// refer to "https://github.com/expressjs/cors" to setup specific configurations for cors
app.use(cors());

// initializes body-parser middleware
app.use(bodyParser.json());

// serves static files (public/client files) in express
app.use('/', express.static(path.join(__dirname, 'public')));

// passes the express app to masterRoutes, which controls all the API routes
masterRoutes(app);

// initilizes passport lib middleware, for authentication in expess
app.use(passport.initialize());

// initilizing passport session
app.use(passport.session());

// connect to the database
mongoose.connect(config.database);

// on connect
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to database: ${config.database}`);
})

// on connect error
mongoose.connection.on('error', (error)=>{
    console.log(`Error in Database: ${error}`);
})




// tells app to start listening to the server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})