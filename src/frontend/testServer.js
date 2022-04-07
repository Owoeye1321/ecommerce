import axios from 'axios'
import React, { useState , useEffect } from 'react';

export default function TestingServer() {
    

    const [server, setServer ] = useState("")

    useEffect(() => {
        const fetchData = async ()=>{
            const result = await axios.get('/users')
            console.log(result)
            console.log(result.data)
            setServer(result.data);
        }
        fetchData();
        

    },[]);
   
 
  

    return(
        <div>
            
              <div>
                     <p>{server}</p>
                   
                    
                     </div>
        </div>
    )
    
    }