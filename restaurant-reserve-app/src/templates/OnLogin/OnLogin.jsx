import NavbarOnLogin from "../../components/NavbarOnLogin/NavbarOnLogin"
import Sidebar from "../../components/Sidebar/Sidebar"
import Dashboard from "../../pages/Dashboard/Dashboard"
import DashboardDetails from "../../pages/DashboardDetails/DashboardDetails"
import DashboardOnReserve from "../../pages/DashboardOnReserve/DashboardOnReserve"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from "../../pages/ErrorPage/ErrorPage"
import ReserveSuccess from "../../pages/ReserveSuccess/ReserveSuccess"
import MenuPage from "../../pages/MenuPage/MenuPage"
import ReserveFormPage from "../../pages/ReserveFormPage/ReserveFormPage"
import ConfirmationPage from "../../pages/ConfirmationPage/ConfirmationPage"
import PrivateRoute from "../../helpers/PrivateRoute"
import LoginPage from "../../pages/LoginPage/LoginPage"
import RegisterPage from "../../pages/RegisterPage/RegisterPage"
import OffLogin from "../OffLogin/OffLogin"
import { useState } from "react"

const OnLogin = () => {


    return (
        <>
                <Router>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/dashboarddetails" element={<DashboardDetails />} />
                            <Route path="/dashboardonreserve" element={<DashboardOnReserve />} />
                            <Route path="/reservesuccess" element={<ReserveSuccess />} />
                            <Route path="/reserveform" element={<ReserveFormPage />} />
                            <Route path="/confirmation" element={<ConfirmationPage />} />
                            <Route path="/menu" element={<MenuPage />} />
                        </Route>
                        <Route element={<OffLogin />}>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Route>
                    </Routes>
                </Router>

        </>
    )
}
export default OnLogin