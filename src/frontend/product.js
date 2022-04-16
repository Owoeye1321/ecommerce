import Styles from './style.module.css'
import React, { useState } from 'react';
import axios from 'axios';
export default function Product(props) {
    const [ color, setcolor ] = useState('lightblue'); 
    const {product , onAdd} = props

    const verify_and_Add_key = async()=>{
        const response = await axios.get('/checkUser')
        if(response.data === "invalid"){
            window.location.assign("http://localhost:3000/login")

        }else if(response.data = "valid")
        {
          

            const addToCart = await axios.post('/addToCart',{
                productId:product.id,
                productName:product.name,
                productPrice:product.price,
                productImage:product.image,
                productContent:product.otherContent,
                productAbout:product.aboutProduct
            })
            if(addToCart.data === "success"){
                alert(" Item added, Kindly proceed to cart and purchase item ")
                window.location.assign("http://localhost:3000/cart")
            }else(
                console.log(addToCart)
            )
        }
      
       
        
    }

    return(

    <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img name = 'productImage'  alt = "icon" src =  {product.image}
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3>{product.name}</h3>
                    <h4 style ={{color:'lightgreen'}}>${product.price}</h4>
                    <p style = {{fontSize:'10px'}}>{product.aboutProduct}</p>
                    <p style = {{fontSize:'10px'}}>{product.otherContent}</p>
                 
                      <button value = 'oil'  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}
                      onClick={()=>{verify_and_Add_key()}}
                      >ADD TO CART</button>
                 

                </div>
    </div>
    )
    
}
