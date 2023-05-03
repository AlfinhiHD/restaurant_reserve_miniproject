import DetailsTitle from "../DetailsTitle/DetailsTitle"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import SecondaryButton from "../SecondaryButton/SecondaryButton"
import "./DashboardReserveDetails.css"

const DashboardReserveDetails = (props) => {
    return (
        <div className="reservedetails">
            <div className="row">
                <div className="col-md-3 ps-5">
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Reserve Name :" />
                        <p>{props.name}</p>
                    </div>
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Person :" />
                        <p>{props.person}</p>
                    </div>
                    <div className="mt-2 mb-4">
                        <DetailsTitle title="Date :" />
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className="col-md-3 ps-5">
                    <div className="mt-2 mb-5">
                        <DetailsTitle title="Time :" />
                        <p>{props.time}</p>
                    </div>
                    <div className="mt-2 mb-4">
                        <DetailsTitle title="Note :" />
                        <p>{props.note}</p>
                    </div>

                </div>
                <div className="col-md-6 mt-1">
                    <div className="d-flex flex-column align-items-center">
                        <DetailsTitle title="Menu" />
                        <div
                            className="pe-5"
                            style={{ maxHeight: 130, overflowY: "scroll" }}>
                            <p>Salmon Sushi - 2pcs</p>
                            <p>Makimono Sushi - 5pcs</p>
                            <p>Crab Sushi - 10pcs</p>
                            <p>Crab Sushi - 10pcs</p>
                            <p>Crab Sushi - 10pcs</p>
                        </div>
                        <div className="mt-5 d-flex justify-content-between">
                            <PrimaryButton
                                className="button me-5"
                                label="Reschedule"
                                type="button"
                                width="100px"
                                height="35px"
                                fontsize="13px"
                            />
                            <SecondaryButton
                                className="button"
                                label="Cancel Reservation"
                                type="button"
                                width="140px"
                                height="35px"
                                fontsize="13px"
                            />
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
export default DashboardReserveDetails