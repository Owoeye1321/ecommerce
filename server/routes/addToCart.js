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
         const  productId = req.body.productId
         const productName = req.body.productName
         const  productPrice = req.body.productPrice
         const  productImage = req.body.productImage
         const  productContent = req.body.productContent
         const  productAbout = req.body.productAbout
         
         const status = "ordered";
         
         const sql = "INSERT INTO addToCart (customer_name, productId, productName,productPrice, productImage ,productContent,productAbout,status) VALUES (?,?,?,?,?,?,?,?) "
         con.query(sql,[customer_name, productId, productName,productPrice, productImage ,productContent,productAbout,status], (err,result)=>{
            if(!err){
               res.send("success")
            }
            else{
               console.log("An error has occured "+err)
            }
         })


   }else{
      res.send("invalid user")
   }
  
})
module.exports = router