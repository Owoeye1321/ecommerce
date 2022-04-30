import Styles from './style.module.css'
import two from  '../images/two.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,  Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Navigation() {
 // const [ background, setBackground ] = useState('') 
    return (
        <div  id = {Styles.navContainer} >
        
    
<Navbar collapseOnSelect expand="lg" className='sticky-top '  id = {Styles.nav} >
                <Navbar.Brand href="/" style = {{marginLeft:'50px'}} id ={Styles.change}>Home</Navbar.Brand>

                <Navbar.Brand   href="/">
                <div id = {Styles.logo_div_mobile}>
        <div id = {Styles.leftFloat}>
            <img id = {Styles.logo} alt = "icon" src = {two} style ={{height:'40px',width:'40px',marginRight:'10px'}}/>
        </div>

        <div id = {Styles.rightFloat} style = {{marginTop:'5px',color:'white'}}>
          <strong id = {Styles.name} >ADDRIGGO FOODS</strong>

        </div>


        
    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style = {{marginRight:'10px'}}/>
                <Navbar.Collapse id="responsive-navbar-nav" style = {{marginLeft:'50px'}}>
                    <Nav style = {{marginLeft:'auto',marginRight:'75px'}}>
                        <Nav.Link href="aboutUs"> About Us</Nav.Link>
                        <Nav.Link href="marketingService">Marketing Service</Nav.Link>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                        <Nav.Link eventKey={2} href="contactUs">
                        Contact Us
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="cart">
                       
                        <FontAwesomeIcon icon={faCartShopping}  size = 'xl'/> 
                       
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          

        </div>

    )
    
} 
export default Navigation;