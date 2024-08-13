import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/index.tsx";
import { rootLoader } from "./loaders/rootLoader.ts";
import Register from "./pages/register/index.tsx";
import { Dashboard } from "./pages/account/dashboard/index.tsx";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { Profile } from "./pages/account/profile/index.tsx";
import { Transactions } from "./pages/account/transactions/index.tsx";
import { EditProfileForm } from "./pages/account/profile/EditProfileForm.tsx";
import { profileLoader } from "./loaders/profileLoader.ts";
import { Home } from "./pages/home/index.tsx";
import { Deposit } from "./pages/deposit/index.tsx";
import { AccountLayout } from "./layouts/AccountLayout/index.tsx";
import { Notifications } from "./pages/notifications/index.tsx";
import { Toaster } from "@/components/ui/toaster";
import { ResetPassword } from "./pages/reset-password/index.tsx";
import { ErrorBoundary } from "./components/ui/error-boundary.tsx";
import { CreateGoalForm } from "./pages/account/goals/create-goal.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/account/*",
    element: <AccountLayout />,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "history",
        element: <Transactions />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <EditProfileForm />,
        loader: profileLoader,
      },
      {
        path: "goals/*", 
        children: [
          {
            path: "create-goal",
            element: <CreateGoalForm/>
          }
        ]
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
