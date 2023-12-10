import About from "../pages/About";
import Users from "../pages/Users";
import Home from "../pages/Home";

export const publicRoute = [
    {path: '/home', element: Home}
]

export const privateRoute = [
    {path: '/about', element: About},
    {path: '/users', element: Users},
    {path: '/home', element: Home},
]