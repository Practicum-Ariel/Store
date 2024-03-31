import AddToCart from './AddToCart'

export default function Item({item,total,setTotal}) {
    let {barcode,name,emoji,price} =item;

  return (
    <div>
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h2>{price}</h2>
        <AddToCart setTotal={setTotal}/>
        </div>
  )
}
