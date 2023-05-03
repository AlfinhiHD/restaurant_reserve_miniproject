import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import resto from "../../assets/resto.jpg"
import DashboardReserveInfo from "../../elements/DashboardReserveInfo/DashboardReserveInfo.jsx"


const DashboardOnReserve = () => {
    return (
        <div className="container">
            <ContentTitle title="Here’s your reservation! / 弥和得" />

            <div className="container"
                style={{
                    backgroundColor: "#FFF0DE", borderRadius: "50px",
                    border: "1px solid #000000"
                }}>
                <div className="row">
                    <div className="col-md-3">
                        <img
                            className="py-3"
                            style={{
                                width: "240px",
                                height: "200px",
                                borderRadius: 50
                            }} src={resto} />
                    </div>
                    <div className="col-md-3 mt-4 ms-5">
                        <DashboardReserveInfo
                            name="Alfinhi Hajid Dhia"
                            date="18/4/2023"
                            time="19.00 - 20.00"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default DashboardOnReserve