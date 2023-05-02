import NavbarOnLogin from "../../components/NavbarOnLogin/NavbarOnLogin"
import Sidebar from "../../components/Sidebar/Sidebar"

const OnLogin = () => {
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
                            style={{ height: 600, backgroundColor: "#FFF0DE", borderRadius:"50px" }}>
                                <h1>Content</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat mauris ac metus rhoncus interdum.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default OnLogin