import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AllUserList } from "../components/admin/AllUserList";
import BuyerHome from "../components/buyer/BuyerHome";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { Forgotpassword } from "../components/forgotpassword";
import { ResetPassword } from "../components/ResetPassword";
import AllProperties from "../components/buyer/AllProperties";
import PropertyDetail from "../components/buyer/PropertyDetail";


const router = createBrowserRouter([
  // ================= AUTH =================
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgotpassword", element: <Forgotpassword /> },
  { path: "/resetpassword/:token", element: <ResetPassword /> },

  // ================= BUYER =================
  {
    path: "/buyer",
    element: (
      <ProtectedRoutes userRoles={["buyer"]}>
        <BuyerHome />
      </ProtectedRoutes>
    ),
  },

  {
    path: "/properties",
    element: (
      <ProtectedRoutes userRoles={["buyer"]}>
        <AllProperties />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/property/:id",
    element: (
      <ProtectedRoutes userRoles={["buyer"]}>
        <PropertyDetail />
      </ProtectedRoutes>
    ),
  },

  // ================= ADMIN =================
  {
    path: "/admin",
    element: (
      <ProtectedRoutes userRoles={["admin"]}>
        <AdminSidebar />
      </ProtectedRoutes>
    ),
    children: [
      { path: "allusers", element: <AllUserList /> },

      // // 🔥 FIX HERE
      // { path: "addLocation", element: <AdminLocationPage /> }
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;