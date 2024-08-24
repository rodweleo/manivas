import { Routes, Route } from "react-router";
import { lazy } from "react"


const Dashboard = lazy(() => import("../pages/dashboard"))
const TransactionsPage = lazy(() => import("../pages/transactions"))
const CreditScorePage = lazy(() => import("../pages/credit-score"))
const UserAnalytics = lazy(() => import("../pages/analytics"))
export default function UserAccountRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/credit-score" element={<CreditScorePage />} />
            <Route path="/analytics" element={<UserAnalytics />} />
        </Routes>
    )
}