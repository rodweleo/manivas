import { IoMdNotificationsOutline } from "react-icons/io";
import { auth } from "../firebase/firebase.config";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { toast } from "react-toastify"
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export default function UserAccountMainHeader() {
    const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
    const navigate = useNavigate()

    useEffect(() => {


        // Set up a listener for authentication state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if (user === null) {
                navigate("/", {
                    replace: true
                })
            }
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, [navigate, currentUser]);


    const signOut = async () => {
        try {
            await auth.signOut()
            window.location.href = "/"
            toast.success("You have been logged out successfully.")
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <header className="bg-white px-10 w-full sticky z-50 top-0 h-20 flex justify-between items-center border shadow-sm">
            <div className="flex items-center gap-2">
                <img src="/images/MANIVAS.png" width="30px" alt="Manivas" />

            </div>
            <nav>
                <ul className="flex items-center gap-10">
                    <li><NavLink to="/account/dashboard/">Dashboard</NavLink></li>
                    <li><NavLink to="/account/analytics/">Analytics</NavLink></li>
                    <li><NavLink to="/account/transactions/">Transactions</NavLink></li>
                    <li><NavLink to="/account/frequently-asked-questions">FAQs</NavLink></li>
                </ul>
            </nav>
            <ul className="flex items-center gap-4 scale-150">
                <li><button type="button" title="Settings"><IoSettingsOutline /></button></li>
                <li>
                    <button className="relative p-[2px] rounded-full" title="Notifications" onClick={() => navigate("notifications")} type="button">
                        <IoMdNotificationsOutline />
                        <div className="size-[5px] bg-blue-400 rounded-full border border-white absolute top-[6px] right-[4px]"></div>
                    </button>
                </li>
                <li>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button title="My Account" type="button" className="flex">
                                <img src={currentUser && currentUser.photoURL ? currentUser.photoURL : ""} alt="Hi, Guest" className=" bg-green-500 rounded-full mb-1" width="17.75px" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Link to="/account/profile">Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link to="/account/settings">Settings</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button className="w-full" onClick={() => signOut()}>Log out</Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </li>
            </ul>
        </header>
    )
}