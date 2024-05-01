import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {

   const [categories, setCategories] = useState([])

   useEffect(()=>{
      fetch('https://jbh-mockserver.onrender.com/categories')
         .then(res => res.json())
         .then(data=>setCategories(Object.keys(data)))
   },[])

   return (
      <div className='categories'>
         {/* <a> */}
         {categories.map(c =>
            <Link key={c} to={`/category/${c}`}>{c}</Link>
         )}
      </div>
   )
}
