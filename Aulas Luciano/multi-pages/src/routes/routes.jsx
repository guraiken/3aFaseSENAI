import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import { Main } from "../layouts/Main";

export const router = createBrowserRouter([
    {
        element: <Main/>, 
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/sobre", element: <Sobre/>
            }
        ]
    }

    // {path:"/", element: <Home/>},
    // {path:"/sobre", element: <Sobre/>},
])
