const express = require('express')
const router = express.Router()
const mysqlConnection = require('mysql')
const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })
  router.post('/', (req, res )=>{
    const sess = req.session
    sess.productId = req.body.productId
    sess.amount = req.body.amount
    if(sess.user){
     const username = sess.user
     const amount = req.body.amount
     const productId = req.body.productId
     const status = 'pending'
     const sql = "SELECT * FROM pending WHERE customer = ? AND productId = ?"
     con.query(sql,[username,productId],(outerErr, outerResult) => {
       if(!outerErr){
         if(outerResult.length){
           res.send('exist')
           console.log(sess.productId)
           console.log(sess.amount)
         }else{
          const innersql = "INSERT INTO pending (customer, amount, productId,status) VALUES(?, ?, ?, ?)"
          con.query(innersql,[username, amount, productId,status],(err, result)=>{
            if(!err){ res.send('success'); console.log(sess.productId);  console.log(sess.amount)}else{ console.log(err);} 
          })
         }
       }else{console.log(outerErr)}
     })
    
   }
  })

  module.exports = router