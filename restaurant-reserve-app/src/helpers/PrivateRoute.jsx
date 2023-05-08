import { Navigate, Outlet } from "react-router-dom"
import NavbarOnLogin from "../components/NavbarOnLogin/NavbarOnLogin"
import Sidebar from "../components/Sidebar/Sidebar"

const PrivateRoute = () => {
    let isLoggin

    // get token dari local storage
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    // check token dari local storage
    user?.usertoken ? isLoggin = true : isLoggin = false;

    if (!isLoggin) {
        return <Navigate to={'/'} replace />
    } else {
        return (
            <>
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
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default PrivateRoute

//setting routers