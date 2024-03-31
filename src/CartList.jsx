import CartItem from "./CartItem";

export default function CartList({cart, setCart}) {
  return (
    <div>
        {Object.keys(cart).map(c=><CartItem key={cart[c].barcode} item={cart[c]} cart={cart} setCart={setCart}/>)}
    </div>
  )
}
