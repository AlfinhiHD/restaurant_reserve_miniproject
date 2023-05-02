import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import image from "../../assets/dashboardnotreserve.png"

const Dashboard = () => {
    return (
        <div className="container">

            <div className="row mt-5">
                <div className="col-md-6">
                    <img style={{ width: 500, height: 400 }} src={image} />
                </div>
                <div className="col-md-6 mt-5">
                    <h1
                        style={{
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "50px"
                        }}
                        className="mt-5">You didn't reserve anything.</h1>
                    <PrimaryButton
                        className="mt-5"
                        label="Do Reserve"
                        type="button"
                        width="125px"
                        height="55px"
                    />
                </div>
            </div>

        </div>
    )
}
export default Dashboard