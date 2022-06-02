import React, { useState } from 'react';
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook, faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";


 
function Footer() {
    const [ color, setcolor ] = useState('lightblue'); 
    return(
        <div className = ' bg-dark'  style = {{marginTop:'50px',width:'100%'}}>
            <div className='row'  >
                
          
        <div className = 'col- sm-12 col-md-6 col-lg-6'>
            <ul style = {{marginTop:'50px'}}>
                <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = 'contactUs' style = {{marginBottom:'0px',color:'white',fontSize:'25px'}}>Contact Us</a>
                </li>
                <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = 'marketingService' style = {{color:'black',marginBottom:'0px'}}>Marketing service</a>
                </li>
                <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = 'pricing' style = {{color:'black',marginBottom:'0px'}}>Pricing</a>
                </li>
                <div id =  {styles.loot}>
                <li> 
                <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faTwitterSquare} style ={{color:'lightgreen'}} size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faInstagramSquare} style ={{color:'lightgreen'}}  size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faLinkedin} style ={{color:'lightgreen'}}  size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faFacebook} style ={{color:'lightgreen'}}   size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
            
                </li>
                </div>
              
                <div id = {styles.mobile_social} >
               <div style ={{marginTop:'-10px'}}>

               <div  id = {styles.partner} style = {{float:'left'}} >
                   <a href = "#">
                      <button  className='btn btn-light' style = 
                      {{borderRadius : "40px" ,width: "150px",border:'none',
                      background:color,height:'40px'}} onMouseEnter ={()=>{
                          setcolor('lightgreen')
                      }} onMouseLeave = {() =>{
                          setcolor('lightblue')
                      }}>Partners</button>
                   </a>
                   <br/>
                 

               </div>
               
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faTwitterSquare} style ={{color:'lightgreen'}} size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faInstagramSquare} style ={{color:'lightgreen'}}  size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faLinkedin} style ={{color:'lightgreen'}}  size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               <div id = {styles.social_div}>
                   <center>
                        <a href = "#">
                        <FontAwesomeIcon icon={faFacebook} style ={{color:'lightgreen'}}   size = 'xl'/>
                        </a>   
                   </center>
                
               </div>
               </div>
               
                   
              
              
            

           </div>

              
            </ul>


        </div>
        <div className = 'col-sm-12 col-md-6 col-lg-6 '>
        <ul style = {{marginTop:'50px'}}>
        <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = 'aboutUs' style = {{color:'black',marginBottom:'0px',color:'white',fontSize:'25px'}}>About Us</a>
                </li>
                <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = 'login' style = {{color:'black',marginBottom:'0px'}}>Login</a>
                </li>

                <li className = 'nav nav-item'>
                    <a className = 'nav-link' href = '#' style = {{color:'black',marginBottom:'0px'}}>Contact Developer</a>
                </li>
              
            </ul>



        </div>
        </div>

  
        </div>
    )
    
}export default Footer