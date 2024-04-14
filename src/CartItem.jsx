import AddToCart from './AddToCart'
import useMyContext from './context/DataContext';

export default function CartItem({ item}) {
  let { barcode, name, emoji, price, amount } = item;
  const {cart,setCart} = useMyContext()

  const handleDelete = () => {
    let cloneCart = { ...cart }
    delete cloneCart[barcode]
    setCart(cloneCart)
  }

  return (
    <div className='cart-item'>
      <button onClick={handleDelete}>✖</button>
      <AddToCart amount={amount} item={item} style={{ display: "flex", "alignItems": "center", "flexDirection": "column" }} />
      <div className='cart-details'>
        <div>{name}</div>
        <div>{price}$</div>
      </div>
      <div className='emoji'>
        <h2>{emoji}</h2>
      </div>
    </div>
  )
}
