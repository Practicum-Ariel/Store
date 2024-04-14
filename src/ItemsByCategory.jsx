import { useParams } from 'react-router-dom'
import Content from './Content'
import ItemList from './ItemList'

export default function ItemsByCategory() {
   const { categoryName } = useParams()

   // TODO - get all the items by category using filter

   return (
      <div>
         {categoryName}
      <ItemList />
      </div>
   )
}
