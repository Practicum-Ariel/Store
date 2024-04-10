import { useContext } from 'react';
import AddToCart from './AddToCart'
import useMyContext from './context/DataContext';
import SingleItem from './SingleItem';

export default function Item({ item  }) {
  let { barcode, name, emoji, price } = item;
  const {setPopup} = useMyContext()
  return (
    <div className='card'>
      <div className='card-click' onClick={() => setPopup(<SingleItem item={item}/>)}>
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h2>{price}$</h2>
      </div>
      <AddToCart item={item} />
    </div>
  )
}
