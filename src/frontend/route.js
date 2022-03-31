import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home';
import Cart from './cart'
import About from './aboutUs'
import Pricing from './pricing';
import ContactUs from './contactUs';
import MarketingService from './marketingService';


function MyAppRouting() {
    return(
        <React.Fragment>
        <Router>
            <Routes> 
            <Route exact path='' element = {<Home/>}/>
            <Route path='/aboutUs'  element = {<About/>}/>
               
                <Route path='/marketingService' element = {<MarketingService/>}/>
                
                <Route path='/pricing' element = {<Pricing/>}/>
                 
                <Route  path="/contactUs"  element = {<ContactUs/>}/>

                <Route  path="/cart"  element = {<Cart/>}/>

                  
            
            </Routes>
           </Router>

           </React.Fragment>
     
               
      
    )
    
}
export default MyAppRouting;