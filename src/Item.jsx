import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

export default function Item({ item  }) {
  let { barcode, name, emoji, price } = item;
  
  return (
    <Link to={`${barcode}`} className='card' state={item} >
      <div className='card-click' >
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h2>{price}$</h2>
      </div>
      <AddToCart item={item} />
    </Link>
  )
}
