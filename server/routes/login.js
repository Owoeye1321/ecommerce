const router = require('express').Router()
const client = require('../controller/client')   

router.post('/',async (req, res) =>{
   const sess = req.session
         const username = req.body.details.username
    const password = req.body.details.password
             const collection = client.db("ecommerce").collection("users");
             const result = await collection.findOne({ username: username, password: password})
      if(result){
         sess.user = username
             res.send('success')
         console.log("user exist")

            const interval = setInterval (()=>{
                       console.log(sess.user)
                },2000)
        
                return()=>{
                        clearInterval(interval)
                }
      } else {
         console.log('user does not exist')
           res.send('invalid')
      }

})

module.exports = router



