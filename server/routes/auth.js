const express = require('express')
const router = express.Router()
router.get('/',(req, res ) =>{
    res.status(200).json
    ([{
        id:1,
        name:"users",
        password:"password" 
    },
    {
        id:2,
        name:"users",
        password:"password"
    }])
})

module.exports = router