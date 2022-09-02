const router = require('express').Router()
const userModel = require('../model/userModel')

router.post('/', (req, res) =>{
   console.log(req.body)
   const sess = req.session
         const username = req.body.details.username
    const password = req.body.details.password

    const login = new userModel({
      username:username,
      password:password,
  })
  //checking if a user exist
      userModel.exists({username:username, password:password}, (err, result)=>{
         if(result){
            req.session.username = username
            req.session.save((badestErr, baddestResult)=>{
               if(!badestErr){
                  console.log('Session has been saved')
                  console.log(req.session)
                  console.log('The session id is ', req.session.username)
               }
            })
            res.send('success')
            console.log('The user exist')
         }else{
            res.send('invalid')
            console.log('The user does not exist')
         }
      })

})

module.exports = router

