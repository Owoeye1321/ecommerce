const express = require('express')
const nodemailer = require('nodemailer')
const router =  express.Router()
 

router.post('/',(req,res) =>{
    const sess = req.session
    if(sess.user){


    const username = sess.user
    const to = "Owoeye1321@gmail.com"
    const from = req.body.details.email
    const subject = "Delivery address of addriggo ordered product"
    const text = req.body.details.message
    const phone = req.body.details.phone
   
        async function main() {
        
                // create reusable transporter object using the default SMTP transport
                    let transporter = await nodemailer.createTransport({
                      host: "smtp.gmail.com",
                          port: 465,
                      secure: true, // true for 465, false for other ports
                    auth: {
                        user: "owoeye1321@gmail.com", // generated ethereal user
                        pass: "Owoeye1234", // generated ethereal password
                }
                },(err, result)=>{
                    if(!err)console.log(result);console.log(err)
                });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
               from:from, // sender address
                    to: to, // list of receivers
                        subject: subject, // Subject line
                   html:`<h1>Hello addrigo</h1> <h5>I'm ${username} and i've paid for my product and the address is below </h5>  ${text} \n  ${phone}` // plain text body
              
            },(err, result)=>{
                if(!err){ console.log(result);res.send('success')}else{console.log(err)}
            }); 
        
        // console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        
        main().catch(console.error);



    }
    else{
        res.send('failed')
    }
})

module.exports = router