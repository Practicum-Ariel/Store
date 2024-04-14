import { useState } from "react"

export default function CreateItem() {
   const [showDetails, setShowDetails] = useState(false)

   // 1
   // const [emoji, setEmoji] = useState('')
   // const [category, setCategory] = useState('')

   // 2
   // const [allInputsData, setAllInputsData] = useState({ emoji: '🪳', category: 'all' })
   // const handleChange = e => setAllInputsData(prev => ({ ...prev, [e.target.name]: e.target.value }))

   
   const handleSubmit = e => {
      // console.log(e.target)
      e.preventDefault()
      // 3
      const fd = new FormData(e.target)
      const obj = Object.fromEntries(fd)
      // console.log(obj);
      

   }

   return (
      <div className="create-items">
         <form onSubmit={handleSubmit}>
            {/* TODO - name emoji price */}
            <label >
               emoji
               <input
                  type="text"
                  // value={allInputsData.emoji}
                  // onChange={handleChange}
                  name="emoji"
                  maxLength={'1'}
               />
            </label>

            <label >
               category
               <select
                  // value={allInputsData.category}
                  // onChange={handleChange}
                  name="category"
               >
                  <option value={'fruits'}>fruits</option>
                  <option value={'all'}>all</option>
               </select>
            </label>

            {/* <div>
            <label>
               is red
               <input type="radio" value='true' name="isRed" />
            </label>
            <label >
               not red
               <input type="radio" value='false' name="isRed" />
            </label>
            </div> */}

            <button type="submit" >create</button>
            <button type="button" onClick={() => setShowDetails(old => !old)}>show details</button>
            {showDetails && <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, minima ex eveniet fuga unde est inventore ea assumenda, ipsum consequuntur cupiditate doloremque alias qui nisi maiores impedit officiis. Provident, quisquam? Inventore perferendis explicabo ea aliquam accusantium atque sequi rerum itaque.
            </p>}
         </form>
      </div>
   )
}
