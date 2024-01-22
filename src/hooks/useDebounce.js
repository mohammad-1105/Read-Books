import { useEffect } from "react"
import { useState } from "react"


export default function useDebounce(value, delay = 600) {
    const [debouncedValue, setDebouncedValue] = useState('')

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);


        // cleanup function 
        return () => {
            clearTimeout(intervalId)
        }

    }, [value, delay])

    return debouncedValue

}