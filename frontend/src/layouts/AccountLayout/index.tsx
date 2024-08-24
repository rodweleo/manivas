import { Outlet } from "react-router-dom"
import "../../App.css"
import UserAccountMainAccount from "@/components/user-account-main-header";


export const AccountLayout = () => {

    return (
        <main className="w-full h-screen fixed flex flex-col items-center ">
            <UserAccountMainAccount />
            <article className="h-full w-full overflow-y-auto p-1.5">
                <Outlet />
            </article>
        </main >
    )
}