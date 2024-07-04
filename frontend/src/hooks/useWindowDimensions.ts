import { useEffect, useState } from "react"

type WindowDimensions = {
    width: number,
    height: number
}
export const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState<WindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleWindowResizing = (e: any) => {
        setDimensions({
            width: e.currentTarget.innerWidth,
            height: e.currentTarget.innerHeight,
        })
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowResizing);

        return () => window.removeEventListener("resize", handleWindowResizing)
    }, [])

    return {dimensions};
}