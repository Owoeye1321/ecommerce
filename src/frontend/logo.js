import logo from '../images/logo.jpg'
import styles from './style.module.css'

function Logo() {
  return (
    <div id = {styles.logo_div}>
        <div id = {styles.leftFloat}>
            <img id = {styles.logo} alt = "icon" src = {logo}/>
        </div>

        <div id = {styles.rightFloat} style = {{marginTop:'13px'}}>
          <strong id = {styles.name} >ADDRIGGO FOODS</strong>

        </div>


        
    </div>
  );
}

export default Logo;
