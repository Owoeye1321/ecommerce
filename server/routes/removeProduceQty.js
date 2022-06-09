if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.post('/', (req, res )=>{
      
      if(req.body.productId){
          const id = req.body.productId
            client.connect(async err =>{
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
                
            })
          
          
      }else{
          res.send('invalid')
      }
  })

  module.exports = router