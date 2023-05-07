import { useNavigate } from "react-router-dom"
import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import InputField from "../../elements/InputField/InputField"
import InputSelect from "../../elements/InputSelect/InputSelect"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton/SecondaryButton"
import TextArea from "../../elements/TextArea/TextArea"
import InputSelectMenu from "../../elements/InputSelectMenu/InputSelectMenu"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from "react"
import ReserveContext from "../../context/ReserveContext"

const ReserveFormPage = () => {

    const navigate = useNavigate();
    const {reserve, setReserve} = useContext(ReserveContext)


    const formik = useFormik({
        initialValues: {
            reserve_name: "",
            person: "",
            date: "",
            time: "",
            menuselected: "",
            notes: ""
        },
        validationSchema: Yup.object().shape({
            reserve_name: Yup.string()
                .matches(/^[a-zA-Z0-9 ]+$/, 'Reserve Name must not contain symbols')
                .min(6, 'Reserve Name must be at least 6 characters')
                .required('The Reserve Name field must be filled in'),
            person: Yup.string()
                .required('The person field must be filled in'),
            date: Yup.string()
                .required('The date field must be filled in'),
            time: Yup.string()
                .required('The time field must be filled in'),
            menuselected: Yup.string()
                .required('The select menu field must be filled in'),
            notes: Yup.string()
                .max(50, 'Notes must not exceed 50 characters')
                .required('The notes field must be filled in'),
        }),
        onSubmit: (values, actions) => {
            actions.resetForm();
            setReserve(values)
            navigate('/confirmation')

        },
    })

    return (
        <>
            <ContentTitle title="Please input reservation form / 符狸素 音羽斗 玲競芭胎苑" />
            <form className="mt-5" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="ms-4">
                            <InputField
                                label="Reserve Name"
                                htmlFor="reserve_name"

                                type="text"
                                id="reserve_name"
                                name="reserve_name"
                                value={formik.values.reserve_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.reserve_name && formik.touched.reserve_name
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.reserve_name && formik.touched.reserve_name && (
                                <small className='text-danger ms-5'>{formik.errors.reserve_name}</small>
                            )}
                        </div>


                        <div className="mt-4 ms-4">
                            <InputField
                                label="Person"
                                htmlFor="person"

                                type="number"
                                id="person"
                                name="person"
                                value={formik.values.person}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.person && formik.touched.person
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.person && formik.touched.person && (
                                <small className='text-danger ms-5'>{formik.errors.person}</small>
                            )}
                        </div>

                        <div className="mt-4 ms-4">
                            <InputField
                                label="Date"
                                htmlFor="date"

                                type="date"
                                id="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.date && formik.touched.date
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.date && formik.touched.date && (
                                <small className='text-danger ms-5'>{formik.errors.date}</small>
                            )}
                        </div>
                        <div className="mt-4 ms-4">
                            <InputSelect
                                label="Time"
                                htmlFor="time"

                                id="time"
                                name="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.time && formik.touched.time
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.time && formik.touched.time && (
                                <small className='text-danger ms-5'>{formik.errors.time}</small>
                            )}
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="">
                            <InputSelectMenu
                                label="Select Menu"
                                htmlFor="menuselected"
                                id="menuselected"
                                name="menuselected"
                                value={formik.values.menuselected}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.menuselected && formik.touched.menuselected
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.menuselected && formik.touched.menuselected && (
                                <small className='text-danger ms-5'>{formik.errors.menuselected}</small>
                            )}
                        </div>
                        <div className="mt-5">
                            <TextArea
                                label="Notes"
                                htmlFor="notes"
                                style={{}}

                                rows="5"
                                type="text"
                                id="notes"
                                name="notes"
                                value={formik.values.notes}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                inputclass={
                                    formik.errors.notes && formik.touched.notes
                                        ? 'form-control mt-1 is-invalid'
                                        : 'form-control mt-1'
                                }
                            />
                            {formik.errors.notes && formik.touched.notes && (
                                <small className='text-danger ms-5'>{formik.errors.notes}</small>
                            )}
                        </div>
                        <div className="mt-5 d-flex">
                            <PrimaryButton
                                className="me-5 button"
                                label="Reserve"
                                type="submit"
                                width="100px"
                                height="45px"
                                fontsize="15px"
                            />
                            <SecondaryButton
                                className="button"
                                label="Back to menu"
                                type="button"
                                width="140px"
                                height="45px"
                                fontsize="15px"
                                onClick={() => navigate('/menu')}
                            />
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}
export default ReserveFormPage