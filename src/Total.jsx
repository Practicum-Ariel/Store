import  { useContext } from 'react'
import DataContext from './context/DataContext';

export default function Total() {

  const  {cart} =useContext(DataContext);
  let total = 0
  Object.keys(cart).forEach(c=>total += (cart[c].amount * cart[c].price))

  return (
    <div>Total: {total.toFixed(2)}</div>
  )
}
