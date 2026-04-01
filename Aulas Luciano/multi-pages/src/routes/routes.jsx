import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import { Main } from "../layouts/Main";
import { Login } from "../pages/Login";
import Blog from "../pages/Blog";
import { PostDetail } from "../pages/Blog/PostDetail";
import { Authors } from "../pages/Authors";
import AuthorsDetail from "../pages/Authors/AuthorsDetail";

export const router = createBrowserRouter([
    {
        element: <Main/>, 
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "sobre", element: <Sobre/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: 'autores',
                element: <Authors/>
            },
            {
                path: 'post/:id',
                element: <PostDetail/>
            },
            {
                path: 'autores/:id',
                element: <AuthorsDetail/>
            },
        ]
    },
    {
        path: 'login',
        element: <Login/>
    }
])
