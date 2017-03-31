const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const databaseConfig = require('./config/database.config');
const passportConfig = require('./config/passport.config');

const masterRoutes = require('./server/master.routes');



const app = express();  // initializes app with express
const PORT = process.env.PORT || 8080;      // sets port number, which will be the localhost that the app will be served on



// initializes cors module middleware;
// cors allows making http requests to the API from the front end with any domain;
// refer to "https://github.com/expressjs/cors" to setup specific configurations for cors
app.use(cors());



// initializes body-parser middleware
app.use(bodyParser.json());



// serves static files (public/client files) in express
app.use('/', express.static(path.join(__dirname, 'dist')));



// // initilizes passport lib middleware, for authentication in expess
app.use(passport.initialize());
//
// // initilizing passport session
app.use(passport.session());

// adds passport configurations
passportConfig(passport);



// passes the express app to masterRoutes, which controls all the API routes
masterRoutes(app);



// connect to the database
mongoose.connect(databaseConfig.database);

// on connect
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to database: ${databaseConfig.database}`);
})

// on connect error
mongoose.connection.on('error', (error)=>{
    console.log(`Error in Database: ${error}`);
})

app.get('*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// tells app to start listening to the server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})