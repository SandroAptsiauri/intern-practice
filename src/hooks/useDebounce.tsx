import { useEffect, useState } from "react"

const useDebounce = (value:string, delay:number) => {

    const [debounceVal, setDebounceVal] = useState(value)
    useEffect(() => {
        const handle = setTimeout(()=> {
            setDebounceVal(value)
        }, delay)
        return () => {
            clearTimeout(handle)
        }
    }, [value, delay])
    return debounceVal
}
export default useDebounce