if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion, Collection } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.get('/',(req, res)=>{
   const sess = req.session
   if(sess.user){
    res.json({
      publicKey:publicKey,
      amount:sess.amount,
      productId:sess.productId
    })
   }
  })

  router.post('/',(req, res) => {
    const sess = req.session
    if(sess.user){
      const customer = sess.user
       const productId = req.body.productId
        const amount = req.body.amount
      const status = "paid"
  client.connect(async err=>{
    const collectionForPending = client.db('ecommerce').collection('pending')
      const deleteFromPending = await collectionForPending.deleteOne({customer:customer, productId:productId})
    if(deleteFromPending){
      const collectionForAddToCart = client.db('ecommerce').collection('addToCart')
        const updateAddToCart = await collectionForAddToCart.update({customer_name:customer, productId:productId},{status:status})
          if(updateAddToCart){
             const collectionForTransaction = client.db('ecommerce').collection('transaction')
                const InsertNewTransaction  = await collectionForTransaction.insertOne({customer:customer, amount:amount, status:status})
                  if(InsertNewTransaction){
                    res.send('Done')
                  }else{
                    res.send('Unable to insert transaction')
                    console.log('Unable to insert transaction')
                  }
          }else{
            res.send('Unable to update to addToCart')
            console.log('Unable to Update to addToCart')
          }
    }else{
      res.send('Unable to delete from pending')
      console.log('Unable to delete from pending')
    }
    client.close();
  })
  }
  })
  module.exports = router