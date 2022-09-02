const router = require('express').Router()
 router.get('/',( req, res )=>{
    const sess = req.session
    if(sess.username){
       const check =  req.session.destroy()
        if(check){
            res.send('success')
        }
    }
 })

 module.exports = router