import React, { useState } from 'react';
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import Basket from './basket'
function Cart(props) {
    const { cartItems, setCartItems } = useState([]);
    return(
    <div>

        <div class = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>
        <div style = {{marginLeft:'50px' , marginTop:'50px'}}>
                <Basket cartItems = {cartItems}/>
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart