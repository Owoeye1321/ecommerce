//require('../controller/client')
const router = require('express').Router()
      const pendingTransaction = require('../model/pendingModel')

  router.post('/',async (req, res )=>{

    if(req.body.username){
    const productId = req.body.productId
     const amount = req.body.amount
          const singleFunction = async ()=>{
            console.log('Some new session has been saved' , req.session)
            const username = req.body.username
            const status = "pending"
            const doPendingStatement = await pendingTransaction.find({customer:username, productId:productId})
            if(doPendingStatement){
              res.send('exist')
              console.log( 'This product are available',productId, amount)
            }else{
              await pendingTransaction.save({customer:username, amount:amount, productId:productId, status:status}, ( bashErr , bashResult )=>{
                if(!bashErr){
                  res.send('success')
                  console.log('The details are below ', productId, amount,  bashResult)
                }else{
                    console.log('Unable to save details')
                }
              })
            }
          }
        singleFunction()
    }
  })

  module.exports = router