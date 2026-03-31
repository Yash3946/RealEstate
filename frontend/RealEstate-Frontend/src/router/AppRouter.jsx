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
import Owner from "../components/owner/owner";
import AllPropertiesAdmin from "../components/admin/AllPropertiesAdmin";
import AdminVisitRequests from "../components/admin/AdminVisitRequests";

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
      { index: true, element: <AllUserList /> },

      // 👥 USERS
      { path: "allusers", element: <AllUserList /> },
      { path: "buyer", element: <AllUserList role="buyer" /> },
      { path: "owner", element: <AllUserList role="owner" /> },

      // 🏠 PROPERTIES
      { path: "properties", element: <AllPropertiesAdmin /> },

      // 📅 VISIT MANAGEMENT
      { path: "visits", element: <AdminVisitRequests /> },
    ],
  },

  // ================= OWNER =================
  {
    path: "/owner",
    element: (
      <ProtectedRoutes userRoles={["owner"]}>
        <Owner />
      </ProtectedRoutes>
    ),
  },

  // ================= DEFAULT REDIRECT =================
  {
    path: "*",
    element: <h1 className="text-center mt-10 text-2xl">404 - Page Not Found</h1>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;