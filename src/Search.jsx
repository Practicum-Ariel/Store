export default function Search() {
  return (
    <div>
        <input type="search" placeholder="search items..." onInput={(e)=>{e.target.value}} />
    </div>
  )
}
