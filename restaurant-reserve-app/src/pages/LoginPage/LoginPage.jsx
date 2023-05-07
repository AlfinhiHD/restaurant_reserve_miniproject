import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer.jsx"
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding.jsx"
import InputField from "../../elements/InputField/InputField.jsx"
import LoginTitle from "../../elements/LoginTitle/LoginTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import { ErrorMessage, useFormik } from "formik"
import * as Yup from 'yup';


import { UserLogin } from "../../helpers/gqlHasura.js"
import { useLazyQuery, useQuery } from "@apollo/client"
import { useContext, useEffect, useState } from "react"

const LoginPage = () => {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const [userLogin, { data }]= useLazyQuery(UserLogin);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email field must be filled in'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('The password field must be filled in')
        }),
        onSubmit: (values, actions) => {
            console.log(values)

            userLogin({
                variables: {
                    email: values.email,
                    password: values.password
                },
            })
        },
    })

    useEffect(() => {
        if (data && data.user && data.user.length > 0) {
          
          const { username, usertoken, userid } = data.user[0];
          console.log(username);
          console.log(usertoken);
          console.log(userid);

          localStorage.setItem("token", usertoken);
          setErrorMessage('')

          const user = {
            username,
            usertoken,
            userid
          }

          sessionStorage.setItem("user", JSON.stringify(user));

          navigate('/dashboard')

        } else if (data && data.user && data.user.length === 0) {
          setErrorMessage('Username or password is incorrect');
        }
      }, [data]);

    
    return (
        <>
            <div className="mx-auto" style={{ height: 550, width: 450, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
                <LoginTitle
                    title="Login / 炉仁"
                />
                <form className="mt-5" onSubmit={formik.handleSubmit}>
                    <div className="ms-4">
                        <InputField
                            label="Email"
                            htmlFor="email"

                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            inputclass={
                                formik.errors.email && formik.touched.email
                                    ? 'form-control mt-1 is-invalid'
                                    : 'form-control mt-1'}
                        />
                    </div>
                    {formik.errors.email && formik.touched.email && (
                        <small className='text-danger ms-5'>{formik.errors.email}</small>
                    )}
                    <div className="mt-4 ms-4">
                        <InputField
                            label="Password"
                            htmlFor="password"

                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            inputclass={
                                formik.errors.password && formik.touched.password
                                    ? 'form-control mt-1 is-invalid'
                                    : 'form-control mt-1'}
                        />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                        <small className='text-danger ms-5'>{formik.errors.password}</small>
                    )}
                    <p className='text-danger mt-3 ps-4 ms-5'>{errorMessage}</p>
                    <div className="mt-4 ms-4">
                        <a style={{ color: "#000000", textDecoration: "none" }} href="/register" >Don't have an account yet?</a>
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

            </div>

        </>
    )
}

export default LoginPage