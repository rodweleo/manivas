import { Separator } from "@radix-ui/react-separator";
import { Link, NavLink } from "react-router-dom";
import SocialMediaLinks from "./social-media-links";

export default function RootMainFooter() {
    return (
        <footer className="p-5 items-center w-full space-y-5">
            <section className="flex justify-center gap-10">
                <div className="max-w-[400px] space-y-2">
                    <Link to="/" className="font-bold sm:text-4xl text-2xl flex items-end"><img src="/images/MANIVAS.png" width="40px" alt="Manivas" loading="lazy" />anivas</Link>
                    <p className="text-black text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit, dolor, sit amet consectetur adipisicing elit.</p>
                    <SocialMediaLinks />
                </div>
                <div className="flex flex-wrap gap-5 justify-between">
                    <div className="space-y-2">
                        <h2 className="font-semibold text-xl">Quick Links</h2>
                        <ul className="space-y-2.5">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/">Features</NavLink></li>
                            <li><NavLink to="/">About Us</NavLink></li>
                        </ul>
                    </div>

                </div>
            </section>

            <Separator />
            <section className="flex justify-between">
                <p className="flex justify-between">
                    <span>&copy; Copyright {new Date().getFullYear()} Manivas.</span> <span>All Rights
                        reserved.</span>
                </p>
                <ul className="flex gap-5">
                    <li><NavLink to="terms-of-use">Terms of Use</NavLink></li>
                    <li><NavLink to="privacy-policy">Privacy Policy</NavLink></li>
                </ul>

            </section>
        </footer>
    )
}