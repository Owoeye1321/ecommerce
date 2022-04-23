import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { usePaystackPayment } from 'react-paystack';


function App() {
    const [details, setDetails ] = useState([])
    const [amount, setAmount] = useState()
    const [publicKey, setPublicKey] = useState()

        useEffect(()=>{
            const response = async ()=>{
                const request = await axios.get('/querySinglePaymentdetails')
                if(request.data !== "invalid"){
                    console.log(request.data)
                    setDetails(request.data)
                    details.map((each)=>{
                        setAmount(each.amount)
                        
                    })

                }else if(request.data === "invalid"){
                    window.location.assign("http://localhost:3000/login")
                }
            }
            response()
             },[])
           
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "Owoeye1321@gmail.com",
        amount: amount,
        publicKey: publicKey,
    };
   //console.log(config)
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <center>
                  <div>
              <button className = 'btn btn-primary' onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Proceed to payment</button>
          </div>
            </center>
        
        );
    };
    
  return (
    <div  id = {Styles.newshit}>
     
      <PaystackHookExample />
    </div>
  );
}

export default App;