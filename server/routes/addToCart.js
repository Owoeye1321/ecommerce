if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/', (req, res )=>{
  
  sess = req.session
   if(sess.user){
      console.log('keeping track')
      const customer_name =sess.user
         const  productId = req.body.productId
           const productName = req.body.productName
             const  productPrice = req.body.productPrice
            const  productImage = req.body.productImage
         const  productContent = req.body.productContent
      const  productAbout = req.body.productAbout
         const qty = req.body.qty
              const totalPrice = req.body.productPrice
            const status = "ordered";
       client.connect(async err=>{
          console.log('Connected to mongodb successfully')
          console.log(productImage)
          const collection = client.db('ecommerce').collection('addToCart')
          const checkIfExist = await collection.findOne({ customer_name:customer_name, productId:productId})
          if(checkIfExist){
             console.log(productImage)
             res.send('exist')
             console.log('The item already exist in the cart')
          }else{
             const UpdateNewItem = await collection.insertOne({
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
             if(UpdateNewItem){
                res.send('success')
                console.log('Added new item')
             }else{
                console.log('An error has occured while trying to save new item')
             }
          }
         
       })
      
   }else{
      res.send("invalid user")
   }
  
})
module.exports = router