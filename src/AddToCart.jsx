import { useState } from 'react'

export default function AddToCart({setTotal,amount = 0}) {

    const handlePlus = () => {
        // setCounter(counter + 1)
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
