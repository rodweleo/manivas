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

    const handleWindowResizing = (e: UIEvent) => {
        setDimensions({
            width: Number(e.target?.innerWidth),
            height: Number(e.target?.innerHeight),
        })
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowResizing);

        return () => window.removeEventListener("resize", handleWindowResizing)
    }, [])

    return {dimensions};
}