import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'

function LogIn() {
    const [error, setError] = useState('')
    const [data, setData ] = useState({
        username:'',
        password:''
    })
    const handle = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const submit = async (e)=>{
        e.preventDefault()
        const details = {
            username:data.username,
            password:data.password
        }
        const response = await axios.post('/login',{details})
        if (response){
            if(response.data === 'Invalid details')
            {
                setError('invalid details')
                console.log(response)
                
            }
           if (response.data == 'success') {
               
                    alert('Welcome '+ details.username)
                    window.location.assign("http://localhost:3000/")
              
            } 
        }   
        
    }


    return(

    <div>
    <center>
<div className = "container pt-3" style = {{marginTop:'150px'}}>
          
         
                        <div id={styles.logDiv} className = "bg-light">
                        <span id={styles.Namestyle}>Login</span>
                        <form onSubmit= {(e) => submit(e) }>
                            <input onChange = {(e)=>handle(e)} value = {data.name }  id="username" required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type="text" placeholder="Username"/>
                            <input onChange = {(e)=>handle(e)} value = {data.password} id="password" required className = "form-control"  style = {{
                                width: "200px",
                                 marginTop: "10px",
                                    borderRadius: "5px",
                                    marginBottom:"5px"
                            }} type="password"  placeholder="Password"/>
                            <div  id={styles.err} >
                                <i style={{marginBottom:"-1px",color:'red'}}>{error}</i>
                                </div>
                            <input style={{marginBottom:"-1px"}} className= "btn btn-outline-primary"  style = {{
                                width: "199px",
                                 marginTop: "10px",
                                    borderRadius: "5px"
                            }} type ="submit" value="submit"/><br></br>   
                            <a id={styles.forget_password} href="/forgetPassword">Forget password?</a>                    
                        </form>
                        </div>
                        <div id={styles.createNewSiteInfo}>
                            <span id={styles.textfont}>New to My Profile?</span> <a style = {{textDecoration:'none'}} href="/SignUp">Create an account</a><br></br>
                            </div>  
                                     
                           
                    </div>

    </center>
</div>

    )
    
}
export default LogIn