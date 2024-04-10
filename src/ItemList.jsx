import { useState } from 'react'
import Item from './Item'
import itemsDB, { categories } from './db.items'
import Search from './Search'

export default function ItemList({cart, setCart}) {

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")
    let filtered = category === "all" ? itemsDB : itemsDB.filter(v => v.category === category)
    filtered = filtered.filter(it => it.name[0].toLowerCase() == search || it.name.includes(search, 1))

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    return (
        <div>
            <div>
                <button onClick={() => setCategory("all")}>All</button>
                {categories.map(c => <button key={c} onClick={() => setCategory(c)}>{c}</button>)}
                <Search onInput={handleSearch} />
            </div>
            <div className='items'>
                {filtered.map(it => <Item key={it.barcode} item={it} cart={cart} setCart={setCart}/>)}
            </div>
        </div>
    )
}
