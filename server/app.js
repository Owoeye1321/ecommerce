const express = require('express')
const app = express()
app.use(express.json())
const auth = require('./routes/auth')
 const PORT = process.env.PORT || 5000


 app.use('/',auth)
 
 
 app.get('/hello',(req, res ) =>{
   res.send('Home page  connected to server successfully')
 })
 
 app.get('/people', (req, res ) => {
  res.json
  ([{
      id:1,
      name:"gtwatt",
      password:"password" 
  },
  {
      id:2,
      name:"owoeye",
      password:"password"
  }])
 })

 app.all("*",(req, res, next)=>{
  res.send("Hello there, you seem to be on another undefined route")
  next()
})
app.listen(PORT, () => {
    console.log('Listening to port' + ' ' + PORT)
  })  