const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
app.use(express.json())
app.use(cookieParser())
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:true,
  cookie:{maxAge:oneDay},
  resave:false
}))
const PORT = process.env.PORT || 5000
app.use('/login', require('./routes/login'))
 app.use('/signUp', require ('./routes/signUp'))  
 app.use('/addToCart', require ('./routes/addToCart'))
 app.use('/queryCart',require('./routes/queryCart'))
 app.use('/checkUser',require('./routes/session_check'))
 //app.use('/addAndDrop', require ('./routes/addAndDropFromCart'))


 app.all("*",(req, res, next)=>{
  res.send("Hello there, you seem to be on another undefined route")
  next()
})

app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })  