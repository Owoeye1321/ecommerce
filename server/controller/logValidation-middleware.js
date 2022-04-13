const validator = require('./validator')
const logIn  = (req, res, next )=>{
    const ValidationRule ={
        "username":"required|string",
        "password": "required|string|min:6|confirmed"
    }
    validator(req.body,ValidationRule,{},(err,status)=>{
        if(!status)
        {
            res.status(412).send(
                {
                    success:"false",
                    message:"validation failed",
                    data:err
                }
            )
        }else{
            next()
        }
    })
}
module.exports = logIn