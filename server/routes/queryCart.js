const express = require('express')
const mysqlConnection = require('mysql')
const router = express.Router()

const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })
  router.get('/',(req, res)=>{
    const sess = req.session
    if(sess.user){
        const customer_name = sess.user
        const status = "Delivered"
        const sql = "SELECT DISTINCT productName,productPrice, productId, productImage, productContent,productPrice, productAbout, productContent,qty,total FROM addToCart WHERE customer_name = ?  AND status != ? ORDER BY id DESC "
        con.query(sql,[customer_name,status],(err,result)=>{
            if(!err){
                res.json(result)
               
            }else{
                res.send("Server error " + err)
            }
        })
    }
  })
  module.exports = router