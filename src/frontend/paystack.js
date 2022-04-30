import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Styles from './style.module.css'

function App() {


const [details, setDetails ] = useState([])

        useEffect(()=>{
            const response = async ()=>{
                const request = await axios.get('/querySinglePaymentdetails')
                if(request.data){
                  setDetails(request.data)
                }
            }
            response()
             },[])
           const real_amount = details.amount * 100
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "Owoeye1321@gmail.com",
        amount:real_amount,
        publicKey: details.publicKey,
    };
   console.log(config)
    
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
      <div>
        <center><button className = 'btn btn-primary' onClick={() => {
                 initializePayment(onSuccess, onClose)
               }}>Proceed to payment</button></center>
          
      </div>
    );
};

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <div  id = {Styles.newshit}>
     
            <PaystackHookExample />
         </div>
    </div>
  );
}

export default App;