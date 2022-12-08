const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    paymentAmount: Number,
    paymentType: String,
    coveredMonth: String,
    paymentDate: Date,
    remarks: String
})

module.exports = mongoose.model('Transaction', TransactionSchema);