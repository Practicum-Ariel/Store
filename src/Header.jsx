import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  // const v = useMyContext()
  const links = [
    { title: 'home', path: '/' },
    { title: 'create new', path: '/create-item' },
    { title: 'fruits', path: '/category/fruits' },
  ]

  return (
    <header className='header'>
      <nav>
        {links.map(link =>
          <NavLink className={({ isActive }) => isActive ? 'isActive' : ''} to={link.path} key={link.path}>
            {link.title}
          </NavLink>)}
      </nav>
    </header>
  )
}
