import Styles from './style.module.css'
import React, { useState } from 'react';
export default function Product(props) {
    const [ color, setcolor ] = useState('lightblue'); 

    const {product} = props
    return(

    <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src =  {product.image}
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
                      >ADD TO CART</button>
                 

                </div>
    </div>
    )
    
}
