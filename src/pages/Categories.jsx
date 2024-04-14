import { categories } from '../db.items'
import { Link } from 'react-router-dom'

export default function Categories() {

  return (
     <div className='categories'>
        {/* <a> */}
        {categories.map(c =>
           <Link key={c} to={`/category/${c}`}>{c}</Link>
        )}
    </div>
  )
}
