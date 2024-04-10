import React, { useState } from 'react'
import ItemList from './ItemList'
import SingleItem from './SingleItem'

export default function Content() {
  const [selected, setSelected] = useState({})
  return (
    <div className='content'>
      {/* {selected ? */}
      {Object.keys(selected).length ?
        <SingleItem item={selected} setSelected={setSelected} /> :
        <ItemList setSelected={setSelected} />}

    </div>
  )
}
