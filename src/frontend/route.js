import {HashRouter , Route } from 'react-router-dom'
import React, {useState} from 'react';
import Home from './home';
import Cart from './cart'
import About from './aboutUs'
import Pricing from './pricing';
import ContactUs from './contactUs';
import MarketingService from './marketingService';
//import Main from './main'
import data from './data'


function MyAppRouting() {
    const { products } = data

    const { cartItems, setCartItems } = useState([]);
    const onAdd = (product) =>{
        const exist = cartItems.find(x => x.id === product.id);
        if (exist)
        {
                setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 } : x))
        }
        else{
                setCartItems([...cartItems, {...product,qty:1}])
        }
    }
    return(
       
       
        
            <HashRouter> 

           <Home/>
            {/* <Route path='/aboutUs'  component = {About}/>
               
                <Route path='/marketingService' component = {MarketingService}/>
                
                <Route path='/pricing'>
                    <Pricing key = {products.id} products = {products} onAdd= {onAdd}/>
                
                </Route>
                 
                <Route  path="/contactUs"  component = {ContactUs}/>

                <Route  path="/cart"  component = {Cart}/> */}

                  
            
            </HashRouter>
         
               
      
    )
    
}
export default MyAppRouting;