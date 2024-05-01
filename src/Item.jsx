import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

export default function Item({ item }) {
  let { id, name, emoji, price } = item;

  return (
    <div className='card'>
      <Link to={`/item/${id}`} state={item} >
        <div className='card-click' >
          <h2>{name}</h2>
          <h1>{emoji}</h1>
          <h2>{price}$</h2>
        </div>
      </Link>
      <AddToCart item={item} />
    </div>
  )
}
