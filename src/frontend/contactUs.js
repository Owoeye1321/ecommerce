import Footer from './footer'
import React, { useState } from 'react';
import Social from './social'
import Rice from  '../images/one.jpeg'
import Styles from './style.module.css'
import Nav from './nav'
import Logo from './logo'
function ContactUs() {

    const [ color, setcolor ] = useState('black'); 
    const [opacity, setOpacity]= useState(1)
    return(
        <div>
            

            <div class = 'bg-light' style = {{paddingBottom:'10px'}}>

                    <Social />
                    <Logo/>
                    <Nav/>
            </div>
            <div className='row' id = {Styles.container}>
            <div className='col-sm-12 col-md-7 col-lg-7' >
                    <center>
                        <p id = {Styles.intro}>THERE IS A BETTER WAY TO ACHIEVE YOUR NUTRIENT SATISFACTION GOALS.</p>
                      
                        <a href = "marketingService">
                                 <button className='btn btn' 
                                 style = {{borderRadius : "40px" ,
                                 width: "170px" , border:'1px solid white',
                                 color:color}} onMouseEnter = {()=>{
                                     setcolor('white')
                                 }} onMouseLeave={()=>{
                                     setcolor('black')
                                 }}>Start Here</button>
                        </a>
                 
                    </center>
            </div>
            <div className='col-sm-12 col-md-5 col-lg-5' id = {Styles.takeMe}>
            <img  alt = "icon" src = {Rice} 
            style = {{width:'100%',height:'400px',opacity:opacity,marginLeft:'12px'}}
            onMouseEnter ={()=>{
                setOpacity(0.9)
            }} onMouseLeave = {()=>{
                setOpacity(1)
            }}/>
            





            </div>

        </div>

        <div id = {Styles.emptydiv}>
            <center>
        <p id = {Styles.bigPhrase}>Contact  <span id = {Styles.us}>  Us</span> </p>

            </center>
         
        </div>
 <div className = 'row' style={{marginTop: '30px;'}}>
                    <div className ="col-sm-12 col-md-6 col-lg-6" style = {{paddingTop:'80px',paddingLeft:'60px'}}>
                            <strong style = {{color:'black',fontSize:'35px'}}>Address</strong>
                            <p>Factory Address is at plot H 1-3,t<br/>Adriggo Road,<br/> Maigida Harmony  Estate,e<br/>Amoyo.</p>
                            <p style = {{color:'black',fontSize:'35px',font:'lighter',marginTop:'30px'}}>Email</p><br/>
                            <p  style = {{color:'black',fontSize:'25px',marginBottom:'-5px'}}>Sponsors</p>
                            <a href ="https://www.Owoeye1321@gmail.com" style = {{color:'blue',fontSize:'18px',textDecoration:'none'}}>Owoeye1321@gmail.com</a><br/><br/>
                            <p  style = {{color:'black',fontSize:'20px',marginBottom:'5px'}}>Wholesales order</p>
                            <a href ="https://www.Owoeye1321@gmail.com"   style = {{color:'blue',fontSize:'18px',textDecoration:'none'}}>Owoeye1321@gmail.com</a><br/><br/>

                     </div>

                     <div className ="col-sm-12 col-md-6 col-lg-6" style = {{padding:'150px 40px 20px 40px'}}>
                            <form method="POST" action="#" enctype ="multipart/form-data">
                                <input className="form-control" type="text" required placeholder="Full name"  name="fullname" style={{marginBottom: '10px;',borderRadius:'5px'}}/><br/>
                            <input className="form-control" type="text" required placeholder="Phone" name="phone" style= {{borderRadius:'5px',marginBottom: '10px'}}/>
                            <input className="form-control" type="email" required placeholder="Email" name="email" style= {{borderRadius:'5px',marginBottom: '10px'}}/>
                            <textarea name ="message" placeholder= "Address" className ="form-control"></textarea><br/>
                            <input className ="btn btn-outline-primary" type="submit" value="Submit" name="submit" 
                            style={{width: '195px',borderRadius:'5px',float: 'left',boxShadow:' 2px 2px 2px 2px lightblue'}}/><br/>
                
                            </form>

                     </div>
          

  </div>

            <Footer/>
            
        </div>
    )
}export default ContactUs