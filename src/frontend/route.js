import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Home from './home';
import Cart from './cart'
import About from './aboutUs'
import Pricing from './pricing';
import ContactUs from './contactUs';
import MarketingService from './marketingService';
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
       <div>
       
        
            <Router> 
              
                    <Routes>

                <Route exact path = '/' element = {<Home />}/>

           
               <Route path='/aboutUs'  element = {<About/>}/>
               
                <Route path='/marketingService' element = {<MarketingService/>}/>
                
            
                    <Route path='/pricing'  element = {< Pricing  key = {products.id} products = {products} onAdd= {onAdd}/> }/>
                
                 
                <Route  path="/contactUs"  element = {<ContactUs/>}/>

                <Route  path="/cart"  element = {<Cart/>}/>

                </Routes>

         
                

            
            </Router>
         
            </div>
               
      
    )
    
}
export default MyAppRouting;