import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function CategoryLayout() {
  const [isConnected, setIsConnected] = useState(true)

  return (
    <>
      {isConnected ?
        <>
          {/* <nav><NavLink to={'/'}>home</NavLink></nav> */}
          <Outlet />
          {/* <footer>category footer</footer> */}
        </>
        : <button onClick={() => setIsConnected(true)}>connect</button>}
    </>
  )
}
