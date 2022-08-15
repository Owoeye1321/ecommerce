const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log(req.session.user)
   if(req.session.user){
    console.log(req.session)
       res.send('valid')
       console.log('User authenticated')
       console.log(req.session.user)
   }else{
       res.send('invalid')
        console.log({
            status:"Session is empty",
            state:req.session
        })
   }
})
module.exports = router