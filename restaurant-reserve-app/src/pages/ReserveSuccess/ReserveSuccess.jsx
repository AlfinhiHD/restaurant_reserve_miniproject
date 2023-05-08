import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"


const ReserveSuccess = () => {

    const navigate = useNavigate();

    return (
        <div className="container">

            <div className="row mt-5">
                <div className="col-md-6 ms-5">
                    <h1
                        style={{
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "50px"
                        }}
                        className="mt-5">Thank you for reserving! / 瑳无玖 矢苧鵜</h1>
                    <PrimaryButton
                        className="mt-5"
                        label="Back To Dashboard"
                        type="button"
                        width="180px"
                        height="55px"
                        onClick={() => navigate('/dashboard')}
                    />

                </div>
                <div className="col-md-6 mt-5">

                </div>
            </div>

        </div>
    )
}
export default ReserveSuccess