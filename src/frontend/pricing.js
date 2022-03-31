import React, { useState } from 'react';
import bagOfRice from '../images/riceone.jpg'
import spag from '../images/images-8.jpg'
import indomie from '../images/indomie_one.jpg'
import palmOil from '../images/oil_two.jpg'
import kegOil from '../images/oil_four.jpg'
import semo from '../images/semo_two.jpg'
import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
function Pricing(props) {
    const [ color, setcolor ] = useState('lightblue'); 

    // handleCart = (e)=>{
    //     const{value} =  e.target.value
    //     console.log(value)  
    // }
    return( 
        <div>
            <div class = 'bg-light' style = {{paddingBottom:'10px'}}>

            <Social />
            <Logo/>
            <Nav/>
            </div>


            <div id = {Styles.pricingDiv}>
                <p style ={{fontSize:'40px',color:'white'}}> Addriggo foods shop</p>
                <p style ={{fontSize:'20px',color:'white'}}>Purchase your food variety today </p>
                

            </div>
           
            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {kegOil} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> Groundnut Oil  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#25,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
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
            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {palmOil} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> Palm oil  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#25,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>ADD TO CART</button>
                 

                </div>
            </div>


            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {indomie} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> Indomie  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#3,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>ADD TO CART</button>
                 

                </div>
            </div>

            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {semo} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> semo  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#12,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>ADD TO CART</button>
                 

                </div>
            </div>

            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {bagOfRice} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> Rice  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#30,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>ADD TO CART</button>
                 

                </div>
            </div>

            <div className='row' id = {Styles.productPrice}>
                <div className='row-sm-12 col-md-5 col-lg-5' id = {Styles.productImage}>
                <img  alt = "icon" src = {spag} 
            style = {{width:'100%',height:'200px',marginLeft:'12px'}} />
            
                 
                </div>
                <div className='row-sm-12 col-md-7 col-lg-7' id = {Styles.productContent}>
                    <h3> Spaggetti  sales</h3>
                    <h4 style ={{color:'lightgreen'}}>#6,000</h4>
                    <p style = {{fontSize:'10px'}}>All desired quanities are available at better price if you make a demand today<br/> click add to cart to purchase product</p>
                 
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>ADD TO CART</button>
                 

                </div>
            </div>
           
                        

            <Footer/>

        </div>

    )
    
}export default Pricing