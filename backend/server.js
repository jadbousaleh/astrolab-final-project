// Import the main express file as a function
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const TechnologyRoutes = require('./routes/TechnologyRoutes');
const UserRoutes = require('./routes/UserRoutes');
const TechnologyModel = require('./models/TechnologyModel');
const initPassportStrategy = require('./passport-config');

// Invoke express
const server = express();
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

// configure express to use passport
server.use(passport.initialize());
// configure passport to use passport-jwt
initPassportStrategy(passport);

// Database string - includes username, password and name of the database
const dbString = "mongodb+srv://admin01:mongo455324jadbs@cluster0.xrw66.mongodb.net/Astrolabs-final-project?retryWrites=true&w=majority";


// Database connection
mongoose
.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => {
        console.log('db is connected')
    }
)
.catch(
    (error) => {
        console.log('db is not connected. An error occured', error)
    }
)




// Routes
server.get(
    '/',
    (req,res) => {
        res.send("<h1>Welcome</h1>")
    }
);


// Publisher-User Routes
server.use(
    '/users',
    UserRoutes
);

// Technology Routes
server.use(
    '/technologies',
    passport.authenticate('jwt', {session: false}),
    TechnologyRoutes
);


// Routes for all other pages
server.get(
    '*',
    (req, res) => {
        res.send('<h1>404</h1>')
    }
);

// Connects a port number on the server
server.listen(
    3002,
    () => {
        console.log('server is running on http://localhost:3002')
    }
    
);