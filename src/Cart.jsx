import CartList from "./CartList"
import Total from "./Total"
import useMyContext from "./context/DataContext";




export default function Cart() {

    const  {setCart} =useMyContext();
       
    return (
        <div className="cart">
            <button onClick={()=>setCart([])}>❌</button>
            <CartList />
            <Total/>

        </div>
    )
}
