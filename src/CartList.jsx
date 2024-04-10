import CartItem from "./CartItem";
import useMyContext from "./context/DataContext";

export default function CartList() {
  const {cart} = useMyContext()
  return (
    <div>
        {Object.keys(cart).map(c=><CartItem key={cart[c].barcode} item={cart[c]}/>)}
    </div>
  )
}
