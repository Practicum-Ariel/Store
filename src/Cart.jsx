import { useContext } from "react"
import CartList from "./CartList"
import Total from "./Total"
import DataContext from "./context/DataContext"




export default function Cart() {

    const  {setCart} =useContext(DataContext);
       
    return (
        <div className="cart">
            <button onClick={()=>setCart([])}>❌</button>
            <CartList />
            <Total/>

        </div>
    )
}
