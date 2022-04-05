import bagRice from '../images/bag_rice.jpg'
import indomie from '../images/indomie_one.jpg'
import kegOil from '../images/oil_four.jpg'
import React, { useState } from 'react';
import Styles from './style.module.css'
import Rice from  '../images/rice_two.jpg'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
function FurtherContent() {

    const [opacity, setOpacity]= useState(1)
    const [color, setColor ] = useState('white')
 
    return (
        <div>
            <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                    <Social />
                    <Logo/>
                    <Nav/>
            </div>
              <div className='row' id = {Styles.container}>
            <div className='col-sm-12 col-md-7 col-lg-7' id = {Styles.changeBackground}>
                    <center>
                        <p id = {Styles.intro}>THERE IS A BETTER WAY TO ACHIEVE YOUR NUTRIENT SATISFACTION GOALS.</p>
                        <h3 id = {Styles.mobile_coont}> Nutrient Satisfaction Goals</h3>
                      <div id = {Styles.adjust}>
                        <a href = "marketingService">
                                 <button className='btn btn' 
                                 style = {{borderRadius : "40px" ,
                                 width: "170px" , border:'1px solid white', 
                                 color:color}}
                                 onMouseEnter = {()=>{
                                     setColor('black')
                                 }}onMouseLeave = {()=>{
                                     setColor('white')
                                 }}
                                 >Start Here</button>
                        </a>
                        </div>
                 
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
              <div id = {Styles.firstContent}>
            <center>
                <strong id = {Styles.contentHead}> The best agricultural processed product<span style={{color:'lightgreen'}}>  available  </span>  for consumption</strong>
                <p id = {Styles.note}>Addriggo foods marketing strategies are smarter, more intuitive, and big data-based, with in-depth analysis of<br/>
                competitors and the market .Addriggo product provides more actionable insights into how to optimize your nutrient plan. Addriggo chips guarantee you that<br/>
                you will receive the best protein possible satisfaction goal with the added benefits of quantity size.</p>
            </center>
            

        </div>
            <div id = {Styles.FurtherContent} className = 'row bg-light'>
                    <div className='col-sm-12 col-md-4 col-lg-4' id = {Styles.designContent}>
                        <div  id = {Styles.mainDesign}>
                            <center>
                            <div id = {Styles.greenDiv}>
                                    
                            </div>
                            </center>
                                
                                <div  id = {Styles.designImage}>
                                    <img alt = "icon" src = {bagRice} style = {{width:'100%',height:'100%'}}
                                    />
                                </div>
                                <center>
                                <p id = {Styles.productName}>Rice Marketing</p>
                                <p id = {Styles.additionalText}> Imported quality rice at affordable price</p>
                                <hr style ={{width:'80%',marginTop:'50px'}}/>
                                </center>
                               
                        </div>


                   </div>
                           <div className='col-sm-12 col-md-4  col-lg-4' id = {Styles.designContent}>
                        <div  id = {Styles.mainDesign}>
                                <div id = {Styles.greenDiv}>
                                    
                                </div>
                                <div  id = {Styles.designImage}>
                                    <img alt = "icon" src = {indomie} style = {{width:'100%',height:'100%'}}
                                    />
                                </div>
                                <center>
                                <p id = {Styles.productName}>Indomie Marketing</p>
                                <p id = {Styles.additionalText}> Quality indomie at affordable price</p>
                                <hr style ={{width:'80%',marginTop:'50px'}}/>
                                </center>
                               
                        </div>


                   </div>
                   <div className='col-sm-12 col-md-4  col-lg-4' id = {Styles.designContent}>
                        <div  id = {Styles.mainDesign}>
                                <div id = {Styles.greenDiv}>
                                    
                                </div>
                                <div  id = {Styles.designImage}>
                                    <img alt = "icon" src = {kegOil} style = {{width:'100%',height:'100%'}}
                                    />
                                </div>
                                <center>
                                <p id = {Styles.productName}>Oil Marketing</p>
                                <p id = {Styles.additionalText}> Processed oils at affordable price</p>
                                <hr style ={{width:'80%',marginTop:'50px'}}/>
                                </center>
                               
                        </div>


                   </div>
                  
                   

                </div>
                <br/>
                
                <div id = {Styles.OtherContent}>
            <center>
            <p id = {Styles.contentHead}>How Addrigo foods can give better supply results from your demand</p>
            <p>There has never been a better time to take your business to the next level. While many companies still spend weeks or months putting together their yearly <br/>
            marketing strategies, our marketing consultants are skilled in using technology that can do this for you in a matter of minutes. Not only will you have the<br/>
            marketing strategy to promote your brand in the market, you will have all the key recommendations on a marketing plan that outlines what marketing <br/>
            activities your company needs to do to achieve your desired results.</p>

            </center>
           
        </div>
        <div id = {Styles.cool}>

</div>
<div className = 'row' >
            <div className = 'col-sm-12 col-md-6 col-lg-6' id = {StyleSheet.OurMission}>
                <center>
                <p id = {Styles.bigText}>Our mission</p>
                </center>
                   
            </div>
            <div className = 'col-sm-12 col-md-6 col-lg-6' >
               
                <p id = {Styles.note} style = {{padding :'10px 10px 10px 10px'}}>Addriggo foods marketing strategies are smarter, more intuitive, and big data-based, with in-depth analysis of
                competitors and the market .Addriggo product provides more actionable insights into how to optimize your nutrient plan. Addriggo chips guarantee you that
                you will receive the best protein possible satisfaction goal with the added benefits of quantity size.</p>

            </div>

        </div>
      
        <Footer/>

        </div>
                
    )
    
}export default FurtherContent