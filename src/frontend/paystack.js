import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Styles from './style.module.css'

function App() {

const amount = localStorage.getItem('amount')
const productId = localStorage.getItem('productId')
const [details, setDetails ] = useState([])

        useEffect(()=>{
            const response = async ()=>{
                const request = await axios.get('https://addrigo-api-1999.herokuapp.com/querySinglePaymentdetails')
                if(request.data){
                  setDetails(request.data)
                }
            }
            response()
             },[details])
           const real_amount = amount * 100
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "Owoeye1321@gmail.com",
        amount:real_amount,
        publicKey: details.publicKey,
    };
  // console.log(config)
    
// you can call this function anything
const onSuccess = (reference) => {
 // Implementation for whatever you want to do with reference and after success call.
 const eradicate = async ()=>{

  const remove = await axios.post('https://addrigo-api-1999.herokuapp.com/deleteProduce',{
          productId:productId,
          username:localStorage.getItem('username')
  })
  if(remove.data){
    window.location.assign("https://addrigo-app-f2f26b.netlify.app/cart")
  }
}
eradicate()
  
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
                 initializePayment(onSuccess, onClose )
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