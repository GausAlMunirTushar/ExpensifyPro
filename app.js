const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoute = require('./routes/userRoute');
const transactionRoute = require('./routes/transactionRoute');

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

// Routes
//User Routes
app.use('/users', userRoute)

// Transaction Routes
app.use('/transactions', transactionRoute)


module.exports = app;