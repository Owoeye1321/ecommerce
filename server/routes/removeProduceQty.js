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
      if(req.body.productId){

          const id = req.body.productId
                    const sql = "SELECT qty, productPrice FROM addToCart WHERE productId = ?"
                    con.query(sql,[id],(err, result)=>{
                        if(!err){
                            result.map((value)=>{
                                if (value.qty > 1) {
                                    const getQty = value.qty - 1
                                    const getTotal = value.productPrice
                                    const sum = getQty * getTotal
                                    const customerId = req.body.productId
                                    const innerSql = "UPDATE addToCart SET qty = ?, total = ? where productId = ?"
                                    con.query(innerSql,[getQty,sum,customerId], (err, result)=>{
                                        if(result){
                                            res.send('success')
                                            console.log(result)
                                            console.log(customerId)
                                        }
                                    })
                                }
                           
                               
                            })


                        }else{
                            console.log('An error has occured'+ err)
                        }
                    })
          
      }else{
          res.send('invalid')
      }
     
  })

  module.exports = router