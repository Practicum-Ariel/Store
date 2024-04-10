import AddToCart from './AddToCart'

export default function CartItem({ item, cart, setCart }) {
  let { barcode, name, emoji, price, amount } = item;


  const handleDelete = () => {
    let cloneCart = { ...cart }
    delete cloneCart[barcode]
    setCart(cloneCart)
  }

  return (
    <div className='cart-item'>
      <button onClick={handleDelete}>✖</button>
      <AddToCart amount={amount} item={item} cart={cart} setCart={setCart} style={{ display: "flex", "align-items": "center", "flex-direction": "column" }} />
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
