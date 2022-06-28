import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './home';
import Cart from './cart'
import About from './aboutUs'
import Pricing from './pricing';
import ContactUs from './contactUs';
import Login from './login'
import SignUp from './signUp'
import MarketingService from './marketingService';
import data from './data'
import App from './paystack';
//import { AnimatePresence } from 'framer-motion/dist/framer-motion'



function AnimateRouter() {   
    const { products } = data
    const location = useLocation()

  
    return(
       <div>
                    <Routes location={location} key = {location.pathname}>

                <Route exact path = '/' element = {<Home />}/>

           
               <Route path='/aboutUs'  element = {<About/>}/>
               
                <Route path='/marketingService' element = {<MarketingService/>}/>
                
            
                    <Route path='/pricing'  element = {< Pricing  key = {products.id} products = {products} /> }/>
                
                 
                <Route  path="/contactUs"  element = {<ContactUs/>}/>

                <Route  path="/cart"  element = {<Cart/>}/>

                <Route  path="/login"  element = {<Login/>}/>

                <Route  path="/signUp"  element = {<SignUp/>}/>
                <Route  path="/simplePaystackPaymentPageForAddriggo"  element = {<App/>}/>

                </Routes>
            </div>
               
    )
    
}
export default AnimateRouter;