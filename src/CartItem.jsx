import { useContext } from 'react';
import AddToCart from './AddToCart'
import DataContext from './context/DataContext';

export default function CartItem({ item}) {
  let { barcode, name, emoji, price, amount } = item;
  const {cart,setCart} = useContext(DataContext)

  const handleDelete = () => {
    let cloneCart = { ...cart }
    delete cloneCart[barcode]
    setCart(cloneCart)
  }

  return (
    <div className='cart-item'>
      <button onClick={handleDelete}>✖</button>
      <AddToCart amount={amount} item={item} style={{ display: "flex", "align-items": "center", "flex-direction": "column" }} />
      <div className='cart-details'>
        <div>{name}</div>
        <div>{price}$</div>
      </div>
      <div className='emoji'>
        <h1>{emoji}</h1>
      </div>
    </div>
  )
}
