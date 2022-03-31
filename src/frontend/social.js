import React, { useState } from 'react';
import fb from '../images/fb.png'
import li from '../images/ln.png'
import ig from '../images/ig.png'
import tw from '../images/tw.png'
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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

         
       
      
    )
}
export default Social;