import  { createContext, useContext} from 'react'

export const DataContext = createContext("❌❌❌❌")

function useMyContext (){
    return useContext(DataContext)
}
export default useMyContext;

