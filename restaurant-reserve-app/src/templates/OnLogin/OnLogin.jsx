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

const OnLogin = () => {
    return (
        <>
            <Router>
                <NavbarOnLogin />
                <section className="pt-1" style={{ height: 700, backgroundColor: "#B1464A" }}>

                    <div className="ms-5 me-5 mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            <div className="col-md-9">
                                <div className="content p-3"
                                    style={{ height: 600, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>

                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard />} />
                                        <Route path="/dashboarddetails" element={<DashboardDetails />} />
                                        <Route path="/dashboardonreserve" element={<DashboardOnReserve />} />
                                        <Route path="/reservesuccess" element={<ReserveSuccess />} />
                                        <Route path="/reserveform" element={<ReserveFormPage />} />
                                        <Route path="/confirmation" element={<ConfirmationPage />} />
                                        <Route path="/menu" element={<MenuPage />} />
                                    </Routes>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </Router>

        </>
    )
}
export default OnLogin