import { Button } from "./ui/button";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";

export default function RootMobileNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <Button
                    type="button"
                    className="focus:outline-none hover:bg-transparent p-0 bg-transparent text-black text-xl"
                >
                    <RiMenu3Fill />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left">Manivas</SheetTitle>
                    <SheetDescription>
                        <p>Simplifying Payments for Growing Businesses</p>
                        <nav className="flex flex-col justify-between gap-20 mt-5">
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <NavLink to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="how-to-use" className="nav-link">
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="why-manivas" className="nav-link">
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="money-transfer" className="nav-link">
                                        Money Transfer
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="contact-us" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <NavLink className="font-bold " to="/sign-in">
                                        <Button variant="outline" className="w-full">
                                            Login
                                        </Button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="sign-up">
                                        <Button className="w-full">Get Started</Button>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}