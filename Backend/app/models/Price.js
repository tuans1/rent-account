const mongoose = require('mongoose');
const Schema = mongoose.Schema



const Price = new Schema({
    time: String,
    price: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});
// 
module.exports = mongoose.model('Price', Price);