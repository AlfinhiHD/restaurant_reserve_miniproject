import PrimaryButton from "../PrimaryButton/PrimaryButton"
import "./DashboardReserveInfo.css"

const DashboardReserveInfo = (props) => {
    return (
        <div className="reserveinfo">
            <p>Name :{props.name}</p>
            <p>Date :{props.date}</p>
            <p>Time :{props.time}</p>
            <PrimaryButton
                className="mb-2"
                label="Details"
                type="button"
                width="80px"
                height="40px"
                fontsize="15px"
            />
        </div>
    )
}
export default DashboardReserveInfo