      const router = require('express').Router()
      const addToCartModel = require('../model/addToCartModel')

  router.post('/', async (req, res )=>{
      console.log("Working on tree clean",req.body)
      if(req.body.productId && req.body.username){
        const username = req.body.username
          const id = req.body.productId
          console.log(id)
          const selectSomeVariableFromAddToCart = await addToCartModel.find({ productId:id , customer_name:username })
          if(selectSomeVariableFromAddToCart){
            console.log(selectSomeVariableFromAddToCart)
            selectSomeVariableFromAddToCart.map((key)=>{
                if(key.qty > 1){
                    console.log(key.qty * key.productPrice)
                    const getQty = key.qty - 1;
                        const getTotal = key.productPrice
                    const sum = getQty * getTotal
                     const updateFunction = async ()=>{
                        const update = await addToCartModel.updateOne({customer_name:username, productId:id},{$set:{
                            totalPrice:sum,
                              qty:getQty
                        }
                    })
                        if(update){
                            res.send('success')
                            console.log(update)
                        }
                     }
                     updateFunction()
                }else{
                    const doSomething = async ()=>{
                      const doTheShit = await addToCartModel.deleteOne({ productId:id , customer_name:username })
                         if(doTheShit){
                            res.send('success')
                            console.log(doTheShit)
                         }
                    }
                    doSomething()

                }
            })
          }
          
      }else{
        console.log('Unable to identify user and the product')
          res.send('invalid')
      }
  })

  module.exports = router