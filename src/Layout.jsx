import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import {DataContext} from './context/DataContext'
import Header from './Header'
import Popup from './Popup'

export default function Layout() {
  const [cart, setCart] = useState({})
  const [popup, setPopup] = useState()

  return (
    <div className='layout'>
      {/* <Header /> */}
      <DataContext.Provider value={{ cart, setCart,popup, setPopup }}>
        <Cart  />
        <Content />
       {popup && <Popup/>}
      </DataContext.Provider>

    </div>
  )
}
