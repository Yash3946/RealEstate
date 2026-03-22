import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AllUserList } from "../components/admin/AllUserList";
import BuyerHome from "../components/buyer/BuyerHome";


const router = createBrowserRouter([
    {path:"/",element:<Login/>},
    {path:"/signup",element:<Signup/>},

    {path:"/buyer",element:<BuyerHome/>},
    {
        path:"/admin",element:<AdminSidebar/>,
        children:[
            {path:"allusers",element:<AllUserList/>}
        ]
    }
])

const AppRouter = ()=>{
    return <RouterProvider router={router}></RouterProvider>
}
export default AppRouter