if (process.env.NODE_ENV !== "production") require('dotenv').config();
const uri = process.env.ATLAS_URI

const { MongoClient, ServerApiVersion } = require('mongodb')
      const router = require('express').Router()
   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  router.post('/', (req, res )=>{
      if(req.body.productId){

          const id = req.body.productId
             client.connect(async err =>{
                 const collectionForAddToCart = client.db('ecommerce').collection('addToCart')
                    const selectQtyAndProductPrice = await collectionForAddToCart.findOne({productId:id})
                    if(selectQtyAndProductPrice){
                        selectQtyAndProductPrice.map((key)=>{
                            const get = parseInt(key.qty)
                            
                        })
                    }
                client.close();
             })
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