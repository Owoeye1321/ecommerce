const client = require('../controller/client')   
   const validator = require('../controller/validator')
      const router = require('express').Router()

router.post('/',async (req, res) =>{
   const sess = req.session
      const username = req.body.details.username
     const email = req.body.details.email
   const password = req.body.details.password

   const details = {
      username:username,
          email:email,
       password:password
   }
   const validationRule ={
      "username":'required|string',
      "email" :"required|email",
      "password": "required|min:6"
  }
  validator(details, validationRule, {}, (err, status)=>{
     if(!status){
           console.log('An error has occured')
                 console.log(err)
        res.json({
           success:"false",
             message:"Invalid details",
          data:{err}
     })
     }else{
      const sign =async ()=>{
         const collection = client.db("ecommerce").collection("users");
         const check = await collection.findOne({username:username})
         if(check){
             res.send('exist')
             console.log('User exist')
         }else{
             const result  = await collection.insertOne({username:username, email:email, password:password})
             if(result){
                    sess.user = username
                       console.log('user saved')
                  res.send('success')
             }else{
                res.send('invalid')
                console.log('unable to save new user')
             }
         }
      }
      sign()
   
     }
  })


   

})

module.exports = router



