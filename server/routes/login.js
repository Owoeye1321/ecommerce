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
   
            const username = req.body.details.username
            const password = req.body.details.password
            const sql = 'SELECT * from customers WHERE username = (?) AND password = (?)';
            con.query(sql, [username, password], (err, result) => {
                if (err) {
                  console.log('unable to check data from the database' + err)   
                } else if (result == '') {
                    res.send('Invalid details')
                  } else {
                    const session = req.session
                    session.userId = req.body.details.username
                  
                    res.json({
                      status:'success',
                      session_name:session.userId
                    })
                  }
                
                
        })
    
    })
    
    


module.exports = router