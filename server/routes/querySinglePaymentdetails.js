require('../controller/client')
if(process.env !== "production") require('dotenv')
const publicKey = process.env.PUBLIC_PAYSTACK_KEY
 const addToCartModel = require('../model/addToCartModel')
 const transact = require('../model/transactionDataModel')
 const pendingTransaction = require('../model/pendingModel')
      const router = require('express').Router()

  router.get('/',async (req, res)=>{


    res.json({ 
      publicKey:publicKey,
    //   amount:req.session.amount,
    //   productId:req.session.productId
    })

  })

  router.post('/',(req, res) => {
    consol.log(req.body)
    if(req.session.username){
      const customer = req.session.username
      const productId = req.body.productId
      const amount = req.body.amount
      const status = "paid"
        const query = async ()=>{

          const deletePending = await pendingTransaction.deleteOne({customer:customer, productId:productId})
          if(deletePending){

            const updateAddToCart = await addToCartModel.updateOne({customer_name:customer, productId:productId, status:status})
            if(updateAddToCart){

                await transact.save({customer:customer, amount:amount, status:status, productId:productId},( bashERr, bashResult )=>{
                  if(!bashERr){
                           console.log('Added new transaction details', bashRe)
                  res.send('Done')
                  }else{
                          res.send("unable to insert transaction")
                  console.log('unable to update add to cart')
                  }
                })
         
            }
          }
        
        }
        query()
    }

  })
  module.exports = router