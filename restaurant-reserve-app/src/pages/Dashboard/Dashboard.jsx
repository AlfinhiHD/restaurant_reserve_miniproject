import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetReservationData } from "../../helpers/gqlHasura.js";
import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx";
import resto from "../../assets/resto.jpg"
import DashboardReserveInfo from "../../elements/DashboardReserveInfo/DashboardReserveInfo.jsx"
import Loader from "../../elements/Loader/Loader.jsx";
import DashboardNotReserve from "../DashboardNotReserve/DashboardNotReserve.jsx";

const Dashboard = () => {

    const navigate = useNavigate();
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const { loading, data } = useQuery(GetReservationData, {
        variables: { userid: user.userid }
    })

    return (
        <>
            {loading ?
                <div className="d-flex justify-content-center">
                    <Loader
                        height={550}
                        width={80}
                        secondaryColor="#B1464A"
                        color="#FFF0DE"
                    />
                </div>
                :
                <div className="container">
                    {data.reservation[0] ?
                        <>
                            <ContentTitle title="Here’s your reservation! / 弥和得" />
                            <div style={{ padding: "10px", maxHeight: "500px", overflowY: "scroll" }}>

                                {data?.reservation.map((data) => (
                                    <div className="container mb-3"
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
                                                    name={data.reserve_name}
                                                    date={data.date}
                                                    time={data.time}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        <DashboardNotReserve />}
                </div>}
        </>

    )
}
export default Dashboard