import { Route, Routes } from "react-router-dom";
import MonitoringPage from "../Pages/Monitoring/MonitoringPage";
import LoginPage from "../Pages/Login/Login";
import { AllPage } from "../Data/UrlArray";

export default function RouterApp(){

    return(
        <>
            <Routes>
               {
                AllPage.map((Page)=>{
                        return(
                            <Route path={Page.url} element={Page.element} />
                        )
                })
               }
            </Routes>
        </>
    )
}