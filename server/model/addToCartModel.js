
// this is the code for ./models.js
  
const mongoose = require('mongoose')
  
const addSchema = new mongoose.Schema({
    customer_name:String,
    productId:String, 
    productName:String,
    productPrice:Number,
    productImage: String,
    productContent:String,
    productAbout:String,
    status:String,
    qty:Number,
    totalPrice:Number
   
});
  
// Exporting our model object
module.exports = addToCart = mongoose.model('addToCart', addSchema);