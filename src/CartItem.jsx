import AddToCart from './AddToCart'

export default function CartItem({ item, setCart }) {
  let { barcode, name, emoji, price, amount } = item;

  return (
    <div>
      <button>✖</button>
      <h2>{name}</h2>
      <h1>{emoji}</h1>
      <h2>{price}</h2>
      <AddToCart amount={amount} setCart={setCart} />
    </div>
  )
}
