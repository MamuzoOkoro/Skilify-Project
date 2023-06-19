import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true
            }
        ]
    }
])