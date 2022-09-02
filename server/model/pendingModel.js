
// this is the code for ./models.js
  
const mongoose = require('mongoose')
  
const pendingModel = new mongoose.Schema({
        customer:String,
        amount:Number,
        productId:Number,
        status:String

   
}); 
  
// Exporting our model object
module.exports = pendingTransaction = mongoose.model('pending', pendingModel);