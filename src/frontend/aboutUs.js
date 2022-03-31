
import kegOil from '../images/oil_four.jpg'
import Social from './social'
import Nav from './nav'
import Styles from './style.module.css'
import Logo from './logo'
import Footer from './footer'
function AboutUs() {
    return(
            <div > 
                  <Social />
                    <Logo/>
                    <Nav/>
                    <div className='row' id = {Styles.about}>
                                <div className='col-sm-12 col-md-12 col-lg-12'>
                                        <center>
                                            <p id = {Styles.intro} style = {{marginBottom:'100px'}}>Supplying agricultural product Faster and Smarter Than Ever Before.</p>
                                        
                                        

                                        </center>
                                </div>
                                <div className='col-sm-12 col-md-12 col-lg-12 bg-light'  >
                            
                                <div id = {StyleSheet.aboutMission}>
                                    <center>
                                    <p id = {Styles.bigText} style = {{color:'lightgreen'}}>Our mission</p>
                                    </center>
                                    
                                </div>
                                <div  >
                                    <center>
                                    <p id = {Styles.aboutNote}>To provide you with a<span style = {{color:'lightgreen'}}>marketing strategy </span> that is more in-depth and useful than ever before.<br/> <span style = {{color:'lightgreen'}}>with in-depth analysis of
                                    competitors and the market </span>.Addriggo product provides more actionable insights into how to optimize your nutrient plan. <br/>Addriggo chips guarantee youthat
                                    you will receive the best protein possible satisfaction goal with the added benefits of quantity size.</p>


                                    </center>
                                
                                
                                </div>

                                </div>

                    </div>
                    <div className='row'>
                    <div className ='col-sm-12 col-md-6 col-lg-6 ' >
                                    <div style = {{margin:'100px 30px 30px 30px'}}>
                                        <center>
                                        <img alt = "icon" src = {kegOil} style = {{width:'300px',height:'270px',borderRadius:'50%'}}/>
                                        <p style = {{marginTop:'20px'}}> Founder :  NAME</p>

                                        </center>
                                   

                                    </div>
                                </div>
                                <div className ='col-sm-12 col-md-6 col-lg-6'>
                                           <div style = {{marginLeft:'30px',marginRight:'88px'}}>
                                           <p style = {{color:'lightgreen',fontSize:'25px',marginTop:'30px'}}>About Addriggo Foods</p>
                                                <p id = {Styles.aboutNote}>RObOTIC Marketer Is a world-first marketing strategy software that Is based on artificia
                                                machine learning and software robotics, her outsourced marketing consulting agency
                                                        Marketing Eye would be able to produce over 350 marketing strategies per year at a higher<br/><br/>
                                                Three years ago, the founder Mellissan Smith came up with the Idea that througn Al
                                                        machine learning and software robotics, her outsourced marketing consulting agency
                                                        Marketing Eye would be able to produce over 350 marketing strategies per year at a higher
                                                        standard., more data-driven and results-orientated than ever betore
                                                        <br/><br/>
                                                Three years ago, the founder Mellissan Smith came up with the Idea that througn Al
                                                        machine learning and software robotics, her outsourced marketing consulting agency
                                                        Marketing Eye would be able to produce over 350 marketing strategies per year at a higher
                                                        standard., more data-driven and results-orientated than ever betore
                                                        
                                                        <br/><br/>
                                                Three years ago, the founder Mellissan Smith came up with the Idea that througn Al
                                                        machine learning and software robotics, her outsourced marketing consulting agency
                                                        Marketing Eye would be able to produce over 350 marketing strategies per year at a higher
                                                        standard., more data-driven and results-orientated than ever betore
                                                        
                                                        <br/><br/>
                                                Three years ago, the founder Mellissan Smith came up with the Idea that througn Al
                                                        machine learning and software robotics, her outsourced marketing consulting agency
                                                        Marketing Eye would be able to produce over 350 marketing strategies per year at a higher
                                                        standard., more data-driven and results-orientated than ever betore</p>
                                              
                                           
                                           </div>
                                             
                                       
                                </div>
                              

                    </div>

                    <Footer/>
            </div>
    )
    
}export default AboutUs