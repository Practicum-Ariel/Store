import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import NotFound from './pages/NotFound'
import ItemList from './pages/ItemList'
import CategoryLayout from './CategoryLayout'
import SingleItem from './pages/SingleItem'
import CreateItem from './pages/CreateItem'

export default function Content() {

  return (
    <div className='right'>
      {/* Settings */}
      <Routes>
        <Route index element={<Categories />} />
        {/* route with params */}
        <Route path='category/:categoryName' element={<CategoryLayout />}  >
          <Route index element={<ItemList />} />
          <Route path='edit' element={<>edit category</>} />
        </Route>
        <Route path='item/:itemId' >
          <Route index element={<SingleItem />} />
          <Route path='edit' element={<>edit item</>} />
        </Route>
        <Route path='create-item' element={<CreateItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
