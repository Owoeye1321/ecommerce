if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  const publicKey = process.env.PUBLIC_PAYSTACK_KEY
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
        const sql = "SELECT DISTINCT amount from pending WHERE customer = ? ORDER BY id DESC"
        con.query(sql,[customer_name,status],(err,result)=>{
            if(!err){
                res.json(result)
               console.log(result)
            }else{
                res.send("Server error " + err)
            }
        })
    }else{
        res.send('invalid')
    }
  })
  module.exports = router