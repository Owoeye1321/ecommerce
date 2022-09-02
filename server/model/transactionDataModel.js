
// this is the code for ./models.js
  
const mongoose = require('mongoose')
  
const transaction = new mongoose.Schema({
        customer:String,
        amount:Number,
        productId:Number,
        status:String

   
}); 
  
// Exporting our model object
module.exports = transact = mongoose.model('transaction', transaction);