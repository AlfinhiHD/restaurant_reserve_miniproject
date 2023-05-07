import { useNavigate } from "react-router-dom"
import ContentTitle from "../../elements/ContentTitle/ContentTitle"
import InputField from "../../elements/InputField/InputField"
import InputSelect from "../../elements/InputSelect/InputSelect"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../elements/SecondaryButton/SecondaryButton"
import TextArea from "../../elements/TextArea/TextArea"

const ReserveFormPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <ContentTitle title="Please input reservation form / 符狸素 音羽斗 玲競芭胎苑" />
            <div className="row">
                <div className="col-md-6">
                    <div className="ms-4">
                        <InputField
                            label="Reserve Name"
                            htmlFor="reserve-name"

                            type="text"
                            id="reserve-name"
                            name="reserve-name"
                        // value={props.value}
                        // onChange={props.onChange}
                        // onBlur={props.onBlur}
                        // inputClass={props.inputClass}
                        />
                    </div>
                    <div className="mt-4 ms-4">
                        <InputField
                            label="Person"
                            htmlFor="person"

                            type="number"
                            id="person"
                            name="person"
                        // value={props.value}
                        // onChange={props.onChange}
                        // onBlur={props.onBlur}
                        // inputClass={props.inputClass}
                        />
                    </div>

                    <div className="mt-4 ms-4">
                        <InputField
                            label="Date"
                            htmlFor="date"

                            type="date"
                            id="date"
                            name="date"
                        // value={props.value}
                        // onChange={props.onChange}
                        // onBlur={props.onBlur}
                        // inputClass={props.inputClass}
                        />
                    </div>
                    <div className="mt-4 ms-4">
                        <InputSelect
                            label="Date"
                            htmlFor="date"

                            type="date"
                            id="date"
                            name="date"
                        />
                    </div>

                    <div className="mt-4 ms-4">
                        <TextArea
                            label="Notes"
                            htmlFor="address"
                            style={{}}

                            rows="5"
                            type="text"
                            id="address"
                            name="address"
                        // value={props.value}
                        // onChange={props.onChange}
                        // onBlur={props.onBlur}
                        // inputClass={props.inputClass}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-5 d-flex">
                        <PrimaryButton
                            className="me-5 button"
                            label="Reserve"
                            type="button"
                            width="100px"
                            height="45px"
                            fontsize="15px"
                            onClick={() => navigate('/confirmation')}
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

        </>
    )
}
export default ReserveFormPage