import Footer from "../../components/Footer/Footer.jsx"
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding.jsx"
import InputField from "../../elements/InputField/InputField.jsx"
import LoginTitle from "../../elements/LoginTitle/LoginTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import TextArea from "../../elements/TextArea/TextArea.jsx"

import { useFormik } from 'formik';
import uuid from 'react-uuid';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"

import { AddUser } from "../../helpers/gqlHasura.js"
import { useMutation } from "@apollo/client"

const RegisterPage = () => {

    const [addUser] = useMutation(AddUser)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            userid: uuid(),
            username: "",
            email: "",
            password: "",
            address: "",
            usertoken: nanoid()
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .matches(/^[a-zA-Z0-9 ]+$/, 'Username must not contain symbols')
                .min(6, 'username must be at least 6 characters')
                .required('The username field must be filled in'),
            email: Yup.string()
                .email('Invalid email address')
                .required('The email field must be filled in'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('The password field must be filled in'),
            address: Yup.string()
                .max(50, 'Address must not exceed 50 characters')
                .required('The address field must be filled in'),
        }),
        onSubmit: (values, actions) => {
            actions.resetForm();
            addUser({
                variables: {
                    object: {
                        userid: uuid(),
                        username: values.username,
                        email: values.email,
                        password: values.password,
                        address: values.address,
                        usertoken: nanoid()
                    },
                },
            })
    navigate('/login')

},
    })

return (
    <>
        <div className="mx-auto" style={{ height: 750, width: 450, backgroundColor: "#FFF0DE", borderRadius: "50px" }}>
            <LoginTitle
                title="Register / 礼次主手"
            />
            <form className="mt-5" onSubmit={formik.handleSubmit}>
                <div className="ms-4">
                    <InputField
                        label="Username"
                        htmlFor="username"

                        type="text"
                        id="username"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        inputclass={
                            formik.errors.username && formik.touched.username
                                ? 'form-control mt-1 is-invalid'
                                : 'form-control mt-1'
                        }
                    />
                </div>
                {formik.errors.username && formik.touched.username && (
                    <small className='text-danger ms-5'>{formik.errors.username}</small>
                )}

                <div className="mt-4 ms-4">
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
                <div className="mt-4 ms-4">
                    <TextArea
                        label="Address"
                        htmlFor="address"
                        style={{}}

                        rows="3"
                        type="text"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        inputclass={
                            formik.errors.address && formik.touched.address
                                ? 'form-control mt-1 is-invalid'
                                : 'form-control mt-1'}
                    />
                </div>
                {formik.errors.address && formik.touched.address && (
                    <small className='text-danger ms-5'>{formik.errors.address}</small>
                )}
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
    </>
)
}

export default RegisterPage

