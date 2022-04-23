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
    if(sess.user){
     const username = sess.user
     const amount = req.body.amount
     const productId = req.body.productId
     const status = 'pending'
     const sql = "INSERT INTO pending (customer, amount, productId,status) VALUES(?, ?, ?, ?)"
     con.query(sql,[username, amount, productId,status],(err, result)=>{
       if(!err) res.send('success'); console.log(err);
     })
   }
  })

  module.exports = router