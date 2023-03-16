const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

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
app.get('/', (req, res)=>{
    res.send(`<h1>Hello, Expense Application</h1>`)
})

module.exports = app;