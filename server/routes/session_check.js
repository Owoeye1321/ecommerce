const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   const sess= req.session
   if (sess.user) {
       res.send('valid')
   }else{
       res.send('invalid')
   }
})
module.exports = router