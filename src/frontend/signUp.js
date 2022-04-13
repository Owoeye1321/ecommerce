import styles from './style.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function SignUp() {

    const [error, setError] = useState('')
    return(
        
    <div>
    <center>
<div className = "container pt-3" style = {{marginTop:'150px'}}>
          
         
                        <div id={styles.logDiv} className = "bg-light">
                        <span id={styles.Namestyle}>Login</span>
                        <form >
                            <input required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="text" id="username" placeholder="Username"/>
                            <input  required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="password" id="password" placeholder="Password"/>
                            <input  required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="email" id="email" placeholder="Email"/>
                           <div  id={styles.err} >
                                <i style={{marginBottom:"-1px"}}>{error}</i>
                                </div>
                            <input style={{marginBottom:"-1px"}} className= "btn btn-outline-primary" type ="submit" value="submit" style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} /><br></br>   
                            <a id={styles.forget_password} href="/forgetPassword">Forget password?</a>                    
                        </form>
                        </div>
                        <div id={styles.createNewSiteInfo}>
                            <span id={styles.textfont}>Already have an account?</span> <a style = {{textDecoration:'none'}} href="/login">Login</a><br></br>
                            </div>  
                                     
                           
                    </div>

    </center>
</div>

    )
    
}
export default SignUp