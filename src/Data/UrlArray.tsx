import NotFoundPage from "../Pages/404error/NotFound";
import LoginPage from "../Pages/Login/Login";
import MonitoringPage from "../Pages/Monitoring/MonitoringPage";

interface UrlPage{
    name: string,
    element: JSX.Element,
    url: string

}

export const AllPage: UrlPage[]= [
    {
        name: "Server_Page",
        element: <MonitoringPage />,
        url: "/server"
    },
    {
        name: "Login_Page",
        element: <LoginPage />,
        url: "/auth"
    },
    {   name: "NorFound_Page",
        element: <NotFoundPage />,
        url: "*"
    }
]

