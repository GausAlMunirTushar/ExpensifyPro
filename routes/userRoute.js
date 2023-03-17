const express = require('express');
const { login, register } = require('../controllers/userController');

// Router Object for user Route
const userRoute = express.Router();

// routes 
//POST || LOGIN USER
userRoute.post('/login', login);

//POST || REGISTER USER
userRoute.post('/register', register)

module.exports = userRoute;