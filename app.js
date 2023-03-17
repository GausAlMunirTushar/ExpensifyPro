const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoute = require('./routes/userRoute')

// config dot env file
dotenv.config();

// Database Connection
connectDB();

// Rest Object
const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//User Routes
app.use('/users', userRoute)

module.exports = app;