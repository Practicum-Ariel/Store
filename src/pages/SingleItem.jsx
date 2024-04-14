import { useLocation, useParams } from 'react-router-dom';
import AddToCart from '../AddToCart';
import items from '../db.items';

export default function SingleItem() {
  const { itemId } = useParams()
  const { state } = useLocation()
  const item = state || items.find(it => it.barcode === itemId) || {}

  let { barcode, name, emoji, price } = item;

  return (
    <div className='single-item'>
      <h1>{name}</h1>
      <h2>{emoji}</h2>
      <h2>{price}$</h2>
      <AddToCart item={item} />
    </div>
  )
}
