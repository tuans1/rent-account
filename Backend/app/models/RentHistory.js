const mongoose = require('mongoose');
const Schema = mongoose.Schema



const RentHistory = new Schema({
    acc: String,
    name: String,
    userId: String,
    password: String,
    time: String,
    game: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});
// 
module.exports = mongoose.model('RentHistory', RentHistory);