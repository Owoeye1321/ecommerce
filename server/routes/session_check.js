const express = require('express')
const router = express.Router()
router.get('/',(req, res )=>{
   const session = req.session
   if(session.userid){
       res.send('valid')
   }
   else{
       res.send('invalid')
   }
})
module.exports = router