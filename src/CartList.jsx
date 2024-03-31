import CartItem from "./CartItem";

export default function CartList({cart, setCart}) {
  return (
    <div>
        {cart.map(c=><CartItem key={c.barcode} item={c} setCart={setCart}/>)}
    </div>
  )
}
