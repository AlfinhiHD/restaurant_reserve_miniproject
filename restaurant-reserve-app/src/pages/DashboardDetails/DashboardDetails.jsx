import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx"
import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import resto from "../../assets/resto.jpg"
import DashboardReserveInfo from "../../elements/DashboardReserveInfo/DashboardReserveInfo.jsx"
import DashboardReserveDetails from "../../elements/DashboardReserveDetails/DashboardReserveDetails.jsx"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GetDetailReserve} from "../../helpers/gqlHasura.js"


const DashboardDetails = () => {

    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const { reservation_id } = useParams();

    const { data } = useQuery(GetDetailReserve, {
        variables: {
            userid: user.userid,
            reservation_id: reservation_id
        }
    })
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
                        name={data?.reservation[0].reserve_name}
                        person={data?.reservation[0].person}
                        date={data?.reservation[0].date}
                        time={data?.reservation[0].time}
                        note={data?.reservation[0].notes}
                        menu_id={data?.reservation[0].menu_id}
                        reservation_id={data?.reservation[0].reservation_id}
                    />
                </div>

            </div>

        </div>
    )
}
export default DashboardDetails