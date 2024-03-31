import { useState } from 'react'

export default function AddToCart({setTotal}) {

    const [counter, setCounter] = useState(0) // const counter = 1
    //      state  , setState


    const handlePlus = () => {
        setCounter(counter + 1)
        setTotal(prev=>prev+1)
    }
    const handleMinus = () => {
        setCounter(counter - 1)
        setTotal(prev=>prev-1)
    }


    return (
        <>
            {
                counter > 0 ?
                    <>
                        <button onClick={handlePlus}>+</button>
                        <span>{counter}</span>
                        <button onClick={handleMinus}>-</button>
                    </>
                    :
                    <button onClick={handlePlus}>Add To Cart</button>
            }
        </>
    )
}
