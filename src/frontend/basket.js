export default function Basket(props) {
    const {cartItems } = props;
    
   function checkItems(val) {
       if(val.length === 0){
           return ( <div>Cart is empty</div>)
       }
   }

    return(
        <div>
            <h2>Cart Items</h2>
            <div>
                {checkItems(cartItems)}
            </div>

        </div>
    )
    
}