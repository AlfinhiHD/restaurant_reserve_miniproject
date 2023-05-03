import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarLanding from '../../components/NavbarLanding/NavbarLanding'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import Footer from '../../components/Footer/Footer'

const OffLogin = () => {
    return (
        <>
            <NavbarLanding />
            <section style={{ height: 700, backgroundColor: "#B1464A" }}>
                <br />
                <div className="mx-auto" style={{ height: 650, width: 450, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </Router>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default OffLogin