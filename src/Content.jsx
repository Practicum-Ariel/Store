import React from 'react'
import ItemList from './ItemList'

export default function Content({cart, setCart}) {
  return (
    <div className='content'><ItemList cart={cart} setCart={setCart}/></div>
  )
}
