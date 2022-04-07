import axios from 'axios'
import {useState, useEffect } from 'react'
import TestServer from './testServer'
export default function Basket() {
    const [people , setPeople ] = useState([])

useEffect(()=>{
  const fetchPeople = async ()=>{
        const response =  await axios.get('/people')
        console.log(response.data)
        setPeople(response.data)
    }
    fetchPeople()
},[])
   


    return(
        <div>
            <h2>Cart Items</h2>
            <TestServer/>
            
            {people.map((person)=>{
                return(
                    <li key={person.id}>
                        <a href={person.url}>{person.name}</a></li>
                )
            })}
           
               
            </div>

       
    )
    
}