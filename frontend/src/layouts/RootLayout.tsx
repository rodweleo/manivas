import { NewsLetterForm } from "@/components/forms/NewsLetterForm";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export const RootLayout = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };
  return (
    <main className="overflow-x-hidden">
      <header className="w-full flex justify-around items-center  h-20 sticky top-0 z-50 filter backdrop-blur-lg">
        <div className="logo">
          <img src="" alt="Manivas" />
          <h1 className="font-bold">Manivas</h1>
        </div>
        <button
          onClick={() => setIsNavBarOpen(true)}
          className="hidden max-xl:flex"
        >
          <i className="fa-solid fa-bars font-bold scale-110 cursor-pointer"></i>
        </button>
        <nav
          className={`bg-transparent w-3/4 flex max-xl:flex-col justify-around items-center max-xl:bg-white max-xl:w-full max-xl:h-screen transition-all duration-300 max-xl:absolute top-0 ${
            isNavBarOpen ? "left-0" : "left-full"
          }`}
        >
          <button onClick={closeNavBar}>
            <i className="fa-solid fa-close absolute hidden top-0 right-0 m-5 scale-125 max-xl:flex cursor-pointer"></i>
          </button>
          <ul className="flex max-xl:flex-col gap-8 font-bold items-center">
            <li>
              <NavLink to="/" className="nav-link" onClick={closeNavBar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="how-to-use"
                className="nav-link"
                onClick={closeNavBar}
              >
                How To Use
              </NavLink>
            </li>
            <li>
              <NavLink
                to="why-manivas"
                className="nav-link"
                onClick={closeNavBar}
              >
                Why Manivas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="money-transfer"
                className="nav-link"
                onClick={closeNavBar}
              >
                Money Transfer
              </NavLink>
            </li>
            <li>
              <NavLink to="help" className="nav-link" onClick={closeNavBar}>
                Help
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact-us"
                className="nav-link"
                onClick={closeNavBar}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="flex max-xl:flex-col items-center gap-5">
            <li>
              <NavLink
                className="nav-link font-bold"
                to="/login"
                onClick={closeNavBar}
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="register"
                onClick={closeNavBar}
                className="nav-link btn-primary px-5 py-2 rounded-full text-white font-bold"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <Outlet />
      </article>
      <footer className="p-5 items-center w-full space-y-5">
        <section className="flex flex-wrap gap-5 justify-between">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Quick Links</h2>
            <ul className="font-semibold text-slate-500 space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Features</Link>
              </li>
            </ul>
          </div>
          <NewsLetterForm />
        </section>
        <Separator />
        <p className="text-center">
          &copy; Copyright {new Date().getFullYear()} Manivas. All Rights
          reserved.
        </p>
      </footer>
    </main>
  );
};
