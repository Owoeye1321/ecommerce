if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.post('/',(req, res )=>{
    const sess = req.session
    sess.productId = req.body.productId
    sess.amount = req.body.amount
    if(sess.user){
     const username = sess.user
     const amount = req.body.amou
     const productId = req.body.productId
     const status = 'pending'
     client.connect(async err => {
     const collection = client.db("ecommerce").collection("pending");
     const singlePayment = await collection.find({customer:username, productId:productId}).toArray()
     if(singlePayment.length){
        res.send('exist')
        console.log(sess.productId)
        console.log(sess.amount)
     }else{
        const newSinglePayment = await collection.insertOne({customer:username, amount:amount, productId:productId, status:status})
        if(newSinglePayment){
          res.send('success')
          console.log(productId)
          console.log(sess.amount)
        }else{
          console.log('Unable to save details')
        }
     }

     client.close();
    });

  
   }
  })

  module.exports = router