const express = require('express')
const router = express.Router()
const sqlConnection = require('mysql')
const con = sqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })

  router.post('/',(req,res)=>{
     const productId = req.body.productId
     if(productId){
        const sql = "DELETE FROM addToCart WHERE productId = ?"
        con.query(sql,[productId],(err, data)=>{
            if(!err){
                res.send('success')
                console.log(data)
            }else{
                console.log('An error has occured' +err)
            }
        })
     }
  })
module.exports = router