import { useState } from 'react'
import Item from '../Item'
import itemsDB, { categories } from '../db.items'
import Search from '../Search'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function ItemList() {
    const { categoryName } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || "")
    let filtered = categoryName === "all" ? itemsDB : itemsDB.filter(v => v.category === categoryName)
    filtered = filtered.filter(it => it.name.toLowerCase().includes(search))

    const handleSearch = (e) => {
        setSearchParams({ search: e.target.value.toLowerCase() })
        setSearch(e.target.value.toLowerCase())
    }


    return (

        <div>
            <Search onInput={handleSearch} />
            <div className='items'>
                {filtered.map(it => <Item key={it.barcode} item={it} />)}
            </div>
        </div>
    )
}
