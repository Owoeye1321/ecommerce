import axios from 'axios'
import {useState, useEffect } from 'react'
import TestServer from './testServer'
export default function Basket() {
    const [people , setPeople ] = useState([])

useEffect(()=>{
    const controller = new AbortController()
    const { signal } = controller
  const fetchPeople = async ()=>{
        const response =  await axios.get('/people')
        console.log(response.data)
        setPeople([...people, response.data])
    }
    fetchPeople()
    return()=> controller.abort()
},[])
   


    return(
        <div>
            <h2>Cart Items</h2>
            <TestServer/>
            
            {people.map((person)=>{
                return(
                
                    <li key = "{person.id}">{person.name}</li>
                )
            })}
           
               
            </div>

       
    )
    
}