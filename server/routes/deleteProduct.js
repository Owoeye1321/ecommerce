      const router = require('express').Router()
      const addToCartModel = require('../model/addToCartModel')

  router.post('/',async (req,res)=>{
     const productId = req.body.productId
     if(productId && req.session.username){
        const username = req.session.username
        console.log(productId)
        const deleteProduct = await addToCartModel.deleteOne({ productId:productId , customer_name:username })
        if(deleteProduct){
            res.send('success')
            console.log('Product has been deleted successfully', deleteProduct)
        }
     }
  })
module.exports = router