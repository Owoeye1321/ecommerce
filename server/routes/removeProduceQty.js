const client = require('../controller/client')   
      const router = require('express').Router()

  router.post('/', async (req, res )=>{
      
      if(req.body.productId){
          const id = req.body.productId
                const collection = client.db('ecommerce').collection('addToCart')
                const selectSomeVariableFromAddToCart = await collection.findOne({productId:id})
                if(selectSomeVariableFromAddToCart){
                    console.log(selectSomeVariableFromAddToCart)
                        const getQty = selectSomeVariableFromAddToCart.qty - 1;
                           const getTotal = selectSomeVariableFromAddToCart.productPrice
                                const sum = getQty * getTotal
                             const customerId = req.body.productId
                         const updateQtyAndTotal = await collection.updateOne({productId:customerId},{$set:{qty:getQty, totalPrice:sum}})
                        if(updateQtyAndTotal){
                            res.send('success')
                            console.log(updateQtyAndTotal)
                        }
                  
                }else{
                    console.log('An error has ocurred')
                }
          
      }else{
          res.send('invalid')
      }
  })

  module.exports = router