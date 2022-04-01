import React, { useState } from 'react';
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import Basket from './basket'

import data from './data'
function Cart(props) {
    const { product } = data
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

        <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>
        <div style = {{marginLeft:'50px' , marginTop:'50px'}}>
                <Basket cartItems = {cartItems} onAdd= {onAdd}/>
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart