import { useContext } from "react";
import CartItem from "./CartItem";
import DataContext from "./context/DataContext";

export default function CartList() {
  const {cart} = useContext(DataContext)
  return (
    <div>
        {Object.keys(cart).map(c=><CartItem key={cart[c].barcode} item={cart[c]}/>)}
    </div>
  )
}
