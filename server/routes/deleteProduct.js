if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.post('/',(req,res)=>{
     const productId = req.body.productId
     if(productId){
         client.connect(async err =>{
             const collection = client.db('ecommerce').collection('addToCart')
                const deleteItem = await collection.deleteOne({productId:productId})
                if(deleteItem){
                    res.send('success')
                    console.log(deleteItem)
                }else{
                        console.log('An error has occured deleting the Item from the database')
                }
         })
     }
  })
module.exports = router