if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const publicKey = process.env.PUBLIC_PAYSTACK_KEY
const express = require('express')
const router = express.Router()
const mysqlConnection = require('mysql')
const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })
  router.get('/',(req, res)=>{
   const sess = req.session
   if(sess.user){
    res.json({
      publicKey:publicKey,
      amount:sess.amount,
      productId:sess.productId
    })
   }
  
  })

  router.post('/',(req, res) => {
    const sess = req.session
    if(sess.user){
      const customer = sess.user
      const productId = req.body.productId
      const amount = req.body.amount
      const status = "paid"
  
    const sql = "DELETE * FROM pending WHERE customer = ? AND productId = ? "
    con.query(sql,[customer, productId],(err, result)=>{
      if(!err){
        const innersql = "UPDATE addToCart SET status = ? WHERE customer_name = ? and productId = ?"
        con.query(innersql,[status, customer, productId], (innerErr, innerReault)=>{
          if(!innerErr){
            const innestSql = "INSERT INTO transactinos WHERE(customer, amount , status) VALUES (? ,? ,?)"
            con.query(innestSql, [customer, amount, status],(innestErr, innestResult)=>{
              if(!innestErr){
                res.send('Done')
              }else{console.log(innestErr)}
            })
          }else{console.log(innerErr)}
        })
      }else{console.log(err)}
    })
  }
  })
  module.exports = router