const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log(req.session)
   if(req.session.username){
    console.log(req.session.username)
       res.send('valid')
       console.log('User authenticated')
   }else{
       res.send('invalid')
        console.log({
            status:"Session is empty",
            state:req.session
        })
   }
})
module.exports = router