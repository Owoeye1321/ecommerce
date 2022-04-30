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
                                const get = parseInt(value.qty)
                                if (get > 0) {
                                    const getQty = value.qty - 1
                                    const getTotal = value.productPrice
                                    const sum = getQty * getTotal
                                    const customerId = req.body.productId
                                    const innerSql = "UPDATE addToCart SET qty = ?, total = ? where productId = ?"
                                    con.query(innerSql,[getQty,sum,customerId], (err, result)=>{
                                        if(result){
                                            res.send('success')
                                            console.log(result)
                                        }
                                    })
                                }else if(get == 0){
                                    
                                    const innestsql = "DELETE FROM addToCart WHERE productId = ?"
                                    con.query(innestsql,[id],(err, data)=>{
                                        if(!err){
                                            res.json({success:'success'})
                                            console.log(data)
                                        }
                                    })
                                }
                           
                               
                            })


                        }else{
                            console.log('An error has occured'+ err)
                        }
                    })
          
      }
     
  })

  module.exports = router