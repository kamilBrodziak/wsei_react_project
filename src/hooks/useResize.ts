import { MutableRefObject, useEffect, useState } from "react"

const useResize = <T extends HTMLElement>(myRef:MutableRefObject<T>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const getDimensions = () => ({
            width: myRef.current?.getBoundingClientRect()?.width,
            height: myRef.current?.getBoundingClientRect()?.height
        })
        const handleResize = () => {
          setDimensions(getDimensions())
        }
    
        if (myRef.current) {
          setDimensions(getDimensions())
        }
    
        window.addEventListener("resize", handleResize)
    
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }, [myRef])
    
      return dimensions;
}

export default useResize;