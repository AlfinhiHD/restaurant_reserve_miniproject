import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import NavbarLanding from '../../components/NavbarLanding/NavbarLanding'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import Footer from '../../components/Footer/Footer'

const OffLogin = () => {
    return (
        <>
            <NavbarLanding />
            <section style={{ height: 800, backgroundColor: "#B1464A" }}>
                <br />
                <Outlet />
            </section>
            <Footer />
        </>
    )
}
export default OffLogin