import {createBrowserRouter, Outlet} from "react-router-dom";
import {AuthLayout} from "./pages/layout/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {AuthProvider} from "./context/AuthContext";
import {RootLayout} from "./pages/layout/RootLayout";
import {Home} from "./pages/Home";

export const router = createBrowserRouter([
    {
        element: <ContextWrapper/>,
        children: [
            {
                path: "/",
                element: <RootLayout/>,
                children: [
                    {index: true, element: <Home/>},
                    {path: "/channel", children : [
                            {path: "new", element: <h1>New Channel</h1>},
                        ]},
                ],
            },
            {
                element: <AuthLayout/>,
                children: [
                    {path: "login", element: <Login/>},
                    {path: "signup", element: <Signup/>},
                ],
            }],
    },
]);

function ContextWrapper() {
    return (
        <AuthProvider>
            <Outlet/>
        </AuthProvider>
    );
}
