import UserAccountMainHeader from "@/components/user-account-main-header";
import UserAccountRoutes from "../routes";
import { Suspense } from "react"
import Loader from "@/components/Loader";

export default function UserDashboard() {
    return (
        <main className="w-full h-screen flex flex-col items-center bg-gray-100/50">
            <UserAccountMainHeader />
            <section className="mx-auto h-full w-full overflow-y-auto p-5">
                <Suspense fallback={<Loader size={50}/>}>
                    <UserAccountRoutes />
                </Suspense>
            </section>
        </main >
    )
}