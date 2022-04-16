import React, { useEffect, useState } from 'react';
import Styles from './style.module.css'
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
                              
                              
                                        <div className='row' id = {Styles.productPrice}  key={product.productId}>
                                        <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                                        <img name = 'productImage'  alt = "icon" src =  {product.productImage}
                                                           style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
                                
                                        
                                        </div>
                                        <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                                        <h3>{product.productName}</h3>
                                        <h4 style ={{color:'lightgreen'}}>${product.productPrice}</h4>
                                        <p style = {{fontSize:'10px'}}>{product.productAbout}</p>
                                        <p style = {{fontSize:'10px'}}>{product.productContent}</p>
                                        
                                
                                        

                                        </div>
                                    </div>
                        
                        )
                       
                    })}
             
                

                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart