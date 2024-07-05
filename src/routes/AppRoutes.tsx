import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
]);

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes;