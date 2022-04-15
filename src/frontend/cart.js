import React, { useEffect, useState } from 'react';
import Social from './social'
import Nav from './nav'
import Logo from './logo'
import Footer from './footer'
import axios from 'axios';
function Cart() {
        const [productId, setProductId] = useState()
        const [productName, setproductName] = useState()
        const [productPrice, setproductPrice] = useState()
        const [productImage, setproductImage] = useState()
        const [productContent, setproductContent] = useState()
        const [aboutProduct, setaboutProduct] = useState()

        useEffect(() =>{
                const fetchUserCarts = async ()=>{
                        const response = await axios.get('/queryCart')
                        if(response){
                                console.log(response)
                                setProductId(response.data.productId)
                                setproductName(response.data.productName)
                                setproductPrice(response.data.productPrice)
                                setproductImage(response.data.productImage)
                                setproductContent(response.data.productContent)
                                setaboutProduct(response.data.aboutProduct)
                        }

                }
                fetchUserCarts()
        })
        
    
    return(
    <div>

        <div className = 'bg-light' style = {{paddingBottom:'10px'}}>

                <Social />
                <Logo/>
                <Nav/>
        </div>
        <div className='row' style = {{marginTop:'50px',marginLeft:'50px'}} >

                
            
        </div>


                    <Footer/>
    </div>
    )
    
}export default Cart