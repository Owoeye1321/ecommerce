const client = require('../controller/client')   
      const router = require('express').Router()

  router.post('/',async (req, res )=>{
    const sess = req.session
    sess.productId = req.body.productId
    sess.amount = req.body.amount
    console.log(sess.amount)
    if(sess.user){
     const username = sess.user
     const amount = req.body.amount
     const productId = req.body.productId
     const status = 'pending'
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
  
   }
  })

  module.exports = router