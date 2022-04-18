import React, { useEffect, useState } from 'react';
import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcMastercard} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Cart() {
        const [products, setProducts ] = useState([])
        const [empty , setEmpty ] = useState()


        const add = async (produdctId)=>{ 
                const add = await axios.post('/addProductQty',{
                        productId:produdctId
                })
                if(add.data = 'success'){
                        console.log('Added successfully')
                }else {
                        console.log('An error was encountered')
                }
                
        }
        const remove = async (getId)=>{
                const add = await axios.post('/removeProductProperty',{
                        productId:getId
                })
                if(add.data = 'success'){
                }else {
                        console.log('An error was encountered')
                }
        }
        const cartSingle = async (getId)=>{
                alert('carting single')
        }
        const cartAll = async (getId)=>{
                alert('carting all')
        }

        useEffect(() =>{
                
                const fetchUserCarts = async ()=>{
                        const res = await axios.get('/checkUser')
                        if(res.data === "invalid"){
                            window.location.assign("http://localhost:3000/login")
                
                        }else{
                                const response = await axios.get('/queryCart')
                                if(response.data.length > 0){
                                        console.log(response.data)
                                       setProducts(response.data)
                                        
                                }else{
                                        console.log(response)
                                        console.log('cart empty')
                                        setEmpty('Cart is empty')
                                }
                                
                        }
                    

                }
                const interval = setInterval (()=>{
                        fetchUserCarts()
                },1000)
        
                return()=>{
                        clearInterval(interval)
                }
        },[])
        
    
    return(
    <div>

        <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>  
        <h3 style ={{marginLeft:'40px'}}>{empty}</h3>
        <div className='row' style = {{marginTop:'50px',marginLeft:'50px',paddingRight:'60px'}}>
        {products.map((product)=>{
                        return(
                              
                              
                                        <div className='row' id = {Styles.productPrice}  key={product.productId}>
                                        <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                                        <img name = 'productImage'  alt = "icon" src =  {product.productImage}
                                                           style = {{width:'100%',height:'270px'}} />
                                
                                        
                                        </div>
                                        <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                                        <h3>{product.productName}</h3>
                                        <h4 style ={{color:'lightgreen'}}>#{product.productPrice}</h4>
                                        <p style = {{fontSize:'10px'}}>{product.productAbout}</p>
                                        <p style = {{fontSize:'10px'}}>{product.productContent}</p>
                                        {(product.qty !== 0) ?<strong> <i>Qty     X   {product.qty} = #{product.total} </i></strong> : <i>Add quantity</i> }
                                        
                                        
                                        <br/>   <br/> 
                                        <button className = 'btn btn-danger' style = {{marginRight:'10px'}} onClick={()=>{remove(product.productId)}}>-</button>
                                        <button  className = 'btn btn-primary' onClick={()=>{add(product.productId)}}>+</button><br/>
                                        <button onClick={()=>{cartSingle(product.productId)}} style ={{background:'lightgreen',marginRight:'20px', marginTop:'15px', border:'none',height:'40px',borderRadius:'10px',width:'100px',color:'white'}}>
                                        <FontAwesomeIcon icon={faCartShopping} style ={{color:'white'}}   size = 'xl'/>  </button> 
                                        <FontAwesomeIcon icon={faCcMastercard} style ={{color:'black'}}   size = 'xl'/><i>MasterCard</i>
                                        

                                        </div>
                                       
                                      
                                    </div>
                        
                        )
                       
                    })}
                      <button onClick={()=>{cartAll()}} style ={{background:'lightgreen',marginTop:'30px', border:'none',height:'40px',borderRadius:'10px',marginRight:'30px',color:'white'}}>
                      <FontAwesomeIcon icon={faCartShopping} style ={{color:'white'}}   size = 'xl'/>
                      </button>
                    
                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart