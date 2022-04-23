import React, { useEffect, useState } from 'react';
import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcMastercard} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { usePaystackPayment } from 'react-paystack';
function Cart() {
        const [products, setProducts ] = useState([])
        const [total , setTotal ] = useState([])
        const [empty , setEmpty ] = useState()
        const [sum , setSum ] = useState()

     
        const eradicate = async (getId)=>{

                const remove = await axios.post('/deleteProduce',{
                        productId:getId
                })
                if(remove.data){
                        console.log('An error has occured')
                }
        }

        const add = async (produdctId)=>{ 
                const add = await axios.post('/addProductQty',{
                        productId:produdctId
                })
                if(add.data == 'success'){
                        console.log('Added successfully')
                }else {
                        console.log('An error was encountered')
                }
                
        }
        const remove = async (getId)=>{
                const remove = await axios.post('/removeProductProperty',{
                        productId:getId
                })
                if(remove.data == 'success'){
                }else {
                        console.log('An error was encountered')
                }
        }
        const cartSingle = async (getId ,totalPrice)=>{
            const productTotalPrice = totalPrice
            const productId = getId
            const sendPending = await axios.post('/singlePayment',{
                    amount:productTotalPrice,
                    productId:productId
            })
            if(sendPending.data == 'success') window.location.assign('payment');
          
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
                                       setProducts(response.data)
                                       for (let index = 0; index < products.length; index++) {
                                       if(products[index].total !== ''){
                                        setTotal(total[index] = parseInt(products[index].total))
                                       const resume = total.reduce((pre, current,index)=> pre + current,0)
                                      setSum(resume)
                                      console.log(resume)

                                       }
                                      
                                }
                                        
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
                                        <button className = 'btn btn-warning' style = {{marginRight:'10px'}} onClick={()=>{remove(product.productId)}}>-</button>
                                        <button  className = 'btn btn-primary' onClick={()=>{add(product.productId)}} style ={{marginRight:'10px'}}>+</button>
                                        <button  className = 'btn btn-danger' onClick={()=>{eradicate(product.productId)}}>Remove</button><br/>
                                        <button onClick={()=>{cartSingle(product.productId , product.total)}} style ={{background:'lightgreen',marginRight:'20px', marginTop:'15px', border:'none',height:'40px',borderRadius:'10px',width:'100px',color:'white'}}>
                                        <FontAwesomeIcon icon={faCartShopping} style ={{color:'white'}}   size = 'xl'/>  </button> 
                                        <FontAwesomeIcon icon={faCcMastercard} style ={{color:'black',marginRight:'10px'}}   size = 'xl'/><i>MasterCard</i>
                                        

                                        </div>
                                       
                                      
                                    </div>
                        
                        )
                       
                    })}

                    
                    <center><br/>
                    
                        {(sum) ? <p>Total:#{sum}</p> : <p><FontAwesomeIcon  icon={faSpinner} style ={{color:'black'}}   size = 'xl'/></p>}
                        </center>
                      <button id = {Styles.favorites} onClick={()=>{cartAll()}} style ={{background:'lightgreen',marginTop:'30px', border:'none',height:'40px',borderRadius:'10px',marginRight:'30px',color:'white'}}>
                      <FontAwesomeIcon icon={faCartShopping} style ={{color:'white'}}   size = 'xl'/>
                      </button>
                    
                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart