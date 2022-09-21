      const router = require('express').Router()
      const addToCartModel = require('../model/addToCartModel')

  router.post('/',async (req,res)=>{
     const productId = req.body.productId
     console.log(req.body)
     if(productId && req.body.username){
        const username = req.body.username
        console.log(productId)
        const deleteProduct = await addToCartModel.deleteOne({ productId:productId , customer_name:username })
        if(deleteProduct){
            res.send('success')
            console.log('Product has been deleted successfully', deleteProduct)
        }
     }else{
      console.log('Unable to get data')
     }
  })
module.exports = router