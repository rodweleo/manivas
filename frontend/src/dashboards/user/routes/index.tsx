import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react"
import Loader from "@/components/Loader";


const Dashboard = lazy(() => import("../pages/dashboard"))
const TransactionsPage = lazy(() => import("../pages/transactions"))
const CreditScorePage = lazy(() => import("../pages/credit-score"))
const UserAnalytics = lazy(() => import("../pages/analytics"))
export default function UserAccountRoutes() {
    return (
        <Suspense fallback={<div className="w-full h-screen flex flex-col items-center justify-center">
            <Loader size={50} />
        </div>}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/credit-score" element={<CreditScorePage />} />
                <Route path="/analytics" element={<UserAnalytics />} />
            </Routes>
        </Suspense>
    )
}