const client = require('../controller/client')   
      const router = require('express').Router()

  router.post('/',async (req,res)=>{
     const productId = req.body.productId
     if(productId){
             const collection = client.db('ecommerce').collection('addToCart')
                const deleteItem = await collection.deleteOne({productId:productId})
                if(deleteItem){
                    res.send('success')
                    console.log(deleteItem)
                }else{
                        console.log('An error has occured deleting the Item from the database')
                }

     }
  })
module.exports = router