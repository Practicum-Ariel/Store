import AddToCart from './AddToCart'

export default function SingleItem({ item,setSelected }) {
  let { barcode, name, emoji, price } = item;
  
  return (
    <div className='single-item'>
      <button onClick={()=>setSelected({})}>back</button>
      <h1>{name}</h1>
      <h1>{emoji}</h1>
      <h2>{price}$</h2>
      <AddToCart item={item}  />
    </div>
  )
}
