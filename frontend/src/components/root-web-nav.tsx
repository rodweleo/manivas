import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { auth } from "@/firebase/firebase.config";

export default function RootWebNav() {
    const { currentUser } = auth;

    const navigateToDashboard = () => {
        window.location.href = "/account/dashboard"
    }
    return (
        <nav className="flex items-center justify-between gap-20 z-50">
            <ul className="flex gap-10">
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
                currentUser ? <Button onClick={navigateToDashboard}>Go to Dashboard</Button> : <ul className="flex gap-5">
                    <li>
                        <NavLink to="/auth/register">
                            <Button className="w-full">Get Started</Button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="font-bold " to="/auth/login">
                            <Button variant="outline" className="w-full">
                                Login
                            </Button>
                        </NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}