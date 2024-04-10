import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export default function Header() {
  const v = useMyContext()
  return (
    <h1>{v}</h1>
  )
}
