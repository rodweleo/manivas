import { NavLink, Outlet, useLocation } from "react-router-dom"
import "../../App.css"
import { auth } from "../../firebase/firebase.config";
export const AccountLayout = () => {
    const user = auth.currentUser;
    const location = useLocation()
    const currentLocation = location.pathname.trim().split("/")[2].charAt(0).toUpperCase() + location.pathname.trim().split("/")[2].slice(1, location.pathname.trim().split("/")[2].split("").length)
    return (
        <main className="w-full h-screen fixed flex flex-col items-center bg-gradient-to-b  from-green-950 from-30% via-green-800 to-green-950">
            <section className="w-full sticky z-50 top-0 h-20 flex justify-around items-center bg-gray-700/20 backdrop-blur-xl rounded-b-xl">
                <div className="flex items-center gap-2">
                    <img src={user && user.photoURL ? user.photoURL : ""} alt="" className="h-10 w-10 bg-green-500 rounded-full" />
                    <h1 className="text-white font-bold">{currentLocation} </h1>
                </div>

                <ul className="text-white flex gap-4 scale-150">
                    <li className="cursor-pointer"><i className="fa-solid fa-gear shadow-inner shadow-green-400 hover:shadow-green-600 transition-all duration-300 p-2 rounded-full"></i></li>
                    <li className="relative cursor-pointer">
                        <NavLink to="notifications"><i className="fa-solid fa-bell shadow-inner shadow-green-400 p-2 rounded-[50%] hover:shadow-green-600 transition-all duration-300"></i> <div className="h-2 w-2 bg-green-500 rounded-full border border-white absolute top-1 -right-[0.75px]"></div></NavLink></li>
                </ul>
            </section>
            <section className="h-full w-full overflow-y-auto">
                <Outlet />
            </section>
            <nav id="account-main-nav-bar" className=" bg-gray-700/95 w-4/5 mb-4 flex justify-around p-5 rounded-full bottom-0 sticky">
                <NavLink to="dashboard"><i className="fa-solid fa-home"></i> </NavLink>
                <NavLink to="history"><i className="fa-solid fa-history"></i></NavLink>
                <NavLink to="profile"> <img src="https://cdn.pixabay.com/photo/2023/02/08/14/02/ai-generated-7776701_640.jpg" alt={`${user?.displayName}'s Avatar`} width="20px" className="rounded-full shadow-lg shadow-green-500" /></NavLink>
            </nav>
        </main >
    )
}