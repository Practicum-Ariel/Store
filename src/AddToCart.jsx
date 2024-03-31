import { useState } from 'react'

export default function AddToCart({setCart,cart,barcode,amount = 0}) {

    const handlePlus = () => {
        // setCounter(counter + 1)
        cart[barcode].amount+=1
        setCart(cart)
    }
    const handleMinus = () => {
        // setCounter(counter - 1)
    }


    return (
        <>
            {
                amount > 0 ?
                    <>
                        <button onClick={handlePlus}>+</button>
                        <span>{amount}</span>
                        <button onClick={handleMinus}>-</button>
                    </>
                    :
                    <button onClick={handlePlus}>Add To Cart</button>
            }
        </>
    )
}
