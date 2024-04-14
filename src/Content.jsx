import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './Categories'
import ItemsByCategory from './ItemsByCategory'
import NotFound from './NotFound'

export default function Content() {
  return (
    <div className='right'>
      {/* Settings */}
      <Routes>
        <Route index element={<Categories />} />
        {/* route with params */}
        <Route path='category/:categoryName' element={<ItemsByCategory />} />
        <Route path='fruits/01' element={<>item</>} />
        <Route path='create-item' element={<>create item</>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
