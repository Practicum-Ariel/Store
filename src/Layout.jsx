import { useEffect, useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import { DataContext } from './context/DataContext'
import Header from './Header'
import Popup from './Popup'
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import ItemsByCategory from './ItemsByCategory'
import Categories from './Categories'

export default function Layout() {
  const [cart, setCart] = useState({})
  const [popup, setPopup] = useState()

  useEffect(() => {
    if (localStorage.cart) setCart(JSON.parse(localStorage.cart))
  }, [])

  useEffect(() => {
    localStorage.cart = JSON.stringify(cart)
  }, [cart])


  return (
    <div className='layout'>
      {/* <Header /> */}

      <DataContext.Provider value={{ cart, setCart, popup, setPopup }}>
        <Cart />
        <Content />
        {popup && <Popup />}
      </DataContext.Provider>

    </div>
  )
}
