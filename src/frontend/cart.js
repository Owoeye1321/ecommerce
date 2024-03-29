import React, { useEffect, useState } from 'react';
import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcMastercard} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Cart() {
        const [products, setProducts ] = useState([])
        const [empty , setEmpty ] = useState()

     
        const eradicate = async (getId)=>{

                const remove = await axios.post('https://addrigo-api-1999.herokuapp.com/deleteProduce',{
                        productId:getId,
                        username:localStorage.getItem('username')
                })
                if(remove.data !== 'success'){
                        console.log('An error has occured')
                }
        }

        const add = async (produdctId)=>{ 
                const add = await axios.post('https://addrigo-api-1999.herokuapp.com/addProductQty',{
                        productId:produdctId,
                        username:localStorage.getItem('username')
                })
               
                if(add.data === 'success'){
                        console.log('Added successfully')
                }else {
                        console.log('An error was encountered')
                }
                
        }
        const remove = async (getId)=>{
                const remove = await axios.post('https://addrigo-api-1999.herokuapp.com/removeProductProperty',{
                        productId:getId,
                        username:localStorage.getItem('username')
                })
                if(remove.data === 'success'){
                        console.log("Removed successfully")
                }else{console.log("An error has occured") }
        }

        const cartSingle = async (getId ,totalPrice)=>{
            const productTotalPrice = totalPrice
            const productId = getId
            const sendPending = await axios.post('https://addrigo-api-1999.herokuapp.com/singlePayment',{
                    amount:productTotalPrice,
                    productId:productId,
                    username:localStorage.getItem('username')
            })
            localStorage.setItem('productId', productId)
            localStorage.setItem('amount', productTotalPrice)
            if(sendPending.data === 'exist') {
                      window.location.assign('simplePaystackPaymentPageForAddriggo');
                }
                  else if(sendPending.data === 'success') {
                         window.location.assign('simplePaystackPaymentPageForAddriggo');
                        }
          
        }


        useEffect(() =>{
                const fetchUserCarts = async ()=>{
                        const res = await axios.post('https://addrigo-api-1999.herokuapp.com/checkUser',{username:localStorage.getItem('username')})
                        if(res.data === "failed"){
                            window.location.assign("https://addrigo-app-f2f26b.netlify.app/login")
                
                        }else{
                           await axios.post('https://addrigo-api-1999.herokuapp.com/queryCart',{username:localStorage.getItem('username')}).then((res)=>{
                                setProducts(res.data)
                             //   console.log(res.data)
                                }).catch((err)=>{
                                        console.log('An error has occured' , err)
                                })
   
                        }

                }

                fetchUserCarts()
                // const interval = setInterval (()=>{
                //         fetchUserCarts()
                // },1000)
        
                // return()=>{
                //         clearInterval(interval)
                // }
        },[products])

    
    return(
    <div>

        <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>  
        <h3 style ={{marginLeft:'40px'}}>{empty}</h3>
          <div className='row' style = {{marginTop:'50px',marginLeft:'50px',paddingRight:'60px'}}>
        { products.length ? products.map((product)=>{
                
                //    const blob = new Blob([Int8Array.from(product.productImage.data.data)], {type: product.productImage.contentType });
                //    const image = window.URL.createObjectURL(blob);
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
                {( product.qty !== 0) ? <strong> <i>Qty     X   {product.qty} = #{product.totalPrice} </i></strong> : <i>Add quantity</i> }
                
                
                <br/>   <br/> 
                <button className = 'btn btn-warning' 
                  style = {{marginRight:'10px'}} 
                    onClick={()=>{remove(product.productId)}}>-
                </button>
                        <button  className = 'btn btn-primary' 
                              onClick={()=>{add(product.productId)}} 
                           style ={{marginRight:'10px'}}>+</button>
                                <button  className = 'btn btn-danger' 
                                  onClick={()=>{eradicate(product.productId)}}>Remove
                                  </button><br/>
                         <button onClick={()=>{cartSingle(product.productId , product.totalPrice)}} 
                                style ={{background:'lightgreen',
                                   marginRight:'20px', marginTop:'15px',
                                     border:'none',height:'40px',
                                  borderRadius:'10px',width:'100px',
                                color:'white'}}>
                <FontAwesomeIcon icon={faCartShopping} style ={{color:'white'}}   size = 'xl'/>  </button> 
                       <FontAwesomeIcon icon={faCcMastercard} style ={{color:'black',marginRight:'10px'}}   size = 'xl'/><i>MasterCard</i>
                

                </div>
                
                
                </div>
                        
                        )
                       
                    }):
                    <>
                    <h1>NO CART ITEMS</h1>
                    </>}
                    

                    
                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart