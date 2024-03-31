import { useState } from "react"
import CartList from "./CartList"
import Total from "./Total"


let carts = {
   
    "03" : {
        barcode: "03",
        name: "Orange",
        color: "Orange",
        emoji: "🍊",
        price: 2.49,
        category: "fruits",
        amount :4
    },
    "02":{
        amount:2,
        barcode: "02",
        name: "Banana",
        color: "Yellow",
        emoji: "🍌",
        price: 0.99,
        category: "fruits",
        image: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fruit-PNG/Large_Bananas_PNG_Clipart.png?m=1434276917"
    },
    "04":{
        amount:7,
        barcode: "04",
        name: "Grapes",
        color: "Purple",
        emoji: "🍇",
        price: 3.99,
        category: "fruits",
        image: "https://www.freepnglogos.com/uploads/grapes-png/mzr-red-grapes-36.png"
    }
}

export default function Cart() {

    const [cart, setCart] = useState(carts)

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
