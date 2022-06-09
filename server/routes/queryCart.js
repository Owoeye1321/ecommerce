if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.get('/',(req, res)=>{
    const sess = req.session
    if(sess.user){
        const customer_name = sess.user
        client.connect(async err =>{
            console.log('connnected to mongodb successfully')
            const collection = client.db('ecommerce').collection('addToCart')
            const queryProduct = await collection.find({ customer_name: customer_name, status:'ordered'}).toArray()
            if(queryProduct){
                console.log(queryProduct)
                res.json(queryProduct)
            }else{
                console.log('An error has occurred')
                res.send('Unable to delete Item')
            }
           
        })
    }
  })
  module.exports = router