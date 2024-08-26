import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "@/components/Loader";

const Homepage = lazy(() => import("@/layouts/root-layout/pages/home"))
const Login = lazy(() => import("@/layouts/root-layout/pages/auth/login"))

export default function RootRoutes() {
    return (
        <Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
            <Loader size={50} />
        </div>}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/auth">
                    <Route path="register" element={<Login />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Suspense>
    )
}