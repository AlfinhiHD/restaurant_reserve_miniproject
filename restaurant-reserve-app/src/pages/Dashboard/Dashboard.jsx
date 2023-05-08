import PrimaryButton from "../../elements/PrimaryButton/PrimaryButton.jsx"
import image from "../../assets/dashboardnotreserve.png"
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetReservationData } from "../../helpers/gqlHasura.js";
import ContentTitle from "../../elements/ContentTitle/ContentTitle.jsx";
import resto from "../../assets/resto.jpg"
import DashboardReserveInfo from "../../elements/DashboardReserveInfo/DashboardReserveInfo.jsx"

const Dashboard = () => {

    const navigate = useNavigate();
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);

    const { data } = useQuery(GetReservationData, {
        variables: { userid: user.userid }
    })

    return (
        <div className="container">
            {data ?
                <>
                    <ContentTitle title="Here’s your reservation! / 弥和得" />
                    <div style={{padding:"10px", maxHeight: "500px", overflowY: "scroll" }}>

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
                            onClick={() => navigate('/menu')}
                        />
                    </div>
                </div>}




        </div>
    )
}
export default Dashboard