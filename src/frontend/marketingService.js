
import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function MarketingService() {
    return(
        <div>
  <div class = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
  </div>
            <div id = {Styles.Marketdiv}>
                               
               <p id = {Styles.introducing} style = {{color:'lightgreen',marginLeft:'12px',marginBottom:'20px'}}>Marketing Service</p>
                               
             </div>
             <div className = 'row' >
            <div className = 'col-sm-12 col-md-6 col-lg-6' id = {StyleSheet.OurMission}>
                <center>
                <p style = {{fontSize:'20px',marginTop:'40px'}}>A Customized <span style = {{color:'lightgreen'}}>Marketing Strategy</span> For Improved<br/> Marketing Performance</p>
                </center>
                   
            </div>
            <div className = 'col-sm-12 col-md-6 col-lg-6' style = {{width:'90%',marginLeft:'4%'}}>
               
                <p id = {Styles.note} style = {{fontSize:'15px'}}>Addriggo foods marketing strategies are smarter, more intuitive, and big data-based, with in-depth analysis of
                competitors and the market .Addriggo product provides more actionable insights into how to optimize your nutrient plan. Addriggo chips guarantee you that
                you will receive the best protein possible satisfaction goal with the added benefits of quantity size.</p>

            </div>

        </div>

        <div className = "row" style={{marginTop: '50px', marginBottom:'80px',backgroundColor:'lightgreen',padding:'10px 10px 10px 10px'}}>
<center style={{marginTop:'30px'}}>
    <p id ={Styles.establish} style = {{color:'white',fontSize:'25px'}}>Establish your nutrient satisfaction through<br/>  our available product</p>
</center>

    <div className ="col-sm-12 col-md-3 col-lg-3">
    <center>  
        <p>Rice</p>
        <p>Beans</p>
        <p>Spaggetti</p>

        </center>
   
</div>
           
    <div  className ="col-sm-12 col-md-3 col-lg-3" >
    <center>  
        <p>Indomie</p>
        <p>Palm Oil</p>
        <p>Groundnut Oil</p>

        </center>
      
   
    </div>
    <div  className ="col-sm-12 col-md-3 col-lg-3" >
    <center>                                                                                         
        <p>Semo</p>                                        
        <p>Garri</p>
        <p>Addriggo chips</p>

        </center>
      </div>
      <div  className ="col-sm-12 col-md-3 col-lg-3" >
      <center>  
        <p>Egg</p>
        <p>Plantain</p>
        <p>Food Addictives</p>

        </center>
   
      </div>

</div>

        <Footer/>
        </div>
    )
    
}export default MarketingService