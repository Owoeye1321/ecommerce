const express = require('express')
const app = express()
 const PORT = process.env.PORT || 5000
 app.get('/',( req, res ) =>{
   res.send('hello world')
   console.log('Nodemon working well')
 })



  
app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })  