import styles from './style.module.css'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function SignUp() { 
    const [color, setColor ] =useState('green')
    const [data, setData ] = useState({
        username:'',
        password:'',
        email:''
    })


    const [error, setError] = useState('Password must be at least 8 parameters')


    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    
    const submit = async(e)=>{
      
        e.preventDefault()
        const result = await axios.post('/signUp',
        { 
            username:data.username,
            password:data.password,
            email:data.email
        })
    if(result.data === "exist"){
        setColor('blue')
        setError('User already exist')  
        console.log(result)
       }  
        
       else if(result.data == "success"){
           alert("Signed Up Successfully,login to continue")
        window.location.assign("http://localhost:3000/login")
       }
       else if (result.data !== "success") {
        setColor('red')
        setError('Invalid details')
        
    }
    }       
    return(
        
    <div>
    <center>
<div className = "container pt-3" style = {{marginTop:'150px'}}>
          
         
                        <div id={styles.logDiv} className = "bg-light">
                        <span id={styles.Namestyle}>Login</span>
                        <form onSubmit= {(e) => submit(e) } >
                            <input onChange = {(e)=>handle(e)}  required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="text" id="username" placeholder="Username"/>
                            <input onChange = {(e)=>handle(e)}   required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="password" id="password" placeholder="Password"/>
                            <input onChange = {(e)=>handle(e)}   required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="email" id="email" placeholder="Email"/>
                           <div  id={styles.err} >
                                <i style={{marginBottom:"-1px",color:color}}>{error}</i>
                                </div>
                            <input style={{marginBottom:"-1px"}} className= "btn btn-outline-primary" type ="submit" value="submit"  id = {styles.newLove} /><br></br>   
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