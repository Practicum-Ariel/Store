import { useEffect, useState } from "react"

export default function Effect() {

    const [counter, setCounter] = useState(1)
    const [inp, setInp] = useState("")

    //      what      when
    //useEffect(()=>{  },   [  ])


    // Mounting
    useEffect(() => {
        console.log("🥗🥗🥗 First Time 🥗🥗🥗");

        // Unmounting
        return ()=>console.log("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌")
    }, [])

    // Updating
    useEffect(() => {
        console.log(`🍓🍓🍓 Change Counter : ${counter}  🍓🍓🍓`);
    }, [counter])

    // Updating
    useEffect(() => {
        console.log(`🧀🧀🧀 Change Input : ${inp[inp.length - 1]}  🧀🧀🧀`);
    }, [inp])

    // Updating
    useEffect(() => {
        console.log(` ###### CHANGE : ${Date.now()} ##########`);
    })

    return (
        <div>
            <h1>Effect</h1>

            {
                counter < 5 ?
                    <>
                        <h3>{counter}</h3>
                        <button onClick={() => setCounter(counter + 1)}>Click</button>
                        <h3>{inp}</h3>
                        <input type="text" onInput={(e) => setInp(e.target.value)} />
                    </> : <h2>GAME OVER</h2>

           }
        </div>
    )
}
