import { useEffect } from "react";
import CartList from "./CartList"
import Total from "./Total"
import useMyContext from "./context/DataContext";




export default function Cart() {

    const  {setCart,cart} =useMyContext();
    return (
        <div className="cart">
            <button onClick={()=>setCart([])}>❌</button>
            <CartList />
            <Total/>

        </div>
    )
}
