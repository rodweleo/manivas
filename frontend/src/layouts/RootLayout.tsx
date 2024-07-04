import { NewsLetterForm } from "@/components/forms/NewsLetterForm";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export const RootLayout = () => {
  const { dimensions } = useWindowDimensions()


  return (
    <main className="w-full">
      <header className="w-full flex justify-around items-center h-20 sticky top-0 z-50 filter backdrop-blur-lg">
        <div className="logo">
          <img src="" alt="Manivas" />
          <h1 className="font-bold">Manivas</h1>
        </div>

        {dimensions.width < 900 ? <MobileNav/> : <WebNav/>}
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


const MobileNav = () => {
  return <Sheet>
    <SheetTrigger><Button type="button" className="focus:outline-none hover:bg-transparent p-0 bg-transparent text-black text-xl"><RiMenu3Fill /></Button></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Manivas</SheetTitle>
        <SheetDescription>
          <p>Simplifying Payments for Growing Businesses</p>
          <nav
            className="flex flex-col justify-between gap-20 mt-5"
          >
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink to="/" className="nav-link" >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="how-to-use"
                  className="nav-link"

                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="why-manivas"
                  className="nav-link"

                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="money-transfer"
                  className="nav-link"

                >
                  Money Transfer
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="contact-us"
                  className="nav-link"

                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink
                  className="font-bold "
                  to="/sign-in"

                >
                  <Button variant="outline" className="w-full">Login</Button>
                </NavLink>
              </li>
              <li>
                <NavLink to="sign-up" >
                  <Button className="w-full">Get Started</Button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

}

const WebNav = () => {
  return <nav
  className="flex items-center justify-between gap-20"
>
  <ul className="flex gap-10">
    <li>
      <NavLink to="/" className="nav-link" >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="how-to-use"
        className="nav-link"

      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="why-manivas"
        className="nav-link"

      >
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink
        to="money-transfer"
        className="nav-link"

      >
        Money Transfer
      </NavLink>
    </li>

    <li>
      <NavLink
        to="contact-us"
        className="nav-link"

      >
        Contact Us
      </NavLink>
    </li>
  </ul>
  <ul className="flex gap-5">
    <li>
      <NavLink
        className="font-bold "
        to="/sign-in"

      >
        <Button variant="outline" className="w-full">Login</Button>
      </NavLink>
    </li>
    <li>
      <NavLink to="sign-up" >
        <Button className="w-full">Get Started</Button>
      </NavLink>
    </li>
  </ul>
</nav>

}