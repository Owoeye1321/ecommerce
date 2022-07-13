const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
   const sess= req.session
   if (sess.user !== "") {
       res.send('valid')
       console.log('User authenticated')
   }else{
       res.send('invalid')
        console.log('Invalid user')
   }
})
module.exports = router