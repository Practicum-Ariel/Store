export default function Search({onInput,onClick}) {
    
  return (
    <div>
        {/* <input type="search" placeholder="search items..." onInput={(e)=>{setSearch(e.target.value.toLowerCase())}} /> */}
        <input type="search" placeholder="search items..." onInput={onInput} />
    </div>
  )
}
