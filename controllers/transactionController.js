const transactionModel = require('../models/transactionModel')
const moment = require('moment')
const addTransaction = async (req, res) => {
    try {
        const reqBody = req.body;
        const newTransaction = new transactionModel(reqBody)
        await newTransaction.save()
        res.status(201).send('Transaction Created')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const getAllTransaction = async (req, res) => {
    try {
        const {frequency, selectedDate, type} = req.body
        const transaction = await transactionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gt: moment().subtract(Number(frequency), 'd').toDate()
                },
            } : {
                $gte: selectedDate[0],
                $lte: selectedDate[1]
            }),
            userid: req.body.userid,
            ...(type !== 'all' && {type})
        })
            
        res.status(200).json(transaction);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {
    addTransaction,
    getAllTransaction,
}
