const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'amount is required']
    },
    category: {
        type: String,
        required: [true, 'Category is Required']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Description is Required']
    },
    date: {
        type: String,
        required: [true, 'Date is Required']
    }
},{versionKey: false}, {timestamps: true})
const transactionModel = mongoose.model('transaction', transactionSchema)
module.exports = transactionModel;