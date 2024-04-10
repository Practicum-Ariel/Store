import { useContext } from "react";
import DataContext from "./context/DataContext";

export default function AddToCart({ item, style }) {

    let { barcode } = item || {};
    const {cart,setCart} = useContext(DataContext)
    
    const handlePlus = () => {
        // let item = { ...cart[barcode] }
        // item.amount += 1
        // setCart({ ...cart, [item.barcode]: { ...item } })
        let copied = { ...cart }
        if (copied[barcode]) copied[barcode].amount += 1
        else copied[barcode] = { ...item, amount: 1 }
        setCart(copied)
    }
    const handleMinus = () => {
        let copied = { ...cart }
        copied[barcode].amount -= 1
        if (!copied[barcode].amount) delete copied[barcode]
        setCart(copied)
    }

    return (
        <div>
            {
                cart[barcode]?.amount > 0 ?
                    <div style={style}>
                        <button onClick={handlePlus}>+</button>
                        <span className='price'>{cart[barcode].amount || 10000000}</span>
                        <button onClick={handleMinus}>-</button>
                    </div>
                    :
                    <button onClick={handlePlus}>Add To Cart</button>
            }
        </div>
    )
}
