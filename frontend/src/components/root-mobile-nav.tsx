import { Button } from "./ui/button";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { auth } from "@/firebase/firebase.config";

export default function RootMobileNav() {
    const { currentUser } = auth;

    const navigateToDashboard = () => {
        window.location.href = "/account/dashboard"
    }
    return (
        <Sheet>
            <SheetTrigger className="focus:outline-none hover:bg-transparent p-0 bg-transparent text-black text-xl">
                <RiMenu3Fill />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left">Manivas</SheetTitle>
                    <SheetDescription className="text-left">
                        <p>Making Financial Management Simpler as You Grow</p>
                        <nav className="flex flex-col justify-between gap-10 mt-5 h-full overflow-y-auto">
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <a href="/" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" className="nav-link">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="nav-link">
                                        How it Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="nav-link">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                            {
                                currentUser ? <Button onClick={navigateToDashboard} className="rounded-full">Go to Dashboard</Button> : <ul className="flex flex-col gap-5">
                                    <li>
                                        <NavLink to="/auth/register"    >
                                            <Button className="w-full rounded-full">Get Started</Button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="font-bold " to="/auth/login">
                                            <Button variant="outline" className="w-full rounded-full">
                                                Login
                                            </Button>
                                        </NavLink>
                                    </li>
                                </ul>
                            }
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}