const mongoose = require('mongoose');
const Schema = mongoose.Schema



const TransactionHistory = new Schema({
    value: String,
    code: String,
    status: Boolean,
    userId: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});
// 
module.exports = mongoose.model('TransactionHistory', TransactionHistory);