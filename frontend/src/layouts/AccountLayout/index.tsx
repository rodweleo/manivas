import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import "../../App.css"
import { auth } from "../../firebase/firebase.config";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect } from "react";


export const AccountLayout = () => {
    const user = auth.currentUser;
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const currentLocation = location.pathname.trim().split("/")[1].charAt(0).toUpperCase() + location.pathname.trim().split("/")[1].slice(1, location.pathname.trim().split("/")[1].split("").length)
    useEffect(() => {
        if(auth.currentUser === null){
            navigate("/login")
        }
    }, [navigate])
    
    return (
        <main className="w-full h-screen fixed flex flex-col items-center ">
            <header className="w-full p-1.5 sticky z-50 top-0 h-20 flex justify-between items-center rounded-b-xl">
                <div className="flex items-center gap-2">
                    <img src={user && user.photoURL ? user.photoURL : ""} alt="" className="h-10 w-10 bg-green-500 rounded-full" />
                </div>
                <h1 className="font-bold">{currentLocation} </h1>
                <ul className="flex gap-4 scale-150">
                    <li className="cursor-pointer hidden"><i className="fa-solid fa-gear shadow-inner shadow-green-400 hover:shadow-green-600 transition-all duration-300 p-2 rounded-full"></i></li>
                    <li className="relative cursor-pointer">
                        <button className="border p-[2px] rounded-full" title="Notifications" onClick={() => navigate("notifications")} type="button">
                            <IoMdNotificationsOutline />
                            <div className="h-2 w-2 bg-blue-400 rounded-full border border-white absolute top-[1.5px] -right-[0.5px]"></div>
                        </button>
                        
                        </li>
                </ul>
            </header>
            <article className="h-full w-full overflow-y-auto p-1.5">
                <Outlet />
            </article>
            <nav id="account-main-nav-bar" className="w-full border border-t-1 flex justify-between p-5 bottom-0 sticky">
                <NavLink to="dashboard"><i className="fa-solid fa-home"></i> <span> Home</span></NavLink>
                <NavLink to="history"><i className="fa-solid fa-history"></i> <span> History</span></NavLink>
                <NavLink to="profile"> <img src={user?.photoURL} alt={`${user?.displayName}'s Avatar`} width="15px" className="rounded-full shadow-lg shadow-green-500" /> <span> Profile</span></NavLink>
            </nav>
        </main >
    )
}