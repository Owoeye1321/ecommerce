import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import React from 'react';
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
    return(
       
        <React.Fragment>
        <Router>
            <Routes> 
            <Route exact path='' element = {<Home/>}/>
            <Route path='/aboutUs'  element = {<About/>}/>
               
                <Route path='/marketingService' element = {<MarketingService/>}/>
                
                <Route path='/pricing' element = {<Pricing key = {products.id} products = {products}/>}/>
                 
                <Route  path="/contactUs"  element = {<ContactUs/>}/>

                <Route  path="/cart"  element = {<Cart/>}/>

                  
            
            </Routes>
           </Router>

           </React.Fragment>
     
               
      
    )
    
}
export default MyAppRouting;