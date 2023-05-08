import { useNavigate } from "react-router-dom"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import TertiaryButton from "../TertiaryButton/TertiaryButton"
import { GetDetailReserve, GetReservationData, UpdateReservation } from "../../helpers/gqlHasura"
import { useMutation } from "@apollo/client"
import { useFormik } from "formik"
import * as Yup from 'yup';
import InputField from "../InputField/InputField";
import InputSelect from "../InputSelect/InputSelect";

const ModalEdit = (props) => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const navigate = useNavigate()
    const [updateReservation] = useMutation(UpdateReservation, {
        refetchQueries: [
            {
                query: GetReservationData,
                variables: {
                    userid: user.userid
                }
            },
            {
                query: GetDetailReserve,
                variables: {
                    userid: user.userid,
                    reservation_id: props.id
                }
            }
        ],
    });

    const formik = useFormik({
        initialValues: {
            date: props.date,
            time: props.time,
        },
        validationSchema: Yup.object().shape({
            date: Yup.string()
                .required('The date field must be filled in'),
            time: Yup.string()
                .required('The time field must be filled in'),
        }),
        onSubmit: (values) => {
            updateReservation({
                variables: {
                    reservation_id: props.id,
                    time: values.time,
                    date: values.date
                }
            })
            navigate('/dashboard')
        },
    })

    return (
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div style={{ backgroundColor: "#B1464A" }} className="modal-content">
                    <div className="modal-header">
                        <h1 style={{ color: "#FFF0DE" }} className="modal-title fs-5" id="exampleModalLabel">Confirm reservation?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-body">
                            <div className="ms-4">
                                <InputField
                                    label="Date"
                                    htmlFor="date"

                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formik.values.date}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.date && formik.touched.date
                                            ? 'form-control mt-1 is-invalid'
                                            : 'form-control mt-1'
                                    }
                                />
                                {formik.errors.date && formik.touched.date && (
                                    <small className='text-white ms-5'>{formik.errors.date}</small>
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
                                    className={
                                        formik.errors.time && formik.touched.time
                                            ? 'form-control mt-1 is-invalid'
                                            : 'form-control mt-1'
                                    }
                                />
                                {formik.errors.time && formik.touched.time && (
                                    <small className='text-white ms-5'>{formik.errors.time}</small>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <TertiaryButton
                                className="button me-5"
                                label="Close"
                                type="button"
                                width="80px"
                                height="45px"
                                fontsize="15px"
                                databsdismiss="modal"
                            />
                            <PrimaryButton
                                className="button"
                                label="Confirm"
                                type="submit"
                                width="100px"
                                height="45px"
                                fontsize="15px"
                                databstoggle="modal"
                                databstarget="#editModal"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModalEdit