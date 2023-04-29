import Footer from "../../components/Footer/Footer.jsx"
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding.jsx"
import InputField from "../../elements/InputField/InputField.jsx"
import LoginTitle from "../../elements/LoginTitle/LoginTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import TextArea from "../../elements/TextArea/TextArea.jsx"

const RegisterPage = () => {
    return (
        <>
            <NavbarLanding />
            <section style={{ height: 800, backgroundColor: "#B1464A" }}>
                <br />
                <div className="mx-auto" style={{ height: 700, width: 450, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
                    <LoginTitle
                        title="Register / 礼次主手"
                    />
                    <form className="mt-5">
                    <div className="ms-4">
                            <InputField
                                label="Address"
                                htmlFor="username"

                                type="text"
                                id="username"
                                name="username"
                            // value={props.value}
                            // onChange={props.onChange}
                            // onBlur={props.onBlur}
                            // inputClass={props.inputClass}
                            />
                        </div>
                        
                        <div className="mt-4 ms-4">
                            <InputField
                                label="Email"
                                htmlFor="email"

                                type="email"
                                id="email"
                                name="email"
                            // value={props.value}
                            // onChange={props.onChange}
                            // onBlur={props.onBlur}
                            // inputClass={props.inputClass}
                            />
                        </div>
                        <div className="mt-4 ms-4">
                            <InputField
                                label="Password"
                                htmlFor="password"

                                type="password"
                                id="password"
                                name="password"
                            // value={props.value}
                            // onChange={props.onChange}
                            // onBlur={props.onBlur}
                            // inputClass={props.inputClass}
                            />
                        </div>
                        <div className="mt-4 ms-4">
                            <TextArea
                                label="Address"
                                htmlFor="address"

                                rows="3"
                                type="text"
                                id="address"
                                name="address"
                            // value={props.value}
                            // onChange={props.onChange}
                            // onBlur={props.onBlur}
                            // inputClass={props.inputClass}
                            />
                        </div>


                        <div className="mt-5 d-flex justify-content-center align-items-center">
                            <PrimaryButton
                                label="Register"
                                type="submit"
                                width="125px"
                                height="55px"
                            />
                        </div>
                    </form>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default RegisterPage