import React, { useEffect, useState } from 'react';
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import axios from 'axios';
function Cart() {
        const [products, setProducts ] = useState([])

        useEffect(() =>{
             
                const fetchUserCarts = async ()=>{
                        const res = await axios.get('/checkUser')
                        if(res.data === "invalid"){
                            window.location.assign("http://localhost:3000/login")
                
                        }else{
                                const response = await axios.get('/queryCart')
                                if(response){
                                        console.log(response.data)
                                       setProducts(response.data)
                                        
                                }
                                
                        }
                    

                }
                fetchUserCarts()
        },[])
        
    
    return(
    <div>

        <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>
        <div className='row' style = {{marginTop:'50px',marginLeft:'50px'}} >
        {products.map((product)=>{
                        return(
                                <li key={product.productId}> 
                                <a href='#'>{product.productName}</a>
                                <img alt ='icon' src={product.productImage}/>
                                </li>
                        )
                       
                    })}
             
                

                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart