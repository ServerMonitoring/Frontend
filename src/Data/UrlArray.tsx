import NotFoundPage from "../Pages/404error/NotFound";
import ErrorServer from "../Pages/500error/ErrorServer";
import LoginPage from "../Pages/Login/Login";
import MonitoringPage from "../Pages/Monitoring/MonitoringPage";
import SettingsPage from "../Pages/Setting/Setting";

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
    },
    {   name: "ErrorServer_Page",
        element: <ErrorServer />,
        url: "/errorserver"
    },    {   name: "Setting_Page",
        element: <SettingsPage />,
        url: "/setting"
    }
]

// Функция для получения элемента по имени
export function getPageElementByName(name: string): JSX.Element | null {
    const page = AllPage.find(page => page.name === name);
    return page ? page.element : null;
}