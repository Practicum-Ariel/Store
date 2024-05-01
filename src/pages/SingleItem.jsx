import {  useParams } from 'react-router-dom';
import AddToCart from '../AddToCart';
import { useEffect, useState } from 'react';

export default function SingleItem() {
  const { itemId } = useParams()
  const [item,setItem] = useState({})

  useEffect(()=>{
    fetch('https://jbh-mockserver.onrender.com/items/'+itemId)
    .then(res => res.json())
    .then(data=>setItem(data))
},[])

  let { id, name, emoji, price } = item;

  return (
    <div className='single-item'>
      <h1>{name}</h1>
      <h2>{emoji}</h2>
      <h2>{price}$</h2>
      <AddToCart item={item} />
    </div>
  )
}
