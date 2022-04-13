const validator = require('./validator')

const signUp = (req, res, next)=>{

    const validationRule ={
        "email" :"required|email",
        "username":'required|string',
        "password": "required|string|min:6|confirmed"
    }
    validator(req.body, validationRule, {}, (err, status)=>{
        if(!status)
        {
            res.status(412).send({
                success:"false",
                message:"Invalid details",
                data:err
            })
        }else{
            next()
        }
    })
}

module.exports = { signUp }