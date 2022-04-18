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
    res.send('hello world')
     
  })

  module.exports = router