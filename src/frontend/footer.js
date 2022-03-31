import React, { useState } from 'react';
import fb from '../images/fb.png'
import li from '../images/ln.png'
import ig from '../images/ig.png'
import tw from '../images/tw.png'
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
function Footer() {
    const [ color, setcolor ] = useState('lightblue'); 
    return(
        <div class = 'row bg-light'  style = {{marginTop:'50px'}}>
        <div class = 'col- sm-12 col-md-6 col-lg-6' style={{paddingLeft:'70px'}}>
            <ul style = {{marginTop:'50px'}}>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = 'contactUs' style = {{color:'black',marginBottom:'20px'}}>Contact Us</a>
                </li>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = 'marketingService' style = {{color:'black',marginBottom:'20px',marginBottom:'20px'}}>Marketing service</a>
                </li>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = 'pricing' style = {{color:'black',marginBottom:'20px'}}>Pricing</a>
                </li>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = 'aboutUs' style = {{color:'black',marginBottom:'20px'}}>About Us</a>
                </li>
                <div id = {styles.mobile_social}>
               <div id = {styles.rightFloat}>

               <div  id = {styles.partner}>
                   <a href = "#">
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,marginTop:'-6px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>Partners</button>
                   </a>
                 

               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                            <img id = {styles.socials} alt = "icon" src = {tw}/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                            <img id = {styles.socials} alt = "icon" src = {ig}/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                            <img id = {styles.socials} alt = "icon" src = {li}/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                            <img id = {styles.socials} alt = "icon" src = {fb}/>
                        </a>   
                   </center>
                
               </div>
               
                   
               </div>
              
            

           </div>

              
            </ul>


        </div>
        <div class = 'col-sm-12 col-md-6 col-lg-6'  style={{paddingLeft:'70px'}}>
        <ul style = {{marginTop:'50px'}}>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = '#' style = {{color:'black',marginBottom:'20px'}}>Sponsors</a>
                </li>
                <li class = 'nav nav-item'>
                    <a class = 'nav-link' href = '#' style = {{color:'black',marginBottom:'20px',marginBottom:'20px'}}>Contact Developer</a>
                </li>
               
              
            </ul>



        </div>

  
        </div>
    )
    
}export default Footer