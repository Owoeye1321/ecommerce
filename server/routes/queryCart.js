      const router = require('express').Router()
      const addToCartModel = require('../model/addToCartModel')

  router.post('/',async (req, res)=>{
   
    if(req.body.username){
        const customer_name = req.body.username

         //checking if the profile of the user with the username
         const allData = await addToCartModel.find({ customer_name: customer_name, status:'ordered'} )
         if(allData){
          res.json(allData)
        //  console.log(allData)
        //  console.log('The data exist and it has been sent')
         }else{
          console.log('Unable to locate profile')
         }
    }
  })
  module.exports = router