import AddToCart from './AddToCart'

export default function Item({item,total,cart,setCart}) {
    let {barcode,name,emoji,price} =item;

  return (
    <div className='card'>
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h2>{price}$</h2>
        <AddToCart item={item} cart={cart} setCart={setCart}/>
        </div>
  )
}
