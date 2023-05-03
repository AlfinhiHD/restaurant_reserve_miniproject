import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import resto from "../../assets/resto.jpg"
import DashboardReserveInfo from "../../elements/DashboardReserveInfo/DashboardReserveInfo.jsx"
import DashboardReserveDetails from "../../elements/DashboardReserveDetails/DashboardReserveDetails.jsx"


const DashboardDetails = () => {
    return (
        <div className="container">
            <div className="container"
                style={{
                    backgroundColor: "#FFF0DE", borderRadius: "50px",
                    border: "1px solid #000000"
                }}>
                <div className="row">
                    <div className="col-md-12">
                        <img
                            className="py-3"
                            style={{
                                width: "980px",
                                height: "250px",
                                borderRadius: 50
                            }} src={resto} />
                    </div>
                    <DashboardReserveDetails
                        name="Alfinhi Hajid Dhia"
                        person="4"
                        date="04/19/2023"
                        time="Dinner (18.00 - 20.00)"
                        note="Duduk di smoke area"
                    />
                </div>

            </div>

        </div>
    )
} 
export default DashboardDetails