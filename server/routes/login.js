const express = require('express')
const mysqlConnection = require('mysql')
//const loginValidation = 
const router = express.Router()
const con = mysqlConnection.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'addriggo',
  })
router.post('/', (req,res)=>{
    con.connect((err)=>{
        if (err) {
            res.send('server issues')
        }else{
            const username = req.body.details.username
            const password = req.body.details.password
            const sql = 'SELECT * from customers WHERE username = (?) AND password = (?)'
            con.query(sql, [username, password], (err, result) => {
                if (err) {
                  console.log('unable to check data from the database' + err)   
                } else {
                  if (result == '') {
                    console.log('user does not exist')
                    res.send('Invalid details')
                  } else {
                    res.send('success')
                    console.log('user exist')
                  }
                }
        })
     }
    })
    

})
module.exports = router