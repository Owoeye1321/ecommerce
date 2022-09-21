import React, { useState } from 'react';
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook, faLinkedin, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";

function Social() {
   const [ color, setcolor ] = useState('lightblue'); 
    return(
      
           <div id = {styles.desktop_social}>
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
                        <a href = "https://twitter.com/owoeye1321">
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
                        <a href = "https://www.linkedin.com/in/owoeye-samuel-72612918a/">
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

         
       
      
    )
}
export default Social;