import AddToCart from './AddToCart'

export default function CartItem({ item,cart, setCart }) {
  let { barcode, name, emoji, price, amount } = item;

  
  const handleDelete = ()=>{
    let cloneCart = {...cart}
    delete cloneCart[barcode]
    setCart(cloneCart)
  }

  return (
    <div>
      <button onClick={handleDelete}>✖</button>
      <h2>{name}</h2>
      <h1>{emoji}</h1>
      <h2>{price}</h2>
      <AddToCart amount={amount} barcode={barcode} cart={cart} setCart={setCart} />
    </div>
  )
}
