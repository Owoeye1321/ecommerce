const express = require('express')
const router = express.Router()
router.post('/',(req, res ) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    res.send('Welcome to signUp page')
    
})

module.exports = router