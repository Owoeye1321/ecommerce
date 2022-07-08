const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  cookie:{
    secure: true,
    maxAge:60000
       },
  secret:"OwoeyeSamuelOlamide",
  saveUninitialized:true,
  cookie:{maxAge:oneDay},
  resave:false
}))
app.use(function(req,res,next){
  if(!req.session){
      return next(new Error('Oh no')) //handle error
  }
  next() //otherwise continue
  });
const PORT =process.env.PORT ||  5000
app.use('/login', require('./routes/login'))
 app.use('/signUp', require ('./routes/signUp'))  
 app.use('/addToCart', require ('./routes/addToCart'))
 app.use('/queryCart',require('./routes/queryCart'))
 app.use('/checkUser',require('./routes/session_check'))
 app.use('/addProductQty',require('./routes/addProduceQty'))
 app.use('/removeProductProperty',require('./routes/removeProduceQty'))
 app.use('/singlePayment',require('./routes/singlePayment'))
 app.use('/querySinglePaymentdetails',require('./routes/querySinglePaymentdetails'))
 app.use('/contactUs',require('./routes/sendMail'))

 app.use('/deleteProduce',require('./routes/deleteProduct'))
app.get('/', (req, res)=>{
  res.send('hello world')
})

//  app.all("*",(req, res, next)=>{
//   res.send("Hello there, you seem to be on another undefined route")
//   next()
// })


app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })  