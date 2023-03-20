const express = require('express');
const { addTransaction, getAllTransaction } = require('../controllers/transactionController');


// Router Object
const transactionRoute = express.Router();

// Routes
// Add Transaction || POST
transactionRoute.post('/add-transaction', addTransaction)

// Get Transaction || GET
transactionRoute.post('/get-transaction', getAllTransaction)

module.exports = transactionRoute;