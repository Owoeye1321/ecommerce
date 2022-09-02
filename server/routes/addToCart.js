const addToCart = require('../model/addToCartModel')
      const router = require('express').Router()


router.post('/',async  (req, res )=>{

   if(req.session.username){
      console.log('keeping track')
      console.log(req.session.username)
      const customer_name =req.session.username
         const  productId = req.body.productId
           const productName = req.body.productName
             const  productPrice = req.body.productPrice
            const  productImage = req.body.productImage
         const  productContent = req.body.productContent
      const  productAbout = req.body.productAbout
         const qty = req.body.qty
              const totalPrice = req.body.productPrice
            const status = "ordered";
          console.log(productImage)

          const UpdateNewItem = new addToCart({
            customer_name:customer_name,
            productId:productId,
            productName:productName,
            productPrice:productPrice,
            productImage:productImage,
            productContent:productContent,
            productAbout:productAbout,
            status:status,
            qty:qty,
            totalPrice:totalPrice
         })

         addToCart.exists({customer_name:customer_name, productId:productId}, (err, bashResult)=>{
            if(bashResult){
               res.send('exist')
               console.log('The item already exist in the cart')
               console.log(productImage)
            }else{
               UpdateNewItem.save().then((basher)=>{
                  res.json(basher)
                  console.log('added new data to cart', basher)
               }).catch((resError)=>{
                  console.log('An error has occured and the data is not saved', resError)
               })
            }
         })
        
   }else{
      res.send("invalid user")
   }
  
})
module.exports = router