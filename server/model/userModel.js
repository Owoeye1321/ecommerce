
// this is the code for ./models.js
  
const mongoose = require('mongoose')
  
const signUpSchema = new mongoose.Schema({
        username :String,
        email: String,
        password :{
                type:String,
                max:8
        }
});
  
// Exporting our model object
module.exports = userModel = mongoose.model('user', signUpSchema); 