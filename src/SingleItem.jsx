import { useContext } from 'react';
import AddToCart from './AddToCart'
import useMyContext from './context/DataContext';

export default function SingleItem({ item }) {
  let { barcode, name, emoji, price } = item;
  
  return (
    <div className='single-item'>
      <h1>{name}</h1>
      <h1>{emoji}</h1>
      <h2>{price}$</h2>
      <AddToCart item={item}  />
    </div>
  )
}
