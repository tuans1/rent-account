const mongoose = require('mongoose');
const Schema = mongoose.Schema



const TransactionHistory = new Schema({
    value: String,
    userId: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});
// 
module.exports = mongoose.model('TransactionHistory', TransactionHistory);