import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
function Cart(props) {
    return(
        <div>

<div class = 'bg-light' style = {{paddingBottom:'10px'}}>

        <Social />
        <Logo/>
        <Nav/>
</div>
            <Footer/>
        </div>
    )
    
}export default Cart