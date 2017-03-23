const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const users = require('./routes/users.routes');

const app = express();  // initializes app with express
const PORT = 9999;      // sets port number, which will be the localhost that the app will be served on

// initializes cors module middleware;
// cors allows making http requests to the API from the front end with any domain;
// refer to "https://github.com/expressjs/cors" to setup specific configurations for cors
app.use(cors());

// initializes body-parser middleware
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('HOME Endpoint');
})

// tells app to use the users routes methods whenever the route has '/users' in it
app.use('/users', users);

// tells app to start listening to the server
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})