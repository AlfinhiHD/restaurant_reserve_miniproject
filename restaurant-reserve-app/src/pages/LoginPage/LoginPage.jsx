import Footer from "../../components/Footer/Footer.jsx"
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding.jsx"
import InputField from "../../elements/InputField/InputField.jsx"
import LoginTitle from "../../elements/LoginTitle/LoginTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"

const LoginPage = () => {
    return (
        <>
            <LoginTitle
                title="Login / 炉仁"
            />
            <form className="mt-5">
                <div className="ms-4">
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
                    <a style={{ color: "#000000", textDecoration: "none" }} href="#">Don't have an account yet?</a>
                </div>

                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <PrimaryButton
                        label="Login"
                        type="submit"
                        width="125px"
                        height="55px"
                    />
                </div>
            </form>
        </>
    )
}

export default LoginPage