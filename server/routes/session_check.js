const express = require('express')
const router = express.Router()
router.post('/',(req, res )=>{
    const session_userId = req.body.session_name
   if(session_userId ){
       res.send("cool")
   }
   else{
    res.send("uncool")
   }
})
module.exports = router