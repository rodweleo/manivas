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
import { HowToUse } from "./pages/how-to-use/index.tsx";
import { WhyManivas } from "./pages/why-manivas/index.tsx";
import { Help } from "./pages/help/index.tsx";
import { ContactUs } from "./pages/contact-us/index.tsx";
import { TopUp } from "./pages/topup/index.tsx";
import { AccountLayout } from "./layouts/AccountLayout/index.tsx";
import { Notifications } from "./pages/notifications/index.tsx";
import { Toaster } from "@/components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "how-to-use",
        element: <HowToUse />,
      },
      {
        path: "why-manivas",
        element: <WhyManivas />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/account/*",
    element: <AccountLayout />,
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
        path: "topup",
        element: <TopUp />,
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
