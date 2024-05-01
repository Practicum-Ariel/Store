import { useNavigate } from "react-router-dom";
import useMyContext from "./context/DataContext";

export default function AddToCart({ item, style }) {
    const navigate = useNavigate()
    let { id } = item || {};
    const { cart, setCart } = useMyContext()

    const handlePlus = () => {
        // let item = { ...cart[id] }
        // item.amount += 1
        // setCart({ ...cart, [item.id]: { ...item } })
        let copied = { ...cart }
        if (copied[id]) copied[id].amount += 1
        else copied[id] = { ...item, amount: 1 }
        setCart(copied)
        // to navigate with code instead link
        // if (item.inStock > 0) {   
        //     navigate('/', { state: {} })
        // }
        // navigate(-1, { state: {} })
    }

    const handleMinus = () => {
        let copied = { ...cart }
        copied[id].amount -= 1
        if (!copied[id].amount) delete copied[id]
        setCart(copied)
    }

    return (
        <div>
            {
                cart[id]?.amount > 0 ?
                    <div style={style}>
                        <button onClick={handlePlus}>+</button>
                        <span className='price'>{cart[id].amount || 10000000}</span>
                        <button onClick={handleMinus}>-</button>
                    </div>
                    :
                    <button onClick={handlePlus}>Add To Cart</button>
            }
        </div>
    )
}
