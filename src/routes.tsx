import {createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Lsyout.tsx";
import GameDetailPage from "./pages/GameDetailPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'games/:slug', element: <GameDetailPage/>}
        ]
    }
])

export default router