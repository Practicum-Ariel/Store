import AddToCart from './AddToCart'

export default function Item({ item ,setSelected}) {
  let { barcode, name, emoji, price } = item;

  return (
    <div className='card'>
      <div className='card-click' onClick={() => setSelected(item)}>
        <h2>{name}</h2>
        <h1>{emoji}</h1>
        <h2>{price}$</h2>
      </div>
      <AddToCart item={item} />
    </div>
  )
}
