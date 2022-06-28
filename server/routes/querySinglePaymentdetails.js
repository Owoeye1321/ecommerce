const client = require('../controller/client')   
      const router = require('express').Router()

  router.get('/',async (req, res)=>{
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
          const query = async ()=>{
            const collectionForPending = client.db('ecommerce').collection('pending')
            const deleteFromPending = await collectionForPending.deleteOne({customer:customer, productId:productId})
          if(deleteFromPending){
            const collectionForAddToCart = client.db('ecommerce').collection('addToCart')
              const updateAddToCart = await collectionForAddToCart.updateOne({customer_name:customer, productId:productId},{status:status})
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
          }
          query()

  }
  })
  module.exports = router