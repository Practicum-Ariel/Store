import { useEffect, useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import Popup from './Popup'
import { DataContext } from './context/DataContext'
import Header from './Header'

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
    <>
      <Header />
      <div className='layout'>
        <DataContext.Provider value={{ cart, setCart, popup, setPopup }}>
          <Cart />
          <Content />
          {popup && <Popup />}
        </DataContext.Provider>
      </div>
    </>
  )
}
