import { useState } from 'react'
import Item from './Item'
import itemsDB, { categories } from './db.items'
import Search from './Search'

export default function ItemList() {

    const [total, setTotal] = useState(0)
    const [category, setCategory] = useState("all")
    const filtered = category === "all" ? itemsDB : itemsDB.filter(v => v.category === category)
    return (
        <div>
            <h1> total : {total}</h1>

            <div>
                <button onClick={() => setCategory("all")}>All</button>
                {categories.map(c => <button key={c} onClick={() => setCategory(c)}>{c}</button>)}
                <Search/>
            </div>
            {filtered.map(it => <Item key={it.barcode} item={it} setTotal={setTotal} />)}
        </div>
    )
}
