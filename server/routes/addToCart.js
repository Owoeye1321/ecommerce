const express = require('express')
const mysqlConnection = require('mysql')
const router = express.Router()
const con = mysqlConnection.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'addriggo',
 })
router.post('/', (req, res )=>{
   sess = req.session
   if(sess.user){
      const customer_name =sess.user
         const  productId = req.body.userproduct.product.id
         const productName = req.body.userproduct.product.name
         const  productPrice = req.body.userproduct.product.price
         const  productImage = req.body.userproduct.product.image
         const  productContent = req.body.userproduct.product.content
         const  productAbout = req.body.userproduct.product.aboutProduct
         const date = date("d-m-y")
         const status = "ordered";
         
         const sql = "INSERT INTO addToCart (customer_name, productId, productName,productPrice, productImage ,productContent,productAbout,date,status) VALUES (?,?,?,?,?,?,?,?,?) "
         con.query(sql,[customer_name, productId, productName,productPrice, productImage ,productContent,productAbout,date,status], (err,result)=>{
            if(!err){
               res.send("success")
            }
            else{
               res.send("An error has occured " +err)
            }
         })


   }else{
      res.send("invalid user")
   }
  
})
module.exports = router