const client = require('../controller/client')   
      const router = require('express').Router()

  router.get('/',async (req, res)=>{
    const sess = req.session
    if(sess.user){
        const customer_name = sess.user
            const collection = client.db('ecommerce').collection('addToCart')
            const queryProduct = await collection.find({ customer_name: customer_name, status:'ordered'}).toArray()
            if(queryProduct){
                console.log(queryProduct)
                res.json(queryProduct)
            }else{
                console.log('An error has occurred')
                res.send('Unable to delete Item')
            }
    }
  })
  module.exports = router