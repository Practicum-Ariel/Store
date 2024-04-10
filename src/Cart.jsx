import CartList from "./CartList"
import Total from "./Total"




export default function Cart({cart, setCart}) {


    let total = 0
    Object.keys(cart).forEach(c=>total += (cart[c].amount * cart[c].price))
    
    return (
        <div className="cart">
            <button onClick={()=>setCart([])}>❌</button>
            <CartList cart={cart} setCart={setCart} />
            <Total total={total}/>

        </div>
    )
}
