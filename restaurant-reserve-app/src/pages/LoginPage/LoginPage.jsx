import Footer from "../../components/Footer/Footer.jsx"
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding.jsx"

const LoginPage = () => {
    return (
        <>
        <NavbarLanding />
        <section style={{ height: 700, backgroundColor: "#B1464A" }}>
            <div className="mx-auto my-auto" style={{ height: 550, width: 500, backgroundColor: "#FFF0DE", borderRadius:"50px" }}>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default LoginPage