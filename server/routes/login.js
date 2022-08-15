const router = require('express').Router()
const client = require('../controller/client')   

router.post('/',async (req, res) =>{
         const username = req.body.details.username
    const password = req.body.details.password
             const collection = client.db("ecommerce").collection("users");
             const result = await collection.findOne({ username: username, password: password})
      if(result){
         req.session.user = username
         req.session.save( err =>{
            if(err){
               console.log("An error has occured")
            }else{
               res.send('success')
               console.log(req.session.user)
               console.log(req.session)
               console.log("The session has been saved and successfully stored")
            }
         })

         // sess.user = username
         // if(sess.user){
         //    res.send('success')
         // console.log("user exist")

         //    const interval = setInterval (()=>{
         //               console.log(sess.user)
         //        },60000)
         //        return()=>{
         //                clearInterval(interval)
         //        }
         // }else{
         //    res.send('Unable to save')
         //    console.log("Unable to create a session for the current user")
         // }
             
      } else {
         console.log('user does not exist')
           res.send('invalid')
      }

})

module.exports = router