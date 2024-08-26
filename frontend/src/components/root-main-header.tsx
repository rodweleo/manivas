import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import RootMobileNav from "./root-mobile-nav";
import RootWebNav from "./root-web-nav";
import { Link } from "react-router-dom";

export default function RootMainHeader() {
    const { dimensions } = useWindowDimensions();
    return (
        <header className="container w-full flex justify-around items-center h-20 sticky top-0 z-50 filter backdrop-blur-lg bg-white shadow-md">
            <Link to="/" className="flex font-bold items-end ">
                <img src="/images/MANIVAS.png" alt="Manivas" width="40px" />
                <span className="text-2xl">anivas</span>
            </Link>

            {dimensions.width < 1024 ? <RootMobileNav /> : <RootWebNav />}
        </header>
    )
}