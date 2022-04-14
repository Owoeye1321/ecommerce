const validator = require('../controller/validator')
const express = require('express')
const router = express.Router()
const mysqlConnection = require('mysql')
const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })
router.post('/',(req, res,next )=>{
    const validationRule ={
        "email" :"required|email",
        "username":'required|string',
        "password": "required|string|min:6"
    }
    validator(req.body, validationRule, {}, (err, status)=>{
        if(!status)
        {
            res.json({
                success:"false",
                message:"Invalid details",
                data:{err}
            })
        }else{

            const username = req.body.username
            const password = req.body.password
            const email = req.body.email
            const sql_ = "SELECT username FROM customers WHERE username = ? ";
            con.query(sql_,[username] ,(err, result )=>{
                if (!err){
                    if (result.length) {
                        res.send('exist')
                    }else{
                            const sql = "INSERT INTO customers (username,password,email) VALUES (?,?,?)";
                                con.query(sql,[username, password, email ], (err, result)=>{
                                if(result){
                    
                                        session =req.session
                                        session.userId = username
                                    
                                        res.send('success')
                                    }else{
                                        res.send("database issues")
                                    }
                    
                                })
                    }
                   
                   
                }
            })
           
           

        }
    })
    
})

module.exports = router