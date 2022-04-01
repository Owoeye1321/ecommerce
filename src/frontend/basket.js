export default function Basket(props) {
    const {cartItems, onAdd, onRemove } = props;


    return(
        <div>
            <h2>Cart Items</h2>
            <div>
                {cartItems?.length === 0 && <p>Cart is Empty</p>}
                {/* {cartItems.map((item) => {
                    <div key = {item.id} className = "row">
                        <div className = "col-2">{item.name}</div>
                        <div>
                            <button onClick={()=>{onAdd(item)}} className = "add">+</button>
                             <button onClick={()=>{onRemove(item)}} className = "remove">-</button>
                        </div>
                    <div  className = "col-2 text-right">{item.qty} * ${item.price.toFixed(2)}</div>
                    </div>
                })} */}
            </div>

        </div>
    )
    
}