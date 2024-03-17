import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../Home/Home";
import SignUp from "../../Components/Signup/SignUp";
import Login from "../../Components/LogIn/Login";


const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])
export default Route;