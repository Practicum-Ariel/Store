import { useState } from 'react'
import Cart from './Cart'
import Content from './Content'
import DataContext from './context/DataContext'
import Header from './Header'

export default function Layout() {
  const [cart, setCart] = useState({})

  return (
    <div className='layout'>
      {/* <Header /> */}
      <DataContext.Provider value={{ cart, setCart }}>
        <Cart  />
        <Content />
      </DataContext.Provider>

    </div>
  )
}
