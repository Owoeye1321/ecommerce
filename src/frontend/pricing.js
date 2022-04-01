import Styles from './style.module.css'
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import Product from './product';
import 'bootstrap/dist/css/bootstrap.min.css'
function Pricing(props) {
    const { products, onAdd } = props
   

    return( 
        <div>

            <Social />
            <Logo/>
            <Nav/>

            <div id = {Styles.pricingDiv}>
                <p style ={{fontSize:'40px',color:'white'}}> Addriggo foods shop</p>
                <p style ={{fontSize:'20px',color:'white'}}>Purchase your food variety today </p>
                
                

            </div>
            <div>
                    {products.map((product)=>{
                        return(
                         <Product key = {product.id} product = {product} onAdd = {onAdd}></Product>
                        )
                       
                    })}

                </div>
           
           
           
                        

            <Footer/>

        </div>

    )
    
}export default Pricing