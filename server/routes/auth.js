const express = require('express')
const router = express.Router()
router.post('/',(req, res ) =>{
    const username = req.body.username;
    const password = req.body.password;
    res.send('Welcome to user page')

    
})

module.exports = router